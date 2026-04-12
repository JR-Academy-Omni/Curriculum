#!/usr/bin/env python3
"""
Generate curriculum/business-analyst/LESSONS.md from public/outline.json.

Run this after editing outline.json to refresh the human-readable lesson catalog.
LESSONS.md is NOT a source of truth — outline.json is. Never hand-edit LESSONS.md.

Usage:
    python3 curriculum/business-analyst/_generate_lessons_md.py
"""

import json
import re
from pathlib import Path

HERE = Path(__file__).parent
OUTLINE_PATH = HERE / 'public' / 'outline.json'
OUTPUT_PATH = HERE / 'LESSONS.md'
# Training outlines snapshot — used to pull lesson ObjectId + teacher metadata
# that are not preserved in curriculum/*/public/outline.json (the curriculum
# transformer buildOutlineFromCourse drops those fields).
TRAINING_OUTLINE_PATH = Path(__file__).parent.parent.parent / 'skills-data' / 'training-outlines' / 'business-analyst.json'

COURSE_SLUG = 'business-analyst'
COURSE_PUBLIC_URL = f'https://jiangren.com.au/program-course/{COURSE_SLUG}'

# Natural phase boundaries (derived from Quiz titles "Week N" in outline)
# Structure is currently 1-phase-94-lessons in outline.json; this is a purely
# presentational regrouping. Real phase restructure is tracked in PRD.md §5.
PHASE_MAP = [
    ('P0 启程与 AI 基础',              list(range(1, 15))),   # L01-L14
    ('P1 BA 角色与求职定位',           list(range(15, 40))),  # L15-L39
    ('P2 需求 + User Story + Agile',   list(range(40, 63))),  # L40-L62
    ('P3 文档与 Prompt 工程',          list(range(63, 80))),  # L63-L79
    ('P4 AI 原型实战',                 list(range(80, 89))),  # L80-L88
    ('P5 自动化与 Agent 落地',         list(range(89, 95))),  # L89-L94
]


