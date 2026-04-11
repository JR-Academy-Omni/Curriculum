#!/usr/bin/env python3
"""Apply Phase 4 learningMaterial to outline.json"""
import json

with open("curriculum/ai-engineer-bootcamp/public/outline.json") as f:
    outline = json.load(f)

lm = {}

lm["L126"] = '<h2>Open-Weight Models + Model Routing</h2>\n<p>开源模型（Llama 4、DeepSeek、Qwen）的部署和智能路由策略。</p>\n<h3>主流开源模型</h3>\n<table><tr><th>模型</th><th>参数量</th><th>特点</th></tr><tr><td>Llama 4 Scout</td><td>17B (active)</td><td>10M context, MoE</td></tr><tr><td>DeepSeek V3</td><td>671B MoE</td><td>高性价比</td></tr><tr><td>Qwen 3.5</td><td>0.6B-235B</td><td>中文优化</td></tr></table>\n<h3>Model Routing</h3>\n<p>简单任务 → 小模型（便宜快）；复杂任务 → 大模型（准但贵）。用 classifier 或 LLM 判断复杂度。</p>\n<pre><code>def route(query):\n    complexity = classify_complexity(query)\n    if complexity == "simple": return "deepseek-chat"\n    if complexity == "medium": return "gpt-4o-mini"\n    return "gpt-4o"</code></pre>'

lm["L127"] = '<h2>实验目标</h2>\n<p>在 LLM Lab 中练习模型部署：vLLM 本地推理、API 封装。</p>\n<ul><li>用 vLLM 部署开源模型</li><li>封装成 OpenAI 兼容 API</li><li>测试吞吐量和延迟</li></ul>'

lm["L128"] = '<h2>实验目标</h2>\n<p>推理优化技术实操。</p>\n<ul><li>量化：FP16 → INT8 → INT4</li><li>KV Cache 优化</li><li>Batch inference 提升吞吐</li></ul>'

lm["L129"] = '<h2>实验目标</h2>\n<p>用 AWS SageMaker 部署 ML 模型。</p>\n<ul><li>创建 SageMaker Endpoint</li><li>部署 Hugging Face 模型</li><li>用 boto3 调用推理 API</li></ul>'

lm["L130"] = '<h2>SDG for Fine-Tuning</h2>\n<p>Synthetic Data Generation — 用 LLM 生成 Fine-Tuning 训练数据。</p>\n<h3>为什么需要 SDG</h3>\n<p>高质量标注数据贵且慢。用 GPT-4o 生成训练数据，再用这些数据微调更小的模型。</p>\n<h3>常用方法</h3>\n<ul><li><strong>Self-Instruct</strong> — 让 LLM 自己生成 instruction-response 对</li><li><strong>Evol-Instruct</strong> — 逐步增加指令复杂度</li></ul>\n<pre><code>prompt = "Generate 10 Q&amp;A pairs about Python decorators. Format: {question, answer}"\ndata = client.chat.completions.create(model="gpt-4o", messages=[{"role":"user","content":prompt}])</code></pre>'

lm["L131"] = '<h2>实验目标</h2>\n<p>数据工程实操：数据清洗、格式化、质量检查。</p>\n<ul><li>清洗训练数据（去重、过滤低质量）</li><li>转换为 Fine-Tuning 格式（JSONL）</li><li>数据质量检查脚本</li></ul>'

lm["L132"] = '<h2>Test Data Generation for RAG</h2>\n<p>为 RAG 系统生成评估测试集。</p>\n<h3>方法</h3>\n<ol><li>从文档中提取关键信息点</li><li>用 LLM 基于信息点生成问题</li><li>用原文档段落作为 ground truth context</li><li>人工审核 10-20% 确保质量</li></ol>\n<pre><code># 生成测试问题\nprompt = f"Based on this text, generate 5 questions that can ONLY be answered using this text:\\n{chunk}"\nquestions = llm(prompt)</code></pre>'

