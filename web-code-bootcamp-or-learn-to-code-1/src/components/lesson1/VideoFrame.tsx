import { type CSSProperties } from 'react';
import { colors } from '../ui';

interface VideoFrameProps {
	src: string;
	width: number;
	height: number;
	position?: CSSProperties;
	rotate?: number;
	border?: string;
	shadow?: string;
	caption?: string;
}

/**
 * VideoFrame — 定位/嵌入式视频小窗（不是满屏 bg）
 * 默认 Neo-Brutalism 风格：4px 黑边 + 偏移黑色阴影 + 可旋转
 * 用来给 dense content slide 加一个"展示元素"而不是吃满整页
 */
export default function VideoFrame({
	src, width, height, position, rotate = 0,
	border = `4px solid ${colors.black}`,
	shadow = `8px 8px 0 ${colors.black}`,
	caption,
}: VideoFrameProps) {
	const baseRaw = (import.meta as unknown as { env: { BASE_URL: string } }).env.BASE_URL;
	const base = baseRaw.replace(/\/$/, '');
	const url = `${base}/${src.replace(/^\//, '')}`;
	return (
		<div
			style={{
				position: 'absolute',
				width, height,
				transform: rotate ? `rotate(${rotate}deg)` : undefined,
				zIndex: 2,
				...position,
			}}
		>
			<video
				autoPlay loop muted playsInline preload="auto" src={url}
				style={{
					width: '100%', height: '100%',
					objectFit: 'cover', objectPosition: 'center',
					border, boxShadow: shadow, display: 'block',
					background: colors.black,
				}}
			/>
			{caption && (
				<div style={{
					position: 'absolute', bottom: -22, left: 0, right: 0,
					textAlign: 'center', fontFamily: 'Space Mono, monospace',
					fontSize: 14, fontWeight: 800, color: colors.black,
					letterSpacing: 1, textShadow: '1px 1px 0 rgba(255,255,255,0.6)',
				}}>
					{caption}
				</div>
			)}
		</div>
	);
}
