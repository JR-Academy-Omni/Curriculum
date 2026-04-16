#!/usr/bin/env python3
"""
Generate static HTML pages for business-analyst bootcamp from outline.json.
- curriculum.html: full overview (header + stats + phase cards + all phase boxes + FAQ + sections)
- phase0.html..phase5.html: individual phase detail pages
Design language: Neo-Brutalism (copied from ai-programming/styles.css)
"""
import json
import html
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUTLINE = ROOT / "public" / "outline.json"
PUBLIC = ROOT / "public"

# Type pill color mapping
TYPE_COLOR = {
    "Video":         ("#3b82f6", "VIDEO"),
    "Lesson":        ("#6366f1", "LIVE"),
    "Workshop":      ("#f59e0b", "WORKSHOP"),
    "Quiz":          ("#94a3b8", "QUIZ"),
    "Information":   ("#38B6FF", "INFO"),
    "Tutorial":      ("#CB6CE6", "1V1"),
    "InteractiveLab":("#10b981", "LAB"),
}


def pill(color: str, label: str, extra_style: str = "") -> str:
    return f'<span class="pill" style="background:{color};color:#fff;{extra_style}">{label}</span>'


def fmt_duration(minutes: int) -> str:
    if minutes and minutes >= 60:
        h = minutes // 60
        m = minutes % 60
        return f"{h}h{m}m" if m else f"{h}h"
    return f"{minutes}min"


def render_lesson(lesson: dict) -> str:
    code = html.escape(lesson.get("code", ""))
    title = html.escape(lesson.get("title", ""))
    ltype = lesson.get("type", "Video")
    color, label = TYPE_COLOR.get(ltype, ("#888", ltype.upper()))
    duration = fmt_duration(int(lesson.get("duration", 60)))
    desc = lesson.get("description", "").strip()
    # If description is very long, show first ~600 chars (to avoid wall of HTML)
    # NOTE: description may include HTML; trust it but truncate
    display_desc = desc
    if len(display_desc) > 800:
        display_desc = display_desc[:800].rstrip() + "…"

    # Resource bindings
    bindings_html = ""
    labs = lesson.get("labs", [])
    learns = lesson.get("learns", [])
    if labs or learns:
        items = []
        for l in labs:
            items.append(
                f'<span class="tool" style="background:#d1fae5;color:#065f46">🧪 {html.escape(l.get("source",""))}/{html.escape(l.get("slug",""))}</span>'
            )
        for l in learns:
            items.append(
                f'<span class="tool" style="background:#ede9fe;color:#5b21b6">📚 {html.escape(l.get("direction",""))}/{html.escape(l.get("slug",""))}</span>'
            )
        bindings_html = f'<div class="tools" style="margin-top:10px">{"".join(items)}</div>'

    return f"""
    <div class="lesson">
      <div class="lesson-head">
        {pill(color, code)}
        <h4>{title}</h4>
        {pill(color, label)}
        <span class="mono" style="font-size:12px;opacity:0.5">{duration}</span>
      </div>
      <div style="padding:10px 16px 14px;color:#444;font-size:13px;line-height:1.75">
        {display_desc}
        {bindings_html}
      </div>
    </div>"""


def render_phase_box(phase: dict, show_all: bool = True) -> str:
    """Render a phase as a .box with all its lessons."""
    lessons_html = "".join(render_lesson(l) for l in phase.get("lessons", []))
    color = phase.get("color", "#6366f1")
    name = html.escape(phase.get("name", ""))
    count = len(phase.get("lessons", []))
    summary = html.escape(phase.get("summary", ""))
    return f"""
  <div class="box">
    <div class="box-h" style="background:{color}">
      <span style="font-size:18px;font-weight:900">{name}</span>
      <span style="float:right;opacity:0.75" class="mono">{count} 节课</span>
    </div>
    <div style="padding:14px 24px;font-size:13px;color:#666;border-bottom:1px solid #e5e5e5;background:#fafafa">
      {summary}
    </div>
    {lessons_html}
  </div>"""