lm["L133"] = '<h2>Prompt-Based Data Generation</h2>\n<p>用精心设计的 Prompt 批量生成高质量训练数据。</p>\n<h3>关键技巧</h3>\n<ul><li>给 LLM 明确的输出格式（JSON Schema）</li><li>用 Few-shot 示例控制质量和风格</li><li>设 temperature=0.8-1.0 增加多样性</li><li>生成后用另一个 LLM 做质量检查</li></ul>'

lm["L134"] = '<h2>Fine-Tuning &amp; MTEB</h2>\n<p>Fine-Tuning 基础 + 用 MTEB（Massive Text Embedding Benchmark）评估 Embedding 模型。</p>\n<h3>Fine-Tuning 三种方式</h3>\n<ol><li><strong>Full Fine-Tuning</strong> — 更新所有参数，效果最好但成本最高</li><li><strong>LoRA</strong> — 只训练低秩矩阵，参数量减少 90%+</li><li><strong>QLoRA</strong> — LoRA + 量化，在消费级 GPU 上也能微调</li></ol>\n<h3>MTEB</h3>\n<p>评估 Embedding 模型质量的标准 benchmark。包括检索、分类、聚类等任务。选 Embedding 模型时参考 MTEB 排行榜。</p>'

lm["L135"] = '<h2>下载开源模型权重</h2>\n<p>从 Hugging Face 下载模型权重并本地加载。</p>\n<pre><code>from transformers import AutoModelForCausalLM, AutoTokenizer\n\nmodel_name = "meta-llama/Llama-3.1-8B-Instruct"\ntokenizer = AutoTokenizer.from_pretrained(model_name)\nmodel = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype="auto", device_map="auto")\n\ninputs = tokenizer("What is RAG?", return_tensors="pt")\noutputs = model.generate(**inputs, max_new_tokens=100)\nprint(tokenizer.decode(outputs[0]))</code></pre>\n<h3>注意事项</h3>\n<ul><li>大模型需要 GPU（8B 需要 ~16GB VRAM）</li><li>用 <code>device_map="auto"</code> 自动分配 GPU/CPU</li><li>部分模型需要申请访问权限（如 Llama）</li></ul>'

lm["L136"] = '<h2>Loading LMs on GPU</h2>\n<p>在 GPU 上加载和运行大语言模型。</p>\n<h3>显存估算</h3>\n<table><tr><th>模型大小</th><th>FP16</th><th>INT8</th><th>INT4</th></tr><tr><td>7B</td><td>14GB</td><td>7GB</td><td>3.5GB</td></tr><tr><td>13B</td><td>26GB</td><td>13GB</td><td>6.5GB</td></tr><tr><td>70B</td><td>140GB</td><td>70GB</td><td>35GB</td></tr></table>\n<p>公式：显存 ≈ 参数量 × 精度字节数（FP16=2B, INT8=1B, INT4=0.5B）。</p>\n<h3>量化加载</h3>\n<pre><code>from transformers import BitsAndBytesConfig\nbnb_config = BitsAndBytesConfig(load_in_4bit=True, bnb_4bit_quant_type="nf4")\nmodel = AutoModelForCausalLM.from_pretrained(model_name, quantization_config=bnb_config)</code></pre>'

lm["L137"] = '<h2>Sentence Transformers</h2>\n<p>用 Sentence Transformers 库微调 Embedding 模型。</p>\n<pre><code>from sentence_transformers import SentenceTransformer, InputExample, losses\n\nmodel = SentenceTransformer("all-MiniLM-L6-v2")\ntrain_examples = [\n    InputExample(texts=["What is RAG?", "RAG retrieves documents before generating answers."]),\n]\ntrain_loss = losses.MultipleNegativesRankingLoss(model)\nmodel.fit(train_objectives=[(train_dataloader, train_loss)], epochs=3)</code></pre>\n<p>微调后的 Embedding 模型在你的领域数据上检索效果更好。</p>'

