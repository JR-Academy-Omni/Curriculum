import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// 全局索引里常驻的 skill metadata（name + description）
const index = [
	{ n: 'xhs-draft', d: '按匠人风格写小红书初稿' },
	{ n: 'wechat-article-quality', d: '公众号文章 9 维打分' },
	{ n: 'offline-event-sop', d: '线下活动执行 checklist' },
	{ n: 'lesson-design', d: '设计单节 Lesson' },
	{ n: 'bootcamp-sync', d: '课程同步到 production' },
];

export default function S21b_ProgressiveDisclosure() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>武器 ① 内功 · 为什么能挂 76 个还不爆</Tag>
					<Title white size="42px" style={{ marginTop: 10 }}>
						Progressive Disclosure<span style={{ color: colors.yellow }}> · 像翻书：目录 → 章 → 脚注</span>
					</Title>
					<p style={{ fontSize: 16, color: '#cfd3e6', marginTop: 6 }}>
						一个 skill = <b style={{ color: colors.white }}>metadata（name+description）+ 正文 + 附件</b>。只有 metadata 永远在，其余用到才加载。
					</p>
				</motion.div>

				<div style={{ display: 'flex', gap: 12, marginTop: 16, alignItems: 'stretch' }}>
					{/* 1. 索引层 */}
					<div style={{ flex: 1.15, background: colors.white, border, boxShadow: `6px 6px 0 ${colors.green}`, padding: '13px 15px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
							<span style={{ fontSize: 15, fontWeight: 900 }}>📇 全局索引</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.green, fontWeight: 800 }}>always-on · 几十 token/个</span>
						</div>
						<div style={{ fontSize: 12, color: '#888', marginTop: 3, marginBottom: 8 }}>所有 skill 的 metadata 常驻 = AI 的目录</div>
						{index.map((s, i) => (
							<motion.div key={s.n} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.07 }}
								style={{ borderTop: i ? '1px dashed #ddd' : 'none', padding: '4.5px 0' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 800, color: i === 0 ? colors.red : colors.black }}>{s.n}</div>
								<div style={{ fontSize: 11.5, color: '#888' }}>{s.d}</div>
							</motion.div>
						))}
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: '#aaa', marginTop: 5 }}>…还有 70+ 个，全在索引里</div>
					</div>

					<div style={{ alignSelf: 'center', fontSize: 22, color: colors.yellow, fontWeight: 900 }}>→</div>

					{/* 2. 翻开正文 */}
					<div style={{ flex: 1.1, background: colors.white, border, boxShadow: `6px 6px 0 ${colors.orange}`, padding: '13px 15px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
							<span style={{ fontSize: 15, fontWeight: 900 }}>📄 翻开选中那一个</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.orange, fontWeight: 800 }}>用到才加载</span>
						</div>
						<div style={{ fontSize: 12, color: '#888', marginTop: 3, marginBottom: 8 }}>判断相关 → 只读它的 SKILL.md 正文</div>
						<pre style={{ background: '#0b0f1e', fontFamily: fonts.mono, fontSize: 11.5, padding: '9px 11px', whiteSpace: 'pre-wrap', lineHeight: 1.5, flex: 1, margin: 0 }}>
<span style={{ color: '#5a6488' }}>---</span>{'\n'}
<span style={{ color: colors.green }}>name:</span><span style={{ color: '#e7d199' }}> xhs-draft</span>{'\n'}
<span style={{ color: colors.green }}>description:</span><span style={{ color: '#e7d199' }}> 按匠人…</span>{'\n'}
<span style={{ color: '#5a6488' }}>---</span>{'\n'}
<span style={{ color: '#aab0cc' }}>## 步骤{'\n'}1. 选切角…{'\n'}2. 写正文…{'\n'}3. 配图提示词…</span>
						</pre>
						<div style={{ fontSize: 11, color: '#999', marginTop: 6, fontFamily: fonts.mono }}>↑ frontmatter 那段 = 进索引的 metadata</div>
					</div>

					<div style={{ alignSelf: 'center', fontSize: 22, color: colors.yellow, fontWeight: 900 }}>→</div>

					{/* 3. 拉附件 */}
					<div style={{ flex: 0.95, background: colors.white, border, boxShadow: `6px 6px 0 ${colors.blue}`, padding: '13px 15px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
							<span style={{ fontSize: 15, fontWeight: 900 }}>📎 正文要才拉附件</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.blue, fontWeight: 800 }}>按需</span>
						</div>
						<div style={{ fontSize: 12, color: '#888', marginTop: 3, marginBottom: 8 }}>正文指到哪个文件，才读哪个</div>
						{['templates/hook.md', 'routing-table.json', 'examples/good.md'].map((f, i) => (
							<motion.div key={f} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.12 }}
								style={{ fontFamily: fonts.mono, fontSize: 12, background: '#f4f6ff', border: '1.5px solid #cdd6ff', padding: '6px 9px', marginBottom: 6 }}>📄 {f}</motion.div>
						))}
						<div style={{ fontSize: 11.5, color: '#999', marginTop: 'auto' }}>没被正文引用的，永远不读</div>
					</div>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
					style={{ marginTop: 14, fontSize: 16, color: colors.yellow, fontWeight: 800, textAlign: 'center' }}>
					只有目录（metadata）永远在 → 挂 76 个 skill 也不爆 context。同样的「按需加载」也用在工具上。
				</motion.p>
			</Inner>
		</Slide>
	);
}
