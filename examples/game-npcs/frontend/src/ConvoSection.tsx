import { Button, Center } from '@mantine/core';
import AudioTranscriber from './AudioTranscriber';
import { useState } from 'react';

export default function ConvoSection(props: { npc?: NPC }) {
  const [openedRecorder, setOpenedRecorder] = useState(false);

  if (!props.npc) {
    return <></>;
  }
  return (
    <>
      <Center>
        <Button
          onClick={() => {
            setOpenedRecorder(true);
          }}
        >
          Start talking to {props.npc.name}
        </Button>

        <AudioTranscriber
          active={openedRecorder}
          onClose={() => {
            setOpenedRecorder(false);
          }}
          onFinish={async (audio: Blob) => {
            const formData = new FormData();
            formData.append('file', audio, 'audio.wav');
            const res = await fetch(`http://localhost:3000/convo?id=${props.npc!.id}`, {
              method: 'POST',
              body: formData,
            });
            const response = await res.blob();
            playAudio(response);
          }}
        />
      </Center>
    </>
  );
}

function playAudio(audioBlob: Blob) {
  try {
    console.log(audioBlob);
    const audioUrl = URL.createObjectURL(audioBlob);

    const audio = new Audio(audioUrl);
    audio
      .play()
      .then(() => {
        console.log('Audio playback started successfully');
      })
      .catch((error) => {
        console.error('Error playing audio:', error);
      });

    // Release memory after playback
    audio.addEventListener('ended', () => {
      URL.revokeObjectURL(audioUrl);
    });
  } catch (error) {
    console.error('Error fetching and playing audio:', error);
  }
}
