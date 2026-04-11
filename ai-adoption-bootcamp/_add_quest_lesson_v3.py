#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Add a Quest lesson (type=Quest, with `quest:` field) to AI Adoption Bootcamp.

The lesson is the "装 Claude Code" experience following L17/L18 in Phase 1.
This script ONLY updates curriculum/ outline.json — it does NOT touch any
frontend code, does NOT push to production. It's pure data.

To actually deploy this lesson to production:
1. Use the admin UI manually:
   - Open /quest-goals → create the QuestGoal (or run seed-quest-goal-claude-code.ts)
   - Edit a real production lesson → set type=Quest → select the QuestGoal
2. OR wait for Phase 2 bootcamp-sync to handle Quest type lessons
"""
import json

OUTLINE_PATH = "/Users/lightman/Documents/sites/jr-academy-ai/curriculum/ai-adoption-bootcamp/public/outline.json"

NEW_LESSON = {
    "code": "L18a",
    "title": "Quest 实战：在你电脑上装 Claude Code 完成第一个 AI 辅助项目",
    "type": "Quest",
    "duration": 30,
    "isLive": False,
    "description": (
        "<h3>🎯 这节课解决什么问题</h3>"
        "<p>L17/L18 讲了 Vibe Coding 的概念和 Lab 演示，但很多学员看完概念还是不敢自己装。"
        "这节 Quest 由 AI Tutor <strong>主动引导</strong>你在自己电脑上从零装好 Claude Code，"
        "完成你人生第一次 AI 辅助编程。AI 会等你做完每一步，验证结果，再带你进下一步——"
        "脱离了网站，但 AI 一直在旁边带你。</p>"
        "<h3>📖 你将学到</h3>"
        "<ul>"
        "<li><strong>真的把 Claude Code 装到你电脑上</strong> — 不是看，是装</li>"
        "<li><strong>第一次跟 AI 协作生成代码</strong> — 用一句中文需求换一段可运行代码</li>"
        "<li><strong>感受 Vibe Coding 的工作流</strong> — 跟 Google + 复制粘贴的体验对比</li>"
        "</ul>"
        "<h3>💡 适合谁</h3>"
        "<p>看了 L17 的视频但还没动手装 Claude Code 的所有学员。这一节就是逼你跳出"
        "「我懂了」的舒适区，真的把工具装到自己电脑上。AI 会盯着你，骗不过去。</p>"
        "<h3>📦 课程包含</h3>"
        "<ul>"
        "<li>1 个 AI Tutor Quest（5 步引导，混合 self-confirm + text-evidence 验证）</li>"
        "<li>约 30 分钟（取决于你电脑环境）</li>"
        "<li>完成后你电脑上有可用的 Claude Code，不是练习产物</li>"
        "</ul>"
        "<h3>✅ 学完能做什么</h3>"
        "<p>你会真的拥有 Claude Code，知道 /init 的作用，会用一句中文需求让它生成代码，"
        "也能解释生成的代码做了什么。后面 Phase 2 的所有「让 AI 替你写文档/PPT/工作流」"
        "的练习都建立在这个工具基础上。</p>"
    ),
    "quest": {
        "title": "实战：在你电脑上装 Claude Code 并完成第一个 AI 辅助项目",
        "description": "从零安装 Claude Code 到用它创建第一个 Hello World 项目，AI 全程主动引导",
        "difficulty": "beginner",
        "estimatedMinutes": 30,
        "learningGoal": (
            "学员能在自己电脑上独立装好 Claude Code、用 /init 创建一个项目、"
            "跟 AI 对话生成第一段可运行的代码、并理解 Vibe Coding 的核心价值"
        ),
        "successCriteria": (
            "学员能 1) 在终端输出 claude --version 看到正确版本号；"
            "2) 在某个目录用 /init 初始化项目；"
            "3) 用一句中文需求让 AI 生成代码并能解释代码做了什么"
        ),
        "uiMode": "chat",
        "visualMode": "flow",
        "context": (
            "用户是一位非技术背景的业务人员，对终端基本熟悉但没怎么装过全局 npm 包。"
            "目标是让他第一次感受 AI 辅助编程的价值，不是教他写代码。"
            "引导时要耐心，每一步等他确认。Mac 用户用 brew + npm，Windows 用户提示装 WSL2。"
            "装的时候可能有 EACCES 权限问题，提前提醒用 sudo 或 npm 全局目录配置。"
            "最后一步要让用户用一个真实的需求（比如\"写一个 Python 脚本读 csv 输出 top 10 行\"）"
            "体验 AI 生成代码的过程，让他自己说出最大的感受。"
        ),
        "systemStylePrompt": "说话像一个热情但不啰嗦的助教学长，多用鼓励性语气，避免长篇大论。",
        "customGuardrails": (
            "如果用户问 Claude Code 跟 Cursor / Copilot / Windsurf 谁更好，"
            "回答\"先把 Claude Code 装完跑通，做完这个 Quest 我们再聊比较\"。"
        ),
        "linkedResources": [
            {
                "type": "wiki",
                "ref": "claude-code-install",
                "description": "Claude Code 安装的官方步骤参考"
            },
            {
                "type": "learn",
                "ref": "vibe-coding/hub",
                "description": "Vibe Coding Hub — Claude Code 的概念入门"
            }
        ],
        "stepSkeleton": [
            {
                "title": "检查 Node.js 版本",
                "description": "在终端运行 `node --version`，需要 v20+",
                "verificationType": "text-evidence",
                "verificationHint": "让用户贴 node --version 的输出",
                "expectedEvidence": "v20.x.x 或更高版本号"
            },
            {
                "title": "安装 Claude Code 全局包",
                "description": "运行 `npm install -g @anthropic-ai/claude-code`",
                "verificationType": "text-evidence",
                "verificationHint": "让用户贴 claude --version 的输出",
                "expectedEvidence": "语义化版本号（如 1.x.x）"
            },
            {
                "title": "初始化第一个项目",
                "description": "在某个空目录运行 `claude /init`",
                "verificationType": "text-evidence",
                "verificationHint": "让用户描述 /init 之后看到了什么文件 / 输出",
                "expectedEvidence": "CLAUDE.md 或欢迎信息相关字样"
            },
            {
                "title": "第一次跟 AI 对话生成代码",
                "description": "用一个真实的中文需求让 AI 生成一段简单代码（比如 \"写一个 python 脚本读 csv 取前 10 行\"）",
                "verificationType": "self-confirm",
                "verificationHint": "AI 主动追问：你最后让它生成了什么？生成的代码大概多少行？看得懂在做什么吗？",
                "expectedEvidence": ""
            },
            {
                "title": "总结你的体验",
                "description": "一句话描述这次 Vibe Coding 体验最让你印象深刻的事情",
                "verificationType": "self-confirm",
                "verificationHint": "追问：跟你之前自己 Google + 复制粘贴写代码的体验比，最大的不同是什么？",
                "expectedEvidence": ""
            }
        ],
        "prerequisites": [
            "电脑上装了 Node.js 20+（没装的话先去 nodejs.org 装一个）",
            "有一个能输入 sudo / admin 密码的电脑账号"
        ],
        "targetPlatform": "browser+local-terminal",
        "tags": ["claude-code", "vibe-coding", "phase1-real"]
    }
}


def main():
    with open(OUTLINE_PATH) as f:
        outline = json.load(f)

    phase1 = outline["phases"][0]
    existing_codes = [l.get("code") for l in phase1["lessons"]]

    if "L18a" in existing_codes:
        idx = existing_codes.index("L18a")
        phase1["lessons"][idx] = NEW_LESSON
        action = "Replaced existing"
    else:
        # Insert after L18 to keep position semantics
        l18_idx = existing_codes.index("L18") if "L18" in existing_codes else len(phase1["lessons"]) - 1
        phase1["lessons"].insert(l18_idx + 1, NEW_LESSON)
        action = "Inserted new"

    # Recompute totals
    outline["totalLessons"] = sum(len(ph["lessons"]) for ph in outline["phases"])

    with open(OUTLINE_PATH, "w") as f:
        json.dump(outline, f, ensure_ascii=False, indent=2)

    print(f"{action} L18a — Phase 1 now has {len(phase1['lessons'])} lessons")
    print(f"Total bootcamp lessons: {outline['totalLessons']}")
    print()
    print("This is curriculum data only. To deploy to production:")
    print("  1. Run jr-academy/scripts/seed-quest-goal-claude-code.ts to insert the QuestGoal")
    print("  2. Use admin UI /quest-goals to verify the goal exists")
    print("  3. Use admin UI to find a real lesson and set type=Quest + select the goal")
    print("  (Phase 2 bootcamp-sync will automate steps 1-3)")


if __name__ == "__main__":
    main()
