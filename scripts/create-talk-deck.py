#!/usr/bin/env python3
"""Create an HTML-only Talk Deck and Local catalog card, never publish or overwrite."""
from pathlib import Path
import argparse, html, re, shutil
ROOT=Path(__file__).resolve().parents[1]
def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('slug');p.add_argument('--title',required=True);p.add_argument('--instructor',required=True);p.add_argument('--minutes',required=True,type=int)
    a=p.parse_args()
    if not re.fullmatch(r'[a-z][a-z0-9]*(?:-[a-z0-9]+)*',a.slug) or a.minutes<=0:p.error('use a lowercase hyphenated slug and positive minutes')
    target=ROOT/'lessons'/a.slug
    if target.exists():p.error('target already exists; existing lessons are never overwritten')
    catalog=ROOT/'lessons.html';text=catalog.read_text();marker='<div class="grid">'
    if text.count(marker)!=1:p.error('catalog must have one grid')
    shutil.copytree(ROOT/'lessons/_template',target,ignore=shutil.ignore_patterns('node_modules','dist','out','*.tsbuildinfo'))
    for f in target.rglob('*'):
        if f.is_file() and f.suffix in {'.md','.html','.json','.ts','.tsx','.lock'}:
            s=f.read_text();s=s.replace('{{SLUG}}',a.slug).replace('{{TITLE}}',html.escape(a.title) if f.suffix=='.html' else a.title)
            if f.name=='package.json':
                import json
                data=json.loads((ROOT/'lessons/_template/package.json').read_text());data['name']='lesson-'+a.slug;data['description']='JR Academy · '+a.title+' — HTML Talk Deck';s=json.dumps(data,ensure_ascii=False,indent=2)+'\n'
            f.write_text(s)
    title=html.escape(a.title);teacher=html.escape(a.instructor)
    card=f'''\n      <div class="card">
        <div class="card-head"><span class="badge badge-react">HTML Talk Deck · React</span><span class="badge badge-status-local">Draft / Local · 未部署</span></div>
        <h2>{title}</h2><p class="desc">新课件草稿，教学内容与验收尚待完成。</p>
        <div class="meta-row"><div class="meta-item">讲师：{teacher}</div><div class="meta-item">时长：{a.minutes} min</div><div class="meta-item">Slide 数：2（模板占位，制作后更新）</div><div class="meta-item">技术栈：HTML / React / Vite / SlideEngine</div></div>
        <div class="reuse-label">课程映射 / 跨课复用：待确认</div>
        <div class="actions"><a class="btn primary" href="./lessons/{a.slug}/">打开课件（未部署）</a><a class="btn" href="./lessons/{a.slug}/PRD.md">PRD</a><a class="btn" href="./lessons/{a.slug}/RUNSHEET.md">讲师流程</a><a class="btn" href="./lessons/{a.slug}/WORKSHEET.md">工作单</a></div>
      </div>'''
    catalog.write_text(text.replace(marker,marker+card,1))
    print(f'Created {target}; Local catalog only. Fill teaching documents and slides, update slide count/Changelog, add deploy build/copy steps, build and run QA. Nothing published.')
if __name__=='__main__':main()
