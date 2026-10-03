// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04_PRDFive.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const blocks = [
    {
        n: '01', t: '目标 & 范围', color: colors.blue,
        d: '用户、真痛、成功标准 + Must-have / Nice-to-have',
    },
    {
        n: '02', t: '页面 & 流程', color: colors.purple,
        d: 'Pages（标 CRUD 类型）、Components、核心 Flow',
    },
    {
        n: '03', t: '数据 & 输入', color: colors.green,
        d: '资料来源、数据字段、限制',
    },
    {
        n: '04', t: '模块拆解', color: colors.orange,
        d: '前端 / 数据 / 集成 / 部署',
    },
];
const redline = {
    n: '05', t: '红线 / 验收',
    d: '不能做什么 + 怎么算做对',
};
const action = {
    n: '06', t: 'Action / Todo',
    d: 'Build → Test → Deploy → Feedback，逐条打勾',
};
const prdTemplate = `# PRD: [你的产品名]

## 1. 目标 & 范围
- 用户: [谁]
- 场景: [什么时候会用]
- 真痛: [现在卡在哪里]
- 成功标准: [哪个动作/数字变好]
- Must-have: [没有就不能上线]
- Nice-to-have: [时间够再做]

## 2. 页面 & 流程
- Pages: [列出所有页面，标 CRUD 类型]
- Components: [复用哪些组件]
- 核心 Flow: [一条主流程，A → B → C]

## 3. 数据 & 输入
- SoT/资料: [链接或文件路径]
- 数据字段: [需要哪些字段]
- 限制: [登录/隐私/预算/时间]

## 4. 模块拆解
- UI: [页面和组件]
- Logic: [核心规则]
- Data: [本地/接口/数据库]
- Deploy: [如何访问]

## 5. 红线 / 验收
- 不做: [明确砍掉什么]
- 验收: 打开 [URL] -> 点击 [X] -> 看到 [Y]

## 6. Action / Todo List
- [ ] Build: 先跑通 [MVP 主流程]
- [ ] Test: 对着第 5 块「验收」逐条打勾
- [ ] Deploy: 部署到 [URL]，手机打开确认
- [ ] Feedback: 记 3 条真实反馈，写回 CLAUDE.md`;
// PRD 六块（写给 Agent 看的需求蓝图）
export default function L2P04_PRDFive() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>需求蓝图</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						PRD 六块：<span style={{ color: colors.red }}>直接写成 Markdown</span>
						<span style={{ fontSize: 22, fontWeight: 700, color: '#666', marginLeft: 14 }}>不要只写概念</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '0.76fr 1.24fr', gap: 20, alignItems: 'stretch', minHeight: 0 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{blocks.map((x, i) => (<motion.div key={x.n} {...springIn} transition={{ ...springIn.transition, delay: 0.12 + i * 0.08 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '13px 16px', display: 'flex', gap: 14, alignItems: 'center' }}>
								<div style={{ borderRadius: 18, flexShrink: 0, width: 46, height: 46, background: x.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: colors.white }}>{x.n}</div>
								<div style={{ flex: 1 }}>
									<div style={{ fontSize: 20, fontWeight: 900, fontFamily: fonts.heading, color: colors.black }}>{x.t}</div>
									<div style={{ fontSize: 14, color: '#444', marginTop: 3, lineHeight: 1.35, fontWeight: 650 }}>{x.d}</div>
								</div>
							</motion.div>))}

						<motion.div {...springIn} transition={{ ...springIn.transition, delay: 0.48 }} style={{ borderRadius: 18, background: colors.red, border, boxShadow: shadow, padding: '13px 16px', display: 'flex', gap: 14, alignItems: 'center' }}>
							<div style={{ borderRadius: 18, flexShrink: 0, width: 46, height: 46, background: colors.dark, border: `3px solid ${colors.white}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: colors.white }}>{redline.n}</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontSize: 20, fontWeight: 900, fontFamily: fonts.heading, color: colors.white }}>{redline.t}</div>
								<div style={{ fontSize: 14, color: colors.white, marginTop: 3, fontWeight: 750, lineHeight: 1.35 }}>{redline.d}</div>
							</div>
						</motion.div>

						<motion.div {...springIn} transition={{ ...springIn.transition, delay: 0.56 }} style={{ borderRadius: 18, background: colors.dark, border, boxShadow: shadow, padding: '13px 16px', display: 'flex', gap: 14, alignItems: 'center', flex: 1 }}>
							<div style={{ borderRadius: 18, flexShrink: 0, width: 46, height: 46, background: colors.green, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: colors.black }}>{action.n}</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontSize: 20, fontWeight: 900, fontFamily: fonts.heading, color: colors.white }}>{action.t}</div>
								<div style={{ fontSize: 14, color: '#dfe3f0', marginTop: 3, fontWeight: 750, lineHeight: 1.35 }}>{action.d}</div>
							</div>
						</motion.div>
					</div>

					<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.55, ease: [0.16, 1, 0.3, 1] }} style={{ borderRadius: 18, background: '#111827', border, boxShadow: shadow, padding: '16px 18px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 900 }}>prd.md</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#d1d5db', fontWeight: 800 }}>现场直接照这个填</div>
						</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flex: 1, minHeight: 0 }}>
                            {[prdTemplate.split('## 4. 模块拆解')[0].trim(), '## 4. 模块拆解' + prdTemplate.split('## 4. 模块拆解')[1]].map((text, index) => <pre key={index} style={{ margin: 0, borderRadius: 14, background: '#050816', border: `1px solid ${colors.white}`, color: '#f8fafc', padding: '12px 10px', fontFamily: fonts.mono, fontSize: 12, lineHeight: 1.3, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>{text}</pre>)}
                        </div>
					</motion.div>
				</div>
			</Inner>
		</Slide>);
}
