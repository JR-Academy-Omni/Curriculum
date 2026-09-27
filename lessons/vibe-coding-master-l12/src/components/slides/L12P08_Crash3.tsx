import { ActBadge, Page, Code, colors, fonts, border, shadowSm } from '../deck';
import { CRASH3, DEBUG_1, DEBUG_2, DEBUG_3, DEBUG_DUMP } from '../../data/code';

// P08 · 翻车③：脚本自己错了 + 排错三板斧 🎬 学员触发
// 🚨 讲师别忘了让他们把 exit 1 改回 exit 2，不然第五幕自己那条也是坏的。
export default function L12P08_Crash3() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={3} mode="🎬 你自己触发" />

			<div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
				<span style={{
					fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 2, color: colors.orange,
				}}>
					翻车 ③
				</span>
				<h2 style={{ fontFamily: fonts.heading, fontSize: 42, fontWeight: 900, color: colors.white, letterSpacing: -1 }}>
					把 <code style={{ fontFamily: fonts.mono, color: colors.orange }}>exit 2</code> 改成{' '}
					<code style={{ fontFamily: fonts.mono, color: colors.orange }}>exit 1</code>
				</h2>
			</div>

			<div style={{ flex: 1, display: 'flex', gap: 28, minHeight: 0 }}>
				<div style={{ flex: 0.9 }}>
					<Code code={CRASH3} hi={[1]} hiColor={colors.orange} size={18} />
					<div style={{
						border: `3px solid ${colors.orange}`, background: 'rgba(255,145,77,0.08)',
						padding: '20px 22px', marginTop: 20,
					}}>
						<p style={{ fontSize: 22, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
							除了 <b style={{ color: colors.white }}>0</b> 和 <b style={{ color: colors.white }}>2</b>，
							别的退出码都是「你的脚本出问题了」。
							<br /><br />
							它不会拦。<b style={{ color: colors.orange }}>它会报个错，然后照做。</b>
						</p>
					</div>
					<div style={{
						border, background: colors.yellow, boxShadow: shadowSm,
						padding: '14px 18px', marginTop: 18, fontSize: 21, fontWeight: 700, lineHeight: 1.5,
					}}>
						hook 挂上 ≠ 生效。
						<br />
						你得<b>看见它拦成功过一次</b>，才算数。
					</div>
				</div>

				<div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 11, minHeight: 0 }}>
					<div style={{
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
						letterSpacing: 2, color: colors.yellow,
					}}>
						排错三板斧 · 你回去天天用
					</div>
					<Board n={1} t="单独喂一坨 JSON，看脚本自己跑不跑得通"><Code code={DEBUG_1} size={16} wrap /></Board>
					<Board n={2} t="忘了给执行权限（最常见）"><Code code={DEBUG_2} size={16} /></Board>
					<Board n={3} t="看详细日志"><Code code={DEBUG_3} size={16} /></Board>
					<Board n={4} t="搞不清某个事件给了你什么字段？别查文档" accent>
						<Code code={DEBUG_DUMP} size={16} hi={[1]} />
					</Board>
				</div>
			</div>
		</Page>
	);
}

function Board({ n, t, children, accent }: { n: number; t: string; children: React.ReactNode; accent?: boolean }) {
	return (
		<div>
			<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
				<span style={{
					fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
					width: 20, height: 20, background: accent ? colors.yellow : 'rgba(255,255,255,0.2)',
					color: accent ? colors.black : colors.white,
					display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
				}}>
					{n}
				</span>
				<span style={{ fontSize: 17, color: accent ? colors.yellow : 'rgba(255,255,255,0.75)', fontWeight: accent ? 700 : 400 }}>
					{t}
				</span>
			</div>
			{children}
		</div>
	);
}
