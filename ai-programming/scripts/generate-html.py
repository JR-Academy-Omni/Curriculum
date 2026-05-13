#!/usr/bin/env python3
"""
从 outline.json 自动生成所有静态 HTML 页面：
- curriculum.html  课程总览（hero + stats + 13 phase 卡片 + 双 tier 对比 + 定价）
- outline.html     详细 lesson 列表（按 phase 分组，所有 lesson 平铺）
- phase_N.html × N 每个 phase 的详情页（含 lesson 列表 + 学习目标）
- learning-plan.html 周日历（basic 8 周 / advanced 8 周）

运行：python3 scripts/generate-html.py
输出：public/*.html
"""
import json
import os
import html
from pathlib import Path

ROOT = Path(__file__).parent.parent
PUBLIC = ROOT / 'public'
OUTLINE = json.load(open(PUBLIC / 'outline.json'))

# ─────────────────────────────────────────────────────────────────────────────
# 通用样式 + 组件
# ─────────────────────────────────────────────────────────────────────────────

HEAD_STYLES = """
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700;900&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif; background: #faf9f5; color: #10162f; line-height: 1.6; padding: 28px 24px 80px; max-width: 1240px; margin: 0 auto; }
  h1, h2, h3 { font-family: 'Bricolage Grotesque', 'Noto Sans SC', sans-serif; line-height: 1.15; }
  h1 { font-size: clamp(28px, 4vw, 44px); font-weight: 900; letter-spacing: -0.5px; }
  h2 { font-size: clamp(20px, 2.5vw, 28px); font-weight: 800; margin-top: 36px; margin-bottom: 14px; }
  h3 { font-size: 17px; font-weight: 800; }
  code, .mono { font-family: 'Space Mono', monospace; }
  a { color: #10162f; text-decoration: none; border-bottom: 1.5px solid #10162f; }
  a:hover { background: #fef08a; }
  .sub { font-size: 14px; color: #666; margin-top: 4px; }
  .nav { display: flex; gap: 8px; flex-wrap: wrap; margin: 16px 0 24px; padding-bottom: 16px; border-bottom: 2px dashed #ccc; }
  .nav a { font-family: 'Space Mono', monospace; font-size: 12px; font-weight: 700; padding: 6px 12px; border: 1.5px solid #10162f; background: #fff; }
  .nav a:hover { background: #10162f; color: #fff; }
  .nav a.active { background: #10162f; color: #fff; }
  .card { background: #fff; border: 2px solid #10162f; box-shadow: 6px 6px 0 #10162f; padding: 18px 20px; margin-bottom: 16px; }
  .card.tight { padding: 12px 14px; box-shadow: 4px 4px 0 #10162f; }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin: 18px 0; }
  .stat { background: #fff; border: 2px solid #10162f; box-shadow: 3px 3px 0 #10162f; padding: 10px 14px; }
  .stat .n { font-size: 28px; font-weight: 900; font-family: 'Space Mono', monospace; line-height: 1; }
  .stat .l { font-size: 11px; color: #666; margin-top: 4px; font-family: 'Space Mono', monospace; letter-spacing: 0.5px; }
  .tier { display: inline-block; padding: 3px 8px; font-size: 10px; font-weight: 800; border-radius: 999px; font-family: 'Space Mono', monospace; letter-spacing: 0.5px; vertical-align: middle; }
  .tier.both { background: #dbeafe; color: #1e40af; border: 1.5px solid #1e40af; }
  .tier.basic { background: #fce7f3; color: #9d174d; border: 1.5px solid #9d174d; }
  .tier.advanced { background: #fef08a; color: #854d0e; border: 1.5px solid #ca8a04; }
  .type-pill { display: inline-block; padding: 2px 7px; font-size: 10px; font-weight: 700; border-radius: 999px; font-family: 'Space Mono', monospace; }
  .t-Lesson { background: #fef3c7; }
  .t-Information { background: #dbeafe; }
  .t-InteractiveLab { background: #fce7f3; }
  .t-Quest { background: #dcfce7; }
  .t-Video { background: #fed7aa; }
  .live { color: #dc2626; font-weight: 900; font-family: 'Space Mono', monospace; font-size: 10px; }
  .lesson-row { padding: 10px 12px; border-bottom: 1px solid #eee; display: grid; grid-template-columns: 60px 110px 1fr 50px; gap: 12px; align-items: start; }
  .lesson-row:last-child { border-bottom: 0; }
  .lesson-row .code { font-family: 'Space Mono', monospace; font-weight: 700; font-size: 12px; white-space: nowrap; }
  .lesson-row .title { font-weight: 600; font-size: 13px; }
  .lesson-row .meta { font-size: 11px; color: #666; margin-top: 3px; }
  .lesson-row .dur { font-family: 'Space Mono', monospace; font-size: 11px; color: #888; white-space: nowrap; text-align: right; }
  .phase-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 18px 0; }
  .phase-card { background: #fff; border: 2px solid #10162f; box-shadow: 5px 5px 0 #10162f; padding: 16px 18px; transition: transform 0.15s, box-shadow 0.15s; }
  .phase-card:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 #10162f; }
  .phase-card .label { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--phase-color, #10162f); font-weight: 800; letter-spacing: 1px; }
  .phase-card .name { font-size: 15px; font-weight: 800; margin: 6px 0 8px; line-height: 1.3; }
  .phase-card .summary { font-size: 11px; color: #666; font-family: 'Space Mono', monospace; }
  .phase-card .ct { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; font-size: 10px; }
  .phase-card a { border: 0; }
  .price-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 18px 0; }
  @media (max-width: 600px) { .price-cards { grid-template-columns: 1fr; } .lesson-row { grid-template-columns: 50px 1fr; } .lesson-row .meta, .lesson-row .dur { grid-column: 2; } }
  .price-card { background: #fff; border: 2px solid #10162f; box-shadow: 6px 6px 0 #10162f; padding: 18px 20px; }
  .price-card .tag { font-family: 'Space Mono', monospace; font-size: 11px; font-weight: 800; letter-spacing: 1px; }
  .price-card .price { font-family: 'Space Mono', monospace; font-size: 42px; font-weight: 900; margin: 8px 0; }
  .price-card ul { margin-top: 10px; padding-left: 20px; font-size: 12px; line-height: 1.8; }
  .footer { font-size: 11px; color: #888; font-family: 'Space Mono', monospace; margin-top: 36px; padding-top: 14px; border-top: 1px dashed #ccc; }
</style>
"""


def nav(active: str) -> str:
    items = [
        ('curriculum.html', '🏠 课程总览'),
        ('outline.html', '📋 详细大纲'),
        ('outline-preview.html', '🔍 实时预览'),
        ('learning-plan.html', '📅 学习计划'),
        ('tools.html', '🛠️ AI 工具大全'),
        ('poster.html', '🎨 营销海报'),
        ('marketing.html', '📣 营销文案库'),
    ]
    html_parts = []
    for href, label in items:
        cls = ' class="active"' if href == active else ''
        html_parts.append(f'<a href="./{href}"{cls}>{label}</a>')
    return f'<nav class="nav">{"".join(html_parts)}</nav>'


def tier_pill(programs: list) -> str:
    if 'basic' in programs and 'advanced' in programs:
        return '<span class="tier both">🟦 基础+进阶</span>'
    if 'basic' in programs:
        return '<span class="tier basic">🟪 仅基础班</span>'
    return '<span class="tier advanced">🟨 仅进阶班</span>'


def stat(n, label, sub: str = '') -> str:
    sub_html = f'<div style="font-size:10px;color:#999;margin-top:2px">{sub}</div>' if sub else ''
    return f'<div class="stat"><div class="n">{n}</div><div class="l">{label}</div>{sub_html}</div>'


def write(name: str, content: str) -> None:
    (PUBLIC / name).write_text(content, encoding='utf-8')
    print(f'  ✅ {name}')


# ─────────────────────────────────────────────────────────────────────────────
# Aggregate stats
# ─────────────────────────────────────────────────────────────────────────────

all_lessons = [l for p in OUTLINE['phases'] for l in p['lessons']]
basic_lessons = [l for p in OUTLINE['phases'] for l in p['lessons'] if 'basic' in p['programs']]
adv_lessons = [l for p in OUTLINE['phases'] for l in p['lessons'] if 'advanced' in p['programs']]
total = len(all_lessons)
live_count = sum(1 for l in all_lessons if l.get('isLive'))
lab_count = sum(1 for l in all_lessons if l['type'] == 'InteractiveLab')
quest_count = sum(1 for l in all_lessons if l['type'] == 'Quest')
video_count = sum(1 for l in all_lessons if l['type'] == 'Video')
info_count = sum(1 for l in all_lessons if l['type'] == 'Information')

basic_p = OUTLINE['programPricing']['basic']
adv_p = OUTLINE['programPricing']['advanced']

# ─────────────────────────────────────────────────────────────────────────────
# curriculum.html  课程总览
# ─────────────────────────────────────────────────────────────────────────────

def render_curriculum() -> str:
    # Phase cards
    phase_cards = []
    for idx, p in enumerate(OUTLINE['phases']):
        live_n = sum(1 for l in p['lessons'] if l.get('isLive'))
        lab_n = sum(1 for l in p['lessons'] if l['type'] == 'InteractiveLab')
        quest_n = sum(1 for l in p['lessons'] if l['type'] == 'Quest')
        phase_cards.append(f'''
        <div class="phase-card" style="--phase-color: {p.get('color', '#10162f')}">
          <a href="./phase_{idx}.html">
            <div class="label">P{idx} · {len(p['lessons'])} 节</div>
            <div class="name">{html.escape(p['name'].split('—')[1].strip() if '—' in p['name'] else p['name'])}</div>
            <div class="summary">{html.escape(p['summary'])}</div>
            <div class="ct">
              {tier_pill(p['programs'])}
              {f'<span class="type-pill t-Lesson">{live_n} 直播</span>' if live_n else ''}
              {f'<span class="type-pill t-InteractiveLab">{lab_n} Lab</span>' if lab_n else ''}
              {f'<span class="type-pill t-Quest">{quest_n} Quest</span>' if quest_n else ''}
            </div>
          </a>
        </div>''')

    return f'''<!doctype html>
<html lang="zh-CN">
<head>{HEAD_STYLES}<title>{html.escape(OUTLINE['name'])} — 课程总览</title></head>
<body>

<h1>{html.escape(OUTLINE['name'])}</h1>
<div class="sub">{html.escape(OUTLINE['cardDescription'])} · 第 2 期 · 基础班 {basic_p['weeks']} 周 / 进阶班 {adv_p['weeks']} 周</div>

{nav('curriculum.html')}

<div class="card" style="background:#10162f;color:#fef08a;border-color:#10162f;box-shadow:6px 6px 0 #dc2626">
  <h3 style="color:#fef08a;margin-bottom:10px">🎨 一门课，8 种 AI 产出能力</h3>
  <div style="font-size:13px;line-height:1.9;color:#fff">
    📊 <strong style="color:#fef08a">文档型</strong>：PPT / BP / 简历 / 提案 / 白皮书 ·
    🎨 <strong style="color:#fef08a">视觉型</strong>：海报 / 配图 / 印刷品（含动漫风格） ·
    🎵 <strong style="color:#fef08a">音频型</strong>：TTS 配音 / BGM 音乐<br>
    🎬 <strong style="color:#fef08a">视频型</strong>：60s 科普视频 / B-roll ·
    🌐 <strong style="color:#fef08a">网页型</strong>：Landing Page / Admin CMS ·
    🤖 <strong style="color:#fef08a">自动化</strong>：AI Agent / 定时任务<br>
    📊 <strong style="color:#fef08a">数据型</strong>：Dashboard / Excel 加速 ·
    📣 <strong style="color:#fef08a">分发型</strong>：5 平台同步 · <em style="color:#fed7aa">33 个 AI 工具组成完整工作流</em>
  </div>
</div>

<div class="card">
  <h3 style="margin-bottom:10px">🎯 这门课教什么</h3>
  <p style="font-size:14px;line-height:1.7">{html.escape(OUTLINE['promoDescription'])}</p>
</div>

<h2>📊 课程数字</h2>
<div class="stats">
  {stat(total, '总课时', '13 phase')}
  {stat(live_count, '直播课', 'Lesson type')}
  {stat(lab_count, 'InteractiveLab', '互动练习')}
  {stat(quest_count, 'Quest', 'AI Tutor 带练')}
  {stat(video_count, '5min 短视频', '概念速通')}
  {stat(info_count, '自学 / Info', '可单独打卡')}
</div>

<h2>💰 班型与定价</h2>
<div class="price-cards">
  <div class="price-card">
    <div class="tag" style="color:#9d174d">🟪 基础班</div>
    <div style="font-size:13px;margin-top:4px">{html.escape(basic_p['name'])}</div>
    <div class="price">${basic_p['tuition']}<span style="font-size:14px;font-weight:700;color:#666"> {basic_p['currency']}</span></div>
    <div class="mono" style="font-size:11px;color:#666">{basic_p['weeks']} 周 · {basic_p['lessonsCount']} 节课 · 单课均价 ${basic_p['tuition']/basic_p['lessonsCount']:.1f}</div>
    <div style="font-size:12px;color:#888;margin-top:4px">第 1 期 ${basic_p['tuitionPrevCohort']} → 第 2 期 ${basic_p['tuition']}（{"价格不变" if basic_p['tuition'] == basic_p['tuitionPrevCohort'] else f"+{(basic_p['tuition']-basic_p['tuitionPrevCohort'])/basic_p['tuitionPrevCohort']*100:.0f}%"}）</div>
    <ul>{''.join(f'<li>{html.escape(d)}</li>' for d in basic_p['deliverables'])}</ul>
  </div>
  <div class="price-card">
    <div class="tag" style="color:#ca8a04">🟨 进阶班</div>
    <div style="font-size:13px;margin-top:4px">{html.escape(adv_p['name'])}</div>
    <div class="price">${adv_p['tuition']}<span style="font-size:14px;font-weight:700;color:#666"> {adv_p['currency']}</span></div>
    <div class="mono" style="font-size:11px;color:#666">{adv_p['weeks']} 周 · {adv_p['lessonsCount']} 节课 · 单课均价 ${adv_p['tuition']/adv_p['lessonsCount']:.1f}</div>
    <div style="font-size:12px;color:#888;margin-top:4px">第 1 期 ${adv_p['tuitionPrevCohort']} → 第 2 期 ${adv_p['tuition']}（+{(adv_p['tuition']-adv_p['tuitionPrevCohort'])/adv_p['tuitionPrevCohort']*100:.0f}%）</div>
    <ul>{''.join(f'<li>{html.escape(d)}</li>' for d in adv_p['deliverables'])}</ul>
  </div>
</div>

<h2>🗂 13 个 Phase</h2>
<div class="phase-grid">
  {''.join(phase_cards)}
</div>

<div class="footer">
  📄 数据源：<code>public/outline.json</code> · 本页由 <code>scripts/generate-html.py</code> 自动生成 · 修改请改 outline.json 后重跑脚本
</div>

</body>
</html>
'''


# ─────────────────────────────────────────────────────────────────────────────
# outline.html  详细大纲（所有 lesson 平铺）
# ─────────────────────────────────────────────────────────────────────────────

