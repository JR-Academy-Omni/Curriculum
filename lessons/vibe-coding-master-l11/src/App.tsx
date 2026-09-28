import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第十一节课 =====
// 让 Agent 定时 / 自动替你干活：你不在场的时候，它凭什么做对
// 课型：90 分钟框架课（前 22 分钟学员在写、在被打回；22–36 看老师翻两次车）
//
// 内容 SoT：VIBE_CODING_MASTER_L11_BLUEPRINT.md v1.0
//           deck 严格按 §11.2 逐页表实现，正课 29 页 P00–P28 + 附录 1 页 P29。
//
// 🎯 硬产物：一份学员自己的「无人值守任务书」，七段两块，
//            可复用、可做成 Skill（P22 / P26 第 7 题）。
//
// ── 全节立论 ────────────────────────────────────
//   开场（P10 说）：能不能交给它自动跑，不取决于这件事有多难，
//                   取决于它做错的时候你多久会知道、还救不救得回来。
//   收口（P15 首说，P26 收）：**你消灭的不是那个问题，是那次提问。**
//                   提问被取消了，那个决定并没有消失 —— 它被交给 Agent
//                   自己做了。这就是任务书存在的理由，不是一句总结。
//
// ── 承接：前十节有一个没说出口的共同前提 ──────────
//   L6 的打断信号要人看 · L7 的汇总是你的活 · L8 的 Lead 验收要你在
//   · L10 的四问是你开工前自己过一遍 —— 全都假设**你在场**。
//   L11 第一次把这个前提抽掉。
//   和 L10 的接口（P12）：**L10 的隐藏区 = 它会来问你的地方。**
//   定时任务不给它问的机会，所以隐藏区必须在出发前搬空 ——
//   上节那节理论课在这里第一次变成硬性动作（判断闸④）。
//
// ── 🔴 教学决定一（§0.3）：先让学员交一件不合格的任务 ──
//   讲「哪些适合哪些不适合 + 四条判据」一定失败：学员会点头、会记下，
//   然后回去把一件不该自动化的事自动化了 —— 因为他不觉得那四条说的是他。
//   所以顺序是反的：
//     0–7    写下「我想让它每天替我做的那件事」（不给任何判据）
//     7–22   四个问题逐个把它打回来
//     22–36  老师翻车两次（一次现场跑，一次翻昨夜的账）
//     36     判断闸第一次出现：「你们刚才回答的四个问题，不是四个问题。」
//   全课支点是第二问「它做错了，你多久会知道？」—— 多数人答不出，
//   因为手工做的时候那一眼检查是免费且隐形的，自动化把它拿掉了。
//
// ── 🔴 教学决定二（§0.4）：演示必须翻车两次，翻法不同 ──
//   学员进教室时只怕「它停下来等你批」；真正会伤人的是
//   「**它没停，它绕过去了，然后报告说做完了**」。
//   P07 = 现场跑（不许砍）。P08 = **展示前一天挂住的会话，不是现场跑**
//   —— 它要证明「它等了一夜也没人理」，这件事五分钟里演不出来。
//
// ── 卡住 ≠ 断掉（§1.3，第四幕的骨架）────────────
//   卡住：它还活着但不往前走（权限 / 问题 / 等待）→ 提前批 / 提前答 / 给边界
//   断掉：它没活到最后（网络 / 凭证 / 环境 / 限流 / 额度）
//         前四种都会给你一个「跑完了」的外观；第五种连外观都没有。
//   这两件事混着讲，学员回去只会加超时，不会加契约。
//
// ── 逐页（§11.2）────────────────────────────────
//   第一幕 · 你先交（0–22，不给框架）
//   P00 你不在的时候（封面）   P04 问题② ⚠️ 全课支点，≥60 秒沉默不救场
//   P01 今天的完成标准         P05 问题③
//   P02 写下那件事             P06 问题④
//   P03 问题①
//
//   第二幕 · 两次翻车（22–36）
//   P07 它绕过去了 🎬现场跑    P08 它挂在那儿等 🎬昨夜会话    P09 两种翻车并排
//
//   第三幕 · 判断闸首次出现（36–47）
//   P10 四个问题有顺序 ⭐      P11 前十节你都在场   P12 隐藏区 = 它会来问你的地方
//
//   第四幕 · 怎么设，会出什么事（47–78）
//   P13 三条通道              P17 五种断法
//   P14 选哪条                P18 绿灯不等于成功
//   P15 三条做法及其代价 ⭐    P19 结果契约（给脚本看的三个状态）⭐⭐
//   P16 铁律 ⭐⭐反转          P20 回执的第二个读者是你（给人看的六项）⭐⭐
//                             P21 重试与幂等（机器自己能恢复的）
//                             P22 它叫醒你之后 · 恢复路径（必须你来的）⭐⭐
//                             P23 用不了云端怎么办
//
//   第五幕 · 落地（84–96）
//   P24 写你的任务书 🎯硬产物  P26 讲评规则   P28 作业 + Exit ticket
//   P25 为什么这么组词         P27 第三份就该是 Skill
//
//   附录（课上不讲）
//   P29 断网之后把会话拉回来接着跑 —— 续跑≠重跑，两次封顶
//
// ── 节奏铁律（§10.1）─────────────────────────────
//   ① P10 之前不许出现任何四步图、闸门图或「判断线」三个字
//   ② P04 的沉默不许救场，至少 60 秒
//   ③ P07 现场跑；P08 是昨夜挂住的会话，不许改成现场建
//   ④ P16 之前不许出现「宁可不做」这个意思的任何表述（它是反转）
//   ⑤ P18 / P19 / P20 三页一口气讲完，中间不许休息、不许插问答
//     （P18 提出问题 · P19 给脚本的解法 · P20 给人的解法）
//   ⑥ P19 的三个状态写死成 done / skipped / needs-human
//   ⑦ P21（受限环境）不许砍
//   ⑧ P24 的八分钟里老师不许连续讲超过 90 秒，中途只插 P25 一次
//   ⑨ P22 收口必须落在「回灌是止血，改任务书才是治本」——
//     只讲 webhook，学员会把它当终点，然后每周被同一个问题叫醒一次
//
// ── Deck 性质铁律（§11.1，详见 deck.tsx 文件头）────
//   · P00–P09 不许出现「定时 / Schedule / Cron / 自动化」任何一个词
//     （这条覆盖封面标题和 index.html 的 <title>）
//   · deck 上不许出现绝对分钟数，动作页只给**时长**
//   · **deck 里不留任何待填空白页** —— 讲师的个人素材（自己那次静默失败
//     隔了几天才发现、演示用哪个项目）只进 RUNSHEET，不在 slide 上留「___」
//   · 骨架给了，范文不给 —— 给了范文任务书就变成填空题
//   · 本节没有标准答案，deck 上不许出现「正确答案应该是……」
//   · 具体参数名 / 版本号 / 数值不写死（产品行为变化快，讲师按当天文档口播）

