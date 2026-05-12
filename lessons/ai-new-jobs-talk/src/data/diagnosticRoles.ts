// 9 个角色 —— 摘自 /career-impact-map/diagnostic 的 ROLES 配置
// 插画来自 jr-academy-web-zh/public/images/career-impact-diagnostic/result-{key}.png

export interface DiagnosticRole {
	key: string;
	emoji: string;
	displayName: string;
	englishName: string;
	tagline: string;       // 一句话身份定位
	punchline: string;     // 朋友圈传播金句
	color: string;         // 卡片配色
	imagePath: string;     // public/ 下的相对路径
}

export const DIAGNOSTIC_ROLES: DiagnosticRole[] = [
	{
		key: 'ai-wizard',
		emoji: '🧙',
		displayName: 'AI 巫师',
		englishName: 'The AI Wizard',
		tagline: '把 AI 当延伸器官 —— 团队找你不是写代码，是问"该不该用 AI 做"。',
		punchline: '把 Cursor 当延伸器官的人，赢了一半。',
		color: '#8b5cf6',
		imagePath: 'images/diagnostic/result-ai-wizard.png',
	},
	{
		key: 'creative-augmenter',
		emoji: '✨',
		displayName: '创意外挂玩家',
		englishName: 'The Creative Augmenter',
		tagline: 'AI 没让你掉队，反而让你产出乘以 5。',
		punchline: '你的护城河是品味，不是工具。',
		color: '#ec4899',
		imagePath: 'images/diagnostic/result-creative-augmenter.png',
	},
	{
		key: 'cross-domain-translator',
		emoji: '🎯',
		displayName: '跨界翻译官',
		englishName: 'The Cross-Domain Translator',
		tagline: 'AI 时代最稀缺的不是技术深度 —— 是把技术翻译成业务语言的人。',
		punchline: '你才是 AI 落地最后一公里的关键。',
		color: '#06b6d4',
		imagePath: 'images/diagnostic/result-cross-domain-translator.png',
	},
	{
		key: 'wave-rider',
		emoji: '🌊',
		displayName: '转身浪潮玩家',
		englishName: 'The Wave Rider',
		tagline: '你已经在转，方向是对的，缺的不是认知是执行节奏。',
		punchline: '方向对了，就剩别再刷手机这一步了。',
		color: '#3b82f6',
		imagePath: 'images/diagnostic/result-wave-rider.png',
	},
	{
		key: 'mid-mountain-climber',
		emoji: '🧗',
		displayName: '半山腰登山者',
		englishName: 'The Mid-Mountain Climber',
		tagline: '你卡在"工具切换"中间 —— 旧的没扔，新的没用熟。这是最累的位置。',
		punchline: '你不是慢，是脚踩两条船。挑一条跳过去就是了。',
		color: '#f59e0b',
		imagePath: 'images/diagnostic/result-mid-mountain-climber.png',
	},
	{
		key: 'still-life-vip',
		emoji: '🛋',
		displayName: '岁月静好体验官',
		englishName: 'The Still-Life VIP',
		tagline: '岗位短期 AI 风险低 —— 但别误以为这是终极安全。',
		punchline: '现在的舒服，是给未来自己埋的盲盒。',
		color: '#10b981',
		imagePath: 'images/diagnostic/result-still-life-vip.png',
	},
	{
		key: 'half-beat-observer',
		emoji: '🐢',
		displayName: '慢半拍观察员',
		englishName: 'The Half-Beat Observer',
		tagline: '你在观望，等更明确的信号。但等信号明确就晚了。',
		punchline: '你不是不焦虑，是焦虑没变成行动。',
		color: '#64748b',
		imagePath: 'images/diagnostic/result-half-beat-observer.png',
	},
	{
		key: 'sleeping-seed',
		emoji: '🌱',
		displayName: '沉睡的种子',
		englishName: 'The Sleeping Seed',
		tagline: '岗位被优先重塑 —— 但这意味着你处在最大的窗口期，不是最大的风险。',
		punchline: '你不是来不及，是还没打开开关。',
		color: '#7ED957',
		imagePath: 'images/diagnostic/result-sleeping-seed.png',
	},
	{
		key: 'old-map-holder',
		emoji: '🗺️',
		displayName: '老地图持卡人',
		englishName: 'The Map Holder',
		tagline: '用过去 5-10 年的能力打未来 5 年的仗 —— 经验是真的，但地图升级了。',
		punchline: '你的本事是真的，只是地图换了版本号。',
		color: '#FF914D',
		imagePath: 'images/diagnostic/result-old-map-holder.png',
	},
];
