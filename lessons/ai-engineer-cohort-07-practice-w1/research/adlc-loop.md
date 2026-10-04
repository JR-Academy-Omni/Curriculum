# ADLC 闭环图迁移说明

用户指定旧课件线上入口：
https://jracademy.ai/curriculum/lessons/vibe-coding-master-l2/?page=12

主任务已核对该页对应本地源码 `lessons/vibe-coding-master-l2/src/components/slides/S16d_ADLCFlow.tsx`。本次将循环图迁入 W1 独立页 `src/components/slides/V2_S16d_ADLCFlow.tsx`，保留五节点、循环连线与动画，不修改旧课源码。

## 本课教学定位

本页是 ADLC 五步循环主图：确认需求 → 写 PRD → 受控实现与检查 → 获准发布 → 分析反馈。`S08_ADLC.tsx` 的七项内容另定位为本周项目检查清单，不称正式七步 ADLC 定义；本周不要求完成部署。

## 对原页表述的修正

- 人负责方向、范围、验收与发布审批；Agent 在明确权限内执行任务。
- 不将整份 PRD 默认交给一个 Agent 自动部署。任务可以拆分，由一个或多个 Agent 协作。
- SDLC、Agile 的任务拆分与人工责任仍然适用；本课 ADLC 表示把 Agent 引入受控的开发、验证与反馈闭环。
- 部署节点需要明确授权和实际结果验证，不能将产出代码、测试通过、发布和线上验收混为一谈。
- 五步是本图的教学表达，不宣称 ADLC 是行业统一的固定步数标准。七项工程检查与循环阶段分别讲清楚。

## 视觉迁移

迁移内容引用 W1 `courseUi`，沿用原循环布局；补齐信息卡、主面板与标签圆角，确保浅色节点的辅助文字有足够对比。运行时引擎保持不变。构建、注册顺序与浏览器 QA 由主任务整合验证，本说明不预先声明通过。