import L11P00 from './components/slides/L11P00_Cover';
import L11P01 from './components/slides/L11P01_Contract';
import L11P02 from './components/slides/L11P02_BringTask';
import L11P03 from './components/slides/L11P03_Ask1';
import L11P04 from './components/slides/L11P04_Ask2';
import L11P05 from './components/slides/L11P05_Ask3';
import L11P06 from './components/slides/L11P06_Ask4';
import L11P07 from './components/slides/L11P07_DemoDetour';
import L11P08 from './components/slides/L11P08_DemoStall';
import L11P09 from './components/slides/L11P09_TwoFailures';
import L11P10 from './components/slides/L11P10_GatesRevealed';
import L11P11 from './components/slides/L11P11_YouWereThere';
import L11P12 from './components/slides/L11P12_HiddenIsWhereItAsks';
import L11P13 from './components/slides/L11P13_ThreeChannels';
import L11P14 from './components/slides/L11P14_WhichChannel';
import L11P15 from './components/slides/L11P15_ThreeWaysAndCost';
import L11P16 from './components/slides/L11P16_IronLaw';
import L11P17 from './components/slides/L11P17_FiveBreaks';
import L11P18 from './components/slides/L11P18_GreenIsNotSuccess';
import L11P19 from './components/slides/L11P19_ResultContract';
import L11P20 from './components/slides/L11P20_TheOtherReader';
import L11P21 from './components/slides/L11P21_RetryIdempotent';
import L11P22 from './components/slides/L11P22_AfterItWakesYou';
import L11P23 from './components/slides/L11P23_RestrictedEnv';
import L11P24 from './components/slides/L11P24_WriteYourBrief';
import L11P25 from './components/slides/L11P25_WhyWordedThisWay';
import L11P26 from './components/slides/L11P26_ReviewRule';
import L11P27 from './components/slides/L11P27_MakeItASkill';
import L11P28 from './components/slides/L11P28_HomeworkExit';
import L11P29 from './components/slides/L11P29_AppendixResumeSession';

