#!/usr/bin/env python3
"""Generate per-course DESIGN.md AND a master theme-colors.html cheatsheet.

Single source of truth for the 23 course theme colors. Edit the COURSES dict
then run from the curriculum root:  python3 scripts/gen-theme-colors.py

Outputs:
  {slug}/DESIGN.md       — one per course (overwritten each run)
  theme-colors.html      — marketing cheatsheet with copy-paste AI image prompts

Does NOT touch outline.json. If a themeColor hex changes, update each
{slug}/public/outline.json separately.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

COURSES = {
    "ai-essentials-bootcamp": {
        "name_zh": "AI 必修课 (AI Essentials Bootcamp)",
        "tagline": "4 周·零基础·各行各业 AI 入门实战",
        "track": "入门 / 大众线",
        "primary_hex": "#FFDE59",
        "primary_name": "JR 黄",
        "text_on_primary": "#000000",
        "reasoning": "入门课的基石色——明亮、友好、零门槛。沿用 JR 品牌四色中的标志性黄。",
        "siblings": [
            ("AI Adoption Bootcamp", "#FF914D", "下一阶进阶——黄→橙过渡"),
            ("AI Programming", "#FF7B5A", "同属入门带，珊瑚比黄更技术感"),
        ],
        "accents": [
            ("强调/CTA", "#000000", "黑作为反差色"),
            ("数据/数字", "#10162F", "JR 深色"),
            ("成功状态", "#7ED957", "JR 绿"),
        ],
    },
    "ai-adoption-bootcamp": {
        "name_zh": "AI Adoption Specialist Bootcamp",
        "tagline": "8 周·企业 AI 落地·从工具到组织级采纳",
        "track": "入门 / 大众线",
        "primary_hex": "#FF914D",
        "primary_name": "JR 橙",
        "text_on_primary": "#000000",
        "reasoning": "企业职员的「职场暖色」——比 Essentials 的黄多一份成熟感，但不至于像红那么强势。",
        "siblings": [
            ("AI Essentials Bootcamp", "#FFDE59", "前置入门课，黄色"),
            ("AI Programming", "#FF7B5A", "同入门带的偏红版本"),
            ("AI Solo Founder", "#D7263D", "更深的红，避免混淆"),
        ],
        "accents": [
            ("强调/CTA", "#10162F", "深夜蓝沉稳压色"),
            ("数据/数字", "#000000", ""),
            ("成功状态", "#7ED957", "JR 绿"),
        ],
    },
    "ai-programming": {
        "name_zh": "人人都能学的 AI Coding 实战课",
        "tagline": "零基础·Cursor + AI·从想法到产品上线",
        "track": "入门 / 大众线",
        "primary_hex": "#FF7B5A",
        "primary_name": "暖珊瑚",
        "text_on_primary": "#000000",
        "reasoning": "处于「入门」和「工程」之间——比 Adoption 的橙更红一档，比 Engineer 的红更柔。零基础但已经在写代码。",
        "siblings": [
            ("AI Adoption Bootcamp", "#FF914D", "纯橙，更职场"),
            ("AI Engineer Bootcamp", "#FF5757", "JR 红旗舰，更硬核"),
            ("AI Builder", "#6366F1", "进阶开发者，靛蓝"),
        ],
        "accents": [
            ("强调/CTA", "#10162F", ""),
            ("代码块底色", "#1a1a2e", "深色背景"),
            ("成功状态", "#7ED957", ""),
        ],
    },
    "ai-engineer-bootcamp": {
        "name_zh": "AI Engineer Bootcamp",
        "tagline": "12 周技术 + 12 周 P3 职业孵化·旗舰课",
        "track": "工程 / 技术线（旗舰）",
        "primary_hex": "#FF5757",
        "primary_name": "JR 红（品牌主色）",
        "text_on_primary": "#FFFFFF",
        "reasoning": "**旗舰课独占品牌主色**。12 周技术+12 周孵化的最高强度课程，配最高识别度的 JR 红。",
        "siblings": [
            ("AI Engineer 入门 (RAG)", "#38B6FF", "旗舰的轻量版，蓝色降权"),
            ("AI Builder", "#6366F1", "进阶 Vibe Coding，靛蓝"),
            ("AI Programming", "#FF7B5A", "入门级编程课，珊瑚色"),
            ("AI Solo Founder", "#D7263D", "朱砂红，避免与品牌红混淆"),
            ("OpenClaw Bootcamp", "#E84142", "OpenClaw 红，靠 logo 区分"),
        ],
        "accents": [
            ("深色 slide 底", "#10162F", "JR 深色"),
            ("数据高亮", "#FFDE59", "黄色"),
            ("代码 token", "#38B6FF", "蓝色"),
        ],
    },
    "ai-engineer-rag": {
        "name_zh": "AI Engineer 入门",
        "tagline": "37 节视频 + 25 个 Lab + 5 节 AI Tutor·从会用到能构建",
        "track": "工程 / 技术线",
        "primary_hex": "#38B6FF",
        "primary_name": "天蓝",
        "text_on_primary": "#000000",
        "reasoning": "AI Engineer 旗舰的「轻量自学版」。蓝色比红色更冷静，符合「视频+Lab 自学」的产品形态。",
        "siblings": [
            ("AI Engineer Bootcamp", "#FF5757", "旗舰直播版"),
            ("AI Builder", "#6366F1", "进阶 Vibe Coding，靛蓝偏紫"),
            ("Business Analyst", "#4ECDC4", "薄荷绿，BA"),
        ],
        "accents": [
            ("代码高亮", "#10162F", ""),
            ("成功状态", "#7ED957", ""),
            ("警告/注意", "#FF914D", ""),
        ],
    },
    "ai-builder": {
        "name_zh": "Vibe Coding 提升班",
        "tagline": "Claude Code + Cursor + Codex·全栈 + Skills/MCP/Agent",
        "track": "工程 / 技术线",
        "primary_hex": "#6366F1",
        "primary_name": "靛蓝",
        "text_on_primary": "#FFFFFF",
        "reasoning": "进阶开发者课程，靛蓝（indigo）比天蓝更沉、更「硬核」——和 Engineer 入门的天蓝拉开梯度。",
        "siblings": [
            ("AI Engineer 入门 (RAG)", "#38B6FF", "更浅的蓝，自学版"),
            ("AI Engineer Bootcamp", "#FF5757", "旗舰红"),
            ("Full-stack Bootcamp", "#10162F", "深夜蓝，更深"),
        ],
        "accents": [
            ("代码块", "#10162F", ""),
            ("Skill / MCP 标签", "#CB6CE6", "紫色 tag"),
            ("成功状态", "#10B981", "Teal"),
        ],
    },
    "web-code-bootcamp-or-learn-to-code-1": {
        "name_zh": "AI Engineer 全栈项目班",
        "tagline": "全栈 + DevOps·从计划到发布五阶段",
        "track": "工程 / 技术线",
        "primary_hex": "#10162F",
        "primary_name": "深夜蓝（JR 深色）",
        "text_on_primary": "#FFFFFF",
        "reasoning": "全栈 + DevOps 的最深技术栈，配 JR 深色作主色——沉稳、专业、像深夜在写代码。",
        "siblings": [
            ("AI Builder", "#6366F1", "靛蓝，比深夜蓝亮"),
            ("TechScrum DevOps", "#10B981", "Teal，DevOps 同主题不同色相"),
            ("Full-stack Developer Interview", "#475569", "钢蓝灰，面试专攻"),
        ],
        "accents": [
            ("CTA / 强调", "#FF5757", "JR 红做强反差"),
            ("数据", "#FFDE59", "黄色"),
            ("代码 token", "#38B6FF", "蓝色"),
        ],
    },
    "techscrum-devops": {
        "name_zh": "TechScrum DevOps 项目实训营",
        "tagline": "7 周·真实 TechScrum Web 项目·初级 DevOps 进阶",
        "track": "工程 / 技术线",
        "primary_hex": "#10B981",
        "primary_name": "青 Teal",
        "text_on_primary": "#FFFFFF",
        "reasoning": "DevOps 主题色——「管道/流水线/绿色部署」的语义直接对应 Teal。也避开了 IT Career 的标准 JR 绿。",
        "siblings": [
            ("Full-stack Bootcamp", "#10162F", "全栈深度，深夜蓝"),
            ("IT Career Coaching", "#7ED957", "JR 绿，职业全周期"),
            ("AI Builder", "#6366F1", "靛蓝"),
        ],
        "accents": [
            ("CI/CD pipeline", "#10162F", ""),
            ("alert / 失败", "#FF5757", ""),
            ("数据", "#FFDE59", ""),
        ],
    },
    "full-stack-developer-interview": {
        "name_zh": "手撕全栈面试题班",
        "tagline": "Full-stack Developer Interview·硬核刷题",
        "track": "工程 / 技术线",
        "primary_hex": "#475569",
        "primary_name": "钢蓝灰",
        "text_on_primary": "#FFFFFF",
        "reasoning": "面试课偏严肃、考试感——钢蓝灰最合适。和工程线其他课的彩色拉开，海报上一眼能识别为「刷题/考试」。",
        "siblings": [
            ("AI Engineer Bootcamp", "#FF5757", "旗舰红"),
            ("Full-stack Bootcamp", "#10162F", "全栈项目班，深夜蓝"),
        ],
        "accents": [
            ("正确答案", "#10B981", ""),
            ("错误标记", "#FF5757", ""),
            ("代码", "#FFDE59", ""),
        ],
    },
    "it-career-support": {
        "name_zh": "IT Career Coaching Bootcamp",
        "tagline": "479 节·澳洲 IT 职业全周期·找工/面试/谈薪/晋升",
        "track": "职业 / 职场线",
        "primary_hex": "#7ED957",
        "primary_name": "JR 绿",
        "text_on_primary": "#000000",
        "reasoning": "职业生涯的「成长/向上」语义——JR 品牌绿最直接。也是品牌四色之一，海报识别度高。",
        "siblings": [
            ("Business Analyst", "#4ECDC4", "BA，薄荷绿（绿+蓝过渡）"),
            ("TechScrum DevOps", "#10B981", "Teal，DevOps 同色相但更冷"),
        ],
        "accents": [
            ("CTA / 行动", "#FF5757", "JR 红"),
            ("数据/薪资", "#10162F", "深夜蓝"),
            ("徽章/认证", "#FFDE59", "黄色"),
        ],
    },
    "business-analyst": {
        "name_zh": "AI 产品经理 (BA) 训练营 + 实习",
        "tagline": "Business Analyst·本地工作经验·实习直通",
        "track": "职业 / 职场线",
        "primary_hex": "#4ECDC4",
        "primary_name": "薄荷绿",
        "text_on_primary": "#10162F",
        "reasoning": "BA 是「分析/冷静」的角色——薄荷绿（绿+蓝过渡）比 IT Career 的纯绿更「理性」。",
        "siblings": [
            ("IT Career Coaching", "#7ED957", "更暖的绿"),
            ("AI Engineer Bootcamp", "#FF5757", "工程线旗舰，红色"),
        ],
        "accents": [
            ("CTA", "#FF5757", ""),
            ("数据/图表", "#10162F", ""),
            ("文档/wireframe", "#FFDE59", ""),
        ],
    },
    "ai-marketing": {
        "name_zh": "AI 营销全链路实战 4 周",
        "tagline": "内容生产 / 投放 GEO / 私域 agent / 数据复盘",
        "track": "营销 / 创作线",
        "primary_hex": "#E63977",
        "primary_name": "玫红",
        "text_on_primary": "#FFFFFF",
        "reasoning": "营销「投放/转化/电商」语义的最强符号色。比 JR 红更深一档，避免和旗舰课撞色。",
        "siblings": [
            ("AI Image Text Workshop", "#FF2E4D", "小红书粉，平台原生色"),
            ("Omnichannel Marketing", "#FF6B9D", "桃粉，更柔"),
            ("AI Engineer Bootcamp", "#FF5757", "旗舰 JR 红"),
        ],
        "accents": [
            ("CTA / 转化按钮", "#FFDE59", "黄色撞色"),
            ("数据/ROI", "#10162F", ""),
            ("私域/agent 标签", "#CB6CE6", "紫色"),
        ],
    },
    "ai-image-text-workshop": {
        "name_zh": "AI 小红书图文 Workshop",
        "tagline": "2.5 小时·零基础·跑通定位→选题→制作→发布",
        "track": "营销 / 创作线",
        "primary_hex": "#FF2E4D",
        "primary_name": "小红书粉",
        "text_on_primary": "#FFFFFF",
        "reasoning": "直接借用小红书平台原生色——海报放在小红书上有「原生感」，CTR 通常更高。",
        "siblings": [
            ("AI Marketing", "#E63977", "玫红，更深"),
            ("Omnichannel Marketing", "#FF6B9D", "桃粉，全渠道"),
            ("AI Comic Workshop", "#CB6CE6", "紫，创意/漫画"),
        ],
        "accents": [
            ("CTA", "#FFDE59", ""),
            ("文案 highlight", "#FFFFFF", ""),
            ("数据", "#10162F", ""),
        ],
    },
    "omnichannel-marketing-workshop": {
        "name_zh": "全渠道营销 Workshop",
        "tagline": "Omnichannel Marketing·多平台投放整合",
        "track": "营销 / 创作线",
        "primary_hex": "#FF6B9D",
        "primary_name": "桃粉",
        "text_on_primary": "#FFFFFF",
        "reasoning": "营销线的「轻量小课」配色——比 AI Marketing 4 周班的玫红浅一档，比小红书粉更柔。",
        "siblings": [
            ("AI Marketing", "#E63977", "4 周深度版"),
            ("AI Image Text Workshop", "#FF2E4D", "小红书原生色"),
        ],
        "accents": [
            ("CTA", "#FFDE59", ""),
            ("数据", "#10162F", ""),
            ("渠道标签", "#CB6CE6", ""),
        ],
    },
    "ai-comic-workshop": {
        "name_zh": "AI 漫画 Workshop",
        "tagline": "AI Comic·创意创作·人人能画",
        "track": "营销 / 创作线",
        "primary_hex": "#CB6CE6",
        "primary_name": "JR 紫",
        "text_on_primary": "#FFFFFF",
        "reasoning": "漫画 = 创意/想象力——JR 品牌紫是最直接的「创作色」。",
        "siblings": [
            ("AI Image Text Workshop", "#FF2E4D", "图文小红书"),
            ("AI Marketing", "#E63977", "营销长课"),
        ],
        "accents": [
            ("CTA", "#FFDE59", ""),
            ("分镜框", "#000000", "黑色边框"),
            ("对话气泡", "#FFFFFF", ""),
        ],
    },
    "ai-solo-founder-bootcamp": {
        "name_zh": "AI 一人创业营",
        "tagline": "AI Solo Founder·一人公司·从 0 到上线",
        "track": "营销 / 创作线",
        "primary_hex": "#D7263D",
        "primary_name": "朱砂红",
        "text_on_primary": "#FFFFFF",
        "reasoning": "创业 = 热血/破局——朱砂红比 JR 红更深沉、更有「赌一把」的味道。和旗舰 AI Engineer 红错开一档。",
        "siblings": [
            ("AI Engineer Bootcamp", "#FF5757", "旗舰红，要拉开"),
            ("AI Programming", "#FF7B5A", "更浅的珊瑚"),
            ("AI Marketing", "#E63977", "玫红"),
        ],
        "accents": [
            ("CTA", "#FFDE59", "黄色破局感"),
            ("数据/营收", "#10162F", ""),
            ("MVP 标签", "#10B981", "Teal"),
        ],
    },
    "ai-accounting-pro": {
        "name_zh": "AI 会计 Pro（6 周深度）",
        "tagline": "Corporate / 事务所·month-end close·13-week 现金流",
        "track": "垂直行业线（会计/财务）",
        "primary_hex": "#3D8B6B",
        "primary_name": "苔绿",
        "text_on_primary": "#FFFFFF",
        "reasoning": "会计/财务的传统符号色——「账本绿/美元绿」。比 IT Career 的 JR 绿更深更稳，对应「6 周深度」。",
        "siblings": [
            ("AI Accounting Workshop", "#7FB69E", "4 小时引流，浅一档"),
            ("IT Career Coaching", "#7ED957", "JR 绿"),
            ("TechScrum DevOps", "#10B981", "Teal"),
        ],
        "accents": [
            ("CTA", "#FFDE59", ""),
            ("数据/金额", "#10162F", ""),
            ("警告/差异", "#FF5757", ""),
        ],
    },
    "ai-accounting-workshop": {
        "name_zh": "AI 会计 Workshop（4 小时）",
        "tagline": "会计协会 co-host·脱敏数据跑月报",
        "track": "垂直行业线（会计/财务）",
        "primary_hex": "#7FB69E",
        "primary_name": "浅苔绿",
        "text_on_primary": "#10162F",
        "reasoning": "Accounting Pro 的浅色配对——4 小时引流课配更亲和的浅绿，海报放一起一深一浅成系列。",
        "siblings": [
            ("AI Accounting Pro", "#3D8B6B", "6 周进阶版，深一档"),
            ("Claude Cowork SME", "#C96442", "中小企业主同观众但配色不同"),
        ],
        "accents": [
            ("CTA", "#FF914D", "橙色突出"),
            ("数据", "#10162F", ""),
        ],
    },
    "ai-copilot": {
        "name_zh": "AI 数据分析 & Copilot 自动化实战",
        "tagline": "Excel + Copilot·数据分析·自动化",
        "track": "垂直行业线（数据/办公）",
        "primary_hex": "#F59E0B",
        "primary_name": "金黄/琥珀",
        "text_on_primary": "#10162F",
        "reasoning": "Excel/数据/办公自动化 = 金黄琥珀色。和 Essentials 的 JR 黄区分（更暖更深），不会撞色。",
        "siblings": [
            ("AI Essentials Bootcamp", "#FFDE59", "JR 黄，更亮"),
            ("AI Accounting Pro", "#3D8B6B", "财务深绿"),
        ],
        "accents": [
            ("CTA", "#10162F", ""),
            ("数据/图表", "#FF5757", ""),
            ("Copilot 标签", "#0078D4", "Microsoft 蓝（如出现）"),
        ],
    },
    "claude-cowork-workshop": {
        "name_zh": "Claude Cowork Workshop（3 小时通用）",
        "tagline": "Anthropic Claude Cowork·桌面 App·非技术岗",
        "track": "合作品牌线（Anthropic）",
        "primary_hex": "#D97757",
        "primary_name": "Anthropic 珊瑚",
        "text_on_primary": "#FFFFFF",
        "reasoning": "**直接采用 Anthropic 官方品牌色**——联名课沿用合作方主色，强化品牌联想。",
        "siblings": [
            ("Claude Cowork SME Workshop", "#C96442", "中小企业主版，深一档"),
            ("OpenClaw Bootcamp", "#E84142", "OpenClaw 红，另一个联名品牌"),
            ("AI Programming", "#FF7B5A", "暖珊瑚，入门编程"),
        ],
        "accents": [
            ("Anthropic black", "#000000", ""),
            ("Connector 标签", "#FFDE59", ""),
            ("CTA", "#10162F", ""),
        ],
    },
    "claude-cowork-sme-workshop": {
        "name_zh": "Claude Cowork SME Workshop（4 小时·中小企业主）",
        "tagline": "一人公司 / 1-3 人小团队·餐饮零售设计咨询",
        "track": "合作品牌线（Anthropic）",
        "primary_hex": "#C96442",
        "primary_name": "Anthropic 棕橙",
        "text_on_primary": "#FFFFFF",
        "reasoning": "Cowork 系列深一档——SME 版给老板/创始人，比通用 3h 版更「商务」。",
        "siblings": [
            ("Claude Cowork Workshop", "#D97757", "通用 3h 版"),
            ("AI Solo Founder", "#D7263D", "创业营，朱砂红"),
        ],
        "accents": [
            ("Anthropic black", "#000000", ""),
            ("数据/ROI", "#FFDE59", ""),
            ("CTA", "#10162F", ""),
        ],
    },
    "openclaw-bootcamp": {
        "name_zh": "OpenClaw 4 周个人 AI 助手 Bootcamp",
        "tagline": "OpenClaw·个人定制·从工具到日常",
        "track": "合作品牌线（OpenClaw）",
        "primary_hex": "#E84142",
        "primary_name": "OpenClaw 红",
        "text_on_primary": "#FFFFFF",
        "reasoning": "**采用 OpenClaw 官方品牌色** —— 已在 OpenClaw 现有材料中大量使用（phase 头部渐变、Quest 标签、live 高亮、tool.oc 类）。和 AI Engineer Bootcamp JR 红 `#FF5757` 都是红色系，靠 OpenClaw logo + 课程名做区分。",
        "siblings": [
            ("OpenClaw Workshop", "#F87171", "4 小时入门版，浅一档同色系"),
            ("AI Engineer Bootcamp", "#FF5757", "JR 旗舰红，靠 logo 区分"),
            ("AI Solo Founder", "#D7263D", "朱砂红，创业课"),
            ("Claude Cowork Workshop", "#D97757", "Anthropic 珊瑚联名"),
        ],
        "accents": [
            ("CTA", "#FFDE59", "JR 黄反差"),
            ("Plugin / Skill 标签", "#CB6CE6", "紫色"),
            ("数据", "#10162F", ""),
        ],
    },
    "openclaw-workshop": {
        "name_zh": "OpenClaw 4 小时沉浸式工作坊",
        "tagline": "OpenClaw·入门·4 小时跑通",
        "track": "合作品牌线（OpenClaw）",
        "primary_hex": "#F87171",
        "primary_name": "OpenClaw 浅红",
        "text_on_primary": "#10162F",
        "reasoning": "OpenClaw Bootcamp 红 (#E84142) 的浅色配对——4 小时入门课配更亲和的浅红，海报放一起一深一浅成系列（同 Anthropic Cowork D97757/C96442 的搭配逻辑）。",
        "siblings": [
            ("OpenClaw Bootcamp", "#E84142", "4 周进阶版，深一档"),
            ("AI Programming", "#FF7B5A", "暖珊瑚，入门编程"),
            ("Claude Cowork Workshop", "#D97757", "Anthropic 联名"),
        ],
        "accents": [
            ("CTA", "#FFDE59", ""),
            ("Plugin 标签", "#CB6CE6", ""),
            ("数据", "#10162F", ""),
        ],
    },
}


def build_prompt(slug, spec):
    """Build a copy-paste-ready Chinese prompt block for AI image / poster gen."""
    accent_lines = "\n".join(
        f"- {use}：{hex_}" + (f"（{note}）" if note else "")
        for use, hex_, note in spec["accents"]
    )
    forbidden_lines = "\n".join(
        f"- {name}：{hex_}（{note}）"
        for name, hex_, note in spec["siblings"]
    )
    return f"""设计任务：为「{spec['name_zh']}」做配图 / 海报 / banner / 封面图。
