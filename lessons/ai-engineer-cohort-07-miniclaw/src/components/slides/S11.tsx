import { AnimatedGroup, DeckFrame, Label } from '../deck';
import { colors, fonts } from '../ui';

const stages = [
	{ index: '01', title: '接真实 Brief', body: '先把用户、业务目标、验收标准和数据边界问清楚，再写 proposal。', color: colors.yellow },
	{ index: '02', title: '按团队开发', body: '4–6 人拆成 AI Dev、Data、DevOps、QA、PM，走 sprint、standup 和 PR review。', color: colors.blue },
	{ index: '03', title: '做到可上线', body: '补齐 eval、trace、权限、Guardrails、CI/CD、故障处理和部署架构。', color: colors.red },
	{ index: '04', title: '拿结果答辩', body: '交公开 Demo、技术文档与 Case Study，最后做 10 分钟 Live Demo。', color: colors.green },
];

const deliverables = [
	['GitHub Repo', '代码、README、架构图与安装说明'],
	['Public Demo', '稳定可访问的部署地址与使用指南'],
	['Engineering Evidence', '评测结果、运行 Trace、性能与安全记录'],
	['Interview Case Study', '问题、取舍、难点、个人贡献与可核实结果'],
];

export default function S11() {
	return <DeckFrame
		tag="主课之后 · P3 CAREER INCUBATOR"
		title="P3 不是再做一个 Demo，而是交付一套 Production 系统"
		subtitle="完成 13 周主课后，进入独立的 12 周团队项目。项目和名额按当期匹配；一旦进入，就按真实研发流程交付。"
		accent={colors.green}
		titleSize={49}
	>
		<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
			<AnimatedGroup delay={.15} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
				{stages.map((stage) => <div key={stage.index} style={{ background: colors.dark, color: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 14, padding: '16px 18px', boxShadow: `6px 6px 0 ${stage.color}` }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
						<span style={{ fontFamily: fonts.mono, color: stage.color, fontWeight: 900, fontSize: 18 }}>{stage.index}</span>
						<strong style={{ fontFamily: fonts.heading, fontSize: 25 }}>{stage.title}</strong>
					</div>
					<p style={{ fontSize: 17, lineHeight: 1.45, margin: '9px 0 0', color: '#dedee5' }}>{stage.body}</p>
				</div>)}
			</AnimatedGroup>

			<div style={{ display: 'grid', gridTemplateColumns: '.72fr 1.28fr', gap: 20, flex: 1, minHeight: 0 }}>
				<AnimatedGroup delay={.24} style={{ background: '#fff8e1', border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '20px 22px', boxShadow: `7px 7px 0 ${colors.yellow}` }}>
					<Label bg={colors.yellow} color={colors.black}>真实团队，不是个人作业</Label>
					<div style={{ fontFamily: fonts.heading, fontSize: 28, lineHeight: 1.2, fontWeight: 900, marginTop: 16 }}>每个人都要说清自己的贡献</div>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
						{['AI DEV', 'DATA', 'DEVOPS', 'QA', 'PM'].map((role) => <span key={role} style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, padding: '7px 10px', border: `2px solid ${colors.dark}`, borderRadius: 999, background: colors.white }}>{role}</span>)}
					</div>
					<p style={{ fontSize: 18, lineHeight: 1.48, margin: '17px 0 0', color: '#413b35' }}>导师每周 1:1 Code Review。Demo Day 不只看功能，也会追问架构、取舍、失败处理和你亲手负责的部分。</p>
				</AnimatedGroup>

				<AnimatedGroup delay={.32} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '20px 22px', boxShadow: `7px 7px 0 ${colors.green}` }}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
						<Label bg={colors.green} color={colors.black}>最后交什么</Label>
						<strong style={{ fontFamily: fonts.mono, fontSize: 15 }}>能运行 · 能解释 · 能验证 · 能放进简历</strong>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 16 }}>
						{deliverables.map(([title, body], index) => <div key={title} style={{ borderTop: `5px solid ${index === 0 ? colors.blue : index === 1 ? colors.green : index === 2 ? colors.red : colors.purple}`, padding: '10px 12px 0', background: '#faf9f5', minHeight: 78 }}>
							<strong style={{ fontFamily: fonts.heading, fontSize: 20 }}>{title}</strong>
							<div style={{ fontSize: 15.5, lineHeight: 1.38, marginTop: 4, color: '#514c48' }}>{body}</div>
						</div>)}
					</div>
				</AnimatedGroup>
			</div>
		</div>
	</DeckFrame>;
}
