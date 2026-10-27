// 目录：全课七个部分，每部分开始前回到目录。灰字是接前几节课的地方。
export interface Section { n: number; part: string; zh: string; q: string; back?: string }

export const sections: Section[] = [
	{ n: 1, part: 'frame', zh: '开场', q: '走到哪了；四道测试' },
	{ n: 2, part: 'failure', zh: '四类失败', q: '错，分哪几类', back: 'W4：先判断错在哪层' },
	{ n: 3, part: 'golden', zh: 'Golden case', q: '一道考题怎么写' },
	{ n: 4, part: 'report', zh: '读报告', q: '一个分数怎么读', back: 'W4：recall@k 与 faithfulness' },
	{ n: 5, part: 'experiment', zh: '单变量实验', q: '怎么证明是这个改动的功劳' },
	{ n: 6, part: 'knob', zh: '五个旋钮', q: '每个旋钮修什么、代价是什么', back: 'W2：top-k 是预算' },
	{ n: 7, part: 'wrap', zh: '后续地图', q: '下周接什么' },
];