export default function App() {
	return (
		<SlideEngine>
			{/* ══ 第一幕 · 你先交（0–22 min）· 不给框架 ══════════════ */}

			{/* 开场与完成标准 0–3 —— 第一幕唯一允许「讲」的一段 */}
			<L11P00 />
			<L11P01 />

			{/* 写下那件事 3–7 */}
			<L11P02 />

			{/* 四个问题 7–22 —— 老师只问，问完闭嘴 */}
			<L11P03 />
			{/* ⚠️ P04 之后：至少 60 秒沉默 → 三句追问（顺序不能改）→ 记下答不出的人 */}
			<L11P04 />
			<L11P05 />
			<L11P06 />

			{/* ══ 第二幕 · 两次翻车（22–36 min）══════════════════════ */}

			{/* 🔴 演示 A 不许砍。三级降级见 §6.4，预录是必备物料不是备份 */}
			<L11P07 />
			{/* 🔴 演示 B = 展示昨夜挂住的会话，不是现场建一个再等 */}
			<L11P08 />
			<L11P09 />

			{/* ══ 第三幕 · 判断闸第一次出现（36–47 min）═════════════ */}

			{/* 🔴 36 分钟。一秒都不许早。 */}
			<L11P10 />
			<L11P11 />
			<L11P12 />

			{/* ══ 第四幕 · 怎么设，会出什么事（47–78 min）═══════════ */}

			{/* 通道 47–58 */}
			<L11P13 />
			<L11P14 />

			{/* 不卡住的三条做法及代价 58–64 —— 收口立论在这里第一次说 */}
			<L11P15 />

			{/* 🔴 铁律 59–61 —— 反转，前面只埋不点 */}
			<L11P16 />

			{/* 断掉 61–66 —— 过渡句必须说：前面是「还活着但不走」，这里是「没活到最后」 */}
			<L11P17 />

			{/* 🔴 P18 + P19 连着讲，中间不许休息、不许插问答 */}
			<L11P18 />
			<L11P19 />
			{/* 🔴 P19 + P20 是一份完整回执的两半：前者给脚本看，后者给人看 */}
			<L11P20 />

			{/* 重试 —— 先契约后重试，顺序不能颠倒 */}
			<L11P21 />

			{/* 🔴 恢复路径 —— needs-human 的下半场。补的是全套最大的一处断裂 */}
			<L11P22 />

			{/* 受限环境 —— 不许砍 */}
			<L11P23 />

			{/* ══ 第五幕 · 落地 ══════════════════════════════════════ */}

			{/* 动手 🎯 硬产物；P25 从这段时间里出约 2 分钟 */}
			<L11P24 />
			<L11P25 />

			{/* 讲评 —— 只问第几道闸，不判任务好坏 */}
			<L11P26 />

			{/* 收口 + 作业 + Exit */}
			<L11P27 />
			<L11P28 />

			{/* ══ 附录 · 课上不讲，不占 96 分钟 ══════════════════════
			    唯一允许写具体命令行参数的一页（正课页按 §19.1 只写能力描述）。
			    留在最后给学员拍照。 */}
			<L11P29 />
		</SlideEngine>
	);
}
