import { colors, fonts, radii } from '../ui';
import { Label } from '../deck';
import { Quiz, line } from './_shared';

// 复习 4：缓存要求前缀完全一致
export default function S05_Quiz4() {
	return (
		<Quiz n={4} q="system prompt 第一行是时间戳，会怎样？"
			left={
				<div style={{ background: colors.dark, color: '#e9e6f2', border: line, borderRadius: radii.panel, padding: '20px 22px' }}>
					<Label bg={colors.yellow} color={colors.black}>system prompt</Label>
					<pre style={{ margin: '14px 0 0', fontFamily: fonts.mono, fontSize: 20, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
						<span style={{ color: colors.red, fontWeight: 700 }}>Current time: 19:42:07</span>{'\n'}
						You are a support assistant…{'\n'}
						（后面是 2,000 token 的规则）
					</pre>
				</div>
			}
			options={[
				{ text: '没有影响，后面的规则照样命中缓存', ok: false },
				{ text: '每次调用都不命中，每次都按写入缓存计费', ok: true },
				{ text: '接口报错', ok: false },
			]}
			explain="缓存要求前缀完全一致。会变的内容，放到不变的内容后面。"
		/>
	);
}
