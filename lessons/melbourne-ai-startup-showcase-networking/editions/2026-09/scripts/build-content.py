from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'src/data'
OUT.mkdir(parents=True, exist_ok=True)
DARK='#10162f'; WARM='#fff1e7'; RED='#ff5757'; YELLOW='#FFDE59'; WHITE='#ffffff'; BLACK='#000000'
slides=[]

def text(x,y,w,h,txt,size=34,color=DARK,bold=False,**kw):
    return dict(type='text',x=x,y=y,w=w,h=h,text=txt,fontSize=size,color=color,fontFamily='PingFang SC',fontWeight=700 if bold else 400,lineHeight=1.35,**kw)
def rect(x,y,w,h,fill,stroke=None,shadow=None):
    return dict(type='rect',x=x,y=y,w=w,h=h,fill=fill,**({'stroke':stroke,'strokeWidth':3} if stroke else {}),**({'shadow':shadow} if shadow else {}))
def image(x,y,w,h,src):return dict(type='image',x=x,y=y,w=w,h=h,src=src,fit='contain')
def slide(id,title,bg=WARM,notes=''):
    s=dict(id=id,title=title,background=bg,notes=notes,elements=[]);slides.append(s);return s['elements']
def heading(e,title,kicker='',dark=False,size=64):
    c=WHITE if dark else DARK
    if kicker:e.append(text(120,82,1300,38,kicker,24,RED,True))
    e.append(text(120,146,1360,122,title,size,c,True))
def footer(e,label='2026.09.30   墨尔本 AI 创业项目展示交流',dark=False):
    e.append(text(120,816,1290,36,label,22,'#bfc2d0' if dark else '#68666a'))

e=slide('S01_Cover','9月场｜墨尔本 AI 创业项目展示交流',DARK,'活动事实与七个项目介绍均来自用户 2026-09-30 提供的资料。')
e += [rect(120,82,280,98,WHITE),image(139,100,242,62,'jr-logo.png'),text(1070,100,410,52,'2026 年 9 月场',32,YELLOW,True),text(120,240,1360,124,'墨尔本 AI 创业项目',96,WHITE,True),text(120,368,1120,124,'展示交流',100,YELLOW,True),text(125,536,1350,62,'AI Startup Showcase & Networking',43,WHITE),text(125,635,1340,58,'9 月 30 日 · 星期三    5:30 PM–8:30 PM',36,WHITE),text(125,716,1340,45,'匠人学院 × ANNG × 中关村科技企业家协会 × 新金山俱乐部 × KSUG',27,WHITE),text(125,786,1300,40,'ANNG Gallery    /    场地支持 CloudTech Group',26,'#bfc2d0')]

e=slide('S02_Tonight','今晚，一起看看真实产品');heading(e,'今晚，一起看看真实产品','WELCOME')
e += [text(120,326,230,246,'7',186,RED,True),text(376,351,1020,86,'个 AI 创业项目现场展示',54,DARK,True),text(378,468,1060,94,'产品 Demo、创业经历、现场问答与观众反馈',32),text(120,626,1360,116,'认识创业者、开发者和行业伙伴，探索合作与顾问支持。\n即使没有创业项目，也欢迎一起交流。',34)]
footer(e)

e=slide('S03_Agenda','今晚的流程');heading(e,'今晚的流程','5:30 PM–8:30 PM')
agenda=[('5:30–6:00 PM','签到、餐食与自由交流'),('6:00–6:10 PM','开场及活动介绍'),('6:10–7:55 PM','7 个项目展示、Demo 与问答'),('7:55–8:10 PM','开放讨论及现场反馈'),('8:10–8:30 PM','自由交流与行业连接')]
for i,(time,body) in enumerate(agenda):
    y=300+i*84;e += [text(120,y,355,60,time,33,RED,True),text(510,y,980,60,body,36,DARK,True)]

partners=[
('S04_JRAcademy','JR Academy 匠人学院','jr-logo.png','面向华人学习者与科技从业者的\nIT 与 AI 教育平台。','通过课程、项目实践与职业支持，\n帮助学习者提升技能、连接行业。','https://jiangren.com.au/about'),
('S05_ANNG','ANNG Gallery','anng-logo.png','位于 South Melbourne 的\n艺术与科技交流空间。','结合数字、互动与传统艺术，\n为展览、分享与社区活动创造相遇的场所。','https://www.anng.gallery/'),
('S06_ZPark','中关村科技企业家协会','zpark-logo.jpg','服务科技企业与创业者的行业协会。','围绕科技成果转化、创业辅导与资源对接，\n促进企业交流与创新合作。','https://www.chitec.cn/article/93/1a/a93e323543ec6d25d66b5d0dd170931a.html'),
]
def partner(id,title,logo,p1,p2,source,role='联合发起 / 合作伙伴'):
    e=slide(id,title,notes='机构介绍来源：'+source+'\n本次角色来自用户活动资料。Logo 使用用户提供的原始文件。')
    heading(e,title,role,size=60)
    e += [rect(120,305,510,360,WHITE,BLACK,'6px 6px 0px #000'),image(146,346,458,280,logo),text(700,331,770,154,p1,36,DARK,True),text(700,517,775,170,p2,32)]
    footer(e)
