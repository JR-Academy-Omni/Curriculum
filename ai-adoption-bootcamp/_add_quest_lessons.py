#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Add 5 new Quest lessons to AI Adoption Bootcamp + rename L18a → Q01.
Inserts each Quest AFTER its paired lesson. Does NOT modify any existing lesson.
"""
import json

OUTLINE_PATH = "/Users/lightman/Documents/sites/jr-academy-ai/curriculum/ai-adoption-bootcamp/public/outline.json"

# ── Quest definitions ──

QUESTS = [
    # Phase 1: after L03
    {
        "insert_after": "L03",
        "phase_index": 0,
        "lesson": {
            "code": "Q02",
            "title": "Quest：跟小花老师一起用 AI 完成 3 个真实任务",
            "type": "Quest",
            "duration": 40,
            "isLive": False,
            "description": "<h3>🎯 这节课解决什么问题</h3><p>L03 讲了 ChatGPT 和 Claude 的各种功能，但很多学员看完演示还是不敢自己上手。这节 Quest 由小花老师带你在自己的 ChatGPT/Claude 账号里，从零完成 3 个真实的工作任务：整理一封长邮件的摘要、用 AI 写一份周报、让 AI 帮你分析一份 CSV 数据。做完这 3 件事你就知道 AI 能帮你什么了。</p>",
            "quest": {
                "title": "跟小花老师一起用 AI 完成 3 个真实工作任务",
                "description": "在自己的 ChatGPT/Claude 里完成邮件摘要、周报撰写、数据分析 3 个真实任务",
                "learningGoal": "学员能在自己的 ChatGPT 或 Claude 账号里独立完成：1) 一封长邮件的结构化摘要 2) 一份有数据支撑的周报 3) 一份 CSV 数据的 top-10 分析",
                "successCriteria": "3 个任务都有产出物，学员能解释每个 prompt 为什么这么写",
                "difficulty": "beginner",
                "estimatedMinutes": 40,
                "uiMode": "chat",
                "context": "学员刚学完 L03 ChatGPT+Claude 深度实操，对两个工具的界面和基本操作有了解但没真正用过。这节 Quest 的目标是让他们在自己的账号里做 3 件真事——不是练习，是真的产出物。引导时要一步一步来：先做邮件摘要（最简单），再做周报（稍复杂），最后做数据分析（需要上传文件）。每完成一个任务让学员贴结果给你看。如果学员没有 ChatGPT Plus 账号，引导他们用免费的 Claude.ai。",
                "systemStylePrompt": "说话像一个很兴奋地想让你体验 AI 的朋友，每完成一个任务都要具体表扬产出物的亮点",
                "customGuardrails": "不要讨论 ChatGPT vs Claude 哪个更好的话题，两个都行，用哪个就教哪个",
                "stepSkeleton": [
                    {"title": "确认你的 AI 工具就位", "description": "打开 ChatGPT 或 Claude，确认能正常输入", "verificationType": "self-confirm", "verificationHint": "追问用的是 ChatGPT 还是 Claude，免费版还是付费版"},
                    {"title": "任务 1：邮件摘要", "description": "把一封长邮件贴给 AI，让它输出：关键结论 + 需要你回复的点 + 截止日期", "verificationType": "text-evidence", "verificationHint": "让学员贴 AI 生成的摘要结果", "expectedEvidence": "包含要点/结论/行动项的结构化摘要"},
                    {"title": "任务 2：AI 写周报", "description": "列出本周 3 个主要成果 + 1-2 个数据，让 AI 帮你写成一份结构化周报", "verificationType": "text-evidence", "verificationHint": "让学员贴生成的周报", "expectedEvidence": "有成果/数据/下一步的周报"},
                    {"title": "任务 3：CSV 数据分析", "description": "上传一份 CSV（或贴几行数据），让 AI 找出 top 10 并给结论", "verificationType": "text-evidence", "verificationHint": "让学员贴 AI 的分析结果", "expectedEvidence": "数据分析结果"},
                    {"title": "总结：你觉得 AI 最能帮你什么", "description": "一句话说清楚这 3 个任务里哪个对你工作帮助最大", "verificationType": "self-confirm", "verificationHint": "追问为什么选这个，具体能省多少时间"}
                ],
                "linkedResources": [],
                "prerequisites": ["有 ChatGPT 或 Claude 账号（免费版即可）"],
                "targetPlatform": "browser",
                "tags": ["chatgpt", "claude", "first-real-tasks", "phase1"]
            }
        }
    },
    # Phase 2: after L19
    {
        "insert_after": "L19",
        "phase_index": 1,
        "lesson": {
            "code": "Q03",
            "title": "Quest：用 AI 写一套真实的 Facebook 广告文案",
            "type": "Quest",
            "duration": 35,
            "isLive": False,
            "description": "<h3>🎯 这节课解决什么问题</h3><p>L19 讲了 AI 做广告的方法论，但从「知道方法」到「写出一套能投的广告」还差最后一步。这节 Quest 由小花老师带你用 AI 从零写出一套 Facebook/Instagram 广告文案（标题 + 正文 + CTA + 3 个变体），最后你手里有一套能直接拿去投放的东西。</p>",
            "quest": {
                "title": "用 AI 从零写出一套能投的 Facebook 广告文案",
                "description": "跟小花老师一起完成：目标受众定位 → 广告标题 → 正文 → CTA → 3 个 A/B 变体",
                "learningGoal": "学员能独立用 AI 写出一套 Facebook 广告文案（含标题、正文、CTA、3 个变体），并能解释为什么这样写",
                "successCriteria": "有完整的广告文案产出物（至少 3 个变体），学员能说出目标受众是谁、pain point 是什么",
                "difficulty": "intermediate",
                "estimatedMinutes": 35,
                "uiMode": "chat",
                "context": "学员刚学完 L19 AI 做 Facebook/Instagram 广告的方法论。这节 Quest 要带学员真正写出一套广告。先让学员选一个真实的产品/服务（最好是自己公司的，没有就用假设的），然后一步步用 AI 生成。关键：不要一次生成完整广告，而是分步——先定受众 → 再写 pain point → 再写标题 → 再写正文 → 最后出变体。每步让学员评价 AI 的产出并修改。",
                "customGuardrails": "如果学员问 Facebook 广告投放设置（预算、受众定向、版位），告诉他这节课只做文案，投放设置是另一节课的内容",
                "stepSkeleton": [
                    {"title": "选定你的产品/服务", "description": "告诉 AI 你要推广什么，目标市场是谁", "verificationType": "self-confirm", "verificationHint": "追问产品是什么、目标客户是谁"},
                    {"title": "用 AI 找 pain point", "description": "让 AI 列出目标受众的 5 个 pain point，你选最准的 2 个", "verificationType": "text-evidence", "verificationHint": "让学员贴选出的 2 个 pain point"},
                    {"title": "生成广告标题（5 个）", "description": "让 AI 基于 pain point 生成 5 个标题，选最好的 1 个", "verificationType": "text-evidence", "verificationHint": "贴选中的标题"},
                    {"title": "生成广告正文 + CTA", "description": "基于选中的标题，让 AI 写完整广告正文 + Call to Action", "verificationType": "text-evidence", "verificationHint": "贴完整广告文案"},
                    {"title": "出 3 个 A/B 测试变体", "description": "让 AI 基于同一个 pain point 出 3 个不同风格的变体", "verificationType": "text-evidence", "verificationHint": "贴 3 个变体"}
                ],
                "prerequisites": ["学过 L19 AI 做广告方法论"],
                "targetPlatform": "browser",
                "tags": ["facebook-ads", "marketing", "copywriting", "phase2"]
            }
        }
    },
    # Phase 2: after L37
    {
        "insert_after": "L37",
        "phase_index": 1,
        "lesson": {
            "code": "Q04",
            "title": "Quest：搭建你自己的 AI 客服 Bot",
            "type": "Quest",
            "duration": 45,
            "isLive": False,
            "description": "<h3>🎯 这节课解决什么问题</h3><p>L37 介绍了 AI 客服 Bot 和内部知识库的概念，但只是阅读材料。这节 Quest 由小花老师带你在 OpenClaw 平台上从零搭建一个真正能用的 AI 客服 Bot——上传知识库文档、配置 System Prompt、测试问答效果。做完这节课你手里有一个能部署到你公司网站的 AI 客服。</p>",
            "quest": {
                "title": "在 OpenClaw 上搭建你自己的 AI 客服 Bot",
                "description": "从注册账号到部署完成：上传文档 → 配置 Prompt → 测试 → 部署",
                "learningGoal": "学员能在 OpenClaw 平台上独立搭建一个 AI 客服 Bot，包括上传知识库文档、配置 System Prompt、完成至少 5 轮测试问答",
                "successCriteria": "Bot 能正确回答 3 个基于知识库的问题",
                "difficulty": "intermediate",
                "estimatedMinutes": 45,
                "uiMode": "chat",
                "context": "学员刚读完 L37 关于 AI 客服 Bot 的概念介绍。这节 Quest 要在 OpenClaw 平台上实际操作。学员可能没有 OpenClaw 账号，第一步要注册。如果学员没有公司文档可以上传，让他用 JR Academy 的公开 FAQ 作为测试知识库。关键步骤：1) 注册 OpenClaw 2) 创建 Bot 3) 上传 1-2 个文档 4) 写 System Prompt 5) 测试问答。每步都要等学员确认操作完成。",
                "customGuardrails": "不要讨论 OpenClaw 的定价和竞品比较，专注于搭建过程",
                "stepSkeleton": [
                    {"title": "注册 OpenClaw 账号", "description": "打开 OpenClaw 网站注册一个免费账号", "verificationType": "self-confirm", "verificationHint": "追问是否成功登录了 Dashboard"},
                    {"title": "创建一个新 Bot", "description": "在 Dashboard 里创建一个新的 Bot 项目", "verificationType": "self-confirm", "verificationHint": "追问 Bot 名字叫什么"},
                    {"title": "上传知识库文档", "description": "上传 1-2 个文档作为 Bot 的知识来源", "verificationType": "self-confirm", "verificationHint": "追问上传了什么文档、多少页"},
                    {"title": "配置 System Prompt", "description": "写一段 System Prompt 定义 Bot 的角色和行为", "verificationType": "text-evidence", "verificationHint": "让学员贴写好的 System Prompt"},
                    {"title": "测试 5 轮问答", "description": "向 Bot 提 5 个问题，验证它是否基于知识库回答", "verificationType": "text-evidence", "verificationHint": "贴 3 个有代表性的问答对", "expectedEvidence": "问答对，显示 Bot 能基于文档回答"}
                ],
                "prerequisites": ["学过 L37 AI 客服 Bot 概念"],
                "targetPlatform": "browser",
                "tags": ["openclaw", "chatbot", "customer-service", "phase2"]
            }
        }
    },
    # Phase 2: after L54
    {
        "insert_after": "L54",
        "phase_index": 1,
        "lesson": {
            "code": "Q05",
            "title": "Quest：设计你公司的 AI Pilot 方案",
            "type": "Quest",
            "duration": 40,
            "isLive": False,
            "description": "<h3>🎯 这节课解决什么问题</h3><p>Phase 2 学了一堆 AI 业务场景，但怎么落地到自己公司？这节 Quest 由小花老师带你用 AI 从零写出一份 AI Pilot 方案——选场景、估 ROI、定时间线、写给老板看的一页纸。做完这节课你手里有一份真的可以拿给老板的提案。</p>",
            "quest": {
                "title": "用 AI 帮你写一份能拿给老板的 AI Pilot 方案",
                "description": "从选场景到写提案：识别机会 → 评估 ROI → 定时间线 → 写一页纸方案",
                "learningGoal": "学员能产出一份结构化的 AI Pilot 方案（含目标场景、预期 ROI、时间线、风险、所需资源），可以直接拿给老板/决策者看",
                "successCriteria": "有完整的一页纸 AI Pilot 提案",
                "difficulty": "intermediate",
                "estimatedMinutes": 40,
                "uiMode": "chat",
                "context": "学员学完了 Phase 2 所有业务场景（广告、邮件、SEO、客服、销售、招聘），现在要选一个场景在自己公司试点。这节 Quest 帮学员把想法变成一份正式提案。关键：让学员用自己公司的真实情况（不是假设），AI 帮他结构化思考。如果学员不愿意透露公司信息，可以用模糊描述（「一家 50 人的 SaaS 公司」）。步骤：1) 选场景 2) 估 ROI 3) 定 timeline 4) 写方案 5) 总结收获。",
                "stepSkeleton": [
                    {"title": "选定 AI 试点场景", "description": "从 Phase 2 学的场景里选一个最适合你公司的", "verificationType": "self-confirm", "verificationHint": "追问为什么选这个场景、公司现在这块怎么做的"},
                    {"title": "估算 ROI", "description": "用 AI 帮你估算时间节省 / 成本节省 / 质量提升", "verificationType": "text-evidence", "verificationHint": "让学员贴 ROI 估算"},
                    {"title": "定时间线和里程碑", "description": "用 AI 帮你规划 4-8 周的试点计划", "verificationType": "text-evidence", "verificationHint": "贴时间线"},
                    {"title": "写一页纸方案", "description": "把以上内容整合成一份给老板看的一页纸提案", "verificationType": "text-evidence", "verificationHint": "贴完整方案", "expectedEvidence": "结构化的 Pilot 方案"},
                    {"title": "总结", "description": "这份方案你真的会拿给老板吗？还需要改什么？", "verificationType": "self-confirm"}
                ],
                "prerequisites": ["学完 Phase 2 至少 3 个业务场景"],
                "targetPlatform": "browser",
                "tags": ["ai-pilot", "strategy", "proposal", "phase2"]
            }
        }
    },
    # Phase 3: after L55
    {
        "insert_after": "L55",
        "phase_index": 2,
        "lesson": {
            "code": "Q06",
            "title": "Quest：给你的公司做一次 AI 就绪度评估",
            "type": "Quest",
            "duration": 35,
            "isLive": False,
            "description": "<h3>🎯 这节课解决什么问题</h3><p>L55 讲了 AI 成熟度模型和评估框架，但听完理论不等于会评估。这节 Quest 由小花老师带你对照评估框架，一项一项给自己公司打分，最后产出一份真实的 AI 就绪度报告——哪些维度准备好了、哪些是短板、下一步优先改什么。</p>",
            "quest": {
                "title": "对照框架给你的公司做一次 AI 就绪度评估",
                "description": "从领导力、数据、技术、人才、文化 5 个维度打分，产出评估报告",
                "learningGoal": "学员能完成一份公司 AI 就绪度评估报告（5 个维度各有打分 + 证据 + 改进建议）",
                "successCriteria": "5 个维度都有打分（1-5 分）和简短说明",
                "difficulty": "intermediate",
                "estimatedMinutes": 35,
                "uiMode": "chat",
                "context": "学员刚学完 L55 AI 成熟度模型。这节 Quest 要让学员对照框架给自己公司打分。5 个维度：1) 领导力与战略 2) 数据基础设施 3) 技术能力 4) 人才与技能 5) 组织文化。每个维度 AI 问 2-3 个具体问题帮学员判断分数。如果学员说不知道某个维度的情况（比如不了解公司数据基础设施），引导他标记为「待调研」并给出调研建议。",
                "stepSkeleton": [
                    {"title": "维度 1：领导力与战略", "description": "你公司的高层对 AI 是什么态度？有没有 AI 相关的战略或预算？", "verificationType": "self-confirm", "verificationHint": "追问具体打几分（1-5）并说明理由"},
                    {"title": "维度 2：数据基础设施", "description": "公司有没有干净的、可访问的数据？数据存在哪里？", "verificationType": "self-confirm", "verificationHint": "追问打分和具体情况"},
                    {"title": "维度 3：技术能力", "description": "公司有没有能部署 AI 的技术团队或合作伙伴？", "verificationType": "self-confirm"},
                    {"title": "维度 4：人才与技能", "description": "团队对 AI 的了解程度？有没有培训计划？", "verificationType": "self-confirm"},
                    {"title": "汇总评估报告", "description": "把 5 个维度的打分汇总成一份评估报告，标出最强和最弱的维度", "verificationType": "text-evidence", "verificationHint": "让学员贴 AI 帮他生成的评估报告", "expectedEvidence": "5 维度打分 + 优劣势分析"}
                ],
                "prerequisites": ["学过 L55 AI 成熟度模型"],
                "targetPlatform": "browser",
                "tags": ["ai-readiness", "assessment", "maturity-model", "phase3"]
            }
        }
    }
]


def main():
    with open(OUTLINE_PATH) as f:
        outline = json.load(f)

    # 1. Rename L18a → Q01
    for ph in outline["phases"]:
        for les in ph["lessons"]:
            if les.get("code") == "L18a":
                les["code"] = "Q01"
                print("Renamed L18a → Q01")
                break

    # 2. Insert new Quest lessons
    for quest_def in QUESTS:
        phase = outline["phases"][quest_def["phase_index"]]
        codes = [l.get("code") for l in phase["lessons"]]
        insert_code = quest_def["insert_after"]
        new_lesson = quest_def["lesson"]

        if new_lesson["code"] in codes:
            print(f"  {new_lesson['code']} already exists, skipping")
            continue

        if insert_code in codes:
            idx = codes.index(insert_code)
            phase["lessons"].insert(idx + 1, new_lesson)
            print(f"  Inserted {new_lesson['code']} after {insert_code} in Phase {quest_def['phase_index']+1}")
        else:
            phase["lessons"].append(new_lesson)
            print(f"  Appended {new_lesson['code']} to Phase {quest_def['phase_index']+1} (target {insert_code} not found)")

    # 3. Update totals
    outline["totalLessons"] = sum(len(ph["lessons"]) for ph in outline["phases"])

    with open(OUTLINE_PATH, "w") as f:
        json.dump(outline, f, ensure_ascii=False, indent=2)

    print(f"\nTotal lessons: {outline['totalLessons']}")
    print("\nQuest lessons:")
    for ph in outline["phases"]:
        for les in ph["lessons"]:
            if les.get("type") == "Quest":
                print(f"  {les['code']} — {les['title'][:50]}")


if __name__ == "__main__":
    main()
