import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第十五节《把你造的东西交出去》=====
// 副标题：装不到第二台机器上的，不是系统，是习惯
// 课型：135 分钟线上直播动手课（无助教）
//
// 内容 SoT：PRD.md（蓝图体系已于 2026-10-11 废除，PRD 即唯一权威）
// 讲稿：RUNSHEET.md（逐页口播，29 正课 + 5 附录）
// 课前包：handout/（六个目录，全部实测跑通）
//
// ⚠️ 本节是全系列最后一节。
//
// 🎯 四件硬产物：
//    ① 一张资产表 —— 前十四节造的每一样东西，标上 scope、进没进 git
//    ② 一个真的装得上的插件包，当堂装到干净环境上并验证生效
//    ③ 一份四格交接说明（碰什么 / 何时自己跑 / 依赖什么凭据 / 坏了谁修）
//    ④ 一条「我走了之后要收回什么」
//
// ── 三句话 ──────────────────────────────────────
//   立论（P05，第一幕末，全课只说一次）：
//     **装不到第二台机器上的，不是系统，是习惯。**
//   反转（P20，第四幕，学员刚把包装成功、最有成就感的时候翻）：
//     **你交出去的不是文件，是默认值 —— 别人不会读你的 README，他们会直接用你设的默认。**
//   收口（P28，全程不许提前说）：
//     **一套系统的真正考验，不是它跑得多好，是它的作者离开之后它还在不在。**
//
//   链条：东西散在一台机器上 → 散的东西没法交 → 交的形状是一个包
//         → 包里装的是默认值，不是文件 → 默认值是你替别人做的、没说出口的决定
//         → 所以交接必须把那些决定说出口
//         → 而最后一个没人说出口的决定是「你走了之后谁来收」
//
// ── 🔴 教学决定一：最大的风险是讲成装软件教程 ──
//   解药：每一幕都必须回指前面十四节的某一样具体产物。
//   **P10 是枢纽页 —— 学员在那一页认不出自己造的东西，这一节就白讲了。**
//
// ── 🔴 教学决定二：正面给规矩，不赌学员犯错（沿用 L13/L14）──
//   P18 三种死法正面讲，不做演示，不让学员故意把包装坏。
//
// ── 🔴 教学决定三：收口不许留钩子 ──
//   P28 之后什么都不接 —— 不预告、不推荐、不留二维码。留白就是收口的一部分。
//
// ── 🔴 教学决定四：干净环境不许动学员的真配置 ──
//   P17 用隔离环境，脚本内有硬拦截。课后学员的机器必须跟开课时一样能用。
//
// ── 🔴 deck 纪律（完整版在 components/deck.tsx 顶部 + PRD §2）──
//   · 不许出现绝对分钟数 / 对真实仓库的精确计数 / 「原话」式引用 / 待填空白
//   · 动手页只放指令和代码，不放结果截图
//   · 公开的插件名与市场名可以上屏；学员本机路径、凭据、公司系统名一律不上屏
//   · ⭐ P10 每一类后面必须挂上「你第几节课造的那个」
//   · ⭐ P20 反转必须在 P19 收完数之后
//   · ⭐ P28 之后什么都没有

// ── 开场 ──
import L15P00_Cover from './components/slides/L15P00_Cover';
import L15P01_Inventory from './components/slides/L15P01_Inventory';
import L15P02_Destination from './components/slides/L15P02_Destination';

// ── 一 · 它现在活在哪 ──
import L15P03_WhereItLives from './components/slides/L15P03_WhereItLives';
import L15P04_ThreeScopes from './components/slides/L15P04_ThreeScopes';
import L15P05_HabitNotSystem from './components/slides/L15P05_HabitNotSystem';
import L15P06_TagYourAssets from './components/slides/L15P06_TagYourAssets';

// ── 二 · 别人是怎么交的 ──
import L15P07_WhatIsAMarketplace from './components/slides/L15P07_WhatIsAMarketplace';
import L15P08_InstallOne from './components/slides/L15P08_InstallOne';
import L15P09_WhereItWent from './components/slides/L15P09_WhereItWent';
import L15P10_WhatAPluginCarries from './components/slides/L15P10_WhatAPluginCarries';
import L15P11_McpIsDifferent from './components/slides/L15P11_McpIsDifferent';
import L15P12_VerifyIt from './components/slides/L15P12_VerifyIt';

