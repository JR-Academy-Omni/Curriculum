// Migrated teaching page; original source: lessons/vibe-coding-master/src/components/slides/S05b_FourC.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
const cs = [
    {
        c: 'Scope', zh: '范围', q: '这一版交付什么', color: '#ff5757',
        d: '只做老人档案 → 护理事件 → 主管确认；排除长录音和跨行业版',
        ch: '→ MVP 边界',
    },
    {
        c: 'Spec', zh: '规格', q: '怎么才算做对', color: '#38B6FF',
        d: '写清角色、字段、状态与权限；确认动作需要审计记录',
        ch: '→ 验收条件',
    },
    {
        c: 'Tasks', zh: '任务', q: '谁负责哪一段', color: '#7ED957',
        d: '拆 UI、API、数据和测试；标出 owner、依赖与阻塞项',
        ch: '→ 看板 / PR',
    },
    {
        c: 'Evidence', zh: '证据', q: '完成有没有证明', color: '#CB6CE6',
        d: '演示护理记录闭环；保留测试结果、版本、已知问题与交接',
        ch: '→ 评审 / 交接',
    },
];
// 项目管理的四项交付
export default function S05b_FourC() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>本课主框架</Tag>
					<Title white size="50px" style={{ marginTop: 12 }}>
						项目管理的 <span style={{ color: colors.yellow }}>四项交付</span>
					</Title>
					<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 8 }}>
						需求不是一句 prompt。先约定范围和验收，再拆任务，最后用证据确认完成。
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 22 }}>
					{cs.map((x, i) => (<motion.div key={x.c} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 180, damping: 16 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '16px 20px', color: colors.dark, display: 'flex', alignItems: 'center', gap: 18 }}>
							<div style={{ borderRadius: 18, flexShrink: 0, width: 64, height: 64, background: x.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, fontWeight: 900, color: colors.white, fontFamily: fonts.heading }}>{i + 1}</div>
							<div style={{ flex: 1 }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
									<span style={{ fontSize: 24, fontWeight: 900, fontFamily: fonts.mono }}>{x.c}</span>
									<span style={{ fontSize: 15, color: '#888', fontWeight: 700 }}>{x.zh}</span>
								</div>
								<div style={{ fontSize: 17, color: x.color, fontWeight: 800, fontFamily: fonts.mono }}>{x.q}?</div>
								<div style={{ fontSize: 18, color: '#444', marginTop: 5, lineHeight: 1.4 }}>{x.d}</div>
							</div>
							<div style={{ flexShrink: 0, fontSize: 13, fontWeight: 800, color: x.color, fontFamily: fonts.mono, alignSelf: 'flex-end' }}>{x.ch}</div>
						</motion.div>))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} style={{ marginTop: 18, fontSize: 19, color: colors.yellow, fontWeight: 800, textAlign: 'center' }}>
					任务状态分清：已实现 → 已测试 → 已评审 → 已部署；每一步都要有对应证据。
				</motion.p>
			</Inner>
		</Slide>);
}
