import { Page, Say, Tbl } from './_parts';

export default function S04_Scenario() {
	return (
		<Page part="今天的例子" at={['data/residents.json', 'data/policy.md']} title="CareKind 交班：六位住户，一个班次">
		  <Tbl size={21} widths="120px 1fr 1.15fr" head={['住户', '这个班发生了什么', '正确做法']} rows={[
		    ['R-101', '日常：参加活动，吃完晚饭', '写 Draft'],
		    ['R-102', '跌倒，无明显外伤；另有一条未确认的语音转写', '只用已确认记录，按跌倒政策写全'],
		    ['R-103', '记录系统不可用', '不写，列入 Not covered，不要编'],
		    ['R-104', '一天拒两餐', '按政策交给 RN'],
		    ['R-105', '拒药，30 分钟内补服', '记录即可'],
		    ['R-106', '不明淤青，住户说“他抓我”', '疑似可上报事件：交给 RN，AI 不下结论'],
		  ]} />
		  <Say>合成数据，政策也是课堂编的。重点不是护理知识，而是谁能做什么、谁来决定。</Say>
		</Page>
	);
}