for p in partners:partner(*p)

e=slide('S07_NewGold','新金山俱乐部',notes='介绍来源：https://newgoldmountain.io/ 。加入入口：https://newgoldmountain.io/join 。官网介绍其为澳洲创投圈华人社群，开展创始人沙龙、投融资对接、创业营和中澳连接。沙龙为邀请制，可通过加入页提交申请。')
heading(e,'新金山俱乐部','联合发起 / 合作伙伴')
e += [image(120,292,760,198,'newgold-logo.jpg'),text(120,538,760,150,'连接澳洲创投圈的华人创始人、\n投资人与创业从业者。',34,DARK,True),text(120,688,760,100,'通过创始人沙龙、资源对接与创业营，\n促进本地交流与中澳连接。',30),rect(1025,278,386,386,WHITE,BLACK,'6px 6px 0px #000'),image(1043,296,350,350,'newgold-qr.png'),text(960,689,520,50,'扫码申请加入新金山',30,DARK,True,align='center'),text(912,755,590,42,'https://newgoldmountain.io/join',27,RED,False,align='center',url='https://newgoldmountain.io/join')]

partner('S08_KSUG','KSUG.AI','ksug-logo.webp','聚焦 Kubernetes、云原生与 AI\n的技术社区。','通过线上与线下活动，连接开发者、\n工程师和技术爱好者，分享实践经验。','https://www.linkedin.com/company/ksug')

e=slide('S09_CloudTech','CloudTech Group',DARK,'来源：https://www.cloudtechgroup.com.au/ 及 https://au.linkedin.com/company/cloudtech-group 。本次场地支持身份来自用户资料。')
heading(e,'CloudTech Group','场地支持',True,78)
e += [text(120,332,1320,122,'位于墨尔本，关注区块链与数字金融技术\n的企业集团。',43,WHITE,True),text(120,524,1300,123,'通过 Innovation Hub 支持创新与社区交流，\n为本次活动提供场地支持。',36,WHITE),rect(120,712,1340,3,RED),text(120,749,1300,44,'感谢 CloudTech Group 对本次活动的支持',32,YELLOW,True)]

e=slide('S10_Order','项目分享顺序',DARK,'严格采用用户指定的最新顺序。旧版 PROJECTS.md 中项目数量与排序不再适用。')
heading(e,'项目分享顺序','7 PROJECTS',True)
order=['Furday','Deerbit AI','AirBotix','Olav OS','Vela','留小伴','Ponyknows']
for i,name in enumerate(order):
    col=0 if i<4 else 1;row=i if i<4 else i-4;x=120 if col==0 else 850;y=301+row*105
    e += [text(x,y,94,73,f'{i+1:02}',46,RED,True),text(x+120,y,560,73,name,48,WHITE,True)]
footer(e,'每个项目约 15 分钟',True)

