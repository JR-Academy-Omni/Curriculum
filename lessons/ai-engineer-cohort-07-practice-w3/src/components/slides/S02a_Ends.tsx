import type { CSSProperties, ReactNode } from 'react';
import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

const box = (bg: string, extra?: CSSProperties): CSSProperties => ({ background: bg, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '14px 18px', ...extra });
const chip: CSSProperties = { display: 'inline-flex', alignItems: 'center', background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 10, padding: '5px 11px', fontSize: 18, fontWeight: 700, whiteSpace: 'nowrap' };
const head: CSSProperties = { fontFamily: fonts.heading, fontSize: 25, fontWeight: 800, lineHeight: 1.2 };
const note: CSSProperties = { fontSize: 17, color: '#463c32', marginTop: 4 };

function Chips({ items }: { items: string[] }) {
	return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>{items.map(t => <span key={t} style={chip}>{t}</span>)}</div>;
}

function Down({ label }: { label?: string }) {
	return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
		<div style={{ width: 0, height: 18, borderLeft: `3px solid ${colors.dark}` }} />
		<div style={{ fontSize: 15, lineHeight: 1, marginTop: -2 }}>▼</div>
		{label && <div style={{ fontFamily: fonts.mono, fontSize: 13, marginTop: 2 }}>{label}</div>}
	</div>;
}

function Step({ children }: { children: ReactNode }) {
	return <span style={{ ...chip, background: colors.yellow }}>{children}</span>;
}

export default function S02a_Ends() {
	return <DeckFrame tag="W3 · PRD · 系统架构" title="三个端，共用一套 API 和数据库" subtitle="一线服务人员、养老院管理人员、我们自己，各用一个端。" titleSize={52}>
		<div data-lesson-content style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 6 }}>
			<AnimatedGroup delay={.1} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr .55fr', gap: 14 }}>
				<div style={box('#e7f8df')}>
					<div style={head}>护理端 · Care App</div>
					<div style={note}>护士、护理员，用手机</div>
					<Chips items={['班次和任务', '记录活动', '写交班记录']} />
				</div>
				<div style={box('#dff3ff')}>
					<div style={head}>养老院管理端</div>
					<div style={note}>院管理员、主管，用电脑</div>
					<Chips items={['老人和排班', '本院员工', '审核确认']} />
				</div>
				<div style={box('#f3e6fb')}>
					<div style={head}>平台端 · Super Admin</div>
					<div style={note}>我们自己用；单独打包、单独域名</div>
					<Chips items={['开通养老院', '配置与密钥', '审计']} />
				</div>
				<div style={box('transparent', { borderStyle: 'dashed', opacity: .6 })}>
					<div style={head}>家属端</div>
					<div style={note}>以后再做；只看被授权的信息</div>
				</div>
			</AnimatedGroup>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr .55fr', gap: 14 }}>
				<Down label="登录令牌 + HTTPS" /><Down label="登录令牌 + HTTPS" /><Down label="登录令牌 + HTTPS" /><div />
			</div>
			<AnimatedGroup delay={.25} style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 18, alignItems: 'stretch' }}>
				<div style={box(colors.white)}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
						<span style={head}>API 服务</span>
						<span style={{ fontSize: 17, color: '#463c32' }}>每个请求依次检查：</span>
						<Step>身份</Step><span>→</span><Step>角色</Step><span>→</span><Step>哪家养老院</Step><span>→</span><Step>对象当前状态</Step>
					</div>
					<div style={note}>Zod 校验入参；框架以 starter 为准</div>
				</div>
				<div style={box('#fff7d6', { display: 'flex', flexDirection: 'column', justifyContent: 'center' })}>
					<div style={{ fontSize: 19, fontWeight: 800 }}>← 环境变量 + KMS</div>
					<div style={note}>启动密钥只给 API，不进前端</div>
				</div>
			</AnimatedGroup>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 18 }}><Down label="Prisma" /><div /></div>
			<AnimatedGroup delay={.4} style={box('#e7f8df')}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
					<span style={head}>数据库</span>
					{['Resident', 'Shift', 'Task', 'Care Activity', 'Progress Note（带版本）', 'Audit Event'].map(t => <span key={t} style={chip}>{t}</span>)}
				</div>
				<div style={note}>每条数据都带所属养老院（facilityId）；关键动作和 audit 在同一个事务里写入</div>
			</AnimatedGroup>
			<div data-lesson-footer style={{ marginTop: 'auto', fontSize: 19, lineHeight: 1.4, fontWeight: 750, padding: '8px 18px', borderRadius: 12, background: '#f9dfc7', color: '#463c32' }}>候选架构，以 starter 为准；每个端只能看到本养老院的数据（平台端除外）。</div>
		</div>
	</DeckFrame>;
}
