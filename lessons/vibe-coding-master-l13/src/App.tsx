import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第十三节《造一套让规矩成立的系统》=====
// 把一条没人执行的规矩，变成一个会自己拦人的仓库
// 课型：135 分钟线上直播动手课（无助教）。第 8 分钟开始敲，敲到第 130 分钟。
//
// 内容 SoT：VIBE_CODING_MASTER_L13_BLUEPRINT.md v3.1
//           deck 严格按 §11.1 逐页表实现：封面 + 正课 28 页 P00–P27 + 附录 9 页 A0–A8，共 37 页。
//           讲稿：lessons/vibe-coding-master-l13/RUNSHEET.md
//           下一节的内容库：VIBE_CODING_MASTER_L14_ARCH_BRIEFING.md
//
// 🎯 硬产物：一个从空目录长出来的规则仓库 + 6 条检查
//            + **4 次他自己造出来的红** + 1 个被 CI 挡住的 PR
//            + 一段「拒绝编造」的生成器约束。
//
// ── 三句话 ──────────────────────────────────────
//   立论（P21，全节唯一一次点明）：
//     **规矩的力量，不在它写了什么，在谁改得了它。**
//   反转（P19，第三幕末）：
//     **检查挡得住的，只有你说得清的那部分。**
//   收口（P27，全程不许提前说）：
//     **留白在等的那个人，就是你该去谈的那场话。**
//
//   链条：有强制点 → 强制点只挡得住你说得清的 → 说不清的必须留白
//         → 留白在等谁 → 那个人就是你一直没去谈的那个人
//
// ── 承接：L12 让一个 agent 绕不过去，L13 让一整个团队绕不过去 ──
//   同一个立论，对象从一个 context 换成一群人。
//   而「一群人」的最小单位比公司小得多 —— 一个项目组、一个三人小队，
//   甚至只有你和你那几个 agent（P00 / 附录 A0）。
//   判据只有一条：有没有超过一个动作者，会碰同一批东西。
//
// ── 🔴 教学决定一：脊椎是「造这套东西要依次回答的八个问题」 ──
//   不是「强制力阶梯」。阶梯在这条链里是第 6 个决定，把它提到第一位，
//   学员学会的是「怎么给一条规则加强制点」，学不会「该有哪些规则、按什么顺序建」。
//   八步见附录 A1。每一步产出一个文件，仓库当堂从空目录长出来。
//
// ── 🔴 教学决定二（v3.2 翻面）：正面给规矩，不赌学员会犯错 ──
//   旧版：P11 忍着不说人名，P18「这条检查我不解释，你先跑」,赌它咬到学员自己。
//   **讲师否掉了：每个人的仓库不一样，这一下不一定咬得到。**
//   学员今天只写两个角色，模板那三段又不天然招人名，很多人跑出来是绿的,
//   那一格对他们就是空的。**只在你恰好犯过错时才成立的教学点，是抽奖不是教学。**
//   现在 P18 = 先给规矩（只出现角色，不出现人名）→ 给理由（离职只改一份文件）
//   → 才跑 → **抓到 / 没抓到都有话说**。「检查从哪来」改由讲师自己的例子承重。
//   ⛔ 连带拆掉的：P11 不再是「自毁按钮」，讲师说漏嘴不再整格作废。
//
// ── 🔴 教学决定二之二（v3.2 讲师）：指令层排最后 ──
//   AGENTS.md / CLAUDE.md 是唯一一份**会反过来管住这次施工**的文件。
//   写早了，帮你建仓库的那个 agent 当场开始受它管,
//   而它里面一旦有「规则改动必须走 PR」这类条款，**你可能已经没权限改它了**。
//   落点：P04 六层图 L0 标「最后做」+ 红框理由 · P24 生成器第 6 步末尾明写「不许提前写」。
//
// ── 🔴 教学决定三：仓库当堂长出来，不发 starter kit ──
//   只发 check.mjs 骨架 + 六个救生艇目录（线上无助教的兜底）。
//   代价是全班同步难度上升，对冲手段是「每一步结束跑一次检查」。
//
// ── 四次红（前三次必然发生，第四次是条件红）────
//   ① 漏登记（P12）  ② 标了生效但还有空（P14）⭐ 收口的地基
//   ③ 满屏红（P17）  ④ 抓到自己的名字（P18）**,取决于学员自己写了什么，
//      不保证发生。P18 已改成不依赖它，讲师的例子才是主路径。**
//
// ── 三次翻车：形态不同，第二次最重要 ────────────
//   ① 写不出来（判断类查不了）
//   ② 全设成失败（红得有道理，但天天红 → 你会亲手关掉它）⭐⭐ 本幕支点
//   ③ 全绿却早就违反了（检查从哪来）⭐⭐
//
// ── 🔴 deck 纪律（完整版在 components/deck.tsx 顶部）──
//   · deck 上不许出现绝对分钟数（时间表只存在于 RUNSHEET）
//   · P11 不许出现任何「角色文件该怎么写」的提示
//   · 强制力阶梯只能从 P21 开始出现
//   · 动手页只放指令和代码，不放结果截图
//   · 不出现任何产品名（脱敏 + 国内班海外班共用一份课件）
//   · 不出现精确计数（文件数 / 提交数 / 缺口数 = 可反查的指纹）
//   · 不出现「原话」式引用，所有观点用本课自己的话说
//   · 不留任何待填空白（讲师个人素材只进 RUNSHEET 附录 K）

