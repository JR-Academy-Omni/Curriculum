import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH4 收口 —— 被拆到想改方向怎么办：改 W1 那份 SoT 原件，不新建文档
// SoT 六个业务字段来源：../../ai-solo-founder-bootcamp/W1_RUNSHEET.md §1.2
const FIELDS = [
	{ f: '客户', d: '你要服务的到底是谁' },
	{ f: '问题场景', d: '他在什么时候被卡住' },
	{ f: '现有做法', d: '他现在怎么对付这件事' },
	{ f: '方案缺口', d: '现有做法差在哪' },
	{ f: '初步交付', d: '你打算先给他什么' },
	{ f: '验证动作', d: '你打算怎么确认自己没想错' },
];

export default function S21_WhenYouWantToPivot() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§5 · 想改方向了怎么办"
					tagBg={colors.green}
					title="改 W1 那份原件，不要新建第二份文档"
					sub="被拆完想改方向，是今天最正常的反应。但改的方式很重要——开新文档是这门课最常见的自毁动作。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 20 }}>
					{/* 左：六个字段 */}
					<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888', marginBottom: 6 }}>
							W1 那份说明里的六个业务字段
						</div>
						<div style={{ fontSize: 15.5, color: '#555', marginBottom: 14, lineHeight: 1.45 }}>
							想「调整」的人，现在就指出来：<b>你要改的是哪一个字段？</b>说不出是哪一个，那多半不是调整，是心慌。
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
							{FIELDS.map((x, i) => (
								<motion.div
									key={x.f}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.28, delay: 0.15 + i * 0.07 }}
									style={{ border: '2px solid #000', background: '#fdf5ee', padding: '10px 12px' }}
								>
									<div style={{ fontSize: 17, fontWeight: 800 }}>{x.f}</div>
									<div style={{ fontSize: 14, color: '#555', marginTop: 2, lineHeight: 1.4 }}>{x.d}</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* 右：为什么不能开新文档 */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ background: '#ffe3e0', border, boxShadow: shadow, padding: '15px 18px' }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 8 }}>❌ 开一份新的</div>
							<div style={{ fontSize: 15.5, lineHeight: 1.5 }}>
								三周之后你有四份文档，AI 读到的是过期那份，你自己也说不清哪份算数。
								<b>W2 出过的那次事故，根子就是「同时存在两套说法」。</b>
							</div>
						</div>
						<div style={{ background: '#e6f7ea', border, boxShadow: shadow, padding: '15px 18px', flex: 1 }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 8 }}>✅ 改原件</div>
							<div style={{ fontSize: 15.5, lineHeight: 1.5 }}>
								打开 W1 那份，把要改的字段划掉重写，在下面记一行「
								<span style={{ fontFamily: fonts.mono, fontSize: 14, background: colors.white, padding: '0 6px' }}>W3 改：因为 ____</span>
								」。
								<br />
								<br />
								永远只有一份算数的说明。你的 AI、你的同组、三个月后的你自己，读的都是它。
							</div>
						</div>
					</div>
				</div>

				<Punchline bg={colors.red}>
					想「换」方向的人：本周内重跑一遍 W1 锁方向 + W2 简版访谈，<u>并且告诉组内召集人</u>。
					换方向不是退课，是省下后面十二周。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ④</b>「被拆到当场想改方向的，走 W3 的裁决流程改 SoT 原件，不新建文档」；
					<b>L11 step ④</b>「选『调整』的回去改 W1 那份 SoT（改原件，不新建文件）；选『换』的当周内重跑一遍 W1 锁方向 + W2 简版访谈，组内召集人跟进」。
					六个业务字段取自 <b>W1_RUNSHEET.md §1.2</b>。
				</SourceNote>
			</Body>
		</Slide>
	);
}
