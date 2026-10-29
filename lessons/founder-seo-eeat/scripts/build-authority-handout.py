# coding: utf-8
import json,html
from pathlib import Path
r=Path(__file__).resolve().parents[1]
d=json.loads((r/'src/data/authoritativeness-lesson.json').read_text())
e=html.escape
parts=[]
for s in d['sections']:
 body='<h2>'+e(s['label'])+' · '+e(s['title'])+'</h2>'
 if s.get('rows'):
  body+='<table><thead><tr>'+''.join('<th>'+e(h)+'</th>' for h in s['headers'])+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+e(v)+'</td>' for v in row)+'</tr>' for row in s['rows'])+'</tbody></table>'
 for record in s.get('records',[]):
  body+='<article><h3>'+e(record['title'])+'</h3><p>'+e(record['text'])+'</p><a href="'+e(record['url'])+'">'+e(record['label'])+' ↗</a></article>'
 body+='<blockquote>'+e(s['takeaway'])+'</blockquote>'
 parts.append('<section id="'+s['id']+'">'+body+'</section>')
page='''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Authoritativeness：领域认可的来源、积累与展示</title><style>body{font:18px/1.7 system-ui,sans-serif;color:#10162f;background:#fff1e7;max-width:1120px;margin:40px auto;padding:0 24px}h1{font-size:36px}h2{margin-top:36px}article,blockquote{background:white;border:1px solid #cbd0db;border-radius:18px;margin:18px 0;padding:20px}blockquote{border-left:5px solid #ff5757}table{border-collapse:collapse;width:100%;background:white;table-layout:fixed}td,th{border:1px solid #cbd0db;text-align:left;padding:13px;vertical-align:top;overflow-wrap:anywhere}a{color:#9d2727}a:focus-visible{outline:3px solid #38b6ff;outline-offset:3px}@media(max-width:650px){body{padding:0 16px}h1{font-size:28px}td,th{padding:7px;font-size:14px}}</style><a href="../?page=52">← 返回第52页</a><h1>Authoritativeness：怎样获得领域认可</h1><p>'''+e(d['definition'])+'</p>'+''.join(parts)+'''<section><h2>个人网站中的完整写法：Simon 案例</h2><article><h3>Django 早期开发经历</h3><p>Simon Willison 参与了 Django 的早期开发。Django 官方 FAQ 记载，他与 Adrian Holovaty 在2003年开始用 Python 开发网站，并从中逐步提取通用框架。Django 基金会的 Former Django Core Team 名单也列出了他。</p><p><a href="'''+d['links']['history']+'">项目历史</a> · <a href="'+d['links']['contributors']+'''">原核心团队名单</a></p></article><p>这段写法把项目、角色、时间和外部来源放在一起。它说明的是 Django 相关经历，不把它改写为所有技术领域的资质。</p></section><h2>官方参考</h2><p><a href="'''+d['links']['google']+'">Google：E-E-A-T 与有帮助的内容</a></p></html>'
page=page.replace('</html>','<p><a href="'+d['links']['mozDA']+'">Moz · Domain Authority 指南</a> · <a href="'+d['links']['mozPA']+'">Moz · Page Authority 白皮书</a> · <a href="'+d['links']['mozRelease']+'">Moz 指标说明公告</a></p></html>')
(r/'public/materials/authoritativeness.html').write_text(page)
print('Built complete authority handout')
