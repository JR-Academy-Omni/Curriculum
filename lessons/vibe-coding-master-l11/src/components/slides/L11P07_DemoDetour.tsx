import { colors } from '../ui';
import { Page, PageHead, DemoBoard } from '../deck';

/**
 * P07 · 演示 A：它没卡住，它绕过去了 🎬 现场跑
 * 全节最重要的七分钟。学员预期它会报错或停下来要权限，实际它两样都不做。
 *
 * 🔴 这一页只有引导语和观察指令，正文是老师的屏幕。不放结果截图 ——
 *    放了老师就会照着念，现场感全没。
 * 🔴 也不在 slide 上留待填空白：用哪个项目、做哪件事写在 RUNSHEET。
 * 🔴 三级降级见蓝图 §6.4。演示 A 不许砍。
 */
export default function L11P07_DemoDetour() {
	return (
		<Page>
			<PageHead phase="demo" title="换我：这是我自己的项目" />
			<DemoBoard
				mode="现场跑"
				lead={<>我让它做一件<span style={{ color: colors.yellow }}>必须写文件才算做完</span>的事 —— 但我只给它读的权限。</>}
				watch={[
					'它有没有停下来问我要权限。',
					<>它最后<strong>说</strong>自己做完了没有。</>,
					<>等它说完，我们一起<strong>打开那个文件</strong>看一眼。</>,
				]}
				note={<>⚠️ 第三条是这一页的全部意义。<strong>当场打开，不用截图。</strong></>}
			/>
		</Page>
	);
}
