# 企业 AI 实战分享 · 2026-10-01 墨尔本

## 目标与依据

用户要求将 Canva 活动主控演示稿转成匠人风格网页 PPT，部署到匠人域名，并在嘉宾页右下角放演讲资料链接。原稿：https://canva.link/5medn4sfe0328rm （design DAHWjbuzdZY，读取于2026-09-30）。

本轮明确修订：删除原14页版本的第13页“后续活动，我们群里见”；把用户指定9月参考稿的实际第7–17页，按原顺序插到第3页“JR Academy 匠人学院”后面；把参考稿实际第24页放到最后。按浏览器页码和App数组对应，不能把源文件的Sxx编号当页码。参考：https://jracademy.ai/curriculum/lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/?page=24 。修订后共25页。

嘉宾出场顺序保留Michael → Lightman → 李敏 → Michael Yang。李敏仅使用用户提供的15页原始PPTX，文件字节、内容、版式及备注均不改；主控按钮使用用户指定文字“查看分享ppt”，打开原版在线预览。其他三位链接尚未提供，保持“演讲资料待补充”。李敏和Michael Yang介绍旁保留用户提供的ML Tax Solution与ANZ原logo。

## 整体节奏

活动时间2026-10-01 17:00–20:30（墨尔本），地点Bupa Ground Floor, 33 Exhibition Street, Melbourne。新增参考页按用户要求原样搬入，现场分享页保持原稿信息；不补造讲者具体讲述时段。

| 阶段 | 页数 | 用途 | 时长 |
|---|---:|---|---|
| 开场与匠人介绍 | 1–3 | 活动名称、联合主办、匠人学院 | 按现场进度 |
| MetaTree与AI圈 | 4–14 | 参考稿第7–17页，原序复制 | 按现场进度 |
| 产品与机构介绍 | 15–17 | 原产品服务、ANZ、Bupa | 按现场进度 |
| 主题分享 | 18–22 | 主题转场与四位嘉宾 | 按现场进度 |
| 互动与结束 | 23–25 | Q&A、感谢、参考稿第24页社群入口 | 按现场进度 |

## 逐页规格

| 新页码 | 内容 | 来源或要求 |
|---:|---|---|
| 1 | 企业 AI 实战分享 | 原第1页，日期、地点与用户四张嘉宾原照片 |
| 2 | 联合主办 | 原第2页，JR / ANZ / Bupa官方或用户原logo |
| 3 | JR Academy 匠人学院 | 原第3页，左logo右中英文介绍 |
| 4 | 让 AI 进入真实业务流程 | 参考第7页，S37_MetaTree |
| 5 | 把项目带出来，把连接带回去 | 参考第8页，S24_AICircleIntro |
| 6 | 八座城市，同一份对 AI 的好奇 | 参考第9页，S25_AICircleCities |
| 7 | 悉尼 AI圈 | 参考第10页，S26_AICircleSydney |
| 8 | 墨尔本 AI圈 | 参考第11页，S27_AICircleMelbourne |
| 9 | 布里斯班 AI圈 | 参考第12页，S28_AICircleBrisbane |
| 10 | 珀斯 AI圈 | 参考第13页，S29_AICirclePerth |
| 11 | 阿德莱德 AI圈 | 参考第14页，S30_AICircleAdelaide |
| 12 | 新加坡 AI圈 | 参考第15页，S31_AICircleSingapore |
| 13 | 吉隆坡 AI圈 | 参考第16页，S32_AICircleKualaLumpur |
| 14 | 成都 AI圈 | 参考第17页，S33_AICircleChengdu |
| 15 | 匠人的产品与服务 | 原第4页，四项产品服务及原logo |
| 16 | ANZ | 原第5页，左logo右官网核验的中英简介 |
| 17 | Bupa | 原第6页，左logo右官网核验的中英简介 |
| 18 | 主题分享 | 原第7页，四位嘉宾顺序 |
| 19 | Michael · AI Marketing 自动化运营 | 原第8页，真实照片与原信息 |
| 20 | Lightman · 企业如何实现 AI 自动化？ | 原第9页，真实照片与原信息 |
| 21 | 李敏 · AI 对会计行业的影响 | 原第10页，ML Tax Solution logo、原版在线PPT入口 |
| 22 | Michael Yang · 从 AI 到金融智能 | 原第11页，ANZ logo、真实照片与原信息 |
| 23 | Q&A | 原第12页 |
| 24 | 感谢参与 | 原第14页 |
| 25 | 扫码加入澳洲 AI圈 | 参考第24页，S20_Join，完整原图与原文 |

原第13页不再出现在放映序列中。原活动群图片保留为来源档案，不作为新尾页的二维码。新尾页使用参考稿自己的ai-circle-qr.jpg，完整等比显示。

## 视觉与技术

2026-09-30肖像修订：用户要求Michael Yang与其他嘉宾一样使用矩形照片。封面第1页与嘉宾第22页统一18px圆角矩形外框，移除圆形遮罩；通过CSS等比取景避开原图自带的外围黑边，保留用户原JPG文件。

使用仓库完整 `.claude/skills/talk-deck/SKILL.md`，保持用户指定老板9月稿的JR Register B视觉：1600×900、#fff1e7暖色48px网格、黄色marker、24px圆角主面板、品牌色偏移阴影。当前deck.tsx与参考稿逐字一致，复制页面保留原文字、版式和图片。

参考内容仅复制到10月1日活动目录，9月版本不修改。每页一个组件，城市页共用原AICircleCitySlide。图片使用本活动自己的public路径，assetPath适配生产base；不跨活动读取资源，也不改变五个锁定运行时文件。

李敏独立原版在线页的“返回活动”更新到新第21页。演讲原PPTX保持原始SHA-256 `7440ac6c58ae6657f835c108edccc175c8f120587f12db60cd4cbbcacbbf6ebc`。

正式路由：https://jracademy.ai/curriculum/lessons/melbourne-ai-work-system-2026-10-01/

## 验收

- 实际核对参考稿第7–17页及第24页，记录源页码、组件、图片与最终页码。
- 两个项目构建通过；主控25页顺序正确，旧第13页已移除，尾页仅有指定参考二维码。
- 桌面逐页检查新增页及相邻转场；横屏手机检查城市总览、详情、嘉宾与尾页。无坏图、文字遮挡、面板或导航重叠。
- 李敏原版在线入口仍指向原路由，按钮文字“查看分享ppt”，返回链接更新到21；原PPTX不变。
- 更新目录及说明，部署后核验正式页序和图片；不伪称其他嘉宾链接已接入。
