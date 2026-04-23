import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/* TODO(讲师回填): 以下 6 个作品均为示例占位，实际开课前可替换为第四期真实学员作品（名字 + 项目名 + 截图） */
const works = [
	{
		title: '知乎爬虫 + RAG 问答',
		student: '学员 K',
		background: '投行 → AI Engineer',
		desc: '爬取知乎某领域 5 万条问答构建向量库，做垂直搜索',
		stack: ['LangChain', 'Chroma', 'FastAPI'],
		cover: colors.p3,
		emoji: '🔍',
	},
	{
		title: '医疗影像 MCP Server',
		student: '学员 L',
		background: '国内三甲医院 IT',
		desc: '把 DICOM 影像分析能力封装成 MCP Tool，给医生 AI 助手调用',
		stack: ['MCP', 'Python', 'pydicom'],
		cover: colors.p4,
		emoji: '🏥',
	},
	{
		title: '跨境电商 Multi-Agent 客服',
		student: '学员 M',
		background: '独立开发者',
		desc: '3 Agent 协同处理询价/退货/物流，英日西三语自动切换',
		stack: ['LangGraph', 'OpenAI', 'Redis'],
		cover: colors.p6,
		emoji: '🤖',
	},
	{
		title: '法律合同智能审查系统',
		student: '学员 N',
		background: '律所',
		desc: 'RAG + 规则引擎，自动标红合同风险条款并给出修改建议',
		stack: ['RAGAS', 'Pinecone', 'Claude'],
		cover: colors.p5,
		emoji: '⚖️',
	},
	{
		title: '个人 Harness (personal-claude-code)',
		student: '学员 O',
		background: 'ex-Startup CTO',
		desc: '自己写的 coding agent harness，Hook + Tool Loop + Skills',
		stack: ['TypeScript', 'Claude SDK', 'MCP'],
		cover: colors.p8,
		emoji: '⚙️',
	},
	{
		title: '自监督 QLoRA 微调客户支持模型',
		student: '学员 P',
		background: 'SaaS 公司',
		desc: '用历史 ticket 做 SDG 合成数据，QLoRA 微调 Llama 3.1 8B',
		stack: ['QLoRA', 'Unsloth', 'PEFT'],
		cover: colors.p9,
		emoji: '🧬',
	},
];

export default function S25_StudentWorks() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1400, height: '90%', padding: '24px 16px',
				display: 'flex', flexDirection: 'column', gap: 14,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '48px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0,
					}}>
						第四期<span style={{
							display: 'inline-block', padding: '0 12px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>学员</span>做出了什么
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: '14px', color: '#555',
						fontWeight: 700, marginTop: 8, letterSpacing: 0.5,
					}}>
						不是练习题 · 是真实能跑的产品
					</p>
				</motion.div>

				{/* 作品 Grid 3x2 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridTemplateRows: 'repeat(2, 1fr)',
					gap: 12,
					flex: 1,
					minHeight: 0,
				}}>
					{works.map((w, i) => (
						<motion.div
							key={w.title}
							initial={{ opacity: 0, y: 20, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.35, delay: 0.12 + i * 0.07 }}
							style={{
								background: colors.white, border, boxShadow: shadow,
								display: 'flex', flexDirection: 'column',
								overflow: 'hidden',
							}}
						>
							{/* 顶部"截图"色块 — TODO(讲师回填): 替换为真实项目截图 */}
							<div style={{
								height: 70, background: w.cover,
								borderBottom: `3px solid ${colors.black}`,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								position: 'relative', overflow: 'hidden',
							}}>
								<div style={{
									fontSize: 40,
								}}>{w.emoji}</div>
								{/* 伪浏览器窗口小点 */}
								<div style={{
									position: 'absolute', top: 6, left: 8, display: 'flex', gap: 4,
								}}>
									<div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(0,0,0,0.3)' }} />
									<div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(0,0,0,0.3)' }} />
									<div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(0,0,0,0.3)' }} />
								</div>
							</div>

							{/* 内容区 */}
							<div style={{ padding: '10px 12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
								<div style={{
									fontFamily: fonts.heading, fontSize: '17px',
									fontWeight: 900, color: colors.black, lineHeight: 1.2,
								}}>
									{w.title}
								</div>

								<div style={{
									fontFamily: fonts.mono, fontSize: 10, color: '#555',
									fontWeight: 700, marginTop: 6, letterSpacing: 0.2,
								}}>
									<span style={{ color: w.cover }}>■</span> {w.student} · {w.background}
								</div>

								<div style={{
									fontSize: 11, color: '#444', fontWeight: 500,
									lineHeight: 1.4, marginTop: 6, flex: 1,
								}}>
									{w.desc}
								</div>

								<div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
									{w.stack.map((s) => (
										<span key={s} style={{
											padding: '2px 6px', background: colors.dark, color: colors.white,
											fontFamily: fonts.mono, fontSize: 9, fontWeight: 700,
											border: `1.5px solid ${colors.black}`,
										}}>
											{s}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 底部徽章 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					style={{
						padding: '11px 18px', background: colors.red, color: colors.white,
						border, boxShadow: shadowSm, textAlign: 'center',
					}}
				>
					<span style={{
						fontFamily: fonts.heading, fontSize: '18px',
						fontWeight: 900, letterSpacing: 0.3,
					}}>
						100% 毕业拿到 <span style={{ color: colors.yellow }}>AI Engineer 相关 offer / 晋升 / 加薪 / 接项目</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