lm["L138"] = '<h2>实验目标</h2>\n<p>监督微调 (SFT) 实操。</p>\n<ul><li>准备 instruction-response 训练数据（JSONL 格式）</li><li>用 Hugging Face Trainer 做 SFT</li><li>评估微调前后的效果差异</li></ul>'

lm["L139"] = '<h2>Fine-Tuning Toolkit</h2>\n<h3>PEFT (Parameter Efficient Fine-Tuning)</h3>\n<pre><code>from peft import LoraConfig, get_peft_model\nlora_config = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"], lora_dropout=0.05)\nmodel = get_peft_model(base_model, lora_config)\n# 只训练 0.1% 的参数</code></pre>\n<h3>Unsloth</h3>\n<p>2x 更快的 Fine-Tuning：自动优化内存和计算。</p>\n<pre><code>from unsloth import FastLanguageModel\nmodel, tokenizer = FastLanguageModel.from_pretrained("unsloth/Llama-3.1-8B-Instruct", load_in_4bit=True)</code></pre>'

lm["L140"] = '<h2>Fine-Tuning 的核心角色</h2>\n<h3>三个主要用途</h3>\n<ol><li><strong>领域适配</strong> — 让模型学会特定领域术语和知识</li><li><strong>格式控制</strong> — 让模型严格遵循输出格式</li><li><strong>成本优化</strong> — 用微调后的小模型替代大模型 API</li></ol>\n<h3>何时用 Fine-Tuning vs RAG</h3>\n<ul><li>知识会变 → RAG（实时检索最新信息）</li><li>知识固定 + 需要特定风格 → Fine-Tuning</li><li>两者结合效果最好</li></ul>'

lm["L141"] = '<h2>PEFT + QLoRA + Unsloth</h2>\n<p>在消费级 GPU 上微调大模型的完整流程。</p>\n<h3>QLoRA = Quantization + LoRA</h3>\n<p>先把模型量化到 4bit（省显存），再用 LoRA 做参数高效微调。8B 模型只需一张 16GB GPU。</p>\n<h3>完整流程</h3>\n<pre><code>from unsloth import FastLanguageModel\nfrom trl import SFTTrainer\n\nmodel, tokenizer = FastLanguageModel.from_pretrained("Llama-3.1-8B-Instruct", load_in_4bit=True)\nmodel = FastLanguageModel.get_peft_model(model, r=16, lora_alpha=16)\n\ntrainer = SFTTrainer(model=model, tokenizer=tokenizer, train_dataset=dataset, max_seq_length=2048)\ntrainer.train()\nmodel.save_pretrained("my-finetuned-model")</code></pre>'

lm["L142"] = '<h2>实验目标</h2>\n<p>偏好对齐实操：RLHF 和 DPO。</p>\n<ul><li>理解 RLHF vs DPO 的区别</li><li>准备偏好数据（chosen vs rejected）</li><li>用 DPO 训练器做偏好对齐</li></ul>'

lm["L143"] = '<h2>Fine-Tuning Llama with PEFT-QLoRA</h2>\n<p>端到端项目：用 QLoRA 微调 Llama 3.1。</p>\n<h3>项目步骤</h3>\n<ol><li>准备训练数据（500+ instruction-response 对）</li><li>加载模型（4bit 量化）</li><li>配置 LoRA（r=16, alpha=32）</li><li>训练 3 epochs</li><li>评估：对比微调前后的回答质量</li><li>导出模型权重</li></ol>'

lm["L144"] = '<h2>AI Eval Engineering</h2>\n<p>系统化评估 AI 应用质量的工程方法。</p>\n<h3>评估金字塔</h3>\n<ol><li><strong>单元评估</strong> — 单个 LLM 调用的输出质量</li><li><strong>Pipeline 评估</strong> — RAG/Agent 端到端效果</li><li><strong>系统评估</strong> — 延迟、成本、稳定性、安全性</li></ol>\n<h3>自动化评估</h3>\n<ul><li>LLM-as-Judge — 用强模型评估弱模型</li><li>Reference-based — 与标准答案对比（BLEU、ROUGE）</li><li>Rubric-based — 按评分标准逐项打分</li></ul>'

