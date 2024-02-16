import { Database } from 'bun:sqlite';
import { PREDEFINED_NPCs, type NPC } from './predefined';
import { type ChatMessage } from 'vocalmind';

let db: Database;

export function initDB() {
  db = new Database('db.sqlite');
  db.exec('PRAGMA journal_mode = WAL;');

  // Init tables
  initNPCs();
  initMessages();
}

function initNPCs() {
  // Setup NPC table with predefined data
  try {
    // If the table already exists, don't init
    return db.query(`select * from npc`).all() as NPC[];
  } catch (e) {}

  db.query(
    `
      CREATE TABLE IF NOT EXISTS npc (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          height REAL,
          mass REAL,
          hairColor TEXT,
          skinColor TEXT,
          eyeColor TEXT,
          gender TEXT,
          voice TEXT,
          audioShift TEXT,
          description TEXT,
          relations TEXT,
          isActive BOOLEAN
      );
  `
  ).run();

  // Prepare an INSERT statement
  const insert = db.prepare(`
  INSERT INTO npc (name, height, mass, hairColor, skinColor, eyeColor, gender, voice, audioShift, description, relations, isActive)
  VALUES ($name, $height, $mass, $hairColor, $skinColor, $eyeColor, $gender, $voice, $audioShift, $description, $relations, $isActive)
`);

  // Start a transaction
  const insertMany = db.transaction((npcs: NPC[]) => {
    for (const npc of npcs) {
      insert.run({
        $name: npc.name,
        $height: npc.height,
        $mass: npc.mass,
        $hairColor: npc.hairColor,
        $skinColor: npc.skinColor,
        $eyeColor: npc.eyeColor,
        $gender: npc.gender,
        $voice: npc.voice,
        $audioShift: npc.audioShift,
        $description: npc.description,
        $relations: npc.relations,
        $isActive: npc.isActive,
      });
    }
  });

  // Execute the transaction
  insertMany(PREDEFINED_NPCs);

  insert.finalize();

  return db.query(`select * from npc`).all() as NPC[];
}

export function makeActiveNPC(npcId: number, isActive: boolean) {
  db.prepare(`UPDATE npc SET isActive = ? WHERE id = ?`).run(isActive, npcId);
  return true;
}

function initMessages() {
  db.query(
    `
      CREATE TABLE IF NOT EXISTS message (
        id INTEGER PRIMARY KEY,
        npcId INTEGER NOT NULL,
        source TEXT CHECK(source IN ('input', 'output')) NOT NULL,
        sourceTitle TEXT,
        timestamp TEXT,
        message TEXT NOT NULL,
        
        FOREIGN KEY(npcId) REFERENCES npc(id)
    );
  `
  ).run();

  return true;
}

//

export function getNPCs(): NPC[] {
  try {
    return db.query(`select * from npc`).all() as NPC[];
  } catch (e) {
    return initNPCs();
  }
}

export function getMessages(npcId: number): ChatMessage[] {
  try {
    const stmt = db.prepare(`SELECT * FROM message WHERE npcId = ?`);
    const messages = stmt.all(npcId);
    return messages as ChatMessage[];
  } catch (e) {
    return [];
  }
}

export function addChatMessage(npcId: number, msg: ChatMessage) {
  try {
    // Prepare an INSERT statement
    const insertStmt = db.prepare(`
      INSERT INTO message (npcId, source, sourceTitle, timestamp, message)
      VALUES ($npcId, $source, $sourceTitle, $timestamp, $message)
    `);

    insertStmt.run({
      $npcId: npcId,
      $source: msg.source,
      $sourceTitle: msg.sourceTitle || null,
      $timestamp: msg.timestamp || null,
      $message: msg.message,
    });

    return true;
  } catch (e) {
    console.error('Failed to add chat message for NPC:', e);
    return false;
  }
}

export function setChatMessages(npcId: number, msgs: ChatMessage[]) {
  try {
    // Start a transaction
    const transaction = db.transaction(() => {
      // Step 1: Delete all existing messages for the npcId
      db.prepare(`DELETE FROM message WHERE npcId = ?`).run(npcId);

      // Prepare an INSERT statement for the new messages
      const insertStmt = db.prepare(`
        INSERT INTO message (npcId, source, sourceTitle, timestamp, message)
        VALUES ($npcId, $source, $sourceTitle, $timestamp, $message)
      `);

      // Step 2: Insert each new message
      for (const msg of msgs) {
        insertStmt.run({
          $npcId: npcId,
          $source: msg.source,
          $sourceTitle: msg.sourceTitle || null, // Handle optional fields
          $timestamp: msg.timestamp || null, // Use current timestamp or null if not provided
          $message: msg.message,
        });
      }
    });

    // Execute the transaction
    transaction();

    return true;
  } catch (e) {
    console.error('Failed to set chat messages for NPC:', e);
    return false;
  }
}
