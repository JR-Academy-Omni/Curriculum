# 企业 AI 实战分享 · 2026-10-01 墨尔本

## 目标与依据

用户要求将 Canva 活动主控演示稿转成匠人风格网页 PPT，并提供匠人域名链接，在每个嘉宾页右下角放各自 PPT 链接。本次沿用原稿内容与嘉宾顺序；按用户最新要求，在联合主办后新增匠人介绍、匠人产品与服务、ANZ介绍、Bupa介绍四页，共14页。原稿：https://canva.link/5medn4sfe0328rm （design DAHWjbuzdZY，读取于 2026-09-30）。

嘉宾稿：按用户2026-09-30的明确纠正，李敏仅使用所附15页原始PPTX，文件字节、内容、版式及备注均不改。主控右下角打开原版在线预览；独立匠人网页通过Microsoft PowerPoint嵌入读取公开GitHub仓库中的原始PPTX，无需下载，不再展示重排内容。其他三位链接尚未提供，资料中也没有。未提供链接的嘉宾仅预留右下角“演讲资料待补充”文字，不能使用猜测链接，也不能把无关课程绑定为其PPT。收到真实链接后更新 src/data/speakers.ts。

## 整体节奏

活动时间 2026-10-01 17:00–20:30（墨尔本），地点 Bupa Ground Floor, 33 Exhibition Street, Melbourne。14页是主持转场、机构介绍与嘉宾入口，演讲内容从入口打开；不编造每位嘉宾的具体讲述时段。

| 阶段 | 页数 | 用途 | 时长 |
|---|---:|---|---|
| 入场与开场 | 1–6 | 活动名称、主办机构及产品服务介绍 | 按现场进度 |
| 主题分享 | 7–11 | 主题转场与四位嘉宾 | 按现场进度 |
| 互动与结束 | 12–14 | Q&A、原稿活动群二维码、感谢 | 按现场进度 |

## 逐页规格

| 页 | 内容 | 版式和必要信息 |
|---:|---|---|
| 1 | 企业 AI 实战分享 | 暖色网格封面、大标题 marker、AI自动化×Marketing×税务会计×房产金融、日期地点与用户提供的四位嘉宾原图 |
| 2 | 联合主办 Co-hosted by | 官方黑色JR、原ANZ/Bupa logo等比；保留原稿JR机构介绍链接 |
| 3 | JR Academy 匠人学院 | 用户截图1：左官方黑色logo、右原中英介绍，复用9月稿内容与格式 |
| 4 | 匠人的产品与服务 | 用户截图2：AirBotix、MetaTree AI Lab、求职匠JobPin AI、考证匠CertMaster四卡，原中英文字及原logo |
| 5 | ANZ | 单独一页：左原ANZ logo、右两组官网核验的中英简介，格式与匠人介绍相同 |
| 6 | Bupa | 单独一页：左原Bupa logo、右两组官网核验的中英简介，格式与匠人介绍相同 |
| 7 | 主题分享 | 更正原英文拼字为 Theme Sharing；显示原稿四位嘉宾顺序 |
| 8 | Michael · AI Marketing 自动化运营 | 澳洲 VET 持证培训师；内容生产、线索管理、转化优化；肖像使用用户最新提供的原始照片，右下角PPT入口 |
| 9 | Lightman · 企业如何实现 AI 自动化？ | 匠人学院创始人/CEO；管理协调、业务流程、人机分工；右下角PPT入口 |
| 10 | 李敏 · AI对会计行业的影响 | 资深注册会计师、李敏税务会计事务所创始人、Bupa私人医疗保险公司代表；提升效率、识别风险、专业升级；右下角在线查看用户提供的原版PPTX |
| 11 | Michael Yang · 从AI到金融智能 | 探索未来置业之路；Lending Area Manager, Melbourne CBD；市场洞察、财务评估、规划决策；右下角PPT入口 |
| 12 | Q&A | 大号标题与原稿交流图片 |
| 13 | 后续活动 | Join us for more upcoming events；原稿活动群二维码整图完整保留，不重绘、不过度裁剪 |
| 14 | 感谢参与 | Thank you for joining us；原稿合影等比展示 |