课程定位：{spec['tagline']}（{spec['track']}）

═══ 主题色（必须严格执行）═══
主色：{spec['primary_hex']}（{spec['primary_name']}）
主色上的文字色：{spec['text_on_primary']}
主色应占画面 ≥ 30%，用作大色块、标题底色或主背景

═══ 视觉风格 ═══
Neo-Brutalism 极简扁平：
- 所有元素 3px 纯黑（#000）边框
- 卡片 / 按钮 / 标签带 6px×6px 黑色硬阴影（box-shadow: 6px 6px 0 #000）
- 不要渐变、不要发光、不要拟物质感、不要 3D
- 转折硬朗、留白干脆、对比强烈

═══ 配色规则（搭配主色用）═══
JR 品牌四色（永远可用）：黑 #000000 / 白 #FFFFFF / 暖背景 #fff1e7 / 深色 #10162F

辅助色（只在指定场景用）：
{accent_lines}

═══ 严格避开的色 ═══
下列是其他课程的主色，海报放在一起会混淆品牌识别，本课禁止大面积使用：
{forbidden_lines}

═══ 字体 ═══
- 标题：粗体无衬线（Bricolage Grotesque / 思源黑体 Heavy）
- 中文正文：思源黑体 / 苹方
- 数字 / 数据：Space Mono / DM Sans
- 标题字号至少是正文的 3 倍

