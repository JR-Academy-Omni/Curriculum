"""Render local curriculum projections from outline.json; no network or model calls."""
from pathlib import Path
from html import escape
import json
import shutil

ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT / 'public'
D = json.loads((PUBLIC / 'outline.json').read_text())
C = json.loads((PUBLIC / 'case-study.json').read_text())
LESSONS = [lesson for phase in D['phases'] for lesson in phase['lessons']]


def e(value):
    return escape(str(value), quote=True)


def ul(items):
    return '<ul>' + ''.join(f'<li>{e(x)}</li>' for x in items) + '</ul>'


def paras(value):
    return ''.join(f'<p>{e(x)}</p>' for x in value.split('\n') if x)


def section(title, content, ident=''):
    return f'<section class="box" id="{e(ident)}"><h2 class="box-h">{e(title)}</h2><div class="section-body">{content}</div></section>'


def page(filename, title, body):
    nav = [('curriculum.html', '课程介绍'), ('outline.html', '完整大纲'), ('examples.html', '查看成果示例'), ('learning-plan.html', '学习计划'), ('poster.html', '招生海报')]
    nav_html = ''.join(f'<a href="{url}" {"aria-current=page" if url == filename else ""}>{label}</a>' for url, label in nav)
    html = f'''<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>{e(title)}｜{e(D['name'])}</title>
<meta name="description" content="{e(D['description'])}"><link rel="stylesheet" href="styles.css"></head>
<body><a class="skip" href="#main">跳到正文</a><div class="local-banner">Local · 课程方案预览 · 未开放报名 · 币种和开课安排待确认</div>
<header class="header"><div class="brand"><img src="assets/logo-en-white.svg" alt="JR Academy" width="160" height="48"></div>
<p class="eyebrow">{e(D['name_en'])}</p><h1>{e(D['name'])}</h1><p class="sub">{e(D['timeLength'])}</p>
<div class="price-row"><strong>早鸟价 {D['program']['promoTuition']:,}／人</strong><span>正常价 {D['program']['tuition']:,}／人</span></div>
<p class="price-note">价格数字已确认；币种、税费口径和早鸟截止条件待确认。</p><nav class="nav" aria-label="课程导航">{nav_html}</nav></header>
<main class="c" id="main"><h2 class="page-title">{e(title)}</h2>{body}</main>
<footer class="footer">JR Academy · {e(D['_meta']['revision'])} · 本地课程源文件，未同步 production、未部署。<br>示例为虚构、预生成；完整视频与真实定时运行验收待补齐。</footer></body></html>'''
    (PUBLIC / filename).write_text(html, encoding='utf-8')


def lesson_html(lesson):
    steps = ''.join(f'<li><div class="step-heading"><strong>{s["order"]:02d} · {e(s["title"])}</strong><span>{s["duration"]} min</span></div><p>{e(s["description"])}</p></li>' for s in lesson['steps'])
    return f'''<article class="lesson" id="{lesson['code']}"><div class="lesson-head"><span class="pill">{lesson['code']}</span><h3>{e(lesson['title'])}</h3><span class="pill">实操授课 · 120 min</span></div>
<div class="lesson-intro">{paras(lesson['description'])}{ul(lesson['objectives'])}</div>
<div class="lesson-body"><div><h4>教学内容</h4>{ul([s['title'] for s in lesson['steps']])}</div><div><h4>课堂实操</h4><p>{e(lesson['practice'])}</p></div><div><h4>成果整理与 Review</h4><p>{e(lesson['assignment'])}</p><p>课堂内教师检查；不承诺额外课后服务。</p></div></div>
<div class="lesson-intro"><h4>带走的成果</h4>{ul(lesson['deliverables'])}<h4>120 分钟教学安排</h4><ol class="steps">{steps}</ol><h4>验收标准</h4>{ul(lesson['acceptance'])}<p><a class="action-btn" href="examples.html#result-{lesson['code']}">查看对应成果示例</a></p></div></article>'''


def full_outline():
    return ''.join(f'<section class="box"><h2 class="box-h">{e(p["name"])}</h2><p class="phase-summary">{e(p["summary"])}</p>{"".join(lesson_html(l) for l in p["lessons"])}</section>' for p in D['phases'])


