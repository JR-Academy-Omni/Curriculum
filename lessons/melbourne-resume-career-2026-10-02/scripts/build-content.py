"""User-approved copy and JR Register B layouts. Shared by web and editable PPTX."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DARK='#10162f'; MUTED='#5d5956'; YELLOW='#FFDE59'; BLUE='#38B6FF'; RED='#ff5757'; GREEN='#7ED957'
slides=[]
def text(x,y,w,h,value,size=30,weight=400,color=DARK,align='left',line=1.45):
    return dict(type='text',x=x,y=y,w=w,h=h,text=value,fontSize=size,fontWeight=weight,color=color,align=align,lineHeight=line,fontFamily='PingFang SC')
def rect(x,y,w,h,fill='white',radius=24,stroke=DARK,shadow=True):
    return dict(type='rect',x=x,y=y,w=w,h=h,fill=fill,stroke=stroke,strokeWidth=2,borderRadius=radius,shadow=f'8px 8px 0px {YELLOW}' if shadow else None)
def image(x,y,w,h,src):
    return dict(type='image',x=x,y=y,w=w,h=h,src=src,fit='contain')
def marker(x,y,w,h=15):
    return dict(type='rect',x=x,y=y,w=w,h=h,fill=YELLOW,borderRadius=0,role='marker')
def new(slug,title,kicker=''):
    n=len(slides)+1
    s=dict(id=f'S{n:02d}_{slug}',title=title,background='#fff1e7',paper=dict(gridSize=48,gridColor='#ede2d8',gridWidth=1),elements=[],notes='内容依据：用户在本任务提供的活动文案与附件。活动：2026 年 10 月 2 日，墨尔本大学。')
    slides.append(s)
    e=s['elements']
    # Header logos in PPTX; browser hides this one since the original engine adds it.
    e.append(dict(**image(1475,18,103,40,'logos/jr-logo.png'),role='engine-logo'))
    if kicker:
        e.extend([dict(type='rect',x=138,y=124,w=46,h=9,fill=YELLOW,borderRadius=0,role='marker'),text(199,113,1170,36,kicker,19,650,line=1.3)])
    return e
def heading(e,title,w=1100,size=54,y=163):
    e.extend([marker(138,y+size*.99,w),text(138,y,1320,size*1.45,title,size,750,line=1.2)])
def panel(e,x,y,w,h,fill='white'):e.append(rect(x,y,w,h,fill))
def bullet(e,x,y,value,w=1120,size=30,color=YELLOW):
    e.extend([rect(x,y+12,10,10,color,5,None,False),text(x+30,y,w,64,value,size)])
def organizers(e,y=672):
    panel(e,138,y,1324,147)
    e.extend([text(174,y+20,120,26,'主办方',18,650,color=MUTED),image(325,y+27,255,90,'logos/jr-logo.png'),image(807,y+20,100,107,'logos/umba.jpg'),text(935,y+45,480,50,'UoM Blockchain Association',26,650,line=1.2)])

e=new('Cover','【墨尔本】简历 × 职场答疑分享会')
e.extend([rect(138,146,184,50,YELLOW,10,None,False),text(161,153,150,40,'【墨尔本】',28,650,line=1.2)])
e.extend([marker(138,297,810,23),text(138,219,1270,110,'简历 × 职场',86,750,line=1.15),marker(138,407,858,23),text(138,331,1270,110,'答疑分享会',86,750,line=1.15)])
e.extend([text(142,492,1000,50,'2026 年 10 月 2 日',34,550),text(142,552,1000,48,'墨尔本大学',32,500)])
organizers(e)

e=new('JRAcademy','JR Academy 匠人学院','主办方  /  ORGANIZER')
heading(e,'JR Academy 匠人学院',684)
panel(e,138,264,490,517);panel(e,664,264,798,517)
e.extend([image(190,417,386,170,'logos/jr-logo.png'),rect(696,299,124,40,YELLOW,8,DARK,False),text(708,307,104,30,'主办方',16,700,line=1.1),
 text(696,360,730,103,'面向华人学习者与科技从业者的\nIT 与 AI 教育平台。',34,500,line=1.5),
 text(696,472,730,66,'IT and AI education for Chinese-speaking learners and tech\nprofessionals.',23,color=MUTED,line=1.45),
 text(696,579,730,92,'通过课程、项目实践与职业支持，\n帮助学习者提升技能、连接行业。',29,500,line=1.55),
 text(696,686,724,70,'Courses, hands-on projects and career support to build skills\nand industry connections.',22,color=MUTED,line=1.45)])

e=new('Services','匠人的产品与服务','JR ACADEMY  /  PRODUCTS & SERVICES')
heading(e,'匠人的产品与服务',526)
e.append(text(138,238,1325,43,'从个人学习与成长，到企业 AI 落地 · From personal growth to business AI delivery',24,color=MUTED))
products=[
 (138,308,RED,'AirBotix','青少年 AI 创作与编程','AI creation and coding for ages 5–17','孩子主导创作，AI 辅助，教师指导；用故事、游戏、\n网站与代码项目学习。','Children lead, AI assists, teachers guide — learning through\ncreative projects.','logos/airbotix.png'),
 (815,308,BLUE,'MetaTree AI Lab','企业 AI Consulting / FDE','AI consulting and forward-deployed engineering','梳理业务流程，搭建 AI Agent 与定制系统，\n把 AI 接入实际业务。','Workflow discovery, AI agents and custom systems\nintegrated into real operations.','logos/metatree.png'),
 (138,590,GREEN,'求职匠 · JobPin AI','个人 AI 求职顾问','A personal AI career advisor','围绕真实背景与目标岗位，准备简历、差距分析\n和求职材料。','Resume tailoring, gap analysis and application materials\ngrounded in your background.','logos/jobpin.png'),
 (815,590,YELLOW,'考证匠 · CertMaster','AI 考证辅导助手','AI certification study assistant','考题分析、题目收藏与学习记录，\n辅助理解和持续练习。','Question explanations, bookmarks and study tracking\nfor ongoing practice.','logos/certmaster.png')]
for x,y,c,title,sub,en,body,enbody,logo in products:
    panel(e,x,y,647,258)
    e.append(dict(type='rect',x=x+3,y=y+3,w=641,h=6,fill=c,borderRadius=3,role='marker'))
    if (ROOT/'public'/logo).exists() and title!='MetaTree AI Lab':e.append(image(x+25,y+27,66,62,logo));tx=x+114
    else:tx=x+114
    e.extend([text(tx,y+22,500,43,title,30,700,line=1.2),text(tx,y+61,500,35,sub,24,650,line=1.2),text(x+25,y+101,595,28,en,18,color=MUTED,line=1.2),text(x+25,y+137,595,61,body,22,line=1.15),text(x+25,y+198,595,51,enbody,17,color=MUTED,line=1.1)])

e=new('Agenda','今天的活动流程','活动流程  /  TODAY’S PROGRAM')
heading(e,'今天的活动流程',468)
panel(e,138,269,1324,531)
agenda=[('17:00–17:20','签到与自由交流'),('17:20–17:45','嘉宾自我介绍与职业故事'),('17:45–18:05','圆桌讨论'),('18:05–18:45','现场改简历'),('18:45–19:10','观众 Q&A'),('19:10–19:20','总结与自由交流')]
for i,(time,label) in enumerate(agenda):
    y=300+i*78
    e.extend([rect(173,y,258,51,'#fff4ba',10,None,False),text(193,y+7,225,40,time,27,650,line=1.2),text(480,y+3,900,55,label,32,500,line=1.35)])

e=new('Topics','从经历出发，找到下一步准备方向','今天我们会聊什么  /  CONVERSATION')
heading(e,'从经历出发，找到下一步准备方向',1045,51)
panel(e,138,286,1324,506)
for i,t in enumerate(['企业如何看待求职者和简历','不同职业路径中的真实选择','如何把经历写成清楚的个人贡献','如何根据目标岗位修改简历','从校园、转行到真实职场，需要准备什么']):bullet(e,185,321+i*87,t,1190,31)

guests=[
 ('Lightman','Lightman','企业需求与求职准备视角','将从企业需求出发，连接岗位要求与求职准备，\n帮助大家思考：雇主关注哪些能力，哪些经历\n能够证明自己的优势，如何讲清个人贡献，\n以及下一步应该优先补充什么。','lightman.jpg','企业需求  /  求职准备',[('logos/jr-logo.png',245,86)],None),
 ('Ethan','Ethan Wang','墨大学长代表 · AI Engineer','结合从校园走向 AI Engineer 岗位的真实经历，\n分享技术岗位求职、项目准备、面试表达和\n进入职场后的实际体会。','ethan.jpg','技术求职  /  项目与面试',[('logos/wobitech.png',284,50)],None),
 ('Shirley','Shirley Chen','墨大学姐代表 · 跨行业求职与个人品牌视角','拥有德勤、安永墨尔本实习经历，曾接触咨询、\n数字营销、CRM、银行与金融等领域。\n\n墨尔本大学数字营销硕士在读，墨尔本大学\n商学学士，将结合自己的留学、求职与职场经历，\n分享如何积累优势、探索职业方向。','shirley.jpg','职业探索  /  个人品牌',[('logos/deloitte.png',168,60),('logos/ey.png',90,68)],'过往实习经历'),
 ('Giovanni','Giovanni Chen','CoinW 交易所 · 全球战略合作总监','从 Web3 求职与职业发展的角度，分享行业\n所需的核心能力、远程工作机会、求职与\nNetworking 方法，以及如何从传统行业\n破圈进入区块链、Web3 行业。','giovanni.jpg','Web3  /  职业发展',[('logos/coinw.jpg',250,84)],None)]
for slug,name,role,body,photo,tag,logos,label in guests:
    e=new(slug,name,'嘉宾介绍  /  SPEAKER')
    heading(e,name,{'Lightman':282,'Ethan Wang':402,'Shirley Chen':417,'Giovanni Chen':459}[name],58)
    panel(e,138,281,362,506);panel(e,538,281,924,506)
    e.append(image(178,324,282,282,'portraits/'+photo))
    e.extend([text(168,646,302,48,name,29,700,align='center'),text(162,702,314,36,tag,19,550,color=MUTED,align='center')])
    size=28 if slug=='Shirley' else 31
    e.extend([text(580,316,838,75,role,27 if slug=='Shirley' else 30,650,line=1.4),text(580,405,836,269,body,size,line=1.48)])
    if label:e.append(text(580,704,210,30,label,19,550,color=MUTED))
    lx=806 if label else 580
    for logo,w,h in logos:
        if logo=='logos/wobitech.png':e.append(rect(lx-16,678,w+32,82,DARK,14,None,False))
        if (ROOT/'public'/logo).exists():e.append(image(lx,694,w,h,logo));lx+=w+32

e=new('Roundtable','从简历到真实职场','圆桌讨论  /  PANEL DISCUSSION')
heading(e,'从简历到真实职场',563,62,y=196)
panel(e,138,342,1324,353)
e.extend([text(184,389,1228,109,'四位嘉宾将结合自己的经历，围绕求职准备、岗位匹配、\n职业转换和职场成长进行讨论。',34,line=1.6),rect(182,566,1229,75,'#fff4ba',16,None,False),text(215,582,1160,52,'每道问题由四位嘉宾依次回答。',30,650,line=1.4)])

questions=[
 ('Trust','当你第一次看到一份简历，\n什么信息最容易让你产生兴趣和信任？',['招聘者最先关注什么','什么经历能够证明候选人的能力','项目、兼职和社团经历如何体现价值','一份简历中最容易被忽略的问题']),
 ('Transfer','如果一个人的经历和目标岗位并不完全匹配，\n应该如何证明自己具备可迁移的能力？',['如何把过去经历转换成岗位语言','如何展示通用能力和个人贡献','没有本地经验时可以提供哪些证明','跨专业或转行时如何建立可信度']),
 ('Preparation','从校园、传统行业或原有职业方向\n进入一个新领域时，最值得优先准备什么？',['技能和项目准备','简历与个人定位','面试准备','行业理解','Networking','寻找第一份机会的方式']),
 ('Workplace','进入真实职场后回头看，你认为求职者在简历和\n面试之外，最应该提前培养什么能力？',['沟通与团队协作','解决问题和执行能力','商业理解','适应变化的能力','远程工作与跨文化沟通','对行业和岗位的长期理解'])]
for i,(slug,q,points) in enumerate(questions):
    e=new(slug,q.replace('\n',''),f'圆桌问题 {"一二三四"[i]}  /  QUESTION 0{i+1}')
    e.extend([marker(138,223,1260,13),text(138,168,1325,170,q,43 if i in [1,3] else 46,700,line=1.48)])
    panel(e,138,378,1324,390)
    e.append(text(178,406,1100,34,'可以结合以下角度展开',21,550,color=MUTED))
    for j,p in enumerate(points):
        if len(points)==4:x=180;y=464+j*67;w=1170
        else:x=180+(j//3)*645;y=474+(j%3)*83;w=560
        bullet(e,x,y,p,w,28)

e=new('Resume','Resume Hot Seat｜现场简历诊断','LIVE SESSION · 现场改简历')
heading(e,'现场简历诊断',388,62)
e.append(text(138,248,1324,52,'我们将选取大家的真实简历，结合目标岗位 Job Description，进行现场分析和修改。',24,color=MUTED,line=1.4))
panel(e,138,324,598,472)
panel(e,772,324,690,472)
e.extend([rect(171,355,227,42,GREEN,8,DARK,False),text(184,363,202,30,'Resume Hot Seat',19,700,line=1.15),text(171,432,51,40,'01',27,700,color=RED,line=1.2),text(237,423,456,72,'真实简历',44,750,line=1.3),text(237,495,456,47,'+',35,650,line=1.15),text(171,566,51,40,'02',27,700,color=RED,line=1.2),text(237,556,456,72,'目标岗位 JD',44,750,line=1.3),rect(171,681,531,76,YELLOW,14,None,False),text(195,697,477,52,'现场分析和修改',31,700,line=1.2)])
e.append(text(807,356,610,45,'5 个诊断重点',27,700,line=1.25))
points=['求职定位','Summary 表达','经历与岗位匹配','个人贡献','成果和数据表达']
for i,p in enumerate(points):
    y=427+i*64
    e.extend([text(807,y,52,40,str(i+1).zfill(2),25,700,color=RED,line=1.25),text(877,y-3,541,49,p,30,650,line=1.3)])

e=new('QA','把你的具体问题带到现场','观众问答  /  QUESTIONS & ANSWERS')
e.extend([marker(138,400,460,28),text(138,242,1250,205,'Q&A',144,750,line=1.05),text(138,487,1300,92,'把你的具体问题带到现场',54,650,line=1.3)])

e=new('Action','带走一个可以马上开始的行动','总结  /  YOUR NEXT STEP')
heading(e,'带走一个可以马上开始的行动',919,52)
panel(e,138,298,1324,473)
e.append(text(179,333,1190,40,'请思考',25,600,color=MUTED))
for i,p in enumerate(['我最需要修改简历中的哪一部分？','我下一步想申请什么岗位？','我将在 48 小时内完成什么准备？']):
    y=409+i*105
    e.extend([rect(180,y,58,58,[YELLOW,BLUE,GREEN][i],15,None,False),text(191,y+10,44,40,str(i+1).zfill(2),26,700,line=1.2),text(270,y+5,1127,66,p,34,550,line=1.5)])

e=new('Thanks','感谢参加')
e.extend([marker(138,347,500,27),text(138,250,1300,128,'感谢参加',92,750,line=1.15),text(142,437,1260,138,'带上你的简历和问题，\n从求职准备走向真实职场。',42,500,line=1.6)])
organizers(e)

for s in slides:
    s['elements'].append(dict(**text(1350,866,110,24,f'{slides.index(s)+1:02d} / {len(slides):02d}',16,500,color=MUTED,align='right',line=1.2),role='page-number'))
    for el in s['elements']:
        if el['type']=='image' and not (ROOT/'public'/el['src']).exists():
            raise FileNotFoundError(el['src'])
# Match the live 39-page showcase and the talk-deck DeckFrame tokens.
accents=[YELLOW,YELLOW,RED,BLUE,GREEN,RED,BLUE,GREEN,RED,GREEN,RED,BLUE,GREEN,YELLOW,GREEN,BLUE,YELLOW,YELLOW]
for i,slide in enumerate(slides):
    slide['paper']['gridColor']='#F2E5DC'
    for el in slide['elements']:
        if el['type']=='text':
            el['fontFamily']='Noto Sans SC'
            if el.get('color')==DARK:el['color']='#000000'
            if el.get('fontSize',0)>=40:el['fontWeight']=900
            if el['x']==199 and el['y']==113:
                el.update(fontFamily='Menlo',fontSize=17,fontWeight=700,letterSpacing=1.8)
        if el['type']=='rect':
            if el.get('shadow'):el['shadow']=f'9px 9px 0px {YELLOW}'
            if el.get('role')=='marker':el['borderRadius']=3
            if el['x']==138 and el['y']==124 and el['w']==46:el['fill']=accents[i]
    slide['elements'].insert(0,dict(**image(0,0,1600,900,'register-b-decor.svg'),role='background-decoration'))
    if slide['id']=='S07_Ethan':slide['notes']+=' Ethan 的公司 Wobitech 由用户明确确认；官方 Logo 来源见 research/assets.md。'
data=dict(title='【墨尔本】简历 × 职场答疑分享会',date='2026-10-02',width=1600,height=900,slides=slides)
(ROOT/'src/data/deck.json').write_text(json.dumps(data,ensure_ascii=False,indent=2))
imports=[]; names=[]
for s in slides:
    name=s['id'];imports.append(f"import {name} from './components/slides/{name}';");names.append(name)
    (ROOT/f'src/components/slides/{name}.tsx').write_text(f"import DeckSlide from '../DeckSlide';\nexport default function {name}() {{ return <DeckSlide id=\"{name}\" />; }}\n")
app="import SlideEngine from './components/SlideEngine';\nimport DeckSlide from './components/DeckSlide';\nimport data from './data/deck.json';\n"+'\n'.join(imports)+'''
export default function App() {
 const print = new URLSearchParams(location.search).has('print');
 if(print) return <div className="print-deck">{data.slides.map(s=><div key={s.id} className="print-slide"><DeckSlide id={s.id}/></div>)}</div>;
 return <SlideEngine>'''+''.join('<'+x+' />' for x in names)+'''</SlideEngine>;
}
'''
(ROOT/'src/App.tsx').write_text(app)
print(f'Created {len(slides)} slides')
