# 企业 AI 实战分享 · 2026-10-01 墨尔本

## 目标与依据

用户要求将 Canva 活动主控演示稿转成匠人风格网页 PPT，并提供匠人域名链接，在每个嘉宾页右下角放各自 PPT 链接。本次是已经指定的原稿转换，沿用 10 页内容结构与实际顺序，不另增活动议程。原稿：https://canva.link/5medn4sfe0328rm （design DAHWjbuzdZY，读取于 2026-09-30）。

嘉宾稿：李敏由用户提供的15页PPTX转换为独立网页；其他三位链接尚未提供，资料中也没有。未提供链接的嘉宾仅预留右下角“演讲资料待补充”文字，不能使用猜测链接，也不能把无关课程绑定为其PPT。收到真实链接后更新 src/data/speakers.ts。

## 整体节奏

活动时间 2026-10-01 17:00–20:30（墨尔本），地点 Bupa Ground Floor, 33 Exhibition Street, Melbourne。10页是主持转场与嘉宾入口，演讲内容从入口打开；不编造每位嘉宾的具体讲述时段。

| 阶段 | 页数 | 用途 | 时长 |
|---|---:|---|---|
| 入场与开场 | 1–2 | 活动名称、主办机构 | 按现场进度 |
| 主题分享 | 3–7 | 主题转场与四位嘉宾 | 按现场进度 |
| 互动与结束 | 8–10 | Q&A、原稿活动群二维码、感谢 | 按现场进度 |

## 逐页规格

| 页 | 内容 | 版式和必要信息 |
|---:|---|---|
| 1 | 企业 AI 实战分享 | 暖色网格封面、大标题 marker、AI自动化×Marketing×税务会计×房产金融、日期地点与用户提供的四位嘉宾原图 |
| 2 | 联合主办 Co-hosted by | 官方黑色JR、原ANZ/Bupa logo等比；保留原稿JR机构介绍链接 |
| 3 | 主题分享 | 更正原英文拼字为 Theme Sharing；显示原稿四位嘉宾顺序 |
| 4 | Michael · AI Marketing 自动化运营 | 澳洲 VET 持证培训师；内容生产、线索管理、转化优化；肖像使用用户最新提供的原始照片，右下角PPT入口 |
| 5 | Lightman · 企业如何实现 AI 自动化？ | 匠人学院创始人/CEO；管理协调、业务流程、人机分工；右下角PPT入口 |
| 6 | 李敏 · AI对会计行业的影响 | 资深注册会计师、李敏税务会计事务所创始人、Bupa私人医疗保险公司代表；提升效率、识别风险、专业升级；右下角链接独立15页JR演讲 |
| 7 | Michael Yang · 从AI到金融智能 | 探索未来置业之路；Lending Area Manager, Melbourne CBD；市场洞察、财务评估、规划决策；右下角PPT入口 |
| 8 | Q&A | 大号标题与原稿交流图片 |
| 9 | 后续活动 | Join us for more upcoming events；原稿活动群二维码整图完整保留，不重绘、不过度裁剪 |
| 10 | 感谢参与 | Thank you for joining us；原稿合影等比展示 |

## 视觉与技术

遵守当前 talk-deck skill，参考 ai-engineer-cohort-05-final：1600×900、#fff1e7暖色48px网格、黄色marker下划线、24px主面板、18px卡片、8px标签、2px深色边框、品牌色硬偏移阴影。避免满屏粗框。嘉宾肖像采用用户2026-09-30提供的独立JPG原图，源文件字节保留，不生成或改变人物；Michael Yang的原圆头像通过CSS圆窗去除外围黑边。

从 lessons/_template 拷贝；SlideEngine/ui/CameraBubble/theme/main 五个文件逐字不改。一页一个 src/components/slides/SlideNN.tsx；内容基元可新增。右下角资料链接在画布内，离导航和页码保持安全间距。链接使用 data文件维护。

正式路由： https://jracademy.ai/curriculum/lessons/melbourne-ai-work-system-2026-10-01/

李敏路由： https://jracademy.ai/curriculum/lessons/melbourne-ai-work-system-2026-10-01-li-min/

## 验收

本地build；逐页截图核对原文、嘉宾顺序、字号与溢出；检查1600×900、1440×900及横屏手机。链接点击验证；保留原始二维码完整图。写入lessons.html/CHANGELOG/现有deploy workflow，发布后核验正式HTML/JS/图片/李敏PPT下载，无404。不伪称未提供的嘉宾链接已接入。
