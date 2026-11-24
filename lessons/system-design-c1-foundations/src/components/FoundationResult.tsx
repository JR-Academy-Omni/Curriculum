import { useState } from 'react';
import { assetPath } from './ui';
import { colors, Label, Panel, Steps } from './kit';

const paths = {
	ready: [
		'10:00:00 · upload-12 完成，原文件通过大小检查。',
		'10:00:01 · 创建 job-42，返回 202 和查询地址。',
		'10:01:31 · Worker 写入成品并提交 ready。',
		'10:01:32 · 浏览器刷新状态并读取可播放视频。',
	],
	recovered: [
		'10:01:31 · 第一次尝试写入成品，进程在提交 ready 前退出。',
		'10:01:41 · 租约到期，队列重新投递 job-42。',
		'10:01:42 · 新 Worker 核对成品、源文件版本和媒体规格。',
		'10:01:43 · 条件更新 ready，确认消息；用户打开同一份成品。',
	],
};

export default function FoundationResult() {
	const [path, setPath] = useState<keyof typeof paths>('ready');
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1fr .95fr', gap: 26 }}>
			<Panel>
				<Label>job-42 · ready</Label>
				<video controls playsInline preload="metadata" aria-label="已处理的成品" src={assetPath('lab/processed.webm')} style={{ width: '100%', aspectRatio: '16 / 9', background: colors.dark, marginTop: 15, display: 'block', borderRadius: 14 }} />
				<p style={{ fontSize: 23, marginTop: 14 }}><a href={assetPath('result.html')} target="_blank" rel="noreferrer">打开完整架构和执行轨迹</a></p>
			</Panel>
			<Panel>
				<div style={{ display: 'flex', gap: 14, marginBottom: 21 }}>
					<button type="button" aria-pressed={path === 'ready'} onClick={() => setPath('ready')} style={{ padding: '11px 15px', fontSize: 22, borderRadius: 12, border: '2px solid', background: path === 'ready' ? colors.yellow : colors.white, color: colors.dark }}>正常处理</button>
					<button type="button" aria-pressed={path === 'recovered'} onClick={() => setPath('recovered')} style={{ padding: '11px 15px', fontSize: 22, borderRadius: 12, border: '2px solid', background: path === 'recovered' ? colors.yellow : colors.white, color: colors.dark }}>中断并恢复</button>
				</div>
				<div aria-live="polite"><Steps items={paths[path]} size={22} /></div>
			</Panel>
		</div>
	);
}
