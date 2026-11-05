#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Deterministic course projection. No network calls, database writes or invented IDs."""
import argparse, hashlib, html, json, pathlib, shutil
COURSE=pathlib.Path(__file__).resolve().parents[1]; PUBLIC=COURSE/'public'
e=lambda x:html.escape(str(x),quote=True)
def ul(xs):return '<ul>'+''.join('<li>'+e(x)+'</li>' for x in xs)+'</ul>'
def table(headers,rows):return '<div class="table-wrap"><table><thead><tr>'+''.join('<th>'+e(x)+'</th>' for x in headers)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+e(x)+'</td>' for x in row)+'</tr>' for row in rows)+'</tbody></table></div>'
def material(l,w):
 q=w['knowledgeCheck']
 return '<section class="learn-path-body"><h2>'+e(l['title'])+'</h2><p>'+e(w['summary'])+'</p><h3>Preparation</h3><p>'+e(w['prep'])+'</p><h3>Client brief</h3><p>'+e(w['challenge'])+'</p><h3>Run of session</h3>'+table(['Minutes','Activity','Instructions'],[(s['duration'],s['title'],s['description']) for s in l['steps']])+'<h3>Submission</h3>'+ul(w['submission'])+'<h3>Review criteria</h3>'+ul(w['review'])+'<h3>Decision to obtain</h3><p>'+e(w['decision'])+'</p><h3>Knowledge check</h3><p>'+e(q['question'])+'</p>'+ul(q['options'])+'<details><summary>Answer and reasoning</summary><p>'+e(q['options'][q['correctIndex']])+'</p><p>'+e(q['explanation'])+'</p></details><h3>Reference reasoning</h3><p>'+e(w['reference'])+'</p></section>'
def page(title,body):
 nav='<nav aria-label="课程资料">'+''.join('<a href="'+p+'">'+label+'</a>' for p,label in [('curriculum.html','完整大纲'),('learning-plan.html','十周安排'),('outline.html','学习任务'),('cases.html','案例资料'),('outcomes.html','交付成果')])+'</nav>'
 return '<!doctype html><html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="googlebot" content="noindex,nofollow"><title>'+e(title)+' · FDE Tech</title><link rel="stylesheet" href="styles.css"></head><body><header><a class="brand" href="curriculum.html">JR ACADEMY <span>FDE TECH</span></a>'+nav+'</header><main><p class="eyebrow">ENTERPRISE AI DELIVERY</p><h1>'+e(title)+'</h1>'+body+'</main><footer>匠人学院 · FDE Tech</footer></body></html>'
def weekcard(w):
 return '<article class="card" id="week-'+str(w['week'])+'"><div class="kicker">WEEK '+str(w['week'])+'</div><h2>'+e(w['title'])+'</h2><p>'+e(w['summary'])+'</p><p class="meta">工作坊 3 小时 · 课外准备与实践约 4 小时</p><h3>本周交付</h3><p>'+e(w['output'])+'</p><a class="button" href="week'+str(w['week'])+'.html">查看本周训练 →</a></article>'
def lessoncard(l):
 return '<article class="card" id="'+l['code']+'"><p class="kicker">'+e(l['code'])+' · '+e(l['type'])+' · '+str(l['duration'])+' MIN</p><h3>'+e(l['title'])+'</h3><p>'+e(l['description'])+'</p><details><summary>展开教学步骤、任务与评审</summary>'+l['learningMaterial']+'</details></article>'
