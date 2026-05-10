import { type CSSProperties } from 'react';

interface VideoBgProps {
	src: string;
	overlay?: string;
	style?: CSSProperties;
}

/**
 * src 是相对 public/ 的路径，例如 "videos/cinematic-wide.mp4"
 * 会自动拼上 vite base URL，所以 dev (/) 和 prod (/curriculum/...) 都能用
 */
export default function VideoBg({ src, overlay = 'rgba(16,22,47,0.55)', style }: VideoBgProps) {
	const baseRaw = (import.meta as unknown as { env: { BASE_URL: string } }).env.BASE_URL;
	const base = baseRaw.replace(/\/$/, '');
	const url = `${base}/${src.replace(/^\//, '')}`;
	return (
		<>
			<video
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
				src={url}
				style={{
					position: 'absolute', inset: 0, width: '100%', height: '100%',
					objectFit: 'cover', objectPosition: 'center',
					zIndex: 0, pointerEvents: 'none', ...style,
				}}
			/>
			<div
				style={{
					position: 'absolute', inset: 0,
					background: overlay, zIndex: 0, pointerEvents: 'none',
				}}
			/>
		</>
	);
}
