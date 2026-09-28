import { colors, border, shadow, fonts } from '../ui';
import { Page, PageHead, Verdict, NumRow } from '../deck';

// P26 · 收口 + 作业（蓝图 §9.4 + §14）
// 🔴 收口必须是一个动作，不是一句总结。
// 闭环接 L5：同一段话说到第三次，它就该是个 Skill。
// 这也是全系列最漂亮的一次自指 —— 第五节教的判断线，用来固化第十节自己。

export default function L10P26_MakeItASkill() {
	return (
		<Page>
			<PageHead phase="talk" title="第三次说同一段话，它就该是个 Skill" />

			<Verdict size={29} label="L5 定过的那条线，今天用在今天自己身上">
				这四问是你<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>每次开工都要说一遍的话</span>。
				所以今天的作业不是复习这张图，是<strong>把这段话变成你敲一个词就能调出来的东西</strong>。
			</Verdict>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1.25, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.dark, color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 21, fontWeight: 900 }}>
						必做四项
					</div>
					<div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 13, flex: 1, justifyContent: 'center' }}>
						<NumRow n="1" title="这周三个真实任务，各填一次四格" desc="每份附一行：事后发现哪一格填错了" />
						<NumRow n="2" title="把开场四问做成一个 Skill" desc="真调用一次，迭代一次。交 SKILL.md + 一次调用记录" color={colors.red} />
						<NumRow n="3" title="给 CLAUDE.md 做一次退化审计" desc="逐条标仍成立 / 已过期 / 不确定，改掉过期的。交前后对照" />
						<NumRow n="4" title="写一份「我不知道」清单" desc="接 L9，这次多加一列：这条属于盲区还是未知区" />
					</div>
				</div>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{ border, boxShadow: '4px 4px 0 #000', background: colors.white, flex: 1, display: 'flex', flexDirection: 'column' }}>
						<div style={{ background: colors.purple, color: colors.white, padding: '9px 16px', borderBottom: border, fontSize: 20, fontWeight: 900 }}>
							第 4 项为什么要加那一列
						</div>
						<div style={{ padding: '14px 18px', fontSize: 22, lineHeight: 1.5, color: colors.dark }}>
							盲区和未知区的处方完全不同：<br />
							<span style={{ fontFamily: fonts.mono, fontSize: 21 }}>盲区 → 去问</span><br />
							<span style={{ fontFamily: fonts.mono, fontSize: 21 }}>未知区 → 去试</span><br />
							分不清，你会一直问一件问不出来的事。
						</div>
					</div>
					<div style={{
						border: `3px solid ${colors.orange}`, background: '#fff8e5',
						padding: '13px 17px', fontSize: 21, lineHeight: 1.5, color: '#444',
					}}>
						代码不能外传的：四项照做，交的时候把内容换成结构描述 —— 这本身就是今天教的那个动作。
					</div>
				</div>
			</div>
		</Page>
	);
}
