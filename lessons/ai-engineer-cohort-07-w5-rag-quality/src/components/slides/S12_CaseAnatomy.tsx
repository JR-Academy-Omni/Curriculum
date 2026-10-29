import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, Punch, Mark, card, muted } from './_shared';

// 一条 golden case 的五个字段：data/golden/cases.v1.jsonl 的 G07 原文
const fields = [
	{ k: 'question', zh: '问题', v: '周末带 8 岁的孙子去探视，要注意什么？' },
	{ k: 'expected_state', zh: '应该是哪种回答', v: 'supported' },
	{ k: 'gold_evidence', zh: '必须找到的原句', v: '① 周末及公众假期探视需至少提前 24 小时通过家属门户预约　② 12 岁以下儿童探视时须全程由一名成年家属陪同' },
	{ k: 'reference', zh: '参考答案', v: '周末探视需至少提前 24 小时通过家属门户预约；12 岁以下儿童须全程由一名成年家属陪同。' },
	{ k: 'traps', zh: '这道题考哪个坑', v: 'multi_evidence（要两句才答得全）· stale_version（v1 说周末无需预约）' },
];

export default function S12_CaseAnatomy() {
	return (
		<PartFrame part="golden" title="一道考题，写五样东西" subtitle="Golden case = 提前写好标准答案的考题。下面是第 7 题（G07）。">
			<div style={{ display: 'grid', gap: 10 }}>
				{fields.map((f, i) => (
					<motion.div key={f.k} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, delay: 0.15 + i * 0.1 }}
						style={{ ...card, display: 'grid', gridTemplateColumns: '230px 210px 1fr', alignItems: 'center', gap: 16, padding: '11px 20px' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, background: colors.green, borderRadius: radii.pill, padding: '4px 12px', justifySelf: 'start' }}>{f.k}</span>
						<span style={{ fontSize: 22, fontWeight: 900 }}>{f.zh}</span>
						<span style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.45, color: i === 1 ? colors.black : muted }}>{f.v}</span>
					</motion.div>
				))}
			</div>
			<Punch delay={0.8} size={28}>标准答案<Mark>在跑系统之前</Mark>就写好，不能看了模型的回答再补。</Punch>
		</PartFrame>
	);
}
