import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

export default function S10_Batch() {
	const files = Array.from({ length: 10 }, (_, i) => i < 5 ? 'done' : i === 5 ? 'failed' : 'todo');
	return <DeckFrame tag="02 · 形态 5 · 批量回填" title="一次性的大活：断了能接着做" subtitle="把 100 篇旧文章改成英文版。难的不是改写，是跑到第 37 篇时断了怎么办。" accent={colors.purple}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
			<Panel>
				<Label bg={colors.purple}>进度文件</Label>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginTop: 20 }}>
					{files.map((s, i) => <motion.div key={i} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 + i * .06 }} style={{ height: 90, borderRadius: 14, border: `2px solid ${colors.dark}`, background: s === 'done' ? colors.green : s === 'failed' ? '#ffb3b3' : colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>{`${i + 1}.md`}</motion.div>)}
				</div>
				<div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 18 }}>绿色做完了，红色失败并写了原因，白色还没做。重跑时只做白色的。</div>
			</Panel>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>两条规矩</Label><div style={{ fontSize: 23, lineHeight: 1.6, marginTop: 12 }}>· 每做完一篇，马上写进度，不要攒到最后<br />· 一次只做一小批（比如 5 篇），做完再接着跑</div></Panel>
				<Panel bg="#ffe9e9"><Label bg={colors.red}>它怎么失败</Label><div style={{ fontSize: 23, lineHeight: 1.5, marginTop: 12 }}>没有进度文件，重跑时从第 1 篇开始，前面做过的全部又做一遍，费用也跟着翻倍。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