projects=[
dict(id='S11_Furday',name='Furday',tagline='宠物健康与生活记录 App',desc='为多宠物家庭整合健康管理、日常记录\n与成长回忆。通过打卡获得成就与贴纸，\n再制作可导出的宠物电子手帐。',features='宠物档案、体重与健康日历、疫苗 / 体检 / 驱虫提醒\n日记相册、每日打卡、成就系统、电子手帐',audience='多宠物家庭',logo='furday-logo.png'),
dict(id='S12_Deerbit',name='Deerbit AI',tagline='非托管 AI 交易工具',desc='用自然语言表达交易想法，由 AI 协助\n研究、生成策略、回测和模拟交易。\n用户确认后，再执行并持续监控。',features='AI 交易助手、市场研究、策略生成、历史回测\n模拟交易、多平台连接、止盈止损与风险监控',audience='资金保留在用户自己的\n交易所、钱包或券商账户',logo='deerbit-logo.png'),
dict(id='S13_AirBotix',name='AirBotix',tagline='青少年 AI 编程教育平台',desc='面向 5–17 岁青少年，用适龄工具创作\n故事、游戏、动画、网站与代码项目。\n孩子主导创作，AI 辅助，教师指导。',features='Story Blocks、Creative Code Studio、Kids OpenCode\n每周小班课、Holiday Camps、一对一辅导、学校合作',audience='5–17 岁青少年\n家庭与学校',logo='airbotix-logo.png'),
dict(id='S14_Olav',name='Olav OS',tagline='企业级 AI Agent 操作系统',desc='服务流程复杂、单据密集的专业企业。\n事件溯源记录操作，状态机管理权限，\n业务规则与人工审批决定流程能否推进。',features='企业级 AI Agent、自动化业务流程、状态机\n人工审批、合规审计、行业适配器',audience='移民留学、法律、财税审计\n猎头招聘等专业服务',logo='olav-os-logo.svg',note=''),
dict(id='S15_Vela',name='Vela',tagline='“过程透明”的 AI 占星解读产品',desc='面向海外华人，提供免费排盘与付费\n专业解读报告。展示选盘、交叉验证\n及分析依据，让用户看见解读过程。',features='免费 AI 排盘、专业解读报告、透明分析过程\n持续积累的用户档案、个性化解读',audience='面向海外华人的\n消费端 AI 产品',logo='vela-logo.png',note=''),
dict(id='S16_LiuXiaoBan',name='留小伴',tagline='留学生 AI 陪伴与生活社交应用',desc='围绕初到异国的孤独感、社交与生活需求，\n提供有个性、会主动互动的 AI 小伴。\n结合真实社交，帮助留学生找到同伴。',features='个性化 AI 小伴、主动互动与关系养成\n班级、广场、漂流瓶、留学生生活服务',audience='全球留学生',logo='liuxiaoban-logo.png'),
dict(id='S17_Ponyknows',name='Ponyknows',tagline='AI 多智能体精准教学平台',desc='连接教学助手、辅学系统与纸笔交互。\n借助智慧打印终端与智慧笔，协同课堂、\n练习与反馈，探索更完整的教学闭环。',features='AI 多智能体教学协同、教学助手、辅学系统\n智慧打印终端、智慧笔、精准教学闭环',audience='教师与学习者\n真实课堂与纸笔练习',logo='ponyknows-logo.png')
]
for i,p in enumerate(projects):
    e=slide(p['id'],p['name'],notes='项目介绍来自用户提供的原文，展示顺序由用户明确指定。'+p.get('note',''))
    e += [text(120,80,1290,46,f'项目 {i+1:02} / 07',26,RED,True),text(120,148,1350,140,p['name'],96,DARK,True),text(120,299,1350,70,p['tagline'],42,DARK,True),text(120,415,916,186,p['desc'],33),text(120,638,900,42,'核心产品',25,RED,True),text(120,690,930,109,p['features'],27)]
    if p['logo'] in ['liuxiaoban-logo.png','ponyknows-logo.png']:
        e += [rect(1105,392,365,255,WHITE,BLACK,'6px 6px 0px #000'),image(1125,407,325,225,p['logo'])]
        slides[-1]['notes'] += ' Logo：本轮用户提供的原始PNG，保持比例与颜色。'
    elif p['logo']:
        e += [rect(1110,409,350,205,WHITE,BLACK,'6px 6px 0px #000'),image(1135,433,300,157,p['logo'])]
    else:e += [text(1130,390,330,218,f'{i+1:02}',158,RED,True)]
    e += [text(1080,655,415,115,p['audience'],27,DARK,True,align='center')]
    label=p.get('note','产品展示、Demo 与互动问答')
    if label:footer(e,label)

e=slide('S18_Discussion','开放讨论与现场反馈',DARK)
e += [text(120,372,1360,150,'开放讨论与现场反馈',100,WHITE,True,align='center')]

e=slide('S19_AICircle','关于 AI圈',notes='AI圈定位依据本仓库 jr-academy-memory/events/ai-circle-offline.md。照片来源：marketing-campaign/events/ai-networking-monthly/assets/sponsorship/photos/melbourne-ai-circle-community-01.webp。')
heading(e,'关于 AI圈','JR ACADEMY COMMUNITY')
e += [text(120,311,730,185,'匠人学院持续开展的\nAI 社区交流系列',52,DARK,True),text(120,504,748,170,'连接 AI 学习者、从业者、创业者\n与企业伙伴，在分享和交流中\n交换经验、发现合作机会。',34),text(120,715,760,63,'项目 Demo   /   主题分享   /   线下交流',29,RED,True),rect(943,307,526,398,WHITE,BLACK,'6px 6px 0px #000'),image(958,322,496,368,'community.webp')]
footer(e,'无论你正在学习、开发产品，还是寻找合作，都欢迎加入')