def render_lesson_row(l: dict) -> str:
    extras = []
    if l.get('interactiveLabSlug'):
        extras.append(f'Lab: <code>{html.escape(l["interactiveLabSlug"])}</code>')
    if l.get('learns'):
        learn_strs = ', '.join(f'{x["direction"]}/{x["slug"]}' for x in l['learns'])
        extras.append(f'Learn: <code>{html.escape(learn_strs)}</code>')
    if l.get('quest', {}).get('stepSkeleton'):
        extras.append(f'Quest skeleton: {len(l["quest"]["stepSkeleton"])} 步')
    extras_html = f'<div class="meta">{" · ".join(extras)}</div>' if extras else ''

    live_marker = ' <span class="live">●LIVE</span>' if l.get('isLive') else ''
    return f'''
    <div class="lesson-row">
      <div class="code">{html.escape(l['code'])}{live_marker}</div>
      <div><span class="type-pill t-{l['type']}">{l['type']}</span></div>
      <div>
        <div class="title">{html.escape(l['title'])}</div>
        {extras_html}
      </div>
      <div class="dur">{l.get('duration', '-')}min</div>
    </div>'''


def render_outline() -> str:
    phase_sections = []
    for idx, p in enumerate(OUTLINE['phases']):
        rows = ''.join(render_lesson_row(l) for l in p['lessons'])
        phase_sections.append(f'''
    <div class="card" style="border-color:{p.get('color', '#10162f')};box-shadow: 6px 6px 0 {p.get('color', '#10162f')}">
      <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:8px;margin-bottom:10px">
        <div>
          <div class="mono" style="font-size:11px;color:{p.get('color', '#10162f')};font-weight:800">P{idx} · {len(p['lessons'])} 节</div>
          <h3 style="margin:4px 0">{html.escape(p['name'].split('—')[1].strip() if '—' in p['name'] else p['name'])}</h3>
          <div class="sub" style="font-size:11px">{html.escape(p['summary'])}</div>
        </div>
        <div>{tier_pill(p['programs'])}</div>
      </div>
      {rows}
    </div>''')

    return f'''<!doctype html>
<html lang="zh-CN">
<head>{HEAD_STYLES}<title>{html.escape(OUTLINE['name'])} — 详细大纲</title></head>
<body>
<h1>📋 详细大纲</h1>
<div class="sub">{total} 节课 · {len(OUTLINE['phases'])} 个 phase · 按学习顺序排列</div>
{nav('outline.html')}

<div class="card tight" style="background:#fef08a;border-color:#ca8a04">
  <div style="font-size:12px;font-weight:700">💡 提示：这是静态版本。如想看实时数据 + 筛选功能，访问 <a href="./outline-preview.html">实时预览</a>（直接读 outline.json）</div>
</div>

{''.join(phase_sections)}

<div class="footer">
  📄 数据源：<code>public/outline.json</code> · 本页由 <code>scripts/generate-html.py</code> 自动生成
</div>
</body>
</html>
'''


# ─────────────────────────────────────────────────────────────────────────────
# phase_N.html  每个 phase 的详情页
# ─────────────────────────────────────────────────────────────────────────────

def render_phase(idx: int, p: dict) -> str:
    rows = ''.join(render_lesson_row(l) for l in p['lessons'])
    name_clean = p['name'].split('—')[1].strip() if '—' in p['name'] else p['name']

    # Prev/next nav
    prev_link = f'<a href="./phase_{idx-1}.html">← P{idx-1}</a>' if idx > 0 else '<span style="color:#ccc">← (开始)</span>'
    next_link = f'<a href="./phase_{idx+1}.html">P{idx+1} →</a>' if idx < len(OUTLINE['phases']) - 1 else '<span style="color:#ccc">(结束) →</span>'

    return f'''<!doctype html>
<html lang="zh-CN">
<head>{HEAD_STYLES}<title>P{idx} · {html.escape(name_clean)} — {html.escape(OUTLINE['name'])}</title></head>
<body>
<div class="mono" style="font-size:11px;color:{p.get('color', '#10162f')};font-weight:800;letter-spacing:1px">PHASE {idx}</div>
<h1>{html.escape(name_clean)}</h1>
<div class="sub">{html.escape(p['summary'])} · {tier_pill(p['programs'])}</div>

{nav('phase.html')}

<div class="card" style="border-color:{p.get('color', '#10162f')};box-shadow: 6px 6px 0 {p.get('color', '#10162f')}">
  {rows}
</div>

<div style="display:flex;justify-content:space-between;margin-top:20px;font-family:'Space Mono',monospace;font-size:13px">
  <div>{prev_link}</div>
  <div><a href="./curriculum.html">🏠 课程总览</a></div>
  <div>{next_link}</div>
</div>

<div class="footer">
  📄 数据源：<code>public/outline.json</code>（{idx} 段）· 自动生成
</div>
</body>
</html>
'''


# ─────────────────────────────────────────────────────────────────────────────
# learning-plan.html  学习计划
# ─────────────────────────────────────────────────────────────────────────────

def render_learning_plan() -> str:
    # Week-by-week mapping — derive from phase summaries which contain "Week N，..."
    import re
    week_phases = {}  # week_num -> [(phase_idx, phase_name)]
    for idx, p in enumerate(OUTLINE['phases']):
        m = re.search(r'Week\s*([\d\-]+)', p['summary'])
        if not m:
            continue
        week_range = m.group(1)
        if '-' in week_range:
            start, end = week_range.split('-')
            weeks = list(range(int(start), int(end) + 1))
        else:
            weeks = [int(week_range)]
        for w in weeks:
            week_phases.setdefault(w, []).append((idx, p))

    week_cards = []
    for w in sorted(week_phases):
        items = []
        for idx, p in week_phases[w]:
            tier = tier_pill(p['programs'])
            name_clean = p['name'].split('—')[1].strip() if '—' in p['name'] else p['name']
            items.append(f'<div style="padding:8px 0;border-bottom:1px dashed #eee"><a href="./phase_{idx}.html" style="border:0"><strong>P{idx}</strong> {html.escape(name_clean)} {tier} <span class="mono" style="font-size:11px;color:#666">{len(p["lessons"])} 节</span></a></div>')
        week_cards.append(f'''
    <div class="card">
      <div class="mono" style="font-size:11px;color:#666;font-weight:800;letter-spacing:1px">WEEK {w}</div>
      {''.join(items)}
    </div>''')

    return f'''<!doctype html>
<html lang="zh-CN">
<head>{HEAD_STYLES}<title>{html.escape(OUTLINE['name'])} — 学习计划</title></head>
<body>
<h1>📅 学习计划</h1>
<div class="sub">基础班 {basic_p['weeks']} 周（{basic_p['lessonsCount']} 节）· 进阶班 {adv_p['weeks']} 周（{adv_p['lessonsCount']} 节）</div>
{nav('learning-plan.html')}

<div class="card tight">
  <div style="font-size:13px">📌 <strong>基础班</strong>到 <strong>P8 答辩</strong>结束；<strong>进阶班</strong>跳过 P8，从 P9 继续到 P12 答辩。同一周可能基础班 + 进阶班并行不同 phase。</div>
</div>

{''.join(week_cards)}

<div class="footer">
  📄 数据源：<code>public/outline.json</code>（phase summary 字段提取 Week N） · 自动生成
</div>
</body>
</html>
'''


# ─────────────────────────────────────────────────────────────────────────────
# poster.html  marketing 营销海报（升级版 — 加强 hook + 痛点叙事）
# ─────────────────────────────────────────────────────────────────────────────

def render_poster() -> str:
    quest_titles = [l['title'].replace('Quest 实战：', '') for l in all_lessons if l['type'] == 'Quest']

    return f'''<!doctype html>
<html lang="zh-CN">
<head>{HEAD_STYLES}<title>{html.escape(OUTLINE['name'])} — 营销海报</title>
<style>
  body {{ background: linear-gradient(135deg, #faf9f5 0%, #fef08a 100%); }}
  .hero {{ background: #10162f; color: #fef08a; padding: 40px 32px; border: 3px solid #10162f; box-shadow: 12px 12px 0 #dc2626; margin-bottom: 32px; }}
  .hero h1 {{ color: #fef08a; font-size: clamp(32px, 5vw, 56px); }}
  .hero .super {{ font-size: 18px; color: #fff; margin-top: 16px; line-height: 1.6; }}
  .hero .sub-hook {{ font-size: 14px; color: #fed7aa; margin-top: 8px; font-style: italic; }}
  .badge-row {{ display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0; }}
  .badge {{ background: #fef08a; color: #10162f; padding: 4px 12px; border: 2px solid #10162f; font-family: 'Space Mono', monospace; font-size: 12px; font-weight: 800; }}
  .pain-card {{ background: #fff; border-left: 5px solid #dc2626; padding: 14px 18px; margin-bottom: 12px; }}
  .pain-card .who {{ font-size: 11px; color: #dc2626; font-family: 'Space Mono', monospace; font-weight: 800; letter-spacing: 1px; }}
  .pain-card .pain {{ font-size: 14px; margin-top: 4px; font-weight: 600; }}
  .pain-card .arrow {{ font-size: 18px; color: #10b981; margin: 4px 0; }}
  .pain-card .solve {{ font-size: 13px; color: #10162f; }}
  .deliverable {{ background: #fff; border: 2px solid #10162f; box-shadow: 4px 4px 0 #10162f; padding: 14px 16px; }}
  .deliverable .num {{ font-family: 'Space Mono', monospace; font-size: 12px; color: #dc2626; font-weight: 800; }}
  .deliverable .title {{ font-size: 14px; font-weight: 800; margin: 4px 0; }}
  .deliverable .desc {{ font-size: 11px; color: #666; }}
  .deliverable .use {{ font-size: 11px; color: #10b981; margin-top: 6px; font-weight: 600; }}
  .deliverable.adv {{ border-color: #ca8a04; box-shadow: 4px 4px 0 #ca8a04; }}
  .deliverable.adv .num {{ color: #ca8a04; }}
</style>
</head>
<body>

<div class="hero">
  <div class="mono" style="font-size:12px;color:#fed7aa;letter-spacing:2px">{html.escape(OUTLINE['name_en'])} · 2026 Q2 · 第 2 期</div>
  <h1>{html.escape(OUTLINE['name'])}</h1>
  <div class="super">一门课学会做 <strong style="color:#fef08a">8 种 AI 产出</strong>：PPT · 海报 · 音乐 · 配音 · 视频 · 网站 · 数据 Dashboard · 自动化 Agent ✋</div>
  <div class="sub-hook">市面上 99% 的 AI 课只教 1 个工具或 1 类产出。这门让你 6-8 周掌握 33 个工具 + 8 类创作能力，全程不写代码。</div>
  <div class="badge-row">
    <span class="badge">{total} 节课</span>
    <span class="badge">{quest_count} 个 Quest 实战</span>
    <span class="badge">{lab_count} 个互动 Lab</span>
    <span class="badge">{live_count} 节直播</span>
    <span class="badge">13 个 Phase</span>
    <span class="badge" style="background:#dc2626;color:#fef08a">非技术友好</span>
  </div>
</div>

{nav('poster.html')}

<h2>🎯 这门课解决谁的什么痛点</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin:18px 0">
  <div class="pain-card">
    <div class="who">在职白领 · 5+ 年经验</div>
    <div class="pain">做了 100 份 PPT、写了 50 篇报告，但回头看一年没做出过一个"真东西"</div>
    <div class="arrow">↓</div>
    <div class="solve">6 周做出 5 件能放进作品集的真实产品</div>
  </div>
  <div class="pain-card">
    <div class="who">大学生 · 在读 / 应届</div>
    <div class="pain">简历空，没项目；JD 都要"AI 项目经验"但学校没教</div>
    <div class="arrow">↓</div>
    <div class="solve">作品集多 5-8 个 AI 项目，求职面试有料聊</div>
  </div>
  <div class="pain-card">
    <div class="who">创业者 · 想做 MVP</div>
    <div class="pain">有想法但请不起开发团队，做 BP 给投资人都没产品 demo</div>
    <div class="arrow">↓</div>
    <div class="solve">自己用 Cowork 做出可演示的 MVP + BP + Landing Page</div>
  </div>
  <div class="pain-card">
    <div class="who">想转型者 · 不知道方向</div>
    <div class="pain">AI 时代该学什么？编程太难、读完书也不会做东西</div>
    <div class="arrow">↓</div>
    <div class="solve">系统化"AI 主导产品制作"能力，6 周建立完整闭环</div>
  </div>
</div>

<h2>📦 你学完能拿到手的"实物"（基础班 5 件 + 进阶班 +3 件）</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:18px 0">
  <div class="deliverable">
    <div class="num">交付 01 · 基础班</div>
    <div class="title">📊 在线 HTML PPT</div>
    <div class="desc">不是 .pptx — 是可分享 URL 的 HTML PPT（Slidev/reveal.js），能嵌入网站</div>
    <div class="use">→ 用在产品介绍、招生宣传、培训演示</div>
  </div>
  <div class="deliverable">
    <div class="num">交付 02 · 基础班</div>
    <div class="title">📄 A4 PDF 全家桶</div>
    <div class="desc">海报 / BP / 简历 / 提案 / 白皮书 任选其一完整产出</div>
    <div class="use">→ 求职简历 / 创业 BP / 客户提案立刻用</div>
  </div>
  <div class="deliverable">
    <div class="num">交付 03 · 基础班</div>
    <div class="title">🌐 Landing Page 网站</div>
    <div class="desc">真实部署到 Vercel 的网站，带域名 + SEO 优化</div>
    <div class="use">→ 个人 IP / 项目展示 / 产品官网立刻可访问</div>
  </div>
  <div class="deliverable">
    <div class="num">交付 04 · 基础班</div>
    <div class="title">🎬 60s 知识科普视频</div>
    <div class="desc">PPT 即视频（HyperFrames 自动出片），含 AI 配音 + 字幕</div>
    <div class="use">→ B 站 / YouTube / 视频号 / 抖音内容</div>
  </div>
  <div class="deliverable">
    <div class="num">交付 05 · 基础班</div>
    <div class="title">📣 多平台分发能力</div>
    <div class="desc">一份内容自动改成 5 平台风格（小红书 / 公众号 / 朋友圈 / LinkedIn / Twitter）</div>
    <div class="use">→ 自媒体 / 个人品牌运营立刻应用</div>
  </div>
  <div class="deliverable adv">
    <div class="num">交付 06 · 仅进阶班 🟨</div>
    <div class="title">🤖 内容自动化 Agent</div>
    <div class="desc">每天自动抓数据 + AI 整理 + 自动部署到你网站</div>
    <div class="use">→ 内容站无人值守每天自动更新</div>
  </div>
  <div class="deliverable adv">
    <div class="num">交付 07 · 仅进阶班 🟨</div>
    <div class="title">📊 数据 Dashboard</div>
    <div class="desc">抓数据 → 存数据库 → 可视化 → 阈值告警闭环</div>
    <div class="use">→ 房产 / 加密币 / 求职岗位等数据监控</div>
  </div>
  <div class="deliverable adv">
    <div class="num">交付 08 · 仅进阶班 🟨</div>
    <div class="title">📈 AI Excel/Sheets 加速能力</div>
    <div class="desc">AI 写公式 / VBA / Apps Script — 表格自动跑</div>
    <div class="use">→ 日常工作 Excel 速度翻倍</div>
  </div>
</div>

<h2>💰 班型与定价</h2>
<div class="price-cards">
  <div class="price-card">
    <div class="tag" style="color:#9d174d">🟪 基础班</div>
    <div style="font-size:13px;margin-top:4px">{html.escape(basic_p['name'])}</div>
    <div class="price">${basic_p['tuition']}<span style="font-size:14px;font-weight:700;color:#666"> {basic_p['currency']}</span></div>
    <div class="mono" style="font-size:11px;color:#666">{basic_p['weeks']} 周 · {basic_p['lessonsCount']} 节课</div>
    <div style="font-size:12px;color:#888;margin-top:4px">第 1 期 ${basic_p['tuitionPrevCohort']} → {"价格不变（升级内容免费送）" if basic_p['tuition'] == basic_p['tuitionPrevCohort'] else f"${basic_p['tuition']}"}</div>
    <ul>{''.join(f'<li>{html.escape(d)}</li>' for d in basic_p['deliverables'])}</ul>
  </div>
  <div class="price-card">
    <div class="tag" style="color:#ca8a04">🟨 进阶班</div>
    <div style="font-size:13px;margin-top:4px">{html.escape(adv_p['name'])}</div>
    <div class="price">${adv_p['tuition']}<span style="font-size:14px;font-weight:700;color:#666"> {adv_p['currency']}</span></div>
    <div class="mono" style="font-size:11px;color:#666">{adv_p['weeks']} 周 · {adv_p['lessonsCount']} 节课</div>
    <div style="font-size:12px;color:#888;margin-top:4px">单课均价 ${adv_p['tuition']/adv_p['lessonsCount']:.0f}（市场 AI 课普遍 ${{30-50}}/课）</div>
    <ul>{''.join(f'<li>{html.escape(d)}</li>' for d in adv_p['deliverables'])}</ul>
  </div>
</div>

<h2>🏆 {quest_count} 个 Quest 实战（AI Tutor 一对一带练）</h2>
<div class="card">
  <div style="font-size:12px;color:#666;margin-bottom:10px">每个 Quest 是一次"真实产出"的实战：AI Tutor 主动引导你完成，最后你提交真实作品 — 不是看视频不是做题。</div>
  <ol style="padding-left:24px;line-height:1.9;font-size:13px">
    {''.join(f'<li>{html.escape(t)}</li>' for t in quest_titles)}
  </ol>
</div>

<h2>📣 营销文案库</h2>
<div class="card" style="background:#fef08a;border-color:#ca8a04;box-shadow:6px 6px 0 #ca8a04">
  <div style="font-size:14px;font-weight:700">运营/小编可以从 <a href="./marketing.html">📣 营销文案库</a> 直接复制：</div>
  <ul style="margin-top:10px;padding-left:20px;font-size:13px;line-height:1.9">
    <li>5 个角度的核心 hook（痛点 / 时间 / 方法 / 趋势 / 对比）</li>
    <li>5 套小红书图文（标题 + 正文 + 配图建议 + 话题）</li>
    <li>1 篇微信公众号长文大纲（3000 字）+ 5 个标题候选</li>
    <li>6 条朋友圈文案（不同时间段 + 不同主题）</li>
    <li>2 条 LinkedIn 专业 post</li>
    <li>30 秒视频脚本（B 站/抖音/视频号通用）</li>
    <li>3 个私信冷启动话术（在职 / 应届 / 自由职业）</li>
  </ul>
</div>

<div class="footer">
  📄 数据源：<code>public/outline.json</code> · 本页由 <code>scripts/generate-html.py</code> 自动生成
</div>
</body>
</html>
'''