lm["L145"] = '<h2>实验目标</h2>\n<p>LLM 评估实操。</p>\n<ul><li>用 LLM-as-Judge 给回答打分</li><li>实现 Rubric-based 评估</li><li>对比不同模型在同一测试集上的表现</li></ul>'

lm["L146"] = '<h2>实验目标</h2>\n<p>Prompt 评估实操。</p>\n<ul><li>设计评估测试集（30+ 条）</li><li>A/B 测试两个 Prompt 版本</li><li>统计准确率、一致性、拒答率</li></ul>'

lm["L147"] = '<h2>AI Safety + Red Teaming</h2>\n<p>AI 安全基础：对抗攻击、防护策略和红队测试。</p>\n<h3>常见攻击</h3>\n<ul><li><strong>Prompt Injection</strong> — 用户输入覆盖 System Prompt</li><li><strong>Jailbreak</strong> — 绕过安全限制</li><li><strong>Data Extraction</strong> — 让模型泄露训练数据</li></ul>\n<h3>防护</h3>\n<ul><li>输入过滤 — 检测恶意 Prompt 模式</li><li>输出过滤 — 检查回答是否包含敏感信息</li><li>Guardrails — NeMo Guardrails、Lakera Guard</li></ul>'

lm["L148"] = '<h2>实验目标</h2>\n<p>Prompt 注入防御实操。</p>\n<ul><li>尝试 Prompt Injection 攻击</li><li>实现输入过滤检测</li><li>测试防御策略的有效性</li></ul>'

lm["L149"] = '<h2>实验目标</h2>\n<p>幻觉检测与防护。</p>\n<ul><li>构建 Faithfulness 检查器</li><li>实现自动化幻觉检测 pipeline</li><li>设计 Guardrails 规则</li></ul>'

lm["L150"] = '<h2>AI Eval Pipeline 实战</h2>\n<p>构建端到端的 AI 评估 pipeline。</p>\n<h3>Pipeline 架构</h3>\n<pre><code>测试集 → AI 应用 → 回答 → 多维评估 → 报告\n                              ├→ Faithfulness\n                              ├→ Relevancy\n                              ├→ Safety\n                              └→ 延迟 &amp; 成本</code></pre>\n<h3>自动化</h3>\n<p>每次改 Prompt/模型/检索策略后自动跑评估，对比前后版本。类似 CI/CD 的 AI 版本。</p>'

lm["L151"] = '<h2>Red Teaming 实战</h2>\n<p>系统化测试 AI 应用的安全边界。</p>\n<h3>Red Team 清单</h3>\n<ul><li>Prompt Injection — 尝试覆盖 System Prompt</li><li>Role Play 绕过 — 让模型扮演"没有限制的 AI"</li><li>编码绕过 — 用 Base64、URL 编码隐藏恶意内容</li><li>多语言绕过 — 用其他语言提问避开英文过滤</li><li>数据泄露 — 尝试提取 System Prompt 内容</li></ul>'

lm["L152"] = '<h2>Capstone Project 展示</h2>\n<p>ISA（Intelligent Study Assistant）最终版 Demo Day。</p>\n<h3>Demo 要求</h3>\n<ol><li>展示 RAG 问答能力（基于课程文档）</li><li>展示 Agent 工具调用（搜索、计算）</li><li>展示评估指标（Faithfulness、延迟、成本）</li><li>说明技术选型理由</li></ol>'

