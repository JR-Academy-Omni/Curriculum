import { motion } from 'framer-motion';
import { ActBadge, Page, Head, READ_VS_COUNT, RECORD_EXAMPLES, colors, fonts, border, shadow, FS } from '../deck';

// P07 · 被读，还是被数 ⭐ v3 新增 · 正课只给判据，完整三方案在附录 A8
// 🔴 学员课堂上不建记录仓，但回去第一天就要做这个选型，所以判据必须在正课。
// 🔴 判据只有一句，因为混合方案的代价就是「这条记录该去哪」变成每天的判断，
//    判据不简单到能写进模板里，那个代价就还不起。
// 🔴 三人小组的正确答案是「用你们已经在用的那个工具」,不要为这门课另建一个仓。
export default function L13P07_ReadOrCount() {
	return (
		<Page>
			<ActBadge act={1} />
			<Head sub="记录只有一条硬要求：只能追加。但它用什么存？">
				这条记录，是要被<span style={{ color: colors.blue }}>读</span>，
				还是要被<span style={{ color: colors.purple }}>数</span>？
			</Head>

			{/* 🔴 不要 flex: 1 ,它会撑满剩余空间把底部推到页脚，中间空出三分之一页。
			    内容聚在上半，底部统一留白。 */}
			<div style={{ display: 'flex', gap: 26, alignItems: 'flex-start' }}>
				<div style={{ flex: '1 1 0', minWidth: 0, border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
					<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr' }}>
						{[
							{ t: '拿这四件事去问', c: colors.dark },
							{ t: '被读 → git', c: colors.blue },
							{ t: '被数 → 数据库', c: colors.purple },
						].map((h, i) => (
							<div key={i} style={{
								padding: '11px 16px', background: h.c, color: colors.white,
								fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
								borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
							}}>{h.t}</div>
						))}
					</div>
					{READ_VS_COUNT.map((r) => (
						<div key={r.k} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', borderTop: `2px solid ${colors.black}` }}>
							<div style={{ padding: '11px 16px', fontSize: 18, fontWeight: 700, background: '#f3efe9', borderRight: `2px solid ${colors.black}`, color: '#555' }}>{r.k}</div>
							<div style={{ padding: '11px 16px', fontSize: 20, borderRight: `2px solid ${colors.black}`, lineHeight: 1.4 }}>{r.read}</div>
							<div style={{ padding: '11px 16px', fontSize: 20, lineHeight: 1.4 }}>{r.count}</div>
						</div>
					))}
				</div>

				<div style={{ flex: '0 0 480px', display: 'flex', flexDirection: 'column', gap: 12 }}>
					{[
						{ t: '进 git', items: RECORD_EXAMPLES.git, c: colors.blue },
						{ t: '进数据库', items: RECORD_EXAMPLES.db, c: colors.purple },
					].map((g) => (
						<div key={g.t} style={{ border, background: colors.white, boxShadow: '3px 3px 0 #000', padding: '12px 16px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: g.c, marginBottom: 7 }}>{g.t}</div>
							{g.items.map((x) => (
								<div key={x} style={{ fontSize: 19, lineHeight: 1.65 }}>
									<span style={{ color: g.c, marginRight: 8 }}>→</span>{x}
								</div>
							))}
						</div>
					))}
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
				style={{ marginTop: 18, display: 'flex', gap: 20 }}
			>
				<div style={{ flex: 1, fontSize: FS.note, lineHeight: 1.65, color: '#444' }}>
					<b>既要读又要数的</b>（比如破例记录）：<b>写进 git，让脚本去数。</b>
					几百条以内脚本数得动；超过了再拆 ,结构化字段进库、理由文本留 git、用一个 id 挂起来。
				</div>
				<div style={{
					flex: '0 0 460px', border: `3px solid ${colors.green}`, background: colors.white,
					padding: '12px 16px', fontSize: 20, lineHeight: 1.5,
				}}>
					<b>三个人的组：用你们已经在用的那个工具。</b>
					<br />
					<span style={{ color: '#777', fontSize: 17 }}>不要为这门课另建一个仓。完整三方案见附录。</span>
				</div>
			</motion.div>
		</Page>
	);
}
