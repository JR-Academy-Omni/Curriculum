import { colors, border, shadow, fonts } from '../ui';
import { Page, PageHead, Note } from '../deck';

// P27 · Exit ticket（蓝图 §13.2）
// 🔴 收取口径：课堂上**只收第 7 题**（那段开场四问，硬产物，不许带回家补），
//    其余七题课后 24 小时内线上提交，判卷在课后。
//    88–90 那两分钟答不完也收不完八道题 —— 这是 Codex review 改过的口径。
// 🔴 第 1、5、7、8 题必须正确。

const Q = [
	{ n: 1, t: '协作失败的第一归因是什么？（不许答「模型不行」或「prompt 没写好」）', must: true },
	{ n: 2, t: '四个象限分别是什么？在你的任务里各举一个例子。' },
	{ n: 3, t: '问题三为什么最难填？' },
	{ n: 4, t: '「不落盘它就编」和「落到哪一层」是不是同一个问题？为什么？' },
	{ n: 5, t: '开放区为什么会退化？举一个你自己的例子。退化的时候有报错吗？', must: true },
	{ n: 6, t: '「设计实验」和「设计 prompt」的区别是什么？' },
	{ n: 7, t: '交出你那段开场四问。', must: true, now: true },
	{ n: 8, t: '你的任务里，哪一类信息你决定不搬进开放区？不搬的话你改成怎么写？', must: true },
];

export default function L10P27_ExitTicket() {
	return (
		<Page>
			<PageHead
				phase="write"
				title="Exit ticket"
				sub="八题至少六题正确。第 1、5、7、8 题必须正确。"
			/>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, minHeight: 0, justifyContent: 'center' }}>
				{Q.map((q) => (
					<div
						key={q.n}
						style={{
							display: 'flex', gap: 14, alignItems: 'center',
							border: q.now ? `3px solid ${colors.red}` : border,
							background: q.now ? '#fff0f0' : colors.white,
							boxShadow: q.now ? `4px 4px 0 ${colors.red}` : '3px 3px 0 #000',
							padding: '7px 15px',
						}}
					>
						<span style={{
							flexShrink: 0, width: 30, height: 30,
							background: q.must ? colors.red : colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 17, fontWeight: 700,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							border: `2px solid ${colors.black}`,
						}}>{q.n}</span>
						<span style={{ fontSize: 21, lineHeight: 1.35, color: colors.dark, fontWeight: q.now ? 800 : 500 }}>
							{q.t}
						</span>
						{q.now && (
							<span style={{
								marginLeft: 'auto', flexShrink: 0, background: colors.red, color: colors.white,
								padding: '4px 12px', fontSize: 17, fontWeight: 900, fontFamily: fonts.mono,
								border: `2px solid ${colors.black}`,
							}}>当场交</span>
						)}
					</div>
				))}
			</div>

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '14px 24px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 20,
			}}>
				<div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.35 }}>
					课堂上<span style={{ background: colors.red, padding: '0 8px' }}>只收第 7 题</span>
					—— 那段四问，不许带回家补。
				</div>
				<div style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 19, color: colors.yellow, textAlign: 'right', lineHeight: 1.4 }}>
					其余七题<br />课后 24 小时内提交
				</div>
			</div>

			<Note>
				第 7 题是今天唯一的硬产物。没有它，这节课对你来说只是一场讲座。
			</Note>
		</Page>
	);
}
