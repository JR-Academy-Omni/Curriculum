# coding: utf-8
import json,html
from pathlib import Path
r=Path(__file__).resolve().parents[1]
d=json.loads((r/'src/data/trustworthiness-lesson.json').read_text());e=html.escape
parts=[]
for s in d['sections']:
 body='<h2>'+e(s['label'])+' · '+e(s['title'])+'</h2>'
 if s.get('rows'):
  body+='<table><thead><tr>'+''.join('<th>'+e(h)+'</th>' for h in s['headers'])+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+e(v)+'</td>' for v in row)+'</tr>' for row in s['rows'])+'</tbody></table>'
 for rec in s.get('records',[]):body+='<article><h3>'+e(rec['title'])+'</h3><p>'+e(rec['text'])+'</p></article>'
 body+='<blockquote>'+e(s['summary'])+'</blockquote>'
 parts.append('<section>'+body+'</section>')
page='''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Trustworthiness：可信内容的具体写法</title><style>body{font:18px/1.7 system-ui,sans-serif;background:#fff1e7;color:#10162f;max-width:1120px;margin:40px auto;padding:0 24px}h1{font-size:36px}h2{margin-top:36px}article,blockquote{background:white;border:1px solid #cbd0db;border-radius:18px;margin:18px 0;padding:20px}blockquote{border-left:5px solid #ff5757}table{border-collapse:collapse;width:100%;background:white;table-layout:fixed}td,th{border:1px solid #cbd0db;padding:13px;text-align:left;vertical-align:top;overflow-wrap:anywhere}a{color:#9d2727}a:focus-visible{outline:3px solid #38b6ff;outline-offset:3px}@media(max-width:650px){body{padding:0 16px}h1{font-size:28px}td,th{font-size:14px;padding:7px}}</style><a href="../?page=53">← 返回第53页</a><h1>Trustworthiness：让读者放心依据你的内容</h1><p>'''+e(d['definition'])+'</p>'+''.join(parts)+'''<h2>完整文章片段 · 虚构人物与测试场景</h2><article><h3>活动报名页：测试表单提交与记录保存</h3><p>作者：林悦（示例人物）</p><p>我制作了姓名、邮箱、人数三个字段，在桌面 Chrome 中填写测试资料并提交，再到数据表中查找对应记录。提交后，我找到了这条报名记录。</p><p>这次测试覆盖填写、提交和记录保存，没有测试手机流程、邮件通知或支付。本文使用厂商提供的免费测试账号，厂商未参与结论撰写。</p><p><strong>更正：</strong>原文把“出现提交成功提示”写成“记录已保存”。现改为“提交后还需到数据表查对应记录”，并补上操作步骤。</p><p><strong>反馈方式：</strong>若操作步骤与当前界面不同，可通过文章下方纠错入口提交问题所在段落、使用环境和具体画面。</p></article><p>正式文章中的纠错入口应链接网站实际使用的联系渠道；作者、测试结果和商业关系填写真实情况。</p><h2>日期与代码怎么对应</h2><p>Published 表示首次发表；Updated 表示内容的实际更新。若使用 Article JSON-LD，datePublished、dateModified 与读者可见日期保持一致。日期帮助理解时效性，不替代内容正确性。</p><h2>官方资料</h2><p>'''+ ' · '.join('<a href="'+url+'">'+e(name)+'</a>' for name,url in d['links'].items())+'</p></html>'
(r/'public/materials/trustworthiness.html').write_text(page)
print('Built full trustworthiness handout')