═══ 输出 ═══
- 如果是 Midjourney / DALL-E / Imagen / Nano Banana：直接出 PNG，画幅 3:4（小红书）或 9:16（视频号/抖音）
- 如果是 Claude / GPT 写 HTML：用 inline style，符合上述 Neo-Brutalism 规范，可直接 puppeteer 渲染
- 如果是 SVG：扁平矢量，路径全部带 stroke="#000" stroke-width="3"
"""


def render_design_md(slug, spec):
    needs_verify = spec.get("needs_verification", False)
    verify_note = ""
    if needs_verify:
        verify_note = (
            "\n> ⚠️ **待核对**：此色为占位值，需要从 OpenClaw 官方 logo / "
            "现有海报 (`curriculum/quest-posters.html`、`curriculum/posters.html`) "
            "抓取真实品牌色后替换。\n"
        )

    siblings_table = "\n".join(
        f"| {name} | `{hex_}` | {note} |"
        for name, hex_, note in spec["siblings"]
    )
    accents_table = "\n".join(
        f"| {use} | `{hex_}` | {note} |"
        for use, hex_, note in spec["accents"]
    )
    prompt = build_prompt(slug, spec)

    return f"""# {spec['name_zh']} — Design Spec

> {spec['tagline']}
> 视觉系统所属：**{spec['track']}**