def render_phase_cards(phases: list) -> str:
    """Render the 6 phase navigation cards."""
    cards = []
    for i, p in enumerate(phases):
        color = p.get("color", "#6366f1")
        name = html.escape(p.get("name", "").replace("Phase ", "").strip())
        count = len(p.get("lessons", []))
        summary = html.escape(p.get("summary", ""))
        light_bg = color + "1a"  # alpha suffix won't work generically; use inline rgba hack
        cards.append(
            f"""    <a href="phase{i}.html" class="phase-card" style="background:#fff;border:3px solid #000;box-shadow:5px 5px 0 #000;padding:20px;display:block;transition:all 0.15s;color:#1a1a1a;text-decoration:none"
        onmouseover="this.style.boxShadow='none';this.style.transform='translate(4px,4px)'"
        onmouseout="this.style.boxShadow='5px 5px 0 #000';this.style.transform='none'">
      <div class="mono" style="color:{color};font-weight:900;font-size:12px;letter-spacing:1px">PHASE {i}</div>
      <h3 style="color:{color};font-size:18px;margin:8px 0 6px;font-weight:900">{name}</h3>
      <div style="font-size:12px;color:#666;line-height:1.5">{summary}</div>
      <div class="mono" style="margin-top:12px;font-size:11px;color:#999">{count} 节课 →</div>
    </a>"""
        )
    return f'<div class="phase-cards" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:28px 0">{"".join(cards)}</div>'


def render_faqs(faqs: list) -> str:
    if not faqs:
        return ""
    items = []
    for i, faq in enumerate(faqs, 1):
        q = html.escape(faq.get("question", ""))
        a = faq.get("answer", "")  # assume plain text or simple HTML
        items.append(
            f"""      <details style="border-bottom:1px solid #eee;padding:14px 0">
        <summary style="cursor:pointer;font-weight:700;font-size:15px;color:#1a1a1a;list-style:none">
          <span class="mono" style="color:#6366f1;margin-right:8px">Q{i:02d}</span>{q}
        </summary>
        <div style="margin-top:12px;color:#444;font-size:14px;line-height:1.8">{html.escape(a)}</div>
      </details>"""
        )
    return f"""
  <div class="box">
    <div class="box-h" style="background:#10162f">
      <span style="font-size:18px;font-weight:900">❓ 常见问题 FAQ</span>
    </div>
    <div style="padding:16px 24px 24px">{"".join(items)}</div>
  </div>"""


def render_sections(sections: list) -> str:
    if not sections:
        return ""
    blocks = []
    for s in sections:
        title = html.escape(s.get("title", ""))
        content = s.get("content", "")  # HTML content — trust it
        blocks.append(
            f"""    <div style="border:3px solid #000;background:#fff;box-shadow:6px 6px 0 #000;margin-bottom:20px;overflow:hidden">
      <div style="padding:12px 20px;background:#6366f1;color:#fff;border-bottom:3px solid #000;font-weight:900;font-size:16px">{title}</div>
      <div style="padding:18px 24px;font-size:14px;line-height:1.8;color:#2a2a2a">{content}</div>
    </div>"""
        )
    return f"""
  <h2 style="font-size:24px;font-weight:900;margin:40px 0 20px;border-left:6px solid #6366f1;padding-left:14px">课程亮点</h2>
  <div>{"".join(blocks)}</div>"""


