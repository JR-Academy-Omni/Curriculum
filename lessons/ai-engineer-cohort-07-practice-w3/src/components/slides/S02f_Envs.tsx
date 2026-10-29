import type { CSSProperties } from 'react';
import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

const envs = [
	{ name: '本机 Local', bg: '#dff3ff', who: '开发者 + Claude Code', db: '本地数据库 · 合成数据', key: '开发 key；LLM 用 mock 或低额度测试 key' },
	{ name: '测试 Staging', bg: '#fff7d6', who: '团队集成验收', db: '独立测试库 · 不放真实护理数据', key: '测试专用 key' },
	{ name: '线上 Production', bg: '#e7f8df', who: '养老院真实使用', db: '真实数据', key: '只存在云端 KMS，不在任何人电脑上' },
];

const cell: CSSProperties = { background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 12, padding: '8px 12px', fontSize: 18, lineHeight: 1.4 };
const tag: CSSProperties = { fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: '#6b6158', marginBottom: 2 };

function Flow({ label }: { label: string }) {
	return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
		<div style={{ fontSize: 30, fontWeight: 900 }}>→</div>
		<div style={{ fontSize: 15, fontWeight: 700, textAlign: 'center', lineHeight: 1.3 }}>{label}</div>
	</div>;
}

export default function S02f_Envs() {
	return <DeckFrame tag="W3 · 开发 · 环境与沙箱" title="key 在哪台机器上，决定谁能改线上" subtitle="本机的 Claude Code 能读到 .env：.env 里是哪套 key，它就能改哪套环境。" titleSize={50}>
		<div data-lesson-content style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 1fr 120px 1fr', gap: 8, flex: 1, minHeight: 0 }}>
				{envs.map((e, i) => <div key={e.name} style={{ display: 'contents' }}>
					<AnimatedGroup delay={.1 + i * .15} style={{ background: e.bg, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 800 }}>{e.name}</div>
						<div style={cell}><div style={tag}>谁在用</div>{e.who}</div>
						<div style={cell}><div style={tag}>数据库</div>{e.db}</div>
						<div style={cell}><div style={tag}>key</div>{e.key}</div>
					</AnimatedGroup>
					{i === 0 && <Flow label="push / PR 后部署" />}
					{i === 1 && <Flow label="审批通过，流水线发布" />}
				</div>)}
			</div>
			<AnimatedGroup delay={.6} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
				<div style={{ fontSize: 19, lineHeight: 1.45, borderLeft: `7px solid ${colors.red}`, paddingLeft: 14 }}><b>✕ 本机不能直连线上：</b>不拿线上 key，不把线上数据拷到本机。</div>
				<div style={{ fontSize: 19, lineHeight: 1.45, borderLeft: `7px solid ${colors.orange}`, paddingLeft: 14 }}><b>启动守卫：</b>标记是本机却连着非本机数据库，应用直接拒绝启动。</div>
			</AnimatedGroup>
			<div data-lesson-footer style={{ fontSize: 19, lineHeight: 1.4, fontWeight: 750, padding: '8px 18px', borderRadius: 12, background: '#f9dfc7', color: '#463c32' }}>每套环境一套独立 key、权限最小；代码只能从左往右走，线上改动只走带审批的发布。</div>
		</div>
	</DeckFrame>;
}