本文档定义本课程的视觉主色与海报/Slide/页面应用规范。色卡来源：`curriculum/CLAUDE.md`、`curriculum/DESIGN.md`（JR 品牌四色 + Neo-Brutalism 风格）。
{verify_note}
---

## 🎨 AI 出图 Prompt（市场 / 产品 copy & paste）

把下面这一整段粘贴给 Claude / GPT / Midjourney / DALL-E / Nano Banana 等任何 AI 模型，它就会按本课主题色出图。也可以在 `curriculum/theme-colors.html` 总览页一键复制。

```
{prompt}
```

---

## 主题色

| 属性 | 值 |
|---|---|
| **主色 (primary)** | `{spec['primary_hex']}` |
| **色名** | {spec['primary_name']} |
| **主色上文字色** | `{spec['text_on_primary']}` |

### 选色理由

{spec['reasoning']}

### 色卡

```
█████████████████████████  {spec['primary_hex']}  ({spec['primary_name']})
```

> 在 HTML/Slide 里使用时，以变量形式声明：`--theme-primary: {spec['primary_hex']};`

---

## 与同系/相邻课程的区分

为避免海报放在一起认错，本课主色与下列课程明确区隔：

| 相邻课程 | 主色 | 区分点 |
|---|---|---|
{siblings_table}

