import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { NumberBadge } from '../deck';
import { PartFrame, RevealButton, card, muted, RunLine, DEMO_RUN } from './_shared';

// 检查点 3：四条实测启动报错（逐个改坏配置复现，research/demo-runs.md 第 3 节）。答案 CDAB
const kinds = [
	{ k: 'A', zh: 'command：找不到程序', c: colors.blue },
	{ k: 'B', zh: 'working directory：在错的目录', c: colors.purple },
	{ k: 'C', zh: 'env：缺环境变量', c: colors.orange },
	{ k: 'D', zh: '依赖：环境里没装', c: colors.green },
];
const errs = [
	{ e: "KeyError: 'ORDERS_API_TOKEN'", k: 'C', fix: '配置里加 env' },
	{ e: "ModuleNotFoundError: No module named 'fastmcp'", k: 'D', fix: 'command 指向装了 fastmcp 的 .venv' },
	{ e: "[Errno 2] No such file or directory: 'python'", k: 'A', fix: 'command 写完整路径' },
	{ e: "can't open file '//refund_server.py'", k: 'B', fix: '写 cwd，或 args 用完整路径' },
];
const colorOf = (k: string) => kinds.find((x) => x.k === k)!.c;

export default function S26_Check3() {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part="cli" title="检查点 3：这条报错，是哪一类？" titleSize={48} subtitle="在聊天框按 1–4 的顺序打四个字母。">
			<div style={{ display: 'grid', gridTemplateColumns: '1.35fr .65fr', gap: 20, alignItems: 'start' }}>
				<div style={{ display: 'grid', gap: 10 }}>
					{errs.map((x, i) => (
						<motion.div key={x.e} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
							style={{ ...card, display: 'flex', alignItems: 'center', gap: 14, padding: '12px 18px', ...(open ? { borderLeft: `12px solid ${colorOf(x.k)}` } : {}) }}>
							<NumberBadge bg={colors.yellow}>{i + 1}</NumberBadge>
							<div style={{ flex: 1, display: 'grid', gap: 4 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 700 }}>{x.e}</span>
								{open && <span style={{ fontSize: 18, fontWeight: 700, color: muted }}>修法：{x.fix}</span>}
							</div>
							{open && <span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, background: colorOf(x.k), borderRadius: radii.label, padding: '0 12px' }}>{x.k}</span>}
						</motion.div>
					))}
				</div>
				<div style={{ display: 'grid', gap: 10 }}>
					{kinds.map((k) => (
						<div key={k.k} style={{ ...card, borderLeft: `12px solid ${k.c}`, padding: '12px 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
							<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900 }}>{k.k}</span>
							<span style={{ fontSize: 20, fontWeight: 800 }}>{k.zh}</span>
						</div>
					))}
				</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14 }}>
				<RevealButton open={open} label="看答案" onClick={() => setOpen((v) => !v)} />
				{open && <span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700 }}>CDAB</span>}
			</div>
			<RunLine>{DEMO_RUN} · 四条都是逐个改坏配置后的真实报错</RunLine>
		</PartFrame>
	);
}
