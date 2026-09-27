// 薪资参考 —— 数字全部来自带出处的材料，不做推算：
// · 澳洲 AI Engineer、全球 Total Compensation：抄自讲者提供的两页既有课程 slide（含其来源标注）。
// · 澳洲 FDE：Re:Sourced《What Is a Forward Deployed Engineer? (2026 Guide)》，2026-07-07 发布，
//   口径为 2026 年已接受 offer 的 base、25–75 分位。https://www.resourced.com.au/articles/what-is-a-forward-deployed-engineer
//   该文只给了 Senior 与（仅 Sydney 的）Tech lead 两档，没有 mid / principal，故这里也不写。

export interface AuAiEngineerBand {
	tag: string;
	low: number; // 单位 K AUD
	high?: number;
	caption: string;
	color: 'blue' | 'green' | 'red';
}

export const AU_AI_ENGINEER = {
	headline: '中高级 AI Engineer，市场已经在 A$160K–300K+',
	sub: '这不是应届生统一起薪。薪资取决于经验、城市、行业、AI 深度，以及你能不能交付 Production 系统。',
	bands: [
		{ tag: 'AI ENGINEER · 全国参考', low: 165, caption: '2026 平均 base 参考', color: 'blue' },
		{ tag: '高经验 / 稀缺能力', low: 220, caption: '2026 高位 base 参考', color: 'green' },
		{ tag: 'SENIOR · 悉尼', low: 220, high: 340, caption: 'Senior AI Engineer base 参考', color: 'red' },
	] as AuAiEngineerBand[],
	source: 'Pearson Carter Data & AI Salary Guide 2026；Re:Sourced Sydney Salary Guide 2026',
};

export interface FdeBand {
	city: string;
	level: string;
	low: number; // K AUD, base
	high: number;
}

export const AU_FDE = {
	headline: 'FDE：Senior base A$160K–240K，Sydney tech lead 到 A$270K',
	bands: [
		{ city: 'Sydney', level: 'Tech lead', low: 230, high: 270 },
		{ city: 'Sydney', level: 'Senior', low: 180, high: 240 },
		{ city: 'Melbourne', level: 'Senior', low: 175, high: 230 },
		{ city: 'Brisbane', level: 'Senior', low: 160, high: 215 },
	] as FdeBand[],
	axis: { min: 140, max: 300, ticks: [160, 200, 240, 280] },
	source: 'Re:Sourced《What Is a Forward Deployed Engineer? (2026 Guide)》· 2026-07-07 · 已接受 offer 的 base，25–75 分位',
};

export const SALARY_DISCLAIMER = '市场区间 ≠ 学员薪资承诺';

export interface GlobalComp {
	flag: string;
	country: string;
	currency: string;
	value: number; // 单位 K，本币
	range: string;
	color: 'blue' | 'green' | 'yellow' | 'purple' | 'red' | 'orange';
	home?: boolean;
}

export const GLOBAL_AI_ENGINEER = {
	kicker: 'GLOBAL MARKET · 2026',
	headline: 'AI Engineer 的机会，不只在澳洲',
	sub: '以下沿用课程现有市场页的 Total Compensation 参考。不同国家、级别和公司股权结构不能直接横比。',
	items: [
		{ flag: '🇺🇸', country: '美国', currency: 'USD', value: 280, range: '180K–600K+', color: 'blue' },
		{ flag: '🇸🇬', country: '新加坡', currency: 'SGD', value: 180, range: '130K–280K', color: 'green' },
		{ flag: '🇦🇺', country: '澳洲', currency: 'AUD', value: 175, range: '145K–240K', color: 'yellow', home: true },
		{ flag: '🇬🇧', country: '英国', currency: 'GBP', value: 125, range: '90K–200K', color: 'purple' },
		{ flag: '🇨🇳', country: '中国大厂', currency: 'CNY', value: 800, range: '550K–1.5M', color: 'red' },
		{ flag: '🇲🇾', country: '马来西亚', currency: 'MYR', value: 140, range: '105K–240K', color: 'orange' },
	] as GlobalComp[],
	noteTitle: '先看口径，再看数字',
	note: '这是包含 base、bonus 和 equity 的市场参考，不是新人统一起薪，也不是课程结果承诺。上一页单独看的是澳洲 base salary。',
	source: '现有课程页来源篮子：Levels.fyi、LinkedIn、SEEK、Glassdoor、拉勾脉脉、JobStreet · 2025 Q4–2026 Q1',
};
