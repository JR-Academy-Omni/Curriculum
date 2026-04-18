/* 3 平台发布文案 — 视频号 / 抖音 / 小红书视频
 * 每个平台的文案调性、话题标签、CTA 不一样，这里一次性写好。
 */
window.VIDEO_COPY = {
  videoFile: 'ai-engineer-short.mp4',
  videoUrl: 'https://jr-image.s3.ap-southeast-2.amazonaws.com/video/ai-engineer-short.mp4',
  duration: '61.4 秒',
  resolution: '1080×1920 · 9:16 · 30fps',
  size: '42 MB',
  bgm: {
    title: 'Aitech',
    author: 'Kevin MacLeod',
    license: 'CC BY 3.0 (creativecommons.org/licenses/by/3.0)',
    source: 'incompetech.com',
  },

  /* 每个平台的硬性规则（页面会用这个数据实时校验字数）*/
  platformRules: {
    channels: {
      titleMaxChars: 16,
      descriptionMaxChars: 1000,
      hashtagsMaxCount: 5,
      allowQrCode: true,          // 可以放公众号名片 / 二维码
      allowContactInfo: true,
      forbidsAbsoluteWords: true, // 广告法仍适用（最 / 唯一 / 100% 等）
      notes: '视频号标题超过 16 字会在 feed 里被截；可以关联公众号原创文章',
    },
    douyin: {
      titleMaxChars: 55,
      descriptionMaxChars: 300,
      hashtagsMaxCount: 10,       // 前 3 个最关键
      allowQrCode: false,
      allowContactInfo: false,    // @机构号除外
      forbidsAbsoluteWords: true,
      notes: '标题前 15 字最关键；前 3 秒要有 hook；评论区可引导',
    },
    xhs: {
      titleMaxChars: 20,
      descriptionMaxChars: 1000,
      hashtagsMaxCount: 10,
      allowQrCode: false,
      allowContactInfo: false,    // 聚光直接拒审
      forbidsAbsoluteWords: true, // 最严格
      notes: '标题 12-18 字点击率最高；必须带情绪词（姐妹/家人/真的）',
    },
  },
  /* 硬性违禁词（任何平台都不能用 · 广告法）*/
  forbiddenWords: [
    '最', '第一', '唯一', '100%', '保证', '包过', '包就业',
    'no.1', 'No.1', '顶级', '极致', '完美', '首创', '独家首发',
  ],

  platforms: {
    /* =========================== 视频号 =========================== */
    channels: {
      name: '视频号',
      emoji: '📺',
      color: '#10b981',
      /* 视频号特点：
       *   - 标题 ≤ 16 字（feed 里更长会被截）
       *   - 描述 ≤ 1000 字（折叠在 100 字左右）
       *   - 可以放公众号名片、二维码、客服微信（合规）
       *   - 话题 #xxxxx 用 2-5 个就够
       *   - 挂原创公众号文章链接
       */
      title: '2026 AI 工程师岗位新基线',  /* 14 字 */
      titleAlts: [
        'AI 工程师 12 周跨代升级',       /* 12 字 */
        '60 秒看完新 AI 工程师路径',     /* 14 字 */
        'AI 工程师岗位已经换代了',       /* 12 字 */
      ],
      description: `2026 的 AI 工程师岗位，已经不是会写 Prompt 那一套了。

扒了 15 份一线公司的 JD 之后做了这期 Bootcamp——
📌 12 周带你从"调 API"升级到"能搭生产级 Multi-Agent"
📌 10 Phase · 183 节课 · 68 个浏览器 Lab · 7 个简历项目
📌 Memory / Harness 市面几乎没人系统讲，我们独立成 Phase
📌 课后再续 12 周 P3 职业孵化，陪你到拿 Offer

主页搜【匠人 AI · AI Engineer】看完整大纲，或点卡片直接预约咨询 🌿

#AI工程师 #AIAgent #RAG #AIBootcamp`,
      cta: `关联公众号文章：《2026 年 AI Engineer 的岗位基线已经换代了》→ 公众号底部「阅读原文」可看大纲 + 报名入口`,
      postingTips: [
        '发布时间：工作日 12:00-13:30 / 20:00-22:00（视频号黄金时段）',
        '关联主号文章：选本课 mp-article 发布的那篇（已有阅读入口）',
        '首评留公众号名片 / 咨询二维码',
        '话题用 2-5 个，避免刷屏感',
      ],
    },

    /* =========================== 抖音 =========================== */
    douyin: {
      name: '抖音',
      emoji: '🎵',
      color: '#000',
      /* 抖音特点：
       *   - 标题 ≤ 55 字（显示前 30 字，首 15 字最关键）
       *   - 描述（"标题"字段）通常 100 字内最佳
       *   - 前 3 秒必须有强 hook
       *   - 话题 #xxxxx 至少 5-10 个，前 3 个最重要
       *   - 评论区可引导"评论区见大纲"
       *   - 不能硬带链接（@机构号除外）
       */
      title: 'AI 岗位一年换了一代 还在写 Prompt？',  /* 17 字 */
      titleAlts: [
        'AI 工程师岗位要求 2026 大换代',    /* 14 字 */
        '还在写 Prompt？岗位已经不要了',   /* 14 字 */
        '扒了 15 份 AI JD 岗位真变了',     /* 15 字 */
      ],
      description: `前 3 秒停！👇

2026 的 AI 工程师岗位要求整体右移了——
今年要会的是 Agent / MCP / GraphRAG / Eval
写 Prompt 已经不够看

我把新一期 12 周 Bootcamp 的重点做成了 60 秒
看完你能判断"我到底要不要补"

评论区见完整大纲 💬

#AI工程师 #AIAgent #程序员 #转行AI #AI学习 #AIBootcamp #GraphRAG #Multi-Agent #技术成长 #2026AI`,
      cta: `首评：【完整大纲 + 项目案例已挂主页个签 📌 感兴趣的私信回复「engineer」领】`,
      postingTips: [
        '发布时间：7:00-9:00 / 18:00-23:00',
        '用抖音 App 原生上传（第三方转发会降权）',
        '封面图用 P1 封面截图（主视觉强）',
        '话题前 3 个最重要：#AI工程师 #程序员 #转行AI',
        '拍完挂【官方合集：2026 AI 岗位观察】或新建合集',
      ],
    },

    /* =========================== 小红书视频 =========================== */
    xhs: {
      name: '小红书视频',
      emoji: '📕',
      color: '#ff2442',
      /* 小红书视频特点：
       *   - 标题 ≤ 20 字（12-18 字点击率最高）
       *   - 正文 ≤ 1000 字，分段带 emoji
       *   - 话题 #xxxxx 5-10 个
       *   - 姐妹/宝子/家人风格
       *   - 严禁微信号、二维码、联系方式（聚光拒审）
       *   - "评论区见主页" / "主页挂咨询" 合规
       */
      title: 'AI 岗位一年换代 我真的跟不动',  /* 14 字 */
      titleAlts: [
        '姐妹 2026 AI 岗位真的变天了',       /* 14 字 */
        'AI 工程师岗位我扒了 15 份 JD',      /* 13 字 */
        '这次 AI 换代我是真的慌',           /* 12 字 */
      ],
      description: `不是在贩卖焦虑，是真的有点慌 🥲

前两天同事群聊 GraphRAG、Eval、MCP 怎么调，我一脸懵——
去年还在拼 Prompt，今年整个技术栈已经换代。

后来认真扒了 15 份头部公司 JD，把新一期 12 周 AI Engineer Bootcamp 的内容做成了这条 60 秒短片。

📌 10 个 Phase 覆盖从 Foundation 到 Eval 全链路
📌 Agent 独占 5 个 Phase（Memory + Harness 业内独家）
📌 68 个浏览器 Lab · 7 个简历项目
📌 课后 12 周 P3 孵化陪你到拿 Offer

先看视频 → 看完主页有完整大纲（不是卖课笔记，是真的想让你评估方向对不对）🌿

有技术问题评论区扔过来，我都会回～

#AI工程师 #程序员日常 #AI学习 #转行AI #GraphRAG #AIAgent #技术成长 #职业规划 #小白学AI #2026`,
      cta: `主页已挂：完整大纲 PDF + 项目案例集 + 学员 7 个真实简历项目拆解`,
      postingTips: [
        '发布时间：12:00-14:00 / 21:00-23:00',
        '标题必须有情绪词："姐妹/家人/真的/终于/居然"',
        '避开：最/第一/唯一/100%/保证/包过（聚光拒审）',
        '前 3 秒不要只有 logo，要有文字痛点',
        '话题 5-10 个混着用：精准大词（#AI工程师）+ 泛化小词（#程序员日常）',
        '投聚光前：先自然发看 CTR，数据好的再投',
      ],
    },
  },
};
