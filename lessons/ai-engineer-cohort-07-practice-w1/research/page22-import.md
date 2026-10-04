# 旧课 Page 22 的线上识别与 W1 复用

2026-10-04 通过真实 Chrome / Puppeteer 访问用户指定入口：
https://jracademy.ai/curriculum/lessons/vibe-coding-master-l2/?page=22

已读取页面正文并截图目视确认：22 / 25，标题“手把手做项目前，先定 repo：Monorepo 还是 Polyrepo?”，两栏比较 Monorepo 与 Polyrepo + Submodules 的结构、优缺点。截图是本次临时 QA 证据 `/tmp/vibe-l2-page22.png`，不作为课程公开资源。

## 精确源码映射

- 旧课：`lessons/vibe-coding-master-l2/src/components/slides/L2P04i_RepoStrategy.tsx`
- W1 已有：`src/components/slides/V2_L2P04i_RepoStrategy.tsx`
- 在核对时的 W1 `src/App.tsx` 里，该页已经注册在第 76 页、延伸参考部分，前页为 `V2_L2P02g_ValidationPath`，后页为 `V2_L2P05a_ManageADLC`。

该页已完整迁入并补齐圆角，依赖 W1 `courseUi`，没有外部图片。为避免重复，不再新增一份 slide。

## 建议的课堂位置

移到 W1 主线 Repo Map / Ground 段，紧接 `S14_Repo` 后、动手 `S16_GroundExercise` 前。先看实际仓库结构，再比较单仓与多仓选择，最后确定受控任务的允许目录与文件。重排后的具体页码以主任务更新的 App / SOURCE_MAP 为准。

## 表述复核建议

现页仍将“公司级项目 / 多团队”与 Polyrepo + submodules 绑定，属于教学建议但过于概括。建议明确：选择依据是发布边界、代码所有权、访问权限与协作方式；大团队也可使用 Monorepo，Polyrepo 不必采用 submodules。Agent 能读取多仓也需要明确路径与访问权限。此 note 仅记录建议，未修改已有 slide；由主任务在整合时决定。
