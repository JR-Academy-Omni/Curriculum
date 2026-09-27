import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第十二节《Claude Hook》=====
// 把「我跟它说过」变成「它绕不过去」
// 课型：96 分钟动手课（第 20 分钟学员就亲手挂上第一个 hook 并当场验证；
//        40–58 分钟看着自己挂的东西咬自己三次）
//
// 内容 SoT：VIBE_CODING_MASTER_L12_BLUEPRINT.md v1.0
//           deck 严格按 §11.2 逐页表实现，正课 24 页 P00–P22 + 附录 3 页 P23–P25。
//           讲稿：lessons/vibe-coding-master-l12/RUNSHEET.md
//
// 🎯 硬产物：一个学员自己写的、**当堂拦截成功过一次**的 hook。
//            Exit ticket 第 6 题现场收拦截证据 —— 没跑通的不算数。
//
// ── 全节立论 ────────────────────────────────────
//   开场（P10 说）：一条规矩该不该挂成 hook，不取决于它有多重要，
//                   取决于「违反了没有」这件事，一个不动脑的脚本判不判得出来。
//   收口（P14）：**hook 挡得住的，只有你说得清的那部分。**
//                说不清的那部分还在 —— 而且现在你以为它被挡住了。
//                （和 L11「绿灯不等于成功」同构：一个让你安心的信号，
//                  和它实际保证了什么，中间有个缺口。）
//
// ── 承接：前十一节交给学员的东西有个没说破的共同性质 ──
//   L1 的 PRD · L2 的 CLAUDE.md · L5 的 Skill · L7 的 brief · L11 的任务书
//   —— 全都是「说给它听」的。它可以不读，读了可以不照做。
//   L12 第一次给一个**它不能不照做**的东西。官方原话是本节支点：
//     "deterministic control: certain actions always happen rather than
//      relying on the LLM to choose to run them."
//
//   结清两笔老账（课上要明说）：
//     · L6 铁律「它说完成了不算完成」→ Stop hook 让它**没法说完成**（P11）
//     · L6「context 会被压缩丢东西」 → SessionStart:compact 自动灌回去（P23）
//   接 L11：L11 §8.2 那三条让它不卡住的做法，代价是「该拦的也放开了」。
//     hook 是唯一能让「我放开权限」和「这几件事你永远别碰」同时成立的机制（P13）。
//
// ── 🔴 教学决定一（§0.3）：先让它成功，再让它咬人 ──
//   L10 和 L11 都用了「先撞墙再给尺子」。第三次再用，学员会认出套路，
//   戏剧性归零。而 hook 是这个系列里**第一个能在 90 秒内跑给人看**的东西，
//   不用它是浪费。所以顺序是：
//     0–18   你说过几遍了 + 演示「CLAUDE.md 里写着，它照样犯」
//     18–40  全班一起挂上第一个，当场违反，看它被拦   ← 全节高光
//     40–58  ⚠️ 学员自己挂的那个东西开始咬他，三次，形态不同
//     58     判断线首现：「你们刚才被咬的三次，不是三个 bug」
//   学员对 hook 的第一印象必须是「太爽了」，否则后面的告诫他听不进去。
//
// ── 🔴 教学决定二（§0.4）：三次翻车形态不同，第二次最重要 ──
//   ① 拦太宽 → 它干不了活了（你会自己关掉 = 等于没挂）
//   ② 挂错时点 → 拦了个寂寞，事已经做完了 ⭐⭐ 本幕支点
//   ③ 脚本自己错 → 冒红字然后照做
//   ②是唯一**没有声音**的失败：红字照出、日志照写、监控正常，只有文件变了。
//   官方依据：PostToolUse can't undo actions since the tool has already executed.
//   而且三次翻车必须是**学员自己改自己触发**，老师演的换不来自己被咬的记忆。
//
// ── 逐页（§11.2）────────────────────────────────
//   第一幕 · 你说过几遍了（不给框架）
//   P00 Claude Hook（封面 · 含完成标准与还债开场，口播）   P01 读到不等于照做 🎬
//
//   第二幕 · 挂上第一个（本节地基）
//   P02 这次不写给它看   P03 三步跟我做 🎯   P04 让它改 .env 🎬   P05 三行机制 ⭐
//
//   第三幕 · 它咬人了
//   P06 翻车① 拦太宽 🎬   P07 翻车② 挂错时点 🎬⭐⭐   P08 翻车③ + 排错三板斧 🎬
//   P09 三次并排           P10 判断线首现 ⭐
//
//   第四幕 · 挂哪儿、代价
//   P11 时点二维图 ⭐⭐   P12 事件你一个都不用背   P13 压得过 bypass ⭐⭐
//   P14 只挡得住你说得清的 ⭐⭐ 反转   P15 要动脑的怎么办
//   P16 挂哪个文件 = 谁受它管 ⭐        P17 用不了 Claude Code 怎么办
//
//   第五幕 · 落地
//   P18 挂你自己那条 🎯   P19 为什么这么写（原理·穿插）   P20 讲评规则
//   P21 第三条就该进仓库   P22 作业 + Exit ticket
//
//   附录（课上不讲 · 不带阶段徽章 · 拍照带走）
//   P23 用法样例库   P24 脚本解剖与字段速查   P25 它不工作的时候
//
// ── 🔴 deck 纪律（§11.1 / §21.2）────────────────
//   · P00–P09 不许出现判断线 / 四步图 / 时点二维图 /「判据」二字
//   · deck 上不许出现绝对分钟数 —— 时间表只存在于 RUNSHEET
//   · deck 里不留任何待填空白 —— 讲师个人素材只进 RUNSHEET 附录 K
//   · 任何一页都不许出现填好的样例 hook（给了范文，收上来全是它的变体）
//   · 动手页只放指令和代码，不放结果截图
//   · 代码样例标「官方」的逐字来自 code.claude.com/docs，不许改写
//   · 不用本课程仓库自己的 .claude / Skill / hook 当例子

