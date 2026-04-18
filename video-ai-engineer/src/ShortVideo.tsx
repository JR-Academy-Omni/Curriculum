import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { scenes, COVER_DURATION, FPS } from './data/scenes';
import { Scene } from './components/Scene';
import { CoverScene } from './components/CoverScene';
import { TopBar } from './components/TopBar';

/**
 * 主合成：1080×1920 · 30fps · ~60s
 *   Cover (3s) → 13 个 Scene (每个 4-6s, 合计约 57s)
 *   TopBar 作为全局覆盖层贯穿主体部分（非 Cover），进度条跨 scene 连贯
 *
 * 背景音乐：src/assets/bgm/main.mp3 — 没放的话 <Audio> 会报错，默认注释掉。
 */

/** 主体部分总时长（所有 scene 之和，不含 Cover） */
const mainBodyDuration = scenes.reduce((s, x) => s + x.durationInFrames, 0);

/** 每个 scene 相对"主体 Sequence 起点"的偏移 */
const sceneOffsets: { from: number; duration: number }[] = (() => {
	let cursor = 0;
	return scenes.map((s) => {
		const entry = { from: cursor, duration: s.durationInFrames };
		cursor += s.durationInFrames;
		return entry;
	});
})();

/** 14 段配音文件 + 起始帧（顺序与 cover + scenes 对齐） */
const voiceoverTracks = [
	{ from: 0, file: 'voiceover/00-cover.mp3' }, // cover
	...scenes.map((s, i) => ({
		from: COVER_DURATION + sceneOffsets[i].from,
		file: `voiceover/${String(i + 1).padStart(2, '0')}-${s.key}.mp3`,
	})),
];

const totalVideoDuration = COVER_DURATION + mainBodyDuration;

export const ShortVideo: React.FC = () => {
	return (
		<AbsoluteFill style={{ background: '#000' }}>
			{/* 开场 */}
			<Sequence from={0} durationInFrames={COVER_DURATION}>
				<CoverScene />
			</Sequence>

			{/* 主体：13 个 Scene + TopBar 全局覆盖层（进度条贯穿） */}
			<Sequence from={COVER_DURATION} durationInFrames={mainBodyDuration}>
				<AbsoluteFill>
					{scenes.map((scene, i) => (
						<Sequence
							key={scene.key}
							from={sceneOffsets[i].from}
							durationInFrames={sceneOffsets[i].duration}
						>
							<Scene scene={scene} />
						</Sequence>
					))}
					<TopBar />
				</AbsoluteFill>
			</Sequence>

			{/* 🎵 背景音乐：Kevin MacLeod - "Aitech" (incompetech.com, CC-BY 3.0)
			 *    铺满全程，给人声让出中频；超过视频长度的部分 Remotion 自动切掉 */}
			<Audio
				src={staticFile('bgm/main.mp3')}
				volume={(f) => {
					const fadeIn = FPS; // 1s
					const fadeOut = FPS * 2; // 2s
					const peak = 0.18; // 真乐曲压更低（真乐器比合成声音更密，容易盖人声）
					if (f < fadeIn) return (f / fadeIn) * peak;
					if (f > totalVideoDuration - fadeOut) {
						return Math.max(0, (totalVideoDuration - f) / fadeOut) * peak;
					}
					return peak;
				}}
			/>

			{/* 🎤 14 段配音：按 scene 起始帧精确对齐 */}
			{voiceoverTracks.map((track, i) => (
				<Sequence key={`vo-${i}`} from={track.from}>
					<Audio src={staticFile(track.file)} volume={1.0} />
				</Sequence>
			))}
		</AbsoluteFill>
	);
};
