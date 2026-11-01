# 联名课程页验收 · 2026-10-30

- 入口：custom.html；课程目录主入口已指向联名介绍，保留课堂课件和完整材料入口。
- 1440 与 390 像素实查截图；单一正式课程 H1、标题/OG 一致；双方原版 Logo 在首屏与页尾正确加载，无横向溢出。
- 实际打开完整活动文档、预填表单成果并操作 FAQ；台账可下载。参考成果明确为虚构、预生成示例，不冒充真实学生成果。
- 浏览器无页面错误或失败资源；页面标签与开发响应头均 noindex/nofollow，无新增统计脚本。
- 普通本地构建及 check-talk-decks.py 指定课件检查通过。
- 截图与检查报告：artifacts/codex-office-course-20261030/evidence-custom/（仓库根目录）。
- 未填写未确认日期、地址、价格、讲师；没有报名/支付写入，没有实际视频成片或学习效果承诺。
- 本地未提交、未推送、未部署、未触发 CI；未新建临时 worktree。

## 发布回读

2026-10-30 经 Owner 授权发布。最终提交 5efcf6126f9deffc53a53a7382ce12b6a3a84bca，Actions 41022974150 成功；公网 1440/390 检查、双方 Logo、FAQ、完整文档及表单成果通过。详见仓库根 artifacts/codex-office-course-20261030/DEPLOYMENT.md。上文为发布前检查记录。

## 2026-10-30 后续本地修订

六个成果入口与上午/午餐/下午宽时间段在1440/390检查通过；新30秒HTML分镜的播放、暂停、进度和镜头导航通过。清理课程内可见标签并同步原稿，PDF由对应HTML重新打印；三份表格8处文字更新，原公式逐项比对一致。现有海报由新增HTML原稿重新渲染，内部来源记录已更新。新版尚未部署，无CI。截图与检查记录位于仓库根artifacts/codex-office-course-20261030/evidence-cleanup/。

## 工作流动画

入口：custom.html#workflow；独立页：materials/learning-aids/workflow-motion.html。三条路线均对应既有案例或完整分镜成果。视觉为课堂流程动画，没有真实业务调用；发票2595 AUD及330 USD与既有台账一致，场地资料保留音响费用待确认项。1440/390双端检查自动推进、手动步骤、暂停、嵌入高度和减少动态效果；截图/报告：仓库根artifacts/codex-office-course-20261030/evidence-workflow-motion/。本轮无部署和CI。

## 图像模型素材验收

三张原生图像模型输出已复制进入课件并加载，无裁切或像素改写，透明范围0–255。1440/390下三条路径的图片、播放、手动步骤、暂停、键盘导航和嵌入高度检查通过；普通构建通过。截图/报告位于仓库根artifacts/codex-office-course-20261030/evidence-workflow-model/。本轮本地修改，未部署，未触发CI。

## 发票输入资料验收

资料入口materials/cases/01-invoice/input/index.html，完整PNG与PDF六份，课程成果卡及案例任务均可进入。五张图由内置image_gen生成，逐张检查并以本地Tesseract确认编号、日期、币种与金额；未调用OCR API。六份PDF一页、首尾未裁切，01/06文件完全相同，下载包含六PNG、六PDF、任务与规则。1440/390资料页、图片加载、ZIP下载及PDF入口通过；普通构建通过。证据在仓库根artifacts/codex-office-course-20261030/evidence-invoice-models/。本轮未部署、未触发CI。

## AU GST 最终验收

五张图片逐项核对Tax Invoice、ABN、澳式日期和GST三层金额；六份PDF均一页，01/06字节相同。OCR关键字段通过，Cloud白字含税330被Tesseract漏读，已目视核实。台账公式断言6/5/1/2650/265/2915/0通过，ABR登记核对单独记录、不批准GST credit。1440/390资料页、图片、ZIP下载、PDF入口和普通构建通过。证据：仓库根artifacts/codex-office-course-20261030/evidence-au-gst/；本轮未部署、未触发CI。

## 同页发票资料

入口custom.html#invoice-materials。默认显示完整第一份，六个按钮切换票面与对应GST金额；dialog支持放大/适应屏幕、Escape、关闭后焦点返回及滚动恢复，移动端可横向查看大图。PDF、台账及ZIP同区可达。1440/390图片、六份金额、对话框与下载检查通过，截图/报告见仓库根artifacts/codex-office-course-20261030/evidence-inline-invoices/。本轮未部署、未触发CI。
