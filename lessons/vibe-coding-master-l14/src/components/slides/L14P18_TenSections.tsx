import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, colors, fonts, radii } from '../deck';

/**
 * P18 · 技能十节 🎯 第二个核心动手，十二分钟，不许压
 * 🔴 第 10 条（验收测试）最容易被跳过，也最值钱 —— 必须高亮，必须给打样。
 * 🔴 写的是规范层，不写代码。这节课不是教做技能（第五节教过），
 *   是教【一个技能要定义什么才算完整】。
 */
const TEN = [
	'什么时候触发', '它读什么', '缺了就不能跑的东西', '产物长什么样',
	'人类审批人（具名，不是「团队」）', '允许的写操作（白名单，表外一律禁止）',
	'失败与重试：几次、多久、失败了报什么', '审计记录：这次跑了什么，留在哪',
	'隐私边界：明确不碰什么', '验收测试：可当场验证的断言',
];

export default function L14P18_TenSections() {
	return (
		<Page>
			<ActBadge act={4} mode="🎯 动手" />
			<Head sub="不写代码，写规范。这节课不是教你做一个技能 —— 是教你一个技能要定义到什么程度才算完整。">
				一个技能要定义十件事
			</Head>

			<div style={{ display: 'flex', gap: 26, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
					{TEN.map((t, i) => {
						const key = i === 9;
						return (
							<motion.div
								key={t}
								initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
								style={{
									flex: key ? 1.6 : 1, display: 'flex', alignItems: 'center', gap: 13,
									padding: '0 16px', borderRadius: radii.card,
									background: key ? colors.dark : 'transparent',
									color: key ? colors.white : colors.black,
									border: key ? `2px solid ${colors.dark}` : `2px solid transparent`,
									boxShadow: key ? `7px 7px 0 rgba(255,222,89,.95)` : 'none',
								}}
							>
								<span style={{
									fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, width: 24, flexShrink: 0,
									color: key ? colors.yellow : '#a8a09a',
								}}>{i + 1}</span>
								<span style={{ fontSize: key ? 24 : 20, fontWeight: key ? 900 : 500, lineHeight: 1.35 }}>{t}</span>
								{key && <span style={{ marginLeft: 'auto', fontSize: 16, color: colors.yellow, fontWeight: 800, whiteSpace: 'nowrap' }}>最容易跳过，也最值钱</span>}
							</motion.div>
						);
					})}
				</div>

				<div style={{ flex: '0 0 600px', display: 'flex', flexDirection: 'column', gap: 16 }}>
					<Code
						label="第 10 条长这样才算数（四个打样）"
						size={20}
						wrap
						code={`删掉缓存 → 重新问一次，而且不报错

调用者的名字跟花名册里只是近似匹配
  → 仍然问清楚，不许自己推断

查询连续失败 → 报 FAILED，绝不报 0

后面几页没拉到 → 报「不完整」，不报成功`}
					/>
					<div style={{
						padding: '16px 20px', borderRadius: radii.card,
						border: `2px solid ${colors.dark}`, background: 'rgba(56,182,255,.12)',
						fontSize: 20, lineHeight: 1.6,
					}}>
						💬 用你入场券那件真事，<strong>把十节写完</strong>。
						写完在聊天框打 <strong>1</strong>。
						<strong style={{ color: colors.red }}>第 10 条空着的不算。</strong>
					</div>
				</div>
			</div>
		</Page>
	);
}