overview = section('从同一家企业，做出一套连贯成果', paras(D['description']) + '<p><a class="action-btn primary" href="examples.html">直接打开完整成果示例</a> <a class="action-btn" href="#curriculum">查看 5 节完整大纲</a></p><p class="notice">当前可读品牌、网站、内容与工作包的预生成示例。视频只有 Script / Storyboard；MP4 和真实定时运行尚未验收，成果 Demo 未完成。</p>')
overview += section('适合谁', ul(D['suitable'].split('\n')))
overview += section('课程特点', ul(D['highlights']))
overview += '<div id="curriculum">' + full_outline() + '</div>'
overview += section('学习准备与课程范围', paras(D['prerequisiteknowledge']) + ul(['前四节成果沿用同一套企业资料，第五节整理成每周任务。', '使用预置模板完成基础可用版本；深度品牌设计、正式上线与复杂系统集成另行评估。', '软件、第三方服务、回放和课后答疑包含范围待确认。', '开课日期、地点、讲师、授课形式和报名入口待确认。']) + '<p><span class="action-btn disabled" aria-disabled="true">报名尚未开放</span></p>')
overview += section('常见问题', ''.join(f'<details><summary>{e(f["question"])}</summary><div>{e(f["answer"])}</div></details>' for f in D['faqs']))
page('curriculum.html', '课程介绍与完整大纲', overview)
page('outline.html', '逐课教学与成果验收', full_outline())
for i, phase in enumerate(D['phases'], 1):
    page(f'phase{i}.html', phase['name'], ''.join(lesson_html(l) for l in phase['lessons']))

plan = section('课前准备', ul([D['prerequisiteknowledge'], '准备企业介绍、服务、已有 Logo 和有权使用的图片；无资料可用课程案例。', '课前验证视频模板可渲染、Codex 账号可用、Scheduled Task 能力与执行环境。', '准备工作是课前检查，不计为额外课程；若未完成，安排与授课方确认。']))
plan += section('5 次课的衔接', '<ol>' + ''.join(f'<li><strong>{e(l["title"])}</strong><p>{e("；".join(l["deliverables"]))}。核心版本在本节 120 分钟内完成，课后迁移为可选。</p></li>' for l in LESSONS) + '</ol>')
plan += section('最终验收', ul([f'{l["code"]}：' + '；'.join(l['acceptance']) for l in LESSONS]))
plan += section('日期与授课服务', '<p>5 次课的具体日期、间隔、授课形式与讲师待确认。当前不承诺回放期限、证书、就业、收入或固定节省工时。</p>')
page('learning-plan.html', '学习计划', plan)

examples = section('示例性质与完成状态', f'<p>{e(C["label"])}</p><p>以下为本课程内容示例，直接展示完整可读输出；没有执行模型、发布或真实业务。公开预览不能替代正式产品与课堂环境中的完整验收。L04 的完整视频成果、L05 的真实定时触发均待补齐。</p>')
examples += section('L01 · 企业 Source of Truth 与 AI Assistant', '<h3>拾序工作室</h3>' + ''.join(f'<p><strong>{e(k)}</strong>：{e(v)}</p>' for k, v in C['business'].items()) + '<h3>AI Assistant 工作说明</h3>' + ''.join(f'<p><strong>{e(k)}</strong>：{e(v)}</p>' for k, v in C['assistant'].items()), 'result-L01')
swatches = ''.join(f'<div class="swatch" style="border-left:18px solid {color["value"]}"><strong>{e(color["name"])}</strong><br>{e(color["value"])}</div>' for color in C['brand']['colors'])
examples += section('L02 · 基础 VI 与 Design System', paras(C['brand']['concept']) + f'<div class="grid3">{swatches}</div>' + ul([C['brand'][k] for k in ['typography', 'spacing', 'components', 'logo']]) + '<p><a class="action-btn primary" href="example-website.html">打开完整企业网站原型</a></p>', 'result-L02')
content = '<h3>本周选题与依据</h3>' + ''.join(f'<h4>{e(t["title"])}</h4><p>{e(t["source"])} · {e(t["channel"])} · {e(t["goal"])}</p>' for t in C['contentPack']['topics'])
content += ''.join(f'<article class="draft"><span class="pill">{e(t["channel"])} · {e(t["status"])}</span><h3>{e(t["title"])}</h3>{paras(t["body"])}<p class="source">来源：{e("；".join(t["source"]))}</p></article>' for t in C['contentPack']['drafts'])
content += '<h3>一周 Content Calendar</h3>' + ul(C['contentPack']['calendar']) + '<h3>Review Checklist</h3>' + ul(C['contentPack']['review'])
examples += section('L03 · 完整多渠道 Content Pack', content, 'result-L03')
examples += section('L04 · Script / Storyboard（MP4 待制作）', '<p class="notice">这是分镜资料，不是完整视频成果；L04 成果 Demo 未完成。</p>' + paras(C['video']['goal']) + ''.join(f'<div class="draft"><strong>{e(s["seconds"])} 秒</strong><p>画面：{e(s["visual"])}</p><p>字幕：{e(s["caption"])}</p></div>' for s in C['video']['shots']), 'result-L04')
workflow = '<h3>任务说明</h3>' + paras(C['workflow']['task']) + '<h3>输入：第 1 周与第 2 周</h3>' + ul([x['id'] + '：' + x['fact'] for x in C['week1'] + C['week2']])
workflow += '<h3>本周工作包</h3>' + paras(C['workflow']['output']) + '<p><a href="#result-L03">阅读上方完整选题与草稿</a></p><h3>完整工作简报</h3>' + paras(C['workflow']['report'])
workflow += '<h3>Schedule Contract</h3>' + paras(C['workflow']['schedule']) + paras(C['workflow']['runtime']) + '<h3>异常输入与预期处理</h3>' + ul([x['input'] + ' → ' + x['expected'] for x in C['workflow']['exceptions']]) + '<h3>操作 SOP</h3>' + ul(C['workflow']['sop'])
examples += section('L05 · 每周营销工作包与 Workflow', workflow, 'result-L05')
page('examples.html', '完整预生成成果示例', examples)

