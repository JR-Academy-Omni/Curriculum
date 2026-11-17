import { colors } from '../ui';
import { Page, Say, Tbl } from './_parts';

export default function S37_Synthesis() {
	return (
		<Page part="第 6 部分" title="汇总不是拼接">
		  <Tbl size={22} widths="300px 1fr" head={['情况', '汇总规则']} rows={[
		    ['同一位住户两份回报', '去重；后台幂等键保证只有一份 Draft'],
		    ['两份回报说法不一致', '不要悄悄选一个：写进交班，交给 RN'],
		    ['有住户没有回报', '列进 Not covered，写明原因'],
		    ['检查员报 ISSUE', '保留原 Draft，问题和条款一起交给 RN'],
		    ['疑似可上报事件', '只能交给 RN，不写结论'],
		  ]} />
		  <Say bg={colors.yellow}>交班表上的每一行都要能追回到一条记录或一次工具调用。</Say>
		</Page>
	);
}
