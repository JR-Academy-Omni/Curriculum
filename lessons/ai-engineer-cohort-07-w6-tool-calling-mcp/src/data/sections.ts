// 目录：全课八个部分，每部分开始前回到目录。灰字是接前几节课或后面课的地方。
export interface Section { n: number; part: string; zh: string; q: string; back?: string }

export const sections: Section[] = [
	{ n: 1, part: 'frame', zh: '开场', q: '走到哪了；三道复习题', back: 'W5：RAG Quality' },
	{ n: 2, part: 'basics', zh: '先打基础', q: '这节课要解决什么；八个词' },
	{ n: 3, part: 'calling', zh: 'Tool calling', q: '模型怎么用工具' },
	{ n: 4, part: 'mcp', zh: 'MCP', q: '为什么要一个统一规范' },
	{ n: 5, part: 'fastmcp', zh: 'FastMCP', q: '写一个只读的后台部门' },
	{ n: 6, part: 'cli', zh: '接进 CLI', q: '怎么启动、为什么接不上' },
	{ n: 7, part: 'safety', zh: '安全与真实结果', q: '四道闸；模拟就说模拟', back: 'W10：harness 要用' },
	{ n: 8, part: 'wrap', zh: '边界与后续', q: 'Pi 的三层；下周接什么', back: 'W7：agent loop' },
];