---

## 辅助色 / 强调色

主色 + JR 品牌四色（黑 `#000` / 白 `#FFFFFF` / 暖背景 `#fff1e7` / JR 深色 `#10162F`）作为基础。其余强调色按下表使用：

| 用途 | 色值 | 备注 |
|---|---|---|
{accents_table}

---

## 应用范围

| 触点 | 主色用法 |
|---|---|
| 小红书海报 (1242×1660) | 大块背景 / 标题 Highlight 块 |
| 朋友圈封面 | 标题底色 |
| MP 公众号文章封面 | 大色块 + 标题文字底色 |
| 视频号 / 抖音封面 (1080×1920) | 标题底色 |
| Slide Deck 章节封面 | `<Slide bg={{theme.primary}}>` |
| `public/curriculum.html` 顶部 banner | 整条 banner 背景 |
| 课程卡片 hover 描边 | `border: 3px solid {{primary}}` |
| 标签 / Tag | `<Tag bg={{primary}}>` |
| 数据图表主柱 | bar / line 主色 |

### Neo-Brutalism 默认外框

不论主色是什么，沿用 JR 品牌的 Neo-Brutalism 框架：

```css
border: 3px solid #000;
box-shadow: 6px 6px 0 #000;
/* hover: */
box-shadow: none;
transform: translate(6px, 6px);
```

