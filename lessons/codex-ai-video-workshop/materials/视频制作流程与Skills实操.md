# 视频制作流程与 Skills 实操：从剧本到 MP4

本章是下午的操作主线。上午仍是 10:00–12:00 的 Codex 日常使用课，12:00–13:00 午餐。下午 13:00–17:00，包含工具安装说明、HyperFrames 主线、Remotion 对照和学生练习。学生不必先学会写代码，但要会给任务、看预览、提修改和打开导出结果。

## 一、先把完整制作流程讲出来

**需求 → 事实与素材 → 剧本 → 分镜 → 镜头动作 → 工程 → 预览 → 修改 → 导出 → 播放验收。**

| 步骤 | 要回答的问题 | 交回什么 | 进入下一步之前看什么 |
|---|---|---|---|
| 需求 | 给谁看，在哪里看，看完记住什么 | 一份短 brief | 一个主要目标，比例与大致时长 |
| 事实与素材 | 哪些话有依据，哪些文件真的存在 | 事实表、素材台账与授权说明 | 未知信息不补猜，计划素材与实际文件分开 |
| 剧本 | 从什么问题进入，怎样展开，怎样收束 | 完整口播与屏幕文字 | 逻辑、事实、重复与自然表达 |
| 分镜 | 每一句配什么画面，先后怎么排 | 时间、旁白、画面、素材、字幕的表格 | 每段内容有对应画面 |
| 镜头动作 | 谁在动，为什么动，动完看到什么 | 主体、初态、触发、变化、结果、转场 | 不是只写“科技感”“高级转场” |
| 工程 | 用哪条制作路线承载这些画面 | HyperFrames 或 Remotion 可编辑项目 | 素材路径、字体、比例与时间线 |
| 预览 | 实际播放时看起来怎样 | 浏览器预览与关键帧 | 开头、最密一镜、转场、结尾 |
| 修改 | 哪一处影响理解或观看 | 新版本与修改记录 | 保留什么、只改什么、怎样核对 |
| 导出 | 生成什么格式，保存在哪里 | 实际 MP4 文件 | 输出路径明确，不覆盖旧文件 |
| 验收 | 最终文件能不能正常用 | 播放记录与问题清单 | 声音、文字、画幅、时长、完整性 |

讲师口播：“不要一开始就让 AI ‘做一个酷炫视频’。先把内容和画面关系写清楚，再让制作工具执行。Skill 帮助 Codex 按一套规则工作，HyperFrames 或 Remotion 把工程变成预览和视频文件，它们各自承担不同角色。”

## 二、剧本、分镜与镜头，分别写到什么程度

### 剧本：把话说完整

剧本包含完整旁白、屏幕上要出现的文字和基本结构。只有“开头吸引人—中间解释—结尾总结”不是可制作剧本。先写受众、问题、一句话结论，再写能自然读出的正文。时长先作为目标，配音或真人朗读后再测量。

```text
Write a complete Chinese narration script about why fitting a landscape image into a portrait canvas can leave empty space, while filling the canvas can crop the sides. Audience: first-time video editors. Use one visual example, preserve aspect ratio, and finish with a practical choice. Separate narration from screen text. Do not invent platform rules or fixed timing. Give three opening alternatives, select one with a reason, then deliver the full script. Do not create the video yet.
```

讲师先打开上一版课程包《视频示范脚本与分镜》的完整旁白，让学生知道目标输出是什么。改脚本时先改事实与逻辑，定稿后才大规模做画面，减少后面因旁白大改导致返工。

### 分镜：把一句话和一个画面对应起来

分镜不是把剧本复制进几行表格。每一行至少有：镜头 ID、暂定时间、对应旁白、画面主体、屏幕文字、实际素材或原创图解、声音、与下一镜的关系。单一镜头可以承担多句话，但要让内容与画面变化对应。

```text
Turn the approved narration into a storyboard. For each shot include: shot ID, provisional start/end, exact narration segment, visible subject, on-screen text, real asset ID or original diagram requirement, audio, and transition to the next shot. Keep missing assets explicit. Do not invent filenames or claim planned footage already exists. Do not change the approved facts.
```

### 镜头：把“怎么动”写成动作链

| 抽象描述 | 可执行描述 |
|---|---|
| 做个科技感画面 | 横版画框进入竖版边框，按比例缩小，剩余区域显现，停稳给观众看 |
| 这里加酷炫动画 | 同一个对象拆成三部分，按步骤落位，组合成完整结果，再接下一个场景 |
| 文字动起来 | 关键词在对应旁白时出现；解释完成后保持可读，其他装饰退场 |
| 转场高级一点 | 上一镜的作品对象保持位置，下一镜的展示台从其下方进入，形成相同对象的接力 |