def strip_html(s: str) -> str:
    """Plain text — used only for stats (empty-check etc), NOT lesson content."""
    if not s:
        return ''
    s = re.sub(r'<[^>]+>', ' ', s)
    s = re.sub(r'&[a-z]+;', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()


def html_to_markdown(html: str) -> str:
    """Convert outline.json description HTML → readable Markdown.

    Preserves full content (no truncation). Handles the tags actually seen in
    BA outline.json: <p> <h2> <h3> <h4> <ul> <ol> <li> <strong> <em> <a>
    <blockquote> <br> <code> <pre> <table> <tr> <td> <th> <span> <div>.

    Content fidelity > perfect markdown. When in doubt, keep the text.
    """
    if not html:
        return ''

    s = html

    # Normalize whitespace around block tags before we convert
    s = re.sub(r'\r\n', '\n', s)

    # <br> → newline
    s = re.sub(r'<br\s*/?>', '\n', s, flags=re.IGNORECASE)

    # Headings
    s = re.sub(r'<h1[^>]*>(.*?)</h1>', r'\n\n# \1\n\n', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<h2[^>]*>(.*?)</h2>', r'\n\n## \1\n\n', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<h3[^>]*>(.*?)</h3>', r'\n\n### \1\n\n', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<h4[^>]*>(.*?)</h4>', r'\n\n#### \1\n\n', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<h5[^>]*>(.*?)</h5>', r'\n\n##### \1\n\n', s, flags=re.IGNORECASE | re.DOTALL)

    # Paragraphs
    s = re.sub(r'<p[^>]*>', '\n\n', s, flags=re.IGNORECASE)
    s = re.sub(r'</p>', '\n\n', s, flags=re.IGNORECASE)

    # Bold / italic
    s = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', s, flags=re.IGNORECASE | re.DOTALL)

    # Links
    s = re.sub(
        r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
        r'[\2](\1)',
        s,
        flags=re.IGNORECASE | re.DOTALL,
    )

    # Inline code
    s = re.sub(r'<code[^>]*>(.*?)</code>', r'`\1`', s, flags=re.IGNORECASE | re.DOTALL)

    # Code blocks
    s = re.sub(r'<pre[^>]*>(.*?)</pre>', lambda m: '\n```\n' + m.group(1) + '\n```\n', s, flags=re.IGNORECASE | re.DOTALL)

    # Blockquotes
    def _blockquote(m):
        inner = m.group(1).strip()
        return '\n\n' + '\n'.join('> ' + line for line in inner.split('\n')) + '\n\n'
    s = re.sub(r'<blockquote[^>]*>(.*?)</blockquote>', _blockquote, s, flags=re.IGNORECASE | re.DOTALL)

    # List items — order matters: close lists before stripping ul/ol tags
    s = re.sub(r'<li[^>]*>', '- ', s, flags=re.IGNORECASE)
    s = re.sub(r'</li>', '\n', s, flags=re.IGNORECASE)
    s = re.sub(r'<ul[^>]*>', '\n', s, flags=re.IGNORECASE)
    s = re.sub(r'</ul>', '\n', s, flags=re.IGNORECASE)
    s = re.sub(r'<ol[^>]*>', '\n', s, flags=re.IGNORECASE)
    s = re.sub(r'</ol>', '\n', s, flags=re.IGNORECASE)

    # Tables — simple row-by-row conversion (not full GFM alignment)
    s = re.sub(r'<th[^>]*>(.*?)</th>', r' | **\1**', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<td[^>]*>(.*?)</td>', r' | \1', s, flags=re.IGNORECASE | re.DOTALL)
    s = re.sub(r'<tr[^>]*>', '\n', s, flags=re.IGNORECASE)
    s = re.sub(r'</tr>', ' |\n', s, flags=re.IGNORECASE)
    s = re.sub(r'</?t(?:able|body|head)[^>]*>', '\n', s, flags=re.IGNORECASE)

    # Strip remaining spans / divs (keep inner text)
    s = re.sub(r'<span[^>]*>', '', s, flags=re.IGNORECASE)
    s = re.sub(r'</span>', '', s, flags=re.IGNORECASE)
    s = re.sub(r'<div[^>]*>', '\n', s, flags=re.IGNORECASE)
    s = re.sub(r'</div>', '\n', s, flags=re.IGNORECASE)

    # Any leftover tags — strip but keep inner text
    s = re.sub(r'<[^>]+>', '', s)

    # HTML entities — common ones
    entities = {
        '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>',
        '&quot;': '"', '&#39;': "'", '&apos;': "'",
        '&mdash;': '—', '&ndash;': '–', '&hellip;': '…',
        '&ldquo;': '"', '&rdquo;': '"', '&lsquo;': "'", '&rsquo;': "'",
    }
    for ent, ch in entities.items():
        s = s.replace(ent, ch)
    # Numeric entities
    s = re.sub(r'&#(\d+);', lambda m: chr(int(m.group(1))), s)

    # Collapse 3+ blank lines → 2, trim trailing spaces per line
    s = re.sub(r'[ \t]+\n', '\n', s)
    s = re.sub(r'\n{3,}', '\n\n', s)

    return s.strip()


def fmt_list(items):
    if not items:
        return '—'
    return ' · '.join(f'`{i}`' for i in items)


def load_training_lesson_index():
    """Build a {title: {id, teacher, order}} map from training-outlines snapshot.

    Curriculum outline.json doesn't preserve lesson._id or teacher metadata
    (lost during buildOutlineFromCourse). We merge it back in via title match.
    """
    if not TRAINING_OUTLINE_PATH.exists():
        return {}
    try:
        data = json.loads(TRAINING_OUTLINE_PATH.read_text())
    except Exception:
        return {}
    idx = {}
    sections = data.get('outline', [])
    for section in sections:
        for l in section.get('lessons', []):
            title = l.get('title') or l.get('name') or ''
            if not title:
                continue
            teacher_name = ''
            t = l.get('teacher')
            if isinstance(t, dict):
                teacher_name = t.get('name', '')
            idx[title] = {
                'id': l.get('id', ''),
                'teacher': teacher_name,
                'order': l.get('order', 0),
            }
    return idx


def main():
    outline = json.loads(OUTLINE_PATH.read_text())
    lessons = outline['phases'][0]['lessons']
    train_idx = load_training_lesson_index()

    lines = []
    lines.append('# Business Analyst Bootcamp — Lesson Catalog\n')
    lines.append(
        f'> **所有 {len(lessons)} 节 lesson 的完整清单**。这份文件是 '
        '`public/outline.json` 的人类可读镜像，由脚本从 outline.json 直接生成。\n'
    )
    lines.append('> **不是 source of truth** — 修改课程内容请编辑 `outline.json` 然后重新跑生成脚本。\n')
    lines.append(
        '> **Primary audience**: 课程设计者想看 "BA 课都教什么"；'
        '运营想找某节课对应的资源 binding；'
        'Claude AI 做跨课程复用决策时的第一手参考。\n'
    )
    lines.append('')

    # Meta
    prog = (outline.get('programs') or [None])[0] or outline.get('program', {})
    lines.append('## Meta\n')
    lines.append(f'- **课程名**: {outline.get("name")}')
    lines.append(f'- **slug**: `{outline.get("slug")}`')
    lines.append(
        f'- **当前期**: {prog.get("name", "—")} '
        f'（{prog.get("commenceCourseDate", "")[:10]} ~ {prog.get("completeDate", "")[:10]}）'
    )
    lines.append(f'- **学费**: ¥{prog.get("tuition", "—")} · 促销 ¥{prog.get("promoTuition", "—")}')
    lines.append(f'- **总 Lesson 数**: {outline.get("totalLessons")}')
    lines.append(f'- **估算时长**: {outline.get("estimatedHours")} 小时')
    lines.append(
        f'- **Phase 数**: {len(outline.get("phases", []))}'
        '（outline.json 里仍是 1 个，本 md 按 6 个 natural phases 展示 — 重构待做）'
    )
    lines.append(f'- **学员数（当前期）**: {prog.get("studentCount", 0)}')
    lines.append('')

    # TOC
    lines.append('## Table of Contents\n')
    for phase_name, nums in PHASE_MAP:
        anchor = re.sub(r'[^\w\s-]', '', phase_name).lower().replace(' ', '-')
        lines.append(
            f'- [{phase_name}](#{anchor}) — '
            f'L{nums[0]:02d} ~ L{nums[-1]:02d} ({len(nums)} lessons)'
        )
    lines.append('')

    # Stats
    total_cs = sum(len(l.get('cheatSheets', [])) for l in lessons)
    total_w = sum(len(l.get('wikis', [])) for l in lessons)
    total_v = sum(len(l.get('videos', [])) for l in lessons)
    total_r = sum(len(l.get('roadmaps', [])) for l in lessons)
    total_iq = sum(len(l.get('interviewQuestions', [])) for l in lessons)
    with_binding = sum(
        1 for l in lessons
        if any(l.get(f) for f in ['cheatSheets', 'wikis', 'videos', 'roadmaps', 'interviewQuestions'])
    )
    type_counts = {}
    empty_desc = 0
    for l in lessons:
        type_counts[l['type']] = type_counts.get(l['type'], 0) + 1
        if not strip_html(l.get('description', '')):
            empty_desc += 1

    lines.append('## 资源绑定总览\n')
    lines.append(f'- **有 binding 的 lesson**: {with_binding} / {len(lessons)}')
    lines.append(f'- **Resource refs 合计**: {total_cs + total_w + total_v + total_r + total_iq}')
    lines.append(f'  - 📋 cheatSheets: **{total_cs}**')
    lines.append(f'  - 📖 wikis: **{total_w}**')
    lines.append(f'  - 🎬 videos: **{total_v}**')
    lines.append(f'  - 🗺️ roadmaps: **{total_r}**')
    lines.append(f'  - 💼 interviewQuestions: **{total_iq}**')
    lines.append('')
    lines.append(
        f'- **Lesson type 分布**: '
        + ' · '.join(f'{k}={v}' for k, v in sorted(type_counts.items()))
    )
    lines.append(f'- **描述完全空的 lesson**: {empty_desc} / {len(lessons)} （需要 BA v2 PRD batch 2 补齐）')
    lines.append('')

    # Per-phase lesson detail
    for phase_name, nums in PHASE_MAP:
        lines.append(f'## {phase_name}\n')
        for n in nums:
            code = f'L{n:02d}'
            l = next((x for x in lessons if x['code'] == code), None)
            if not l:
                continue

            t = l['type']
            live_mark = ' 🔴LIVE' if l.get('isLive') else ''
            lab_mark = f' 🔬{l.get("interactiveLabSlug","")}' if l.get('isInteractiveLab') else ''
            lines.append(f'### {code} · {l["title"]}')
            lines.append(f'**{t}**{live_mark}{lab_mark} · {l.get("duration", 0)} min')
            lines.append('')

            # Lesson metadata block — id / teacher / link
            train_meta = train_idx.get(l['title'], {})
            lesson_id = train_meta.get('id', '')
            teacher = train_meta.get('teacher', '')

            meta_bits = []
            if lesson_id:
                meta_bits.append(f'**lesson id**: `{lesson_id}`')
            if teacher:
                meta_bits.append(f'**teacher**: {teacher}')
            # Course page link (public) + anchor-style lesson reference (internal)
            course_link = COURSE_PUBLIC_URL
            if lesson_id:
                # Not a real deep-link URL (lessons are behind enrollment), but
                # it's the stable shareable link to the course + the lesson id
                # for any downstream tool that knows how to resolve it.
                meta_bits.append(f'**link**: [{course_link}]({course_link})')
            else:
                meta_bits.append(f'**link**: [{course_link}]({course_link})')
            lines.append(' · '.join(meta_bits))
            lines.append('')

            # FULL description, converted from HTML to Markdown — NO truncation
            desc_html = l.get('description', '') or ''
            if desc_html.strip():
                desc_md = html_to_markdown(desc_html)
                lines.append('#### 描述（完整内容，可复用到其他课程）')
                lines.append('')
                lines.append(desc_md)
                lines.append('')
            else:
                lines.append('> ⚠️ **描述为空** — BA v2 PRD batch 处理')
                lines.append('')

            # Bindings
            bindings = []
            if l.get('cheatSheets'):
                slugs = [c['slug'] for c in l['cheatSheets']]
                bindings.append(f'📋 **cheatSheets**: {fmt_list(slugs)}')
            if l.get('wikis'):
                slugs = [w['slug'] + (f'#{w["chapter"]}' if w.get('chapter') else '') for w in l['wikis']]
                bindings.append(f'📖 **wikis**: {fmt_list(slugs)}')
            if l.get('videos'):
                slugs = [v['slug'] for v in l['videos']]
                bindings.append(f'🎬 **videos**: {fmt_list(slugs)}')
            if l.get('roadmaps'):
                slugs = [r['slug'] + (f'#{r["nodeId"]}' if r.get('nodeId') else '') for r in l['roadmaps']]
                bindings.append(f'🗺️ **roadmaps**: {fmt_list(slugs)}')
            if l.get('interviewQuestions'):
                slugs = [iq['bank'] for iq in l['interviewQuestions']]
                bindings.append(f'💼 **interviewQuestions**: {fmt_list(slugs)}')
            if l.get('isInteractiveLab'):
                bindings.append(
                    f'🔬 **InteractiveLab**: '
                    f'type=`{l.get("interactiveLabType")}` '
                    f'slug=`{l.get("interactiveLabSlug")}`'
                )

            if bindings:
                lines.append('#### 资源绑定')
                lines.append('')
                for b in bindings:
                    lines.append(f'- {b}')
            else:
                lines.append('*无 binding*')
            lines.append('')
            lines.append('---')
            lines.append('')
        lines.append('')

    lines.append('---\n')
    lines.append('## 如何重新生成这份文件\n')
    lines.append('```bash')
    lines.append('python3 curriculum/business-analyst/_generate_lessons_md.py')
    lines.append('```\n')
    lines.append('修改课程内容时，**先改 `outline.json`**，再重新跑脚本生成这份 md。不要直接改这份 md，会被覆盖。\n')

    OUTPUT_PATH.write_text('\n'.join(lines))
    print(f'✅ Generated {OUTPUT_PATH.relative_to(HERE.parent.parent)}')
    print(f'   {OUTPUT_PATH.stat().st_size} bytes, {len(lines)} lines')
    print(f'   {len(lessons)} lessons · {with_binding} with bindings · '
          f'{total_cs + total_w + total_v + total_r + total_iq} total refs')


if __name__ == '__main__':
    main()
