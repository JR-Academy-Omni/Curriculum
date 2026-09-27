import { colors } from '../ui';
import { Page, PageHead, DemoBoard } from '../deck';

/**
 * P08 · 演示 B：它卡住了，挂在那儿等你 🎬
 * 🔴 形态是「展示一个昨晚就挂住的会话」，不是现场跑。
 *    这一页要证明的是「它等了一夜也没人理」——
 *    这件事在五分钟的课堂时段里物理上演不出来，现场建一个再等，
 *    只会等到一个刚挂住三十秒的会话，说服力为零（蓝图 §6.4）。
 */
export default function L11P08_DemoStall() {
	return (
		<Page>
			<PageHead phase="demo" title="同一件事，换个跑法" />
			<DemoBoard
				mode="展示昨夜会话"
				lead={<>同一件事，换条通道跑。这个会话是<span style={{ color: colors.yellow }}>昨天晚上</span>起来的。</>}
				watch={[
					'它跑到哪一步停下来的。',
					<>它停在那儿<strong>多久了</strong> —— 看时间戳。</>,
					<>这段时间里，它有没有用<strong>任何方式</strong>通知过我。</>,
				]}
				note={
					<>
						这次它老实：它没瞎猜，它在等你。
						<strong style={{ color: colors.red }}>问题是它等的时候你在睡觉，而它不会打电话给你。</strong>
					</>
				}
			/>
		</Page>
	);
}
