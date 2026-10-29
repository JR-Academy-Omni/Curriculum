# W2 68页线上发布验收 · 2026-10-11

状态：Production public verified。沿用原线上地址，历史47页记录保留。

- 发布源提交 `c390f9e716fd39524ad472678bdcec3d993876a1`；[Deploy Curriculum to Server 38126090365](https://github.com/JR-Academy-Omni/Curriculum/actions/runs/38126090365) 成功。
- 从线上Lesson目录的W2卡片进入课件，封面实读01/68、最后页68/68；新增来源页P05/06/21/26/27/42和总图P07实读，来源、日期与改编边界可见。
- 412个发布文件逐一HTTP读回并与同一提交的本地生产构建做SHA-256比对，全部一致；包含JS、字体、官方Logo、图片、HANDOUT与WORKSHEET。
- 线上Skill第三层互动正常；CareKind空记录校验、未保存禁止送审、模拟保存、Review只读及护理人员不能确认、切换复核人员后Confirmed均通过；浏览器error日志为空。
- 线上重点页桌面截图与CareKind桌面/390×844截图已检查。手机课件仍是16:9等比画布；不将其称为真实移动App验收。
- 内部证据：`curriculum/out/qa/w2-deployed-2026-10-11/asset-readback.json`、`pages.json`、`interactions.json`、截图。
- 发布对象是网页课件及课堂合成演示；没有真实API、持久化审计、模型调用、员工消息或实跑Agent Team/Skill。

---

# W2公开资源68页本地验收 · 2026-10-11

状态：Local verified / 未部署、未push；本记录随本地代码提交。本轮在此前62页上新增6页，保留UI/Design System、CareKind模拟及课堂时长。

- 最终TypeScript/Vite build通过；目录检查通过；本课legacy运行时manifest保持不变。
- 新增6页、X06来源补强页、更新目录页，共8页 × 1600×900 / 1280×720 / 390×844 = 24项检查通过：文字画布边界、来源脚注重叠、缺图、真实总页数68。Skills目录页初查来源脚注重叠，调整间距后24项重跑通过。
- 7张公开来源页的桌面截图逐页目视；包含数据分组而非捏造结果柱图、委派回路、任务交付步骤、分层加载与目录案例。新图全部React可编辑图层，未复制来源图片/Logo。
- 17项互动/回归检查通过：四模式、三层加载、五步交付、Space/Enter切换不翻页、原CareKind保存/送审/确认、68页导航与刷新。浏览器error日志为空。
- 来源链接、发布/核查日期、原文事实与JR教学改编范围在页内可见；正式期刊版791人不混用旧工作论文776人。
- 可复制HANDOUT、讲师RUNSHEET、README、最终SOURCE_MAP/source-map和目录更新至68页。旧62页全面验收见下面的历史记录，本轮对未修改页面没有重复全量扫描。

证据：`curriculum/out/qa/w2-public-sources-2026-10-11/layout.json`、`interactions.json`、三尺寸新增页截图、`github-review.jpg`、`skill-resources.jpg`。

本地互动属于概念和合成案例；未执行Copilot/Agent Team或安装运行Skill，没有外部派工、Issue/PR创建、模型API或部署操作。

---

# W2混合协作62页本地验收 · 2026-10-11

状态：Local verified / 未部署；本次没有commit或push。历史线上47页保留，不用其验收代表本次版本。

- `bun run build`：TypeScript与Vite通过；bundle约517KB，有Vite体积提示，不影响构建成功。
- `python3 scripts/check-talk-decks.py --slug ai-engineer-cohort-07-practice-w2`：通过；登记字段、模板manifest及本课legacy运行时manifest均核对。
- CUA浏览器逐页：62页 × 1600×900 / 1280×720 / 390×844 = 186项检查，无文字超出画布、叶节点hidden裁切或缺图；没有浏览器error日志。入场动画完成后复查并保存全部62页桌面截图；手机保存关键页。旧P57图片另等图片动画完成再三尺寸复查。
- 全62页桌面contact sheet已目视查看；P05总图、P32演示和P34交接重点查看。PPT手机为等比画布，演示额外提供450px窄布局样例，不称为真实移动App验收。
- 35项交互检查通过：空校验、输入空格不翻页、未保存禁止送审、提交中防重、保存仍Draft、送审只读、角色限制、退回、确认、audit记录、窄布局、失败保留内容、升级/负责人恢复、重试、真实Tab焦点和Enter保存、对象/任务导航、交接三步、组件加载/错误、前后翻页与page刷新保留。
- 官方logo与 `jr-academy-brand/assets/logo/logo-zh-full.svg` 字节一致；五个legacy运行时及deck组合文件manifest未改变。
- 字体从本地npm内容层导入，移除远程Google Fonts链接；字体许可随public/licenses保存。未额外调用任何模型/TTS/图像provider。
- WORKSHEET与public副本字节一致；HANDOUT可复制Brief、Skill模板与交接步骤；source-map最终页序为62项。

证据：`curriculum/out/qa/w2-2026-10-11/layout.json`、`interactions.json`、`1600-page-01..62.jpg`、`390-page-*.jpg`、`demo-confirmed-narrow.jpg`、contact sheets。

边界：可操作CareKind为合成候选教学UI，纯前端内存状态，刷新清空；没有真实API、服务端权限、持久化audit、Voice AI、员工消息发送或安装/实跑Skill的验收。学生真实项目和课堂协作成果仍由实际Lab产生。

---

# W2 47页完整迁移验收 · 2026-10-04

本次47页重组：完整迁入原W1整组18页，在最终顺序P28–P45；P46 Review、P47交付。当前本地验证完成；本次上线状态见后续发布验收记录，不从线上历史版推断。

- TypeScript + Vite build通过；17个内容源文件与W1字节一致，章节页只改为W2进阶练习。Lab helper和product-validation-path.png完整复制，五个runtime与_template一致。
- 新迁入18页 × 1600×900、1280×720、390×844，共54次检查：文字画布边界、内部裁切、图片、JS与HTTP均无异常。检查后仅重排顺序到Review前，结果按组件身份映射至最终页码；没有内容改动。
- 全18页桌面contact sheet已目视检查：Skills/渐进披露/Lab与产品验证图解完整，没有缺图。
- 最终P28章节、P46 Review、P47交付实际浏览通过；47/47页码、ArrowLeft返回46、刷新保留page=46通过。
- 原29页三视口与互动验收是前一阶段证据，保留在下方；本次没有重复扫描全部47页。
- 证据：/tmp/ai-engineer-w2-advanced-migration/final-component-mapped-result.json、final-nav.json、final-28/46/47.png；迁移前逐页截图与原result.json同目录。contact sheet：/tmp/w2-advanced-contact-1.png、/tmp/w2-advanced-contact-2.png。

# W2 29 页迁移验收 · 2026-10-04

本次修订：W1 原 P26–P33 完整迁入 W2 P04–P11，共29页，本地验证通过；本次修订尚未提交、推送或部署。

- TypeScript + Vite build通过；八页源文件与W1逐字一致，五个runtime与_template逐字一致。
- 全29页 × 1600×900、1280×720、390×844，共87次检查：文字画布边界、内部裁切、图片、JS与HTTP失败均无异常。
- P04–P11桌面截图contact sheet目视检查通过，完整页面/CRUD/组件/页面结构/流程图保留。
- P07点击第二张页面卡切换Contact Us示例；P09点击第二张组件卡切换Sidebar示例。
- 29/29独立页码、ArrowLeft回到28页、刷新保留page=28通过。
- 证据：本机 /tmp/ai-engineer-w2-separate/result.json；截图同目录；迁入页contact sheet /tmp/w2-migrated-contact.png。此前 21 页验收记录保留在下方，只适用于迁移前版本。

# W2 本地验收 · 2026-10-04

状态：Local verified，独立21页，未部署、未提交或推送。

- TypeScript + Vite build 通过。
- 21页×1600×900、1280×720、390×844，共63次文字边界、内部裁切、图片和JS检查，无页面异常。
- 全部21页桌面截图通过contact sheet目视检查，正式封面独立标明W2；目录、内容与交付对应C7P02。
- 初次自动请求favicon.ico返回404，已加入官方jr-box.svg的明确favicon链接；三视口复查无HTTP失败。
- 方向键前后翻页、最后页深链刷新、21/21独立页码通过。
- 五个runtime文件与_template字节一致；Logo与brand官方源一致。
- 本次只验收课件；真实CareKind starter、业务功能和产品测试未验收。手机为画布等比缩放，课堂建议桌面或横屏。

机器结果见本地QA-results.json（按仓库忽略规则未入库）。本机截图：/tmp/ai-engineer-w2-separate/。
