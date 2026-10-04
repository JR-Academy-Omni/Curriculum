import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第十四节《它能碰什么》=====
// 给一个 agent 一套公司系统的权限、连接、技能与维护
// 课型：120 分钟线上直播动手课（无助教）
//
// 内容 SoT：VIBE_CODING_MASTER_L14_BLUEPRINT.md DRAFT 1.2（课程结构）
//           VIBE_CODING_MASTER_L14_ARCH_BRIEFING.md DRAFT 1.1（讲什么）
//           **两者冲突以蓝图为准。**
//           逐页 spec：PRD.md · 讲稿：RUNSHEET.md
//
// 🎯 三件硬产物：
//    ① 一张自己公司的写权限表（四列，第三列「批准立在什么上面」不许空）
//    ② 一个当堂跑出 FAILED 而不是 0 的脚本
//    ③ 一份按十节写完的技能规范
//
// ── 三句话 ──────────────────────────────────────
//   立论（P08，第二幕）：
//     **权限不是一个开关，是一张一行一行批出来的表。**
//   反转（P21，第五幕，学员刚给自己的表加完审批人、最有安全感的时候翻）：
//     **你加的那个人工审批，多半不是保障，是失效模式。**
//   收口（P23，全程不许提前说）：
//     **它最危险的时候，不是它做错了事，是它什么都没做，而你以为它做了。**
//
//   链条：权限一行一行批 → 每一行都要记下「这项批准立在什么上面」
//         → 因为可核查的是依据，不是按钮 → 一个按钮产生不了任何可核查的东西
//         → 而不可核查的系统，最典型的失败不是做错事
//         → 是什么都没发生，而所有人以为发生了
//
// ── 承接 L13：那节造了一个会自己拦人的仓库，但它现在没有消费者 ──
//   学员回去第一天就会撞上：「我建好了。然后呢？AI 在哪？它凭什么读我这些文件？」
//   顺序是故意的，而且是这两节之间最重要的一句话：
//   **地基错了，上面那层越强越危险。**
//
// ── 🔴 教学决定一：这一节最大的风险是变成管理课，比 L13 严重得多 ──
//   权限表、连接器清单、技能规范、维护制度 —— 四样里三样是在写表格。
//   解药只有一个：**每一幕结束前，学员的终端必须有新输出。** 没有就是讲飞了。
//   五处硬要求见 PRD §1 的 ✅。
//
// ── 🔴 教学决定二（2026-10-04 讲师改版）：全课只保留一次翻车 ──
//   原来有三次。讲师取消了其中两次：「不要从反面来教。」
//   · P07 原来让学员故意放宽白名单跑危险命令 → 改成正面讲它管什么、不管什么
//   · P20 原来让学员故意挂一个会阻塞的钩子 → 改成正面给那条铁律（永远正常退出）
//   沿用第十三节 v3.2 那条：**正面给规矩，不赌学员犯错** ——
//   只在你恰好犯过错时才成立的教学点，是抽奖不是教学。
//
//   **留下的唯一一次是 P14，而且它其实不算「从反面教」：**
//   学员跑的是一段**写得很正常**的脚本，他只是观察到它的真实行为 ——
//   查询失败被默认写法吞掉，报成了 0。
//   **这一次讲轻了，收口就没有地基，最后一句话落空。**
//
// ── 🔴 教学决定三：全程不出现学员公司那边的产品名 ──
//   三重收益：脱敏 · 国内班海外班同一份课件 · 学员能把自己代入。
//   **本节比别节更要紧，因为它通篇在讲外部系统。**
//   讲师课上也不要说，要举例就说「你们那个记事情的系统」。
//
// ── 🔴 deck 纪律（完整版在 components/deck.tsx 顶部）──
//   · 不许出现绝对分钟数 / 精确计数 / 「原话」式引用 / 待填空白
//   · 动手页只放指令和代码，不放结果截图
//   · ⭐ P08 写权限表第三列视觉上必须最重
//   · ⭐ P21 反转必须写死是对「人工审批」的，不是对「审批」的
//   · ⭐ P23 收口必须四行并排，不能只放最后那句话

