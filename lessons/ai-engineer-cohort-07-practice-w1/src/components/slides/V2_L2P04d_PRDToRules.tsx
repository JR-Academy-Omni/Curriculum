// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04d_PRDToRules.tsx
import { Slide, Inner, Title, Tag, assetPath, border, colors, fonts, shadow } from '../courseUi';
import { motion } from 'framer-motion';
// PRD 只是第一步：第二步要把 repo / docs / rules 准备好，让 agent 能稳定执行
export default function L2P04d_PRDToRules() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 18, padding: '28px 36px', height: '90%' }}>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
					<Tag bg={colors.dark}>PRD 之后的第二步</Tag>
					<Title size="44px" style={{ marginTop: 10 }}>
						PRD 不是终点，下一步是把 <span style={{ color: colors.red }}>Rules / Docs / Repo Context</span> 做好
					</Title>
				</motion.div>

				<motion.div initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.08 }} style={{
            borderRadius: 18,
            flex: 1,
            minHeight: 0,
            background: colors.white,
            border,
            boxShadow: shadow,
            padding: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
					<img src={assetPath('adlc-prd-rules-flow.png')} alt="PRD to rules and implementation plan flow" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}/>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.18 }} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 14,
            width: '100%',
        }}>
					{[
            ['1. PRD', '说明要做什么、为什么做、验收什么'],
            ['2. Rules', '说明怎么写代码、怎么拆模块、哪些红线不能碰'],
            ['3. Docs / Readme', '让 agent 读懂 repo、组件、函数和项目约定'],
        ].map(([k, v]) => (<div key={k} style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, padding: '13px 16px' }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.yellow }}>{k}</div>
							<div style={{ marginTop: 4, fontSize: 16, fontWeight: 780, lineHeight: 1.35 }}>{v}</div>
						</div>))}
				</motion.div>
			</Inner>
		</Slide>);
}
