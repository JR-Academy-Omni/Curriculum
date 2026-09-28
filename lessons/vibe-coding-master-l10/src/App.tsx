import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第十节课 =====
// 四象限 AI 协作协议：信息在谁那里，决定谁该说什么
// 课型：90 分钟框架课（不是讲座 —— 前 32 分钟学员在写、在卡住、在看老师翻车）
//
// 内容 SoT：VIBE_CODING_MASTER_L10_BLUEPRINT.md v1.0
//           deck 严格按 §11.2 逐页表实现，28 页 P00–P27。
//
// 🎯 硬产物：一段学员自己的「开场四问」，可复用、可做成 Skill（P22 / P27 第 7 题）。
//
// ── 全节成败判据（§0.1）─────────────────────────────
//   一个学完的人，回去做下一个真实任务时，动作和没学的人不一样吗？
//   离场状态是「思路更清楚了」= 这节课失败。
//   这节课不会让学员多一项能力（四格里三格的动作他们已经会做），
//   它唯一的价值是让学员在没教过的第十种情况下做对。
//
// ── 核心不是四个格子，是四条搬运动作（§0.2）──────────
//   隐藏 → 开放   落盘          L1–L3 全部 SoT
//   盲区 → 开放   先让它说       L6 诊断 · L9 Discovery
//   未知 → 盲/隐  设计实验       L7 只读调查
//   开放 → 隐藏   退化 ⭐        Johari 原型里没有这条，本课的扩展
//   第四条是最值钱也最原创的一页：开放区不是你达成的状态，是你维护的状态，
//   而且它退化的时候**没有报错**。
//
// ── 🔴 最重要的教学决定（§0.3）：图必须第 32 分钟才出现 ──
//   理论课只有一种死法：图在第 8 分钟上屏，之后 80 分钟都在解释一张
//   已经在屏幕上的图，学员从「我在想」变成「我在听」再也回不来。
//   所以顺序是反的：
//     0–20  学员回答四个并列问题（不给任何框架）
//     20–32 老师用自己那个老项目现场暴露一次盲区
//     32    图第一次出现，台词固定：「你们刚才填的东西有名字。」
//   连带铁律：**P00 到 P07 不许出现任何 2×2 布局、四格配色或「象限」二字**，
//   四问不许排成方阵，封面标题是「你以为它知道」而不是课名。
//
// ── 逐页（§11.2）────────────────────────────────
//   第一幕 · 你先做（0–32，不给框架）
//   P00 你以为它知道（封面）        P04 问题二
//   P01 今天的完成标准             P05 问题三 ⚠️ 会卡住，90 秒沉默不救场
//   P02 拿出那个任务               P06 问题四
//   P03 问题一                     P07 这是我写的，它刚告诉我一件我不知道的事 🎬
//
//   第二幕 · 揭示（32–44）
//   P08 你们刚才填的东西有名字 ⭐   P10 前九节全是这张图的推论
//   P09 不是能力问题，是信息分布问题
//
//   第三幕 · 四条搬运动作（44–74）
//   P11 协议不是四个格子（只给三条，第四条留悬念）
//   P12 真正的隐藏区是理由，不是事实   P16 搬运二 · 先让它说
//   P13 打开你自己的 CLAUDE.md 🔥引信  P17 你一开口把答案说了会怎样
//   P14 落在哪一层（给 L11 埋点）      P18 搬运三 · 设计实验
//   P15 搬形状，不搬内容（数据边界）    P19 搬运四 · 开放区会漏回隐藏区 ⭐反转
//                                     P20 全图：三条往里搬，一条往外漏
//                                     P21 分不清算哪一格（止争）
//
//   第四幕 · 落地（74–90）
//   P22 写你自己的开场四问 🎯硬产物   P25 出处：Johari 1955
//   P23 这段话为什么这么组词          P26 第三次说同一段话就该是个 Skill
//   P24 讲评规则：只问哪一格          P27 Exit ticket（当场只收第 7 题）
//
// ── 节奏铁律（§10.1）─────────────────────────────
//   ① 32 分钟前四格图不许以任何形式出现在屏幕上（全课唯一不可协商）
//   ② 前 32 分钟老师连续说话不超过 3 分钟一段
//   ③ 第三问卡住时给足 90 秒沉默，不救场、不举例
//   ④ 退化那条不许提前讲，P13 只埋引信，P19 才点
//   ⑤ 出处放到 86 分钟之后
//   ⑥ 不安排中场休息（本系列的明确例外，为了保护第 32 分钟那次揭示）；
//      真要休息只能放 44 分钟，不许更早
//   ⑦ 时间不足砍：P14 粒度 → P18 三种形态缩成一句 → P10 映射表缩成一句
//      不许砍：四个问题的动手、P07 盲区演示、P19 退化反转、P22 写四问的 10 分钟
//   ⑧ P07 的三级降级（§6.4）不占预算：换模块 → 投第三个模块的预录（**明说是预录**）
//      → 只讲不演，用 P05 举手数当替代证据
//
// ── Deck 性质铁律（§11.1）───────────────────────
//   ① 每页只承担一个教学任务
//   ② 动作页只显示「现在做什么 / 完成判据 / 硬停时间」
//   ③ 骨架给了，**范文不给** —— 给了范文四格就变成填空题
//   ④ 字号下限：正文 26 / 代码 22 / 脚注 16（见 deck.tsx 的 FS）
//   ⑤ 退化循环图的纵向落差本身就是表达，不改写成横向图
//   ⑥ **本节没有标准答案**：每位学员的任务不同，deck 上不许出现
//      任何看起来像「正确答案应该是……」的东西（§19.2）
//   ⑦ 学员的 CLAUDE.md 是个人材料，不许要求投屏或上交内容，只报数字