# ─────────────────────────────────────────────────────────────────────────────
# tools.html  AI 工具大全（课程涉及的 33 个工具，分 12 类）
# ─────────────────────────────────────────────────────────────────────────────

# 严格按 outline.json 实际出现的工具构建（不虚标，不吹）
# 每个工具 outline.json 至少有 1 次描述提及；课程没教的工具直接放替代品字段而非主条目
TOOLS_DATA = [
    {'cat': '🧠 AI 编程助手', 'color': '#6366f1', 'phase': 'P0 / P4', 'tools': [
        {'name': 'Claude Cowork', 'desc': '不写代码、对话做产品（课程贯穿主工具，P0 起 30+ 节）', 'tier': 'both', 'price': '订阅制', 'difficulty': '★', 'alt': 'ChatGPT / Gemini'},
        {'name': 'Cursor', 'desc': 'AI 编辑器（P4 装好用一句话生成第一个网页）', 'tier': 'both', 'price': '免费 / $20/月', 'difficulty': '★★', 'alt': 'Windsurf / GitHub Copilot'},
        {'name': 'Claude Code', 'desc': '命令行 AI 编程（P4 介绍 + P11 自动化用）', 'tier': 'both', 'price': '订阅制', 'difficulty': '★★', 'alt': 'Aider / OpenAI Codex'},
    ]},
    {'cat': '🎨 AI 生图', 'color': '#ec4899', 'phase': 'P1 / P2 / P3 / P6', 'tools': [
        {'name': 'ChatGPT gpt-image-2', 'desc': '中文文字渲染最强（P1 / P2 / P3 / P6 反复用）', 'tier': 'both', 'price': '$0.08/张', 'difficulty': '★', 'alt': 'Imagen / FLUX'},
        {'name': 'Midjourney', 'desc': 'P6 生图工具横评中介绍（艺术性最强）', 'tier': 'both', 'price': '$10-60/月', 'difficulty': '★★', 'alt': 'Niji'},
        {'name': 'Flux', 'desc': 'P6 横评中介绍（开源 / 速度快 / 高分辨率）', 'tier': 'both', 'price': '免费 / API', 'difficulty': '★★', 'alt': 'SDXL / Stable Diffusion'},
        {'name': 'DALL-E 3', 'desc': 'P6 横评中介绍（集成 ChatGPT，对话式生图）', 'tier': 'both', 'price': '订阅制', 'difficulty': '★', 'alt': 'gpt-image-2'},
        {'name': '即梦 (字节)', 'desc': 'P6 横评中介绍（中文 prompt 友好）', 'tier': 'both', 'price': '免费 / 付费', 'difficulty': '★', 'alt': '可灵 / 文心一格'},
    ]},
    {'cat': '🎙️ AI 配音 TTS', 'color': '#f59e0b', 'phase': 'P6', 'tools': [
        {'name': 'ElevenLabs', 'desc': '英文 TTS 主选（P6 直播课实战）', 'tier': 'both', 'price': '免费 / $22/月', 'difficulty': '★★', 'alt': 'OpenAI TTS / PlayHT'},
        {'name': '阿里云语音合成', 'desc': '中文 TTS 主选（P6 双语 Lab 实战）', 'tier': 'both', 'price': '按量', 'difficulty': '★★', 'alt': '火山 / 腾讯'},
    ]},
    {'cat': '🎵 AI 生音乐', 'color': '#8b5cf6', 'phase': 'P10 (进阶)', 'tools': [
        {'name': 'Suno', 'desc': '给视频生 BGM（P10 Lab 实战）', 'tier': 'advanced', 'price': '$8-30/月', 'difficulty': '★', 'alt': 'Udio / Stable Audio'},
        {'name': 'Udio', 'desc': 'P10 音乐工具横评中介绍', 'tier': 'advanced', 'price': '$10-30/月', 'difficulty': '★★', 'alt': 'Suno'},
        {'name': 'Stable Audio', 'desc': 'P10 音乐工具横评中介绍（专做 BGM）', 'tier': 'advanced', 'price': '免费 / 付费', 'difficulty': '★★', 'alt': 'AIVA'},
    ]},
    {'cat': '🎬 AI 视频出片', 'color': '#06b6d4', 'phase': 'P6', 'tools': [
        {'name': 'HyperFrames', 'desc': 'HTML PPT → MP4，一行命令出片（P6 核心 + Q08 实战）', 'tier': 'both', 'price': '开源', 'difficulty': '★★', 'alt': 'Remotion / Motion Canvas'},
    ]},
    {'cat': '📊 在线 PPT', 'color': '#10b981', 'phase': 'P2', 'tools': [
        {'name': 'Slidev', 'desc': 'Vue 驱动 Markdown 写 PPT（P2 三选一）', 'tier': 'both', 'price': '开源', 'difficulty': '★★', 'alt': 'reveal.js / Marp'},
        {'name': 'reveal.js', 'desc': '老牌 HTML PPT 框架（P2 三选一）', 'tier': 'both', 'price': '开源', 'difficulty': '★★', 'alt': 'Slidev'},
    ]},
    {'cat': '🌐 部署 / 域名', 'color': '#0ea5e9', 'phase': 'P4 / P8', 'tools': [
        {'name': 'Vercel', 'desc': '零配置静态站部署（P4 Q04 实战 + P8 自动部署）', 'tier': 'both', 'price': '免费 / $20/月', 'difficulty': '★', 'alt': 'Netlify / Cloudflare'},
        {'name': 'GitHub Pages', 'desc': 'P2 / Q06 中作部署替代品介绍', 'tier': 'both', 'price': '免费', 'difficulty': '★', 'alt': 'Vercel'},
        {'name': 'Cloudflare Pages', 'desc': 'P2 / P8 中作部署替代品介绍', 'tier': 'both', 'price': '免费', 'difficulty': '★★', 'alt': 'Vercel'},
    ]},
    {'cat': '🤖 自动化 / Skills', 'color': '#a855f7', 'phase': 'P5 / P8 / P11', 'tools': [
        {'name': 'cron', 'desc': 'Linux/Mac 定时任务（P5 实战）', 'tier': 'both', 'price': '系统自带', 'difficulty': '★★', 'alt': 'Windows 任务计划'},
        {'name': 'Claude /schedule', 'desc': 'Claude 内置定时任务（P5 Lab：每天 8 点跑你的脚本）', 'tier': 'both', 'price': '订阅制', 'difficulty': '★', 'alt': 'cron'},
        {'name': 'Claude Skills', 'desc': '把 AI + 脚本封装成可复用单元（P11 直播课）', 'tier': 'advanced', 'price': '订阅制', 'difficulty': '★★★', 'alt': '自写 Python script'},
        {'name': 'GitHub Actions', 'desc': 'P8 自动部署中提到的 cron 实现方案之一', 'tier': 'advanced', 'price': '免费 / 付费', 'difficulty': '★★', 'alt': 'Vercel Cron'},
    ]},
    {'cat': '📚 知识管理', 'color': '#f97316', 'phase': 'P5', 'tools': [
        {'name': 'Obsidian', 'desc': '本地优先 + 双链 + AI 友好（P5 直播 + Lab）', 'tier': 'both', 'price': '免费 / $50/年', 'difficulty': '★★', 'alt': 'Logseq / Roam'},
    ]},
    {'cat': '💾 数据存储', 'color': '#14b8a6', 'phase': 'P11 (进阶)', 'tools': [
        {'name': 'Google Sheets', 'desc': '最轻量数据库（P11 存储选型课）', 'tier': 'advanced', 'price': '免费', 'difficulty': '★', 'alt': 'Excel'},
        {'name': 'Airtable', 'desc': '"会写公式的 Notion"（P11 存储选型课 + Quest 实战）', 'tier': 'advanced', 'price': '免费 / $20/月', 'difficulty': '★', 'alt': 'Sheets'},
        {'name': 'Supabase', 'desc': '开源 Firebase 替代品（P11 存储选型 + Quest 实战）', 'tier': 'advanced', 'price': '免费 / $25/月', 'difficulty': '★★★', 'alt': 'Firebase'},
        {'name': 'Notion API', 'desc': '用 Notion 当数据库（P11 存储选型课）', 'tier': 'advanced', 'price': '免费 / 付费', 'difficulty': '★★', 'alt': 'Airtable'},
    ]},
    {'cat': '📈 数据可视化', 'color': '#dc2626', 'phase': 'P3 / P11', 'tools': [
        {'name': 'ECharts', 'desc': '百度开源图表库（P11 直播课实战，Dashboard 主力）', 'tier': 'advanced', 'price': '开源', 'difficulty': '★★', 'alt': 'D3.js / Chart.js'},
        {'name': 'Mermaid', 'desc': '文字 → 流程图（P3 给 PDF 加流程图时提到）', 'tier': 'both', 'price': '开源', 'difficulty': '★', 'alt': 'PlantUML'},
    ]},
    {'cat': '📋 Excel / 表格加速', 'color': '#84cc16', 'phase': 'P11 (进阶)', 'tools': [
        {'name': 'Google Apps Script', 'desc': 'Sheets 自动化（P11 直播课 + AI 自动写）', 'tier': 'advanced', 'price': '免费', 'difficulty': '★★', 'alt': 'VBA'},
        {'name': 'Excel VBA', 'desc': '老牌 Excel 自动化（P11 直播课 + AI 自动写）', 'tier': 'advanced', 'price': 'Office', 'difficulty': '★★★', 'alt': 'Apps Script'},
        {'name': 'ChatGPT Code Interpreter', 'desc': 'P11 工具横评中提到（上传表格让 AI 处理）', 'tier': 'advanced', 'price': '订阅制', 'difficulty': '★', 'alt': 'Claude Analysis'},
    ]},
]


def render_tools() -> str:
    total_tools = sum(len(c['tools']) for c in TOOLS_DATA)
    basic_tools = sum(sum(1 for t in c['tools'] if t['tier'] == 'both') for c in TOOLS_DATA)
    adv_tools = total_tools - basic_tools

    category_html = []
    for cat in TOOLS_DATA:
        tool_cards = []
        for t in cat['tools']:
            tier_badge = '<span class="tier both">🟦</span>' if t['tier'] == 'both' else '<span class="tier advanced">🟨</span>'
            tool_cards.append(f'''
        <div class="tool-card">
          <div style="display:flex;justify-content:space-between;align-items:start;gap:8px">
            <div class="tool-name">{html.escape(t['name'])}</div>
            <div>{tier_badge}</div>
          </div>
          <div class="tool-desc">{html.escape(t['desc'])}</div>
          <div class="tool-meta">
            <span>💰 {html.escape(t['price'])}</span>
            <span>📐 {t['difficulty']}</span>
          </div>
          <div class="tool-alt">替代品：{html.escape(t['alt'])}</div>
        </div>''')

        category_html.append(f'''
    <section style="margin-bottom:28px">
      <h2 style="color:{cat['color']};border-bottom:3px solid {cat['color']};padding-bottom:6px">
        {cat['cat']} <span style="font-size:13px;color:#666;font-family:'Space Mono',monospace;font-weight:400">· {cat['phase']} · {len(cat['tools'])} 个工具</span>
      </h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:12px">
        {''.join(tool_cards)}
      </div>
    </section>''')

    return f'''<!doctype html>
<html lang="zh-CN">
<head>{HEAD_STYLES}<title>{html.escape(OUTLINE['name'])} — AI 工具大全</title>
<style>
  .tool-card {{ background: #fff; border: 2px solid #10162f; box-shadow: 4px 4px 0 #10162f; padding: 12px 14px; transition: transform 0.15s, box-shadow 0.15s; }}
  .tool-card:hover {{ transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #10162f; }}
  .tool-name {{ font-size: 14px; font-weight: 800; }}
  .tool-desc {{ font-size: 12px; color: #444; margin-top: 4px; line-height: 1.5; }}
  .tool-meta {{ display: flex; gap: 10px; font-family: 'Space Mono', monospace; font-size: 11px; color: #666; margin-top: 8px; }}
  .tool-alt {{ font-size: 10px; color: #888; margin-top: 4px; font-style: italic; }}
</style>
</head>
<body>

<h1>🛠️ 课程实际涉及的 AI 工具</h1>
<div class="sub">严格按 outline.json 真实出现的工具列出 · 课没教的不列 · 避免夸大</div>

{nav('tools.html')}

<div class="stats">
  {stat(total_tools, '工具总数')}
  {stat(len(TOOLS_DATA), '工具类别')}
  {stat(basic_tools, '基础班涉及')}
  {stat(adv_tools, '进阶班专属')}
</div>

<div class="card tight" style="background:#fef08a;border-color:#ca8a04">
  <div style="font-size:13px;line-height:1.7"><strong>💡 阅读说明（重要 · 反对夸大）：</strong>
    <br>· "Lab 实战" = 课程有专门的 Lab / Quest 让你动手用过
    <br>· "直播课实战" = 老师课上演示 + 学员跟做
    <br>· "横评中介绍" = 课上提到对比，但不深教（重点学其中 1-2 个）
    <br>· "中作替代品介绍" = 课上一笔带过的替代方案，不深教
    <br>· <strong>不列举课程没提到的工具</strong>（比如 v0.dev / Bolt.new / Figma AI / Pika / Luma 等业内热门工具，本课不教，不放这里）
  </div>
</div>

{''.join(category_html)}

<div class="footer">
  📄 工具数据：手动维护在 <code>scripts/generate-html.py</code> 的 <code>TOOLS_DATA</code> · 新加工具改这个字典即可
</div>
</body>
</html>
'''


