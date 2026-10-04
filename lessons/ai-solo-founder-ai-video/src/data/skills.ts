// 来源：research/SOURCES.md 中的本地 Skill 合同；不推断学生已安装。
import type { TeachingSlide } from './course';
export const skillSlides: TeachingSlide[] = [
  {
    "number": 41,
    "chapter": "08 · 常用 Skills 速查",
    "title": "Skill：让 AI 按一套流程做事",
    "subtitle": "工具提供能力；Skill 写清步骤、输入、交付和检查。",
    "kind": "compare",
    "items": [],
    "leftTitle": "工具 / 模型",
    "left": "ElevenLabs：把文字变成配音\nSeedance / MiniMax：生成镜头\nHyperFrames / Remotion：制作画面",
    "rightTitle": "Skill / 工作流程",
    "right": "读取要求 → 准备素材 → 制作\n预览 → 修改 → 渲染 → 检查\n把做法和交付标准交给 AI",
    "callout": "先让 AI 列出已安装的 Skills；没有安装，就不能假装已经调用。",
    "notes": "Skill 是给 AI 的流程说明，常见入口是 SKILL.md；并不等于模型、软件或服务账号。以下名字来自讲师本地已读取的 Skills，学生环境未必相同。可在第4页后先跳到本速查章，再回到第5页。"
  },
  {
    "number": 42,
    "chapter": "08 · 常用 Skills 速查",
    "title": "做动态 PPT：先选一个制作入口",
    "subtitle": "按交付选 Skill：网页课件、视频工程和 MP4 是不同产物。",
    "kind": "table",
    "items": [],
    "headers": [
      "Skill",
      "什么时候用",
      "主要交付"
    ],
    "rows": [
      [
        "talk-deck",
        "制作今天这种网页课堂 PPT",
        "网页课件 + 讲师资料"
      ],
      [
        "hyperframes",
        "用 HTML / CSS 与时间线做视频",
        "可预览、可渲染的工程"
      ],
      [
        "remotion-best-practices",
        "让 AI 按 Remotion 流程制作视频",
        "React 视频工程"
      ],
      [
        "remotion-render",
        "工程做好后导出成片",
        "渲染文件 + 播放检查"
      ]
    ],
    "callout": "slideshow 用于 HyperFrames 可翻页演示；可翻页网页还需要另走视频渲染。",
    "notes": "先选 hyperframes 或 remotion-best-practices 一条路线，避免混搭两套时间线。remotion-render 是导出阶段；Skill 的角色不代表本次课堂已生成 MP4。talk-deck 是本项目 JR 课件流程，不宣称所有学生都能直接安装调用。"
  },
  {
    "number": 43,
    "chapter": "08 · 常用 Skills 速查",
    "title": "找素材、读参考、生成镜头、做字幕",
    "subtitle": "按缺口调用，给每个 Skill 一个明确输入和可检查的输出。",
    "kind": "table",
    "items": [],
    "headers": [
      "Skill",
      "交给它什么",
      "拿回来检查什么"
    ],
    "rows": [
      [
        "media-use",
        "需要的图片、音乐或现有素材",
        "本地素材文件、来源与记录"
      ],
      [
        "youtube-transcribe-skill",
        "可读取的参考视频链接",
        "字幕文本；画面还需另看"
      ],
      [
        "arkcli-gen",
        "镜头需求、授权参考与可用模型",
        "生成镜头；先核验模型能力"
      ],
      [
        "remotion-captions",
        "配音或字幕数据",
        "字幕时间与显示效果"
      ]
    ],
    "callout": "正式配音继续用 ElevenLabs；素材 Skill 的其他 TTS 路径不作为本课正式音频。",
    "notes": "media-use 可处理多类媒体，这里只介绍素材相关用途；不启用其其他 TTS。字幕转写不等于理解运镜；无字幕或来源不可读时不要编造分析。arkcli-gen 是火山方舟生成流程入口，不是 MiniMax Skill；Seedance 具体可用模型与权限要核验，MiniMax 使用实际可用官方入口。"
  },
  {
    "number": 44,
    "chapter": "08 · 常用 Skills 速查",
    "title": "直接这样让 AI 开工",
    "subtitle": "告诉 AI 用哪个 Skill、有什么素材、怎样才算交付完成。",
    "kind": "prompt",
    "items": [],
    "text": "列出已安装的视频 Skills；缺少需要的 Skill，先说明。\n用 hyperframes 制作产品介绍动态 PPT 视频。\n输入：产品事实、品牌素材、已确认的 ElevenLabs 配音。\n先给分镜与素材缺口，再制作工程；缺素材用 media-use。\n记录素材来源；按配音排画面和字幕，不编造缺失内容。\n交付：预览、可编辑工程、渲染文件和实际检查结果。",
    "callout": "Remotion 路线：换成 remotion-best-practices，导出时用 remotion-render。",
    "notes": "这是自然语言调用示例，不是可直接复制到终端的 CLI 命令。不在提示词里放密钥，不承诺账户已有权限或配音已生成。要求先报告缺口与计划，不把已读 Skill 当作已执行视频生产。"
  },
{
  "number": 45,
  "chapter": "08 · 常用 Skills 速查",
  "title": "video-shotcraft：把产品拍出镜头感",
  "subtitle": "真实页面截图 + 镜头配方 + 2.5D 运镜 + 节奏与声音设计。",
  "kind": "steps",
  "items": [
    {
      "label": "给它素材",
      "text": "产品网址 / 项目、真实页面、卖点与品牌资产"
    },
    {
      "label": "选制作方式",
      "text": "套用 Ink Press 模板 / 自主创作 / 共同创作"
    },
    {
      "label": "设计镜头",
      "text": "挑镜头配方，安排截图运动、镜头顺序与卡点"
    },
    {
      "label": "检查成片",
      "text": "Remotion 工程、预览、渲染；看产品是否讲清楚"
    }
  ],
  "callout": "适合产品宣传片，也能单独做一个动效镜头；它本身不是生成视频模型。",
  "notes": "正式名字是 video-shotcraft。已读取本地 Skill：模板模式替换现有镜头；自主创作由 Agent 决策并推进；共同创作确认产品简报、视觉与完整分镜后制作。真实产品界面用截图，敏感信息先脱敏。配音仍按 JR 规则使用 ElevenLabs，不能直接照搬 Skill 的其他音频路径。在线样片地址本次返回404，未作为可用课堂入口。"
},
{
  "number": 46,
  "chapter": "08 · 常用 Skills 速查",
  "title": "按视频类型选创作 Skill",
  "subtitle": "从“我要做什么视频”出发，再决定画面工具和执行流程。",
  "kind": "table",
  "items": [],
  "headers": [
    "Skill",
    "适合的任务",
    "要准备什么"
  ],
  "rows": [
    [
      "short-form-video",
      "竖屏短视频：开头、节奏、循环",
      "主题、受众、已有脚本或片段"
    ],
    [
      "motion-graphics",
      "短文字 / 图表 / 信息标注动效",
      "明确的一条信息与设计素材"
    ],
    [
      "faceless-explainer",
      "不露脸的知识讲解视频",
      "文章、笔记、主题或说明稿"
    ],
    [
      "talking-head-recut",
      "给现有口播加标题、图卡、画中画",
      "口播视频与对应转写"
    ]
  ],
  "callout": "short-form-video 侧重短视频编排；talking-head-recut 保留底片播放、叠加图卡。",
  "notes": "不要把所有 Skill 当成万能一键成片器。motion-graphics 主做短、无旁白动效；faceless-explainer 是从文本做讲解画面；talking-head-recut 主要给既有口播加图形包装，不代表自动删减重剪底片。这里只介绍本机已读取的能力合同；学生环境需确认安装。"
},
{
  "number": 47,
  "chapter": "08 · 常用 Skills 速查",
  "title": "调用示例：用 video-shotcraft 做宣传片",
  "subtitle": "明确选择自主创作模式，再给真实产品输入和验收标准。",
  "kind": "prompt",
  "items": [],
  "text": "用 video-shotcraft，以自主创作模式做产品宣传片。\n输入：我的产品网址 / 项目、真实卖点和品牌素材。\n用真实页面截图展示功能，先处理敏感数据。\n按产品重点选镜头配方，安排运镜、卡点与声音。\n旁白用已确认的 ElevenLabs 配音；没有文件就报告缺口。\n交付可编辑工程、预览与渲染文件，检查字幕和声音。",
  "callout": "想自己参与关键决策：改成“共同创作模式”，先确认方案与完整分镜。",
  "notes": "自然语言示例，网址/项目是由学生补入的输入，不是假设现有可用素材。自主模式授权 Agent 决定创作方向；共同创作有阶段确认。讲清短视频留存与产品宣传片是不同目的；竖屏短视频可另参考 short-form-video 的编排方法，不机械把所有 Skill 串成一个流水线。"
}
];