def page_head(title: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>"""


def gen_curriculum(data: dict) -> str:
    name = html.escape(data.get("name", "AI 产品经理(BA)训练营"))
    phases = data.get("phases", [])
    total_lessons = sum(len(p.get("lessons", [])) for p in phases)
    total_live = sum(1 for p in phases for l in p.get("lessons", []) if l.get("type") in ("Lesson", "Workshop", "Tutorial") or l.get("isLive"))
    total_labs = sum(1 for p in phases for l in p.get("lessons", []) if l.get("type") == "InteractiveLab")
    total_quizzes = sum(1 for p in phases for l in p.get("lessons", []) if l.get("type") == "Quiz")
    hours = int(data.get("estimatedHours", 116))
    program = data.get("program", {}) or {}
    tuition = program.get("tuition", 4800)
    promo = program.get("promoTuition", 4400)
    cohort_status = program.get("cohortStatus", "RECRUITING")
    phase_num = program.get("programPhase", 4)

    phase_boxes = "".join(render_phase_box(p) for p in phases)
    phase_cards = render_phase_cards(phases)
    faqs_html = render_faqs(data.get("faqs", []))
    sections_html = render_sections(data.get("bootcampSections", []))

    status_label = "招生中" if cohort_status == "RECRUITING" else cohort_status

    return f"""{page_head(f"{name} — 课程总览")}
<div class="header">
  <div style="display:inline-block;background:#10b981;color:#fff;padding:4px 12px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px" class="mono">第 {phase_num} 期 · {status_label}</div>
  <h1>AI 产品经理（BA）训练营</h1>
  <div class="sub">Business Analyst + AI Product Manager · 94 节课 · 真实 P3 项目实习 · 澳洲 AI PM 就业导向</div>
  <div class="tags">
    <span class="tag a">Week 0–6 · {hours}h</span>
    <span class="tag">{total_lessons} 节课</span>
    <span class="tag">{total_live} 节直播 / Workshop</span>
    <span class="tag">{total_labs} 个 Lab</span>
    <span class="tag">2025-12 开课</span>
  </div>
  <div style="margin-top:16px" class="mono">
    <span style="font-size:14px;color:#999">标准学费</span>
    <span style="font-size:20px;font-weight:900;color:#fff;margin-left:8px">¥{tuition}</span>
    <span style="font-size:14px;color:#10b981;margin-left:12px">早鸟 ¥{promo}</span>
  </div>
</div>

<div class="bar">
  <div class="s"><div class="n">{len(phases)}</div><div class="l">PHASES</div></div>
  <div class="s"><div class="n">{total_lessons}</div><div class="l">总课时</div></div>
  <div class="s"><div class="n">{total_live}</div><div class="l">直播 / Workshop</div></div>
  <div class="s"><div class="n">{total_labs}</div><div class="l">互动 Lab</div></div>
  <div class="s"><div class="n">{total_quizzes}</div><div class="l">章节 Quiz</div></div>
  <div class="s"><div class="n">~{hours}h</div><div class="l">总时长</div></div>
</div>

<div class="c">
  {sections_html}

  <h2 style="font-size:24px;font-weight:900;margin:40px 0 20px;border-left:6px solid #6366f1;padding-left:14px">课程阶段</h2>
  {phase_cards}

  <h2 style="font-size:24px;font-weight:900;margin:40px 0 20px;border-left:6px solid #6366f1;padding-left:14px">详细大纲</h2>
  {phase_boxes}

  {faqs_html}
</div>

<div class="footer" style="text-align:center;padding:32px;background:#10162f;color:#fff;font-size:13px;font-family:'Space Mono',monospace">
  JR Academy · 全球华人学习 AI 第一站 · <a href="https://jiangren.com.au/bootcamp/business-analyst" style="color:#10b981">立即报名 →</a>
</div>
</body>
</html>"""


def gen_phase_page(data: dict, idx: int) -> str:
    phases = data.get("phases", [])
    phase = phases[idx]
    name = html.escape(phase.get("name", ""))
    total = len(phases)
    color = phase.get("color", "#6366f1")
    count = len(phase.get("lessons", []))
    summary = html.escape(phase.get("summary", ""))

    prev_link = f'<a href="phase{idx-1}.html" style="color:#10b981">← 上一阶段</a>' if idx > 0 else '<span style="opacity:0.4">← 上一阶段</span>'
    next_link = f'<a href="phase{idx+1}.html" style="color:#10b981">下一阶段 →</a>' if idx < total - 1 else '<span style="opacity:0.4">下一阶段 →</span>'

    phase_box = render_phase_box(phase)

    return f"""{page_head(f"{phase.get('name', '')} — AI 产品经理(BA)训练营")}
<div class="header" style="background:{color}">
  <div class="mono" style="font-size:12px;opacity:0.9;letter-spacing:2px">PHASE {idx} / {total-1}</div>
  <h1 style="margin-top:8px">{name}</h1>
  <div class="sub" style="color:rgba(255,255,255,0.85)">{summary}</div>
  <div class="nav" style="margin-top:20px">
    {prev_link}
    <span style="margin:0 12px;opacity:0.5">|</span>
    <a href="curriculum.html" style="color:#fff">← 返回总览</a>
    <span style="margin:0 12px;opacity:0.5">|</span>
    {next_link}
  </div>
</div>

<div class="c">
  {phase_box}

  <div style="display:flex;justify-content:space-between;margin-top:32px;padding:16px 0;border-top:2px solid #000">
    <div class="mono" style="font-size:13px">{prev_link}</div>
    <div class="mono" style="font-size:13px"><a href="curriculum.html" style="color:#6366f1">全部 {total} 个 Phase</a></div>
    <div class="mono" style="font-size:13px">{next_link}</div>
  </div>
</div>

<div class="footer" style="text-align:center;padding:32px;background:#10162f;color:#fff;font-size:13px;font-family:'Space Mono',monospace">
  JR Academy · <a href="curriculum.html" style="color:#10b981">返回课程总览</a>
</div>
</body>
</html>"""


def main():
    with OUTLINE.open() as f:
        data = json.load(f)

    # curriculum.html
    (PUBLIC / "curriculum.html").write_text(gen_curriculum(data), encoding="utf-8")
    print(f"Generated curriculum.html ({(PUBLIC / 'curriculum.html').stat().st_size} bytes)")

    # phase0..phase5.html
    for idx in range(len(data.get("phases", []))):
        out = PUBLIC / f"phase{idx}.html"
        out.write_text(gen_phase_page(data, idx), encoding="utf-8")
        print(f"Generated phase{idx}.html ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
