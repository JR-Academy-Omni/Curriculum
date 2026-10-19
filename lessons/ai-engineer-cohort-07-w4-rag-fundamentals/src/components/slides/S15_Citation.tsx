import { colors, fonts } from '../ui';
import { PartFrame, Side, Punch, Mark, SourceLine } from './_shared';

const text = { fontSize: 25, fontWeight: 700, lineHeight: 1.6 } as const;

// 作答：引用由程序绑定 chunk ID
export default function S15_Citation() {
	return (
		<PartFrame part="answer" title="引用由程序绑定，不让模型自己写">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="模型自己写来源" labelBg={colors.red} minHeight={280}>
					<div style={{ ...text, fontFamily: fonts.mono, fontSize: 22 }}>来源：carekind.com/visiting.html</div>
					<div style={text}>链接可能根本不存在，也查不出是哪一版。</div>
				</Side>
				<Side label="程序绑定" labelBg={colors.green} delay={0.4} minHeight={280}>
					<div style={text}>模型只回 chunk id → 程序查回原文和版本。</div>
					<div style={text}>不在这一次证据里的 id，直接拒绝。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={30} mt={26}>一条引用 = <Mark>chunk id + 原文 + version</Mark>，由程序拼出来。</Punch>
			<SourceLine>Anthropic 文档 Citations：引用由 API 解析，保证指向提供的文档。</SourceLine>
		</PartFrame>
	);
}
