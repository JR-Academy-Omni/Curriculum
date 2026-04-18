#!/usr/bin/env node
/**
 * 生成 14 段中文配音 mp3（OpenAI TTS, nova 女声）
 * 从 jr-academy/.env 读 OPENAI_API_KEY
 *
 * 使用：
 *   bun run scripts/gen-voiceover.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(PROJECT_ROOT, 'src', 'assets', 'voiceover');

/* ---- 读 OpenAI 配置 ---- */
function loadEnv(path) {
	if (!existsSync(path)) return {};
	const out = {};
	for (const line of readFileSync(path, 'utf-8').split('\n')) {
		const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
		if (m) out[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
	}
	return out;
}
const env = loadEnv('/Users/lightman/Documents/sites/jr-academy-ai/jr-academy/.env');
const API_KEY = env.OPENAI_API_KEY;
const BASE_URL = env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
if (!API_KEY) {
	console.error('❌ 没找到 OPENAI_API_KEY');
	process.exit(1);
}

/* ---- 14 段台词（已按 TTS 实测速度收紧，目标总长 ~65s）---- */
const segments = [
	{ file: '00-cover.mp3', text: '2026，AI Engineer 岗位换代了。' },
	{ file: '01-gap.mp3', text: '还在拼 Prompt 调 API？2026 岗位基线已经右移。' },
	{ file: '02-chatroom.mp3', text: '同事群聊 GraphRAG、Eval，你能接上吗？' },
	{ file: '03-outcomes.mp3', text: '12 周真学会：RAG、Agent、Multi-Agent、微调评估。' },
	{ file: '04-structure.mp3', text: '10 个 Phase，Agent 独占 5 个。Memory 和 Harness 独家。' },
	{ file: '05-stack.mp3', text: '15 个以上工具栈，每个都配独立 Lab。' },
	{ file: '06-rag.mp3', text: 'RAG 45 节：向量、GraphRAG、LangChain、RAGAS 全链路。' },
	{ file: '07-agent.mp3', text: 'Agent 拆成 5 层，每层都能独立成项目。' },
	{ file: '08-labs.mp3', text: '68 个浏览器 Lab，独立 Lesson 可追踪进度。' },
	{ file: '09-projects.mp3', text: '7 个简历项目，从 RAG 到 Multi-Agent，能讲 STAR 故事。' },
	{ file: '10-timeline.mp3', text: '12 周课加 12 周 P3 孵化，陪你到拿 Offer。' },
	{ file: '11-feedback.mp3', text: '学员反馈日常不夸张，普通工程师的真实记录。' },
	{ file: '12-package.mp3', text: '183 节课、68 Lab、7 项目，加大厂导师 Review。' },
	{ file: '13-cta.mp3', text: '今年一件 AI 投资，看看新一期 Bootcamp，主页搜匠人 AI。' },
];

const SPEED = 1.15; // 略快，让节奏紧凑

mkdirSync(OUT_DIR, { recursive: true });

/* ---- 调 TTS ---- */
async function tts(text, outFile) {
	const res = await fetch(`${BASE_URL}/audio/speech`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'tts-1-hd',
			input: text,
			voice: 'nova',
			response_format: 'mp3',
			speed: SPEED,
		}),
	});
	if (!res.ok) {
		const err = await res.text();
		throw new Error(`TTS ${res.status}: ${err}`);
	}
	const buf = Buffer.from(await res.arrayBuffer());
	writeFileSync(outFile, buf);
	return buf.length;
}

/* ---- 跑 ---- */
console.log(`🎤 生成 14 段配音 → ${OUT_DIR}\n`);
const start = Date.now();
for (const seg of segments) {
	const out = resolve(OUT_DIR, seg.file);
	process.stdout.write(`  · ${seg.file.padEnd(22)} …`);
	try {
		const size = await tts(seg.text, out);
		console.log(` ✓ ${(size / 1024).toFixed(1)} KB`);
	} catch (e) {
		console.log(` ❌ ${e.message}`);
		process.exit(1);
	}
}
console.log(`\n✅ 完成，用时 ${((Date.now() - start) / 1000).toFixed(1)}s`);
console.log(`💡 下一步: bun run scripts/gen-bgm.mjs`);
