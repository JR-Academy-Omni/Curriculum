/**
 * 13 张海报（+ 开场 + CTA）= 完整 60s 竖版短片剧本
 *
 * image 文件名必须匹配 mp-article 页「批量下载」的输出：
 *   `mp-ai-engineer-{NN}-{posterSlug}.png`
 * 把下载到的 13 张 PNG 直接放到 src/assets/images/ 即可。
 *
 * 每个 scene 的 duration 用「帧数」（30fps）：
 *   durationInFrames: 120 → 4 秒
 *   durationInFrames: 150 → 5 秒
 *   durationInFrames: 180 → 6 秒
 */

export interface IScene {
	key: string;
	image: string; // filename inside src/assets/images/
	caption: string; // top-line golden sentence
	subCaption?: string; // optional 2nd line
	durationInFrames: number;
	accentColor?: string; // highlight tint (hex)
}

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

/** Cover: 3s intro */
export const COVER_DURATION = 165;

/** CTA closing: 6s */
export const CTA_DURATION = 180;

export const scenes: IScene[] = [
	{
		key: 'gap',
		image: 'mp-ai-engineer-01-p2-painpoint.png',
		caption: '2026 AI 工程师的岗位基线',
		subCaption: '已经整体右移了',
		durationInFrames: 198,
		accentColor: '#ff5757',
	},
	{
		key: 'chatroom',
		image: 'mp-ai-engineer-02-p3-conversation.png',
		caption: '同事群聊 GraphRAG / Eval',
		subCaption: '你能接上话吗？',
		durationInFrames: 157,
		accentColor: '#ffce44',
	},
	{
		key: 'outcomes',
		image: 'mp-ai-engineer-03-p4-outcomes.png',
		caption: '12 周真会四件事',
		subCaption: 'RAG · Agent · Multi-Agent · Fine-Tune',
		durationInFrames: 212,
		accentColor: '#3b82f6',
	},
	{
		key: 'structure',
		image: 'mp-ai-engineer-04-p5-roadmap.png',
		caption: '10 个 Phase 全景',
		subCaption: 'Agent 独占 5 个 Phase',
		durationInFrames: 235,
		accentColor: '#8b5cf6',
	},
	{
		key: 'stack',
		image: 'mp-ai-engineer-05-p6-stack.png',
		caption: '15+ 2026 真实工具栈',
		subCaption: '每个都配独立 Lab',
		durationInFrames: 158,
		accentColor: '#10b981',
	},
	{
		key: 'rag',
		image: 'mp-ai-engineer-06-p12-rag.png',
		caption: 'RAG 45 节 · 不是跑 Demo',
		subCaption: '向量 + GraphRAG + Eval 全链路',
		durationInFrames: 210,
		accentColor: '#ff5757',
	},
	{
		key: 'agent',
		image: 'mp-ai-engineer-07-p13-agent.png',
		caption: 'Agent 拆成 5 个 Phase',
		subCaption: 'Memory + Harness 市面独家',
		durationInFrames: 155,
		accentColor: '#8b5cf6',
	},
	{
		key: 'labs',
		image: 'mp-ai-engineer-08-p15-labs.png',
		caption: '68 个浏览器互动 Lab',
		subCaption: '每个都是独立 Lesson',
		durationInFrames: 190,
		accentColor: '#3b82f6',
	},
	{
		key: 'projects',
		image: 'mp-ai-engineer-09-p17-projects.png',
		caption: '7 个能写简历的项目',
		subCaption: '不是 Notebook Demo',
		durationInFrames: 129,
		accentColor: '#ffce44',
	},
	{
		key: 'timeline',
		image: 'mp-ai-engineer-10-p16-timeline.png',
		caption: '12 周 + 12 周 P3 孵化',
		subCaption: '陪到拿 Offer',
		durationInFrames: 231,
		accentColor: '#10b981',
	},
	{
		key: 'feedback',
		image: 'mp-ai-engineer-11-p7-feedback.png',
		caption: '学员反馈都很日常',
		subCaption: '没有夸张数字',
		durationInFrames: 170,
		accentColor: '#ff5757',
	},
	{
		key: 'package',
		image: 'mp-ai-engineer-12-p8-format.png',
		caption: '183 课 · 68 Lab · 7 项目',
		subCaption: 'Meta / MS / Amazon 导师',
		durationInFrames: 219,
		accentColor: '#3b82f6',
	},
	{
		key: 'cta',
		image: 'mp-ai-engineer-13-p9-cta.png',
		caption: '主页搜「匠人 AI · AI Engineer」',
		subCaption: '先看大纲再决定',
		durationInFrames: 207,
		accentColor: '#ff5757',
	},
];

/** 总帧数：cover + 13 scenes（CTA 已在 scenes 最后一条） */
export const TOTAL_FRAMES =
	COVER_DURATION + scenes.reduce((sum, s) => sum + s.durationInFrames, 0);

/** 转换到秒 */
export const totalDurationSeconds = TOTAL_FRAMES / FPS;
