#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validate course invariants, actual artefacts and all local HTML links."""
import json,pathlib,re,hashlib,sys
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=pathlib.Path(__file__).resolve().parents[1];public=root/'public';o=json.loads((public/'outline.json').read_text())
lessons=[l for p in o['phases'] for l in p['lessons']]
assert len(o['weeks'])==10 and len(o['phases'])==6 and len(lessons)==o['totalLessons']==20
assert len(o['tasks'])==30 and {t['id'] for t in o['tasks']}==set(range(1,31))
assert {n for w in o['weeks'] for n in w['taskIds']}==set(range(1,31))
assert [l['code'] for l in lessons]==[f'L{i:02}' for i in range(1,21)]
assert sum(l['isLive'] for l in lessons)==10
assert sum(len(l['steps']) for l in lessons)==o['totalSteps']==100
assert sum(l['duration'] for l in lessons)==4200
for l in lessons:
 assert l['type'] in ['Workshop','Assignment'] and sum(s['duration'] for s in l['steps'])==l['duration']
 assert len(l['learningMaterial'])>1800 and l['description']!=l['learningMaterial']
 assert l['assignment']['language']=='en' and not re.search('[\u4e00-\u9fff]',l['assignment']['prompt'])
 assert l['kanbanTasks'] and all(t['deliverable'] and t['reviewType'] for t in l['kanbanTasks'])
 assert not any(s['type']=='LAB' for s in l['steps']) and not l['labs']
 q=l['knowledgeCheck'];assert q['language']=='en' and q['explanation'] and 0<=q['correctIndex']<len(q['options'])
 assert not re.search('[\u4e00-\u9fff]',json.dumps(q,ensure_ascii=False))
for w in o['weeks']:
 assert len([l for l in lessons if l['week']==w['week']])==2
 assert w['submission'] and w['review'] and w['officialResourceIndices']
 assert all(0<=i<len(o['officialResources']) for i in w['officialResourceIndices'])
class Links(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=set()
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if 'id' in d:self.ids.add(d['id'])
  if tag in ['a','link','script','img']:
   v=d.get('href',d.get('src',''))
   if v:self.links.append(v)
parsers={}
for p in public.glob('*.html'):
 text=p.read_text();assert 'noindex,nofollow' in text
 assert not re.search('googletagmanager|google-analytics|gtag\\(',text)
 parser=Links();parser.feed(text);parsers[p.name]=parser
 for href in parser.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  target=public/unquote(u.path) if u.path else p
  assert target.is_file(),(p.name,href)
  if u.fragment and target.suffix=='.html':
   other=Links();other.feed(target.read_text());assert unquote(u.fragment) in other.ids,(p.name,href)
for p in o['curriculumPages']['pages']:assert (public/p).is_file()
assert o['salesPath']=='/program-course/fde-tech'
export=json.loads((root/'exports/fde-tech.json').read_text());assert export['totalLessons']==20
assert not any(k in export['course'] for k in ['id','_id','trainingId'])
assert not any('id' in x or '_id' in x for p in export['outline'] for x in p['lessons'])
assert export['source']['outlineSha256']==hashlib.sha256((public/'outline.json').read_bytes()).hexdigest()
print(json.dumps({'weeks':10,'modules':6,'lessons':20,'tasks':30,'steps':100,'htmlPages':len(parsers),'links':'all local targets and fragments valid','questionLanguage':'en','salesPath':o['salesPath'],'productionWrites':0}))
