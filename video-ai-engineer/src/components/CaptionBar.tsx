import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

interface IProps {
	caption: string;
	subCaption?: string;
	accentColor?: string;
	/** How long this scene lasts — used to fade in/out */
	sceneDuration: number;
	/** Local frame within the scene (0-based). */
	localFrame: number;
}

export const CaptionBar: React.FC<IProps> = ({
	caption,
	subCaption,
	accentColor = '#ff5757',
	sceneDuration,
	localFrame,
}) => {
	const { fps } = useVideoConfig();

	// Slide up from bottom at scene start
	const enter = spring({
		fps,
		frame: localFrame,
		config: { damping: 14, stiffness: 120, mass: 0.6 },
	});
	const yOffset = interpolate(enter, [0, 1], [120, 0]);
	const opacity = interpolate(enter, [0, 1], [0, 1]);

	// Fade out in last 12 frames
	const fadeOutOpacity = interpolate(
		localFrame,
		[sceneDuration - 12, sceneDuration],
		[1, 0],
		{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
	);

	return (
		<AbsoluteFill
			style={{
				top: 'auto',
				bottom: 0,
				height: 240,
				background: '#fff8ee',
				borderTop: '5px solid #10162f',
				padding: '26px 56px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: 12,
				transform: `translateY(${yOffset}px)`,
				opacity: Math.min(opacity, fadeOutOpacity),
				boxShadow: '0 -8px 24px rgba(0,0,0,0.06)',
			}}
		>
			<div
				style={{
					fontSize: 56,
					fontWeight: 900,
					color: '#10162f',
					fontFamily: 'Noto Sans SC, sans-serif',
					lineHeight: 1.2,
					letterSpacing: -1,
					textShadow: `4px 4px 0 ${accentColor}22`,
				}}
			>
				{caption}
			</div>
			{subCaption && (
				<div
					style={{
						fontSize: 34,
						fontWeight: 600,
						color: accentColor,
						fontFamily: 'Noto Sans SC, sans-serif',
						lineHeight: 1.3,
						letterSpacing: -0.4,
					}}
				>
					{subCaption}
				</div>
			)}
			{/* Accent underline */}
			<div
				style={{
					width: 80,
					height: 8,
					background: accentColor,
					borderRadius: 4,
					marginTop: 4,
				}}
			/>
		</AbsoluteFill>
	);
};
