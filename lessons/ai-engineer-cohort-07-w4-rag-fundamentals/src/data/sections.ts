// 目录：全课八个部分（2026-10-19 讲师要求加目录，每部分开始前回到目录）。灰字是接 W2 / W3 的地方。
export interface Section { n: number; part: string; zh: string; q: string; back?: string }

export const sections: Section[] = [
	{ n: 1, part: 'frame', zh: '开场', q: '它们各在哪一层；复习上节课' },
	{ n: 2, part: 'position', zh: '定位', q: '知识这一格，怎么填', back: 'W3：五样东西各管一件事' },
	{ n: 3, part: 'offline', zh: '离线', q: '资料怎么变成索引', back: 'W2：chunk 按 token 计' },
	{ n: 4, part: 'online', zh: '在线', q: '按问题，找哪几块', back: 'W2：top-k × chunk = 预算' },
	{ n: 5, part: 'answer', zh: '组装作答', q: '怎么答、怎么引用', back: 'W3：组装顺序与分隔' },
	{ n: 6, part: 'fallback', zh: '兜底', q: '找不到、找错了怎么办', back: 'W3：冲突内容污染上下文' },
	{ n: 7, part: 'debug', zh: '排错', q: '答错了，错在哪层', back: 'W2：预算截断' },
	{ n: 8, part: 'wrap', zh: '后续地图', q: '每个工具修哪一层' },
];
