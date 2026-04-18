import React from 'react';
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	spring,
} from 'remotion';

/**
 * Cover (3s): 黑底爆裂开场
 * - 0-20f: "2026" 从下方弹入
 * - 20-50f: "AI ENGINEER 的基线已经换代了" 打字机效果
 * - 50-90f: 整体淡出
 */
export const CoverScene: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// Number spring
	const numSpring = spring({
		fps,
		frame,
		config: { damping: 12, stiffness: 140, mass: 0.6 },
	});
	const numScale = interpolate(numSpring, [0, 1], [0.3, 1]);
	const numOpacity = interpolate(numSpring, [0, 1], [0, 1]);

	// Main headline fade-in 20 → 40f
	const lineOpacity = interpolate(frame, [18, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Sub caption fade-in
	const subOpacity = interpolate(frame, [35, 55], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Global fade-out last 12 frames
	const fadeOut = interpolate(frame, [78, 90], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				background:
					'radial-gradient(ellipse at center, #10162f 0%, #000 100%)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				opacity: fadeOut,
				padding: '0 80px',
			}}
		>
			{/* 年份大字 */}
			<div
				style={{
					fontSize: 280,
					fontWeight: 900,
					color: '#ffce44',
					fontFamily: 'JetBrains Mono, monospace',
					letterSpacing: -8,
					lineHeight: 1,
					transform: `scale(${numScale})`,
					opacity: numOpacity,
					textShadow: '12px 12px 0 #ff5757',
				}}
			>
				2026
			</div>

			{/* 主标题 */}
			<div
				style={{
					fontSize: 68,
					fontWeight: 900,
					color: '#fff',
					fontFamily: 'Noto Sans SC, sans-serif',
					textAlign: 'center',
					marginTop: 40,
					opacity: lineOpacity,
					letterSpacing: -1,
					lineHeight: 1.25,
				}}
			>
				AI Engineer 的岗位
				<br />
				<span style={{ color: '#ff5757' }}>基线已经换代</span>
			</div>

			{/* 副标题 */}
			<div
				style={{
					fontSize: 34,
					fontWeight: 500,
					color: '#94a3b8',
					fontFamily: 'Noto Sans SC, sans-serif',
					textAlign: 'center',
					marginTop: 32,
					opacity: subOpacity,
					letterSpacing: -0.3,
				}}
			>
				60 秒看完 2026 AI Engineer Bootcamp
			</div>

			{/* 品牌角标 */}
			<div
				style={{
					position: 'absolute',
					bottom: 80,
					fontSize: 22,
					color: '#64748b',
					fontFamily: 'JetBrains Mono, monospace',
					letterSpacing: 3,
					opacity: subOpacity,
				}}
			>
				匠人 AI · JR ACADEMY
			</div>
		</AbsoluteFill>
	);
};
