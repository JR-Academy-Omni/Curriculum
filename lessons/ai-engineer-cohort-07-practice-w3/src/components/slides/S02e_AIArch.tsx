import type { CSSProperties, ReactNode } from 'react';
import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

const wk = (t: string) => <span style={{ marginLeft: 6, fontSize: 12, fontWeight: 800, background: colors.yellow, border: `1.5px solid ${colors.dark}`, borderRadius: 6, padding: '1px 6px', whiteSpace: 'nowrap' }}>{t}</span>;
const box = (bg: string, extra?: CSSProperties): CSSProperties => ({ background: bg, border: `2px solid ${colors.dark}`, borderRadius: 14, padding: '8px 12px', ...extra });
const h: CSSProperties = { fontFamily: fonts.heading, fontSize: 18, fontWeight: 800, lineHeight: 1.25 };
const s: CSSProperties = { fontSize: 15, lineHeight: 1.4, color: '#403b37', marginTop: 3 };

function Tool({ title, week, children }: { title: string; week: string; children: ReactNode }) {
	return <div style={box(colors.white, { display: 'flex', flexDirection: 'column' })}>
		<div style={h}>{title}{wk(week)}</div>
		<div style={s}>{children}</div>
	</div>;
}

export default function S02e_AIArch() {
	return <DeckFrame tag="W3 · PRD · AI 架构" title="AI 部分怎么接进来：Agent、RAG、记忆" subtitle="后面几周逐步加；所有 AI 的输出先成为草稿，经人确认才算数。" titleSize={46}>
		<div data-lesson-content style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 250px', gap: 12 }}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 7, minHeight: 0 }}>
				<AnimatedGroup delay={.05} style={box('#e7f8df', { padding: '5px 12px', fontSize: 16, fontWeight: 700 })}>
					入口：护理端录音或提问 · 管理端查询 · 后台任务 → 先过 API 的共用检查（身份、角色、养老院）
				</AnimatedGroup>
				<AnimatedGroup delay={.12} style={box('#f3e6fb', { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 7 })}>
					<div style={h}>Agent Harness{wk('W11')}<span style={{ ...s, marginLeft: 10, display: 'inline' }}>管每次运行：步数和费用预算、检查点与重放、有副作用的动作要人工审批、全程 trace</span></div>
					<div style={box(colors.white)}>
						<div style={h}>CareKind Agent{wk('W9')}</div>
						<div style={s}>有边界的 Agent：理解任务，决定调用哪个工具；只能产出草稿，不能自己确认</div>
					</div>
					<div style={{ textAlign: 'center', fontSize: 14, fontWeight: 700 }}>▼ 调用工具</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, flex: 1, minHeight: 0 }}>
						<Tool title="RAG 检索" week="W7">检索政策文档回答问题：带引用、查不到就说不知道、按权限过滤</Tool>
						<Tool title="长期记忆" week="W10">只存人工确认过的事实；按老人、用户、角色隔离；带来源和过期时间，可更正删除</Tool>
						<Tool title="业务工具" week="W9">调用现有 API：查老人和任务、写交班记录草稿</Tool>
						<Tool title="语音转写" week="W4">录音 → 可编辑转写 → 人工确认；不直接生成 Note</Tool>
					</div>
				</AnimatedGroup>
				<AnimatedGroup delay={.22} style={{ display: 'grid', gridTemplateColumns: '1fr 28px 1fr', gap: 6, alignItems: 'center' }}>
					<div style={box(colors.white)}><div style={h}>模型路由{wk('W12')}</div><div style={s}>所有模型调用都经过这里：按任务选模型、供应商白名单、超时与降级</div></div>
					<div style={{ fontSize: 22, fontWeight: 900, textAlign: 'center' }}>→</div>
					<div style={box('transparent', { borderStyle: 'dashed' })}><div style={h}>外部模型供应商</div><div style={s}>key 由 Super Admin 配置，只经路由调用</div></div>
				</AnimatedGroup>
				<AnimatedGroup delay={.3} style={box('#e7f8df', { padding: '6px 12px', fontSize: 15, fontWeight: 700 })}>
					存储：业务数据库 · 向量库（文档与记忆，W10 用 pgvector）· 对象存储（录音）· trace（OpenTelemetry）
				</AnimatedGroup>
			</div>
			<AnimatedGroup delay={.35} style={box('#fff7d6', { display: 'flex', flexDirection: 'column', gap: 8 })}>
				<div style={h}>评估流水线{wk('W6')}</div>
				<div style={s}>写 RAG 之前先建：</div>
				<div style={s}>· 10–15 条带版本的黄金用例</div>
				<div style={s}>· 格式、引用、该说不知道、权限等确定性检查</div>
				<div style={s}>· RAGAS 加人工评分</div>
				<div style={s}>· 定最低分数线，W7 的 RAG 必须持续通过</div>
				<div style={{ ...s, marginTop: 'auto', fontWeight: 700, color: colors.dark }}>结果回到业务：AI 输出 → Draft → 审核人 Review → Confirm</div>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
