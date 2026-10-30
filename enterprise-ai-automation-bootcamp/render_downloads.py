# -*- coding: utf-8 -*-
"""Render complete teaching downloads from local case-study.json, no services."""
from pathlib import Path
import json

def render(public):
 d=json.loads((public/'case-study.json').read_text());out=public/'downloads';out.mkdir(exist_ok=True)
 banner='品牌与营销作品 · 非真实经营记录；不发送、不发布、不下单。\n\n'
 (out/'shixu-assistant-workbook.md').write_text('# 拾序咖啡 · AI Assistant 完整成果\n\n'+banner+''.join(f'## {x["label"]}\n\n任务输入：{x["request"]}\n\n### {x["title"]}\n\n{x["body"]}\n\n依据：'+ '、'.join(x['sources'])+'\n\n审核交接：'+x['handoff']+'\n\n' for x in d['assistantSamples'].values()))
 (out/'shixu-content-pack.md').write_text('# 拾序咖啡 · Content Pack\n\n'+banner+''.join(f'## {label}\n\n{d["week1"][key]}\n\n' for key,label in [('xhs','小红书'),('wechat','公众号'),('linkedin','LinkedIn'),('email','产品邮件')])+'## 四张图文套装文案\n\n'+''.join(f'### {x["kicker"]}\n\n{x["title"]}\n\n{x["body"]}\n\n' for x in d['carousel']))
 for i in [1,2]:
  a=d[f'week{i}']
  review='；'.join(d['workflow']['review'])
  schedule=d['workflow']['schedule']
  text=f"""# 拾序咖啡 · Week {i:02} 工作包

{banner}未执行真实定时任务。

## 本周主题

{a['theme']}

## 输入更新

{a['update']}

## 选题依据

{a['why']}

## 小红书全文

{a['xhs']}

## 产品邮件全文

{a['email']}

## 人工交接

{a['handoff']}

## Review Checklist

{review}

## Scheduled Task 模板（未启用）

{schedule}
"""
  (out/f'shixu-week-{i:02}.md').write_text(text)
 (out/'shixu-brand-guide.md').write_text('''# 拾序咖啡 · Mini Brand System

'''+banner+'''## 定位

给忙碌早晨的一杯顺口咖啡。居家奶咖用 House Blend，工位挂耳用 Daily Filter。

## 产品资料

- House Blend：200g，咖啡豆，可可、榛果、焦糖风味，课程设计价格 A$22。
- Daily Filter：10 包，每包 10g，独立挂耳，课程设计价格 A$18。
- 以上价格与课程学费无关。无真实库存、门店、配送或订单。

## Color

- Forest：#243b35，标题、深色主视觉与主按钮。
- Oat：#f2e5d4，包装与温暖背景。
- Terracotta：#a74828，Daily Filter 包装及少量强调。
- Paper：#fffaf5，阅读底色。

## Typography

包装与品牌字标采用克制的 serif 方向，网站使用 DM Sans / 中文系统无衬线字体。标题写日常场景，正文写清规格。保留充分留白，不堆装饰性图标。

## Components

- Primary Button：深色底、白字，只写明确动作，如“找到你的那一杯”。
- Product Card：场景图、产品名、规格、价格、适用场景、查看动作。
- FAQ：可展开，回答规格、器材和原型边界。
- Spacing：8px 基础单位，正文模块间24px以上，重要段落间32px。

## 视觉资产

coffee-editorial-v2.png：居家奶咖与两款产品主视觉。
coffee-office-v2.png：工位挂耳场景。
两图均为 Image Model 生成的品牌概念设计图，不是真实商品摄影。不得把它们作为真实库存、真实客户或真实经营的证明。

## Tone

温暖、简短、具体。用生活场景说话；不编造产地、品牌历史、销量、客户评价或健康功效。
''')
if __name__=='__main__':
 import sys
 render(Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parent/'public')
