import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, PracticeBoard, FS } from '../deck';

// P17 · 正式 Lab：症状、角色、任务、硬停（蓝图 §9.1 / §9.3 / §9.4 / §9.5）
// 🚫 实践页纪律：**只给症状和问题，不给任何答案方向**。
//    标准证据链和行号只在 RUNSHEET 的老师兜底材料里。

const TASKS = [
	{ id: 'T1', owner: 'A', c: colors.blue },
	{ id: 'T2', owner: 'B', c: colors.green },
	{ id: 'T3', owner: 'C', c: colors.orange },
	{ id: 'T4', owner: 'Lead', c: colors.dark },
];

export default function L8P17_Lab() {
	return (
		<Page>
			<PageHead phase="do" time="84–99 min" title="正式 Lab：三成员协作调查" />

			{/* 症状 + 最终问题 —— 只给这两句，不给方向 */}
			<motion.div
				initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35 }}
				style={{ display: 'flex', gap: 18 }}
			>
				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}>
					<div style={{
						background: colors.dark, color: colors.white, padding: '8px 18px',
						borderBottom: border, fontSize: FS.note, fontWeight: 700, letterSpacing: 1.4,
					}}>用户症状</div>
					<div style={{ padding: '14px 20px', fontSize: 23, lineHeight: 1.5, color: colors.dark }}>
						同一个人使用「看起来相同」的邮箱登录，有时历史记录为空；重新登录后有时又出现。
						<strong>没有报错。</strong>
					</div>
				</div>
				<div style={{ flex: 1, border, boxShadow: shadow, background: '#fffbe8' }}>
					<div style={{
						background: colors.yellow, color: colors.black, padding: '8px 18px',
						borderBottom: border, fontSize: FS.note, fontWeight: 700, letterSpacing: 1.4,
					}}>最终要回答</div>
					<div style={{ padding: '14px 20px', fontSize: 23, lineHeight: 1.5, color: colors.dark }}>
						从邮箱输入到 history 查询，哪一段<strong>字符串或身份派生</strong>会使同一个人落入不同的数据作用域？
					</div>
				</div>
			</motion.div>

			<PracticeBoard
				doWhat={
					<>
						按 T1–T4 创建共享任务，<strong>每个任务只有一个 owner</strong>：
						<div style={{ margin: '12px 0', display: 'flex', gap: 8 }}>
							{TASKS.map((t) => (
								<div key={t.id} style={{
									flex: 1, border: `3px solid ${colors.black}`, background: colors.white,
									textAlign: 'center', padding: '8px 4px',
								}}>
									<div style={{ fontFamily: fonts.mono, fontSize: 23, fontWeight: 700, color: t.c }}>{t.id}</div>
									<div style={{ fontSize: 17, color: '#777', marginTop: 2 }}>{t.owner}</div>
								</div>
							))}
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 22, color: '#666', marginBottom: 12 }}>
							依赖：T1 ─┐<br />
							　　　　　├→ T3 → T4<br />
							　　　　 T2 ─┘
						</div>
						跑起来之后，<strong>该传的证据当场点名直传</strong>，不经 Lead 转述。
					</>
				}
				criteria={[
					'至少一次 teammate → teammate 直接消息',
					'消息带 observed / evidence / why_you_need_it',
					'收件人明确回答：这条证据是否改变、缩短或加强了下一步',
					'每项 completed 都附文件:行号或具体输入',
				]}
				stopAt="99 min"
				warn={
					<>
						🚫 全程<strong>只读，不修代码</strong>。<br />
						C 不要在没有 A、B 证据时自行猜根因。
					</>
				}
			/>
		</Page>
	);
}
