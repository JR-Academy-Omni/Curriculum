import type { CSSProperties } from 'react';
import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

type Mod = { name: string; what: string; tables: string; who: string; later?: string };

const modules: Mod[] = [
	{ name: '认证与账号', what: '登录、发令牌、退出、找回密码', tables: 'User · Session', who: '三个端' },
	{ name: '养老院与员工', what: '开通养老院，管员工和角色分配', tables: 'Facility · Staff · Role', who: '平台端 · 管理端' },
	{ name: '老人与排班', what: '老人档案、班次、每班任务', tables: 'Resident · Shift · Task', who: '管理端建 · 护理端看' },
	{ name: '护理记录', what: '记活动、写交班记录；草稿 → 审核 → 确认，带版本', tables: 'Care Activity · Progress Note', who: '护理端写 · 管理端审' },
	{ name: '审计', what: '关键动作留操作记录，可按养老院查询', tables: 'Audit Event', who: '平台端 · 管理端' },
	{ name: '配置与密钥', what: '功能开关、模型选择、供应商 key（只写不读）', tables: 'Config', who: '平台端' },
	{ name: '录音与转写', what: '上传录音，后台转写，人工确认转写', tables: 'Audio · Transcription Job', who: '护理端', later: 'W4 起' },
	{ name: 'AI 模型路由', what: '按任务选模型，超时与降级，统一调用', tables: '调外部 AI 供应商', who: '后台', later: 'W12 起' },
];

const infra = [
	{ name: '数据库（Prisma）', note: '所有业务表，每条带 facilityId' },
	{ name: '环境变量 + KMS', note: '启动密钥，只给 API' },
	{ name: '对象存储', note: '存录音文件', later: 'W4 起' },
	{ name: '任务队列 + Worker', note: '后台跑转写', later: 'W4 起' },
	{ name: '外部 AI 供应商', note: '只经适配层调用', later: 'W4 起' },
];

const cardStyle = (later?: string): CSSProperties => ({
	background: later ? 'transparent' : colors.white,
	border: `2px ${later ? 'dashed' : 'solid'} ${colors.dark}`,
	borderRadius: 14,
	padding: '9px 12px',
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	opacity: later ? .78 : 1,
});

const small: CSSProperties = { fontSize: 15, lineHeight: 1.35, color: '#403b37' };
const mono: CSSProperties = { fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#5b5249' };

function Later({ text }: { text: string }) {
	return <span style={{ marginLeft: 6, fontSize: 12, fontWeight: 800, background: colors.yellow, border: `1.5px solid ${colors.dark}`, borderRadius: 6, padding: '1px 6px' }}>{text}</span>;
}

export default function S02d_ArchDetail() {
	return <DeckFrame tag="W3 · PRD · 详细架构" title="按功能拆开：API 里有哪些模块" subtitle="实线本周要用；虚线是后面几周才加的部分。" titleSize={48}>
		<div data-lesson-content style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
			<AnimatedGroup delay={.05} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
				{[['护理端', '#e7f8df'], ['养老院管理端', '#dff3ff'], ['平台端 · Super Admin', '#f3e6fb']].map(([n, bg]) =>
					<div key={n} style={{ background: bg, border: `2px solid ${colors.dark}`, borderRadius: 12, padding: '6px 12px', fontSize: 18, fontWeight: 800, textAlign: 'center' }}>{n}</div>)}
			</AnimatedGroup>
			<AnimatedGroup delay={.12} style={{ background: colors.yellow, border: `2px solid ${colors.dark}`, borderRadius: 12, padding: '6px 14px', fontSize: 17, fontWeight: 700, textAlign: 'center' }}>
				每个请求先过共用检查：身份 → 角色 → 哪家养老院 → 对象当前状态 · Zod 校验入参 · 关键动作和 audit 同一事务写入
			</AnimatedGroup>
			<AnimatedGroup delay={.2} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, flex: 1, minHeight: 0 }}>
				{modules.map(m => <div key={m.name} style={cardStyle(m.later)}>
					<div style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 800 }}>{m.name}{m.later && <Later text={m.later} />}</div>
					<div style={small}>{m.what}</div>
					<div style={{ ...mono, marginTop: 'auto' }}>{m.tables}</div>
					<div style={{ fontSize: 13, fontWeight: 700 }}>{m.who}</div>
				</div>)}
			</AnimatedGroup>
			<AnimatedGroup delay={.3} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
				{infra.map(x => <div key={x.name} style={{ ...cardStyle(x.later), background: x.later ? 'transparent' : '#e7f8df' }}>
					<div style={{ fontSize: 16, fontWeight: 800 }}>{x.name}{x.later && <Later text={x.later} />}</div>
					<div style={small}>{x.note}</div>
				</div>)}
			</AnimatedGroup>
			<div data-lesson-footer style={{ fontSize: 16, lineHeight: 1.4, fontWeight: 750, padding: '6px 16px', borderRadius: 12, background: '#f9dfc7', color: '#463c32' }}>上线前还要补：日志监控与告警、备份恢复、通知、CDN 与限流。表名为示意，以 starter 的 schema 为准。</div>
		</div>
	</DeckFrame>;
}
