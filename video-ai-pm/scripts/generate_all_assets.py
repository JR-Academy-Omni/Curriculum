import asyncio
import edge_tts
import os
import subprocess
import re
import wave
import struct
import math

VOICEOVER_DIR = "/Users/lightman/Documents/sites/jr-academy-ai/curriculum/video-ai-pm/src/assets/voiceover"
BGM_DIR = "/Users/lightman/Documents/sites/jr-academy-ai/curriculum/video-ai-pm/src/assets/bgm"
VOICE = "zh-CN-XiaoxiaoNeural"
RATE = "+5%"

SCENES = [
    ("00-cover.mp3", "2026 年，传统的产品经理和 B A，正在经历职业生涯最大的洗牌。"),
    ("01-trend.mp3", "仅仅会提问是不够的。真正的 A I 产品经理，是能把技术转化为商业价值的操盘手。"),
    ("02-gap.mp3", "你需要懂 A I P R D 的写法，懂如何评估幻觉，更要懂如何在成本和体验之间找到平衡。"),
    ("03-outcomes.mp3", "12 周，带你从业务思维转向 A I 产品架构：涵盖自动化流设计、提示词工程与商业化落地。"),
    ("04-p3.mp3", "最核心的：在 P 3 实习中，你将担任 P O，带领开发团队把想法变成真实的上线产品。"),
    ("05-package.mp3", "别再观望了。加入匠人 A I 产品经理实战班，开启你的职业新篇章。"),
]

def get_duration(file_path):
    try:
        result = subprocess.run(["afinfo", file_path], capture_output=True, text=True)
        match = re.search(r"estimated duration:\s+([\d\.]+)\s+sec", result.stdout)
        if match:
            return float(match.group(1))
    except Exception as e:
        pass
    return 0

async def generate_voiceovers():
    if not os.path.exists(VOICEOVER_DIR):
        os.makedirs(VOICEOVER_DIR)

    durations = {}
    for filename, text in SCENES:
        output_path = os.path.join(VOICEOVER_DIR, filename)
        
        # 优化念法
        processed_text = text.replace("PRD", "P R D")
        processed_text = processed_text.replace("BA", "B A")
        processed_text = processed_text.replace("AI", "A I")
        processed_text = processed_text.replace("PO", "P O")

        communicate = edge_tts.Communicate(processed_text, VOICE, rate=RATE)
        await communicate.save(output_path)
        duration = get_duration(output_path)
        durations[filename] = duration
        print(f"FILE: {filename} | DURATION: {duration:.2f}s")
    
    return durations

def generate_bgm_wav(output_path, duration_sec=40):
    sample_rate = 44100
    n_samples = int(sample_rate * duration_sec)
    with wave.open(output_path, 'w') as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(sample_rate)
        for i in range(n_samples):
            t = i / sample_rate
            # 更加商务、知性的 BGM
            beat_cycle = t % 0.8
            kick = 0.8 * math.exp(-8 * beat_cycle) * math.sin(2 * math.pi * 50 * math.exp(-4 * beat_cycle))
            bass = 0.2 * math.sin(2 * math.pi * 40 * t)
            pad = 0.15 * (math.sin(2 * math.pi * 261.63 * t) + math.sin(2 * math.pi * 329.63 * t))
            sample = (kick + bass + pad) * 0.3
            sample = max(-1, min(1, sample))
            f.writeframes(struct.pack('<h', int(sample * 32767)))

if __name__ == "__main__":
    durations = asyncio.run(generate_voiceovers())
    if not os.path.exists(BGM_DIR):
        os.makedirs(BGM_DIR)
    total_len = sum(durations.values()) + 2
    generate_bgm_wav(os.path.join(BGM_DIR, "main.mp3"), duration_sec=total_len)
    print(f"\nNEW TOTAL DURATION: {total_len:.2f}s")
