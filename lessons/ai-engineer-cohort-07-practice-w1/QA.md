# 本地验收 · 完整迁入版 · 2026-10-04

状态：Local verified；86 页，未部署、未 commit/push 或学生平台同步。24 页初稿验收已被本记录取代。

- TypeScript + Vite production build 通过；App 实际注册 86 页。Vite 提示单 bundle 586 kB 超过 500 kB 建议阈值，gzip 170 kB；构建成功。
- 86 页 × 1600×900、1280×720、390×844，共 258 次浏览器检查。发现 P32 关系图底部、P38 PRD 模板溢出，调整 P32 间距及 P38 双栏完整模板后，三视口共 6 次复查通过。合并结果无画布文字越界、内部裁切、图片加载失败、JS 异常或 HTTP 失败。
- 86 页桌面截图通过 contact sheet 逐页目视检查；重点单页复查封面、SoT、AI OS、产品示例、数据关系、PRD、Rules、Review 与延伸页。白底白字问题在课程内容组件中修正；19 个暗底页补做文字/背景近似同色检查及截图，未发现同色文字。
- 原页面/组件样例点击切换通过。规则清单复制的实际剪贴板内容与反馈通过；模拟拒绝写入时给出手动选取提示，无未捕获异常。
- ArrowRight / ArrowLeft、最后一页边界、`?page=86` 深链及刷新、F 全屏通过。
- SlideEngine、CameraBubble、ui、styles/theme、main 与 `_template` 字节一致；Logo 与官方 `jr-academy-brand/assets/logo/logo-zh-full.svg` 一致。
- 每页迁入来源登记在 SOURCE_MAP.md / source-map.json；课件卡片、构建部署配置和两处 CHANGELOG 已更新。git diff --check 通过。

浏览器扫描数据见本地 QA-results.json（按仓库忽略规则未入库）；截图与调试脚本保存在本机 /tmp/ai-engineer-w1-full 和 /tmp/ai-engineer-w1-qa。首轮三标签并行截图受到背景动画节流影响，已废弃，以单标签顺序扫描及最终截图为准。

## 验收边界

这是课件本地显示与交互验收。真实 CareKind starter 的启动、业务功能、测试与代码 walkthrough 尚未在本任务中验收，讲师需按 RUNSHEET 课前核查。摄像头真实权限/画质、公开部署与学生平台同步未测；未制作视频、TTS 或 PDF。

手机采用模板 1600×900 画布等比缩放；完整课件建议桌面或横屏放映，缩放通过不等于手机正文阅读体验。86 个底部页点密集，现场建议方向键、侧边箭头或 `?page=N` 跳页。

## 独立周次补充验收

W1封面改为明确W1标识，重新构建通过；封面三视口复查无裁切、图片或页面异常。W2、W3放映列表、页码、工作单与构建均在各自目录独立注册。

## 2026-10-04 · 项目管理主线重组后补充验收（79 页）

本次以 `src/App.tsx` 的实际注册顺序为准，79 页；不使用当时正在同步的 source-map 来确定页码。历史 86 页记录保留，本节覆盖本次改动范围，不等于重跑全部 79 页。

- 最新 TypeScript + Vite production build 通过。bundle 为 550.70 kB / gzip 163.96 kB，存在 Vite 的 500 kB 建议阈值提示，不影响构建结果。
- 16 张修改或新增页 × 1600×900、1280×720、390×844，共 48 次浏览器检查：CareKind 商业模式与行业扩展（P5–6）、项目契约至企业落地（P14）、项目管理五页（P17–21）、Frame 练习（P24）、ADLC 五步循环（P27）、多个 Agent/worktree（P28）、七项项目检查（P29）、完整 PRD/Work Plan（P30）、Specify 练习（P35）、Repo Strategy（P48）、独立自查与讲师点评（P56）。未发现画布文字越界、隐藏容器裁切、图片加载失败或浏览器 JS 异常。
- 以上 16 张桌面截图逐张目视检查。CareKind 两页已拆开，行业页底部扩展顺序与导航有留白；新增五步 ADLC、多个 Agent/worktree、五张项目管理页和 Repo Strategy 无文字重叠或底部导航遮挡。P14、P29 另等候 3 秒动画完成后复查，全部文字可见；首轮截图的低透明文字是尚未完成入场动画。
- ArrowRight / ArrowLeft、最后一页 `?page=79` 深链刷新及向右边界检查通过。手机检查沿用固定 1600×900 画布等比缩放，不代表手机正文阅读体验。
- 对 App 的 79 个放映注册项及对应源码检查：个人 AI OS、ContextVsMemory、MiniCRM 数据关系页及八张已迁至 W2 的产品拆解页均未注册；当前放映源码无「同桌」措辞。Legacy 源码保留，不据此判断当前放映内容。

