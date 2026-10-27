import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { Label } from '../deck';
import { PartFrame, RevealButton, card, line, muted, RunLine, FULL_RUN } from './_shared';

// 检查点 1：四个真实的坏答案，各是哪一类（runs/20261027-144153-baseline 的 G10 / G02 / G03 / G16，回答原文）
const cases = [
	{ id: 'G10', q: '想带我爸回家住一晚，要做什么？', ev: '要找的第 2 句“外出期间所需药物由护士提前分装”，没进 top-3', a: '带住户外出过夜需至少提前 48 小时通知护理经理，并填写外出登记表 LV-01。护理经理会根据住户的健康状况确认是否适合过夜外出。', key: 'R', why: '漏了药物那句，因为那一块根本没找回来。', color: colors.blue },
	{ id: 'G02', q: '工作日探视到几点结束？', ev: 'v2：本版自 2026 年 7 月 1 日起生效……工作日 9:00 至 20:00', a: '根据最新的探视政策（第 2 版），工作日探视时间到 20:00 结束。但资料中未提及第 2 版政策是否仍然生效或是否有其他限制。', key: 'G', why: '后半句没有证据，原文明明写着“生效”。', color: colors.orange },
	{ id: 'G03', q: '一次最多能来几个人探视？', ev: 'v2（生效）：最多 3 位；v1（已作废）：最多 2 位', a: '根据最新的探视政策，每位住户同一时间最多接待 2 位访客。但若人数较多的家庭聚会，请提前联系前台预订多功能活动室。〔引用：v1〕', key: 'C', why: '引用了作废的 v1，跟着答成了 2 位。', color: colors.purple },
	{ id: 'G16', q: '访客停车超过 3 小时怎么收费？', ev: '资料：访客可免费停车 3 小时', a: '资料里没有关于访客停车超过 3 小时的收费信息，请联系前台或护理经理咨询。', key: 'N', why: '前 3 小时免费是能答的，却整个拒答：false refusal。', color: colors.red },
];

export default function S11_Check1() {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part="failure" title="检查点 1：R、G、C 还是 N？" titleSize={48} subtitle="四个真实的坏答案。在聊天框按 1–4 的顺序打四个字母。">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
				{cases.map((c, i) => (
					<motion.div key={c.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.12 }}
						style={{ ...card, padding: '12px 18px', display: 'grid', gap: 7, alignContent: 'start', ...(open ? { borderLeft: `12px solid ${c.color}` } : {}) }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
							<Label bg={colors.dark} color={colors.yellow}>{i + 1}</Label>
							<span style={{ fontSize: 22, fontWeight: 900, flex: 1 }}>{c.q}</span>
							{open && <span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, background: c.color, color: c.key === 'C' || c.key === 'N' ? colors.white : colors.black, borderRadius: radii.label, padding: '0 12px' }}>{c.key}</span>}
						</div>
						<div style={{ fontSize: 17, fontWeight: 700, color: muted, lineHeight: 1.4 }}>证据：{c.ev}</div>
						<div style={{ border: line, borderRadius: radii.card, background: '#ffd9d9', padding: '7px 14px', fontSize: 18, fontWeight: 700, lineHeight: 1.4 }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, opacity: .7, marginRight: 8 }}>助手</span>{c.a}
						</div>
						{open && <div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.4 }}>{c.why}</div>}
					</motion.div>
				))}
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12 }}>
				<RevealButton open={open} label="看答案" onClick={() => setOpen((v) => !v)} />
				{open && <span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700 }}>RGCN</span>}
			</div>
			<RunLine>{FULL_RUN}</RunLine>
		</PartFrame>
	);
}
