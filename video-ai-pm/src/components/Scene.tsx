import React from 'react';
import {
	AbsoluteFill,
	Img,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	spring,
} from 'remotion';
import type { IScene } from '../data/scenes';
import { CaptionBar } from './CaptionBar';

interface IProps {
	scene: IScene;
}

/**
 * 单 scene 渲染：
 *   - 中间海报（滑入 + 轻微缩放）
 *   - 底部金句字幕
 *
 * 注意：TopBar 不在这里渲染 —— 它在 ShortVideo.tsx 外层作为全局覆盖层，
 * 这样进度条能跨 scene 连贯显示。
 */
export const Scene: React.FC<IProps> = ({ scene }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// Scene-local frame (Remotion <Sequence from={X}> 自动把 frame remap 成 local)
	const localFrame = frame;

	// Image spring entry
	const imgSpring = spring({
		fps,
		frame: localFrame,
		config: { damping: 18, stiffness: 100, mass: 0.8 },
	});
	const imgScale = interpolate(imgSpring, [0, 1], [0.94, 1.0]);
	const imgOpacity = interpolate(imgSpring, [0, 1], [0, 1]);

	// Fade out last 10 frames
	const fadeOut = interpolate(
		localFrame,
		[scene.durationInFrames - 10, scene.durationInFrames],
		[1, 0],
		{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
	);

	// Gentle drift: subtle vertical movement
	const drift = interpolate(localFrame, [0, scene.durationInFrames], [0, 15]);

	return (
		<AbsoluteFill
			style={{
				background: `linear-gradient(180deg, #eef0f4 0%, #f8f9fb 100%)`,
			}}
		>
			{/* Image area: 海报居中在 top 180 (topbar) ~ bottom 240 (caption) 之间 */}
			<AbsoluteFill
				style={{
					top: 180,
					height: 1500,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '20px 50px',
				}}
			>
				<Img
					src={staticFile(`images/${scene.image}`)}
					style={{
						width: '100%',
						maxWidth: 980,
						height: 'auto',
						maxHeight: 1440,
						objectFit: 'contain',
						transform: `scale(${imgScale}) translateY(${drift}px)`,
						opacity: Math.min(imgOpacity, fadeOut),
						filter: `drop-shadow(0 20px 40px rgba(16,22,47,0.25))`,
						borderRadius: 24,
					}}
				/>
			</AbsoluteFill>

			<CaptionBar
				caption={scene.caption}
				subCaption={scene.subCaption}
				accentColor={scene.accentColor}
				sceneDuration={scene.durationInFrames}
				localFrame={localFrame}
			/>
		</AbsoluteFill>
	);
};
