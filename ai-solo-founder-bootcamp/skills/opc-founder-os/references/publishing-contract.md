# 发布与媒体契约

本文件供 OPC 学生包携带使用，不包含公司账号、凭据或内部工具权限。内容制作可以离线进行；安装 Skill 不会授予发布权限。

## 实际发布

- 在 JR 治理环境，所有支持平台的发布、排程、队列和状态读取只走公司 Social Publishing Hub MCP `social_publishing`，由 Buffer 执行。执行时加载已安装的 new-media-manager；TikTok 同时加载 tiktok-publisher。学生环境没有这些技能时，本文件仍适用；没有工具则阻断实际 provider 操作。
- 每次 provider 操作前调用 `list_accounts`、`list_channels`，核对 credentialAlias、brandKey、channelId、显示身份、语言、时区、scope/grant 与 queue 状态。不能复制老师账户，也不能从主页 URL 猜身份。
- 核对实际 schema、平台字段、媒体条件和适用授权。用户已有明确发布指令或覆盖本任务的长期授权可沿用；本次编辑 Skill 的指令不能作为未来发布授权。
- 缺频道、权限、字段或工具标 blocked_pre_publish_capability。可以生成交接包及人工待办；AI 不改用原生 UI、浏览器、raw API、直接 Buffer 或其他 broker。退役 provider 禁止查询、OAuth、analytics 和回退。
- 一条逻辑帖子一个稳定幂等键；记录 operation 与 provider ID，通过 list_operations、get_operation、refresh_operation 回读。不确定结果时不得换键重发。只有确定性字段校验失败且同一键已证实没有创建，才修正字段重试一次。
- accepted、scheduled、pending、publishing 不是 published。只有 provider sent/published、无错误、正确账号公开 URL 已读回，才标 published。员工待发包保持 handoff_pending；人工发布证据独立记录来源，不伪造 Buffer 回执。
- Analytics 仅在 Hub 提供并验证合同后使用；否则 unavailable。不得使用退役 provider 或公开点赞数补出完整分析数据。

## 媒体产物

脚本、分镜、素材、成片、技术验收、登记、排程、公开发布是不同阶段。TikTok 必须独立原生策划；不能把其他平台成片改 caption 当作独立作品。

JR 正式 AI 配音只用后端 TtsService / elevenlabs-tts；从课堂 speaker registry 解析 amy，显式模型 eleven_v3。凭据只来自受控数据库配置。记录脚本、模型、speaker、音频/字幕哈希与权利；缺该能力保留脚本或使用获准的人声材料，不换其他 TTS 冒充正式交付。

JR 非 YouTube 视频画面、封面、字幕、旁白和二维码不放 URL、域名或可跳转二维码；文案链接按目标账号规则核对。完整播放检查画面、字幕、音频、事实及素材权利。任何评分或所谓 AI 检测比例都不是事实验证或平台审核保证。

在 JR 项目实际生成并验收 MP4 后，执行 video-publishing-center 登记；未获发布批准时是 verified_internal。学生环境无治理接入时报告缺口，不声称已经登记。PDF 若需要生成，以核验过的 HTML/CSS 为源；交付文件保存系统 Downloads，同名加序号。
