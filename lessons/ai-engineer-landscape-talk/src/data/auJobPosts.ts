// 墨尔本在招的 AI 相关岗位举例 —— 逐条抄自讲者提供的 LinkedIn 职位搜索截图（2026-09）。
// posted 是截图当时的相对时间；mode 截图里没写就 omit。family 是讲者视角的归类，用于和后面的 JD 分析页衔接。

export type JobFamily = 'ai-ml' | 'swe-ai' | 'client';

export interface JobPost {
	title: string;
	company: string;
	logo: string; // public/ 下的路径
	location: string;
	mode?: 'Hybrid' | 'On-site';
	posted?: string;
	family: JobFamily;
}

export const JOB_FAMILIES: { key: JobFamily; label: string; hint: string }[] = [
	{ key: 'ai-ml', label: 'AI / ML Engineer', hint: '→ 下一页：AI Engineer 的 JD 在要什么' },
	{ key: 'swe-ai', label: 'Software Engineer × AI', hint: '软件工程岗，标题里直接写 AI' },
	{ key: 'client', label: 'FDE / Consulting / Architect', hint: '→ 面向客户与业务：FDE 的 JD 在要什么' },
];

export const JOB_POSTS_SOURCE = 'LinkedIn 职位搜索截图 · 墨尔本 · 2026-09；发布时间为截图当时的相对时间';

export const JOB_POSTS: JobPost[] = [
	{ title: 'Mid Level AI Models Engineer', company: 'Heidi', logo: 'logos/heidi-health.png', location: 'Melbourne, VIC', mode: 'Hybrid', posted: '1 week ago', family: 'ai-ml' },
	{ title: 'Senior Applied AI Engineer', company: 'Culture Amp', logo: 'logos/jobs/culture-amp.png', location: 'Melbourne, VIC', mode: 'Hybrid', posted: '2 weeks ago', family: 'ai-ml' },
	{ title: 'Senior AI Fullstack Engineer', company: 'Zip Co', logo: 'logos/jobs/zip.png', location: 'Melbourne, VIC', mode: 'Hybrid', posted: '1 week ago', family: 'swe-ai' },
	{ title: 'Senior Machine Learning Engineer', company: 'Mantel', logo: 'logos/jobs/mantel.png', location: 'Greater Melbourne Area', mode: 'Hybrid', family: 'ai-ml' },
	{ title: 'Senior Engineer, ML Systems (AI Products)', company: 'Xero', logo: 'logos/jobs/xero.png', location: 'Melbourne, VIC', mode: 'Hybrid', posted: '2 days ago', family: 'ai-ml' },
	{ title: 'Senior Software Engineer (AI)', company: 'Future Secure AI', logo: 'logos/future-secure-ai.png', location: 'Melbourne, VIC', mode: 'Hybrid', posted: '15 hours ago', family: 'swe-ai' },
	{ title: 'Forward Deployed Engineer', company: 'FIS', logo: 'logos/jobs/fis.png', location: 'Melbourne, VIC', mode: 'Hybrid', posted: '1 day ago', family: 'client' },
	{ title: 'Senior Engineer - AI Workflows', company: 'Xero', logo: 'logos/jobs/xero.png', location: 'Melbourne, VIC', mode: 'Hybrid', posted: '5 days ago', family: 'swe-ai' },
	{ title: 'Senior Software Engineer, AI Tooling (Information Security)', company: 'Airwallex', logo: 'logos/jobs/airwallex.png', location: 'Melbourne, VIC', mode: 'Hybrid', posted: '15 hours ago', family: 'swe-ai' },
	{ title: 'Lead Software Engineer', company: 'McGraw Hill', logo: 'logos/jobs/mcgraw-hill.png', location: 'West Melbourne, VIC', mode: 'On-site', posted: '4 days ago', family: 'swe-ai' },
	{ title: 'Senior Consultant, AI Engineer', company: 'NAB', logo: 'logos/jobs/nab.png', location: 'Melbourne, VIC', posted: '1 day ago', family: 'client' },
	{ title: 'Business AI Architect', company: 'SAP', logo: 'logos/jobs/sap.png', location: 'Southbank, VIC', mode: 'Hybrid', family: 'client' },
];
