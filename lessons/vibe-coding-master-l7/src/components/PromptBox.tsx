import type { CSSProperties } from 'react';
import { colors, fonts, border, shadow } from './ui';

// 「你对 Agent 说」提示框 —— 交付这一段全程用这个视觉，和 Agent 产出的代码/YAML（深色 mono）区分开。
// 内容是自然语言意图，不是命令。
export function PromptBox({
	text,
	label = '你对 Agent 说',
	accent = colors.purple,
	style,
}: { text: string; label?: string; accent?: string; style?: CSSProperties }) {
	return (
		<div style={{ border, boxShadow: shadow, background: colors.white, ...style }}>
			<div style={{
				display: 'flex', alignItems: 'center', gap: 8,
				background: accent, color: colors.white, padding: '9px 16px',
				borderBottom: border, fontWeight: 800, fontSize: 15, fontFamily: fonts.body,
			}}>
				<span style={{ fontSize: 16 }}>🗣</span> {label}
			</div>
			<div style={{
				padding: '18px 20px', fontFamily: fonts.body, fontSize: 17, lineHeight: 1.7,
				color: colors.dark, whiteSpace: 'pre-wrap',
			}}>
				{text}
			</div>
		</div>
	);
}
