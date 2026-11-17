import { Code, Page, Say } from './_parts';

export default function S23_SdkSubagents() {
	return (
		<Page part="第 4 部分 · Agent SDK" title="SDK 里，子 Agent 是一段配置">
		  <Code file="示意：Claude Agent SDK（Python）" size={17} code={`from claude_agent_sdk import AgentDefinition, ClaudeAgentOptions

options = ClaudeAgentOptions(
    system_prompt=SHIFT_LEAD,
    agents={
        "note-drafter": AgentDefinition(
            description="Writes ONE progress note Draft for ONE resident.",
            prompt=NOTE_DRAFTER,
            tools=["mcp__carekind__get_resident_context",
                   "mcp__carekind__create_progress_note_draft"],
            model="sonnet",
        ),
        "policy-checker": AgentDefinition(
            description="Read-only. Checks drafts against policy.",
            prompt=POLICY_CHECKER,
            tools=["mcp__carekind__get_draft", "mcp__carekind__search_policy"],
            model="haiku",
        ),
    },
)`} />
		  <Say>description 写给协调者看：它靠这句话决定派给谁。tools 写给系统看：子 Agent 只能用这些。</Say>
		</Page>
	);
}
