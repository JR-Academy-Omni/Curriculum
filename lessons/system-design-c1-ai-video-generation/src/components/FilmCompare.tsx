import { useState } from 'react';
import { assetPath } from './ui';
import { colors, Label, Panel, Table } from './kit';

const cuts = {
	v1: { label: '原版', shot: 'shot-02-v1', detail: '第二镜的机身颜色与首尾镜不一致' },
	v2: { label: '修订版', shot: 'shot-02-v2', detail: '第二镜保持同一机身颜色' },
} as const;

export default function FilmCompare() {
	const [version, setVersion] = useState<keyof typeof cuts>('v2');
	const cut = cuts[version];
	const cutUrl = assetPath('lab/cut-' + version + '.webm');
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 27 }}>
			<Panel>
				<video key={version} controls playsInline muted preload="metadata" aria-label={cut.label + '广告成片'} src={cutUrl} style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', borderRadius: 14, background: colors.dark }}>
					<track kind="captions" src={assetPath('lab/captions.vtt')} srcLang="en" label="English" default />
				</video>
				<p style={{ marginTop: 15, fontSize: 23 }}><a href={cutUrl} download>下载{cut.label}成片</a></p>
			</Panel>
			<Panel>
				<Label>镜头选用记录</Label>
				<div style={{ display: 'flex', gap: 14, margin: '18px 0' }}>
					{(['v1', 'v2'] as const).map(id => <button key={id} type="button" aria-pressed={version === id} onClick={() => setVersion(id)} style={{ padding: '8px 15px', fontSize: 22, border: '2px solid', borderRadius: 12, background: version === id ? colors.yellow : colors.white, color: colors.dark }}>{cuts[id].label} {id}</button>)}
				</div>
				<Table size={20} head={['镜头', '选用版本']} rows={[[ '首镜', 'shot-01-v1' ], [ '第二镜', cut.shot ], [ '尾镜', 'shot-03-v1' ]]} highlightCol={1} />
				<p aria-live="polite" style={{ fontSize: 21, lineHeight: 1.35, margin: '16px 0 10px' }}>{cut.detail}</p>
				<a href={assetPath('lab/manifest-' + version + '.json')} target="_blank" rel="noreferrer" style={{ fontSize: 21 }}>打开 {version} 合成清单</a>
			</Panel>
		</div>
	);
}
