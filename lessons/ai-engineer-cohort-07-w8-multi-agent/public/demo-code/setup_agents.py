"""一次性准备：创建 environment 和 4 个 Agent，把 ID 和版本写进 runtime/agents.json。

Agent 是持久化、带版本的对象：创建一次，之后每次运行只引用 ID，不在请求路径里重复创建。
改了 prompts.py 或 carekind.py 里的工具后，用 --recreate 重新创建。

    uv run python setup_agents.py            # 已有就复用
    uv run python setup_agents.py --recreate
"""
import argparse
import json

import anthropic

import carekind as ck
import prompts
from settings import Settings

S = Settings()
AGENTS_FILE = S.runtime_dir / "agents.json"


def create_all(client: anthropic.Anthropic) -> dict:
    env = client.beta.environments.create(
        name="carekind-w8-handover",
        config={"type": "cloud", "networking": {"type": "limited", "allow_package_managers": False,
                                                "allow_mcp_servers": False}},
    )

    # 两个被派活的 Agent：各自的模型、prompt 和工具。没有 agent_toolset，也就没有 bash、文件和网页。
    drafter = client.beta.agents.create(
        name=ck.NOTE_DRAFTER,
        description="Writes ONE progress note Draft for ONE resident and shift. Give it resident_id, shift_id "
                    "and the report format. Can read resident context and policy, and save drafts.",
        model=S.drafter_model, system=prompts.NOTE_DRAFTER, tools=ck.tools_for(ck.NOTE_DRAFTER),
    )
    checker = client.beta.agents.create(
        name=ck.POLICY_CHECKER,
        description="Read-only. Give it a list of draft_ids; it checks each against policy and reports "
                    "PASS or ISSUE with the policy section.",
        model=S.checker_model, system=prompts.POLICY_CHECKER, tools=ck.tools_for(ck.POLICY_CHECKER),
    )

    # 协调者：roster 里固定版本（version pinning），不允许临时造 Agent，不开 dynamic workflows（省钱、可预测）
    lead = client.beta.agents.create(
        name=ck.SHIFT_LEAD,
        description="Coordinates the end-of-shift handover.",
        model=S.lead_model, system=prompts.SHIFT_LEAD, tools=ck.tools_for(ck.SHIFT_LEAD),
        multiagent={
            "type": "multiagent_20261001",
            "subagents": {
                "type": "enabled",
                "predefined_agents": [
                    {"type": "agent", "id": drafter.id, "version": drafter.version},
                    {"type": "agent", "id": checker.id, "version": checker.version},
                ],
                "inline_agents": {"type": "disabled"},
            },
            "workflows": {"type": "disabled"},
            "advisor": {"type": "enabled", "model": S.advisor_model},
        },
    )

    # 单 Agent 基线：同样的工具和模型，只是不拆分。对比时唯一的变量是架构。
    single = client.beta.agents.create(
        name=ck.SINGLE_AGENT,
        description="Does the whole handover alone.",
        model=S.lead_model, system=prompts.SINGLE_AGENT, tools=ck.tools_for(ck.SINGLE_AGENT),
        multiagent={
            "type": "multiagent_20261001",
            "subagents": {"type": "disabled"},
            "workflows": {"type": "disabled"},
            "advisor": {"type": "enabled", "model": S.advisor_model},
        },
    )

    return {"environment_id": env.id,
            "team": {"id": lead.id, "version": lead.version},
            "single": {"id": single.id, "version": single.version},
            "roster": {ck.NOTE_DRAFTER: {"id": drafter.id, "version": drafter.version},
                       ck.POLICY_CHECKER: {"id": checker.id, "version": checker.version}}}


def load_or_create(recreate: bool = False) -> dict:
    if AGENTS_FILE.exists() and not recreate:
        return json.loads(AGENTS_FILE.read_text(encoding="utf-8"))
    ids = create_all(anthropic.Anthropic(**S.client_kwargs()))
    AGENTS_FILE.parent.mkdir(parents=True, exist_ok=True)
    AGENTS_FILE.write_text(json.dumps(ids, indent=2), encoding="utf-8")
    return ids


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--recreate", action="store_true", help="重新创建 environment 和全部 Agent")
    ids = load_or_create(ap.parse_args().recreate)
    print(json.dumps(ids, indent=2))

