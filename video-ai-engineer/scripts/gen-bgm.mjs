#!/usr/bin/env node
/**
 * 合成 63s 背景音乐 WAV（零依赖，纯 Node）
 * 风格：Upbeat tech / corporate uplifting
 *   · 和弦进行 Am - F - C - G（vi-IV-I-V，流行进行的神级组合）
 *   · 合成器 pad + 高频 pluck + kick + hi-hat
 *   · 能量曲线：0-3s 极简 → 3-10s 加节奏 → 10-45s 主段 → 45-55s 降 energy → 55-63s outro
 *   · 中频留空（pad 走低频 + pluck 走高频，让人声 200Hz-4kHz 宽敞）
 *
 * 使用：bun run scripts/gen-bgm.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '..', 'src', 'assets', 'bgm');
mkdirSync(OUT_DIR, { recursive: true });

/* ---- 参数 ---- */
const SR = 44100; // 采样率
const DURATION = 63; // 秒
const BPM = 120;
const TOTAL_SAMPLES = SR * DURATION;

/* ---- 和弦进行 Am - F - C - G（每小节 2s, 4 小节一轮, 约 8 秒一轮） ---- */
// MIDI note → Hz
const freq = (midi) => 440 * Math.pow(2, (midi - 69) / 12);
// 和弦（root, third, fifth）
const chords = [
	{ root: 57, third: 60, fifth: 64 }, // Am: A3 C4 E4
	{ root: 53, third: 57, fifth: 60 }, // F:  F3 A3 C4
	{ root: 48, third: 52, fifth: 55 }, // C:  C3 E3 G3
	{ root: 55, third: 59, fifth: 62 }, // G:  G3 B3 D4
];
const BEAT_SEC = 60 / BPM; // 0.5s 一拍
const BAR_SEC = BEAT_SEC * 4; // 2s 一小节
const progressionSec = BAR_SEC * chords.length; // 8s 一轮

/* ---- 信号生成工具 ---- */
function sine(t, f) {
	return Math.sin(2 * Math.PI * f * t);
}
function triangle(t, f) {
	const p = (t * f) % 1;
	return p < 0.5 ? 4 * p - 1 : 3 - 4 * p;
}
function saw(t, f) {
	return 2 * ((t * f) % 1) - 1;
}
// 指数衰减
function decay(t, tau) {
	return Math.exp(-t / tau);
}

/* ---- 合成 ---- */
const buf = new Float32Array(TOTAL_SAMPLES);

// 能量曲线 0→1
function energy(t) {
	if (t < 3) return 0.15; // 极简开场
	if (t < 10) return 0.15 + ((t - 3) / 7) * 0.65; // 逐步加（0.15 → 0.8）
	if (t < 45) return 0.8 + Math.sin((t - 10) * 0.1) * 0.05; // 主段，轻微波动
	if (t < 55) return 0.8 - ((t - 45) / 10) * 0.35; // 降 energy（0.8 → 0.45）
	return Math.max(0, 0.45 * (1 - (t - 55) / 8)); // outro fade
}

console.log('🎵 合成 63s BGM…');

// ---- 1. Pad（低频和弦底，走 fifth 下）----
for (let i = 0; i < TOTAL_SAMPLES; i++) {
	const t = i / SR;
	const chordIdx = Math.floor(t / BAR_SEC) % chords.length;
	const c = chords[chordIdx];
	const e = energy(t);

	// Root 低一个八度（更沉），持续渐变
	const root = freq(c.root - 12);
	const third = freq(c.third - 12);
	const fifth = freq(c.fifth - 12);

	// 三角波 pad，频谱比正弦丰富，但没有方波刺耳
	let sample =
		triangle(t, root) * 0.4 + triangle(t, third) * 0.25 + triangle(t, fifth) * 0.2;

	// Pad 整体走低通：实际做不了 IIR 滤波，用简单的 harmonic 加权 —— 这里已经用 triangle 模拟了
	// 加一点 detune chorus 增加厚度
	sample += triangle(t, root * 1.003) * 0.15;

	buf[i] += sample * 0.25 * e; // pad 压到 0.25*energy
}

// ---- 2. Pluck 旋律（高频点缀，每小节上第 2/4 拍）----
for (let bar = 0; bar < DURATION / BAR_SEC; bar++) {
	const barStart = bar * BAR_SEC;
	if (barStart < 10) continue; // pluck 10s 后才进来
	if (barStart >= 55) continue; // outro 无 pluck
	const c = chords[bar % chords.length];
	const e = energy(barStart);

	// 每小节 4 拍，pluck 上 2、4 拍
	for (const beat of [1, 3]) {
		const noteStart = barStart + beat * BEAT_SEC;
		// 旋律音选 root/third/fifth/octave 随机
		const choices = [c.root + 12, c.third + 12, c.fifth + 12, c.root + 24];
		const noteMidi = choices[(bar + beat) % choices.length];
		const f = freq(noteMidi);
		const tau = 0.18; // 衰减 180ms

		for (let k = 0; k < SR * 0.4; k++) {
			const t = noteStart + k / SR;
			if (t >= DURATION) break;
			const localT = k / SR;
			const env = decay(localT, tau);
			// Sine + 2nd harmonic 模拟 pluck 音色
			const sample = (sine(t, f) * 0.7 + sine(t, f * 2) * 0.3) * env;
			const idx = Math.floor(t * SR);
			if (idx < TOTAL_SAMPLES) buf[idx] += sample * 0.22 * e;
		}
	}
}