import L10P00 from './components/slides/L10P00_Cover';
import L10P01 from './components/slides/L10P01_Contract';
import L10P02 from './components/slides/L10P02_BringTask';
import L10P03 from './components/slides/L10P03_Ask1';
import L10P04 from './components/slides/L10P04_Ask2';
import L10P05 from './components/slides/L10P05_Ask3';
import L10P06 from './components/slides/L10P06_Ask4';
import L10P07 from './components/slides/L10P07_TeacherBlindSpot';
import L10P08 from './components/slides/L10P08_ItHasAName';
import L10P09 from './components/slides/L10P09_Thesis';
import L10P10 from './components/slides/L10P10_NineLessons';
import L10P11 from './components/slides/L10P11_MovesNotBoxes';
import L10P12 from './components/slides/L10P12_ReasonsNotFacts';
import L10P13 from './components/slides/L10P13_OpenYourClaudeMd';
import L10P14 from './components/slides/L10P14_WhichAltitude';
import L10P15 from './components/slides/L10P15_WhatNotToMove';
import L10P16 from './components/slides/L10P16_LetItSpeakFirst';
import L10P17 from './components/slides/L10P17_BadVsGood';
import L10P18 from './components/slides/L10P18_DesignAnExperiment';
import L10P19 from './components/slides/L10P19_OpenLeaksBack';
import L10P20 from './components/slides/L10P20_FullMap';
import L10P21 from './components/slides/L10P21_WhenUnsure';
import L10P22 from './components/slides/L10P22_WriteYourFour';
import L10P23 from './components/slides/L10P23_WhyWordedThisWay';
import L10P24 from './components/slides/L10P24_ReviewRule';
import L10P25 from './components/slides/L10P25_Attribution';
import L10P26 from './components/slides/L10P26_MakeItASkill';
import L10P27 from './components/slides/L10P27_ExitTicket';

export default function App() {
	return (
		<SlideEngine>
			{/* ══ 第一幕 · 你先做（0–32 min）· 不给框架 ══════════════ */}

			{/* 开场与完成标准 0–3 —— 第一幕唯一允许「讲」的一段 */}
			<L10P00 />
			<L10P01 />

			{/* 四个问题 3–20 —— 老师只问，问完闭嘴 */}
			<L10P02 />
			<L10P03 />
			<L10P04 />
			<L10P05 />
			{/* ⚠️ P05 之后：90 秒沉默 → 只问「写不出来的举手」→ 记下人数 → 立刻切 P07 */}
			<L10P06 />

			{/* 老师的盲区 20–32 —— 不许提前跑；三级降级见 §6.4 */}
			<L10P07 />

			{/* ══ 第二幕 · 图第一次出现（32–44 min）══════════════════ */}

			{/* 🔴 32 分钟。一秒都不许早。 */}
			<L10P08 />
			<L10P09 />
			<L10P10 />

			{/* ══ 第三幕 · 四条搬运动作（44–74 min）═════════════════ */}

			{/* 过场 44 */}
			<L10P11 />

			{/* 搬运一 · 落盘 44–55（反例 2 + CLAUDE.md 审计 6 + 粒度 3） */}
			<L10P12 />
			<L10P13 />
			<L10P14 />

			{/* 数据边界 55–59 */}
			<L10P15 />

			{/* 搬运二 · 盲区 59–64 */}
			<L10P16 />
			<L10P17 />

			{/* 搬运三 · 未知 64–67 */}
			<L10P18 />

			{/* 🔴 搬运四 · 退化 67–72 —— 反转，前面只埋引信没有点 */}
			<L10P19 />
			<L10P20 />

			{/* 止争 72–74 */}
			<L10P21 />

			{/* ══ 第四幕 · 落地（74–90 min）══════════════════════════ */}

			{/* 动手 74–84 🎯 硬产物 */}
			<L10P22 />
			<L10P23 />

			{/* 讲评 84–87 —— 只问哪一格，不判对错 */}
			<L10P24 />

			{/* 出处 87–88 —— 现在才说 */}
			<L10P25 />

			{/* 收口 + 作业 + Exit 88–90 */}
			<L10P26 />
			<L10P27 />
		</SlideEngine>
	);
}
