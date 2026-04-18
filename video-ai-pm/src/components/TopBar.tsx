import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

interface IProps {
	courseName?: string;
	tagline?: string;
}

export const TopBar: React.FC<IProps> = ({
	courseName = 'AI ENGINEER',
	tagline = '匠人 AI · 第五期 · 12 周',
}) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

	// Linear progress 0 → 1 across the whole video
	const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				height: 180,
				top: 0,
				background: '#10162f',
				borderBottom: '4px solid #ff5757',
				padding: '28px 40px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				color: '#fff',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<div
						style={{
							background: '#ffce44',
							color: '#10162f',
							padding: '8px 14px',
							borderRadius: 6,
							fontFamily: 'JetBrains Mono, monospace',
							fontWeight: 900,
							fontSize: 22,
							letterSpacing: 1,
						}}
					>
						JR
					</div>
					<div>
						<div
							style={{
								fontSize: 34,
								fontWeight: 900,
								letterSpacing: 2,
								lineHeight: 1,
								fontFamily: 'JetBrains Mono, monospace',
							}}
						>
							{courseName}
						</div>
						<div
							style={{
								fontSize: 20,
								color: '#94a3b8',
								marginTop: 6,
								fontFamily: 'Noto Sans SC, sans-serif',
								fontWeight: 500,
							}}
						>
							{tagline}
						</div>
					</div>
				</div>
				<div
					style={{
						background: '#ff5757',
						color: '#fff',
						padding: '10px 20px',
						fontSize: 20,
						fontWeight: 900,
						borderRadius: 100,
						fontFamily: 'JetBrains Mono, monospace',
						letterSpacing: 1.2,
					}}
				>
					2026 BASELINE
				</div>
			</div>
			{/* Bottom progress bar */}
			<div
				style={{
					height: 6,
					background: 'rgba(255,255,255,0.15)',
					borderRadius: 3,
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						width: `${progress * 100}%`,
						height: '100%',
						background: '#ffce44',
						transition: 'none',
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};
