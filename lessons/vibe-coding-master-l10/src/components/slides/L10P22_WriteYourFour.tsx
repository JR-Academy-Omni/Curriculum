import { colors } from '../ui';
import { Page, PageHead, PracticeBoard, Code } from '../deck';

// P22 · 动手：写你自己的开场四问（蓝图 §9.1）—— 本节唯一正式动手，产物是硬产物
// 🔴 只给骨架，**不给范文**。给了范文所有人都会抄，四格就变成填空题。
// 🔴 硬产物 = 这段话。Exit ticket 第 7 题当场收它（§13.2）。

export default function L10P22_WriteYourFour() {
	return (
		<Page>
			<PageHead
				phase="do"
				title="写你自己的开场四问"
				sub="不是抄这四个问题。是写成一段你回去真会粘贴进去的话。"
			/>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<Code label="骨架（照这个结构，用你自己的措辞）" size={21} style={{ flex: 1.05 }}>{`[任务]

已经确定的（直接做，不要重新讨论）：
  ...

我知道但可能没写在文件里的（照这个走，有冲突以这里为准）：
  ...

我不确定、想听你的判断的（先说结论和依据，不要直接改）：
  ...

我们都不知道、需要验证的（提一个最小实验，先别做）：
  ...

任何一条你不确定的，明确说「不知道」，不要猜。`}</Code>

				<div style={{ flex: 1, minWidth: 0 }}>
					<PracticeBoard
						doWhat={
							<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
								<div>用<strong>你带来的那个任务</strong>，把左边的骨架填成一段完整的话。</div>
								<div style={{ fontSize: 21, color: '#666', lineHeight: 1.5 }}>
									填不满的格子就写「这一格我现在是空的」—— 空着也是信息，说明你还没查。
								</div>
							</div>
						}
						criteria={[
							<>四段都有内容，能一次粘贴</>,
							<>四条<strong>性质不同</strong>，不是同一种语气</>,
							<>盲区那段<strong>没有先给结论</strong></>,
							<>有给「不知道」的出口</>,
							<>不超过一屏</>,
						]}
						stopAt="10 分钟"
						warn={<>写成四个抽象问题的复读 = 没做。判据是：<strong>你明天真会粘贴它吗？</strong></>}
					/>
				</div>
			</div>

			<div style={{ fontSize: 16, color: '#777' }}>
				不用交给我看内容。<span style={{ color: colors.red, fontWeight: 700 }}>但下课前这段话要交，它是今天唯一的硬产物。</span>
			</div>
		</Page>
	);
}
