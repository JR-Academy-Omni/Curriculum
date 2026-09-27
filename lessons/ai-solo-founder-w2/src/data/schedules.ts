import type { ScheduleSpec } from '../components/ScheduleCase';

/**
 * W2 现场配的五条 Agent Schedule。
 *
 * 数据来源：ai-solo-founder-bootcamp/public/outline.json → W2 现场课 step ④ / ⑤ 的原文描述。
 * 缺失策略：只写触发时间、数据源名称与交付物规格；**不写任何工具价格、订阅档位、第三方公开数据**
 * （repo 内没有可引的定价真相源，见 PRD §5）。cron 表达式为按触发时间直接换算，可现场验证。
 */
export const SCHEDULES: Record<'competitor' | 'seo' | 'finance', ScheduleSpec> = {
	competitor: {
		no: '案例 ①',
		title: '竞品监控：每天早上告诉你对手动了什么',
		oneLine: '最容易配通、最快看到价值的一条，建议所有人第一条就配它。',
		cron: '0 7 * * *',
		cronHuman: '每天 07:00',
		trigger: '每天 07:00 自动跑，你还没起床它就跑完了',
		input: '你 SoT 里那几家竞品的定价页地址 + 上一次抓到的快照',
		process: '抓当前页面，和上一次快照对比，只留下真正变了的部分',
		deliverable: '一封 200 字以内的邮件：变了什么、变成了什么、原始链接',
		destination: '你的工作邮箱，主题前缀固定，方便一眼筛出来',
		gotcha: '第一次跑没有快照可比，会输出「全是新的」。先手动跑一次建立基线，再开排程。',
		tagBg: '#FF914D',
	},
	seo: {
		no: '案例 ②',
		title: 'SEO 周报：每周一告诉你哪些词在掉',
		oneLine: '这条要等你的站上线才有数据，但配置现在就能写好放着。',
		cron: '0 9 * * 1',
		cronHuman: '每周一 09:00',
		trigger: '每周一 09:00，正好赶在你安排这周内容之前',
		input: '搜索后台的接口数据（上周 vs 前一周），按 query 和排名两个维度拉',
		process: '找流量掉得最多的 query 和排名突变的词，只保留有异常的',
		deliverable: '一份 200 字周报：掉了哪几个词、掉了多少、可能的原因、建议动作',
		destination: '和竞品监控发到同一个邮箱，周一早上一次看完',
		gotcha: '站还没上线的人这周先别配，写好 JD 放着——空数据跑出来的周报会让你以为排程坏了。',
		tagBg: '#38B6FF',
	},
	finance: {
		no: '案例 ③',
		title: '财务月报：每月 1 号把钱的事摆平',
		oneLine: '这条今天配好，等你 W7 收到第一笔钱的时候它已经在跑了。',
		cron: '0 8 1 * *',
		cronHuman: '每月 1 日 08:00',
		trigger: '每月 1 号 08:00，月初第一件事',
		input: '收款平台与记账软件的接口数据（上个自然月）',
		process: '算出经常性收入、流失、以及要留的税金准备金；只做汇总不做判断',
		deliverable: '一份月报：四个数字 + 与上月的差 + 需要你确认的异常项',
		destination: '推到你手机的 IM，同时把明细存进云盘归档',
		gotcha: '税务口径不要让 agent 替你决定。它只负责把数字汇总出来，怎么算、留多少，问你的会计师。',
		tagBg: '#7ED957',
	},
};