w = C['website']
website = section(w['headline'], paras(w['intro']) + '<p><a class="action-btn primary" href="#consult">查看沟通准备事项</a></p>')
website += section('服务与交付范围', ''.join(f'<h3>{e(s["title"])}</h3><p>{e(s["body"])}</p>' for s in w['services']) + paras(C['business']['exclusions']))
website += section('完整成果案例 · 虚构', paras(w['example']))
website += section('合作流程', ul(w['process']))
website += section('咨询前准备', paras(w['contact']) + '<button class="action-btn primary" type="button" id="consult-button">体验咨询入口</button><p id="consult-feedback" role="status" hidden>这是隔离示例。请准备企业介绍、目标客户和已有素材；未收集或发送任何个人资料。</p>', 'consult')
website += '<script>document.getElementById("consult-button").addEventListener("click",()=>{document.getElementById("consult-feedback").hidden=false;});</script>'
page('example-website.html', '拾序工作室 · 完整虚构网站原型', website)

internal = section('本地创建状态', '<p>课程结构和价格已按 owner 确认落盘，5 课、22 步、600 分钟。未创建 Training / Program，没有 production ID。</p>' + ul(D['_meta']['pending']))
internal += section('OPC 取材与复用', ul([x['path'] + '：' + x['use'] for x in D['_meta']['sources'] if 'path' in x]))
internal += section('Lab 与教学资源', '<p>已核对 clear-task、output-format、business-writing、information-extraction、prompt-chaining 的本地配置存在。它们仅为教师备课参考，未绑定、不计课时。若未来纳入平台 Lab，必须创建独立 InteractiveLab Lesson 并重新确认 10 小时范围。课堂实操采用 SCENARIO / PROJECT。</p>')
internal += section('发布与成果缺口', '<p>未修改 deploy workflow。新课程的静态发布登记待部署任务处理；中央目录链接遵循既有发布展平路径。未运行本机 build、全量检查、模型 API 或真实定时任务。未制作课程 Slide Deck、MP4、配音或真实平台发布。</p><p>若后续制作 Deck，使用 Talk Deck；若产生已验证 MP4，执行视频 registry 流程。当前只交付课程规划源和本地预览。</p>')
page('internal.html', '内部课程管理与待办', internal)

