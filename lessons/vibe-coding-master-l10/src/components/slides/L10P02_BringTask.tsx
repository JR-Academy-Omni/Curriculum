import { colors, fonts } from '../ui';
import { Page, PageHead, PracticeBoard, Note } from '../deck';

// P02 · 拿出那个任务（蓝图 §2.2 入场券 + §2.3 兜底）
// 从这一页开始到 P07，老师只问、只演示，不讲解（§5）。
// 🔴 仍然不许出现四格。这一页只是「把材料摊到桌上」。

export default function L10P02_BringTask() {
	return (
		<Page>
			<PageHead
				phase="do"
				title="拿出那个任务"
				sub="接下来四个问题，都是问这一个任务。任务选错了，四个答案全是空话。"
			/>

			<PracticeBoard
				doWhat={
					<div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
						<div>打开你带来的那个项目，把那个任务写在纸上或者随便一个文件里。一句话就够。</div>
						<div style={{
							background: colors.warmBg, border: `3px solid ${colors.black}`,
							padding: '13px 16px', fontFamily: fonts.mono, fontSize: 21, lineHeight: 1.5,
						}}>
							「我这周要给 ___ 做 ___，但还没做。」
						</div>
						<div style={{ fontSize: 21, color: '#666', lineHeight: 1.5 }}>
							没带任务的：拿你<strong>上周已经做完</strong>的一件事，倒回去填。你有真实结局可以对照，这条其实学得最透。
						</div>
					</div>
				}
				criteria={[
					<>是<strong>真任务</strong>，不是假想任务</>,
					<>你能在课堂上打开对应的项目</>,
					<>不含敏感信息，敢投屏</>,
					<>量级 = 你原本打算<strong>今天下午</strong>交给 AI 做的那种</>,
				]}
				stopAt="2 分钟"
				warn={<><strong>假想任务是这节课最大的坑。</strong>你没真的在乎过它，所以后面有两个问题你根本填不出来 —— 而那两个才是重点。</>}
			/>

			<Note>
				量级判断：太大，四个问题填不完；太小，有一个问题会是空的。「今天下午能交出去」这个尺度刚好。
			</Note>
		</Page>
	);
}
