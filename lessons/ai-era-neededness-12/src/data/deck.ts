export type Accent = 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'orange';

export type SlideLayout =
	| 'cover'
	| 'question'
	| 'skills'
	| 'statement'
	| 'ladder'
	| 'persona'
	| 'race'
	| 'translate'
	| 'resume'
	| 'loop'
	| 'beforeAfter'
	| 'portfolio'
	| 'process'
	| 'case'
	| 'toolkit'
	| 'origin'
	| 'product'
	| 'mirror'
	| 'system'
	| 'wheel'
	| 'shift'
	| 'evidence'
	| 'advice'
	| 'verdict'
	| 'closing';

export interface LinkItem {
	label: string;
	url: string;
	meta: string;
	qr: string;
}

export interface DeckSlideContent {
	number: number;
	section: string;
	eyebrow: string;
	title: string;
	subtitle?: string;
	layout: SlideLayout;
	accent: Accent;
	big?: string;
	items?: string[];
	steps?: string[];
	left?: string[];
	right?: string[];
	quote?: string;
	note?: string;
	action?: string;
	links?: LinkItem[];
}

// 观点型演讲：内容来自用户提供的大纲，不引入外部统计或案例数据。
export const deck: DeckSlideContent[] = [
	{
		number: 1,
		section: 'OPENING',
		eyebrow: 'JR ACADEMY · FUTURE LAB',
		title: 'AI 时代，学生真正要找的不是工作，而是“可被需要性”',
		subtitle: '当 AI 会写、会查、会生成，你如何证明自己仍然值得被需要？',
		layout: 'cover',
		accent: 'yellow',
	},
	{
		number: 2,
		section: 'THE REAL QUESTION',
		eyebrow: '今天真正的问题',
		title: '真正的问题不是“我能不能找到工作”',
		subtitle: '而是：AI 这么强，年轻人到底还凭什么被需要？',
		layout: 'question',
		accent: 'red',
		items: ['简历', '面试', '价值'],
		big: '我还有什么价值？',
	},
	{
		number: 3,
		section: 'VALUE REPRICED',
		eyebrow: '价值正在上移',
		title: '技能依然重要，但技能必须进入真实问题',
		subtitle: '未来更有价值的，不只是会做事，而是知道什么事值得做。',
		layout: 'ladder',
		accent: 'green',
		steps: ['Question Mark', 'Skills', 'Problems Solved'],
		note: '从“我会什么”，走向“我解决了什么”。',
	},
	{
		number: 4,
		section: 'TWO STUDENTS',
		eyebrow: 'TASK-BASED STUDENT',
		title: '第一种学生：任务型学生',
		subtitle: '等待任务、标准答案、老师、JD，以及别人定义成功。',
		layout: 'race',
		accent: 'orange',
		left: ['等老师', '等 JD', '等答案'],
		right: ['明确任务', '高速完成', '稳定输出'],
		note: 'AI 最擅长完成明确任务。所以，不要把自己训练成 AI 最容易替代的人。',
	},
	{
		number: 5,
		section: 'TWO STUDENTS',
		eyebrow: 'PROBLEM-BASED STUDENT',
		title: '第二种学生：问题型学生',
		subtitle: '不等待题目，而是主动进入真实问题。',
		layout: 'process',
		accent: 'green',
		steps: ['发现问题', 'Research', 'AI 验证', 'Judgment', 'Action'],
		note: 'AI 不是替我完成任务。AI 帮助我进入真实问题。',
	},
	{
		number: 6,
		section: 'VALUE TRANSLATION',
		eyebrow: 'YOUR EXPERIENCE IS NOT YOUR VALUE',
		title: '很多学生不是没有经历，而是不会翻译自己的价值',
		subtitle: '课程、实习、兼职、Volunteer、社团、比赛，不会自动变成价值。',
		layout: 'translate',
		accent: 'blue',
		left: ['课程', '实习', '兼职', 'Volunteer', '社团', '比赛'],
		right: ['问题：发生了什么？', '判断：我看见了什么？', '行动：我做了什么？', '结果：改变了什么？', '证据：如何验证？'],
		note: '不要只写 “Participated in…”；要说清楚：我解决了什么问题？',
	},
	{
		number: 7,
		section: 'PROBLEM PORTFOLIO',
		eyebrow: '不要只做简历',
		title: '开始建立 Problem Portfolio',
		subtitle: '展示的不是“我做过什么”，而是“我是怎么思考问题的”。',
		layout: 'process',
		accent: 'yellow',
		steps: ['问题', '分析', 'AI 辅助', '判断', '行动', '反馈', '改进'],
		note: '未来，别人越来越想看你的思考过程。',
	},
	{
		number: 8,
		section: 'AI WORKFLOW',
		eyebrow: 'HOW TO USE AI',
		title: 'AI 真正应该怎么用？',
		subtitle: '不是“AI 帮我写”，而是让 AI 帮我更快进入理解、验证和实验。',
		layout: 'toolkit',
		accent: 'purple',
		items: ['帮我理解', '帮我验证', '帮我实验', '帮我表达'],
		note: 'AI 不会替你成长。它只会放大你已经拥有的东西。',
	},
	{
		number: 9,
		section: 'VDAR.AI',
		eyebrow: 'WHY I BUILT VDAR.AI',
		title: '世界不缺 Resume Generator',
		subtitle: '真正缺的是：帮助年轻人看懂岗位、看懂自己、看见差距与机会。',
		layout: 'product',
		accent: 'red',
		steps: ['岗位', '自己', '差距', '机会'],
		items: ['Resume', 'Cover Letter', 'Recruiter Message'],
		note: 'Vdar.ai 不是制造更多漂亮话，而是帮助年轻人找到表达方式。',
	},
	{
		number: 10,
		section: 'OPPORTUNITY SYSTEM',
		eyebrow: '真正的求职不是海投',
		title: '建立自己的 Opportunity System',
		subtitle: '不要等机会出现。开始建立一个能够持续产生机会的系统。',
		layout: 'wheel',
		accent: 'blue',
		big: 'Opportunity\nSystem',
		items: [
			'方向：Direction',
			'市场：Market',
			'作品：Evidence',
			'AI 工作流：AI Workflow',
			'反馈：Feedback',
		],
	},
	{
		number: 11,
		section: 'TAKE ACTION',
		eyebrow: 'THREE ACTIONS',
		title: '今天开始做三件事',
		subtitle: '不需要等到毕业，也不需要一开始就很强。',
		layout: 'process',
		accent: 'orange',
		steps: ['写：解决过什么问题', '做：Problem Portfolio', '建：自己的机会系统'],
		note: '不要只证明“我会什么”；开始留下“我解决过什么”的证据。',
	},
	{
		number: 12,
		section: 'CLOSING',
		eyebrow: 'FINAL THOUGHT',
		title: 'AI 时代，未来不是不需要年轻人',
		subtitle: '未来只是不再自动需要一个只会等待任务的人。',
		layout: 'closing',
		accent: 'red',
		note: '真正有价值的人，会带着 AI 进入真实问题：会判断、会行动、会承担责任。',
		quote: '不要努力证明自己会完成任务。努力证明自己值得被需要。',
		links: [
			{ label: 'FUTURE LAB', url: 'https://www.scopedar.com/', meta: 'Scopedar.com', qr: 'scopedar-qr.png' },
			{ label: 'AI JOB SEARCH', url: 'https://vdar.ai/', meta: 'Vdar.ai', qr: 'vdar-qr.png' },
			{ label: 'CONNECT', url: 'https://www.linkedin.com/in/jason-bi-373621266/', meta: 'Jason Bi · LinkedIn', qr: 'jason-bi-linkedin-qr.png' },
		],
	},
];