def build(args):
 source=PUBLIC/'outline.json'; o=json.loads(source.read_text())
 for phase in o['phases']:
  for l in phase['lessons']:l['learningMaterial']=material(l,o['weeks'][l['week']-1])
 source.write_text(json.dumps(o,ensure_ascii=False,indent=2)+'\n')
 digest=hashlib.sha256(source.read_bytes()).hexdigest()
 outputs={}
 all_lessons=[l for p in o['phases'] for l in p['lessons']]
 intro='<p class="lead">'+e(o['description'])+'</p><div class="stats"><div><strong>10</strong>周训练</div><div><strong>20</strong>工作坊与实践课</div><div><strong>30</strong>工程交付任务</div><div><strong>3</strong>客户案例</div></div>'
 overview=intro+'<p>先调查客户，再做方案、算预算；随后完成系统接入与评估，带着实现做客户展示，处理变更并完成交接。</p><a class="button" href="outcomes.html">先看完整交付成果 →</a><h2>六个模块与全部课次</h2>'
 for n,p in enumerate(o['phases'],1):
  overview+='<section><p class="kicker">MODULE '+str(n)+'</p><h2>'+e(p['name'])+'</h2><p>'+e(p['summary'])+'</p>'+table(['课次','主题','形式','时长','内容'],[(l['code'],l['title'],l['type'],str(l['duration'])+' min',l['description']) for l in p['lessons']])+'<a href="phase'+str(n)+'.html">查看模块训练与评审 →</a></section>'
 outputs['curriculum.html']=page(o['name'],overview)
 outputs['outline.html']=page('全部学习任务',intro+''.join('<section><h2>'+e(p['name'])+'</h2>'+''.join(lessoncard(l) for l in p['lessons'])+'</section>' for p in o['phases']))
 outputs['learning-plan.html']=page('十周怎样安排', '<p class="lead">每周先完成资料准备，再带着问题进工作坊。课后修改实现、记录证据，准备下一次客户决定。</p><p>每周工作坊 3 小时；课外约 3–5 小时，本版按 4 小时设计。开课日期和具体时段咨询确认。基础补课按需安排，另计时间。</p><div class="grid">'+''.join(weekcard(w) for w in o['weeks'])+'</div>')
 for n,p in enumerate(o['phases'],1):
  outputs['phase'+str(n)+'.html']=page(p['name'],'<p class="lead">'+e(p['summary'])+'</p>'+''.join(lessoncard(l) for l in p['lessons'])+'<section class="card"><h2>模块评审</h2><p>'+e(p['assessment']['passCondition'])+'</p>'+ul(p['assessment']['criteria'])+'</section>')
 for w in o['weeks']:
  lessons=[l for l in all_lessons if l['week']==w['week']]
  body='<p class="lead">'+e(w['summary'])+'</p><div class="pill">WORKSHOP 180 MIN · PRACTICE 240 MIN</div><h2>课前准备</h2><p>'+e(w['prep'])+'</p><h2>本周案例</h2>'+''.join('<a class="button secondary" href="cases.html#'+cid+'">'+e(next(c['title'] for c in o['cases'] if c['id']==cid))+'</a>' for cid in w['caseIds'])+''.join(lessoncard(l) for l in lessons)+'<h2>本周工程任务</h2><div class="grid">'+''.join('<article class="card"><p class="kicker">TASK '+str(t['id']).zfill(2)+'</p><h3>'+e(t['title'])+'</h3><p>'+e(t['prompt'])+'</p><h4>Deliverable</h4><p>'+e(t['deliverable'])+'</p></article>' for t in o['tasks'] if t['id'] in w['taskIds'])+'</div><h2>按需阅读 · Claude 官方资源</h2><p>带着本周问题阅读。不熟的工具先补基础，再回到工程任务。</p>'+''
  body+='<ul>'+''.join('<li><a href="'+e(o['officialResources'][i]['url'])+'" target="_blank" rel="noreferrer">'+e(o['officialResources'][i]['title'])+'</a></li>' for i in w['officialResourceIndices'])+'</ul>'
  body+='<h2>要取得的客户决定</h2><p>'+e(w['decision'])+'</p><a class="button" href="'+('week'+str(w['week']+1)+'.html' if w['week']<10 else 'outcomes.html')+'">'+('下一周 →' if w['week']<10 else '查看交付成果 →')+'</a>'
  outputs['week'+str(w['week'])+'.html']=page('Week '+str(w['week'])+' · '+w['title'],body)
 casebody='<p class="lead">三类客户项目，三组交付限制。读完背景与输入，再决定架构、成本和控制方式。</p>'
 for c in o['cases']:
  casebody+='<section class="card" id="'+c['id']+'"><p class="kicker">CLIENT CASE</p><h2>'+e(c['title'])+'</h2><p>'+e(c['context'])+'</p><h3>Request</h3><p>'+e(c['request'])+'</p><h3>Constraints</h3>'+ul(c['constraints'])+'<h3>Stakeholders</h3>'+table(['Role','Position'],[(r['role'],r['position']) for r in c['stakeholders']])+'<h3>Planning baseline</h3><pre>'+e(json.dumps(c['baseline'],indent=2))+'</pre><h3>Input records</h3><pre>'+e(json.dumps(c['records'],indent=2))+'</pre><h3>Change card</h3><p>'+e(c['change'])+'</p><a href="outcomes.html#'+c['id']+'">阅读完整交付判断 →</a></section>'
 outputs['cases.html']=page('客户案例资料',casebody)
 import importlib.util
 spec=importlib.util.spec_from_file_location('fde_reference',PUBLIC/'reference.py');ref=importlib.util.module_from_spec(spec);spec.loader.exec_module(ref);observed=ref.run()
 resultbody='<p class="lead">查看方案、预算、系统行为与交接要求。成果既要能打开说明，也要能通过输入检查关键控制。</p>'
 for c in o['cases']:
  resultbody+='<section class="card" id="'+c['id']+'"><h2>'+e(c['title'])+'</h2><h3>客户问题与边界</h3><p>'+e(c['request'])+'</p>'+ul(c['constraints'])+'<h3>方案与交付判断</h3>'+ul(c['reference'])+'<h3>实现与验证</h3><p>在课程项目目录运行 <code>python3 reference.py</code>，核对授权检索、当前审批、重复事件与采购规则变更的实际输出。</p><details><summary>展开参考实现</summary><pre>'+e((PUBLIC/'reference.py').read_text())+'</pre></details><h3>验收与交接</h3>'+ul(['Keep input, expected decision and observed result together.','A restricted document, stale approval or duplicate commitment blocks acceptance.','Give the receiver setup steps, configuration requirements, failure recovery and the owner of each open issue.'])+'</section>'
 delivery=o['referenceDelivery']
 resultbody+='<section class="card"><p class="kicker">COMPLETE DELIVERY PACK</p><h2>'+e(delivery['title'])+'</h2><h3>Decision requested</h3><p>'+e(delivery['decision'])+'</p><h3>Architecture</h3><div class="flow">'+''.join('<div>'+e(x)+'</div>' for x in delivery['architecture'])+'</div><h3>Scope</h3>'+ul(delivery['scope'])+'<h3>Interface contract</h3><pre>'+e(json.dumps(delivery['contract'],indent=2))+'</pre><h3>Build estimate · AUD</h3>'+table(['Work','Hours','Assumed rate','Cost'],[(x['work'],x['hours'],x['assumedRateAUD'],x['costAUD']) for x in delivery['buildBudget']])+'<p>'+e(delivery['budgetReasoning'])+'</p><h3>Capacity sensitivity</h3>'+table(['Accepted coverage','Saved hours','Capacity value AUD'],[(x['acceptedCoverage'],x['savedHours'],x['capacityValueAUD']) for x in delivery['sensitivity']])+'<h3>Acceptance matrix</h3>'+table(['Input','Expected outcome'],[(x['input'],x['expected']) for x in delivery['acceptance']])+'<h3>Pilot plan</h3>'+ul(delivery['pilot'])+'<h3>Runbook</h3>'+ul(delivery['runbook'])+'<h3>Individual portfolio</h3><p>'+e(delivery['portfolio'])+'</p></section>'
 resultbody+='<section class="card"><h2>关键控制的运行结果</h2><pre>'+e(json.dumps(observed,indent=2))+'</pre></section>'
 outputs['outcomes.html']=page('从客户问题到交付成果',resultbody)
 outputs['reference-results.json']=json.dumps(observed,indent=2)+'\n'
 outputs['internal.html']=page('课程管理记录','<p>内容源：outline.json。课程版本哈希：'+digest+'</p>'+table(['对象','状态'], [('Training','Local course definition; no production ID'),('Modules','6 local definitions'),('Program','First-cohort draft; dates, teacher bindings and city require confirmation'),('Syllabus','20 ordered local lessons'),('Lessons','10 workshops and 10 assignments with learning material'),('Resources','Claude reference links; no paid model execution'),('Public catalogue','Generated approved-course projection; not an enrolment or paid-program record')])+'<p>所有案例和基线由课程作者设计，不是真实客户记录。参考实现是确定性控制逻辑，不代表实时模型调用或生产交付。没有编造学员成果、运行指标、公司客户关系或数据库 ID。</p><p>当前仅本地。生产同步必须先读取现状、查看差异，经用户确认后执行。未确认日期、教师班次绑定、城市、价格适用条件均不得推定。</p>')
 outputs['pages.json']=json.dumps(o['curriculumPages'],ensure_ascii=False,indent=2)+'\n'
 for name,value in outputs.items():(PUBLIC/name).write_text(value)
 # Sales projections contain only approved public facts, not full learning material.
 projection={'sourceSha256':digest,'slug':o['slug'],'name':o['name'],'name_en':o['name_en'],'type':o['type'],'level':o['level'],'description':o['description'],'description_en':o['description_en'],'cardDescription':o['cardDescription'],'timeLength':o['timeLength'],'highlights':o['highlights'],'salesPath':o['salesPath'],'pricing':o['pricing'],'locales':{}}
 for locale in ['zh','en']:
  view=o['salesPresentation'][locale]
  timetable={**view['schedule'],'stages':[{'period':'Week '+str(w['week']),'title':w['title'],'activity':w['summary'] if locale=='zh' else w['summary_en'],'output':w['output'] if locale=='zh' else w['output_en']} for w in o['weeks']]}
  prices=view['salesPage'].copy();prices['priceAmount']=format(o['pricing']['regular'],',');prices['priceOptions']=[{**prices['priceOptions'][0],'amount':format(o['pricing']['preorder'],',')},{**prices['priceOptions'][1],'amount':format(o['pricing']['earlyBird'],',')}]
  projection['locales'][locale]={'capabilities':view['capabilities'],'proposalShowcase':view['proposalShowcase'],'careerMarket':view['careerMarket'],'schedule':timetable,'automation':view['automation'],'curriculum':view['curriculum'],'salesPage':prices,'visuals':{**view['visuals'],'schedule':timetable}}
 if args.web_root:
  dest=pathlib.Path(args.web_root)/'src/content/fdeTechCourse.generated.json'; dest.parent.mkdir(parents=True,exist_ok=True); dest.write_text(json.dumps(projection,ensure_ascii=False,indent=2)+'\n')
  catalogue=dest.with_name('fdeTechCatalog.generated.json'); catalogue.write_text(json.dumps({k:v for k,v in projection.items() if k!='locales'},ensure_ascii=False,indent=2)+'\n')
 # SDM CourseDetail shape. Local keys identify authoring entries, never masquerade as Mongo IDs.
 detail={'source':{'kind':'local-authoring','outlineSha256':digest,'salesPath':o['salesPath']},'course':{k:o[k] for k in ['slug','name','name_en','description','description_en','level','type','timeLength','cardDescription','highlights','courseObjective','suitable','prerequisiteknowledge']},'outline':[{'localKey':'module-'+str(pi+1),'name':p['name'],'label':p['name'],'lessons':[{'localKey':l['code'],'code':l['code'],'name':l['title'],'title':l['title'],'titleEn':l['title_en'],'type':l['type'],'level':o['level'],'duration':str(l['duration']),'description':l['description'],'description_en':l['description_en'],'knowledge':[s['title'] for s in l['steps']],'order':all_lessons.index(l),'learningMaterial':{'content':l['learningMaterial'],'status':'draft'},'week':l['week']} for l in p['lessons']]} for pi,p in enumerate(o['phases'])],'programs':[{**o['program'],'localKey':'first-cohort','courseLength':o['timeLength']}],'totalLessons':len(all_lessons),'stats':{'totalDuration':sum(l['duration'] for l in all_lessons),'lessonTypes':{'Workshop':10,'Assignment':10},'knowledgeTags':[]}}
 exports=COURSE/'exports'; exports.mkdir(exist_ok=True)
 (exports/'fde-tech.json').write_text(json.dumps(detail,ensure_ascii=False,indent=2)+'\n')
 if args.skills_data_root:
  dest=pathlib.Path(args.skills_data_root)/'training-outlines/fde-tech.json'; dest.parent.mkdir(exist_ok=True,parents=True); dest.write_text((exports/'fde-tech.json').read_text())
 print(json.dumps({'lessons':o['totalLessons'],'steps':o['totalSteps'],'weeks':len(o['weeks']),'tasks':len(o['tasks']),'phases':len(o['phases']),'sourceSha256':digest,'publicPages':len(outputs)},ensure_ascii=False))
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('--web-root');ap.add_argument('--skills-data-root');build(ap.parse_args())
