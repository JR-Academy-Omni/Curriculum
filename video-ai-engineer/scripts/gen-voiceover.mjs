#!/usr/bin/env bun
/**
 * video-ai-engineer 的配音 wrapper · 转发给 tools/jr-tts/
 *
 * 实际的 TTS 实现在 ../../tools/jr-tts/（复用到其他项目）
 * 这里只做 3 件事：
 *   1. 把本项目的 scene 台词转成 jr-tts 的 script.json 格式
 *   2. 调 jr-tts gen-voiceover.mjs 批量生成到 src/assets/voiceover/
 *   3. 给不同 speaker 的便捷 preset
 *
 * 用法：
 *   SPEAKER=中文女 bun run scripts/gen-voiceover.mjs
 *   SPEAKER=chattts-seed-9528 bun run scripts/gen-voiceover.mjs
 *   SPEAKER=cv-bundled-long bun run scripts/gen-voiceover.mjs
 *   bun run scripts/gen-voiceover.mjs --speaker shimmer
 */
import { writeFileSync, mkdirSync, existsSync, unlinkSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
const JR_TTS = resolve(__dirname, '../../../tools/jr-tts');
const OUT_DIR = resolve(PROJECT_ROOT, 'src/assets/voiceover');

/* ---- 本课 14 段台词（中英混读） ---- */
const SCRIPT = [
	{ id: '00-cover',     text: '2026年，AI Engineer 的岗位，已经换代了。' },
	{ id: '01-gap',       text: '还在拼 Prompt 调 API 吗？岗位基线已经整体右移了。' },
	{ id: '02-chatroom',  text: '同事群聊 GraphRAG 和 Eval，你能接上话吗？' },
	{ id: '03-outcomes',  text: '12 周，真学会 RAG、Agent、Multi-Agent、微调这四件事。' },
	{ id: '04-structure', text: '10 个 Phase，光 Agent 就占了 5 个，Memory 和 Harness 独家。' },
	{ id: '05-stack',     text: '15 个 2026 真实工具栈，每个都配独立的 Lab。' },
	{ id: '06-rag',       text: 'RAG 整整 45 节课，从向量做到 GraphRAG 全链路。' },
	{ id: '07-agent',     text: 'Agent 拆成 5 层，每一层都能独立成一个项目。' },
	{ id: '08-labs',      text: '68 个浏览器 Lab，都是独立 Lesson，可以追踪进度。' },
	{ id: '09-projects',  text: '7 个简历项目，都能讲完整的 STAR 故事。' },
	{ id: '10-timeline',  text: '12 周课加 12 周 P3 孵化，陪你到拿 Offer。' },
	{ id: '11-feedback',  text: '学员反馈没有夸张数字，就是日常的成长记录。' },
	{ id: '12-package',   text: '183 节课，68 个 Lab，7 个项目，加大厂导师 Review。' },
	{ id: '13-cta',       text: '今年一件 AI 投资，看看新一期 Bootcamp，主页搜匠人 AI。' },
];

/* ChatTTS 不识别阿拉伯数字 —— 按 speaker 动态改写 */
function adaptForSpeaker(speaker) {
	if (!speaker.startsWith('chattts')) return SCRIPT;
	const digitsToHans = (s) => s
		.replace(/2026/g, '二零二六')
		.replace(/183/g, '一百八十三')
		.replace(/68/g, '六十八')
		.replace(/45/g, '四十五')
		.replace(/15/g, '十五')
		.replace(/12/g, '十二')
		.replace(/10/g, '十')
		.replace(/7/g, '七')
		.replace(/5/g, '五')
		.replace(/4/g, '四')
		.replace(/P3/g, 'P 三');  // 避免数字 token
	return SCRIPT.map(({ id, text }) => ({ id, text: digitsToHans(text) }));
}

function parseArg(name, fallback) {
	const idx = process.argv.indexOf(`--${name}`);
	if (idx >= 0 && process.argv[idx + 1]) return process.argv[idx + 1];
	return process.env[name.toUpperCase()] || fallback;
}

const speaker = parseArg('speaker', 'jr-female-1');
console.log(`🎤 speaker = ${speaker}\n`);

const adapted = adaptForSpeaker(speaker);
const tmpScript = resolve(PROJECT_ROOT, '.tmp-script.json');
writeFileSync(tmpScript, JSON.stringify(adapted, null, 2));

// 清空老的 mp3（避免残留）
if (existsSync(OUT_DIR)) {
	for (const f of readdirSync(OUT_DIR)) {
		if (f.endsWith('.mp3')) unlinkSync(resolve(OUT_DIR, f));
	}
}
mkdirSync(OUT_DIR, { recursive: true });

const r = spawnSync('bun', [
	resolve(JR_TTS, 'scripts/gen-voiceover.mjs'),
	'--speaker', speaker,
	'--script', tmpScript,
	'--out', OUT_DIR,
], { stdio: 'inherit' });

unlinkSync(tmpScript);

if (r.status !== 0) {
	console.error('❌ jr-tts 生成失败');
	process.exit(r.status || 1);
}

console.log('\n💡 下一步:');
console.log('   bun run scripts/sync-scenes-to-voiceover.mjs');
console.log('   bun run render');
