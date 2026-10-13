import { motion } from 'framer-motion';
import { Page, Head, colors, fonts, border, radii, FS } from '../deck';

/**
 * P01 · 十四节清点（⭐ 独占一屏）
 * 左列产物 / 右列「它现在活在哪」。
 * 🔴 视觉任务：右列要【明显地乱】—— 不同文件、不同目录、不同层。这一页的任务是让人不舒服。
 * 讲师不评论它乱（RUNSHEET §5 埋点），P06 标完 scope 让它自己说话。
 */
const ROWS: { n: string; what: string; where: string; tone: 'file' | 'dir' | 'cfg' }[] = [
	{ n: '五', what: '一个技能', where: '自己电脑上某个目录', tone: 'dir' },
	{ n: '七', what: '一个分了家的助手', where: '另一个目录', tone: 'dir' },
	{ n: '十一', what: '一个定时任务', where: '你的账号里，看不见摸不着', tone: 'cfg' },
	{ n: '十二', what: '一个钩子', where: '一份配置文件的某一段', tone: 'cfg' },
	{ n: '十三', what: '一个规则仓库', where: '一个 git 仓库', tone: 'file' },
	{ n: '十四', what: '一张写权限表 + 一份技能规范', where: '那个仓库里，也可能在文档里', tone: 'file' },
];

const TONE: Record<string, string> = { file: colors.green, dir: colors.blue, cfg: colors.orange };

export default function L15P01_Inventory() {
	return (
		<Page>
			<Head>你手上现在有什么</Head>

			<div style={{
				border, borderRadius: radii.card, background: colors.white,
				boxShadow: `8px 8px 0 rgba(255,222,89,.92)`, overflow: 'hidden',
			}}>
				<div style={{ display: 'grid', gridTemplateColumns: '92px 1fr 1fr' }}>
					{['第几节', '你造了什么', '现在活在哪'].map((h, i) => (
						<div key={i} style={{
							padding: '11px 18px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1,
							borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
						}}>{h}</div>
					))}
				</div>

				{ROWS.map((r, i) => (
					<motion.div
						key={r.n}
						initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.12 + i * 0.09, duration: 0.4 }}
						style={{ display: 'grid', gridTemplateColumns: '92px 1fr 1fr', borderTop: `2px solid ${colors.black}` }}
					>
						<div style={{
							padding: '12px 18px', fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
							borderRight: `2px solid ${colors.black}`, color: '#777',
						}}>{r.n}</div>
						<div style={{
							padding: '12px 18px', fontSize: 22, lineHeight: 1.45, fontWeight: 600,
							borderRight: `2px solid ${colors.black}`,
						}}>{r.what}</div>
						{/* 右列：每一行一个不同的色块 —— 视觉上就是「散的」 */}
						<div style={{ padding: '12px 18px', fontSize: 20, lineHeight: 1.45, display: 'flex', alignItems: 'center', gap: 10 }}>
							<span style={{
								width: 11, height: 11, borderRadius: radii.pill, flexShrink: 0,
								background: TONE[r.tone], border: `2px solid ${colors.black}`,
							}} />
							<span style={{ color: '#555' }}>{r.where}</span>
						</div>
					</motion.div>
				))}
			</div>

			<motion.p
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
				style={{ marginTop: 22, fontSize: FS.body, color: '#6b6b6b', lineHeight: 1.6 }}
			>
				每一节都造了一样真东西 —— 不是笔记，是能跑起来的。
			</motion.p>
		</Page>
	);
}
