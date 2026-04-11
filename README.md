# JR Academy Curriculum

课程大纲、Slide Deck 与 Marketing 素材的静态站点。

> 🆕 **设计 Product Manager / BA / AI 产品经理相关课程？** 看 [RESOURCES_PM_BA.md](./RESOURCES_PM_BA.md) — 13 个视频、7 个 wiki、15 张速查卡、17 个面试题库、6 个 roadmap、20 个 prompt-lab 的 slug 目录，首次落地于 `business-analyst` 课程。新课程可直接从这张单子里挑 slug 复用。

## 在线访问

| 页面 | URL |
|------|-----|
| 课程索引 | https://jiangren.com.au/curriculum/ |
| AI Adoption — 课程总览 | https://jiangren.com.au/curriculum/ai-adoption-bootcamp/curriculum.html |
| AI Adoption — Slide Deck | https://jiangren.com.au/curriculum/ai-adoption-bootcamp/ |
| AI Adoption — Phase 1 详情 | https://jiangren.com.au/curriculum/ai-adoption-bootcamp/phase1.html |
| AI Adoption — Phase 2 详情 | https://jiangren.com.au/curriculum/ai-adoption-bootcamp/phase2.html |
| AI Adoption — Phase 3 详情 | https://jiangren.com.au/curriculum/ai-adoption-bootcamp/phase3.html |
| AI Adoption — Phase 4 详情 | https://jiangren.com.au/curriculum/ai-adoption-bootcamp/phase4.html |
| AI Adoption — 内部资料 | https://jiangren.com.au/curriculum/ai-adoption-bootcamp/internal.html |

## 项目结构

```
curriculum/
├── ai-adoption-bootcamp/           # AI Adoption Specialist Bootcamp
│   ├── src/                        # React Slide Deck (13 slides)
│   │   ├── components/slides/      # S01_Cover ~ S13_CTA
│   │   ├── components/ui.tsx       # 共用 UI 组件
│   │   └── styles/theme.ts         # 色板与字体
│   ├── public/
│   │   ├── curriculum.html         # 课程总览 (含全部 Phase 详情)
│   │   ├── phase1.html             # Phase 1: AI 工具精通 + 角色定位
│   │   ├── phase2.html             # Phase 2: 业务场景实战
│   │   ├── phase3.html             # Phase 3: 组织采纳方法论
│   │   ├── phase4.html             # Phase 4: 毕业项目
│   │   ├── internal.html           # 内部资料 (Lab 映射/老师分工/JD 对比/Marketing)
│   │   └── styles.css              # 共用样式
│   ├── package.json
│   └── vite.config.ts
├── .github/workflows/
│   └── deploy.yml                  # GitHub Actions → SCP to nginx
├── DESIGN.md                       # Presentation 设计规范
├── TODO_CURRICULUM_V3.md           # V3 需求规格
└── README.md
```

## AI Adoption Specialist Bootcamp

8 周 Bootcamp，教业务人员如何在组织中系统性推广 AI。

### 课程结构

| Phase | 周次 | 内容 | 授课方式 |
|-------|------|------|---------|
| Phase 1 | Week 1-2 | AI 工具精通 + 角色定位 | 全部直播 (6 节) |
| Phase 2 | Week 3-5 | 业务场景实战 (Marketing/Sales/HR/Finance/Ops) | 每周 1 直播 + Lab/录播 + Clinic |
| Phase 3 | Week 6-7 | 组织采纳方法论 (评估/变革/治理/部署/规模化) | 全部直播 (6 节) |
| Phase 4 | Week 8 | 毕业项目 (选题→互审→Demo Day→证书) | 全程老师 |

### 7 个 Adoption 专属模块

| 课号 | 模块 | 为什么竞品没有 |
|------|------|--------------|
| 0.1 | 角色定位 & 全流程 Demo | 竞品第一课都是"AI 是什么" |
| 1.2 | AI 工具选型框架 | 竞品只教"怎么用"不教"怎么帮公司选" |
| 5.3 | AI Pilot 设计 | 从"我会用"到"我能帮公司用"的转折点 |
| 6.2 | 利益相关者管理 | 角色扮演说服 CFO，不是念 PPT |
| 6.3 | AI 预算与商业案例 | 没有 AI 课教写预算提案 |
| 7.2 | OpenClaw 组织级部署 | 没有课教给公司搭 AI 基础设施 |
| 7.3 | 向高层汇报 + 规模化 | 竞品在变革管理后就结束了 |

### 相关文档

| 文档 | 路径 |
|------|------|
| 完整 PRD | `docs/prd/AI_ADOPTION_SPECIALIST_BOOTCAMP_PRD.md` |
| Marketing 素材 | `docs/prd/AI_ADOPTION_BOOTCAMP_MARKETING.md` |
| JD 研究 | `ai-adoption-bootcamp/AI_ADOPTION_JD_RESEARCH.md` |

## 本地开发

```bash
cd ai-adoption-bootcamp
bun install
bun run dev
# Slide Deck: http://localhost:5173/
# 课程总览:   http://localhost:5173/curriculum.html
# Phase 详情: http://localhost:5173/phase1.html ~ phase4.html
# 内部资料:   http://localhost:5173/internal.html
```

## 部署

Push to `main` → GitHub Actions build → SCP to nginx → `jiangren.com.au/curriculum/`

### 需要的 GitHub Secrets

| Secret | 说明 |
|--------|------|
| `SERVER_HOST` | nginx 服务器公网 IP |
| `SERVER_USER` | SSH 用户名 (ubuntu) |
| `SSH_PRIVATE_KEY` | SSH 私钥 |

### Nginx 配置

```nginx
location /curriculum/ {
    alias /var/www/static/curriculum/;
    try_files $uri $uri/ $uri/index.html =404;
}
```

## 添加新课程

1. 复制 `ai-adoption-bootcamp/` 目录
2. 改 `vite.config.ts` 的 `base` 路径
3. 在 `deploy.yml` 中添加 build 和 copy 步骤
4. 遵循 `DESIGN.md` 设计规范
5. 使用 `bootcamp-curriculum-creator` skill 自动化流程