e=slide('S20_Join','扫码加入澳洲 AI圈',DARK,'二维码为用户提供的微信原始图片，未重绘、未替换群链接。图片注明 10 月 7 日前有效；微信实际可加入状态需微信客户端确认。')
e += [text(120,128,805,94,'今晚见面，之后常联系',60,WHITE,True),text(120,294,815,130,'扫码加入\n澳洲 AI圈',76,YELLOW,True),text(120,530,810,120,'墨尔本 2 群\n继续聊产品、分享经验、认识同行',34,WHITE),text(120,721,800,72,'感谢各位嘉宾、伙伴与到场朋友',32,WHITE,True),image(1010,73,475,702,'ai-circle-qr.jpg'),text(1020,787,450,39,'微信扫码加入社群',26,YELLOW,True,align='center')]

for model in slides:
    for el in model['elements']:
        if el['type']=='text':
            if el['fontSize']>=60:el['lineHeight']=1.2
            el['h']=max(el['h'],el['fontSize']*el['lineHeight']*len(el['text'].split('\n'))+5)

(OUT/'deck.json').write_text(json.dumps(dict(title='9月场｜墨尔本 AI 创业项目展示交流',slides=slides),ensure_ascii=False,indent=2))
for s in slides:
    (ROOT/'src/components/slides'/f'{s["id"]}.tsx').write_text(f"import DeckSlide from '../DeckSlide';\nexport default function {s['id']}() {{ return <DeckSlide id=\"{s['id']}\" />; }}\n")
for stale in ['S02_Example.tsx']:
    p=ROOT/'src/components/slides'/stale
    if p.exists():p.unlink()
imports='\n'.join(f"import {s['id']} from './components/slides/{s['id']}';" for s in slides)
children='\n'.join('      <'+s['id']+' />' for s in slides)
(ROOT/'src/App.tsx').write_text('import DeckSlide from \'./components/DeckSlide\';\nimport data from \'./data/deck.json\';\nimport SlideEngine from \'./components/SlideEngine\';\nimport S01_Cover from \'./components/slides/S01_Cover\';\nimport S02_Tonight from \'./components/slides/S02_Tonight\';\nimport S03_Agenda from \'./components/slides/S03_Agenda\';\nimport S04_JRAcademy from \'./components/slides/S04_JRAcademy\';\nimport S05_ANNG from \'./components/slides/S05_ANNG\';\nimport S06_ZPark from \'./components/slides/S06_ZPark\';\nimport S07_NewGold from \'./components/slides/S07_NewGold\';\nimport S08_KSUG from \'./components/slides/S08_KSUG\';\nimport S09_CloudTech from \'./components/slides/S09_CloudTech\';\nimport S10_Order from \'./components/slides/S10_Order\';\nimport S11_Furday from \'./components/slides/S11_Furday\';\nimport S12_Deerbit from \'./components/slides/S12_Deerbit\';\nimport S13_AirBotix from \'./components/slides/S13_AirBotix\';\nimport S14_Olav from \'./components/slides/S14_Olav\';\nimport S15_Vela from \'./components/slides/S15_Vela\';\nimport S16_LiuXiaoBan from \'./components/slides/S16_LiuXiaoBan\';\nimport S17_Ponyknows from \'./components/slides/S17_Ponyknows\';\nimport S18_Discussion from \'./components/slides/S18_Discussion\';\nimport S19_AICircle from \'./components/slides/S19_AICircle\';\nimport S20_Join from \'./components/slides/S20_Join\';\nexport default function App(){\nif(new URLSearchParams(location.search).has(\'print\')) return <><style>{`html,body{overflow:visible!important;background:white} @page{size:1600px 900px;margin:0} .print-slide{width:1600px;height:900px;break-after:page;page-break-after:always;} .print-slide:last-child{break-after:auto} *{-webkit-print-color-adjust:exact;print-color-adjust:exact;}`}</style>{data.slides.map(s=><section className="print-slide" key={s.id}><DeckSlide id={s.id}/></section>)}</>;\nreturn <SlideEngine>\n      <S01_Cover />\n      <S02_Tonight />\n      <S03_Agenda />\n      <S04_JRAcademy />\n      <S05_ANNG />\n      <S06_ZPark />\n      <S07_NewGold />\n      <S08_KSUG />\n      <S09_CloudTech />\n      <S10_Order />\n      <S11_Furday />\n      <S12_Deerbit />\n      <S13_AirBotix />\n      <S14_Olav />\n      <S15_Vela />\n      <S16_LiuXiaoBan />\n      <S17_Ponyknows />\n      <S18_Discussion />\n      <S19_AICircle />\n      <S20_Join />\n</SlideEngine>; }\n')
print(f'Created {len(slides)} slides')

# Preserve the user-requested closing promotions on subsequent rebuilds.
from runpy import run_path
run_path(str(ROOT / 'scripts/append-promotions.py'), run_name='__main__')
