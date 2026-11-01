import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { NumberBadge } from '../deck';
import { PartFrame, RevealButton, card } from './_shared';

// 检查点 2：三样东西各是哪一种（答案：resource / tool / prompt）
const items = [
	{ t: '退款政策文档：签收后 14 天内可退', k: 'Resource', c: colors.green },
	{ t: '查订单 A1024 的状态', k: 'Tool', c: colors.blue },
	{ t: '“请用礼貌、简短的语气回复客户”', k: 'Prompt', c: colors.orange },
];

export default function S17_Check2() {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part="mcp" title="检查点 2：各是哪一种？" subtitle="在聊天框按顺序写：tool、resource 还是 prompt。">
			<div style={{ display: 'grid', gap: 14 }}>
				{items.map((it, i) => (
					<motion.div key={it.t} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
						style={{ ...card, display: 'flex', alignItems: 'center', gap: 18, padding: '18px 24px', ...(open ? { borderLeft: `12px solid ${it.c}` } : {}) }}>
						<NumberBadge bg={colors.yellow}>{i + 1}</NumberBadge>
						<span style={{ fontSize: 30, fontWeight: 900, flex: 1 }}>{it.t}</span>
						{open && <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, background: it.c, borderRadius: radii.pill, padding: '4px 18px' }}>{it.k}</span>}
					</motion.div>
				))}
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20 }}>
				<RevealButton open={open} label="看答案" onClick={() => setOpen((v) => !v)} />
				{open && <span style={{ fontSize: 24, fontWeight: 800 }}>手册只看不办；查订单要后台动手；模板是挑着用的话术。</span>}
			</div>
		</PartFrame>
	);
}
