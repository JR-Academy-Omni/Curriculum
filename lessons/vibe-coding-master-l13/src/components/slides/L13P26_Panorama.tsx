import { motion } from 'framer-motion';
import { ActBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// P21 · 今天你造的是这块 ⭐ 一分钟，不展开
// 🔴 位置是设计过的：讲评之后、收口之前。
//    不放开头（学员还没造东西，架构图只是抽象名词），
//    不放收口之后（收口必须是最后一句话）。
// 🚨 学员一定会追问「权限到底怎么给」，一律答「下节课」。
//    这是本节倒数第二个讲飞点，一开口讲权限模型，收口就没时间了。
const REPOS = [
	{ name: '规则仓', sub: '应该怎样 · 改动可审 · 每次改走 PR', star: true },
	{ name: '记录', sub: '当时怎样 · 写入不可撤 · git 仓 ／ 数据库 ／ 两者', star: false },
	{ name: '产品仓', sub: '真正的业务代码 · agent 只读，绝不写', star: false },
];

export default function L13P26_Panorama() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head>今天你造的是<span style={{ color: colors.purple }}>这块</span></Head>

			<div style={{ display: 'flex', gap: 34, flex: 1, minHeight: 0, alignItems: 'center' }}>
				<div style={{ flex: '0 0 660px', display: 'flex', flexDirection: 'column', gap: 12 }}>
					{REPOS.map((r, i) => (
						<motion.div key={r.name}>
							<motion.div
								initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ delay: i * 0.12 }}
								style={{
									border: r.star ? `4px solid ${colors.purple}` : border,
									background: colors.white, boxShadow: r.star ? shadow : '3px 3px 0 #000',
									padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16,
								}}
							>
								<div style={{ flex: 1 }}>
									<div style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900 }}>{r.name}</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#777', marginTop: 4 }}>{r.sub}</div>
								</div>
								{r.star && (
									<span style={{
										fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1,
										padding: '6px 12px', background: colors.purple, color: colors.white,
									}}>★ 今天</span>
								)}
							</motion.div>
							{i < REPOS.length - 1 && (
								<div style={{ textAlign: 'center', fontFamily: fonts.mono, fontSize: 15, color: '#999', padding: '3px 0' }}>
									▲ 读
								</div>
							)}
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
					style={{ flex: 1, minWidth: 0 }}
				>
					<div style={{
						border: `3px dashed ${colors.dark}`, padding: '22px 24px', marginBottom: 20,
					}}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#888', letterSpacing: 1, marginBottom: 10 }}>
							这三个仓上面还有一层
						</div>
						<div style={{ fontSize: 25, lineHeight: 1.8, fontWeight: 600 }}>
							谁给它权限 · 它接哪些外部系统
							<br />
							它会哪些技能 · 谁来维护
						</div>
						<div style={{
							marginTop: 14, fontFamily: fonts.mono, fontSize: 18, fontWeight: 700,
							color: colors.purple,
						}}>
							↑ 下节课
						</div>
					</div>

					<div style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, lineHeight: 1.45 }}>
						今天先把<span style={{ background: colors.yellow, padding: '2px 10px' }}>地基打对</span>。
					</div>
					<div style={{ fontSize: FS.body, color: '#444', marginTop: 12, lineHeight: 1.65 }}>
						因为地基错了，<b>上面那层越强越危险。</b>
						<br />
						一个规则写得糊涂的仓库，配上一个有写权限的 agent，
						<b style={{ color: colors.red }}>比没有 agent 糟得多。</b>
					</div>
				</motion.div>
			</div>
		</Page>
	);
}
