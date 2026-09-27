import { motion } from 'framer-motion';
import { ActBadge, Page, Head, SWITCHES, colors, fonts, border, shadow, FS } from '../deck';

// P18 · 不是滑块，是一组开关 ⭐
// 🔴 回收 P04 的「最怕什么」：规则仓怕「改了没人知道」，记录仓怕「写过的被抹掉」。
//    五个开关就是这两句话配出来的。
// 🔴 本页最反直觉的一格是中间三行：**两边都是「开」，但理由不同**。
//    同一个设置服务两个不同目的，学员最容易把它读成「反正都开，不用想」。
// 🔴 学员最容易犯的错是全开。全开的后果是记录仓没人写了。
// 🔴 最后那句最实用：分支保护必须被「试」出来，不是「读」出来。
//    第三行「普通 push 必须成功」和前两行一样重要。
export default function L13P23_Switches() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head sub="回到那两句话：规则怕「改了没人知道」，记录怕「写过的被抹掉」。下面这张表的前提是：记录你也放 git。">
				不是滑块，<span style={{ color: colors.teal }}>是一组独立开关</span>
			</Head>

			{/* flexShrink: 0，跟 Code 组件同一类 bug：overflow:hidden 的容器在 flex 列里
			    会被静默压扁，最后一行直接消失而且不报错。宁可撑破画布让核对脚本抓到。 */}
			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.6fr 0.6fr 2.4fr' }}>
					{['开关', '规则仓', '记录（也放 git 时）', '理由'].map((h, i) => (
						<div key={h} style={{
							padding: '9px 16px',
							background: i === 1 ? colors.blue : i === 2 ? colors.purple : colors.dark,
							color: colors.white,
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, textAlign: i === 1 || i === 2 ? 'center' : 'left',
							borderRight: i < 3 ? `2px solid ${colors.black}` : 'none',
						}}>{h}</div>
					))}
				</div>
				{SWITCHES.map((s, i) => (
					<motion.div
						key={s.k}
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 * i }}
						style={{
							display: 'grid', gridTemplateColumns: '1.2fr 0.6fr 0.6fr 2.4fr',
							borderTop: `2px solid ${colors.black}`,
							background: s.same ? 'rgba(203,108,230,0.09)' : colors.white,
						}}
					>
						<div style={{ padding: '10px 16px', fontSize: 20, borderRight: `2px solid ${colors.black}`, fontWeight: 600 }}>{s.k}</div>
						{[s.rules, s.log].map((v, j) => (
							<div key={j} style={{
								padding: '10px 16px', fontSize: 20, fontWeight: 700, textAlign: 'center',
								borderRight: `2px solid ${colors.black}`,
								color: v === '关' ? colors.red : v === '开' ? colors.green : '#666',
							}}>{v}</div>
						))}
						<div style={{ padding: '10px 16px', fontSize: 18, lineHeight: 1.4, color: '#444' }}>{s.why}</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
				style={{
					marginTop: 14, border: `3px solid ${colors.purple}`, background: 'rgba(203,108,230,0.07)',
					padding: '11px 18px', fontSize: 20, lineHeight: 1.5,
				}}
			>
				⚠️ 中间三行<b>两边都是「开」，但理由不同</b>：
				规则仓禁 force push 是为了<b style={{ color: colors.blue }}>「改了什么查得到」</b>，
				记录那边禁 force push 是为了<b style={{ color: colors.purple }}>「写了什么抹不掉」</b>。
				<b>同一个设置，两个目的。</b>
			</motion.div>

			{/* 🔴 底部两块 ,原来是三块叠着，撑破画布 10px。
			    「规则改动本身也要被审」和「最容易犯的错是全开」合成一块，
			    它们说的是同一件事：你还漏了什么没挡。 */}
			<div style={{ display: 'flex', gap: 20, marginTop: 14, flexShrink: 0 }}>
				<div style={{
					flex: 1, border: `3px solid ${colors.red}`, background: 'rgba(255,87,87,0.06)',
					padding: '11px 16px', fontSize: 18, lineHeight: 1.5,
				}}>
					<div style={{ marginBottom: 8 }}>
						最容易犯的错是<b style={{ color: colors.red }}>全开</b> ,全开的后果是<b>没人往记录里写了</b>。
						保护配置不是「越严越好」，<b>是那两句「最怕什么」决定的。</b>
					</div>
					<div style={{ borderTop: '2px dashed rgba(255,87,87,0.4)', paddingTop: 8 }}>
						⚠️ 还有一个更容易漏的：你已经挡住了「违反规则的改动」，
						<b>但「把规则改宽」这个动作，本身也是一次改动。</b>
						挡它的是同一套东西 ,<b style={{ color: colors.red }}>PR + 必需检查 + 管理员也受约束。</b>
					</div>
				</div>

				<div style={{ flex: '0 0 500px', border: `3px solid ${colors.teal}`, background: colors.white, padding: '10px 16px' }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 6 }}>
						必须被「试」出来，不是「读」出来
					</div>
					{[
						['强推、回退分支', '拒绝'],
						['删除分支', '拒绝'],
						['普通快进 push（日常流程）', '必须成功'],
					].map(([a, b], i) => (
						<div key={a} style={{
							display: 'flex', justifyContent: 'space-between', fontSize: 18,
							padding: '2px 0', fontWeight: i === 2 ? 700 : 400,
							color: i === 2 ? colors.teal : '#333',
						}}>
							<span>{a}</span><span style={{ fontFamily: fonts.mono }}>{b}</span>
						</div>
					))}
					<div style={{ fontSize: 15, color: '#888', marginTop: 6, lineHeight: 1.45 }}>
						只测拒绝不测放行，等于可能把日常流程也锁死了 ,
						要等第一个同事交不了东西才会发现。
					</div>
				</div>
			</div>

		</Page>
	);
}
