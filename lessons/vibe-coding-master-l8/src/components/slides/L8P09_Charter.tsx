import { motion } from 'framer-motion';
import { colors, colors as C, border, shadow } from '../ui';
import { Page, PageHead, Note } from '../deck';

// P09 · Team charter 五项 —— 开工合同（蓝图 §8.1）
// deck 只显示五项骨架 + 每项在治什么；**完整模板在 HANDOUT**（§12.1）。

const ITEMS = [
	{ n: '1', k: 'Outcome', d: '最终要回答或交付什么', cure: '没有它，成员各自定义「做完了」', c: colors.blue },
	{ n: '2', k: 'Members and ownership', d: '谁拥有什么 · 明确不碰什么', cure: '所有权不清 → 角色漂移、写入冲突', c: colors.green },
	{ n: '3', k: 'Shared evidence contract', d: '文件:行号 / 命令输出 / 可复现输入', cure: '不定格式 → 消息只有结论，无法独立核对', c: colors.orange },
	{ n: '4', k: 'Communication triggers', d: '什么发现必须立即点名发给谁', cure: '不写死 → 退化成分工，一条消息都没有', c: colors.purple },
	{ n: '5', k: 'Done', d: '完成 / 已裁决 / 已验收 / 未检查范围', cure: '不定义 → 把 completed 当验收', c: colors.red },
];

export default function L8P09_Charter() {
	return (
		<Page>
			<PageHead
				phase="talk" time="34–42 min"
				title="Team charter：开跑前必须写的五项"
				sub={<>五项都是<strong>开工前</strong>写的。开跑之后再补，就已经晚了。</>}
			/>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 11, flex: 1, minHeight: 0 }}>
				{ITEMS.map((it, i) => (
					<motion.div
						key={it.n}
						initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.32, delay: 0.06 + i * 0.07 }}
						style={{ display: 'flex', border, boxShadow: '4px 4px 0 #000', background: colors.white, flex: 1 }}
					>
						<div style={{
							flexShrink: 0, width: 58, background: it.c, color: colors.white,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontSize: 28, fontWeight: 900,
						}}>{it.n}</div>

						<div style={{ flex: 1.1, padding: '12px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '2px solid #eee' }}>
							<div style={{ fontSize: 25, fontWeight: 800, color: colors.dark }}>{it.k}</div>
							<div style={{ fontSize: 22, color: '#666', marginTop: 3, lineHeight: 1.35 }}>{it.d}</div>
						</div>

						<div style={{ flex: 1, padding: '12px 20px', display: 'flex', alignItems: 'center', background: '#fafafa' }}>
							<div style={{ fontSize: 22, color: '#555', lineHeight: 1.42 }}>
								<span style={{ fontWeight: 800, color: it.c }}>不写会怎样：</span>{it.cure}
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.55 }}
				style={{ border: `3px solid ${C.dark}`, background: colors.white, padding: '14px 24px' }}
			>
				<div style={{ fontSize: 24, fontWeight: 800, color: colors.dark, lineHeight: 1.5 }}>
					角色不是人格，<span style={{ background: colors.yellow, padding: '0 10px' }}>是责任与边界</span>。
					<span style={{ fontSize: 23, fontWeight: 600, color: '#666', marginLeft: 12 }}>
						「你是一个批判性思维专家」是态度；「找一条原因不存在但现象仍发生的记录」才是任务。
					</span>
				</div>
			</motion.div>

			<Note>完整 charter 模板、三名角色的固定职责、共享任务拆分方式 —— 都在 <strong style={{ color: colors.dark }}>HANDOUT</strong>。</Note>
		</Page>
	);
}
