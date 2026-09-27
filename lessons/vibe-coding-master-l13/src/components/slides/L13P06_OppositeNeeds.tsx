import { motion } from 'framer-motion';
import { ActBadge, Page, Head, SoBar, colors, fonts, border, shadow, FS } from '../deck';

// P04 · 一个说「应该怎样」，一个说「当时怎样」⭐
// 🔴 这一页原来只摆了两个框写「强制 PR / 不强制 PR」，什么都没解释，已重做。
//    学员真正需要知道的不是「设置不同」，是**这两个仓到底是两种什么东西**。
// 🔴 第二个仓原来叫「状态仓」，改叫「记录仓」：它承重的性质不是「装当下状态」，
//    是**只能追加、不能抹掉**。分支保护为什么那么配，全部从这一条推出来。
//    （当下状态其实活在你们已经在用的工单系统里，不在这两个仓的任何一个。）
// 🔴 「不会 git 的同事」是**后果**，不是理由。理由是「追加要零摩擦」。
// 🔴 这一页是 P18 五开关表的伏笔，那张表回收这里的「最怕什么」。
//    ⚠️ 但**页面上不写页码**（只说「后面那张」）：deck 上写页码跟写分钟数一样脆 ,
//    插一页就全错。页码只存在于蓝图和讲稿。

const ROWS: { k: string; a: string; b: string; hot?: boolean }[] = [
	{ k: '它回答什么', a: '现在的规矩是什么', b: '当时发生了什么' },
	{ k: '内容能不能改', a: '能改。规矩本来就会变', b: '不能改。只能追加一条更正' },
	{ k: '谁写', a: '少数人', b: '所有人，包括不用 git 的' },
	{ k: '最怕什么', a: '改了，没人知道', b: '写过的东西，被抹掉', hot: true },
];

export default function L13P06_OppositeNeeds() {
	return (
		<Page>
			<ActBadge act={1} />
			<Head sub="不是「两个仓库更规范」。是它们根本是两种不同的东西。">
				一个说<span style={{ color: colors.blue }}>「应该怎样」</span>，
				一个说<span style={{ color: colors.purple }}>「当时怎样」</span>
			</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr' }}>
					<div style={{
						padding: '13px 20px', background: colors.dark, color: 'rgba(255,255,255,0.6)',
						fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
						borderRight: `2px solid ${colors.black}`, display: 'flex', alignItems: 'center',
					}}>拿这四件事去问</div>
					{[
						{ n: '规则', c: colors.blue },
						{ n: '记录', c: colors.purple },
					].map((h, i) => (
						<div key={h.n} style={{
							padding: '13px 20px', background: h.c, color: colors.white,
							fontFamily: fonts.heading, fontSize: 28, fontWeight: 900,
							borderRight: i === 0 ? `2px solid ${colors.black}` : 'none',
						}}>{h.n}</div>
					))}
				</div>
				{ROWS.map((r, i) => (
					<motion.div
						key={r.k}
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 + i * 0.12 }}
						style={{
							display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr',
							borderTop: `2px solid ${colors.black}`,
							background: r.hot ? colors.yellow : colors.white,
						}}
					>
						<div style={{
							padding: '14px 20px', fontFamily: fonts.mono, fontSize: 17, fontWeight: 700,
							background: r.hot ? colors.yellow : '#f3efe9',
							borderRight: `2px solid ${colors.black}`, color: r.hot ? colors.black : '#666',
						}}>{r.k}</div>
						{[r.a, r.b].map((v, j) => (
							<div key={j} style={{
								padding: '14px 20px', fontSize: 23, lineHeight: 1.45,
								borderRight: j === 0 ? `2px solid ${colors.black}` : 'none',
								fontWeight: r.hot ? 900 : 400,
							}}>{v}</div>
						))}
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
				style={{ marginTop: 22 }}
			>
				<SoBar>
					<b>它们对保护的要求正好相反：</b>
					规则要的是<b style={{ color: colors.blue }}>「改动可审」</b>，所以每次改都走 PR；
					记录要的是<b style={{ color: colors.purple }}>「写入不可撤」</b>，
					所以<b>加东西要零摩擦，但加进去的抹不掉</b>。
				</SoBar>
				<div style={{ fontSize: FS.note, color: '#888', marginTop: 12, lineHeight: 1.6 }}>
					记录那边一旦也强制走 PR，追加就有了摩擦 ，<b>而有摩擦的记录没人写</b>（顺带把不用 git 的同事挡在门外）。
					<br />
					<b style={{ color: colors.purple }}>注意这两个名字不对称，那是故意的：</b>
					规则<b>必须</b>放一个 git 仓 ,我们刚证过，它需要一个你改不了的远端。
					<b>记录放哪还是个开放问题</b>，可能是仓、可能是数据库、可能两者 ,
					<b style={{ color: colors.purple }}>下一页才回答。</b>
					<br />
					至于「今天谁在值班」这种<b>当下</b>状态，它活在你们已经在用的工单系统里，这两个仓都不装。
					<br />
					<b style={{ color: colors.red }}>这两行「最怕什么」，后面那张开关表会回来收。</b>
				</div>
			</motion.div>
		</Page>
	);
}