import L12P00_Cover from './components/slides/L12P00_Cover';
import L12P01_ItReadsAnyway from './components/slides/L12P01_ItReadsAnyway';
import L12P02_Switch from './components/slides/L12P02_Switch';
import L12P03_ThreeSteps from './components/slides/L12P03_ThreeSteps';
import L12P04_TriggerIt from './components/slides/L12P04_TriggerIt';
import L12P05_ThreeLines from './components/slides/L12P05_ThreeLines';
import L12P06_Crash1 from './components/slides/L12P06_Crash1';
import L12P07_Crash2 from './components/slides/L12P07_Crash2';
import L12P08_Crash3 from './components/slides/L12P08_Crash3';
import L12P09_ThreeBites from './components/slides/L12P09_ThreeBites';
import L12P10_GateChain from './components/slides/L12P10_GateChain';
import L12P11_TimePointGrid from './components/slides/L12P11_TimePointGrid';
import L12P12_EventCloud from './components/slides/L12P12_EventCloud';
import L12P13_BeatsBypass from './components/slides/L12P13_BeatsBypass';
import L12P14_OnlyWhatYouCanSay from './components/slides/L12P14_OnlyWhatYouCanSay';
import L12P15_WhenItNeedsJudgment from './components/slides/L12P15_WhenItNeedsJudgment';
import L12P16_WhereItLives from './components/slides/L12P16_WhereItLives';
import L12P17_Fallback from './components/slides/L12P17_Fallback';
import L12P18_YourOwnRule from './components/slides/L12P18_YourOwnRule';
import L12P19_WhyWordedThisWay from './components/slides/L12P19_WhyWordedThisWay';
import L12P20_Debrief from './components/slides/L12P20_Debrief';
import L12P21_ThirdOne from './components/slides/L12P21_ThirdOne';
import L12P22_Homework from './components/slides/L12P22_Homework';
import L12P23_ExampleLibrary from './components/slides/L12P23_ExampleLibrary';
import L12P24_Anatomy from './components/slides/L12P24_Anatomy';
import L12P25_Troubleshoot from './components/slides/L12P25_Troubleshoot';

export default function App() {
	return (
		<SlideEngine>
			{/* 第一幕 · 你说过几遍了 —— 不给框架 */}
			<L12P00_Cover />
			<L12P01_ItReadsAnyway />

			{/* 第二幕 · 挂上第一个 —— 本节地基，不许改成老师演示 */}
			<L12P02_Switch />
			<L12P03_ThreeSteps />
			<L12P04_TriggerIt />
			<L12P05_ThreeLines />

			{/* 第三幕 · 它咬人了 —— 三次都用学员自己的 hook */}
			<L12P06_Crash1 />
			<L12P07_Crash2 />
			<L12P08_Crash3 />
			<L12P09_ThreeBites />
			<L12P10_GateChain />

			{/* 第四幕 · 挂哪儿、能挂什么、代价 */}
			<L12P11_TimePointGrid />
			<L12P12_EventCloud />
			<L12P13_BeatsBypass />
			<L12P14_OnlyWhatYouCanSay />
			<L12P15_WhenItNeedsJudgment />
			<L12P16_WhereItLives />
			<L12P17_Fallback />

			{/* 第五幕 · 落地 */}
			<L12P18_YourOwnRule />
			<L12P19_WhyWordedThisWay />
			<L12P20_Debrief />
			<L12P21_ThirdOne />
			<L12P22_Homework />

			{/* 附录 · 课上不讲，投屏留最后给学员拍照 */}
			<L12P23_ExampleLibrary />
			<L12P24_Anatomy />
			<L12P25_Troubleshoot />
		</SlideEngine>
	);
}
