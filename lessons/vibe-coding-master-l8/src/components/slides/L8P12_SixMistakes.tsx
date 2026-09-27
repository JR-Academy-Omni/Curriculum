import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, Note } from '../deck';

// P12 · 六个最容易错的地方（蓝图 §1.5）
// 六类 = 结构判断 / 产品设置 / 协作过程 / 验收 / 写入安全 / 教学节奏
// 这一页是「开做之前的最后一张尺子」——后面 60 分钟老师只按它纠偏（§10.1-2）。

const ROWS = [
	{ k: '结构判断', c: colors.blue, wrong: '把「可以并行」误当「需要 Team」；Lead + 1 也算过关', fix: '删除成员间消息再问：质量会不会下降？不会就降级' },
	{ k: '产品设置', c: colors.purple, wrong: '忘开实验能力；把 tools 当目录沙箱；以为分屏 / MCP 是必需', fix: '先跑四步 smoke test；把必要项和体验增强分开' },
	{ k: '协作过程', c: colors.orange, wrong: '成员各做各的；角色漂移；消息无证据；Lead 抢活', fix: '固定 owner，写通信触发器，用消息模板，Lead 只补缺口' },
	{ k: '验收', c: colors.green, wrong: '把全员同意、任务 completed 或找到根因当作完成', fix: 'Lead 用独立命令、输入或文件证据做外部验收' },
	{ k: '写入安全', c: colors.red, wrong: '多名成员改同一文件，最后才发现冲突', fix: '默认只读；写入前先划文件所有权和集成顺序' },
	{ k: '教学节奏', c: colors.dark, wrong: '学员还没理解结构就开做；投屏自动揭晓答案', fix: '0–55 分钟先讲和演示；实践页只显示动作与完成判据' },
];

export default function L8P12_SixMistakes() {
	return (
		<Page>
			<PageHead
				phase="talk" time="42–50 min"
				title="六个最容易错的地方"
				sub={<>开做之前的<strong>最后一张尺子</strong>。接下来 60 分钟，我只按这六条纠偏。</>}
			/>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1, minHeight: 0 }}>
				{/* 表头 */}
				<div style={{ display: 'flex', gap: 0, fontSize: 17, fontWeight: 800, color: '#999', letterSpacing: 1, padding: '0 4px' }}>
					<div style={{ width: 132 }}>类型</div>
					<div style={{ flex: 1.25 }}>容易错在哪里</div>
					<div style={{ flex: 1 }}>当场纠正</div>
				</div>

				{ROWS.map((r, i) => (
					<motion.div
						key={r.k}
						initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.28, delay: 0.05 + i * 0.06 }}
						style={{ display: 'flex', border, boxShadow: '4px 4px 0 #000', background: colors.white, flex: 1 }}
					>
						<div style={{
							flexShrink: 0, width: 132, background: r.c, color: colors.white,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontSize: 23, fontWeight: 900, textAlign: 'center', padding: '0 8px',
						}}>{r.k}</div>

						<div style={{
							flex: 1.25, padding: '10px 18px', display: 'flex', alignItems: 'center',
							borderRight: '2px solid #eee', fontSize: 22, lineHeight: 1.4, color: '#555',
						}}>{r.wrong}</div>

						<div style={{
							flex: 1, padding: '10px 18px', display: 'flex', alignItems: 'center',
							background: '#f7fbf7', fontSize: 22, lineHeight: 1.4, color: colors.dark, fontWeight: 600,
						}}>{r.fix}</div>
					</motion.div>
				))}
			</div>

			<Note>
				全部六条的共同点：<strong style={{ color: colors.dark }}>它们都不是「Agent 不够聪明」，是结构、设置或协议没定清楚。</strong>
			</Note>
		</Page>
	);
}
