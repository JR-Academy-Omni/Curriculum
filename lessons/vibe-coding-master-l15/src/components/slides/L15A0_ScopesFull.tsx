import { Page, AppendixBadge, Head, TwoCol, colors, fonts, radii } from '../deck';

/** A0 · 三层完整对照（课上不讲，留给学员课后拍照） */
export default function L15A0_ScopesFull() {
	const chip = (t: string, c: string) => (
		<span style={{
			fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, padding: '3px 10px',
			borderRadius: radii.label, background: c, color: colors.black, border: `2px solid ${colors.black}`,
		}}>{t}</span>
	);
	return (
		<Page>
			<AppendixBadge label="A0 · 三层完整对照" />
			<Head sub="判断该用哪一层，三句话就够。">三层 scope</Head>
			<TwoCol
				head={['这东西是什么样的', '装哪一层']}
				rows={[
					['换个项目你还想要', <>{chip('user', colors.blue)} 第一层 · 装给你自己</>],
					['是这个项目的规矩，换个人来做也不该变', <>{chip('project', colors.teal)} 第二层 · 跟着项目，进 git</>],
					['只是你在这台机器上的临时偏好', <>{chip('local', colors.orange)} 第三层 · 不进 git</>],
				]}
			/>
			<p style={{ fontSize: 22, color: '#555', lineHeight: 1.75, marginTop: 24 }}>
				三层都落在可读的纯文本里。装了什么、装在哪一层、哪个版本、什么时候装的，
				都记在一份清单文件里，你随时可以打开核对。
			</p>
		</Page>
	);
}