```text
For every storyboard shot, specify the initial state, trigger, main-object change, visible result, readable hold, and transition anchor. Use the same object when demonstrating before/after conditions. Avoid replacing explanation with whole-page zooms, unrelated stock images or decorative motion.
```

镜头表确认后，把三份文档分别保存为 brief.md、script.md、storyboard.md；镜头动作写进 shots.md。名字是本课程建议结构，不是软件强制约定。

## 三、Skills 到底是什么，怎样安装与确认

### 先分清三层

| 层次 | 作用 | 不能替代什么 |
|---|---|---|
| Codex 会话 | 理解材料、写脚本、编写与修改工程、调用可用工具 | 不自动等于已经有所有软件和素材 |
| Skill | 给 agent 的流程、格式、检查规则与参考资料 | 不是渲染器，也不自动授予账号或付费权限 |
| 运行工具与依赖 | Node、HyperFrames/Remotion、浏览器、媒体工具等 | 安装了工具也不会自动有好剧本和分镜 |

讲师口播：“Skill 可以理解为一份会被 Codex 读取的专业操作手册。你装了它，还需要工程和运行环境。反过来，机器装了渲染器，也不代表 Codex 已经读过制作规则。安装后要确认两件事：这份 Skill 是否真的可读，工具是否真的能运行。”

### 课前环境检查

本课程为两条路线统一准备兼容的 Node 环境；HyperFrames 当前官方要求 Node.js 22+ 与 FFmpeg。其他依赖按课堂实际安装版本检查。以下是只读检查案例：

```bash
node --version
npm --version
git --version
ffmpeg -version
```

没有安装时，让 Codex 说明操作系统、所缺工具与安装方案；不要覆盖学生已有工程，也不要自行更改其他项目版本。依赖下载需要网络；先完成课前检查，课堂保留几分钟讲安装方法与验证，不让全班从零排障。

### 先判断是插件安装，还是独立 Skill

如果 HyperFrames 是通过 agent 的插件管理器安装，技能和 CLI 版本由插件管理。使用该插件的更新与调用方式；不要再用独立安装命令覆盖插件目录。插件模式由 agent 读取自身的 Skill 与启动器规则，不要求学生复制讲师电脑的内部路径。

下面的命令用于**独立 Skill 路线**。课堂只选这一条演示即可；插件安装方式留作对照说明。

### HyperFrames 独立技能安装

在准备使用的视频项目目录里，让 Codex 先检查是否已有同名技能和未提交修改；已经可用时不重复覆盖。官方核心技能安装/刷新入口为：

```bash
npx hyperframes skills update
```

交互安装的另一种入口是：

```bash
npx skills add heygen-com/hyperframes
```

只采用一种安装方式。交互选择时选择实际使用的 agent 与范围，核心组包含 hyperframes、hyperframes-cli、hyperframes-registry、media-use；不必为了数量把全部可选技能装上。独立技能状态可按实际版本执行：

```bash
npx hyperframes skills check --json
```

检查输出与安装器显示的目标目录，再在新的聊天或后续一轮让 Codex 确认能读取实际 SKILL.md。插件模式不执行这些独立技能刷新命令。

### Remotion 技能安装

官方技能仓库入口为：

```bash
npx skills add remotion-dev/skills
```

在已有 Remotion 工程中也可按当前官方 CLI 文档使用：

```bash
npx remotion skills add
```

二选一，按安装器选择 agent 与项目范围；已有技能先检查再处理。基础入口为 remotion-best-practices；创建、预览和导出分别由 remotion-create、remotion-studio、remotion-render 等技能提供对应规则。不要把讲师本机的绝对路径写成全体学生的安装路径。

### 安装后，怎样让 Codex 真正使用

不要求学生记住所有斜杠命令。可以直接在任务中写技能名称，并要求先读取：

```text
Use the installed hyperframes skill. Read its SKILL.md and the relevant creation/preview guidance before editing. Tell me which skill files you could actually read and which project directory you will use. If the skill is unavailable, report that instead of pretending it was loaded. Do not call paid media APIs or change an existing plugin installation.
```

```text
Use the installed remotion-best-practices and remotion-create skills for this project. Inspect the existing files first. Open Remotion Studio as soon as the project can run. Follow the approved script and storyboard. Do not render or publish until I explicitly ask for the export.
```