## 视觉与技术

遵守当前 `.claude/skills/talk-deck/SKILL.md`；按用户最新指定，以9月老板稿 `lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/` 第8页 `S24_AICircleIntro.tsx` 为直接视觉范本，复用其 `deck.tsx`：1600×900、#fff1e7暖色48px网格、黄色marker下划线、24px主面板、18px卡片、8px标签、2px深色边框、品牌色硬偏移阴影。避免满屏粗框。嘉宾肖像采用用户2026-09-30提供的独立JPG原图，源文件字节保留，不生成或改变人物；Michael Yang的原圆头像通过CSS圆窗去除外围黑边。

从 lessons/_template 拷贝；SlideEngine/ui/CameraBubble/theme/main 五个文件逐字不改。一页一个 src/components/slides/SlideNN.tsx；内容基元可新增。右下角资料链接放在嘉宾图片面板下方的黄色说明区内，离导航和页码保持安全间距。链接使用 data文件维护。

正式路由： https://jracademy.ai/curriculum/lessons/melbourne-ai-work-system-2026-10-01/

李敏原版在线入口： https://jracademy.ai/curriculum/lessons/melbourne-ai-work-system-2026-10-01-li-min/

## 验收

本地build；逐页截图核对原文、嘉宾顺序、字号与溢出；检查1600×900、1440×900及横屏手机。链接点击验证；保留原始二维码完整图。写入lessons.html/CHANGELOG/现有deploy workflow，发布后核验正式HTML/JS/图片/李敏PPT在线翻页，无404。不伪称未提供的嘉宾链接已接入。

## 2026-09-30 · 用户指定的老板稿视觉

- 参考在线第8页：https://jracademy.ai/curriculum/lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/?page=8 。线上为39页版本。
- skill仍是仓库 `.claude/skills/talk-deck/SKILL.md`，不使用浅层旧 `talk-deck.md` 描述代替实际范本。
- 暖纸 `#fff1e7`、48px网格、网格线 `rgba(16,22,47,.055)`；参考标题58px/marker、正文23px、面板24px圆角/2px深色描边/9px黄色偏移阴影。
- 常规页复用参考DeckFrame，内容左右边距140px；嘉宾页改为左白色信息主面板＋右原始照片面板，下方黄色说明区放原PPT入口。封面参考其大标题与深色重点面板。
- 仅调整本10月1日活动主控10页视觉，使用已核验的原内容、真实照片与二维码。李敏原始PPTX字节及原版下载逻辑保持原样；9月活动文件仅作读取参考，不修改。

## 本轮新增页要求

用户提供两张截图分别对应老板稿 `S04_JRAcademy.tsx` 与 `S36_JRProducts.tsx`。在联合主办后依次插入匠人介绍、产品服务、ANZ、Bupa；机构介绍统一左logo右中英两段。ANZ/Bupa介绍依据官网，仅陈述基础业务范围，不添加规模、排名或未经确认的合作承诺。

## 本轮在线查看要求

所有已提供的嘉宾PPT入口使用在线链接，不触发文件下载。李敏路由改为原始PPTX的PowerPoint在线预览，提供全屏、返回主控第10页与独立窗口入口。原始PPTX字节保持不变，不使用字体缺失的本地PDF转换结果；旧React改版仍不打包。其他三位嘉宾无资料链接时继续显示待补充。

## 嘉宾公司logo补充

按用户新提供图片，第10页李敏、第11页Michael Yang的姓名介绍区右侧分别加入ML Tax Solution与ANZ原logo。logo与完整介绍块并排、间距20px，原始文件字节与长宽比保持不变；李敏原版在线PPT、其他嘉宾资料状态与原有14页顺序保持不变。
