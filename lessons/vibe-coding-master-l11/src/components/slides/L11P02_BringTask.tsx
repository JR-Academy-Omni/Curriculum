import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, FS } from '../deck';

/**
 * P02 · 写下那件事（学员写，4 分钟）
 * 🔴 只有指令，无示例。给了示例，后面四问收上来的全是示例的变体。
 */
export default function L11P02_BringTask() {
	return (
		<Page>
			<PageHead phase="write" title="先写一件事" />

			<div style={{
				border, boxShadow: shadow, background: colors.white,
				padding: '32px 38px', flexShrink: 0,
			}}>
				<div style={{ fontSize: 36, fontWeight: 900, color: colors.black, lineHeight: 1.45 }}>
					写一件你<span style={{ color: colors.red }}>现在每周至少做三次</span>、
					做的时候<span style={{ color: colors.red }}>基本不用动脑</span>的事。
				</div>
				<div style={{ fontSize: 25, color: '#666', marginTop: 14, lineHeight: 1.5 }}>
					一句话，动词开头。是你自己真的在做的事，不是你觉得「应该可以」的事。
				</div>
			</div>

			<div style={{ display: 'flex', gap: 18, flex: 1, minHeight: 0 }}>
				{[
					{ t: '真的在做', d: '假想的事后面四个问题你一个都答不上来，因为你没真的在乎过它' },
					{ t: '说得出产物', d: '做完之后世界上多了个什么东西 —— 一个文件、一条消息、一个 PR' },
					{ t: '做错一次不出人命', d: '今天挑一件低风险的。真正想交出去的那件高风险的，留到作业' },
				].map((c, i) => (
					<div key={c.t} style={{
						flex: 1, border, boxShadow: shadow, background: colors.white,
						display: 'flex', flexDirection: 'column', minHeight: 0,
					}}>
						<div style={{
							background: colors.dark, color: colors.white, padding: '9px 16px',
							borderBottom: border, display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
						}}>
							<span style={{ fontFamily: fonts.mono, fontSize: 17, color: colors.yellow }}>{i + 1}</span>
							<span style={{ fontSize: 21, fontWeight: 900 }}>{c.t}</span>
						</div>
						<div style={{ padding: '15px 18px', fontSize: 21, lineHeight: 1.5, color: '#555' }}>{c.d}</div>
					</div>
				))}
			</div>

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0,
			}}>
				<span style={{ fontSize: 22 }}>✍️</span>
				<span style={{ fontSize: 22, fontWeight: 700 }}>写在纸上或本地文件里，不用交</span>
				<span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: FS.note, color: '#aaa' }}>限时</span>
				<span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, color: colors.yellow }}>4 分钟</span>
			</div>
		</Page>
	);
}