---

## 禁忌

- ❌ 不要把主色用在正文长段落（仅用于标题 / 强调 / 标签 / 色块）
- ❌ 不要在主色背景上叠加另一个高饱和色（除非是已声明的强调对比色）
- ❌ 不要换成接近的色相（如把本课的橙改成 Adoption 的橙），保持课程识别度
- ❌ 海报不要让主色占比 < 20%，否则识别度归零
- ❌ 不要在同一张海报里同时使用本课主色和「相邻课程主色」——会让两节课看起来是同一节

---

## 落地检查清单

- [x] `public/outline.json` 顶层 `themeColor` 字段（已写入）
- [ ] `public/curriculum.html` 的 banner / H1 区域使用主色
- [ ] `public/poster.html`（如有）的封面色块改为主色
- [ ] Slide Deck 封面 slide bg 改为主色
- [ ] `curriculum/posters.html` 卡片的描边/底色匹配主色
- [ ] xhs-poster / mp-article / bootcamp-video 三个 skill 在生成时读取 `themeColor` 字段
"""


def render_theme_colors_html():
    """Master cheatsheet page with click-to-copy buttons."""
    # Group by track
    by_track = {}
    for slug, spec in COURSES.items():
        by_track.setdefault(spec["track"], []).append((slug, spec))

    # Build prompts as a JS object so click-to-copy works
    prompts_js = {
        slug: build_prompt(slug, spec) for slug, spec in COURSES.items()
    }
    prompts_json = json.dumps(prompts_js, ensure_ascii=False, indent=2)

    cards_html = []
    for track, courses in by_track.items():
        cards_html.append(f'<h2 class="track">{track}</h2>')
        cards_html.append('<div class="grid">')
        for slug, spec in courses:
            verify = (
                '<div class="verify">⚠️ 待核对真实品牌色</div>'
                if spec.get("needs_verification")
                else ""
            )
            cards_html.append(f"""
            <article class="card" style="--primary: {spec['primary_hex']}; --on-primary: {spec['text_on_primary']};">
                <div class="swatch">
                    <div class="hex">{spec['primary_hex']}</div>
                    <div class="cname">{spec['primary_name']}</div>
                </div>
                <div class="body">
                    <h3>{spec['name_zh']}</h3>
                    <p class="tagline">{spec['tagline']}</p>
                    {verify}
                    <button class="copy-btn" data-slug="{slug}">📋 复制 AI 出图 Prompt</button>
                    <a class="spec-link" href="./{slug}/DESIGN.md">查看完整规范 →</a>
                </div>
            </article>""")
        cards_html.append("</div>")

    cards_html_str = "\n".join(cards_html)

    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>JR Academy 课程主题色总览 · Course Theme Colors</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{
    font-family: 'Bricolage Grotesque', 'PingFang SC', -apple-system, sans-serif;
    background: #fff1e7;
    color: #10162F;
    padding: 40px 24px 80px;
    line-height: 1.5;
}}
.container {{ max-width: 1400px; margin: 0 auto; }}
header {{
    border: 3px solid #000;
    background: #FFDE59;
    padding: 32px 28px;
    margin-bottom: 40px;
    box-shadow: 6px 6px 0 #000;
}}
header h1 {{ font-size: clamp(28px, 4vw, 44px); font-weight: 900; margin-bottom: 8px; }}
header p {{ font-size: 16px; max-width: 880px; }}
header code {{ background: #000; color: #FFDE59; padding: 2px 6px; border-radius: 2px; font-family: 'Space Mono', monospace; font-size: 14px; }}
h2.track {{
    font-size: clamp(22px, 3vw, 30px);
    margin: 48px 0 20px;
    padding: 8px 16px;
    background: #000;
    color: #fff;
    display: inline-block;
    transform: rotate(-1deg);
}}
.grid {{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 24px;
}}
.card {{
    border: 3px solid #000;
    background: #fff;
    box-shadow: 6px 6px 0 #000;
    transition: transform .12s, box-shadow .12s;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}}
.card:hover {{ transform: translate(2px, 2px); box-shadow: 4px 4px 0 #000; }}
.swatch {{
    background: var(--primary);
    color: var(--on-primary);
    padding: 28px 20px;
    border-bottom: 3px solid #000;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}}
.swatch .hex {{
    font-family: 'Space Mono', 'JetBrains Mono', monospace;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;
}}
.swatch .cname {{
    font-size: 14px;
    opacity: .85;
    font-weight: 600;
}}
.body {{ padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 10px; }}
.body h3 {{
    font-size: 17px;
    font-weight: 800;
    line-height: 1.3;
}}
.body .tagline {{ font-size: 13px; color: #555; line-height: 1.45; min-height: 36px; }}
.verify {{
    background: #FFDE59;
    border: 2px solid #000;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 700;
}}
.copy-btn {{
    margin-top: 8px;
    border: 3px solid #000;
    background: var(--primary);
    color: var(--on-primary);
    font: inherit;
    font-weight: 800;
    font-size: 14px;
    padding: 10px 14px;
    cursor: pointer;
    box-shadow: 4px 4px 0 #000;
    transition: transform .1s, box-shadow .1s;
}}
.copy-btn:hover {{ transform: translate(2px, 2px); box-shadow: 2px 2px 0 #000; }}
.copy-btn.copied {{ background: #7ED957 !important; color: #000 !important; }}
.spec-link {{
    font-size: 12px;
    color: #10162F;
    text-decoration: none;
    border-bottom: 2px solid #10162F;
    align-self: flex-start;
    font-weight: 600;
    padding-bottom: 1px;
}}
.spec-link:hover {{ color: #FF5757; border-color: #FF5757; }}
.usage {{
    margin-top: 64px;
    border: 3px solid #000;
    background: #fff;
    padding: 28px;
    box-shadow: 6px 6px 0 #000;
}}
.usage h2 {{ font-size: 22px; margin-bottom: 14px; }}
.usage ol {{ padding-left: 22px; }}
.usage li {{ margin-bottom: 8px; font-size: 15px; }}
.usage code {{ background: #f0f0f0; padding: 2px 6px; border-radius: 2px; font-family: 'Space Mono', monospace; font-size: 13px; }}
.toast {{
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: #10162F;
    color: #fff;
    padding: 12px 24px;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #FF5757;
    font-weight: 700;
    transition: transform .3s;
    z-index: 1000;
}}
.toast.show {{ transform: translateX(-50%) translateY(0); }}
@media (max-width: 600px) {{
    body {{ padding: 20px 12px 60px; }}
    .grid {{ grid-template-columns: 1fr; }}
}}
</style>
</head>
<body>
<div class="container">
<header>
    <h1>🎨 课程主题色总览</h1>
    <p>JR Academy 23 门课程的视觉主色。打开后找到课程，点击 <code>📋 复制 AI 出图 Prompt</code> 按钮，粘贴给 Claude / GPT / Midjourney / DALL-E / Nano Banana / 任何 AI 模型，它就会按本课主题色出图。色卡与选色理由详见每门课目录下的 <code>DESIGN.md</code>。</p>
</header>

{cards_html_str}

<section class="usage">
    <h2>📖 怎么用</h2>
    <ol>
        <li>找到你要做海报/封面/插图的课程，比如 <strong>AI Engineer Bootcamp</strong></li>
        <li>点击卡片上的 <code>📋 复制 AI 出图 Prompt</code> 按钮（已自动复制到剪贴板）</li>
        <li>打开 Claude / ChatGPT / Midjourney / 你常用的 AI 工具，粘贴 prompt</li>
        <li>在 prompt 后面补充你的具体需求，例如「再加一句标题：『12 周从 0 到 AI 工程师』，画幅 3:4 小红书」</li>
        <li>AI 会按指定的主题色 + Neo-Brutalism 风格出图，海报放一起品牌识别一致</li>
    </ol>
    <p style="margin-top: 14px; font-size: 14px; color: #555;">⚠️ 如果你的输出和品牌色不一致，多半是 AI 没严格遵守 hex 值——把 prompt 里 <code>主色：#XXXXXX</code> 那一行单独再说一次"严格使用 #XXXXXX，不要换其他颜色"通常就能纠正。</p>
</section>

</div>

<div class="toast" id="toast">✅ 已复制 Prompt — 现在粘贴给 AI 即可</div>

<script>
const PROMPTS = {prompts_json};

document.querySelectorAll('.copy-btn').forEach(btn => {{
    btn.addEventListener('click', async () => {{
        const slug = btn.dataset.slug;
        const text = PROMPTS[slug];
        try {{
            await navigator.clipboard.writeText(text);
            btn.classList.add('copied');
            btn.textContent = '✅ 已复制！';
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => {{
                toast.classList.remove('show');
                btn.classList.remove('copied');
                btn.textContent = '📋 复制 AI 出图 Prompt';
            }}, 2000);
        }} catch (e) {{
            alert('复制失败，请手动复制：\\n\\n' + text);
        }}
    }});
}});
</script>
</body>
</html>
"""


def main():
    n_md = 0
    for slug, spec in COURSES.items():
        course_dir = ROOT / slug
        if not course_dir.is_dir():
            print(f"[skip] {slug} (no directory)")
            continue
        (course_dir / "DESIGN.md").write_text(render_design_md(slug, spec), encoding="utf-8")
        n_md += 1
        print(f"[md] {slug}")

    html_path = ROOT / "theme-colors.html"
    html_path.write_text(render_theme_colors_html(), encoding="utf-8")
    print(f"[html] {html_path}")

    print(f"\nGenerated {n_md} DESIGN.md + 1 theme-colors.html")


if __name__ == "__main__":
    main()
