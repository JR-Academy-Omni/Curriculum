import type { CSSProperties } from 'react';
import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

const box = (bg: string, extra?: CSSProperties): CSSProperties => ({ background: bg, border: `2px solid ${colors.dark}`, borderRadius: 12, padding: '7px 10px', ...extra });
const t: CSSProperties = { fontSize: 17, fontWeight: 800, lineHeight: 1.25 };
const s: CSSProperties = { fontSize: 14, lineHeight: 1.35, color: '#403b37', marginTop: 2 };
const Arrow = ({ label }: { label?: string }) => <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 42 }}>
	<div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1 }}>→</div>
	{label && <div style={{ fontSize: 12, fontWeight: 700, textAlign: 'center', lineHeight: 1.25 }}>{label}</div>}
</div>;

const yaml = `# .github/workflows/ci-cd.yml（示意）
on:
  pull_request:
  push: { branches: [main] }
jobs:
  typecheck: ...      # 下面 4 个 job 并行跑
  unit-test: ...
  e2e: ...            # 起测试数据库，跑 Playwright
  build: ...
  deploy-staging:
    needs: [typecheck, unit-test, e2e, build]
    if: github.ref == 'refs/heads/main'
  deploy-production:
    needs: deploy-staging
    environment: production   # 在仓库设置里指定审批人`;

export default function S02h_Workflow() {
	return <DeckFrame tag="W3 · 部署 · WORKFLOW" title="一条 workflow 是怎么跑的" subtitle="以 GitHub Actions 为例：一个 yml 文件定义触发条件、要跑的任务和先后顺序。" titleSize={46}>
		<div data-lesson-content style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
			<AnimatedGroup delay={.08} style={{ display: 'flex', alignItems: 'stretch', gap: 4 }}>
				<div style={box('#dff3ff', { width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' })}>
					<div style={t}>触发</div>
					<div style={s}>开 PR，或合并到 main</div>
				</div>
				<Arrow />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, width: 380, alignContent: 'center' }}>
					<div style={{ gridColumn: '1 / -1', fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>并行跑的检查任务（job）</div>
					{[['类型检查', 'TypeScript 能不能编译'], ['单元测试', '函数和接口的测试'], ['E2E 测试', '起测试数据库，浏览器走主流程'], ['构建', '前端和 API 能不能打包']].map(([a, b]) =>
						<div key={a} style={box('#fff7d6', { padding: '5px 10px' })}><div style={{ fontSize: 16, fontWeight: 800 }}>{a}</div><div style={s}>{b}</div></div>)}
				</div>
				<Arrow label="全部通过" />
				<div style={box(colors.white, { width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' })}>
					<div style={t}>部署测试环境</div>
					<div style={s}>只在合并到 main 后</div>
				</div>
				<Arrow />
				<div style={box('#ffe9b0', { width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderWidth: 3 })}>
					<div style={t}>等人工审批</div>
					<div style={s}>指定的人点“批准”</div>
				</div>
				<Arrow />
				<div style={box('#e7f8df', { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' })}>
					<div style={t}>部署线上</div>
					<div style={s}>用流水线里的线上 key；部署后检查线上页面和接口</div>
				</div>
			</AnimatedGroup>
			<AnimatedGroup delay={.16} style={box('#ffe1e1', { fontSize: 16, fontWeight: 700, padding: '6px 12px' })}>
				✕ 任何一个检查任务失败：后面的步骤都不会跑，PR 显示红灯，不能合并。
			</AnimatedGroup>
			<AnimatedGroup delay={.24} style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
				<pre style={{ margin: 0, background: colors.dark, color: '#f4f1ea', borderRadius: 12, padding: '10px 14px', fontFamily: fonts.mono, fontSize: 12.5, lineHeight: 1.38, overflow: 'hidden' }}>{yaml}</pre>
				<div style={box(colors.white, { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '10px 14px' })}>
					{[['workflow', '一个 yml 文件，放在 .github/workflows/ 下'], ['on', '什么时候触发：开 PR、推到 main'], ['job', '一组步骤，默认并行跑，各自在干净的机器上'], ['needs', '等前面列出的 job 都成功才开始'], ['environment', '给线上部署设审批人和专用密钥']].map(([k, v]) =>
						<div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 8, alignItems: 'baseline' }}>
							<code style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800 }}>{k}</code>
							<span style={{ fontSize: 16, lineHeight: 1.4 }}>{v}</span>
						</div>)}
				</div>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
