#!/usr/bin/env node
/**
 * 读每段 voiceover mp3 的时长，更新 src/data/scenes.ts 的 durationInFrames
 * 加 0.5s buffer 让场景不会卡在语音结束的那一瞬间切走。
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const VO_DIR = resolve(ROOT, 'src/assets/voiceover');
const SCENES_FILE = resolve(ROOT, 'src/data/scenes.ts');

const FPS = 30;
const BUFFER_SEC = 0.5; // 每段结尾留 0.5s 呼吸

/* ---- scene key ↔ voiceover 文件映射 ---- */
const MAP = [
	{ key: null, file: '00-cover.mp3' }, // cover 特殊
	{ key: 'gap', file: '01-gap.mp3' },
	{ key: 'chatroom', file: '02-chatroom.mp3' },
	{ key: 'outcomes', file: '03-outcomes.mp3' },
	{ key: 'structure', file: '04-structure.mp3' },
	{ key: 'stack', file: '05-stack.mp3' },
	{ key: 'rag', file: '06-rag.mp3' },
	{ key: 'agent', file: '07-agent.mp3' },
	{ key: 'labs', file: '08-labs.mp3' },
	{ key: 'projects', file: '09-projects.mp3' },
	{ key: 'timeline', file: '10-timeline.mp3' },
	{ key: 'feedback', file: '11-feedback.mp3' },
	{ key: 'package', file: '12-package.mp3' },
	{ key: 'cta', file: '13-cta.mp3' },
];

function durationSeconds(file) {
	const out = execSync(`afinfo "${resolve(VO_DIR, file)}"`).toString();
	const m = out.match(/estimated duration: ([\d.]+)/);
	if (!m) throw new Error(`无法解析时长 ${file}`);
	return parseFloat(m[1]);
}

function framesFor(sec) {
	return Math.round((sec + BUFFER_SEC) * FPS);
}

/* ---- 读现有 scenes.ts，按 key 替换 durationInFrames ---- */
let src = readFileSync(SCENES_FILE, 'utf-8');
const durations = {};

for (const m of MAP) {
	const sec = durationSeconds(m.file);
	const frames = framesFor(sec);
	durations[m.file] = { sec, frames };
	if (!m.key) continue;

	// 匹配 key 开始到这个 scene 对象的 durationInFrames
	const re = new RegExp(
		`(key:\\s*'${m.key}',[\\s\\S]*?durationInFrames:\\s*)\\d+`,
		'm',
	);
	if (!re.test(src)) {
		console.warn(`⚠️ 没匹配到 scene key=${m.key}`);
		continue;
	}
	src = src.replace(re, `$1${frames}`);
}

/* 更新 COVER_DURATION */
const coverFrames = framesFor(durations['00-cover.mp3'].sec);
src = src.replace(
	/export const COVER_DURATION = \d+;/,
	`export const COVER_DURATION = ${coverFrames};`,
);

writeFileSync(SCENES_FILE, src);

/* ---- Report ---- */
console.log('🎞️ 同步 scene 时长 ← voiceover mp3\n');
let total = 0;
for (const m of MAP) {
	const d = durations[m.file];
	const label = m.key || 'cover';
	console.log(`  ${label.padEnd(12)} ${d.sec.toFixed(2)}s VO → ${d.frames} 帧（${(d.frames / FPS).toFixed(2)}s scene）`);
	total += d.frames;
}
console.log(`\n总帧数: ${total} (${(total / FPS).toFixed(1)}s 视频)`);
console.log(`\n✓ 已更新 ${SCENES_FILE}`);
