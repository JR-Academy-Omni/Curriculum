import { colors, border, shadow } from '../ui';
import { Page, PageHead, Verdict, Note } from '../deck';

/**
 * P01 · 今天的完成标准
 * 只说一句，不铺垫。仍然不许出现真名。
 */
export default function L11P01_Contract() {
	return (
		<Page>
			<PageHead phase="talk" title="今天结束的时候" />

			<div style={{
				border, boxShadow: shadow, background: colors.white,
				padding: '34px 40px', flexShrink: 0,
			}}>
				<div style={{ fontSize: 38, fontWeight: 900, color: colors.black, lineHeight: 1.45 }}>
					你手上会有一份东西，让你敢把一件事交给它
					<span style={{ background: colors.yellow, padding: '0 8px', boxShadow: `3px 3px 0 ${colors.black}` }}>
						在你睡觉的时候
					</span>
					做。
				</div>
			</div>

			<div style={{ flex: 1 }} />

			<Verdict label="今天不做的事">
				不教任何一个工具怎么点。设置本身十分钟就够了 —— 我们的九十分钟花在别处。
			</Verdict>

			<Note>
				这节课不改生产环境，不要求你现在就把任何东西挂上去跑。
			</Note>
		</Page>
	);
}
