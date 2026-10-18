import { Page, BigLine, colors } from '../deck';

/**
 * P20 · 反转（⭐⭐ 独占一屏）
 * 🔴 时机写死：必须在 P19 收完数之后。学员刚把包装成功、最有成就感的时候翻。
 * 纪律 13：一句话独占一屏。
 */
export default function L15P20_YouShipDefaults() {
	return (
		<Page bg={colors.dark} style={{ padding: 0 }}>
			<BigLine
				bg={colors.dark}
				color={colors.white}
				sub={<>你刚才数出来的那个数字，不是「还没写文档」。</>}
			>
				你交出去的不是文件，是<span style={{ color: colors.yellow }}>默认值</span>。<br />
				别人<span style={{ color: colors.red }}>不会读</span>你的说明文档，<br />
				他们会直接用你设的默认。
			</BigLine>
		</Page>
	);
}