# ─────────────────────────────────────────────────────────────────────────────
# marketing.html  营销文案库（运营 / 小编 直接复制粘贴用）
# ─────────────────────────────────────────────────────────────────────────────

MARKETING_STYLES = """
<style>
  .copy-block { background: #fff; border: 2px solid #10162f; box-shadow: 4px 4px 0 #10162f; padding: 16px 18px; margin-bottom: 14px; }
  .copy-block .label { font-family: 'Space Mono', monospace; font-size: 11px; color: #dc2626; font-weight: 800; letter-spacing: 1px; }
  .copy-block .title { font-size: 16px; font-weight: 800; margin: 6px 0 10px; }
  .copy-block .content { background: #faf9f5; border: 1.5px dashed #999; padding: 12px 14px; font-size: 13px; line-height: 1.8; white-space: pre-wrap; font-family: 'Noto Sans SC', sans-serif; }
  .copy-block .hashtags { margin-top: 8px; font-size: 11px; color: #9d174d; font-family: 'Space Mono', monospace; }
  .copy-block .note { margin-top: 8px; font-size: 11px; color: #666; font-style: italic; }
  .platform-section { border-top: 3px solid #10162f; margin-top: 30px; padding-top: 20px; }
  .platform-icon { font-size: 28px; }
  .hook-card { background: linear-gradient(135deg, #fef08a 0%, #fed7aa 100%); border: 2px solid #10162f; padding: 16px 20px; margin-bottom: 12px; box-shadow: 5px 5px 0 #10162f; }
  .hook-card .angle { font-family: 'Space Mono', monospace; font-size: 11px; color: #dc2626; font-weight: 800; letter-spacing: 1px; }
  .hook-card .hook { font-size: 18px; font-weight: 900; margin-top: 4px; line-height: 1.4; }
</style>
"""