# Reuse the repository's existing static curriculum stylesheet and semantic controls.
base = ROOT.parent / 'ai-image-text-workshop/public/styles.css'
css = base.read_text()
css += '''
/* Enterprise course projection: existing curriculum tokens, controls and layout. */
:root{--bg:var(--warm-bg);--warm-bg:#fff1e7;--white:#ffffff;--black:#000000}
body{color:var(--dark);overflow-wrap:anywhere}h1,h2,h3{font-family:'Bricolage Grotesque','Noto Sans SC',sans-serif}
.local-banner{padding:10px 20px;background:var(--yellow);color:var(--dark);border-bottom:3px solid var(--black);font-size:13px;text-align:center}
.brand{margin-bottom:20px}.brand img{object-fit:contain;max-width:100%}.eyebrow{letter-spacing:1px;font-size:13px;color:var(--yellow)}
.header{padding:40px 20px}.header h1{font-size:clamp(28px,5vw,48px);line-height:1.3;margin:12px 0}.header .sub{opacity:1}
.price-row{display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap;margin:20px 0 8px}.price-row strong{font-size:26px;color:var(--yellow)}
.price-note{font-size:13px}.header .nav{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}.header .nav a{padding:10px;opacity:1;border:2px solid transparent}
.nav a[aria-current=page]{border-color:var(--yellow)}.page-title{margin:4px 0 28px;font-size:26px}.box-h{background:var(--dark);font-size:21px}
.section-body,.lesson-intro{padding:22px 24px}.section-body p,.lesson-intro p{margin:0 0 14px}.section-body h3,.lesson-intro h4{margin:18px 0 12px}.section-body h3:first-child{margin-top:0}
ul,ol{padding-left:24px;margin:12px 0 18px}li{margin:7px 0}.phase-summary{padding:18px 24px 0}.lesson-head h3{font-size:18px;flex:1;margin:0}
.lesson-body{border-top:2px solid var(--border);border-bottom:2px solid var(--border);padding:20px;gap:22px}.lesson-body p,.lesson-body li{font-size:14px;color:var(--dark)}.lesson-body h4{font-size:16px;margin-bottom:10px}
.pill{font-family:'DM Sans','Noto Sans SC',sans-serif;background:var(--yellow);color:var(--dark)}
.action-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 18px;border:3px solid var(--black);box-shadow:4px 4px 0 var(--black);background:var(--white);color:var(--dark);font-size:15px;font-weight:700;cursor:pointer;margin:8px 8px 8px 0;text-decoration:none}
.action-btn.primary{background:var(--dark);color:var(--white)}.action-btn:hover{box-shadow:none;transform:translate(2px,2px);text-decoration:none}.action-btn.disabled{background:var(--white);color:var(--dark);box-shadow:none;border-style:dashed;cursor:default}
a:focus-visible,button:focus-visible,summary:focus-visible{outline:3px solid var(--red);outline-offset:4px}.skip{position:absolute;top:-100px;left:12px;background:var(--yellow);padding:12px;z-index:20}.skip:focus{top:8px}
.notice{border-left:6px solid var(--indigo);background:var(--warm-bg);padding:16px}.draft{padding:22px;border:2px solid var(--dark);margin:18px 0;background:var(--white)}.source{font-size:13px}.swatch{padding:16px;border:2px solid var(--dark)}
.steps{list-style:none;padding:0}.steps li{padding:16px 0;border-bottom:1px solid var(--dark)}.step-heading{display:flex;justify-content:space-between;gap:20px}.steps p{margin:10px 0 0}
details{border-color:var(--dark)}details summary{font-size:16px;padding:16px}details>div{font-size:15px}.footer{color:var(--dark);line-height:1.8}
.poster{width:800px;background:var(--warm-bg);border:4px solid var(--black);padding:42px;color:var(--dark)}.poster h1{font-size:58px;line-height:1.2;margin:26px 0}.poster h2{font-size:24px}.poster .poster-row{padding:18px 0;border-bottom:2px solid var(--black);font-size:23px;font-weight:700}.poster .poster-row small{display:block;font-size:15px;font-weight:400}.poster-price{margin-top:30px;border:3px solid var(--black);padding:20px;background:var(--yellow)}.poster-price strong{font-size:42px;display:block}.poster .brand img{height:42px;width:160px;object-fit:contain}.poster-wrap{overflow:auto;padding:16px 8px}
@media(max-width:768px){.section-body,.lesson-intro{padding:18px 16px}.box-h{font-size:18px}.lesson-head h3{flex-basis:100%}.step-heading{flex-direction:column;gap:4px}.price-row{gap:10px}.header .nav a{margin:0;font-size:13px}.action-btn{max-width:100%}.poster-wrap{padding:0;overflow:visible}.poster{width:100%;padding:24px}.poster h1{font-size:36px}.poster .poster-row{font-size:19px}.poster-price strong{font-size:32px}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}.action-btn:hover{transform:none}}
@media print{.local-banner,.nav,.action-btn,.footer,.skip{display:none}.header{padding:20px}.box{box-shadow:none;break-inside:auto}.lesson{break-inside:auto}body{background:white}.poster{width:100%}}
'''
(PUBLIC / 'styles.css').write_text(css, encoding='utf-8')
(PUBLIC / 'assets').mkdir(exist_ok=True)
for filename in ['logo-en-white.svg', 'logo-official-black.svg']:
    shutil.copyfile(ROOT.parent.parent / 'jr-academy-brand/assets/logo' / filename, PUBLIC / 'assets' / filename)

