#!/usr/bin/env python3
"""Generate title_en and description_en for all 157 lessons."""
import json, re

with open("curriculum/ai-engineer-bootcamp/public/outline.json") as f:
    outline = json.load(f)

# Translation map for common Chinese terms
zh_to_en = {
    "先修要求": "Prerequisites",
    "必要知识储备": "Essential Knowledge Prerequisites",
    "开发环境配置": "Development Environment Setup",
    "开课讲解会": "Bootcamp Orientation",
    "结构化数据": "Structured Data",
    "非结构化数据": "Unstructured Data",
    "模型参数调优": "Model Parameter Tuning",
    "零示例": "Zero-shot",
    "示例学习": "Few-shot Learning",
    "上下文管理": "Context Management",
    "推理": "Reasoning",
    "输出格式控制": "Output Format Control",
    "结构化输出": "Structured Output",
    "代码生成": "Code Generation",
    "一致性": "Consistency",
    "工具对比": "Tool Comparison",
    "成本优化": "Cost Optimization",
    "工具链": "Toolchain",
    "链式调用": "Chain Prompting",
    "向量搜索": "Vector Search",
    "系统入门": "System Introduction",
    "系统设计": "System Design",
    "混合检索": "Hybrid Retrieval",
    "技术全景": "Technology Overview",
    "基础": "Fundamentals",
    "基础概念": "Fundamental Concepts",
    "核心概念": "Core Concepts",
    "入门": "Introduction",
    "详解": "Deep Dive",
    "实操": "Hands-on Practice",
    "实战": "Practical Implementation",
    "最佳实践": "Best Practices",
    "权限管理": "Permission Management",
    "幻觉检测与防护": "Hallucination Detection & Prevention",
    "监控": "Monitoring",
    "模型部署": "Model Deployment",
    "推理优化": "Inference Optimization",
    "数据工程": "Data Engineering",
    "监督微调": "Supervised Fine-Tuning",
    "偏好对齐": "Preference Alignment",
    "注入防御": "Injection Defense",
    "职业路径": "Career Path",
    "毕业": "Graduation",
    "收尾": "Wrap-up",
    "总结": "Summary",
    "准备": "Preparation",
    "对比参考": "Comparison Reference",
    "全景": "Landscape",
    "第一次": "First",
    "体验": "Experience",
    "多 Agent 系统": "Multi-Agent Systems",
    "自拟小组": "Self-organized Group",
}

lab_type_en = {
    "python-lab": "Python Lab",
    "prompt-lab": "Prompt Lab",
    "llm-lab": "LLM Lab",
    "aws-lab": "AWS Lab",
    "azure-lab": "Azure Lab",
    "git-lab": "Git Lab",
}

