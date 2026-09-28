import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P06：两层门 + 6 张任务卡快速分类
// SoT：蓝图 v1.0 §6.3 两层门 + §9.3 快速分类
const READY = [
	'子任务边界能一句话说清',
	'必要 context 能在开工前交齐或指向稳定文件',
	'产出有明确格式和验收判据',
	'与其他任务没有未处理的写入重叠或前后依赖',
];

const CARDS = [
	{ n: '1', t: '查一个函数定义在哪' },
	{ n: '2', t: '从 20,000 行日志里找首次异常并给证据' },
	{ n: '3', t: '分别排查前端、API、数据库三种登录失败假设' },
	{ n: '4', t: '修改一个已知文件里的常量并跑已有测试' },
	{ n: '5', t: '对已完成的权限改动按 5 条安全判据做只读审查' },
	{ n: '6', t: '把一份 200 行的 CSV 转成另一种格式' },
];

export default function L7P06_TwoGates() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 50%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.red}>判断尺</Tag>
						<Tag bg={colors.dark}>带走这一页</Tag>
					</div>
					<Title size="42px" style={{ marginBottom: 14 }}>
						两层<span style={{ background: colors.yellow, padding: '0 10px' }}>门</span>
					</Title>

					<motion.div
						initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.12 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 14 }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10, background: colors.green, padding: '9px 15px' }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.black, opacity: 0.7 }}>第一层</span>
							<span style={{ fontSize: 16.5, fontWeight: 800, color: colors.black }}>至少命中一项强收益</span>
						</div>
						<div style={{ padding: '12px 16px', fontSize: 15, color: '#444', lineHeight: 1.7 }}>
							隔离噪音 · 并行分支 · 独立视角
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 16 }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10, background: colors.orange, padding: '9px 15px' }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.white, opacity: 0.85 }}>第二层</span>
							<span style={{ fontSize: 16.5, fontWeight: 800, color: colors.white }}>四条就绪条件全部通过</span>
						</div>
						<div style={{ padding: '11px 16px' }}>
							{READY.map((r, i) => (
								<div key={r} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: i < READY.length - 1 ? 7 : 0 }}>
									<span style={{ flex: '0 0 auto', width: 14, height: 14, border: '2px solid #bbb', marginTop: 3 }} />
									<span style={{ fontSize: 14.5, color: '#444', lineHeight: 1.45 }}>{r}</span>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.55 }}
						style={{ padding: '13px 17px', background: colors.dark, color: colors.white, border, boxShadow: shadow, fontSize: 15.5, lineHeight: 1.6 }}
					>
						只有强收益、没有就绪条件 → <span style={{ color: colors.yellow, fontWeight: 700 }}>先拆任务</span>。<br />
						两层都过，也只代表<span style={{ color: colors.yellow, fontWeight: 700 }}>有资格进入成本比较</span>，不代表自动该派。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.purple, letterSpacing: 1.4, fontWeight: 700, marginBottom: 6 }}>
						现在投一次：直接做 / 派出去
					</div>
					<p style={{ fontSize: 14, color: '#777', marginBottom: 12, lineHeight: 1.5 }}>
						讲完两层门再投第二次。重点不在标准答案，在你能不能说出<strong>为什么需要一个新 context</strong>。
					</p>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
						{CARDS.map((c, i) => (
							<motion.div
								key={c.n}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.25 + i * 0.08 }}
								style={{ display: 'flex', border, boxShadow: '3px 3px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 38px', background: colors.dark, color: colors.yellow,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
								}}>{c.n}</div>
								<div style={{ flex: 1, padding: '11px 14px', fontSize: 15, color: colors.dark, display: 'flex', alignItems: 'center', lineHeight: 1.4 }}>
									{c.t}
								</div>
								<div style={{ flex: '0 0 96px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
									<span style={{ width: 13, height: 13, border: '2px solid #ccc' }} />
									<span style={{ width: 13, height: 13, border: '2px solid #ccc' }} />
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
						style={{ marginTop: 12, fontSize: 13.5, color: '#999', textAlign: 'right', fontFamily: fonts.mono }}
					>
						左格 = 第一次投　右格 = 讲完两层门后再投
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
