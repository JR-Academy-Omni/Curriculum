import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { assetPath } from './ui';
import { colors, Label, Panel } from './kit';

type Quality = 'auto' | '720p' | '360p';

const options: { value: Quality; label: string }[] = [
	{ value: 'auto', label: 'Auto' },
	{ value: '720p', label: '720p' },
	{ value: '360p', label: '360p' },
];

function playlist(quality: Quality) {
	return assetPath(quality === 'auto' ? 'lab/hls/master.m3u8' : 'lab/hls/' + quality + '/index.m3u8');
}

export default function StreamingPlayer() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const engineRef = useRef<Hls | null>(null);
	const [quality, setQuality] = useState<Quality>('auto');
	const [ready, setReady] = useState(false);
	const [error, setError] = useState('');
	const [decoded, setDecoded] = useState('等待首帧');
	const [fragment, setFragment] = useState('播放后显示');

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		const updateSize = () => {
			if (video.videoHeight > 0) setDecoded(video.videoWidth + ' × ' + video.videoHeight);
		};
		video.addEventListener('resize', updateSize);
		video.addEventListener('loadedmetadata', updateSize);
		const handleError = () => setError('无法播放当前片段。刷新本页，或打开下方档位清单。');
		video.addEventListener('error', handleError);
		let hls: Hls | null = null;
		if (Hls.isSupported()) {
			hls = new Hls({ capLevelToPlayerSize: false, startLevel: -1, maxBufferLength: 8 });
			engineRef.current = hls;
			hls.on(Hls.Events.MANIFEST_PARSED, () => setReady(true));
			hls.on(Hls.Events.FRAG_CHANGED, (_event, message) => {
				const parts = new URL(message.frag.url).pathname.split('/');
				setFragment(parts.slice(-2).join('/'));
			});
			hls.on(Hls.Events.ERROR, (_event, message) => {
				if (message.fatal) handleError();
			});
			hls.attachMedia(video);
			hls.loadSource(playlist('auto'));
		} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
			video.src = playlist('auto');
			setFragment('查看浏览器网络请求');
			setReady(true);
		} else {
			setError('当前浏览器无法播放 HLS。可在支持 HLS 的浏览器打开，或用 FFplay 打开档位清单。');
		}
		return () => {
			video.removeEventListener('resize', updateSize);
			video.removeEventListener('loadedmetadata', updateSize);
			video.removeEventListener('error', handleError);
			hls?.destroy();
			engineRef.current = null;
		};
	}, []);

	function choose(next: Quality) {
		const hls = engineRef.current;
		if (hls) {
			const level = next === 'auto' ? -1 : hls.levels.findIndex(item => item.height === Number.parseInt(next, 10));
			if (next !== 'auto' && level < 0) {
				setError('播放列表缺少所选档位。');
				return;
			}
			hls.currentLevel = level;
		} else if (videoRef.current) {
			videoRef.current.src = playlist(next);
		}
		setError('');
		setQuality(next);
	}

	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1.42fr 1fr', gap: 27, alignItems: 'stretch' }}>
			<Panel>
				<video ref={videoRef} controls playsInline muted aria-label="双档 HLS 课堂回放" style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', background: colors.dark, borderRadius: 14 }} />
			</Panel>
			<Panel>
				<Label>双档 HLS</Label>
				<div aria-label="选择画质" style={{ marginTop: 19, display: 'flex', gap: 11 }}>
					{options.map(({ value, label }) => <button type="button" key={value} disabled={!ready} aria-pressed={quality === value} onClick={() => choose(value)} style={{ padding: '8px 16px', fontSize: 22, border: '2px solid', borderRadius: 12, background: quality === value ? colors.yellow : colors.white, color: colors.dark }}>{label}</button>)}
				</div>
				<dl aria-live="polite" style={{ display: 'grid', gap: 10, margin: '25px 0 19px', fontSize: 24 }}>
					<dt>实际解码尺寸</dt><dd data-testid="decoded-size" style={{ margin: 0, fontWeight: 800 }}>{decoded}</dd>
					<dt>最近播放片段</dt><dd style={{ margin: 0, fontWeight: 800 }}>{fragment}</dd>
				</dl>
				{error && <p role="alert" style={{ fontSize: 20, lineHeight: 1.4 }}>{error}</p>}
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 18px', fontSize: 21, marginTop: 17 }}>
					<a href={playlist('auto')} target="_blank" rel="noreferrer">主列表</a>
					<a href={playlist('720p')} target="_blank" rel="noreferrer">720p 列表</a>
					<a href={playlist('360p')} target="_blank" rel="noreferrer">360p 列表</a>
				</div>
			</Panel>
		</div>
	);
}
