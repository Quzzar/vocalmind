import { getNPCs, initDB } from './db/main';
import { initVocalMind, talkToNPC } from './mind/main';

// DB Setup //

initDB();

// VocalMind Setup //

initVocalMind();

// Server setup //

const server = Bun.serve({
  async fetch(req) {
    let response;
    const url = new URL(req.url);
    if (url.pathname === '/convo' && req.method === 'POST') {
      response = await handleConvoInput(req);
    } else if (url.pathname === '/npcs' && req.method === 'GET') {
      response = await handleNPCs(req);
    } else {
      response = new Response(
        JSON.stringify({
          status: 'error',
          message: '404 - Not found',
        }),
        { status: 404 }
      );
    }

    // Add CORS headers to the response
    response.headers.set('Access-Control-Allow-Origin', '*'); // Allow any origin
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  },
  port: 3000,
});
console.log(`Server started at http://${server.hostname}:${server.port}/ 😎`);

// Handle routes //

async function handleNPCs(req: Request) {
  return new Response(
    JSON.stringify({
      status: 'success',
      data: getNPCs(),
    })
  );
}

async function handleConvoInput(req: Request) {
  const npcToId = new URL(req.url).searchParams.get('to_id');
  const npcFromId = new URL(req.url).searchParams.get('from_id');
  if (!npcToId || !npcFromId) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'No NPC id found',
      }),
      { status: 400 }
    );
  }

  // Convert form data to blob
  const formdata = await req.formData();
  const file = formdata.get('file');
  if (!file) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'No audio file found',
      }),
      { status: 400 }
    );
  }
  const audio = new Blob([file as unknown as File], {
    type: 'audio/wav',
  });

  if (audio.size > 1200000) {
    return new Response('Audio file too large', { status: 400 });
  }

  // Send input audio file to VocalMind, output is a response audio file
  const output = await talkToNPC(parseInt(npcToId), parseInt(npcFromId), audio);

  if (output instanceof Blob && output.size > 0) {
    const response = new Response(output.stream(), {
      headers: {
        'Content-Type': output.type,
      },
    });
    return response;
  } else {
    return new Response('No valid Blob provided', { status: 400 });
  }
}