Skill 的名字、版本、安装目标与运行依赖分别记录。安装成功提示、文件存在、预览能打开和导出成功是四个不同检查。

## 四、HyperFrames：从分镜到可预览工程

### 它负责哪一段

HyperFrames 以 HTML/CSS、媒体和可定位时间的动画构成视频工程，再渲染视频文件。适合本课的图解动画、文字与图像编排。这里用它做宽高比科普片。脚本、分镜和素材仍然由前面的步骤明确，不把渲染器当内容策划者。

### H1：在新目录初始化

以下命令在专门的练习父目录执行，不能在课程资料根目录或已有项目中直接覆盖。目录已经存在时换一个新名字，或先确认它是否是需要继续使用的工程。

```bash
npx hyperframes init aspect-ratio-hf
cd aspect-ratio-hf
```

保留脚手架生成的依赖版本与文件。init 可补齐缺失的核心技能，但不等于刷新已有技能。采用插件模式时，由 agent 根据插件 Skill 使用其版本化启动器，不能直接把此独立命令套在插件目录。

### H2：把内容材料交给工程

讲师指给学生看三类东西：index.html 为入口；compositions/ 放场景；assets/ 放实际图像、字体与媒体。脚手架与项目版本可能影响具体文件，先读实际目录再修改。

```text
Use the HyperFrames skill to build the approved aspect-ratio explainer in this new project. Read brief.md, script.md, storyboard.md and shots.md first. Make one editable scene per storyboard shot, with stable IDs. Keep the canvas 1080 by 1920 at a planned 30 fps, preserve the same diagram objects across comparisons, and keep important text readable. Use local assets and seekable animation. Create the project and preview first; do not generate voiceover, music, paid media or an MP4 yet. Report missing assets accurately.
```

学生不必手写 HTML，但要检查 Codex 是否保留事实、能否找到场景与素材、是否在执行自己确认的分镜。第一轮可先完成 8–12 秒关键镜头，确认风格和动作，再扩展整片；短片段不是整片完成的证明。

### H3：检查、截图与预览

在工程目录中执行：

```bash
npx hyperframes check --json
npx hyperframes snapshot --review
npx hyperframes preview --background
```

读取 check 的实际输出，修复错误，解释剩余警告。snapshot 生成的画面要真的打开看，不能只看命令退出码。浏览器使用 preview 实际打印的项目 URL；不能把源 index.html 直接当作完整编辑预览。预览服务需在检查时保持运行，不把一个猜测端口写给学生。

先检查开头、最密一镜、转场两侧和结尾，再正常速度播放全段。看同一个图解对象是否随旁白变化，是否出现静止卡片轮播、遮挡、比例变形或字体缺失。

### H4：提出一条可核对修改

```text
Keep the approved narration, dimensions and shot order unchanged. In the cropping comparison, show the same landscape frame scaling proportionally until it fills the portrait canvas. Make the hidden side regions understandable, then hold the result before the next shot. Fix only this explanation and preserve the previous version. Rerun the relevant checks and open the changed preview.
```

说明一条有效修改必须包含：保留什么、改变什么、怎样看出改好了。修改后重新查看受影响镜头；改了声音或时长还要看相邻转场。

### H5：明确请求导出

```text
The reviewed preview is approved for a local export. Render the video using the project's documented HyperFrames command. Save the MP4 in a new clearly named location in my system Downloads directory; add a numbered suffix if needed. Do not publish or upload it. Check the exported duration, dimensions and file size, then open and play the actual file. Report any missing audio or unfinished item honestly.
```

CLI 模板如下，方括号中的输出说明必须由 agent 换成真实绝对路径；不要原样粘贴一个不存在的位置：

```bash
npx hyperframes render --quality delivery --output "[absolute path in the system Downloads folder]/Aspect Ratio Explainer - v1.mp4"
```

不同版本以当前项目帮助与技能为准；不添加云端渲染、付费素材或发布步骤。若这是一份无旁白图解预览，就准确交付该版本，不用未授权配音补位。

## 五、Remotion：同样的内容，另一种工程方式

### 它负责哪一段

Remotion 用 React 组件描述画面，通过帧数组织时间线，在 Studio 中预览并渲染。课堂用同一套已确认脚本对照，理解“相同内容，不同工程表达”。不要求学生同时精通两种框架，也不把使用 React 等同于自动获得更好审美。

### R1：新建空工程

在独立的练习父目录执行；若已有工程，就先检查并继续使用，不重复 scaffold。

```bash
npx create-video@latest --yes --blank --no-tailwind aspect-ratio-remotion
cd aspect-ratio-remotion
npm install
```

