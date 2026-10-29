import type { CSSProperties, ReactNode } from 'react';
import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

const box = (bg: string, extra?: CSSProperties): CSSProperties => ({ background: bg, border: `2px solid ${colors.dark}`, borderRadius: 14, padding: '8px 12px', ...extra });

function Node({ title, sub, bg = colors.white, gate }: { title: string; sub?: string; bg?: string; gate?: boolean }) {
	return <div style={box(bg, { flex: 1, minWidth: 0, borderWidth: gate ? 3 : 2 })}>
		<div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.25 }}>{title}</div>
		{sub && <div style={{ fontSize: 15, lineHeight: 1.4, color: '#403b37', marginTop: 3 }}>{sub}</div>}
	</div>;
}

const Arrow = () => <div style={{ alignSelf: 'center', fontSize: 22, fontWeight: 900 }}>→</div>;

function Lane({ label, bg, children }: { label: string; bg: string; children: ReactNode }) {
	return <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 10, alignItems: 'stretch' }}>
		<div style={box(bg, { display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontSize: 22, fontWeight: 800 })}>{label}</div>
		<div style={{ display: 'flex', gap: 6 }}>{children}</div>
	</div>;
}

export default function S02g_CICD() {
	return <DeckFrame tag="W3 · 部署 · CI/CD" title="CI/CD：代码从你的电脑到线上的流水线" subtitle="每次提交都自动检查；通过了才合并，合并后自动送到测试环境，上线前由人批准。" titleSize={46}>
		<div data-lesson-content style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
			<AnimatedGroup delay={.05} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
				<div style={box('#dff3ff')}><b style={{ fontSize: 18 }}>CI · Continuous Integration 持续集成</b><div style={{ fontSize: 16, lineHeight: 1.45, marginTop: 3 }}>每次提交代码，自动跑检查和测试，确认能安全合进主干。</div></div>
				<div style={box('#e7f8df')}><b style={{ fontSize: 18 }}>CD · Continuous Delivery / Deployment</b><div style={{ fontSize: 16, lineHeight: 1.45, marginTop: 3 }}>通过检查的代码自动部署到环境。持续交付：上线前由人点批准；持续部署：自动上线。</div></div>
			</AnimatedGroup>
			<AnimatedGroup delay={.15} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				<Lane label="CI" bg="#dff3ff">
					<Node title="本机写代码" sub="你和 Claude Code" />
					<Arrow />
					<Node title="push / 开 PR" sub="提交到 GitHub" />
					<Arrow />
					<Node title="自动检查" sub="装依赖 · 类型检查 · 测试 · E2E · 构建" bg="#fff7d6" gate />
					<Arrow />
					<Node title="人做 Code Review" sub="看改动是否合理" />
					<Arrow />
					<Node title="合并到 main" />
				</Lane>
				<Lane label="CD" bg="#e7f8df">
					<Node title="自动部署测试环境" sub="用测试库和测试 key" />
					<Arrow />
					<Node title="测试环境验收" sub="走一遍主流程" />
					<Arrow />
					<Node title="人工审批" sub="谁批准，留记录" bg="#fff7d6" gate />
					<Arrow />
					<Node title="发布线上" sub="线上 key 只在流水线里" />
					<Arrow />
					<Node title="线上验证" sub="有问题就回滚" />
				</Lane>
			</AnimatedGroup>
			<AnimatedGroup delay={.25} style={box('#ffe1e1', { fontSize: 17, fontWeight: 700 })}>
				✕ 任何一项检查失败：亮红灯，不能合并；修好再提交，流水线重新跑一遍。
			</AnimatedGroup>
			<AnimatedGroup delay={.32} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
				<div style={box(colors.white)}><b style={{ fontSize: 19 }}>为什么要</b><div style={{ fontSize: 17, lineHeight: 1.5, marginTop: 4 }}>不靠人记得跑测试；坏代码进不了主干；每次上线都是同一套步骤，出问题能查。</div></div>
				<div style={box(colors.white)}><b style={{ fontSize: 19 }}>key 放哪</b><div style={{ fontSize: 17, lineHeight: 1.5, marginTop: 4 }}>线上 key 存在 CI 平台的密钥配置里（例如 GitHub Actions Secrets），不在任何人电脑上。</div></div>
				<div style={box(colors.white)}><b style={{ fontSize: 19 }}>和 Claude 的关系</b><div style={{ fontSize: 17, lineHeight: 1.5, marginTop: 4 }}>Claude 写的代码一样要过这条流水线；它不能绕过检查，也不能直接改线上。</div></div>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
