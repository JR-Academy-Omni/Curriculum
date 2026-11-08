import { Code, Mono, Page, Say, Tbl } from './_parts';

export default function S44_ThreeTools() {
	return (
		<Page part="第 7 部分" at={["sdk_common.py · options()", "agent.py · make_gate()", "agent.py · agent_options()"]} title="三样工具，粒度不同">
		  <Tbl size={22} widths="220px 1fr 1fr" head={['', '判断什么', '例子']} rows={[
		    ['Permission mode', '整个工具默认怎么处理', <><Mono>dontAsk</Mono>：没批准的工具一律拒绝</>],
		    ['Hook', '这一次调用，看参数做判断', '金额超过 500 就暂停'],
		    ['人工审批', '需要人来判断的事', '主管同意或拒绝这笔退款'],
		  ]} />
		  <Code file="demo/agent.py" size={16} code={"# timeout：默认 60 秒，人来审批要留够时间\n# on_failure：默认 hook 出错算“没意见”，调用会继续；审批 hook 必须 fail closed\nhooks = {\"PreToolUse\": [HookMatcher(matcher=\"mcp__refund__.*\", hooks=[gate], timeout=600, on_failure=\"block\")]}"} />
		  <Say>hook 也要 fail closed：SDK 默认 hook 出错算“没意见”，调用会继续。审批 hook 要设 on_failure="block"。</Say>
		</Page>
	);
}