// ---- 3. Kick drum（每拍第 1/3 拍）----
for (let t = 3; t < 55; t += BEAT_SEC) {
	const beatInBar = Math.round((t % BAR_SEC) / BEAT_SEC) % 4;
	if (beatInBar !== 0 && beatInBar !== 2) continue; // 第 1、3 拍
	if (t < 5) continue; // kick 5s 后才进
	const e = energy(t);

	// Kick: 60Hz → 40Hz pitch sweep + exp decay
	for (let k = 0; k < SR * 0.15; k++) {
		const localT = k / SR;
		const sweepF = 80 * Math.exp(-localT * 18); // 80Hz 快速降到 ~20Hz
		const env = decay(localT, 0.08);
		const sample = sine(localT, sweepF) * env * 1.2;
		const idx = Math.floor((t + localT) * SR);
		if (idx < TOTAL_SAMPLES) buf[idx] += sample * 0.6 * e;
	}
}

// ---- 4. Hi-hat（每个八分音符，高频白噪声 + 短衰减）----
function hash(n) {
	// 简单的确定性伪随机
	let x = n | 0;
	x = (x ^ 61) ^ (x >>> 16);
	x = x + (x << 3);
	x = x ^ (x >>> 4);
	x = Math.imul(x, 0x27d4eb2d);
	x = x ^ (x >>> 15);
	return ((x >>> 0) / 0xffffffff) * 2 - 1;
}
for (let t = 8; t < 55; t += BEAT_SEC / 2) {
	const e = energy(t);
	if (e < 0.3) continue;

	for (let k = 0; k < SR * 0.05; k++) {
		const localT = k / SR;
		const env = decay(localT, 0.015);
		// 白噪声 * 衰减包络
		const sample = hash(Math.floor((t + localT) * SR * 7)) * env;
		const idx = Math.floor((t + localT) * SR);
		if (idx < TOTAL_SAMPLES) buf[idx] += sample * 0.08 * e;
	}
}

// ---- 5. Arpeggio（主段加一层快速琶音，20-45s）----
const arpNotes = [0, 4, 7, 12]; // 和弦琶音的音级
for (let t = 20; t < 45; t += BEAT_SEC / 4) {
	// 十六分音符
	const chordIdx = Math.floor(t / BAR_SEC) % chords.length;
	const c = chords[chordIdx];
	const step = Math.floor(t / (BEAT_SEC / 4)) % arpNotes.length;
	const noteMidi = c.root + 12 + arpNotes[step];
	const f = freq(noteMidi);
	const e = energy(t);

	for (let k = 0; k < SR * 0.12; k++) {
		const localT = k / SR;
		const env = decay(localT, 0.06);
		const sample = sine(t + localT, f) * env * 0.12;
		const idx = Math.floor((t + localT) * SR);
		if (idx < TOTAL_SAMPLES) buf[idx] += sample * e;
	}
}

/* ---- Soft-clip 限幅 ---- */
let peak = 0;
for (let i = 0; i < TOTAL_SAMPLES; i++) {
	const a = Math.abs(buf[i]);
	if (a > peak) peak = a;
}
console.log(`  峰值 ${peak.toFixed(3)}，归一化到 0.75…`);
const gain = peak > 0 ? 0.75 / peak : 1;
for (let i = 0; i < TOTAL_SAMPLES; i++) {
	let s = buf[i] * gain;
	// tanh soft-clip
	s = Math.tanh(s * 1.1) * 0.92;
	buf[i] = s;
}

/* ---- 写 WAV（16-bit PCM mono）---- */
function writeWav(filename, samples, sr) {
	const numSamples = samples.length;
	const bytesPerSample = 2;
	const dataBytes = numSamples * bytesPerSample;
	const buffer = Buffer.alloc(44 + dataBytes);

	// RIFF header
	buffer.write('RIFF', 0);
	buffer.writeUInt32LE(36 + dataBytes, 4);
	buffer.write('WAVE', 8);
	// fmt chunk
	buffer.write('fmt ', 12);
	buffer.writeUInt32LE(16, 16); // subchunk size
	buffer.writeUInt16LE(1, 20); // PCM
	buffer.writeUInt16LE(1, 22); // mono
	buffer.writeUInt32LE(sr, 24);
	buffer.writeUInt32LE(sr * bytesPerSample, 28); // byte rate
	buffer.writeUInt16LE(bytesPerSample, 32); // block align
	buffer.writeUInt16LE(16, 34); // bits per sample
	// data chunk
	buffer.write('data', 36);
	buffer.writeUInt32LE(dataBytes, 40);
	// samples
	for (let i = 0; i < numSamples; i++) {
		const s = Math.max(-1, Math.min(1, samples[i]));
		buffer.writeInt16LE(Math.round(s * 32767), 44 + i * 2);
	}
	writeFileSync(filename, buffer);
	return buffer.length;
}

const outPath = resolve(OUT_DIR, 'main.wav');
const bytes = writeWav(outPath, buf, SR);
console.log(`✓ ${outPath}  ${(bytes / 1024 / 1024).toFixed(1)} MB · ${DURATION}s · ${SR}Hz mono`);
console.log('');
console.log('💡 Remotion 可以直接读 wav，不需要转 mp3');
console.log('💡 如果想试听：afplay src/assets/bgm/main.wav');
