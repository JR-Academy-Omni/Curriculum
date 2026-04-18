import asyncio
import edge_tts
import os
import subprocess
import re

VOICEOVER_DIR = "/Users/lightman/Documents/sites/jr-academy-ai/curriculum/video-ai-engineer/src/assets/voiceover"
VOICE = "zh-CN-XiaoxiaoNeural"

SCENES = [
    ("00-cover.mp3", "2026 · AI Engineer 的岗位基线，已经换代了。", 2.8),
    ("01-gap.mp3", "还停留在拼 Prompt、调 API？2026 的 AI 岗位基线，已经整体右移了。", 3.8),
    ("02-chatroom.mp3", "同事群聊 GraphRAG、Eval、MCP 的时候，你能接上话吗？", 3.8),
    ("03-outcomes.mp3", "12 周掌握：生产级 RAG、三大 SDK、多智能体协作、微调评估。", 3.8),
    ("04-structure.mp3", "课程拆成 10 个 Phase，Agent 独占 5 个。Memory 和 Harness，市面上几乎没人讲。", 4.8),
    ("05-stack.mp3", "15 个以上 2026 真实工具栈，每一个都配独立 Lab，不是 PPT 点名带过。", 3.8),
    ("06-rag.mp3", "P3 RAG 整整 45 节课。向量检索、GraphRAG、工程化、RAGAS 评估，全链路。", 4.8),
    ("07-agent.mp3", "Agent 拆成五层：Capability, Core, Multi-Agent, Memory, Harness，每层都能成项目。", 4.8),
    ("08-labs.mp3", "68 个浏览器内互动 Lab，每一个都是独立 Lesson，可以单独追踪进度。", 3.8),
    ("09-projects.mp3", "7 个大项目，从 RAG 到 Multi-Agent，全部能部署、能讲 STAR 故事。", 4.8),
    ("10-timeline.mp3", "学完不是终点。后面还有 12 周 P3 职业孵化，陪你拿 Offer。", 4.8),
    ("11-feedback.mp3", "学员反馈都很日常，没有夸张数字。就是普通工程师的成长记录。", 3.8),
    ("12-package.mp3", "183 节课、68 个 Lab、7 个项目，加上顶级大厂导师的 Code Review。", 4.8),
    ("13-cta.mp3", "如果今年只打算做一件 AI 投资，推荐看看 AI Engineer Bootcamp。主页搜「匠人 AI」。", 5.8),
]

def get_duration(file_path):
    try:
        result = subprocess.run(["afinfo", file_path], capture_output=True, text=True)
        match = re.search(r"estimated duration:\s+([\d\.]+)\s+sec", result.stdout)
        if match:
            return float(match.group(1))
    except Exception as e:
        print(f"Error getting duration: {e}")
    return 0

async def generate_voiceovers():
    if not os.path.exists(VOICEOVER_DIR):
        os.makedirs(VOICEOVER_DIR)

    for filename, text, limit in SCENES:
        output_path = os.path.join(VOICEOVER_DIR, filename)
        
        # Initial guess for rate
        rate = 80
        
        processed_text = text.replace("GraphRAG", "Graph R A G")
        processed_text = processed_text.replace("MCP", "M C P")
        processed_text = processed_text.replace("STAR", "S T A R")
        processed_text = processed_text.replace("SDK", "S D K")

        while rate < 200:
            communicate = edge_tts.Communicate(processed_text, VOICE, rate=f"+{rate}%")
            await communicate.save(output_path)
            duration = get_duration(output_path)
            
            if duration <= limit:
                print(f"SUCCESS: {filename} | Rate: +{rate}% | Duration: {duration:.2f}s | Limit: {limit}s")
                break
            else:
                # Calculate new rate based on duration gap
                # duration / limit = (1 + new_rate/100) / (1 + current_rate/100)
                # (1 + new_rate/100) = (duration / limit) * (1 + current_rate/100)
                # new_rate = 100 * ((duration / limit) * (1 + rate/100) - 1)
                new_rate = int(100 * ((duration / limit) * (1 + rate/100) - 1)) + 5
                if new_rate <= rate:
                    new_rate = rate + 10
                rate = new_rate
                print(f"RETRY: {filename} | Target: {limit}s | Current: {duration:.2f}s | Trying rate: +{rate}%")

if __name__ == "__main__":
    asyncio.run(generate_voiceovers())
