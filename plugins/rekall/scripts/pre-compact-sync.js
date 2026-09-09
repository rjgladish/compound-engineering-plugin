#!/usr/bin/env node
// rekall/scripts/pre-compact-sync.js
// PreCompact hook: Sync conversation to episodic-memory before context compaction
// Ensures durable memory by archiving and indexing before context is lost

const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

const PAI_DIR = process.env.PAI_DIR || path.join(os.homedir(), '.claude');
const SESSION_FILE = path.join(PAI_DIR, '.current-session');

function getLocalTimestamp() {
  const date = new Date();
  const tz = process.env.TIME_ZONE || Intl.DateTimeFormat().resolvedOptions().timeZone;
  try {
    return date.toLocaleString('en-US', {
      timeZone: tz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  } catch {
    return new Date().toISOString();
  }
}

function readSessionState() {
  try {
    if (fs.existsSync(SESSION_FILE)) {
      return JSON.parse(fs.readFileSync(SESSION_FILE, 'utf-8'));
    }
  } catch {}
  return null;
}

function writeSessionState(state) {
  fs.writeFileSync(SESSION_FILE, JSON.stringify(state, null, 2));
}

async function runEpisodicMemorySync() {
  return new Promise((resolve) => {
    const proc = spawn('episodic-memory', ['sync'], {
      stdio: ['ignore', 'pipe', 'pipe']
    });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => { stdout += data; });
    proc.stderr.on('data', (data) => { stderr += data; });

    proc.on('close', (code) => {
      resolve({ code, stdout, stderr });
    });

    proc.on('error', (err) => {
      resolve({ code: 1, stdout: '', stderr: err.message });
    });
  });
}

async function main() {
  let input = '';

  // Read stdin
  process.stdin.setEncoding('utf8');
  for await (const chunk of process.stdin) {
    input += chunk;
  }

  if (!input.trim()) {
    process.exit(0);
  }

  try {
    const payload = JSON.parse(input);
    const triggerType = payload.trigger === 'auto' ? 'auto-compact' : 'manual /compact';

    console.error(`[rekall] PreCompact triggered (${triggerType})`);

    // Update session state with compact count
    let sessionState = readSessionState();
    if (sessionState) {
      sessionState.compact_count = (sessionState.compact_count || 0) + 1;
      writeSessionState(sessionState);
    }

    const compactNum = sessionState?.compact_count || 1;
    const sessionName = sessionState?.name || sessionState?.project || 'session';

    console.error(`[rekall] Session: "${sessionName}" (compact #${compactNum})`);
    console.error(`[rekall] Syncing to episodic-memory before compaction...`);

    // Run episodic-memory sync
    const result = await runEpisodicMemorySync();

    if (result.code === 0) {
      console.error(`[rekall] Episodic memory sync complete - conversation archived`);
    } else {
      console.error(`[rekall] Episodic memory sync failed: ${result.stderr}`);
    }

    // Suggest session naming if not set
    if (!sessionState?.name) {
      console.error(`[rekall] Tip: Name this session in your notes for better recall`);
    }

  } catch (error) {
    console.error('[rekall] PreCompact hook error:', error.message);
  }

  process.exit(0);
}

main();