poster = '<div class="poster-wrap"><div id="poster" class="poster"><div class="brand"><img src="assets/logo-official-black.svg" alt="JR Academy"></div><p>Enterprise AI Automation Bootcamp</p><h1>企业 AI<br>自动化实战营</h1><h2>10 小时 · 5 节实操课</h2><p>从企业资料到品牌官网、营销内容、视频与重复任务。</p>'
poster += ''.join(f'<div class="poster-row">{i:02d} · {e(l["title"])}<small>{e(" / ".join(l["deliverables"]))}</small></div>' for i, l in enumerate(LESSONS, 1))
poster += '<div class="poster-price"><strong>早鸟价 899／人</strong><span>正常价 1,099／人 · 早鸟优惠 200</span></div><p>币种、开课日期与授课安排待确认。<br>Local 招生文案稿 · 未开放报名。</p></div></div><p><a class="action-btn primary" href="poster.png" download="企业AI自动化实战营-招生海报.png">下载 PNG</a></p>'
page('poster.html', '招生海报 · 本地文案稿', poster)

outline_md = f'# {D["name"]}\n\n{D["name_en"]}\n\n{D["timeLength"]}\n\n早鸟价 899／人｜正常价 1,099／人。币种待确认。\n\n{D["description"]}\n\n'
for l in LESSONS:
    outline_md += f'## {l["code"]} · {l["title"]}（120 分钟）\n\n{l["description"]}\n\n### 学习目标\n\n' + ''.join(f'- {x}\n' for x in l['objectives'])
    outline_md += '\n### 教学安排\n\n' + ''.join(f'- {s["duration"]} 分钟｜{s["title"]}：{s["description"]}\n' for s in l['steps'])
    outline_md += f'\n### 课堂实操\n\n{l["practice"]}\n\n### 成果整理\n\n{l["assignment"]}\n\n### 验收\n\n' + ''.join(f'- {x}\n' for x in l['acceptance']) + '\n'
outline_md += '## 未确认事项\n\n' + ''.join(f'- {x}\n' for x in D['_meta']['pending'])
(ROOT / 'COURSE_OUTLINE.md').write_text(outline_md, encoding='utf-8')
marketing = f'# 招生介绍｜{D["name"]}\n\n{D["name_en"]}\n\n**10 小时 · 5 节课 · 每节 2 小时**\n\n**早鸟价 899／人｜正常价 1,099／人｜早鸟优惠 200**\n\n币种及早鸟截止条件待确认。\n\n## 企业日常工作，从同一份资料开始\n\n企业需要整理资料、更新官网、制作营销内容、介绍产品，并安排下一周的工作。课程以 Codex 为核心实操工具，让你从企业 Source of Truth 出发，逐步完成具体作品，再将重复工作整理成 Automation Workflow。\n\n## 五节课，五组连贯成果\n\n'
marketing += ''.join(f'- **{l["title"]}**：{ "；".join(l["deliverables"])}。\n' for l in LESSONS)
marketing += '\n## 适合谁\n\n' + D['suitable'] + '\n\n## 怎么上课\n\n每节先展示完整成果，再拆解方法、跟做实操、修改检查。使用脱敏企业资料或统一虚构案例；核心版本在课堂内完成，后续可继续完善。\n\n## 课程范围\n\n' + D['prerequisiteknowledge'] + '\n\n网站以单页原型为范围；视频使用预置模板与已有素材；重复任务保留 Human Review。复杂系统集成、正式上线和深度定制另行评估。不承诺就业、收入、固定节省工时或无人值守运营。\n\n## 报名信息\n\n- 早鸟价：899／人。\n- 正常价：1,099／人。\n- 币种、税费、早鸟期限、日期、讲师、地点、授课形式和报名入口：待确认。\n- 软件订阅、回放、课后答疑及第三方费用的包含范围：待确认。\n\n## 招生 FAQ\n\n'
marketing += ''.join(f'### {f["question"]}\n\n{f["answer"]}\n\n' for f in D['faqs'])
marketing += '## 当前发布状态\n\n本地招生稿，未开放报名。成果示例为虚构、预生成；完整 MP4、真实定时运行与正式产品内展示入口尚未验收，成果 Demo 未完成。\n'
(ROOT / 'ENROLLMENT.md').write_text(marketing, encoding='utf-8')
(PUBLIC / 'pages.json').write_text(json.dumps(D['curriculumPages'], ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'Rendered {len(LESSONS)} lessons / {sum(l["duration"] for l in LESSONS)} minutes from outline.json')
