/** 来源：research/growth-tactics.md、research/case-discussions.md。
 * steps/principle/example为本课教学建议；example为模拟，非客户业绩。
 * sources为空时不补造品牌案例；官方机制不等于实效证明。 */
export interface Source { title: string; url: string }
export interface GrowthMethod { id: number; group: string; name: string; how: string; fit: string; avoid: string; metric: string; cost: string; evidence: string; sourceIds: string[]; steps: string[]; principle: string; example: string; sources: Source[] }
export const methods: GrowthMethod[] = [
  {
    "id": 1,
    "group": "第一批客户",
    "name": "精准直接接触",
    "how": "确定一个群体，逐个提出与其任务相关的小请求，记回复原话。",
    "fit": "能找到决策人的 B2B、咨询、服务。",
    "avoid": "画像不清、消息没有真实相关性。",
    "metric": "合格对话数/实际接触人数；销售工时。",
    "cost": "现金可少；时间投入较高。",
    "evidence": "Paul Graham 的逐个招募建议；具体邀请为课堂设计。",
    "sourceIds": [
      "PG"
    ],
    "steps": [
      "写出一个具体客户群与当前任务",
      "逐个提出一个相关的小请求",
      "记录有效回复、拒绝原话和下一步"
    ],
    "principle": "创始人亲自建立第一条客户反馈链",
    "example": "装修服务：询问一位正在处理多份报价的负责人。",
    "sources": [
      {
        "title": "Paul Graham：早期逐个招募与手动协助",
        "url": "https://www.paulgraham.com/ds.html"
      }
    ]
  },
  {
    "id": 2,
    "group": "第一批客户",
    "name": "温暖介绍",
    "how": "请已有联系人介绍一位符合画像的人；给一句可转述的介绍与具体请求。",
    "fit": "有相关业务关系，但还缺信任的首客项目。",
    "avoid": "介绍人与目标客户没有关联，或只追求介绍数量。",
    "metric": "合格介绍数/实际介绍数；试点意愿与成本。",
    "cost": "消耗关系与时间，通常不必付媒体费。",
    "evidence": "OPC 教学设计；不虚构具名成功案例。",
    "sourceIds": [],
    "steps": [
      "找与你目标客户有关的已有联系人",
      "给一句能转述的介绍与小请求",
      "追踪介绍是否变成合格对话"
    ],
    "principle": "借已有信任，让合格客户愿意谈",
    "example": "请同行介绍一位确实遇到报价跟进问题的人。",
    "sources": []
  },
  {
    "id": 3,
    "group": "第一批客户",
    "name": "先手动交付核心价值",
    "how": "在约定范围内手工完成核心任务，观察客户是否采用、愿否付费，再决定标准化。",
    "fit": "需求明确但完整自动化产品尚不成熟。",
    "avoid": "每位客户要完全不同的交付，且没有可复用任务。",
    "metric": "付费试点数；采用情况；每单交付工时。",
    "cost": "交付时间较高，需限制范围。",
    "evidence": "Paul Graham 提出的手工解决问题路径；不是所有服务都要转软件。",
    "sourceIds": [
      "PG"
    ],
    "steps": [
      "约定一个小范围、可验收的交付",
      "先手动完成，观察客户是否采用",
      "用付费与工时决定是否标准化"
    ],
    "principle": "先验证价值交换，再扩大自动化",
    "example": "先手工交付一份可审阅的跟进清单。",
    "sources": [
      {
        "title": "Paul Graham：早期逐个招募与手动协助",
        "url": "https://www.paulgraham.com/ds.html"
      }
    ]
  },
  {
    "id": 4,
    "group": "第一批客户",
    "name": "进入垂直市场",
    "how": "做一个面向明确任务的产品/模板，提交到已有相关用户的市场；优化样例与说明。",
    "fit": "模板、插件、可下载工具，平台本身有匹配用户。",
    "avoid": "产品不匹配市场、还没符合审核或支付条件。",
    "metric": "市场来源有效访问→使用/购买；扣费后贡献。",
    "cost": "制作、平台审核、费用与维护。",
    "evidence": "Notion 官方允许创作者提交和销售模板；不保证平台给流量。",
    "sourceIds": [
      "NO"
    ],
    "steps": [
      "选择已有目标用户的垂直市场",
      "制作解决一个任务的模板或工具",
      "提交审核，用实际使用和购买读数"
    ],
    "principle": "去已经聚集相关需求的地方",
    "example": "把“装修报价跟进表”做成能独立使用的模板。",
    "sources": [
      {
        "title": "Notion 官方：模板 Marketplace",
        "url": "https://www.notion.com/help/selling-on-marketplace"
      }
    ]
  },
  {
    "id": 5,
    "group": "搜索需求",
    "name": "问题型搜索内容",
    "how": "围绕一个真实问题写可执行教程，附样例和相关下一步。",
    "fit": "用户会主动搜索的问题，能提供实用答案。",
    "avoid": "急需立即首单、没有真实问题知识却批量写文。",
    "metric": "相关搜索带来的有效询问；不是单看阅读。",
    "cost": "现金可少，长期内容与维护工时。",
    "evidence": "依据搜索与渠道框架；具体题目为课堂设计。",
    "sourceIds": [
      "TR"
    ],
    "steps": [
      "找客户正在搜索的具体问题",
      "写可执行答案，展示样例",
      "给相关下一步，追踪有效询问"
    ],
    "principle": "承接已经存在的解决问题意图",
    "example": "回答“报价发出后怎样安排跟进”，附实际流程。",
    "sources": [
      {
        "title": "Traction 出版社介绍：19 个渠道与 Bullseye",
        "url": "https://www.penguinrandomhouse.com/books/319121/traction-by-gabriel-weinberg-and-justin-mares/9781591848363/"
      }
    ]
  },
  {
    "id": 6,
    "group": "搜索需求",
    "name": "比较与替代方案内容",
    "how": "诚实比较现有解决路径的成本、限制和适用场景，展示你的差异。",
    "fit": "用户正在选供应商或工具。",
    "avoid": "没有实际体验、比较只剩无证据的自我夸奖。",
    "metric": "比较页有效询问/相关访客；最终成交。",
    "cost": "研究与保持信息更新。",
    "evidence": "课堂设计，不把未核对竞品差异写成事实。",
    "sourceIds": [],
    "steps": [
      "列买家正在比较的替代路径",
      "用真实体验比较成本与边界",
      "展示适用场景，引导下一步判断"
    ],
    "principle": "在买家作选择时提供判断证据",
    "example": "比较表格、现有CRM和手动服务，写清各自边界。",
    "sources": []
  },
  {
    "id": 7,
    "group": "搜索需求",
    "name": "有数据支撑的 programmatic SEO",
    "how": "用独特数据做少量高质量场景页，验证需求与价值后再扩大。",
    "fit": "集成、地点、目录等确实各有独特答案的产品。",
    "avoid": "只有换地名/关键词，没有独特内容和维护能力。",
    "metric": "相关查询曝光→有效访问→价值动作。",
    "cost": "数据、工程、索引和内容维护，起步投入较大。",
    "evidence": "Zapier 的应用和集成页；Google 政策说明不能靠规模化低价值内容。",
    "sourceIds": [
      "ZA",
      "GO"
    ],
    "steps": [
      "整理独特数据与真实场景",
      "先做少量能解决问题的页面",
      "验证需求，再扩大并持续维护"
    ],
    "principle": "每个场景都有独特答案，才值得扩展",
    "example": "只有真实不同的任务与数据，才做不同场景页。",
    "sources": [
      {
        "title": "Zapier 自身网站：programmatic SEO 与集成页",
        "url": "https://zapier.com/blog/programmatic-seo/"
      },
      {
        "title": "Google 官方：规模化内容滥用政策",
        "url": "https://developers.google.com/search/docs/essentials/spam-policies"
      }
    ]
  },
  {
    "id": 8,
    "group": "搜索需求",
    "name": "免费小工具",
    "how": "从付费价值拆出一个小问题，做计算器/检查器/生成样例，提供相关下一步。",
    "fit": "用户可快速输入并得到可用结果，与你的收费问题紧密相关。",
    "avoid": "工具吸引的人不会购买；单次使用边际成本过高。",
    "metric": "目标用户完成工具后进入询问/试点；单次服务成本。",
    "cost": "制作与维护；有 API 成本时必须算入单位经济。",
    "evidence": "HubSpot Website Grader 提供网站检查报告；后续转化效果未核实。",
    "sourceIds": [
      "HG"
    ],
    "steps": [
      "从收费价值拆出一个小问题",
      "做检查器、计算器或手动诊断",
      "给自然的询问或付费入口"
    ],
    "principle": "先让客户体验一小块相关价值",
    "example": "先用表格做一个报价跟进遗漏检查器。",
    "sources": [
      {
        "title": "HubSpot：免费 Website Grader",
        "url": "https://blog.hubspot.com/marketing/website-grader-relaunch"
      }
    ]
  },
  {
    "id": 9,
    "group": "内容与教育",
    "name": "资料换一个相关下一步",
    "how": "做实际能用的清单/模板，说明取得方式与后续联系，由用户选择。",
    "fit": "客户需要准备资料、评估问题或学习工作方法。",
    "avoid": "只想拿免费资料的人与买家不匹配。",
    "metric": "目标客户领取→使用→相关对话；退订与维护工时。",
    "cost": "制作与小范围推广工时。",
    "evidence": "HubSpot 有模板和资源库；具体留资流程按自己的价值设计。",
    "sourceIds": [
      "HR"
    ],
    "steps": [
      "做一份客户真的能用的资料",
      "说明领取与后续联系方式",
      "看领取后使用与相关对话"
    ],
    "principle": "用实用资料连接一个真实任务",
    "example": "提供“首次客户对话记录表”，附具体填法。",
    "sources": [
      {
        "title": "HubSpot：资源、模板与电子书",
        "url": "https://www.hubspot.com/resources"
      }
    ]
  },
  {
    "id": 10,
    "group": "内容与教育",
    "name": "小型工作坊或演示课",
    "how": "围绕一个任务做演示，让参与者完成一小步，再给明确的服务/产品入口。",
    "fit": "需要教育、信任或展示效果的复杂产品与服务。",
    "avoid": "主题过泛、出席者不是买家、准备成本无法承受。",
    "metric": "匹配出席者→合格对话→付费试点。",
    "cost": "备课与交付时间较高。",
    "evidence": "课堂设计；不把活动人数当作付费客户。",
    "sourceIds": [
      "TR"
    ],
    "steps": [
      "选择一个学员正在做的任务",
      "用演示带他完成一小步",
      "用可试的产品或服务接住需求"
    ],
    "principle": "用可完成的小任务建立理解与信任",
    "example": "举办一个能现场整理一份真实跟进记录的小课。",
    "sources": [
      {
        "title": "Traction 出版社介绍：19 个渠道与 Bullseye",
        "url": "https://www.penguinrandomhouse.com/books/319121/traction-by-gabriel-weinberg-and-justin-mares/9781591848363/"
      }
    ]
  },
  {
    "id": 11,
    "group": "内容与教育",
    "name": "公开构建或社区答疑",
    "how": "在相关社区持续展示真实进展、实用解决过程和客户学到什么。",
    "fit": "创始人能提供持续相关内容，受众与产品有交集。",
    "avoid": "只吸引同行围观，没有真实购买路径。",
    "metric": "社区来源匹配询问；有效使用与工时。",
    "cost": "长期投入；平台入口不是独立增长机制。",
    "evidence": "课堂设计；公开内容先遵守该社区交流规则。",
    "sourceIds": [
      "TR"
    ],
    "steps": [
      "在目标人群的社区回答真问题",
      "公开真实过程、成果与学习",
      "记录相关询问，而非只看围观"
    ],
    "principle": "持续提供相关帮助，让人知道你能做什么",
    "example": "展示你怎样处理一个真实任务，说明还没验证什么。",
    "sources": [
      {
        "title": "Traction 出版社介绍：19 个渠道与 Bullseye",
        "url": "https://www.penguinrandomhouse.com/books/319121/traction-by-gabriel-weinberg-and-justin-mares/9781591848363/"
      }
    ]
  },
  {
    "id": 12,
    "group": "内容与教育",
    "name": "媒体或 Podcast 的具体故事",
    "how": "把可核实成果、行业观察或客户问题写成一个有价值的故事，找匹配受众的节目。",
    "fit": "已有值得讲的独特事实，目标受众会看该媒体。",
    "avoid": "没有新闻点，靠夸大成绩换曝光。",
    "metric": "节目/文章来源的相关访问与询问。",
    "cost": "研究、准备与外联时间；结果不确定。",
    "evidence": "Traction 的渠道选择方向；未声称存在一个已获报道的 OPC 项目。",
    "sourceIds": [
      "TR"
    ],
    "steps": [
      "提炼一个有证据的独特故事",
      "找到受众匹配的节目或媒体",
      "提供材料，追踪来源与询问"
    ],
    "principle": "用值得报道的事实连接匹配受众",
    "example": "从有证据的项目学习提炼一个具体行业故事。",
    "sources": [
      {
        "title": "Traction 出版社介绍：19 个渠道与 Bullseye",
        "url": "https://www.penguinrandomhouse.com/books/319121/traction-by-gabriel-weinberg-and-justin-mares/9781591848363/"
      }
    ]
  },
  {
    "id": 13,
    "group": "借用信任",
    "name": "真实客户案例与评价",
    "how": "取得授权，写清问题、过程、成果证据和适用边界，放在客户决策处。",
    "fit": "已有真实交付，客户愿意讲。",
    "avoid": "还无真实客户，或不能证明结果属于本项目。",
    "metric": "看过案例的人进入合格对话；成交与退单。",
    "cost": "访谈、整理与客户确认。",
    "evidence": "课堂设计；无真实成果时先展示教学样例并标注。",
    "sourceIds": [],
    "steps": [
      "获得真实客户的分享授权",
      "写问题、过程和可核对结果",
      "放在买家实际作决定的位置"
    ],
    "principle": "用可核对交付降低购买不确定性",
    "example": "客户同意后，展示实际采用的交付与反馈。",
    "sources": []
  },
  {
    "id": 14,
    "group": "借用信任",
    "name": "合作方联合内容或活动",
    "how": "找服务同一群体但不直接冲突的合作方，共同交付一份内容或活动。",
    "fit": "双方各有相关受众和可信专业能力。",
    "avoid": "客户群不重合，或一方无法明确投入。",
    "metric": "合作方来源匹配客户数；双方准备工时。",
    "cost": "协调与联合交付成本。",
    "evidence": "OPC 教学设计；不要虚构品牌联名案例。",
    "sourceIds": [],
    "steps": [
      "找服务同一客户群的伙伴",
      "共同提供一份有用内容或活动",
      "约定分工，追踪匹配客户与工时"
    ],
    "principle": "共享相关受众，共同提供价值",
    "example": "与接触同一买家的会计或行业服务商合作。",
    "sources": []
  },
  {
    "id": 15,
    "group": "借用信任",
    "name": "联盟佣金",
    "how": "建立匹配伙伴、可归因链接与合格成交规则，按已核对成交支付佣金。",
    "fit": "毛利与履约可覆盖佣金，合作方有相关受众。",
    "avoid": "尚无稳定转化、不知道什么算合格客户。",
    "metric": "归因成交、退款与佣金后的贡献。",
    "cost": "佣金、归因与伙伴维护。",
    "evidence": "Shopify 官方 Affiliate Program 按合格付费推荐提供佣金。",
    "sourceIds": [
      "SA"
    ],
    "steps": [
      "寻找受众与你买家匹配的伙伴",
      "明确合格成交、佣金与退款规则",
      "用可归因记录核对再结算"
    ],
    "principle": "把匹配分销与合格成交联系起来",
    "example": "若客户经济贡献可覆盖佣金，再设计伙伴推荐。",
    "sources": [
      {
        "title": "Shopify 官方：Affiliate Program",
        "url": "https://www.shopify.com/affiliates"
      }
    ]
  },
  {
    "id": 16,
    "group": "借用信任",
    "name": "渠道合作与代销",
    "how": "与能接触买家的服务商约定介绍/销售/支持分工，先做一个小范围合作。",
    "fit": "产品成熟，渠道伙伴掌握客户入口，利益可对齐。",
    "avoid": "交付不稳定、支持责任与分成不清。",
    "metric": "伙伴合格机会→成交；服务成本与贡献。",
    "cost": "培训、支持、利润分享与协同。",
    "evidence": "课堂设计；区别于只发链接收佣金。",
    "sourceIds": [],
    "steps": [
      "确认渠道伙伴能接触买家",
      "约定销售、交付与支持分工",
      "先小范围合作，再评估贡献"
    ],
    "principle": "借伙伴入口，同时把责任分清",
    "example": "让伙伴介绍或销售，你负责清楚约定的交付。",
    "sources": []
  },
  {
    "id": 17,
    "group": "推荐与产品传播",
    "name": "双边推荐奖励",
    "how": "在用户确认得到价值后给相关邀请入口，设双方奖励、兑现动作与归因。",
    "fit": "已有满意客户，奖励与产品价值相关。",
    "avoid": "还没价值交付、奖励引来不匹配用户。",
    "metric": "被推荐人完成价值/付费；奖励成本与异常来源。",
    "cost": "奖励成本、防滥用与维护。",
    "evidence": "Dropbox 官方推荐机制给双方空间，兑现有条件。",
    "sourceIds": [
      "DB"
    ],
    "steps": [
      "在用户获得价值后提出介绍",
      "给双方相关奖励，设兑现条件",
      "追踪新用户获值与奖励成本"
    ],
    "principle": "推荐理由要与用户价值一致",
    "example": "客户确认清单有用后，再讨论介绍同类同行。",
    "sources": [
      {
        "title": "Dropbox 官方：推荐空间奖励",
        "url": "https://help.dropbox.com/storage-space/how-much-free-space"
      }
    ]
  },
  {
    "id": 18,
    "group": "推荐与产品传播",
    "name": "协作邀请",
    "how": "让当前用户在真实协作任务中邀请必要成员，而不是强行邀请才能用。",
    "fit": "团队、协作、多人交付产品。",
    "avoid": "任务本来是单人使用，邀请没有价值。",
    "metric": "邀请→加入→共同完成任务；团队留存。",
    "cost": "产品工程与权限/支持。",
    "evidence": "Slack 官方成员邀请；传播效果属于待验证分析。",
    "sourceIds": [
      "SL"
    ],
    "steps": [
      "让邀请服务于真实协作任务",
      "让受邀者加入并共同完成任务",
      "验证团队获值与后续使用"
    ],
    "principle": "邀请是完成任务的一部分",
    "example": "协作文档工具：邀请确实要一起完成任务的人。",
    "sources": [
      {
        "title": "Slack 官方：邀请工作区成员",
        "url": "https://slack.com/help/articles/201330256-Invite-new-members-to-your-workspace"
      }
    ]
  },
  {
    "id": 19,
    "group": "推荐与产品传播",
    "name": "可分享成果与个性化报告",
    "how": "用真实使用数据生成有意义的成果，允许用户决定是否展示，给相关入口。",
    "fit": "成果有身份、进步或业务展示价值。",
    "avoid": "没有有意义数据，或成果不能安全分享。",
    "metric": "主动分享→匹配访问→关键使用；分享意愿。",
    "cost": "数据、设计与生成成本。",
    "evidence": "Spotify Wrapped 提供个性化故事和分享卡；不编造新增用户效果。",
    "sourceIds": [
      "SP"
    ],
    "steps": [
      "用真实数据做有意义的成果",
      "让用户自己决定是否分享",
      "追踪分享后谁进入实际使用"
    ],
    "principle": "值得展示的成果，可能带来新入口",
    "example": "项目报告：只把客户愿意公开的真实成果做成卡片。",
    "sources": [
      {
        "title": "Spotify 官方：2025 Wrapped 分享卡",
        "url": "https://newsroom.spotify.com/2025-12-03/2025-wrapped-user-experience/"
      }
    ]
  },
  {
    "id": 20,
    "group": "推荐与产品传播",
    "name": "可嵌入工具与来源露出",
    "how": "让用户将有价值的表单/预约/小工具嵌入自己的场景；来源链接清楚但不妨碍任务。",
    "fit": "工具会被客户以外的其他人实际使用。",
    "avoid": "没有第三方曝光，或品牌露出破坏客户体验。",
    "metric": "外部使用→来源访问→真实激活。",
    "cost": "产品、嵌入兼容与维护。",
    "evidence": "Typeform 官方嵌入和品牌规则；实际增长转化尚需量测。",
    "sourceIds": [
      "TF",
      "TY"
    ],
    "steps": [
      "把有用的工具放入客户场景",
      "保留清楚且克制的来源入口",
      "验证外部使用是否带来新激活"
    ],
    "principle": "使用工具的过程，也产生产品接触",
    "example": "预约或表单工具：让第二个人完成一个真实任务。",
    "sources": [
      {
        "title": "Typeform 官方：嵌入表单",
        "url": "https://help.typeform.com/hc/en-us/articles/360029249212-Embed-your-form"
      },
      {
        "title": "Typeform 官方：表单品牌露出",
        "url": "https://help.typeform.com/hc/en-us/articles/360029262372-Remove-Typeform-branding-from-your-forms"
      }
    ]
  },
  {
    "id": 21,
    "group": "激活",
    "name": "样例或短演示",
    "how": "让候选客户先看到与自己任务相近的实际交付，下一步足够小。",
    "fit": "结果难以想象、信任不足或设置复杂。",
    "avoid": "演示与实际交付差距大。",
    "metric": "看样例→真实尝试→关键任务完成。",
    "cost": "样例制作与讲解时间。",
    "evidence": "Airbnb 展示与 Canva 观察提供启发；具体演示为课堂设计。",
    "sourceIds": [
      "PG",
      "CV"
    ],
    "steps": [
      "用相近任务展示真实样例",
      "让客户看懂范围与最后的交付",
      "提出一个小试用或试点请求"
    ],
    "principle": "先让人看懂成果，再要求较大承诺",
    "example": "给客户看一份脱敏的最终交付，而非长功能列表。",
    "sources": [
      {
        "title": "Paul Graham：早期逐个招募与手动协助",
        "url": "https://www.paulgraham.com/ds.html"
      },
      {
        "title": "Canva 创始人回顾：年鉴、渠道尝试与用户观察",
        "url": "https://www.canva.com/newsroom/news/melanie-perkins-21-questions-part-1/"
      }
    ]
  },
  {
    "id": 22,
    "group": "激活",
    "name": "模板化第一项任务",
    "how": "默认给一个与目标场景相关的起点，让用户填自己的内容并完成一次价值任务。",
    "fit": "空白起步难，任务能用模板降低认知负担。",
    "avoid": "模板掩盖问题、用户始终无法做自己的任务。",
    "metric": "完成第一份可用输出/尝试人数；后续复用。",
    "cost": "模板与体验设计。",
    "evidence": "Canva 创始人用户观察启发；具体默认模板实验属课堂设计。",
    "sourceIds": [
      "CV"
    ],
    "steps": [
      "选一个常见且具体的首次任务",
      "提供可编辑的默认起点",
      "让用户用自己的内容完成输出"
    ],
    "principle": "把空白起步变成可完成的首次任务",
    "example": "用默认清单，让用户填自己的资料并得到输出。",
    "sources": [
      {
        "title": "Canva 创始人回顾：年鉴、渠道尝试与用户观察",
        "url": "https://www.canva.com/newsroom/news/melanie-perkins-21-questions-part-1/"
      }
    ]
  },
  {
    "id": 23,
    "group": "激活",
    "name": "人工 onboarding",
    "how": "预约一次有限帮助，观察用户用自己的资料完成任务，记录障碍并整理成固定流程。",
    "fit": "少量高价值客户、任务设置比较复杂。",
    "avoid": "低价产品承担不起支持，或每次完全重做。",
    "metric": "首次价值完成率、达成时间、支持工时。",
    "cost": "每位客户的帮助时间。",
    "evidence": "Stripe 早期协助设置案例。",
    "sourceIds": [
      "PG"
    ],
    "steps": [
      "约定一次有时间边界的帮助",
      "观察用户用自己的资料完成任务",
      "记录障碍，整理成固定流程"
    ],
    "principle": "把愿意尝试推进到实际获得价值",
    "example": "观察一个人从资料导入走到完成首份结果。",
    "sources": [
      {
        "title": "Paul Graham：早期逐个招募与手动协助",
        "url": "https://www.paulgraham.com/ds.html"
      }
    ]
  },
  {
    "id": 24,
    "group": "激活",
    "name": "有期限的免费试用",
    "how": "给用户在约定窗口体验核心价值，明确开始/结束和转付费路径。",
    "fit": "价值能在有限时间看见，体验成本可控。",
    "avoid": "长销售周期、价值难在试期体现、只吸引重复试用。",
    "metric": "试用激活→付费；支持与资源成本。",
    "cost": "未付费阶段的使用与支持成本。",
    "evidence": "Slack 官方付费计划试用；不照搬其具体时长或条款。",
    "sourceIds": [
      "ST"
    ],
    "steps": [
      "说明试用范围、窗口与结束方式",
      "让用户在窗口内体验核心价值",
      "用激活、付费和成本决定继续"
    ],
    "principle": "让核心价值在有限窗口内被体验",
    "example": "先确认你的价值是否能在约定试期内体现。",
    "sources": [
      {
        "title": "Slack 官方：付费计划试用",
        "url": "https://slack.com/help/articles/202878523-Try-a-paid-Slack-plan-for-free"
      }
    ]
  },
  {
    "id": 25,
    "group": "成交与商业模式",
    "name": "信息匹配的单一落地页",
    "how": "入口承诺、页面证明与下一步一致；围绕一个客户任务与一个主要动作。",
    "fit": "已有相关访问，但用户不知道下一步。",
    "avoid": "没有匹配流量，过早做复杂多版本页面。",
    "metric": "相关访客→有效预约/询问→成交。",
    "cost": "页面与真实样例制作。",
    "evidence": "课堂设计；成交不是按钮点击。",
    "sourceIds": [],
    "steps": [
      "让入口承诺与页面内容一致",
      "展示相关证据与一个主要动作",
      "追踪有效询问再到成交"
    ],
    "principle": "承诺、证据和下一步保持一致",
    "example": "“报价跟进”入口，接到同一任务的样例与小试点。",
    "sources": []
  },
  {
    "id": 26,
    "group": "成交与商业模式",
    "name": "小范围付费试点",
    "how": "降低首次承诺范围，明确价格、边界、时间与验收，再用交付讨论后续合作。",
    "fit": "服务、咨询、B2B，买家需要先验证交付。",
    "avoid": "低价但仍交付大量定制工作，或“试点”没有验收。",
    "metric": "付费试点→完成验收→后续订单；经济贡献。",
    "cost": "首单销售与履约时间。",
    "evidence": "OPC 教学设计；区别于免费测试和人工协助。",
    "sourceIds": [],
    "steps": [
      "缩小首次付费的交付范围",
      "明确价格、时间、边界与验收",
      "用真实交付讨论后续合作"
    ],
    "principle": "用小范围真实付费验证合作价值",
    "example": "出售一次范围清楚的小诊断，而非一次承诺大包。",
    "sources": []
  },
  {
    "id": 27,
    "group": "成交与商业模式",
    "name": "持续免费层加付费边界",
    "how": "免费层解决一个真实任务，付费为明确的更深价值、容量或业务能力。",
    "fit": "边际成本可控，用户可自行理解并使用。",
    "avoid": "每次使用都有较高成本、免费用户没有自然付费需求。",
    "metric": "免费激活→自然付费；资源成本与留存。",
    "cost": "持续免费交付成本，需控制范围。",
    "evidence": "Slack 文档显示免费工作区与付费升级路径。",
    "sourceIds": [
      "ST",
      "SL"
    ],
    "steps": [
      "免费层完成一个真实基础任务",
      "付费层对应更深价值或容量",
      "算持续成本与自然付费路径"
    ],
    "principle": "免费与付费要连接自然的价值升级",
    "example": "免费做基础整理，付费提供确有需求的深层任务。",
    "sources": [
      {
        "title": "Slack 官方：付费计划试用",
        "url": "https://slack.com/help/articles/202878523-Try-a-paid-Slack-plan-for-free"
      },
      {
        "title": "Slack 官方：邀请工作区成员",
        "url": "https://slack.com/help/articles/201330256-Invite-new-members-to-your-workspace"
      }
    ]
  },
  {
    "id": 28,
    "group": "成交与商业模式",
    "name": "打包、席位或用量扩展",
    "how": "按买家真正需要的交付/团队规模/用量设计下一档，先访谈实际客户并小测。",
    "fit": "已经有付费和重复价值，扩展能增加客户效用。",
    "avoid": "没首单就堆套餐，或涨价不提供对应价值。",
    "metric": "升级后贡献、退款/流失、支持成本。",
    "cost": "研究、定价与交付复杂度。",
    "evidence": "Brian Balfour 的 HubSpot Sales 历史模式匹配回顾。",
    "sourceIds": [
      "BB"
    ],
    "steps": [
      "访谈已经付费的客户需求",
      "按交付、团队或用量设计下一档",
      "测试贡献与流失，不只看客单价"
    ],
    "principle": "收入扩展必须对应客户新增价值",
    "example": "客户需要更多团队协作时，再讨论席位或服务范围。",
    "sources": [
      {
        "title": "Brian Balfour：HubSpot Sales 渠道与模式回顾",
        "url": "https://brianbalfour.com/essays/hubspot-growth-framework-100m"
      }
    ]
  },
  {
    "id": 29,
    "group": "留存与复购",
    "name": "连续行动与进度承诺",
    "how": "围绕自然高频任务记录连续进度；提供合理休息，观察是否增加有用行动。",
    "fit": "学习、训练、习惯型高频产品。",
    "avoid": "低频购买/咨询，为打卡而打卡。",
    "metric": "自然周期留存、实际价值任务、放弃与负担。",
    "cost": "行为设计与产品维护。",
    "evidence": "Duolingo 官方记录了连续学习相关 A/B 实验。",
    "sourceIds": [
      "DU"
    ],
    "steps": [
      "找到自然高频且有价值的行动",
      "记录进度，设计承诺与合理休息",
      "量测留存，同时看实际任务成果"
    ],
    "principle": "连续行动需要自然的高频价值",
    "example": "低频咨询项目不必打卡；高频练习先看实际完成。",
    "sources": [
      {
        "title": "Duolingo 官方：连续学习的两个 A/B 实验",
        "url": "https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals/"
      }
    ]
  },
  {
    "id": 30,
    "group": "留存与复购",
    "name": "行为触发的及时提醒",
    "how": "在客户开始但未完成任务时提醒一个有用下一步；完成即退出，控制联系频率。",
    "fit": "客户有真实未完成任务且愿意接收提醒。",
    "avoid": "没有任务状态、重复提醒或一直打扰已完成客户。",
    "metric": "完成任务/被提醒用户；退订与投诉。",
    "cost": "事件记录、消息与维护。",
    "evidence": "Mailchimp 弃购邮件是官方流程示例；经典流程不等于最新产品UI。",
    "sourceIds": [
      "MA"
    ],
    "steps": [
      "识别客户开始但未完成的任务",
      "在合适时点提醒一个下一步",
      "完成就退出，控制重复与频率"
    ],
    "principle": "提醒一个已开始的任务，而非泛泛群发",
    "example": "用户草稿未完成时提醒；完成后不再催促。",
    "sources": [
      {
        "title": "Mailchimp 官方：经典弃购邮件流程",
        "url": "https://mailchimp.com/help/create-a-classic-abandoned-cart-email/"
      }
    ]
  },
  {
    "id": 31,
    "group": "留存与复购",
    "name": "周期性价值报告",
    "how": "按实际使用记录提供进步、成果和可做的下一步，按任务周期呈现。",
    "fit": "价值累积但用户容易忘记的产品。",
    "avoid": "没有真实价值数据，靠虚构节省时间凑报告。",
    "metric": "报告后实际回访/任务完成；不是只看打开率。",
    "cost": "真实数据、内容和发送维护。",
    "evidence": "Grammarly 历史官方每周写作报告；不主张当前UI相同。",
    "sourceIds": [
      "GR"
    ],
    "steps": [
      "按自然周期整理真实使用结果",
      "展示进步和一个具体下一步",
      "追踪回访与有用行动"
    ],
    "principle": "把累积的客户价值变得可见",
    "example": "报告只写真实交付、使用与下一步，不造节省工时。",
    "sources": [
      {
        "title": "Grammarly 历史官方介绍：每周写作报告",
        "url": "https://www.grammarly.com/blog/product/introducing-grammarly-insights/"
      }
    ]
  },
  {
    "id": 32,
    "group": "留存与复购",
    "name": "分原因唤回流失客户",
    "how": "按客户原先的问题与流失原因区分对象；产品改善后给一个相关回访理由。",
    "fit": "有真实流失记录，原因可处理，客户允许联系。",
    "avoid": "所有人一律打折，或问题仍没解决。",
    "metric": "回归后有用行动与持续付费；优惠与投诉成本。",
    "cost": "分析、改进和联系时间。",
    "evidence": "Shopify 官方留存建议支持 winback；本条实施为课堂设计。",
    "sourceIds": [
      "SR"
    ],
    "steps": [
      "先区分客户离开的真实原因",
      "改善对应问题，给相关回访理由",
      "记录回归后价值、付费与成本"
    ],
    "principle": "回访理由要对应流失原因",
    "example": "若客户因错误离开，先修错误，再邀请回来验证。",
    "sources": [
      {
        "title": "Shopify 官方建议：留存、补货、唤回",
        "url": "https://www.shopify.com/blog/customer-retention-strategies"
      }
    ]
  },
  {
    "id": 33,
    "group": "留存与复购",
    "name": "自然周期的复购或补货",
    "how": "根据实际交付/使用周期，在下一次需求前提供补货、复查或续服务入口。",
    "fit": "消耗品、定期维护、周期性专业服务。",
    "avoid": "没有自然复购需求，强行增加频率。",
    "metric": "到期客户复购/成熟客户数；毛利与取消。",
    "cost": "周期数据与履约能力。",
    "evidence": "Shopify 官方建议中的 replenishment reminders。",
    "sourceIds": [
      "SR"
    ],
    "steps": [
      "找到实际需求再次发生的周期",
      "在需求前给补货或续服务入口",
      "记录成熟客户的复购与贡献"
    ],
    "principle": "跟随自然需求周期，而非制造频率",
    "example": "维护服务跟着实际维护周期提供下一次预约。",
    "sources": [
      {
        "title": "Shopify 官方建议：留存、补货、唤回",
        "url": "https://www.shopify.com/blog/customer-retention-strategies"
      }
    ]
  },
  {
    "id": 34,
    "group": "付费获客",
    "name": "高意图搜索广告",
    "how": "先验证明确任务关键词、相关页面与转化事件，在可承受预算内测试一组意图。",
    "fit": "买家已有搜索意图，经济贡献可支持成本。",
    "avoid": "不知道可承受CAC、页面无验证、关键词太宽。",
    "metric": "合格线索与成交成本；不是只看CTR。",
    "cost": "媒体费、页面与管理工时。",
    "evidence": "Google Ads 官方 Search Campaign 功能，不是效果案例。",
    "sourceIds": [
      "GS"
    ],
    "steps": [
      "确定一组明确任务的搜索意图",
      "接到相关页面与真实转化事件",
      "限定预算，读合格线索与成交成本"
    ],
    "principle": "付费承接已有意图，成本必须能承受",
    "example": "先写一组真实任务词和预算上限，不当堂开投放。",
    "sources": [
      {
        "title": "Google Ads 官方：Search Campaign",
        "url": "https://support.google.com/google-ads/answer/9510373"
      }
    ]
  },
  {
    "id": 35,
    "group": "付费获客",
    "name": "信息流创意探索",
    "how": "面向一个客户群和一项提议，小范围比较信息表达或样例呈现；记录分配与样本限制。",
    "fit": "结果可展示，目标受众可识别，预算允许学习。",
    "avoid": "每版都换人群/价格/渠道，却声称确定因果。",
    "metric": "匹配客户询问成本、成交与素材制作成本。",
    "cost": "媒体费与持续素材工时。",
    "evidence": "课堂设计；不引用未核对平台界面或许诺分流效果。",
    "sourceIds": [],
    "steps": [
      "围绕一个客户群与一项提议",
      "小范围探索表达或样例呈现",
      "记样本与分配，避免轻率因果结论"
    ],
    "principle": "测试信息表达，仍要看客户质量",
    "example": "固定客户群与提议，比较两种可解释的表达。",
    "sources": []
  },
  {
    "id": 36,
    "group": "付费获客",
    "name": "已有访客再营销",
    "how": "对实际访问或使用过的人设计相关下一步，排除已完成者并按合适窗口观察。",
    "fit": "已经有足够符合平台要求的访客和合法数据基础。",
    "avoid": "没有访客、受众太小、任务不相关或条件不满足。",
    "metric": "增量成交/有效回访；频率与总成本。",
    "cost": "广告费、事件与分群维护。",
    "evidence": "Google Ads 官方访客数据分群功能；平台归因不自动证明增量。",
    "sourceIds": [
      "RE"
    ],
    "steps": [
      "按实际访客行为定义相关对象",
      "设计下一步，排除已完成者",
      "检查增量、频率与总成本"
    ],
    "principle": "已有接触基础上提供相关下一步",
    "example": "没有访客与合格数据基础时，先选其他起手动作。",
    "sources": [
      {
        "title": "Google Ads 官方：网站访客数据分群",
        "url": "https://support.google.com/google-ads/answer/2472738"
      }
    ]
  }
];