// ── 三 · 把自己的打成同样的形状 ──
import L15P13_MinimalPlugin from './components/slides/L15P13_MinimalPlugin';
import L15P14_PutYourSkillIn from './components/slides/L15P14_PutYourSkillIn';
import L15P15_PutYourHookIn from './components/slides/L15P15_PutYourHookIn';
import L15P16_RulesAreNotPlugin from './components/slides/L15P16_RulesAreNotPlugin';
import L15P17_CleanProfile from './components/slides/L15P17_CleanProfile';
import L15P18_ThreeDeaths from './components/slides/L15P18_ThreeDeaths';

// ── 四 · 你交出去的是默认值 ──
import L15P19_CountYourDefaults from './components/slides/L15P19_CountYourDefaults';
import L15P20_YouShipDefaults from './components/slides/L15P20_YouShipDefaults';
import L15P21_FourThingsToSay from './components/slides/L15P21_FourThingsToSay';
import L15P22_HandoverCheck from './components/slides/L15P22_HandoverCheck';
import L15P23_FillYourFour from './components/slides/L15P23_FillYourFour';

// ── 五 · 作者走了之后 ──
import L15P24_ItGetsOld from './components/slides/L15P24_ItGetsOld';
import L15P25_TheEmptyOwner from './components/slides/L15P25_TheEmptyOwner';
import L15P26_WhatYouLeaveBehind from './components/slides/L15P26_WhatYouLeaveBehind';
import L15P27_WriteTheRemoval from './components/slides/L15P27_WriteTheRemoval';
import L15P28_Closing from './components/slides/L15P28_Closing';

// ── 附录（课上不讲）──
import L15A0_ScopesFull from './components/slides/L15A0_ScopesFull';
import L15A1_PluginAnatomy from './components/slides/L15A1_PluginAnatomy';
import L15A2_Troubleshoot from './components/slides/L15A2_Troubleshoot';
import L15A3_PreflightChecklist from './components/slides/L15A3_PreflightChecklist';
import L15A4_QA from './components/slides/L15A4_QA';

export default function App() {
	return (
		<SlideEngine>
			{/* 开场 · 0–10 */}
			<L15P00_Cover />
			<L15P01_Inventory />
			<L15P02_Destination />

			{/* 一 · 它现在活在哪 · 10–32 */}
			<L15P03_WhereItLives />
			<L15P04_ThreeScopes />
			<L15P05_HabitNotSystem />
			<L15P06_TagYourAssets />

			{/* 二 · 别人是怎么交的 · 32–65 */}
			<L15P07_WhatIsAMarketplace />
			<L15P08_InstallOne />
			<L15P09_WhereItWent />
			<L15P10_WhatAPluginCarries />
			<L15P11_McpIsDifferent />
			<L15P12_VerifyIt />

			{/* 三 · 把自己的打成同样的形状 · 65–105 */}
			<L15P13_MinimalPlugin />
			<L15P14_PutYourSkillIn />
			<L15P15_PutYourHookIn />
			<L15P16_RulesAreNotPlugin />
			<L15P17_CleanProfile />
			<L15P18_ThreeDeaths />

			{/* 四 · 你交出去的是默认值 · 105–122 */}
			<L15P19_CountYourDefaults />
			<L15P20_YouShipDefaults />
			<L15P21_FourThingsToSay />
			<L15P22_HandoverCheck />
			<L15P23_FillYourFour />

			{/* 五 · 作者走了之后 · 122–135 */}
			<L15P24_ItGetsOld />
			<L15P25_TheEmptyOwner />
			<L15P26_WhatYouLeaveBehind />
			<L15P27_WriteTheRemoval />
			<L15P28_Closing />

			{/* 附录 · 课上不讲 */}
			<L15A0_ScopesFull />
			<L15A1_PluginAnatomy />
			<L15A2_Troubleshoot />
			<L15A3_PreflightChecklist />
			<L15A4_QA />
		</SlideEngine>
	);
}
