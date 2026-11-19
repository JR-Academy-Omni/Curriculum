import { Code, Page, Say } from './_parts';

export default function S25_RosterCode() {
	return (
		<Page part="第 4 部分 · Managed Agents" at={['setup_agents.py · create_all()']} title="协调者的配置：派给谁、不准做什么">
		  <Code file="w8/setup_agents.py" size={18} code={`lead = client.beta.agents.create(
    name="Shift lead", model="claude-sonnet-5-5",
    system=prompts.SHIFT_LEAD, tools=ck.tools_for("Shift lead"),  # 只有 flag_for_rn_review
    multiagent={
        "type": "multiagent_20261001",
        "subagents": {
            "type": "enabled",
            "predefined_agents": [
                {"type": "agent", "id": drafter.id, "version": drafter.version},  # 固定版本
                {"type": "agent", "id": checker.id, "version": checker.version},
            ],
            "inline_agents": {"type": "disabled"},   # 不许临时造 Agent
        },
        "workflows": {"type": "disabled"},           # 不开 dynamic workflow
        "advisor": {"type": "enabled", "model": "claude-opus-5-5"},
    },
)`} />
		  <Say>Agent 创建一次，存 ID。每次运行只引用 ID 和版本，不在请求路径里重复创建。</Say>
		</Page>
	);
}
