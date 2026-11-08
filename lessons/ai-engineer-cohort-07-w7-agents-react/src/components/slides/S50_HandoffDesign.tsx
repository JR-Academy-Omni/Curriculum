import { Code, Cols, Mono, Page, Say, Tbl } from './_parts';

export default function S50_HandoffDesign() {
	return (
		<Page part="第 7 部分" at={["handoff.py · Handoff"]} title="一张交接单，八个字段">
		  <Cols n={2} style={{ gridTemplateColumns: '1fr 1.3fr' }}>
		  <Tbl size={17} widths="150px 1fr" head={['字段', '回答的问题']} rows={[
		    [<Mono>reason_code</Mono>, '为什么停？如 retries_exhausted、approval_denied'],
		    [<Mono>case</Mono>, '哪个客户，哪张订单'],
		    [<Mono>context</Mono>, '客户要什么，系统里查到了什么事实'],
		    [<Mono>done</Mono>, '做了什么，真实结果是什么'],
		    [<Mono>not_done</Mono>, '还有什么没做'],
		    [<Mono>side_effects</Mono>, '每个写操作：completed、not_attempted、unknown'],
		    [<Mono>next_step</Mono>, '需要你决定的具体事情'],
		    [<Mono>trace_id</Mono>, '想看细节，去哪找'],
		  ]} />
		  <Code file="demo/handoff.py" size={15} code={"def gather_context(request: str, trace: Trace) -> dict:\n    \"\"\"背景：客户要什么，加上运行记录里查到的事实。\"\"\"\n    facts = {}\n    for step in trace.steps:\n        observation = step[\"observation\"]\n        if isinstance(observation, dict) and observation.get(\"status\") == \"ok\":\n            data = observation.get(\"data\") or {}\n            facts.update({key: data[key] for key in FACT_FIELDS if key in data})\n    return {\"request\": request, \"facts\": facts}"} />
		  </Cols>
		  <Say>交接单由代码从运行记录生成，事实不是模型写的。模型摘要可选，且标明“非事实”。</Say>
		</Page>
	);
}