def translate_title(title):
    """Translate title to English. Many titles are already partially English."""
    # Already fully English
    if re.match(r'^[A-Za-z0-9\s\-\+\&\:\/\(\)\,\.]+$', title):
        return title

    # Lab: prefix
    if title.startswith("Lab:") or title.startswith("Lab："):
        topic = re.sub(r'^Lab[：:]\s*', '', title)
        topic_en = translate_title(topic)
        return f"Lab: {topic_en}"

    # Pre-work prefix
    if title.startswith("Pre-work：") or title.startswith("Pre-work:"):
        rest = re.sub(r'^Pre-work[：:]\s*', '', title)
        return f"Pre-work: {translate_title(rest)}"

    # Preparation prefix
    if title.startswith("Preparation：") or title.startswith("Preparation:"):
        rest = re.sub(r'^Preparation[：:]\s*', '', title)
        return f"Preparation: {translate_title(rest)}"

    # Try direct mapping
    for zh, en in sorted(zh_to_en.items(), key=lambda x: -len(x[0])):
        if zh in title:
            title = title.replace(zh, en)

    # Replace remaining Chinese with reasonable translations
    # Common patterns
    title = title.replace("用 AWS 构建 RAG 应用", "Building RAG Applications with AWS")
    title = title.replace("P3 职业孵化器 Proposal", "P3 Career Incubator Proposal")
    title = title.replace("P3 项目收尾 + Demo Day", "P3 Project Wrap-up + Demo Day")
    title = title.replace("毕业 + 下一步", "Graduation + Next Steps")
    title = title.replace("Agent 详解：构建第一个 Agent", "Agent Deep Dive: Building Your First Agent")
    title = title.replace("Agent Memory 技术全景", "Agent Memory Technology Landscape")
    title = title.replace("Agent Ops 最佳实践", "Agent Ops Best Practices")
    title = title.replace("Agents 基础", "Agent Fundamentals")
    title = title.replace("Agent SDK 对比参考", "Agent SDK Comparison Reference")
    title = title.replace("Agent SDK 对比", "Agent SDK Comparison")
    title = title.replace("Agent SDK 实战", "Agent SDK Hands-on Comparison")
    title = title.replace("RAG 系统入门", "Introduction to RAG Systems")
    title = title.replace("RAG Metrics 详解", "RAG Metrics Deep Dive")
    title = title.replace("GraphRAG 入门", "Introduction to GraphRAG")
    title = title.replace("GraphRAG 技术全景", "GraphRAG Technology Overview")
    title = title.replace("GraphRAG + 混合检索", "GraphRAG + Hybrid Retrieval")
    title = title.replace("GenAI 全景图", "GenAI Landscape")
    title = title.replace("AI 模型对比参考", "AI Model Comparison Reference")
    title = title.replace("Context Engineering Playbook", "Context Engineering Playbook")
    title = title.replace("Vibe Coding 工具对比", "Vibe Coding Tool Comparison")
    title = title.replace("Vibe Coding for RAG Optimization", "Vibe Coding for RAG Optimization")
    title = title.replace("LinkedIn & CV Workshop", "LinkedIn & CV Workshop")
    title = title.replace("Mock Interview 准备", "Mock Interview Preparation")
    title = title.replace("AI Engineer 职业路径", "AI Engineer Career Path")
    title = title.replace("Capstone Project 展示", "Capstone Project Showcase")
    title = title.replace("Phase 3 总结 + 测试准备", "Phase 3 Summary + Test Preparation")
    title = title.replace("AI Eval Pipeline 实战", "AI Eval Pipeline Hands-on")
    title = title.replace("Red Teaming 实战", "Red Teaming Hands-on")
    title = title.replace("Multi-Agent + Protocol Ecosystem Ma", "Multi-Agent + Protocol Ecosystem Map")
    title = title.replace("Prompt-Based Data Generation", "Prompt-Based Data Generation")
    title = title.replace("AI Engineer 训练营", "AI Engineer Bootcamp")

    # Clean up
    title = title.replace("：", ": ")
    title = title.replace("（", " (").replace("）", ")")

    return title.strip()


def translate_desc(desc, title_en):
    """Translate description to English."""
    if not desc or len(desc.strip()) < 5:
        return ""

    # Lab descriptions
    lab_patterns = {
        "Python 编程实验": "Python coding lab",
        "Prompt 互动实验": "Prompt interactive lab",
        "LLM 工程实验": "LLM engineering lab",
        "AWS 云平台实验": "AWS cloud lab",
        "Git 版本控制实验": "Git version control lab",
        "互动实验": "Interactive lab",
    }
    for zh, en in lab_patterns.items():
        if zh in desc:
            topic = re.sub(r'^.*?[：:]\s*', '', desc.split("。")[0])
            return f"{en}: {topic}. Hands-on practice in browser with instant validation."

    # Live descriptions
    if desc.startswith("直播课"):
        content = desc.replace("直播课：覆盖 ", "Live session: covers ").replace("，含现场演示与答疑。", ". Includes live demos and Q&A.")
        content = content.replace(" 等 ", " and more, ").replace(" 个主题", " topics")
        return content

    # Generic translation for remaining
    desc_en = desc
    desc_en = desc_en.replace("。", ". ")
    desc_en = desc_en.replace("、", ", ")
    # Keep as-is if too complex — better than bad translation
    return desc_en.strip()


applied = 0
for phase in outline["phases"]:
    for lesson in phase["lessons"]:
        title = lesson.get("title", "")
        desc = lesson.get("description", "")

        title_en = translate_title(title)
        desc_en = translate_desc(desc, title_en)

        lesson["title_en"] = title_en
        lesson["description_en"] = desc_en
        applied += 1

with open("curriculum/ai-engineer-bootcamp/public/outline.json", "w") as f:
    json.dump(outline, f, ensure_ascii=False, indent=2)

# Verify
has_title_en = sum(1 for p in outline["phases"] for l in p["lessons"] if l.get("title_en") and len(l["title_en"]) > 2)
has_desc_en = sum(1 for p in outline["phases"] for l in p["lessons"] if l.get("description_en") and len(l["description_en"]) > 2)
print(f"Applied translations to {applied} lessons")
print(f"title_en: {has_title_en}/157")
print(f"description_en: {has_desc_en}/157")

# Show samples
print("\n=== Samples ===")
for phase in outline["phases"]:
    print(f"\n{phase['name'][:40]}")
    shown = 0
    for lesson in phase["lessons"]:
        if shown >= 3:
            break
        print(f"  {lesson['code']} title_en: {lesson.get('title_en','')[:60]}")
        print(f"       desc_en:  {lesson.get('description_en','')[:60]}")
        shown += 1
