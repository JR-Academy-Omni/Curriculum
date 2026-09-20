import {createHash} from 'node:crypto';
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';

const config = JSON.parse(await readFile(new URL('../production/narration.json', import.meta.url), 'utf8'));
const base = process.env.PROD_API_BASE;
const token = process.env.ADMIN_TOKEN;
if (!base || !token) throw new Error('PROD_API_BASE and ADMIN_TOKEN are required');

const response = await fetch(`${base.replace(/\/$/, '')}/classroom-engine/tts/synthesize`, {
  method: 'POST',
  headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
  body: JSON.stringify({providerId: config.provider, modelId: config.model, voice: config.voiceId, speed: config.speed, text: config.text}),
});
if (!response.ok) throw new Error(`TTS request failed: ${response.status} ${await response.text()}`);

const raw = Buffer.from(await response.arrayBuffer());
const outDir = new URL('../public/voice/', import.meta.url);
await mkdir(outDir, {recursive: true});
const audioPath = new URL('amy-eleven-v3.mp3', outDir);
await writeFile(audioPath, raw);
const manifest = {
  ...config,
  generatedAt: new Date().toISOString(),
  scriptSha256: createHash('sha256').update(config.text).digest('hex'),
  audioSha256: createHash('sha256').update(raw).digest('hex'),
  bytes: raw.length,
  format: response.headers.get('content-type') || 'audio/mpeg',
  usageRights: 'JR Academy authorised ElevenLabs account; internal course promotion master.',
};
await writeFile(new URL('../production/voice-manifest.json', import.meta.url), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify({ok:true, audio:path.relative(process.cwd(), audioPath.pathname), bytes:raw.length, audioSha256:manifest.audioSha256}));
