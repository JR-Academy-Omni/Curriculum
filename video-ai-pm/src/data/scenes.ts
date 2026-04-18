import { staticFile } from 'remotion';

export interface IScene {
	key: string;
	image: string;
	caption: string;
	subCaption?: string;
	durationInFrames: number;
	accentColor?: string;
}

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const COVER_DURATION = Math.ceil(6.36 * FPS); 

export const scenes: IScene[] = [
	{
		key: 'trend',
		image: 'mp-ai-pm-p2-trend.png',
		caption: '不仅仅是会提问',
		subCaption: '更要做 AI 商业价值的操盘手',
		durationInFrames: Math.ceil(7.97 * FPS),
		accentColor: '#8b5cf6',
	},
	{
		key: 'gap',
		image: 'mp-ai-pm-p1-cover.png',
		caption: '懂 AI PRD，更懂评估幻觉',
		subCaption: '在成本与用户体验间找到平衡',
		durationInFrames: Math.ceil(8.14 * FPS),
		accentColor: '#ff5757',
	},
	{
		key: 'outcomes',
		image: 'mp-ai-pm-p3-outcomes.png',
		caption: '从业务思维转向 AI 架构',
		subCaption: '涵盖自动化设计与商业化落地',
		durationInFrames: Math.ceil(8.90 * FPS),
		accentColor: '#3b82f6',
	},
	{
		key: 'p3',
		image: 'mp-ai-pm-p4-p3-internship.png',
		caption: '担任 Product Owner',
		subCaption: '带领开发团队交付真实上线产品',
		durationInFrames: Math.ceil(8.28 * FPS),
		accentColor: '#10b981',
	},
	{
		key: 'package',
		image: 'mp-ai-pm-p5-package.png',
		caption: '主页搜「匠人 AI」',
		subCaption: '开启 2026 职场新篇章',
		durationInFrames: Math.ceil(6.67 * FPS),
		accentColor: '#ffce44',
	},
];

export const TOTAL_FRAMES =
	COVER_DURATION + scenes.reduce((sum, s) => sum + s.durationInFrames, 0);

export const totalDurationSeconds = TOTAL_FRAMES / FPS;