技能可在脚手架安装流程中添加，也可使用上一节的独立技能安装入口。课前准备好工程，课堂重点是讲清步骤、展示结果，不把大部分时间花在下载上。

### R2：先打开 Studio

```bash
npx remotion studio --no-open
```

打开终端实际打印的本地 URL，确认 Studio 和画面都能加载。已有项目先打开预览，再让 Codex 继续修改。运行中的预览会占用一个终端会话，需要保留它而不是把它误认为卡死。

### R3：让 Codex 把分镜写成组件

```text
Use the installed Remotion skills and the approved script/storyboard. Create a composition named AspectRatioExplainer at 1080 by 1920, 30 fps. Start with the approved 12-second diagram segment as 360 frames; treat this as a preview segment, not the full narration. Give each editable shot its own component and derive animation from frame time. Reuse the same diagram objects for contain, cover and distortion comparisons. Do not use wall-clock timers or introduce paid API calls. Keep Studio open and show the preview before any export.
```

讲清两个概念：composition 是一份可选的视频配置；frame 是时间刻度。30 fps 下，12 秒是 360 帧，这只是本例参数。完整视频时长按实际脚本和声音确定，不能把 45 秒旁白塞进这个 12 秒预览。

画面在某个时间点的样子应由帧确定。学生只需知道为什么这样能预览、跳到某帧并重复导出同一内容，不必在基础课背 React API。

### R4：预览与修改

在 Studio 选择实际注册的 composition，播放、暂停、拖动时间线。先看边界与留白，再看动作与节奏。只看到启动页面或 composition 名称，不算视频预览可用。

```text
In AspectRatioExplainer, keep the composition settings and verified facts unchanged. Fix only the final comparison hold: stop unnecessary motion and leave enough time to inspect the diagram. Verify that jumping backward and forward produces the same visual state. Show the updated Studio preview and record the change.
```

### R5：导出指定 composition

在确认过预览、确实要 MP4 时执行。先检查项目实际 entry point 和 composition ID，不能复制模板后猜它们存在。

```text
Export the approved AspectRatioExplainer composition locally. Confirm its real entry point and registered ID first. Save to a new path in my system Downloads directory without overwriting. Do not publish, use cloud rendering or call media APIs. Open the exported file and check its dimensions, duration, visible text and playback.
```

命令模板：

```bash
npx remotion render [actual entry point] AspectRatioExplainer "[absolute path in the system Downloads folder]/Aspect Ratio Explainer - Remotion - v1.mp4"
```

标准脚手架可能使用 src/index.ts，但必须读取实际工程确认后再替换占位。案例导出完整片而非 12 秒预览前，先更新 composition 的真实时长和对应内容。

## 六、活动素材怎样进入这两条路线

“把素材丢进去”需要拆成可检查的步骤：实际导入 → 读取可用元数据与内容 → 建素材台账 → 选片 → 人工确认结构 → 裁切与排列 → 声音与字幕 → 预览 → 修改 → 导出。某个工具无法理解视频内容时，使用人工选片记录，不让它从文件名猜镜头。

| 台账字段 | 案例性质 | 作用 |
|---|---|---|
| asset_id / real_path | 必须对应实际文件 | 避免计划镜头冒充存在的素材 |
| duration / orientation | 从真实文件或工具读取 | 决定可用时间与构图 |
| in / out | 人工或工具确认的范围 | 实际选取哪个片段 |
| observed_content | 已观察到的动作与对象 | 让结构有证据 |
| original_audio | 可用、需修整、无有效原声等 | 保留讲话意思与声画关系 |
| permission | 已确认范围或待确认 | 未确认部分不进入公开交付 |
| purpose | 该镜头支持什么内容 | 决定保留还是删去 |

HyperFrames 中，素材要进入符合项目规则的媒体元素与时间属性；Remotion 中，素材进入可独立编辑的片段组件和时间线。具体媒体 API 按已安装技能和当前项目文档使用，学生不必手写所有代码。两者都不能只凭台账就声称已经看过全部原片。

```text
Build a proposed event edit from the verified clip log and real authorized files only. Keep each selected clip independently editable, preserve the agreed in/out points and original speech meaning, and produce a preview first. If a file or capability is missing, stop that step and identify the gap. Do not fabricate event footage, transcribe from filenames, or infer audience sentiment. Let me review the rough cut before export.
```

## 七、两条路线怎样选

