import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface ITeacher {
	name: string;
	role: string;
	bio: string;
	tags: string[];
	bg: string;
}

const teachers: ITeacher[] = [
	{
		name: 'Yanbo',
		role: 'JR Academy 创始人 · 主讲',
		bio: 'Amazon / Atlassian 前工程师，10+ 年全栈 + AI 经验，主导 V30 AI 内核设计',
		tags: ['Full-Stack', 'AI Engineering', 'Founder'],
		bg: colors.m4,
	},
	{
		name: 'Ally Tang',
		role: '前端 + Node 主讲',
		bio: '8 年澳洲前端 / Node 教学经验，带过 20+ 期 IT 就业课学员拿到澳洲 offer',
		tags: ['React', 'TypeScript', 'Node.js'],
		bg: colors.m3,
	},
	{
		name: 'Haixin Zhang',
		role: '数据库 + 全栈',
		bio: '全栈架构师，擅长把后端 + 数据库 + 部署串成生产级链路',
		tags: ['MongoDB', 'AWS', 'DevOps'],
		bg: colors.m5,
	},
	{
		name: 'Huansong Zeng',
		role: 'Python + AI Foundations',
		bio: 'Python 资深教练，负责 AI 基础 + Prompt Engineering 模块',
		tags: ['Python', 'Prompt Eng', 'RAG'],
		bg: colors.m7,
	},
	{
		name: 'AI Engineer Bootcamp 导师团',
		role: 'RAG + Agent + MCP',
		bio: 'AI Engineer Bootcamp 现役讲师团，把 AI 工程模块复用到全栈班',
		tags: ['LangChain', 'Agent', 'MCP'],
		bg: colors.m8,
	},
	{
		name: '猎头 Brodie + 校友网络',
		role: 'Career Coach',
		bio: '澳洲本地 IT 猎头 + 匠人校友网络负责求职 Coaching、模拟面试、内推',
		tags: ['Career', 'Interview', 'Referral'],
		bg: colors.m10,
	},
];

export default function S20_Teachers() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '28px 28px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 12 }}>
						TEACHERS · 6 人导师团
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '52px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, margin: 0 }}>
						8 年讲师团 +{' '}
						<span style={{ display: 'inline-block', padding: '0 12px', background: colors.yellow, border, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)' }}>
							AI 新讲师团
						</span>
					</h2>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
					style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}
				>
					{teachers.map((t) => (
						<motion.div
							key={t.name}
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.4 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 16px', display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
								<div style={{ width: 44, height: 44, background: t.bg, color: colors.white, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, flexShrink: 0 }}>
									{t.name.substring(0, 2)}
								</div>
								<div style={{ minWidth: 0 }}>
									<div style={{ fontFamily: fonts.heading, fontSize: '18px', fontWeight: 900, color: colors.black, letterSpacing: -0.3, lineHeight: 1.1 }}>
										{t.name}
									</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, color: t.bg, fontWeight: 700, marginTop: 2 }}>
										{t.role}
									</div>
								</div>
							</div>
							<div style={{ fontFamily: fonts.body, fontSize: 15, color: '#333', fontWeight: 500, lineHeight: 1.4, marginBottom: 10, flex: 1 }}>
								{t.bio}
							</div>
							<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
								{t.tags.map((tag) => (
									<span key={tag} style={{ padding: '2px 7px', background: '#f7f7f7', border: `1.5px solid ${colors.black}`, fontFamily: fonts.mono, fontSize: 13, fontWeight: 700 }}>
										{tag}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Slide>
	);
}
