import { colors } from '../ui';
import { Page, Say, Tbl } from './_parts';

export default function S37_Synthesis() {
	return (
		<Page part="第 6 部分" at={['prompts.py · SHIFT_LEAD']} title="汇总不是拼接">
		  <Tbl size={22} widths="300px 1fr" head={['情况', '汇总规则']} rows={[
		    ['每位住户的回报', '一行：住户 | Draft | 政策检查 | 是否交给 RN'],
		    ['检查员报 ISSUE', '保留原 Draft，问题和条款一起交给 RN'],
		    ['疑似可上报事件', '只能交给 RN，不写结论'],
		    ['重复、矛盾、缺回报', '这些是失败，第 7 部分一起讲'],
		  ]} />
		  <Say bg={colors.yellow}>交班表上的每一行都要能追回到一条记录或一次工具调用。</Say>
		</Page>
	);
}