import L13P00_Cover from './components/slides/L13P00_Cover';
import L13P01_Symptoms from './components/slides/L13P01_Symptoms';
import L13P02_ItWasWritten from './components/slides/L13P02_ItWasWritten';
import L13P03_WriteItDown from './components/slides/L13P03_WriteItDown';
import L13P04_SixLayers from './components/slides/L13P04_SixLayers';
import L13P05_WhatComesIn from './components/slides/L13P05_WhatComesIn';
import L13P06_OppositeNeeds from './components/slides/L13P06_OppositeNeeds';
import L13P07_ReadOrCount from './components/slides/L13P07_ReadOrCount';
import L13P08_FirstCheck from './components/slides/L13P08_FirstCheck';
import L13P09_MissingCell from './components/slides/L13P09_MissingCell';
import L13P10_Authority from './components/slides/L13P10_Authority';
import L13P11_Roster from './components/slides/L13P11_Roster';
import L13P12_ForgetToIndex from './components/slides/L13P12_ForgetToIndex';
import L13P13_WhoDecidedThat from './components/slides/L13P13_WhoDecidedThat';
import L13P14_MarkApproved from './components/slides/L13P14_MarkApproved';
import L13P15_Crash1 from './components/slides/L13P15_Crash1';
import L13P16_GateLines from './components/slides/L13P16_GateLines';
import L13P17_Crash2 from './components/slides/L13P17_Crash2';
import L13P18_Crash3 from './components/slides/L13P18_Crash3';
import L13P19_ThreeBites from './components/slides/L13P19_ThreeBites';
import L13P20_LocalIsMutable from './components/slides/L13P20_LocalIsMutable';
import L13P21_Ladder from './components/slides/L13P21_Ladder';
import L13P22_CrossTheLine from './components/slides/L13P22_CrossTheLine';
import L13P23_Switches from './components/slides/L13P23_Switches';
import L13P24_Generator from './components/slides/L13P24_Generator';
import L13P25_Reversal from './components/slides/L13P25_Reversal';
import L13P26_Panorama from './components/slides/L13P26_Panorama';
import L13P27_Closing from './components/slides/L13P27_Closing';
import L13A0_Scales from './components/slides/L13A0_Scales';
import L13A1_EightSteps from './components/slides/L13A1_EightSteps';
import L13A2_FiveElements from './components/slides/L13A2_FiveElements';
import L13A3_DirTest from './components/slides/L13A3_DirTest';
import L13A4_Asymmetry from './components/slides/L13A4_Asymmetry';
import L13A5_OffboardList from './components/slides/L13A5_OffboardList';
import L13A6_CheckLibrary from './components/slides/L13A6_CheckLibrary';
import L13A7_Loop from './components/slides/L13A7_Loop';
import L13A8_RecordStorage from './components/slides/L13A8_RecordStorage';

export default function App() {
	return (
		<SlideEngine>
			{/* 封面 */}
			<L13P00_Cover />

			{/* 第一幕 · 它写在三个地方 ,不给框架 */}
			<L13P01_Symptoms />
			<L13P02_ItWasWritten />
			<L13P03_WriteItDown />
			<L13P04_SixLayers />
			<L13P05_WhatComesIn />
			<L13P06_OppositeNeeds />
			<L13P07_ReadOrCount />
			<L13P08_FirstCheck />

			{/* 第二幕 · 谁说了算 ,P11 不提人名规矩（顺序问题，v3.2 起不再是自毁按钮）*/}
			<L13P09_MissingCell />
			<L13P10_Authority />
			<L13P11_Roster />
			<L13P12_ForgetToIndex />

			{/* 第三幕 · 说得清和说不清 ,本节高光，一格都不能砍 */}
			<L13P13_WhoDecidedThat />
			<L13P14_MarkApproved />
			<L13P15_Crash1 />
			<L13P16_GateLines />
			<L13P17_Crash2 />
			<L13P18_Crash3 />
			<L13P19_ThreeBites />

			{/* 第四幕 · 谁改得了它 ,阶梯从 P21 才第一次出现 */}
			<L13P20_LocalIsMutable />
			<L13P21_Ladder />
			<L13P22_CrossTheLine />
			<L13P23_Switches />

			{/* 第五幕 · 放大与收口 ,P25 到 P27 一口气到底 */}
			<L13P24_Generator />
			<L13P25_Reversal />
			<L13P26_Panorama />
			<L13P27_Closing />

			{/* 附录 · 课上不讲 */}
			<L13A0_Scales />
			<L13A1_EightSteps />
			<L13A2_FiveElements />
			<L13A3_DirTest />
			<L13A4_Asymmetry />
			<L13A5_OffboardList />
			<L13A6_CheckLibrary />
			<L13A7_Loop />
			<L13A8_RecordStorage />
		</SlideEngine>
	);
}