证据仅保存在本地：`/tmp/w1-final-79-qa/results.json`、该目录内 16 张桌面截图、`/tmp/qa-w1-final-79.mjs` 与动画完成截图补查脚本 `/tmp/qa-w1-final-late-motion.mjs`。此前按 80 页旧顺序启动的扫描已中止，不作为本次最终证据。本次没有重新验收公开部署、真实 CareKind starter、摄像头权限、TTS、PDF 或学生平台同步。

## 2026-10-04 · 最终 60 页顺序与 CLAUDE.md 补充验收

当前 `src/App.tsx` 实际注册 60 页，无 Appendix。此节是本次改动的窄范围验收，保留上方历史记录，不表示所有 60 页均重新排版验收。

- 最新 `bun run build` 通过，bundle 507.27 kB / gzip 153.37 kB；仍有 Vite 单 bundle 超过 500 kB 建议阈值提示。
- 顺序核对：P37 为 PRD → Rules / Docs / Repo Context；P38–42 依次为 Rules First、Rules List、Rules Checklist、Rules 文件结构、PRD 文件结构；P43–46 为 CLAUDE.md 入口、层级、优化和首次编写练习。旧 S14_Repo 和 18 个迁出的放映项均未注册，当前不再展示原延伸区。
- 三张最新修改页（P38、P43、P46）× 1600×900、1280×720、390×844，共 9 次浏览器检查，无内容画布文字越界、隐藏容器裁切、图片加载失败或 JS 异常。三张桌面截图已逐张目视检查，无文字重叠或底部导航遮挡。
- ArrowRight / ArrowLeft、最终 `?page=60` 深链刷新及最后一页向右边界检查通过。
- Company OS 文件结构页的独立三视口证据见 `research/company-os-structure.md` 与 `/tmp/company-os-structure-qa.json`：桌面/横屏的内容与导航无重叠；手机固定导航按钮会覆盖缩放画布的内容边缘，这是现有引擎边界，不能据画布无越界声称手机无覆盖。
- SDD 和 ADLC 两页由独立任务验收，证据保存在 `/tmp/w1-sdd-adlc-qa.json`；本记录不将仍待解释的自动测量标记当作全页通过，最终结论须结合该任务的目视复核。

本次证据：`/tmp/w1-final-60-qa/results.json`、该目录内 P38/P43/P46 截图与 `/tmp/qa-w1-final-60.mjs`。本节仅记录课件的本地排版、注册顺序和交互；行业规范、模型通用知识及工具规则的事实核对由内容任务负责，不由截图证明。未重新验收云端部署、真实 CareKind starter 或学生平台同步。

### 最后文案修正与独立 SDD 测量复核

P38 已将模型预训练知识视为免费 SoT 的旧表述改为通用知识仅作起点、行业规范与客户事实须核对权威来源；P43 改为按工作目录加载适用层级、规则冲突需核对具体指令。修正后的两页重新进行了三视口共 6 次检查，零内容画布越界、裁切、坏图或 JS 异常；两张最新桌面截图目视通过。最新构建再次通过，bundle 507.25 kB / gzip 153.36 kB（由主任务重建核对）。证据：`/tmp/w1-final-60-wording-qa/` 与 `/tmp/qa-w1-final-wording.mjs`。

独立 SDD/ADLC 验收已完成两页三视口共 6 张截图的目视确认。SDD 标题的 scrollWidth 测量标记为字体字形测量假阳性，标题 overflow 为 visible，实际标题完整可见，不能把该标记解释为真实裁切；本任务另查看 `/tmp/w1-S08_ADLC-1600.png` 确认标题、五个步骤与页尾均完整。该结论补足上段当时尚待解释的状态。手机固定导航覆盖缩放画布边缘的既有边界仍保留，不据此声明手机无覆盖。
