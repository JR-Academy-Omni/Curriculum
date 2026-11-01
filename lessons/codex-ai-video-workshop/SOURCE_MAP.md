# 内容与来源

v7完整课程材料来自本次会话已授权的 Downloads 包，逐文件复制到public/materials。

官方技术来源：https://github.com/heygen-com/hyperframes 、https://www.remotion.dev/docs/ai/skills 、https://www.remotion.dev/docs/cli/skills 、https://www.remotion.dev/docs/cli/render 。

办公身份与活动为虚构教学示例；图像保留生成性质与provenance；NASA音频保持原source与使用记录，不作宣传背书。

24页投影课件是讲解导航，完整稿件、实际参考成果和练习文件从每页链接打开。无真实学生成果、账号授权、模型调用、成片或发布效果声明。

## 工作流视觉素材 · 2026-10-30

materials/assets/workflow/invoice-model-v1.png、browser-model-v1.png、video-model-v1.png：当次内置 image_gen 原创输出，1254×1254，RGBA，保留原始像素和透明通道；不是实际发票扫描、真实供应商网页或活动照片。与原品牌 Logo 和课程数据分离。原始路径与 SHA-256 记录在仓库根 artifacts/codex-office-course-20261030/workflow-image-provenance.json；双端截图/检查在 evidence-workflow-model/。

## 发票输入资料 · 图像模型文档

materials/cases/01-invoice/input/01-lumen.png 至05-stage.png 为当次内置image_gen直接生成的完整发票页面，06-lumen-copy.png保留重复原件；并非三维装饰图。编号、日期、币种、金额与课程原数据逐项一致；NDS缺截止日/PO，SKH票面560而500+50=550保留用于核对练习。人物/企业/交易仍属于课程设计内容，生成不构成真实交易凭据或真实客户记录。PNG原始输出、完整提示词和来源路径保存在仓库根artifacts/codex-office-course-20261030/invoice-model-inputs.json。PDF由source-html中对应HTML图像原稿打印，各一页；原文字HTML/PDF已归档在invoice-inputs-before-model。

## 最终 AU GST 发票版（覆盖此前发票数据）

Cloud 改为 AUD330；Stage 基础票更正550，原560差异票移入extensions。基础组去重：未税2650、GST265、含税2915。

Owner本轮明确授权编制ABN：80 000 000 001、61 000 000 002、42 000 000 003、23 000 000 004、93 000 000 005。均通过ABR的mod89规则；2026-10-30官方Lookup均返回No record found。仅为授权课堂编号，不代表实际供应商身份、GST注册或抵扣资格。原生图像工具输出与编辑来源见仓库根artifacts/codex-office-course-20261030/au-gst-final-inputs.json，查询快照和验收见evidence-au-gst/。

官方依据：https://business.gov.au/finance/payments-and-invoicing/how-to-invoice；https://smallbusiness.taxsuperandyou.gov.au/goods-and-services-tax/calculating-gst-on-sales；https://abr.business.gov.au/Help/AbnFormat。
