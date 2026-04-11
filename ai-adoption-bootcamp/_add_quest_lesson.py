#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Add a new Quest-enabled lesson to AI Adoption Bootcamp Phase 1."""
import json

OUTLINE_PATH = "curriculum/ai-adoption-bootcamp/public/outline.json"

with open(OUTLINE_PATH) as f:
    outline = json.load(f)

new_lesson = {
    "code": "L18a",
    "title": "Quest 实战：跟 AI 一起搞定你的第一份周报",
    "description": "<h3>🎯 这节课解决什么问题</h3><p>学了 Phase 1 的 18 节课，你可能感觉「知识点我都懂，真到工作场景还是不知道从哪下手」。这节课不是再讲新概念，而是让 AI Tutor 以 Quest（引导式探索）的方式，带你从空白文档开始，一步步完成一份真正能发给老板的月度工作周报。</p><h3>📖 你将学到</h3><ul><li><strong>周报写作的黄金结构</strong> — 成果、数据、问题、下一步，四块内容 AI 帮你逐项打磨</li><li><strong>分步提问法</strong> — 不是一句「帮我写周报」就结束，而是像跟同事协作一样逐步确认</li><li><strong>Quest 模式体验</strong> — 左边看到地图、右边 AI 逐步引导，完成一步解锁下一步，比看教程高效 10 倍</li></ul><h3>💡 适合谁</h3><p>你已经学过 Phase 1 的 Prompt 基础和 ChatGPT / Claude 用法，但真到写周报的时候还是习惯性打开 Word 从头敲。或者你写过 AI 辅助的周报但觉得「还不如我自己写」——这节 Quest 会手把手带你走一遍「正确姿势」。</p><h3>📦 课程包含</h3><ul><li>1 个 AI Tutor Quest（5 步引导 + 可视化旅程地图）</li><li>约 30 分钟完成时间 — 真实做一份属于你自己的周报</li><li>完成后可以直接 copy 去发给老板，不是扔掉的练习稿</li></ul><h3>✅ 学完能做什么</h3><p>以后每周花 15 分钟就能用 AI 协作写出一份结构清晰、数据支撑、读起来不像 AI 生成的周报。更重要的是你建立了「跟 AI 分步协作」的工作习惯，这个习惯迁移到做 PPT、写邮件、做季度汇报都一样管用。</p>",
    "type": "Lesson",
    "isLive": False,
    "duration": 30,
    "steps": [],
    "labs": [],
    "learns": [],
    "quest": {
        "title": "跟 AI 一起完成你的第一份月度工作周报",
        "context": "用户是一位业务专业人士，已经学过 Phase 1 的 Prompt 基础和 ChatGPT/Claude 用法。现在要用 Quest 模式引导 TA 从空白开始，一步步完成一份真实可用的月度周报。每一步都要具体、可验证。包含：1) 准备信息（让用户列出本月 3 个主要成果 + 1-2 个数据），2) 写开头（用 Claude 按「成果→数据」结构生成），3) 补充问题与挑战，4) 规划下一步，5) 整体通读和润色。强调要像「跟资深同事协作」，而不是「让 AI 替我写完」。目标平台：浏览器 + ChatGPT 或 Claude。",
        "difficulty": "beginner",
        "estimatedMinutes": 30,
    },
    "learningMaterial": "<h2>学习目标</h2><p>这节课结束后，你能：</p><ul><li>用 AI Tutor 的 Quest 模式走完一次「结构化协作」流程</li><li>产出一份真实可用的月度工作周报（不是练习稿）</li><li>理解为什么「分步提问」比「一句话甩给 AI」效果好 10 倍</li></ul><h2>什么是 Quest 模式</h2><p>Quest = 可视化旅程地图 + AI Tutor 逐步引导。左边你会看到一张地图，右边是 AI Tutor 的实时指导。每完成一步，当前节点变绿，下一步自动解锁。跟普通聊天最大的区别：</p><ul><li><strong>你永远知道在哪一步</strong>，不会聊着聊着就跑偏</li><li><strong>每一步都有明确的验证</strong>，完成了才能往下走</li><li><strong>AI 会记住前面所有步骤的结果</strong>，后面的建议都基于你前面写的内容</li></ul><h2>为什么拿「写周报」来演示</h2><p>因为它同时满足三个条件：</p><ol><li><strong>每个业务人都得写</strong>，不是边缘场景</li><li><strong>有明确的结构可以拆解</strong>，适合分步完成</li><li><strong>输出物直接可用</strong>，不是扔掉的练习</li></ol><p>学完这一节你会发现：AI 协作的关键不是「AI 会不会写」，而是「你会不会带着 AI 一步步做」。</p><h2>动手开始</h2><p>下面页面底部有一个 Quest 入口卡片，点「开始 Quest →」。然后按照右边 AI Tutor 的指示，一步一步完成你真实本月的周报。全程约 30 分钟。</p><h2>常见疑问</h2><h3>Q: 我没法把公司真实数据贴给 AI 怎么办？</h3><p>可以用假数据或者模糊处理（比如「销售额增长 X%」），流程跑通才是目的。</p><h3>Q: 如果某一步 AI 的建议我不满意？</h3><p>用右边聊天框反馈「这个不适合我的场景，因为...」，AI 会调整。实在不行点「跳过」也可以。</p><h3>Q: 完成后周报能保存吗？</h3><p>直接 copy 到你自己的 Notion / Word 就行。Quest 的意义是带你走流程，最终产出物归你所有。</p><h2>小结</h2><p>这节课没有新知识点，只有一件事：<strong>跟 AI 协作的习惯</strong>。习惯建立了，后面 Phase 2 的所有业务场景都能套这个模式。</p>",
}

# Append to Phase 1 lessons
phase1 = outline["phases"][0]
# Check if already exists
existing_codes = [l.get("code") for l in phase1["lessons"]]
if new_lesson["code"] in existing_codes:
    # Replace existing
    idx = existing_codes.index(new_lesson["code"])
    phase1["lessons"][idx] = new_lesson
    print(f"Replaced existing {new_lesson['code']}")
else:
    phase1["lessons"].append(new_lesson)
    print(f"Added {new_lesson['code']} to Phase 1")

# Update counts
outline["totalLessons"] = sum(len(ph["lessons"]) for ph in outline["phases"])

with open(OUTLINE_PATH, "w") as f:
    json.dump(outline, f, ensure_ascii=False, indent=2)

print(f"Phase 1 now has {len(phase1['lessons'])} lessons")
print(f"Total lessons: {outline['totalLessons']}")