| 情况 | 本课处理 |
|---|---|
| 第一次学习，用自然语言做图解/文字/图片编排 | 以 HyperFrames 主线跟做 |
| 已有 React/Remotion 工程，或想理解组件与帧时间 | 保持 Remotion，使用其技能 |
| 已有可编辑工程 | 先读原工程，不为演示另一工具而迁移 |
| 活动素材很多 | 两条都先做素材与选片台账，再确认粗剪 |
| 想做酷炫营销视频 | 先确定卖点与逐镜动作，再选工程路线；框架不替代创意与迭代 |
| 想接扣子、火山引擎或其他服务 | 基础流程跑通后再设计接入；存在端点/凭证不等于已验证制作闭环 |

学生练习只选一条引擎路线。先完成 8–12 秒可修改片段也可作为阶段成果，但必须标清范围；最后要声称视频完成，仍要导出并实际播放对应完整作品。

## 八、课堂下午安排：把工具操作纳入正文

| 时间 | 教学内容 | 学生看见什么 |
|---|---|---|
| 13:00–13:20 | 剧本 → 分镜 → 镜头动作 → 工程 → 验收 | 同一知识点的完整文字与镜头对应 |
| 13:20–13:45 | 安装 Skills、确认运行环境与实际加载 | 安装来源、目标范围、可读 Skill、可运行工具 |
| 13:45–14:35 | HyperFrames 主线示范 | 新工程、关键镜头、检查、预览、定点修改与导出说明 |
| 14:35–14:45 | 休息 | |
| 14:45–15:25 | Remotion 对照示范 | composition、帧时间、Studio、修改与指定导出 |
| 15:25–16:00 | 活动素材剪辑、营销镜头与流程复用 | 实际素材台账、粗剪确认点、营销动作与自动化边界 |
| 16:00–16:45 | 学生自选一条路线练习 | 一个实际可预览并可继续修改的作品；导出以实际完成为准 |
| 16:45–17:00 | 作品播放与复盘 | 成果文件、修改依据、检查结果与剩余缺口 |

课前完成主要软件下载，13:20 的安装教学展示来源与验证方法，不让全班现场更换已有版本。若同学环境尚未可用，先观察讲师的已准备工程并记录步骤，之后用相同清单完成环境检查。

## 九、常见错误与处理

| 看到什么 | 先查什么 | 不应怎样解释 |
|---|---|---|
| Skill 已安装，但不会执行 | 是否实际读取 Skill、CLI 与依赖是否可运行 | 不把 Skill 当万能软件包 |
| 预览空白 | 真实入口、场景注册、素材路径、浏览器报错 | 不把“服务 200”当画面正常 |
| 出现静止画面 | 时间线是否可定位、场景是否正确挂载 | 不靠随机计时器假装能渲染 |
| 中文缺字 | 字体文件、字形覆盖与渲染环境 | 不把系统本机能看当所有机器都能看 |
| 字幕/声音错位 | 实际声音时长、镜头边界、字幕分段 | 不以设计表时间码当真实对齐 |
| 导出位置找不到 | 命令真实输出路径与文件存在性 | 不只报告“已成功” |
| 修改后另一个镜头坏了 | 相邻边界、共享组件和全段播放 | 不只看修改处截图 |

### Final engine-workflow checklist (English)

- The script and storyboard were approved before full implementation.
- The selected Skill was actually readable and the runtime was available.
- The project opens in the correct preview surface with visible content.
- At least one targeted revision was made and rechecked.
- The export uses a real entry/composition and a collision-safe Downloads path.
- The exported file was opened and played; unsupported or unfinished steps are recorded.
- No paid media/API operation, external publication or cloud job was introduced without authorization.

## 官方来源与版本记录

核对日期：2026-10-30。命令应按实际安装版本的帮助和项目脚手架复核，教学材料不自动替学生安装或更新软件。

- [HyperFrames 官方仓库与安装说明](https://github.com/heygen-com/hyperframes)：独立技能入口、项目初始化、预览与基础运行要求。
- [Remotion 官方 Agent Skills](https://www.remotion.dev/docs/ai/skills)：技能仓库与角色。
- [Remotion 官方创建项目](https://www.remotion.dev/docs/)：新工程入口。
- [Remotion 官方 render 命令](https://www.remotion.dev/docs/cli/render)：入口、composition 与输出位置。

HyperFrames 的 check、snapshot、独立技能检查、插件分流与导出选项同时对照本机已安装的官方 HyperFrames Skill/CLI 参考；插件与独立技能的启动方式不能混用。讲师需记录课前实际安装版本与成功执行证据，不能把这份命令教材当作每台学生电脑已经安装成功。