def render_marketing() -> str:
    return f'''<!doctype html>
<html lang="zh-CN">
<head>{HEAD_STYLES}{MARKETING_STYLES}<title>{html.escape(OUTLINE['name'])} — 营销文案库</title></head>
<body>

<h1>📣 营销文案库</h1>
<div class="sub">运营 / 小编 / 销售可直接复制粘贴 · 覆盖 5 平台 + 5 个角度的 hook</div>

{nav('marketing.html')}

<div class="card tight" style="background:#fef08a;border-color:#ca8a04">
  <div style="font-size:12px;font-weight:700">⚠️ 合规红线（CLAUDE.md feedback_no_revenue_promise）：</div>
  <div style="font-size:11px;margin-top:4px;line-height:1.6">所有文案 ❌ 不承诺金钱/收入/入职/订单 · ❌ 不用"副业"一词 · ✅ 只承诺过程/作品/技能/服务量。如要发布前自查，搜以下关键词命中即改：月入、年薪、收入、入职、包就业、副业、躺赚、暴富。</div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<h2>🖼️ AI 海报生成 prompt 库（8 个场景，直接复制到 gpt-image-2 / Midjourney 出图）</h2>
<p style="font-size:13px;color:#666;margin-bottom:12px;line-height:1.7">
  营销发图必需的 8 类海报，每张配 Prompt 模板。建议主用 <strong>ChatGPT gpt-image-2</strong>（中文文字渲染最强 + 复杂排版稳定），
  Midjourney 出"艺术化背景"再用 Photoshop / Figma / Canva 套字。
</p>

<div class="card tight" style="background:#fef08a;border-color:#ca8a04">
  <div style="font-size:12px;font-weight:700">📐 全部海报统一设计语言（Neo-Brutalism）：</div>
  <div style="font-size:11px;margin-top:4px;line-height:1.7">
    · 配色：奶油底 <code>#faf9f5</code> + 黑色 3px 边框 <code>#10162f</code> + 黄色高亮 <code>#fef08a</code> + 红色重点 <code>#dc2626</code><br>
    · 字体：标题用 Bricolage Grotesque 或思源黑体 Heavy / 数据用 Space Mono 等宽 / 正文 DM Sans + 思源黑体 Regular<br>
    · 风格关键词：Neo-Brutalism, hand-drawn imperfection, bold borders, offset drop shadow, NOT corporate tech-bro<br>
    · 尺寸：小红书 / 视频号 9:16 (1242×1660) · 公众号封面 2.35:1 (900×383) · LinkedIn 16:9 (1200×675)
  </div>
</div>

<div class="copy-block">
  <div class="label">海报 1 · 🗺️ 主图：AI 工具地图（33 个工具一张图）</div>
  <div class="title">📐 用途：小红书 / 朋友圈 / 公众号封面 · 9:16 竖版</div>
  <div class="content">Create a vibrant Neo-Brutalism style infographic poster, 9:16 vertical 1242x1660px.

【顶部标题】
- Main title (large Chinese): "课程涉及的 33 个 AI 工具"
- Subtitle: "13 个类别 · 6-8 周完整工作流 · 全程不写代码"

【中部主体】
A circular network diagram with 13 hexagonal category nodes arranged in a wheel:
- 🧠 AI 编程助手 (purple #6366f1) · 3 tools
- 🪄 AI 设计工具 (magenta #d946ef) · 6 tools
- 🎨 AI 生图 (pink #ec4899) · 5 tools
- 🎙️ AI 配音 TTS (amber #f59e0b) · 4 tools
- 🎵 AI 生音乐 (violet #8b5cf6) · 3 tools
- 🎬 AI 视频制作 (cyan #06b6d4) · 6 tools
- 📊 在线 PPT (green #10b981) · 2 tools
- 🌐 部署 / 域名 (sky #0ea5e9) · 3 tools
- 🤖 自动化 (purple #a855f7) · 4 tools
- 📚 知识管理 (orange #f97316) · 1 tool
- 💾 数据存储 (teal #14b8a6) · 4 tools
- 📈 数据可视化 (red #dc2626) · 2 tools
- 📋 Excel 加速 (lime #84cc16) · 3 tools

Each hexagon has 3px black border, offset 6px black drop shadow.
Connecting lines: hand-drawn dashed style, NOT clean tech lines.

【底部 CTA】
- "匠人学院《人人都能学的 AI Coding 实战课》第 2 期"
- QR code placeholder bottom-right
- Course URL

Style: cream background #faf9f5, bold black 3px borders, yellow highlight #fef08a accents, red #dc2626 for key numbers (46, 13). Hand-drawn slight imperfection. Bricolage Grotesque heavy for Chinese title, Space Mono for numbers and English labels.

AVOID: gradient blur backgrounds, AI tech stock imagery, "futuristic neon" aesthetic, generic robot icons.</div>
</div>

<div class="copy-block">
  <div class="label">海报 2 · 🎨 单类别横评海报（如"5 大 AI 生图工具"）</div>
  <div class="title">📐 用途：小红书横评帖配图 · 9:16 竖版</div>
  <div class="content">A Neo-Brutalism comparison poster, 9:16 vertical 1242x1660px.

【顶部】
- Title (large Chinese): "🎨 5 大 AI 生图工具横评"
- Subtitle: "中文支持 · 价格 · 难度 · 商用许可 一图看清"

【中部 5 个工具卡片，垂直堆叠】
Each tool card (full width, 3px black border, 5px offset shadow):

Card 1 (highlight in yellow #fef08a):
- Tool name: "ChatGPT gpt-image-2" (large bold)
- Tag line: "中文文字渲染最强"
- Stats row: 价格 $0.08/张 · 难度 ★ · 商用 ✓
- Sample badge: "推荐做带文字的海报"

Card 2-5: Midjourney / FLUX / DALL·E 3 / 即梦 — similar format

【底部】
- "匠人学院《AI Coding 实战课》P2 P3 P6 都教这些"
- Course logo + URL
- Small footnote: "完整 5 工具实测 + 8 维度对比 见公众号文章"

Style: same Neo-Brutalism as poster 1. Cream bg, 3px black borders, yellow highlights for "推荐"卡片. Hand-drawn dashed dividers between cards.

Layout note: cards should fit 5 in 9:16 portrait, so each card height ~280px including padding.</div>
</div>

<div class="copy-block">
  <div class="label">海报 3 · 🎁 8 类产出 grid（最强差异化）</div>
  <div class="title">📐 用途：小红书首图 / 公众号封面 · 9:16 竖版</div>
  <div class="content">A bold 8-grid showcase poster, 9:16 vertical 1242x1660px.

【顶部】
- Mega title: "一门课，学会做 8 种 AI 产出"
- Sub: "PPT · 海报 · 音乐 · 视频 · 网站 · 数据 · 自动化 · 多平台分发"
- Banner tag (yellow on black): "全程不写代码"

【中部 4×2 grid (8 cells)】
Each cell (3px black border, offset 6px shadow, different brand color):

[Cell 1 · green] 📊 文档 → PPT / BP / 简历
[Cell 2 · pink]  🎨 视觉 → 海报 / 配图 / 印刷品
[Cell 3 · violet] 🎵 音频 → TTS 配音 / BGM 音乐
[Cell 4 · cyan]  🎬 视频 → 60s 科普视频 / B-roll
[Cell 5 · sky]   🌐 网页 → Landing Page / Admin CMS
[Cell 6 · purple] 🤖 自动化 → AI Agent / 定时任务
[Cell 7 · teal]  📊 数据 → Dashboard / 告警
[Cell 8 · orange] 📣 分发 → 5 平台一稿多发

Each cell shows emoji big, output type bold, 1-line examples small.

【底部】
- "33 个 AI 工具组成完整工作流"
- 基础班 $960 / 进阶班 $2280 价格 chip
- 报名链接 + QR

Style: cream bg, bold black 3px borders, each cell uses its category brand color. Hand-drawn imperfection. Avoid generic tech imagery.</div>
</div>

<div class="copy-block">
  <div class="label">海报 4 · 🏆 14 Quest 实战清单（学完产出证据）</div>
  <div class="title">📐 用途：小红书 / 朋友圈 9 宫格主图 · 9:16 竖版</div>
  <div class="content">A checklist-style poster, 9:16 vertical 1242x1660px.

【顶部】
- Title: "14 个 Quest 实战 = 14 件交付物"
- Sub: "AI Tutor 一对一带练，每个 Quest 提交真文件 / 真 URL"

【中部 14 行 checklist】
Each row (yellow checkbox + bold Chinese item + small monospace duration):

✅ Q01 · 装好 Cursor 用一句话生成第一个网页 [30min]
✅ Q02 · 用 AI 写完整 PRD [40min]
✅ Q03 · 用 Cursor 搭真实可用的官网首页 [45min]
✅ Q04 · 把你的网站真的部署到 Vercel 上线 [40min]
✅ Q05 · 给你的网站加 AI Chatbot [45min] 🟨进阶
✅ Q06 · 完成你的第一份在线 HTML PPT [60min]
✅ Q07 · 完成你的 PDF 交付物 [90min]
✅ Q08 · 完成你的 60 秒知识科普视频 [90min]
✅ Q09 · 跑通"每日内容聚合 + 自动上线"流程 [120min] 🟨进阶
✅ Q10 · 完成五平台分发 [60min]
✅ Q11 · 给网站加 Admin CMS + 用户数据采集 [90min] 🟨进阶
✅ Q12 · 写 Claude Skill 抓数据存数据库 [60min] 🟨进阶
✅ Q13 · 给 P6 视频加 BGM 升级版 [60min] 🟨进阶
✅ Q14 · 完整数据 Dashboard + 自动告警 [120min] 🟨进阶

【底部】
- "🟦 基础班 9 个 Quest · 🟨 进阶班 +5 Quest"
- "学完后，每个 Quest = 1 件可放进作品集的真东西"
- Course URL + QR

Style: cream bg, black 3px borders, yellow checkboxes, red 🟨 badges for advanced-only.</div>
</div>

<div class="copy-block">
  <div class="label">海报 5 · 💎 班型对比（基础 vs 进阶）</div>
  <div class="title">📐 用途：报名页 / 直播海报 · 9:16 竖版</div>
  <div class="content">A two-column comparison poster, 9:16 vertical 1242x1660px.

【顶部】
- Title: "基础班 vs 进阶班 · 怎么选"
- Sub: "都不写代码 · 都用 Cowork 做产品 · 差在哪？"

【中部 两列对比】

Left column (pink #fce7f3 bg + black border):
- 🟪 头部标签: "基础班"
- Mega price: "$960 AUD"
- "6 周 · 76 节课 · 9 个 Quest"
- 学完做出（清单 5 件）:
  ✓ 在线 HTML PPT
  ✓ A4 PDF 全家桶
  ✓ Landing Page 网站
  ✓ 60s 知识科普视频
  ✓ 5 平台多平台分发

Right column (yellow #fef08a bg + black border):
- 🟨 头部标签: "进阶班"
- Mega price: "$2280 AUD"
- "8 周 · 109 节课 · 14 个 Quest"
- 学完做出（清单 5+3 件）:
  ✓ 基础班全部 5 件
  ✓ +Admin CMS + 用户数据采集
  ✓ +内容自动化 Agent + 每日自动部署
  ✓ +视频 BGM 升级
  ✓ +数据 Dashboard + AI Excel 加速

Between columns: 大写 "VS" 黑色字 + 红色 highlight

【底部】
- "都是匠人学院《AI Coding 实战课》第 2 期"
- "选不准？直接选进阶 — 单课均价 $21（市场 AI 课普遍 $30-50/课）"
- QR + 报名链接

Style: Neo-Brutalism, bold 3px black borders, contrasting tier colors.</div>
</div>

<div class="copy-block">
  <div class="label">海报 6 · 📅 13 phase 路线图</div>
  <div class="title">📐 用途：详情页 / 直播 / 课程介绍 · 9:16 竖版 OR 16:9 横版</div>
  <div class="content">A horizontal-flow roadmap poster, can be 9:16 or 16:9.

【顶部】
- Title: "6-8 周学习路径 · 13 Phase 完整闭环"

【主体：13 step 时间轴】
Horizontal arrow flow (or vertical for 9:16):

P0 上手 Cowork (🟦 6 课)
  ↓
P1 PRD + design.md (🟦 11 课)
  ↓
P2 在线 PPT 🎯 第 1 交付 (🟦 6 课)
  ↓
P3 A4 PDF 全家桶 🎯 第 2 交付 (🟦 6 课)
  ↓
P4 Landing Page 网站 🎯 第 3 交付 (🟦 21 课)
  ↓
P5 自动化基础 + Obsidian (🟦 8 课)
  ↓
P6 60s 视频 🎯 第 4 交付 (🟦 10 课)
  ↓
P7 一稿多发 🎯 第 5 交付 (🟦 4 课)
  ↓
P8 🎓 基础班答辩 (🟪 4 课) ←基础班终点
  ↓
P9 网站智能化 + Admin + Agent (🟨 19 课)
  ↓
P10 视频 BGM 升级 (🟨 3 课)
  ↓
P11 数据深度 + AI Excel (🟨 11 课)
  ↓
P12 🎓 进阶班答辩 (🟨 4 课) ←进阶班终点

Each step: phase number + name + 课数 + tier badge (basic 🟦 or advanced 🟨).
Critical交付 phase marked with 🎯 (P2/P3/P4/P6/P7).

【底部】
- Stats row: "13 phase · 113 课 · 14 Quest · 33 工具"
- Course logo + QR

Style: Neo-Brutalism. Each phase box has 3px black border. Arrows hand-drawn. Tier colors clearly distinguish 🟦 both / 🟪 basic-only / 🟨 advanced-only.</div>
</div>

<div class="copy-block">
  <div class="label">海报 7 · 💬 痛点共鸣海报（针对在职白领）</div>
  <div class="title">📐 用途：小红书 / 朋友圈 / 投流 · 9:16 竖版</div>
  <div class="content">An emotional pain-point poster, 9:16 vertical 1242x1660px.

【顶部留白多 · 视觉冲击】
- Mega quote (huge Chinese, hand-written feel):
  "做了 5 年 PPT，
   但我一个真产品
   都没做过 😭"

【中部分隔线（hand-drawn dashed）】

Below the line:
- Sub-title: "你也这样吗？"

【下半部分 5 个 ✓ 学员状态对比】

📍 学这门课之前：
✗ 简历全是"运营 / 项目管理" 没 AI 项目
✗ 跟人介绍："我做过 100 份 PPT"
✗ 看 AI 工具课但学完还是不会做产品
✗ 想转型不知道学什么

📍 学完 6-8 周后：
✓ 简历多 5-8 个 AI 项目（真链接 / 真文件）
✓ "我做过 Landing Page + AI Chatbot + Dashboard"
✓ 用 Cowork 处理日常工作每周省 10 小时
✓ 知道 AI 时代自己该往哪走

【底部】
- "匠人学院《AI Coding 实战课》"
- "基础班 $960 / 进阶班 $2280 · 6-8 周"
- QR + 链接

Style: cream bg, large emotional typography for quote (hand-written feel可用 Caveat 或类似). Bold black borders for cards. ✗ in red, ✓ in green/yellow background.</div>
</div>

<div class="copy-block">
  <div class="label">海报 8 · 🛠️ 单工具速通海报（系列）</div>
  <div class="title">📐 用途：小红书"每周一个工具"系列 · 9:16 竖版</div>
  <div class="content">Single-tool showcase poster template, 9:16 vertical 1242x1660px.

【顶部】
- Banner tag (yellow on black): "Week N / 32"
- Mega title: "[工具名]" e.g. "Suno" / "HyperFrames" / "Claude Skills"
- Sub: "5 分钟做出 [产出物] · 零基础也能跟"

【中部 3 步流程】

Step 1 (large): "[第一步动作]"
+ 截图占位

→ (hand-drawn arrow)

Step 2: "[第二步动作]"
+ 截图占位

→

Step 3: "[第三步动作]"
+ 截图占位

【中下产出展示】
- "Before" → "After" 对比
- 用真实 screenshot 占位

【底部】
- "我在《AI Coding 实战课》P[N] 学的"
- "全 33 个工具系列连发，关注我看下一个"
- Course URL + QR

Style: per-tool brand color accent (Suno = violet / HyperFrames = cyan etc.), Neo-Brutalism overall. Each step card 3px black border.

模板使用：把【工具名】【产出物】【3 个步骤动作】替换成具体工具即可。33 个工具全部能用这套模板，连发 30+ 帖。</div>
  <div class="note">💡 33 个工具用同一套模板 = 30+ 帖快速产出。每帖标题改 "Week 1 / 33 · Cowork"、"Week 2 / 33 · Cursor" 等。</div>
</div>

<div class="copy-block">
  <div class="label">⚙️ 通用使用建议（4 条）</div>
  <div class="content">1. **主用 gpt-image-2**：中文文字渲染最强，复杂排版稳定。
   出图后 micro-edit 用 ChatGPT 多轮对话调，不要从头重生。

2. **Midjourney 用于背景/质感**：
   生纯背景 / 质感纹理 / 抽象配图，再用 Figma / Canva 套字。
   不要让 Midjourney 直接出含文字的海报（中文渲染不稳）。

3. **批量风格统一**：
   8 张海报用同一组 style keywords（"Neo-Brutalism, cream background, bold 3px black borders, yellow #fef08a highlights, hand-drawn imperfection"），保证整套视觉一致。

4. **必查 4 项再发布**：
   ✓ 课程名 + 价格 + 周期 标注准确（$960/6 周 · $2280/8 周）
   ✓ "不写代码" / "13 phase" / "33 工具" 关键数字一致
   ✓ QR 码可扫（用真二维码生成器）
   ✓ 没有违规承诺词（月入 / 入职 / 副业 / 包就业）— 严守红线</div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<h2>🎨 8 类 AI 产出形态 · 一门课全包</h2>
<p style="font-size:13px;color:#666;margin-bottom:12px;line-height:1.7">
  <strong>这门课最强的差异化 — 不是教 1 个工具或 1 类产出，是教 8 种完全不同形态的 AI 创作能力。</strong>
  市面上的 AI 课要么只教 ChatGPT 用法（1 类输出：文字），要么只教某种生图 / 视频 / 编程（1 个领域）。
  这门课让你一次掌握：文字 + 视觉 + 音频 + 视频 + 网页 + 数据 + 自动化 + 内容分发 8 种产出。
</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin:18px 0">
  <div class="card tight" style="border-color:#10b981;box-shadow:4px 4px 0 #10b981">
    <div style="font-size:24px">📊 文档型产出</div>
    <div style="font-size:13px;font-weight:700;margin:6px 0">PPT / BP / 简历 / 提案 / 白皮书</div>
    <div style="font-size:11px;color:#666;line-height:1.6">工具：Cowork + Slidev + reveal.js + HyperFrames<br>P2-P3 学 · 5 件交付物</div>
    <div style="font-size:11px;color:#10b981;margin-top:6px">→ 求职 / 销售 / 创业必备</div>
  </div>

  <div class="card tight" style="border-color:#ec4899;box-shadow:4px 4px 0 #ec4899">
    <div style="font-size:24px">🎨 视觉型产出</div>
    <div style="font-size:13px;font-weight:700;margin:6px 0">海报 / 配图 / 印刷品 / 动漫风格</div>
    <div style="font-size:11px;color:#666;line-height:1.6">工具：gpt-image-2 + Midjourney + Flux + 即梦<br>P2-P3 + P6 学 · 6 个生图工具横评</div>
    <div style="font-size:11px;color:#ec4899;margin-top:6px">→ 营销 / 设计 / 个人 IP</div>
  </div>

  <div class="card tight" style="border-color:#8b5cf6;box-shadow:4px 4px 0 #8b5cf6">
    <div style="font-size:24px">🎵 音频型产出</div>
    <div style="font-size:13px;font-weight:700;margin:6px 0">TTS 配音 / BGM 音乐 / 多语言旁白</div>
    <div style="font-size:11px;color:#666;line-height:1.6">工具：ElevenLabs + 阿里云 / 火山 / 腾讯 + Suno / Udio / Stable Audio<br>P6 (基础) + P10 (进阶) 学</div>
    <div style="font-size:11px;color:#8b5cf6;margin-top:6px">→ 视频配音 / 播客 / 音频内容</div>
  </div>

  <div class="card tight" style="border-color:#06b6d4;box-shadow:4px 4px 0 #06b6d4">
    <div style="font-size:24px">🎬 视频型产出</div>
    <div style="font-size:13px;font-weight:700;margin:6px 0">60s 科普视频 / 短视频 / B-roll 片段</div>
    <div style="font-size:11px;color:#666;line-height:1.6">工具：HyperFrames + Runway / Veo3 / Kling<br>P6 (基础) + P10 (进阶) 学 · 不学剪辑软件</div>
    <div style="font-size:11px;color:#06b6d4;margin-top:6px">→ B 站 / YouTube / 视频号 / 抖音</div>
  </div>

  <div class="card tight" style="border-color:#0ea5e9;box-shadow:4px 4px 0 #0ea5e9">
    <div style="font-size:24px">🌐 网页型产出</div>
    <div style="font-size:13px;font-weight:700;margin:6px 0">Landing Page / Admin CMS / 上线网站</div>
    <div style="font-size:11px;color:#666;line-height:1.6">工具：Cursor + Claude Code + Vercel<br>P4 (基础) + P8 (进阶 Admin) 学 · 不写代码</div>
    <div style="font-size:11px;color:#0ea5e9;margin-top:6px">→ 产品官网 / 个人 IP / 业务系统</div>
  </div>

  <div class="card tight" style="border-color:#a855f7;box-shadow:4px 4px 0 #a855f7">
    <div style="font-size:24px">🤖 自动化产出</div>
    <div style="font-size:13px;font-weight:700;margin:6px 0">AI Agent / 定时任务 / 内容自动 pipeline</div>
    <div style="font-size:11px;color:#666;line-height:1.6">工具：Claude Skills + cron + Schedule + GitHub Actions<br>P5 (基础) + P8 (进阶) 学</div>
    <div style="font-size:11px;color:#a855f7;margin-top:6px">→ 每日新闻聚合 / 自动部署 / 工作流加速</div>
  </div>

  <div class="card tight" style="border-color:#14b8a6;box-shadow:4px 4px 0 #14b8a6">
    <div style="font-size:24px">📊 数据型产出</div>
    <div style="font-size:13px;font-weight:700;margin:6px 0">Dashboard / 报表 / 告警 / Excel 加速</div>
    <div style="font-size:11px;color:#666;line-height:1.6">工具：ECharts + Sheets / Airtable / Supabase + AI Excel / VBA<br>P11 (进阶) 学</div>
    <div style="font-size:11px;color:#14b8a6;margin-top:6px">→ 业务洞察 / 决策支持 / 日常 Excel 加速</div>
  </div>

  <div class="card tight" style="border-color:#f97316;box-shadow:4px 4px 0 #f97316">
    <div style="font-size:24px">📣 内容分发产出</div>
    <div style="font-size:13px;font-weight:700;margin:6px 0">5 大平台同步 / 一稿多发 / SEO 优化</div>
    <div style="font-size:11px;color:#666;line-height:1.6">工具：Cowork + 小红书 / 公众号 / 朋友圈 / LinkedIn / Twitter<br>P7 学 · 内容生产闭环</div>
    <div style="font-size:11px;color:#f97316;margin-top:6px">→ 自媒体 / 个人品牌 / 内容运营</div>
  </div>
</div>

<div class="copy-block">
  <div class="label">营销 Hook · "8 类产出" 角度（最强差异化）</div>
  <div class="title">📝 标题候选</div>
  <div class="content">1. 一门课，学会做 8 种 AI 产出（PPT / 音乐 / 视频 / 海报 / 网站 / 数据 / 自动化 / 内容分发）

2. 别再纠结学哪个 AI 工具 — 这门课让你一次涉及 33 个，组成 8 种创作能力

3. 6 周：从 0 学会做 PPT、做视频、做网站、做音乐、做海报、做数据 Dashboard

4. 99% 的 AI 课只教你"用 AI 聊天"。这门教你 8 种 AI 创作能力，一个比一个能用

5. 文字 / 图像 / 音频 / 视频 / 网页 / 数据 / 自动化 / 分发 — AI 创作的 8 个维度，一门课全包</div>

  <div class="title" style="margin-top:14px">📄 朋友圈 / 私聊推荐文案</div>
  <div class="content">推荐一门 AI 课 — 学完会做 8 类东西，不是只学一个工具：

📊 文档：PPT / BP / 简历 / 提案 / 白皮书
🎨 视觉：海报 / 配图 / 印刷品（含动漫风格）
🎵 音频：TTS 配音 / BGM 音乐 / 多语言
🎬 视频：60s 科普 / 短视频 / B-roll
🌐 网页：Landing Page / Admin CMS
🤖 自动化：AI Agent / 定时任务
📊 数据：Dashboard / Excel 加速
📣 分发：5 平台同步 / 一稿多发

匠人学院《人人都能学的 AI Coding 实战课》，基础班 $960 / 进阶班 $2280 AUD。
全程不写代码，6-8 周做出 5-8 件能放进作品集的真东西。</div>
</div>

<div class="copy-block">
  <div class="label">小红书帖 · "8 种产出" 系列（连发 8 帖形成内容矩阵）</div>
  <div class="title">📝 8 个系列标题模板</div>
  <div class="content">每周 1 帖、连发 8 周，学员真实做出来的成果证明 8 种产出能力。

第 1 帖：[文档型] 我用 AI 做出 BP 商业计划书（不会写代码也能搞）
第 2 帖：[视觉型] 我用 AI 画出印刷级海报（gpt-image-2 + Midjourney）
第 3 帖：[音频型] 我用 AI 做了一段中英双语配音（ElevenLabs + 阿里云）
第 4 帖：[视频型] 我用 AI 做了 60s 知识科普视频（不学剪辑软件）
第 5 帖：[网页型] 我用 AI 做了一个真上线的 landing page（Vercel 部署）
第 6 帖：[自动化] 我做了个 Agent 每天 8 点自动给我发金融新闻
第 7 帖：[数据型] 我做了个 Dashboard 自动追踪 [话题] 数据
第 8 帖：[分发型] 我一份内容自动改成了 5 平台版本

每帖结构：
- 标题（如上）
- 我之前做不出 → 现在做出来了
- 用了什么工具
- 5-8 张配图（产出截图 + 工具截图）
- 课程链接</div>
</div>

<h2>🎯 5 个角度的核心 hook</h2>
<p style="font-size:13px;color:#666;margin-bottom:12px">同一门课的 5 种切入角度。海报标题 / 视频开场 / 文章 title 选一个角度复用。</p>

<div class="hook-card">
  <div class="angle">角度 1 · 痛点</div>
  <div class="hook">"做了 5 年 PPT，但我一个真产品都没做过"</div>
  <div class="note" style="margin-top:8px">— 适合：在职白领（已工作 3 年+）· 情绪：自我反思</div>
</div>

<div class="hook-card">
  <div class="angle">角度 2 · 时间</div>
  <div class="hook">"6 周做出 5 个真产品（PPT / PDF / 网站 / 视频 / 自动化）"</div>
  <div class="note" style="margin-top:8px">— 适合：通用 · 情绪：直接量化</div>
</div>

<div class="hook-card">
  <div class="angle">角度 3 · 方法</div>
  <div class="hook">"不学 for 循环 / if else / 变量声明 — 用 Cowork 对话就能做产品"</div>
  <div class="note" style="margin-top:8px">— 适合：非技术 / 想转型者 · 情绪：解除恐惧</div>
</div>

<div class="hook-card">
  <div class="angle">角度 4 · 趋势</div>
  <div class="hook">"2026 年 AI 时代，会用 AI 做产品比会写代码更值钱"</div>
  <div class="note" style="margin-top:8px">— 适合：行业洞察读者 (LinkedIn / 知乎) · 情绪：紧迫感</div>
</div>

<div class="hook-card">
  <div class="angle">角度 5 · 对比</div>
  <div class="hook">"市面上 99% 的 AI 课在教你聊天，这门课教你做产品"</div>
  <div class="note" style="margin-top:8px">— 适合：对比其他 AI 课的犹豫者 · 情绪：差异化</div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<h2>🛠️ AI 工具内容矩阵（33 个工具 = 30+ 帖能发）</h2>
<p style="font-size:13px;color:#666;margin-bottom:12px">课里覆盖 33 个 AI 工具。每个工具发 1 帖小红书 + 1 个 30s 短视频 = <strong>60+ 内容点</strong>。不用为发什么愁。</p>

<div class="copy-block">
  <div class="label">策略 1 · 工具系列连发（每周 1 个工具）</div>
  <div class="title">📅 30 周内容日历</div>
  <div class="content">每周一个工具，30 周连发。每个工具 1 篇小红书图文 + 1 个 30s 短视频 = 60+ 内容点。

模板：每个工具的小红书帖结构 ⬇️

【标题】用 [工具] 5 分钟做了 [产出物]，零基础也能跟 🤩
【正文】
- 我是谁（背景一句）
- 之前怎么做这件事（费时 / 费钱 / 做不出）
- 用这个工具的 3 步（截图 1/2/3）
- 最后的产出（截图 + 链接）
- 工具地址 + 课程地址
【话题】#[工具名] #AI工具 #零基础 #数字技能

示例：用 Suno 5 分钟做了一首科普视频 BGM，零基础也能跟 🤩</div>
</div>

<div class="copy-block">
  <div class="label">策略 2 · 工具横评帖（5 帖出爆款）</div>
  <div class="title">🔥 5 个横评帖标题候选</div>
  <div class="content">1. 6 大 AI 生图工具横评 | gpt-image-2 / Midjourney / Flux / DALL-E / SD / 即梦 谁最强？

2. 4 大 AI 视频生成工具实测 | Runway / Veo3 / 可灵 Kling 横评（含价格 / 时长 / 中文支持）

3. 中文 TTS 三巨头横评 | 阿里云 / 火山 / 腾讯，做科普视频该选哪个

4. AI 写代码工具横评 | Cursor / Claude Code / Cowork / Copilot 谁最值得学

5. 4 个零代码数据库横评 | Sheets / Airtable / Supabase / Notion API 怎么选

每帖正文结构：
- 引子（为什么要测试这些工具）
- 测试维度（5 个维度，如：画质 / 价格 / 中文支持 / 速度 / 商用许可）
- 横评表（一张表搞定）
- 推荐使用场景（场景 1 选 X，场景 2 选 Y）
- 我学这门课的真实体验
【话题】#AI工具横评 #生图工具 #买课指南</div>
</div>

<div class="copy-block">
  <div class="label">策略 3 · 工具栈一图流（吸睛 + 直接转发）</div>
  <div class="title">🗺️ 工具栈地图（1 张图）</div>
  <div class="content">设计 1 张大图（建议尺寸 1242×1660 小红书竖版）：

▼ 顶部 ▼
标题："学完这门课，你的 AI 工具栈"
副标题："13 个 Phase · 33 个工具 · 一张图看清"

▼ 中部 ▼ 分类树状图
🧠 编程助手 → Cowork / Cursor / Claude Code
🎨 生图 → gpt-image-2 / Midjourney / Flux / DALL-E / 即梦
🎙️ TTS → ElevenLabs / 阿里云 / 火山 / 腾讯
🎵 音乐 → Suno / Udio / Stable Audio
🎬 视频 → Runway / Veo3 / Kling
🎞️ 渲染 → HyperFrames
📊 PPT → Slidev / reveal.js
🌐 部署 → Vercel / GitHub Pages / Cloudflare
🤖 自动化 → cron / Skills / GitHub Actions
📚 笔记 → Obsidian
💾 数据 → Sheets / Airtable / Supabase / Notion
📈 可视化 → ECharts / Mermaid
📋 Excel → VBA / Apps Script

▼ 底部 ▼
"匠人学院《人人都能学的 AI Coding 实战课》第 2 期"
课程链接 + 二维码

正文配文：
"很多人问我学了多少工具，画了张图。
6-8 周里你会用 33 个 AI 工具组成一套完整工作流。
不是为了用工具而用工具 — 是每个工具对应一个具体产出。
存图 → 报名时对照看自己能学到什么。"</div>
  <div class="note">💡 配图制作：可用 Figma / Canva 或让 Cowork 帮你生成 SVG。详细工具数据见 <a href="./tools.html">🛠️ AI 工具大全</a></div>
</div>

<div class="copy-block">
  <div class="label">策略 4 · 工具盲盒短视频（30 个 30s 视频）</div>
  <div class="title">🎬 视频脚本模板（30s × 30 个工具 = 15 分钟内容池）</div>
  <div class="content">═══ 镜头 1 · 0-3 秒 ═══
画面：工具 logo 大字 + "你听过 [工具名] 吗？"

═══ 镜头 2 · 3-10 秒 ═══
画面：1 句话讲工具能做什么
旁白：[工具] 是用来 [一句话用途] 的 AI 工具

═══ 镜头 3 · 10-25 秒 ═══
画面：实操录屏，3 步生成一个产出
旁白：3 步教你用 — Step 1 / Step 2 / Step 3

═══ 镜头 4 · 25-30 秒 ═══
画面：最终产出截图 + "课程链接评论区"
旁白：这是我在《人人都能学的 AI Coding 实战课》第 X 节学的。
连发 30 个，从 Cowork 一路讲到 Apps Script。每天 1 个，30 天形成内容矩阵。</div>
</div>

<div class="copy-block">
  <div class="label">策略 5 · 公众号长文：年度 AI 工具地图</div>
  <div class="title">📰 标题候选</div>
  <div class="content">1. 2026 年我用过的 33 个 AI 工具大盘点：哪些值得学、哪些可以跳过

2. 一张图看懂 2026 年 AI 工作流：33 个工具 + 12 个类别 + 1 套学习路径

3. 别再问"AI 该学什么"了，这 33 个工具按类别画好了图给你

正文结构（3000 字）：
- 引子：为什么我要做这张图（200 字）
- 工具地图全图（配图 + 简介）（300 字）
- 12 个类别逐个介绍（每个类别 200 字 × 12 = 2400 字）
- 学习路径建议（按"我建议你先学 A，再学 B"的顺序）（200 字）
- 推荐：跟着课程系统学 vs 自学（100 字）+ CTA

CTA："如果你想系统学这 33 个工具，匠人学院第 2 期招生中。"</div>
</div>

<div class="copy-block">
  <div class="label">策略 6 · 朋友圈引流（"33 个 AI 工具速查表免费领"）</div>
  <div class="title">💌 朋友圈引流文案</div>
  <div class="content">我整理了一份《33 个 AI 工具速查表》（基于我学过的一门 AI 课）：

12 个类别 × 33 个工具 × 每个工具的用途 / 价格 / 难度 / 替代品

私我"工具表"免费送你 ✋

（小提示：表里的工具我都跟着课程学过，是真的能用。
不是"听过的工具大集合"。）</div>
  <div class="note">💡 引流后再推荐课程：把 tools.html 截图打包 PDF 送，简介里加课程链接</div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">📕</span> 小红书 · 5 套图文</h2>
  <p style="font-size:13px;color:#666">每套包含：标题 / 正文 / 5-8 张配图建议 / 话题。运营直接复制 → 配图 → 发布。</p>

  <div class="copy-block">
    <div class="label">套 1 · 痛点切入（最高吸引力）</div>
    <div class="title">📝 标题</div>
    <div class="content">做了 5 年 PPT，我才发现自己什么都没做过 😭</div>

    <div class="title" style="margin-top:14px">📄 正文</div>
    <div class="content">作为在职 5 年的运营，每年做 50+ 份 PPT、写 100+ 篇文章、跑 200+ 场活动...
但当朋友问我"你做过什么产品"时，我答不上来。

PPT、报告、活动 — 这些都是工作"流程"，不是"成果"。

直到我跟了一门叫《人人都能学的 AI Coding 实战课》的课程，6 周做出 5 个真实产品：

1️⃣ 一个可在线分享的 HTML PPT（不是 .pptx）
2️⃣ 一份印刷级 A4 PDF（BP / 简历 / 提案任选）
3️⃣ 一个真上线的 landing page 网站
4️⃣ 一支 60s AI 配音 + 字幕的知识科普视频
5️⃣ 一份多平台分发的内容（5 平台风格）

最重要的是 — 不学一行代码。Cowork 对话就能做。

现在简历多了 5 个 AI 项目，跟招聘官的对话直接换频道。

留言告诉我你最想做哪一个？👇</div>

    <div class="title" style="margin-top:14px">📷 配图建议（5 张）</div>
    <div class="content">图 1: 封面 — "做了 5 年 PPT 但..." + 哭脸表情
图 2: 5 个产品截图九宫格（PPT / PDF / 网站 / 视频 / 分发）
图 3: 课程大纲截图（13 phase 一览）
图 4: Quest 实战清单（14 个 Quest）
图 5: 班型对比（基础 $960 vs 进阶 $2280）+ 报名 CTA</div>

    <div class="hashtags">#AICoding #零基础 #数字技能 #职场技能 #AI技能 #转型 #求职作品集</div>
  </div>

  <div class="copy-block">
    <div class="label">套 2 · 时间紧迫感</div>
    <div class="title">📝 标题</div>
    <div class="content">我用 6 周做出了 5 个产品（without 写一行代码）🤯</div>

    <div class="title" style="margin-top:14px">📄 正文</div>
    <div class="content">6 周学习日记，每周做出一个真产品 👇

📅 Week 1 — 装 Cowork、写 PRD、做产品 design.md
📅 Week 2 — 做出第一份 PPT（楼盘案例教学）
📅 Week 3 — 做出 PDF 全家桶（我选了 BP 模板）
📅 Week 4 — 做出 landing page 网站（部署上线 Vercel）
📅 Week 5 — 做出 60s 视频（AI 配音 + BGM + HyperFrames 出片）
📅 Week 6 — 一稿多发到 5 大社交平台

学的过程像在玩游戏 — AI Tutor 每节课带练（叫 Quest 实战）
有时甚至忘了我在"学习"，只觉得在"做产品"。

最 surprising 的：6 周下来我开始用 Cowork 处理工作里的 PPT、文档、邮件 — 一周省下 10 小时。

是匠人学院出的，叫《人人都能学的 AI Coding 实战课》。
基础班 $960 / 6 周；进阶班 $2280 / 8 周（多 admin CMS + 数据 dashboard + 视频升级）。

链接评论里取🔗</div>

    <div class="title" style="margin-top:14px">📷 配图建议（6 张）</div>
    <div class="content">图 1: 封面 — "6 周 5 个产品" 大字 + 数字图标
图 2: Week 1-6 时间线（每周一个交付物 emoji）
图 3-7: 每个交付物展示截图（PPT / PDF / 网站 / 视频 / 分发）一图一个
图 8: 班型对比 + CTA</div>

    <div class="hashtags">#AI做产品 #零基础学AI #6周计划 #数字游民 #学员日记 #作品集</div>
  </div>

  <div class="copy-block">
    <div class="label">套 3 · 方法论（解除恐惧）</div>
    <div class="title">📝 标题</div>
    <div class="content">为什么我说"学 AI 不要去学编程"？看完你就懂了 💡</div>

    <div class="title" style="margin-top:14px">📄 正文</div>
    <div class="content">我之前被"学 AI 就得学 Python"骗了 2 年。

买了《Python 从入门到精通》，看了 5 章就放弃；
报过 Coursera 的 ML 课，听不懂偏导数；
跟着 YouTube 教程做项目，环境装不上就放弃...

直到我接触 Cowork — Anthropic 出的 AI 工作台。

它不要求你懂 for 循环 / if else / 类继承 / 算法复杂度。
你只要会用中文描述你的需求：
"帮我做一个红色 CTA 按钮、点击后弹个对话框的网页"
Cowork 就帮你做出来。

整个流程改变了：
❌ 旧方法：学语法 → 学库 → 学框架 → 学部署 → 终于做出第一个网页（半年）
✅ 新方法：描述需求 → Cowork 做 → 你检查 → 调整 → 上线（一节课）

这门课叫《人人都能学的 AI Coding 实战课》，6-8 周让零基础非技术人员做出 5-8 个真产品。

我已经报名了，留言一起？</div>

    <div class="hashtags">#AI编程 #Cowork #零基础 #Claude #ChatGPT #AI工具 #数字技能</div>
  </div>

  <div class="copy-block">
    <div class="label">套 4 · 学员视角（共鸣型）</div>
    <div class="title">📝 标题</div>
    <div class="content">报这门 AI 课前，我做了 3 件事 — 现在不后悔 ✅</div>

    <div class="title" style="margin-top:14px">📄 正文</div>
    <div class="content">$2280 不是小钱（进阶班），报名前我做了 3 件事 ⬇️

1️⃣ 看了课程大纲（13 phase + 14 个 Quest 实战）
   — 不是"AI 入门 / Prompt 工程 / 调 API"这种泛泛课
   — 而是 "用 Cowork 做 PPT / PDF / 网站 / 视频" 5-8 个具体交付物

2️⃣ 对比了 3 个同行课程
   — 大部分要么太基础（"什么是 AI" 讲 1 周）
   — 要么太技术（直接讲 LangChain + Vector DB 把人讲晕）
   — 这门课在中间 — 教方法论 + 教做东西

3️⃣ 算了 ROI（不算工资，算时间）
   — 8 周 × 每周 10 小时 = 80 小时
   — 学完能做 PPT/PDF/网站/视频/Dashboard
   — 如果只学一个产品形态都值这个钱

如果你是：
✓ 在职白领想转型
✓ 大学生想丰富简历
✓ 创业者想做 MVP
✓ 自由职业者想拓展输出能力

这门课 ROI 算法都成立。

匠人学院《人人都能学的 AI Coding 实战课》第 2 期，链接在评论。</div>

    <div class="hashtags">#AI课程 #报名前必看 #课程选择 #ROI #数字技能 #转型 #求职准备</div>
  </div>

  <div class="copy-block">
    <div class="label">套 5 · 对比型（差异化）</div>
    <div class="title">📝 标题</div>
    <div class="content">市面 10 大 AI 课横评 | 99% 在教聊天，这门在教做产品 🤖</div>

    <div class="title" style="margin-top:14px">📄 正文</div>
    <div class="content">这半年我看了 30+ AI 课，做了张横评 👇

🟥 "AI 入门"类（占 40%）
   — 教什么是 GPT、什么是 Prompt
   — 学完你会用 ChatGPT
   — 但做不出产品

🟧 "Prompt 工程"类（占 30%）
   — 教写好 Prompt
   — 学完你能更好用 ChatGPT
   — 但还是做不出产品

🟨 "AI 编程"类（占 20%）
   — 教用 Cursor / Claude Code 写代码
   — 学完你能 vibe coding
   — 但...要先懂代码

🟩 "用 AI 做产品"类（占 10%）— 这门课就是这类
   — 教用 Cowork / Cursor 做出 PPT / PDF / 网站 / 视频
   — 学完你产出 5-8 个真东西
   — 零基础也能跟下来

如果你想"会用 AI" → 报 🟥🟧 类（甚至免费教程都够）
如果你想"用 AI 做出东西" → 必须 🟩 类

匠人学院《人人都能学的 AI Coding 实战课》第 2 期招生中，链接评论🔗</div>

    <div class="hashtags">#AI课程横评 #AI做产品 #AI入门 #AI编程 #课程对比 #买课指南</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">📰</span> 微信公众号 · 长文大纲（3000 字）</h2>
  <p style="font-size:13px;color:#666">运营拿大纲扩写到 3000 字长文。5 个标题候选选一个。</p>

  <div class="copy-block">
    <div class="label">5 个标题候选</div>
    <div class="content">1. 做了 5 年 PPT 的运营人，为什么我决定停下来学 AI 做产品

2. 2026 年最值得学的 AI 课终于来了：不写代码，6 周做出 5 个产品

3. 用 6 周做出 5 个 AI 产品 — 一个零基础非技术学员的真实路径

4. 市面上 99% 的 AI 课在教你聊天，这门课教你做产品

5. AI 时代的"手艺人"养成路径：不写代码，用 Cowork 做出能用的产品</div>
  </div>

  <div class="copy-block">
    <div class="label">正文结构</div>
    <div class="content">═══ 第 1 段 · Hook（200 字）═══
用真实故事开场：
"上周和一个学妹吃饭，她说她毕业 3 年，公司年年评 5 星员工，但当我问她'你做过什么产品'时，她答不上来 — 全是 PPT、报告、邮件、会议。这场景让我想起 5 年前的自己..."

═══ 第 2 段 · 痛点（500 字）═══
列 5 类学员画像 + 各自痛点：
- 在职白领 5+ 年 → 工作堆山没真东西
- 大学生 → 简历空、JD 都要 AI 经验
- 创业者 → 想做产品请不起开发
- 自由职业 → 输出能力单一
- 转型者 → 不知道学什么

═══ 第 3 段 · 转折（300 字）═══
"为什么 2026 年这门课才出现？"
- 2023 年 ChatGPT 出来，AI 课普及但都教"聊天"
- 2024 年 Cursor 流行，AI 编程课普及但要懂代码
- 2025 年 Claude Cowork 出来 — 真正"非技术人员也能做产品"成立
- 2026 年这门课基于 Cowork 工作流系统化设计

═══ 第 4 段 · 课程内容（800 字）═══
13 phase 用故事讲一遍：
P0-P1 Cowork 上手 + PRD/design.md → "你的产品第一次有形"
P2-P3 PPT + PDF → "你的产品对外讲清楚了"
P4 Landing Page → "你的产品有了网址"
P5 自动化 → "你的工作不再需要每件事手动做"
P6-P7 视频 + 多平台分发 → "你的内容能传播了"
P8 基础班结业（基础班结束）
[进阶班继续] P9-P12 Admin CMS + Agent + 数据 Dashboard + 进阶答辩

═══ 第 5 段 · 班型 + 价格（300 字）═══
- 基础班 6 周 / $960 AUD / 76 节课 / 5 件交付物
- 进阶班 8 周 / $2280 AUD / 109 节课 / 8 件交付物
- 价格逻辑：基础班对标 $192/周（不变第 1 期价）；进阶班单课均价 $21（市场 AI 课普遍 $30-50/课）

═══ 第 6 段 · 学完拿到手（400 字）═══
具体列 8 个交付物 + 每个的用途场景

═══ 第 7 段 · CTA（200 字）═══
- 报名链接
- 早鸟价 / 限时优惠（如适用）
- 上一期学员推荐（如适用）
- 联系老师微信</div>
    <div class="note">⚠️ 写正文时严守红线：不承诺金钱 / 入职 / 副业 / 月薪 — 只承诺过程 + 作品 + 技能。</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">💬</span> 朋友圈 · 6 条文案（按时段发）</h2>
  <p style="font-size:13px;color:#666">6 条文案对应不同时段 + 不同情绪。建议每天 1 条，连发 6 天形成"学习日记"叙事。</p>

  <div class="copy-block">
    <div class="label">Day 1 · 早 8 点 · 励志开篇</div>
    <div class="content">早上好。
今天是我学 AI 做产品的第 1 天。
6 周后我会做出 5 个真产品 — PPT、PDF、网站、视频、自动化。
不学一行代码。
你呢，要不要一起？

🔗 课程链接（评论区）</div>
  </div>

  <div class="copy-block">
    <div class="label">Day 2 · 中午 12 点 · 痛点共鸣</div>
    <div class="content">你有没有这种感觉 —
工作很忙，
但回头看一年做了什么，
全是 PPT、报告、会议纪要...
没一个真东西。

我决定改变。</div>
  </div>

  <div class="copy-block">
    <div class="label">Day 3 · 晚 7 点 · 成果展示</div>
    <div class="content">今天完成了 P3 PDF 全家桶 Quest —
用 Cowork 做出一份 BP 商业计划书 PDF（10 页）。

讲师说我可以拿这个去找投资人 demo。
（虽然我还没准备好...但作品确实在那）

[配 BP 截图]</div>
  </div>

  <div class="copy-block">
    <div class="label">Day 4 · 晚 11 点 · 反思型</div>
    <div class="content">今天 P5 学了 Obsidian + AI 知识管理。

突然发现我过去 5 年的工作笔记 —
散落在 100 个 Word doc 里，
有用的找不到、没用的删不掉。

明天开始建自己的"第二大脑"。
AI 帮我自动加标签、建关联、写 summary。

不学 AI 之前，我从来没想过笔记可以这样组织。</div>
  </div>

  <div class="copy-block">
    <div class="label">Day 5 · 上午 10 点 · 工具分享</div>
    <div class="content">分享个最近发现的"宝藏"组合 👇

Cowork（写需求 + 想思路）
+ Cursor（写代码）
+ Claude Code（自动化）
+ HyperFrames（一键出视频）

零基础 → 6 周做出能用的产品。

这门课叫《人人都能学的 AI Coding 实战课》，匠人学院出的。

适合：在职白领、应届生、创业者、自由职业。
不适合：想速成的、想躺学的、想免费白嫖的（哈哈）。</div>
  </div>

  <div class="copy-block">
    <div class="label">Day 6 · 周末晚 · 收尾推荐</div>
    <div class="content">这周我做了 5 件事，每件都比上周强一点：
✓ 学会用 Cowork 写 PRD
✓ 做了人生第一份在线 HTML PPT（不是 .pptx，是可分享 URL！）
✓ 设计了印刷级 A4 海报
✓ 上线了 landing page 网站
✓ 第一次给视频做 AI 配音

下周开始做数据自动化 + 进阶班内容。

如果你也在找"能真做出东西"的 AI 课，可以了解下：
《人人都能学的 AI Coding 实战课》第 2 期招生中。</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">💼</span> LinkedIn · 2 条专业 post</h2>
  <p style="font-size:13px;color:#666">面向在职白领 / 中层管理 / 行业洞察读者。不用 emoji，专业语气。</p>

  <div class="copy-block">
    <div class="label">Post 1 · 行业洞察型</div>
    <div class="content">AI 时代的最大变化不是 ChatGPT 能写代码 — 而是不会写代码的人也能做产品。

6 周前，我连"网站"和"前端后端"都分不清。

今天，我上线了一个 landing page，
用 AI 写了一份 BP 给我的导师看，
做了一支 60 秒科普视频发到 LinkedIn。

我学的不是编程，是 — 怎么把想法"描述清楚"让 AI 做。

这门课叫《人人都能学的 AI Coding 实战课》（People-First AI Coding），由匠人学院（jiangren.com.au）出品。

推荐给在职做产品 / 想转型 / 想做 MVP 的 connections。

留言告诉我你想做的第一个产品是什么。</div>
  </div>

  <div class="copy-block">
    <div class="label">Post 2 · 学完总结型</div>
    <div class="content">6 周课程 + 5 个交付物 + 1 套系统化思维：

1. 用 Cowork 写 PRD + design.md（产品设计文档）
2. 做出在线 HTML PPT（不是 .pptx — 是可分享 URL，能嵌网站）
3. 设计 A4 PDF 全家桶（海报 / BP / 简历 / 提案 / 白皮书）
4. 上线 Landing Page 网站
5. 制作 60s 知识科普视频（AI 配音 + BGM + 字幕）
6. 一稿多发到 5 大社交平台

全程没写一行代码。

2026 年，"用 AI 做产品的能力"比"学一门编程语言"更值钱。

如果你也想跟，匠人学院第 2 期招生中。Comment "AI" 我私你链接。</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">🎬</span> 30 秒视频脚本（B 站 / 抖音 / 视频号 / 小红书视频通用）</h2>

  <div class="copy-block">
    <div class="label">完整脚本 · 30s · 含分镜</div>
    <div class="content">═══ 镜头 1 · 0-3 秒（Hook）═══
画面：大字标题 "AI 真的能让我做出产品吗？"
旁白：（疑问语气）"AI 真的能让我做出产品吗？我决定 6 周亲自验证。"

═══ 镜头 2 · 3-10 秒（冲突）═══
画面：黑屏白字依次出现：
"我不会写代码"
"我没做过任何产品"
"我只会做 PPT"
旁白：（自嘲）"之前我以为不会编程就别想做产品。直到我跟了这门课。"

═══ 镜头 3 · 10-20 秒（展示）═══
画面：快剪 5 个作品截图，每个 2 秒：
📊 在线 HTML PPT
📄 A4 PDF（BP 模板）
🌐 上线 landing page 网站
🎬 60s 视频片段
📣 5 平台分发截图
旁白：（兴奋）"6 周 — 一份 PPT、一份 BP、一个网站、一支视频、5 平台分发。
真的做出来了。"

═══ 镜头 4 · 20-25 秒（亮点）═══
画面：课程数字卡片
- "13 个 Phase"
- "14 个 Quest 实战"
- "全程不写代码"
旁白：（介绍）"《人人都能学的 AI Coding 实战课》— 13 个 Phase、14 个 Quest 实战、零基础非技术友好。"

═══ 镜头 5 · 25-30 秒（CTA）═══
画面：报名 QR 码 / 链接 / 公众号
旁白：（呼吁）"匠人学院第 2 期招生中，链接在评论区。
留言告诉我你最想做的第一个产品是什么。"</div>
    <div class="note">💡 拍摄建议：可用 HeyGen / D-ID 数字人或学员真人出镜（更真实）；配 BGM 用 Suno；字幕 ElevenLabs/阿里云 TTS 同步。</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">💌</span> 私信冷启动 · 3 个版本</h2>
  <p style="font-size:13px;color:#666">销售 / 课程顾问 / 老学员推介时用。简短直接、不像推销。</p>

  <div class="copy-block">
    <div class="label">版本 1 · 在职白领（3-10 年）</div>
    <div class="content">你好 [姓名]，
我是匠人学院的 [姓名]。

看到你工作 [X] 年了。冒昧问一个问题 —
你做过一个能拿出手的"真正的产品"吗？
不是 PPT、报告、文章 — 而是一个用户能用的 app / 网站 / 工具？

如果没有 / 不多 — 我们刚出了一门课，让在职白领 6 周做出 5 个真产品（用 AI，不写代码）。
基础班 $960 AUD，6 周完成。

有兴趣聊聊吗？发你课程大纲？</div>
  </div>

  <div class="copy-block">
    <div class="label">版本 2 · 应届毕业生 / 在校</div>
    <div class="content">嗨 [姓名]，
看到你在准备 [行业] 求职。

最近的招聘 JD 普遍要求"AI 项目经验"——
但学校没教你怎么做 AI 项目（也没人教）。

我们最近一门课叫《人人都能学的 AI Coding 实战课》，6 周帮零基础学员做出 5 个 AI 项目（可直接放进作品集）。

学员说找完这门课的工作面试中，被问"做过什么 AI 项目"时不再尴尬了。

要不要我把课程大纲发你？基础班 $960 AUD。</div>
  </div>

  <div class="copy-block">
    <div class="label">版本 3 · 自由职业者 / 创业者</div>
    <div class="content">[姓名] 你好，

看到你做自由职业 / 创业。冒昧问一下：
- 你想给客户做 BP / 提案 / 网站，但要请开发太贵？
- 你想做内容（PPT / 视频 / 海报），但工具学不过来？

我们出了一门课，6-8 周教非技术创业者用 Cowork 自己做出来 —
PPT / PDF / 网站 / 视频 / Admin CMS / 数据 Dashboard 全套。

进阶班 8 周 $2280 AUD，包含 Admin CMS + 每日自动 Agent + 数据 Dashboard。

对创业者特别合适。要不要看下大纲？</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">❓</span> FAQ · 10 个常见问题 + 异议处理</h2>
  <p style="font-size:13px;color:#666">销售 / 直播 / 私信回复时直接用。</p>

  <div class="copy-block">
    <div class="label">Q1 · 我完全零基础，能跟下来吗？</div>
    <div class="content">能。这门课就是为零基础设计的。

P0 第一周教 "什么是 Cowork、怎么装、怎么对话" — 比装微信还简单。
后面所有 phase 都基于对话，不学语法 / 不学库 / 不学框架。

如果你能用 ChatGPT 聊天 → 你能学这门课。
唯一要求：愿意每周花 8-10 小时跟课。</div>
  </div>

  <div class="copy-block">
    <div class="label">Q2 · 我没时间，每周能挤出多少时间够？</div>
    <div class="content">基础班最少 6-8 小时 / 周，进阶班 8-10 小时。

时间分配（基础班）：
- 直播课 2-3 小时（晚上 / 周末）
- 自学 + Lab 2-3 小时（碎片时间也行）
- Quest 实战 2-3 小时（一次性集中）

每天 1 小时 + 周末补一次大块时间也行。</div>
  </div>

  <div class="copy-block">
    <div class="label">Q3 · 学完真的能做出 5 个产品？还是只是 demo？</div>
    <div class="content">真做出来 — 不是 demo。

每个 Quest 实战的 successCriteria 都是"具体产出文件"：
- Q06: 1 个在线 HTML PPT URL（≥15 页）
- Q07: 1 份 .pdf 文件（BP/简历/提案任选）
- Q04: 1 个 https://yoursite.vercel.app 真实网址
- Q08: 1 个 .mp4 文件（60s ±5s, ≥1080p）
- Q01: Cursor 装好 + 第一个 HTML 网页

学完你电脑上 / 网上有 5 个能给别人看的真东西。AI Tutor 一对一带你做。</div>
  </div>

  <div class="copy-block">
    <div class="label">Q4 · 跟市面上其他 AI 课什么区别？</div>
    <div class="content">三个核心区别：

1. ✅ 不教 "用 AI"，教 "用 AI 做产品"
   市面 99% 教用 ChatGPT 写文案。这门教用 Cowork 做能用的产品（PPT/PDF/网站/视频/Dashboard）。

2. ✅ 14 个 Quest 实战，AI Tutor 一对一带
   不是看视频做题。每个 Quest 提交一份具体文件 / URL。

3. ✅ Phase 级清晰 tier（基础 vs 进阶）
   基础班学完做 5 个产品 / 进阶班再加 Admin / 数据 Dashboard / 视频升级。不纠结买哪个版本。</div>
  </div>

  <div class="copy-block">
    <div class="label">Q5 · 不学编程真能做出网站吗？</div>
    <div class="content">能。这是最反直觉的部分。

P4 教 "用 Cursor + Claude Code"：
- 你说："做一个红色 CTA 按钮、点击弹对话框的网页"
- AI 写代码 + 显示给你看
- 你在浏览器看效果 / 让 AI 改

不需要懂：HTML 语法 / CSS 选择器 / JS 函数 / 前后端 / 数据库
需要做：描述清楚需求 + 看效果对不对 + 让 AI 改

学员普遍反馈：第一次成功部署网站到 Vercel 的那一刻，比 5 年前学 React 的两个月还激动。</div>
  </div>

  <div class="copy-block">
    <div class="label">Q6 · 基础班 vs 进阶班怎么选？</div>
    <div class="content">3 个判断标准：

✅ 选基础班如果：只想"知道 AI 能做什么" / 时间有限 / 想先试水
✅ 选进阶班如果：想做"运营级产品"（带 Admin / 数据 Dashboard） / 想 AI Excel/Sheets 立刻在工作里用 / 完整数据闭环

🟨 真心建议：工作 3 年以上 + 想做有用的产品 → 直接进阶。多 $1320 但内容多 35%。
🟪 真心建议：应届 / 学生 → 基础班够用。先做出 5 个作品集再说。</div>
  </div>

  <div class="copy-block">
    <div class="label">Q7 · 学不会能退款吗？</div>
    <div class="content">⚠️ 具体退款政策以匠人学院官方为准。

一般参考：
- 开课前 3 天可全额退款
- 开课后 1 周内：扣 30% 手续费
- 开课 1 周后：转下一期 / 延期

加上：AI Tutor 一对一带练机制 — 学不会会有人帮你，不让掉队。</div>
  </div>

  <div class="copy-block">
    <div class="label">Q8 · 学完能找工作 / 能赚钱吗？</div>
    <div class="content">⚠️ 严守红线 — 合规话术：

"这门课的承诺是 '你会有 5-8 件能放进作品集的真实产品'。

求职是不是更容易、是不是能拿来接客户、是不是能做出产品赚钱 — 取决于你的发挥、市场、努力，不是课程能保证的。

我们能保证：
- 简历的 'AI 项目经验' 空白会被填满
- 跟招聘官 / 客户 / 投资人介绍时有作品展示
- 日常工作里 AI 工具使用效率显著提升

够不够回本，看你自己。"</div>
    <div class="note">🚨 永远不说"包就业 / 月入 / 副业 / 收入"— 违反 CLAUDE.md 红线</div>
  </div>

  <div class="copy-block">
    <div class="label">Q9 · 工具都要付费吗？</div>
    <div class="content">不全是。

🆓 免费（够大部分需求）：Cowork 免费额度 / Cursor 免费版 / gpt-image-2 免费 demo / Vercel / GitHub Pages / Slidev / HyperFrames / Obsidian / Sheets / cron

💰 建议付费（提升体验）：Cursor Pro $20/月 · ElevenLabs $22/月 · Suno $8/月 · Midjourney $10/月

🎁 课程会教 "免费版怎么用够、什么时候值得升级"。每月 $0-30 就够日常用。</div>
  </div>

  <div class="copy-block">
    <div class="label">Q10 · AI 发展这么快，学完会不会很快过时？</div>
    <div class="content">不会。这门课教的不是某个工具，是"工作流"。

工具会变（Cowork 可能改名 / Cursor 可能被超越 / Suno 可能消失）。
工作流不会变：描述需求 → AI 帮你做 → 你检查改 → 输出可用产品。

这套工作流 2026 年成立，2028 年依然成立。

而且课程团队会持续更新 outline.json —— 新工具评测加入、旧工具淘汰提示替代品。报这门课不是买"知识"，是买"AI 时代的工作方法论"。</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">🛤️</span> 学员路径 · 报名前 → 学完后 360° 变化</h2>
  <p style="font-size:13px;color:#666">用具体场景说"学完你的生活会怎么变"。比抽象承诺有说服力。</p>

  <div class="copy-block">
    <div class="label">在职白领 5 年画像</div>
    <div class="content">📍 报名前
- 简历："5 年运营经验，做过 100+ PPT、撰写过 50+ 报告"
- 面试官："你做过什么 AI 项目？" → 空气安静
- 朋友圈：转 AI 文章 + "学了 ChatGPT 用法"
- 工作：跟同事讨论"AI 怎么用"但没真用上
- 心理：知道要学但不知道学什么

📍 学完后（6 周后）
- 简历多了一栏 "AI 项目经验"：
  · 用 AI 主导制作了 1 份 BP（10 页 PDF）
  · 上线了 1 个 landing page（Vercel 部署）
  · 制作了 1 支 60s 知识科普视频
  · 实现了 1 套内容自动化分发流程
- 面试官："这些项目怎么做的？" → 你打开 GitHub + 网站演示
- 朋友圈：发自己做的产品 / 视频 / 截图
- 工作：用 Cowork 处理 PPT/文档/邮件，每周省 10+ 小时
- 心理：知道 AI 时代自己该往哪走</div>
  </div>

  <div class="copy-block">
    <div class="label">应届毕业生画像</div>
    <div class="content">📍 报名前
- 简历："会用 Python / Excel"（满屏校园经验）
- 投简历：JD 都要"AI 项目"，你一个没有 → 简历石沉大海
- 面试："做过什么项目" → 课程作业 + 实习 PPT
- 自信：低（觉得自己跟同龄人比无优势）

📍 学完后
- 简历："AI 实战项目 5 个"（图文展示）：
  1. AI 驱动的产品 PPT 设计
  2. 个人作品集 Landing Page（带域名）
  3. AI 自动化简历生成器
  4. 60 秒科普视频系列
  5. 行业数据 Dashboard（追踪目标公司）
- 投简历："你做过的项目让我们眼前一亮"
- 面试：能现场 demo 每个项目
- 自信：高（比同龄人多一年项目经验）</div>
  </div>

  <div class="copy-block">
    <div class="label">创业者画像</div>
    <div class="content">📍 报名前
- 想做产品但请开发 = 月薪 1.5W × 2 人 × 3 月 = 9 万起步
- BP 想找投资但没产品 demo → 投资人："等 MVP 出来再聊"
- 卡死在"想法很好，做不出来"

📍 学完后
- 自己用 Cowork + Cursor 做出 MVP（landing page + admin + 用户表单）
- 上线 Vercel + 自定义域名 → 真有用户能访问
- 视频 demo + BP PDF 一起发投资人
- 不用 9 万开发费 — $2280 + 8 周时间
- 后续迭代靠自己改，不用再找开发</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">⏱️</span> 5 个时长的 Mini-Pitch（10s / 30s / 1min / 3min / 5min）</h2>
  <p style="font-size:13px;color:#666">不同场合用不同长度。电梯里 10 秒、私聊 30 秒、直播 1-3 分钟、公开演讲 5 分钟。</p>

  <div class="copy-block">
    <div class="label">10 秒 · 一句话定位</div>
    <div class="content">"6 周教零基础非技术人员用 AI 做出 5 个真产品，全程不写代码。"</div>
  </div>

  <div class="copy-block">
    <div class="label">30 秒 · 朋友群 / 一句话推荐</div>
    <div class="content">"匠人学院新出的《人人都能学的 AI Coding 实战课》第 2 期 —— 6 周做出 5 个真产品（PPT / PDF / 网站 / 视频 / 自动化），全程用 Cowork 对话，不写代码。基础班 $960 AUD，进阶班 $2280 多 Admin CMS + 数据 Dashboard。我学过他们家课，质量稳。链接私我。"</div>
  </div>

  <div class="copy-block">
    <div class="label">1 分钟 · 直播开场 / 短视频</div>
    <div class="content">"我想推荐一门 AI 课，不是教你用 ChatGPT 聊天，而是教你做出能用的产品。

匠人学院《人人都能学的 AI Coding 实战课》第 2 期，6-8 周时间。

学完你电脑上 / 网上有 5-8 个东西：一份在线 HTML PPT、一份 A4 PDF 全家桶（BP/简历/提案）、一个上线的 landing page 网站、一支 60 秒科普视频，进阶班还有 Admin CMS、内容自动化 Agent、数据 Dashboard。

不是看视频做笔记 — 是 14 个 Quest 实战，AI Tutor 一对一带你做。最重要：全程不写代码。你描述需求，Cowork 帮你做。

基础班 $960，进阶班 $2280。链接评论区，私我看大纲。"</div>
  </div>

  <div class="copy-block">
    <div class="label">3 分钟 · 微信直播 / 抖音直播</div>
    <div class="content">═══ 开头 30s · Hook ═══
"今天聊一门让在职白领 6 周做出 5 个真产品的 AI 课。不是聊 AI、不是写 prompt — 是真的做出能用的产品。
如果你做了 5 年 PPT 但回头看一年没做出过一个真东西 — 这门课就是讲给你听的。"

═══ 30s-1:30 · 痛点 + 转折 ═══
"我们见过太多人：学 ChatGPT 一年还是只会写邮件、跟着教程做项目环境装不上就放弃、买了 30+ AI 课但简历一个项目都填不出来。
为什么？因为 99% 的 AI 课在教 '用 AI'，没教 '用 AI 做产品'。
直到 Anthropic 出了 Cowork — 不写代码、对话做产品。这门课就是基于 Cowork 设计的完整工作流。"

═══ 1:30-2:30 · 课程亮点 ═══
"分基础班 6 周 / 进阶班 8 周：
P0-P2 学用 Cowork 写 PRD / design.md / 做在线 HTML PPT。
P3 设计 A4 PDF 全家桶。
P4 用 Cursor + Claude Code 把 PPT 转 landing page，上线 Vercel。
P5 自动化基础（OCR / 提取 / cron）+ Obsidian 知识管理。
P6 做 60 秒知识科普视频（HyperFrames 一键出片）。
P7 一稿多发 5 大平台。
进阶班：P8 Admin CMS + 内容自动化 Agent。P9 视频 BGM 升级。P10 数据深度 + AI Excel 加速。
14 个 Quest 实战，每个产出真文件 / 真 URL。"

═══ 2:30-3:00 · 价格 + CTA ═══
"基础班 $960 AUD（不变第 1 期价），进阶班 $2280 AUD。
合规说：不承诺月入 / 包就业 / 接单数。只承诺你电脑上 / 网上会有 5-8 个能放进简历的真作品。够不够回本看你自己。
链接发评论区，扫码报名第 2 期。"</div>
  </div>

  <div class="copy-block">
    <div class="label">5 分钟 · B 站 / YouTube 长视频脚本</div>
    <div class="content">═══ 0-30s · Hook ═══
"AI 时代过去 3 年了，你做出过什么产品？不是 PPT、不是报告、不是邮件 — 是用户能用的产品。今天聊一门刚出的课，让零基础非技术人员 6 周做出 5 个真产品。"

═══ 30s-1:30 · 测评背景 ═══
"我看过 50+ AI 课、买过 12 门（花了 $6000+）、跟了 5 门到底。其中 4 门浪费时间。1 门真有用 — 让我做出了能上线的产品。这门就是匠人学院《人人都能学的 AI Coding 实战课》。"

═══ 1:30-3:00 · 课程结构 ═══
"13 个 Phase 我快速过一遍 [同 3 分钟版 P0-P11]"

═══ 3:00-4:00 · 价格 + 班型对比 ═══
"基础班 $960 / 6 周 / 76 节课 / 5 件作品。
进阶班 $2280 / 8 周 / 109 节课 / 8 件作品。
谁选哪个我画了一张图 [展示 tier 对比图]。"

═══ 4:00-4:30 · 红线说明 ═══
"该说不能说的 — 课程不承诺：
❌ 包就业 / 月薪 / 接单数 / 副业收入
✅ 只承诺过程 / 作品 / 技能 / 服务量
够不够回本，看你怎么用。"

═══ 4:30-5:00 · CTA ═══
"如果你想做产品但没编程基础 / 想转型但不知道学什么 / 想丰富简历的 AI 项目栏 — 链接评论第一条。留言告诉我你想做的第一个产品是什么。"</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">🎤</span> 招生直播话术模板（60 分钟标准版）</h2>

  <div class="copy-block">
    <div class="label">直播流程分段</div>
    <div class="content">═══ 5 分钟 · 自我介绍 + 立场 ═══
- 讲师 / 课程顾问介绍
- 立场："我们不卖速成、不卖躺赚 — 我们卖真作品 + 真技能"

═══ 10 分钟 · 痛点共鸣 ═══
- 真实场景：销售小姐姐 / 应届毕业生 / 在职白领 / 创业者
- 让观众"对上号"
- "你是不是也这样？"

═══ 20 分钟 · 课程内容深度讲 ═══
- 13 个 phase + 14 个 Quest
- 现场打开 outline-preview.html 演示
- 重点：基础班 5 件作品 + 进阶班 +3 件
- 展示往期学员作品（如有）

═══ 10 分钟 · 价格 + 优惠 ═══
- 基础班 $960 / 进阶班 $2280
- 早鸟 / 老学员 / 团报优惠（如有）
- 限名额机制（每期限 30 / 50 人）

═══ 10 分钟 · 答疑（高频 Q1-Q10）═══
- 直接读 FAQ 模块 10 个问题
- 准备好回答 + 异议处理

═══ 5 分钟 · 收尾 + 报名引导 ═══
- 总结 5 个理由报名
- 现场扫码报名 / 二维码
- 答疑群入口</div>
  </div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="platform-section">
  <h2><span class="platform-icon">💎</span> 优惠方案 + CTA 模板</h2>
  <p style="font-size:13px;color:#666">提报名转化率的 5 种 CTA 套路。运营自选组合使用。</p>

  <div class="copy-block">
    <div class="label">5 种 CTA 套路</div>
    <div class="content">⚡ CTA 1 · 早鸟价 + 截止时间
"开课前 7 天报名享早鸟价：基础班 $960 → $760（省 $200），进阶班 $2280 → $1980（省 $300）。截止 [日期]。"

⚡ CTA 2 · 名额限制
"每期只收 30 个学员（为了保证 AI Tutor 一对一带练质量）。已报 22 / 30，剩 8 名。"

⚡ CTA 3 · 老学员推荐
"老学员推荐新学员：双方各得 $100 抵扣券。直接私我 'XXX 推荐'。"

⚡ CTA 4 · 团报
"3 人以上团报每人减 $200。同事 / 朋友一起来更便宜，互相督促不掉队。"

⚡ CTA 5 · 升级券
"先报基础班 $960。学完任何时候补 $1320 升级进阶班（不需要重学，直接进 P9-P12）。"

📋 标准 CTA 结尾（贴在所有营销内容末尾）：
─────────────────────────────────────
🚀 立即报名第 2 期
🟪 基础班 $960 / 6 周 / 76 课 / 5 件作品
🟨 进阶班 $2280 / 8 周 / 109 课 / 8 件作品
🔗 [报名链接]
💬 [课程顾问微信]
─────────────────────────────────────</div>
    <div class="note">⚠️ 早鸟价 / 名额限制 / 优惠数字请以匠人学院官方真实策略为准，不要伪造紧迫感（违背诚信）</div>
  </div>
</div>

<div class="footer">
  📄 数据源：<code>public/outline.json</code> · 本页由 <code>scripts/generate-html.py</code> 自动生成 · 修改请改 outline.json 后重跑脚本
</div>
</body>
</html>
'''


