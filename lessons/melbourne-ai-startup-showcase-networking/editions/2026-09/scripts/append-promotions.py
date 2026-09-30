"""Append the two distinct future-edition registration pages to this event deck."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'src/data/deck.json'
deck = json.loads(SOURCE.read_text())
deck['slides'] = [s for s in deck['slides'] if s['id'] not in ('S21_October', 'S22_November')]

def txt(x, y, w, h, text, size=34, color='#10162f', bold=False, **extra):
    line_height = 1.2 if size >= 60 else 1.35
    return dict(type='text', x=x, y=y, w=w, h=max(h,size*line_height*len(text.split('\n'))+5),
                text=text, fontSize=size, color=color, fontFamily='PingFang SC',
                fontWeight=700 if bold else 400, lineHeight=line_height, **extra)

for month, day, event_id, slide_id in [
    (10, 28, '6a979c1b24431e1a2806fd18', 'S21_October'),
    (11, 25, '6a97ae7a24431e1a28184797', 'S22_November'),
]:
    dark = month == 11
    ink = '#ffffff' if dark else '#10162f'
    accent = '#FFDE59' if dark else '#ff5757'
    subtle = '#c6c9d4' if dark else '#68666a'
    url = f'https://jiangren.com.au/events/{event_id}'
    elements = [
        txt(120,80,1300,54,f'{month} 月场 · 提前报名',32,accent,True),
        txt(120,165,920,180,'墨尔本 AI 创业项目\n展示交流',68,ink,True),
        txt(120,367,920,61,'AI Startup Showcase & Networking',33,ink),
        txt(120,468,890,65,f'2026 年 {month} 月 {day} 日 · 星期三',38,ink,True),
        txt(120,542,880,72,'5:30 PM–8:30 PM',48,ink,True),
        txt(120,617,880,41,'墨尔本当地时间',24,subtle),
        txt(120,685,880,55,'ANNG Gallery',36,ink,True),
        txt(120,747,895,83,'Level 17, 60 Albert Road\nSouth Melbourne VIC 3205',27,ink),
        dict(type='rect',x=1045,y=294,w=400,h=400,fill='#ffffff',stroke='#000000',strokeWidth=3,shadow='6px 6px 0px #000'),
        dict(type='image',x=1065,y=314,w=360,h=360,src=f'promotions/2026-{month:02}/registration-qr.png',fit='contain'),
        txt(1020,720,450,56,f'扫码报名 {month} 月场',33,accent,True,align='center',url=url),
        txt(1040,783,400,38,'免费参加，需提前报名',25,ink,align='center'),
        txt(120,840,1320,42,'5 个 AI 项目 Demo，现场问答与自由交流',25,accent,True),
    ]
    notes = (f'报名与信息来源：{url}\n活动页正文：2026年{month}月{day}日（星期三），'
             '5:30 PM–8:30 PM，ANNG Gallery，Level 17, 60 Albert Road, South Melbourne VIC 3205。'
             '\n采用活动正文和流程中明确列出的当地时间。页面系统北京时间 15:30–18:30 与正文相差一小时，用户已确认两场均按正文17:30–20:30（墨尔本当地时间）展示。'
             '\n二维码准确编码上述本月报名URL，报名文字同时带可点击链接。')
    deck['slides'].append(dict(id=slide_id,title=f'{month}月场｜墨尔本 AI 创业项目展示交流',
                               background='#10162f' if dark else '#fff1e7',notes=notes,elements=elements))
    (ROOT / 'src/components/slides' / f'{slide_id}.tsx').write_text(
        f"import DeckSlide from '../DeckSlide';\nexport default function {slide_id}() {{ return <DeckSlide id=\"{slide_id}\" />; }}\n")

SOURCE.write_text(json.dumps(deck,ensure_ascii=False,indent=2))
app = ROOT / 'src/App.tsx'
code = app.read_text()
for sid in ['S21_October','S22_November']:
    if f'import {sid} ' not in code:
        code = f"import {sid} from './components/slides/{sid}';\n" + code
    if f'<{sid} />' not in code:
        code = code.replace('</SlideEngine>;',f'      <{sid} />\n</SlideEngine>;')
app.write_text(code)
print('Appended October and November promotion pages; total:',len(deck['slides']))