lm["L153"] = '<h2>LinkedIn &amp; CV Workshop</h2>\n<p>AI Engineer 求职的简历和 LinkedIn 优化。</p>\n<h3>简历要点</h3>\n<ul><li>Projects 放最显眼位置（ISA + P3 项目）</li><li>用指标量化成果（Faithfulness 0.85、延迟 &lt; 3s）</li><li>技术栈关键词：RAG、LangChain、Agent、Fine-Tuning、RAGAS</li></ul>\n<h3>LinkedIn</h3>\n<ul><li>Headline 写 "AI Engineer | RAG | Agents | LLM"</li><li>发 3-5 篇项目文章（每篇 500 字 + 截图）</li></ul>'

lm["L154"] = '<h2>Mock Interview 准备</h2>\n<p>AI Engineer 面试常见问题和准备策略。</p>\n<h3>高频问题</h3>\n<ul><li>Explain RAG architecture and when to use it</li><li>How do you evaluate RAG quality?</li><li>Compare RAG vs Fine-Tuning</li><li>How do you handle hallucination?</li><li>Design an Agent system for [task]</li></ul>\n<h3>System Design 题</h3>\n<p>设计一个客服 AI：需求分析 → 架构选型（RAG + Agent）→ 组件选择 → 评估方案 → 成本估算。</p>'

lm["L155"] = '<h2>AI Engineer 职业路径</h2>\n<h3>角色发展</h3>\n<ul><li><strong>Junior AI Engineer</strong> — 实现 RAG/Agent，调 Prompt</li><li><strong>Senior AI Engineer</strong> — 设计 AI 架构，选型，评估体系</li><li><strong>Staff/Lead</strong> — AI 战略，团队建设，跨团队协作</li></ul>\n<h3>薪资参考（澳洲 2025）</h3>\n<table><tr><th>级别</th><th>薪资范围</th></tr><tr><td>Junior</td><td>$80K-$110K</td></tr><tr><td>Mid</td><td>$120K-$160K</td></tr><tr><td>Senior</td><td>$160K-$220K+</td></tr></table>'

lm["L156"] = '<h2>P3 项目收尾 + Demo Day</h2>\n<p>P3 职业孵化器最终展示。</p>\n<h3>展示内容</h3>\n<ol><li>项目背景和问题定义</li><li>技术方案和架构</li><li>Live Demo</li><li>评估指标和结果</li><li>团队分工和个人贡献</li></ol>\n<h3>评分标准</h3>\n<p>问题定义 20% + 方案设计 25% + 实现与 Demo 25% + 评估 20% + 分工 10%</p>'

lm["L157"] = '<h2>毕业 + 下一步</h2>\n<h3>你学会了什么</h3>\n<ul><li>Phase 1: Context Engineering + Prompt 技巧</li><li>Phase 2: RAG 全栈（Embedding → Vector DB → Evaluation）</li><li>Phase 3: Agent 工程（Tool Use → Multi-Agent → MCP）</li><li>Phase 4: Fine-Tuning + AI Eval + Safety</li></ul>\n<h3>下一步</h3>\n<ul><li>完善 ISA 项目并部署到公网</li><li>在 GitHub 上开源项目代码</li><li>写 3 篇技术博客分享学习过程</li><li>参加 P3 职业孵化器获取企业项目经验</li></ul>'

# Apply
applied = 0
for phase in outline["phases"]:
    for lesson in phase["lessons"]:
        if lesson["code"] in lm:
            lesson["learningMaterial"] = lm[lesson["code"]]
            applied += 1

with open("curriculum/ai-engineer-bootcamp/public/outline.json", "w") as f:
    json.dump(outline, f, ensure_ascii=False, indent=2)

total_lm = sum(1 for p in outline["phases"] for l in p["lessons"] if l.get("learningMaterial") and len(l["learningMaterial"]) > 50)
print(f"Phase 4: Applied {applied}")
print(f"Total: {total_lm}/157")
for phase in outline["phases"]:
    count = sum(1 for l in phase["lessons"] if l.get("learningMaterial") and len(l["learningMaterial"]) > 50)
    print(f"  {phase['name'][:50]}: {count}/{len(phase['lessons'])}")