# ─────────────────────────────────────────────────────────────────────────────
# 执行
# ─────────────────────────────────────────────────────────────────────────────

print(f'生成 {len(OUTLINE["phases"])} 个 phase 详情 + 5 个总览页：')

# Clean stale phase 0-3 first
for old in ['phase0.html', 'phase1.html', 'phase2.html', 'phase3.html']:
    f = PUBLIC / old
    if f.exists():
        f.unlink()
        print(f'  🗑  删除旧 {old}')

write('curriculum.html', render_curriculum())
write('outline.html', render_outline())
write('learning-plan.html', render_learning_plan())
write('tools.html', render_tools())
write('poster.html', render_poster())
write('marketing.html', render_marketing())

for idx, p in enumerate(OUTLINE['phases']):
    write(f'phase_{idx}.html', render_phase(idx, p))

# Update outline.json's curriculumPages to match new files
new_pages = ['curriculum.html', 'outline.html', 'outline-preview.html', 'learning-plan.html', 'tools.html', 'poster.html', 'marketing.html']
new_pages += [f'phase_{i}.html' for i in range(len(OUTLINE['phases']))]
OUTLINE['curriculumPages'] = {'pages': new_pages, 'defaultPage': 'curriculum.html'}
with open(PUBLIC / 'outline.json', 'w', encoding='utf-8') as f:
    json.dump(OUTLINE, f, ensure_ascii=False, indent=2)
    f.write('\n')
print(f'  ✅ outline.json curriculumPages 更新（{len(new_pages)} pages）')

print()
print(f'完成！共生成 {4 + len(OUTLINE["phases"])} 个页面')