import L14P00_Cover from './components/slides/L14P00_Cover';
import L14P01_FiveQuestions from './components/slides/L14P01_FiveQuestions';
import L14P02_Handoff from './components/slides/L14P02_Handoff';
import L14P03_RunYourConfig from './components/slides/L14P03_RunYourConfig';
import L14P04_ThreeRepos from './components/slides/L14P04_ThreeRepos';
import L14P05_WriteItDown from './components/slides/L14P05_WriteItDown';
import L14P06_Allowlist from './components/slides/L14P06_Allowlist';
import L14P07_WhatAllowlistDoes from './components/slides/L14P07_WhatAllowlistDoes';
import L14P08_WritePermTable from './components/slides/L14P08_WritePermTable';
import L14P09_FillYourOwn from './components/slides/L14P09_FillYourOwn';
import L14P10_FourBans from './components/slides/L14P10_FourBans';
import L14P11_DraftVsSend from './components/slides/L14P11_DraftVsSend';
import L14P12_Connectors from './components/slides/L14P12_Connectors';
import L14P13_LoginExpires from './components/slides/L14P13_LoginExpires';
import L14P14_MakeItFail from './components/slides/L14P14_MakeItFail';
import L14P15_ZeroOrUnknown from './components/slides/L14P15_ZeroOrUnknown';
import L14P16_FourStates from './components/slides/L14P16_FourStates';
import L14P17_TwoLayers from './components/slides/L14P17_TwoLayers';
import L14P18_TenSections from './components/slides/L14P18_TenSections';
import L14P19_Composition from './components/slides/L14P19_Composition';
import L14P20_ThreeLayers from './components/slides/L14P20_ThreeLayers';
import L14P21_Reversal from './components/slides/L14P21_Reversal';
import L14P22_Drift from './components/slides/L14P22_Drift';
import L14P23_Closing from './components/slides/L14P23_Closing';
import L14A0_WhyThreeRepos from './components/slides/L14A0_WhyThreeRepos';
import L14A1_TenSectionsFull from './components/slides/L14A1_TenSectionsFull';
import L14A2_WhoCanChange from './components/slides/L14A2_WhoCanChange';
import L14A3_Honesty from './components/slides/L14A3_Honesty';
import L14A4_WhatsNext from './components/slides/L14A4_WhatsNext';

export default function App() {
	return (
		<SlideEngine>
			<L14P00_Cover />
			<L14P01_FiveQuestions />

			{/* 幕一 · 它现在能碰什么 */}
			<L14P02_Handoff />
			<L14P03_RunYourConfig />
			<L14P04_ThreeRepos />
			<L14P05_WriteItDown />

			{/* 幕二 · 给它钥匙 —— 核心产物在这 */}
			<L14P06_Allowlist />
			<L14P07_WhatAllowlistDoes />
			<L14P08_WritePermTable />
			<L14P09_FillYourOwn />
			<L14P10_FourBans />
			<L14P11_DraftVsSend />

			{/* 幕三 · 它够得着外面吗 —— 全节高光 */}
			<L14P12_Connectors />
			<L14P13_LoginExpires />
			<L14P14_MakeItFail />
			<L14P15_ZeroOrUnknown />
			<L14P16_FourStates />

			{/* 幕四 · 它会干什么活 */}
			<L14P17_TwoLayers />
			<L14P18_TenSections />
			<L14P19_Composition />

			{/* 幕五 · 谁来维护 */}
			<L14P20_ThreeLayers />
			<L14P21_Reversal />
			<L14P22_Drift />
			<L14P23_Closing />

			{/* 附录 · 课上不讲，答疑时翻 */}
			<L14A0_WhyThreeRepos />
			<L14A1_TenSectionsFull />
			<L14A2_WhoCanChange />
			<L14A3_Honesty />
			<L14A4_WhatsNext />
		</SlideEngine>
	);
}
