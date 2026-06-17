# 从 public/outline.json 生成静态课程页
#   curriculum.html = 课程介绍 + 12 周概览 + 底部按钮（【查看完整课程大纲】跳 outline.html）
#   outline.html    = 一整页可直接上课的完整大纲（图例 + 每 Phase/每周/每节课/每步）
# 用法: powershell -NoProfile -File generate.ps1   （改了 outline.json 后重跑即可）
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [Text.Encoding]::UTF8
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$pub  = Join-Path $base 'public'
$d = [IO.File]::ReadAllText((Join-Path $pub 'outline.json'), [Text.Encoding]::UTF8) | ConvertFrom-Json
$utf8 = [Text.UTF8Encoding]::new($false)

function Esc($s) {
  if ($null -eq $s) { return '' }
  return ([string]$s).Replace('&','&amp;').Replace('<','&lt;').Replace('>','&gt;')
}
$badge = @{
  Lesson=@('b-live','直播课'); Quest=@('b-quest','Quest'); InteractiveLab=@('b-lab','互动 Lab')
  Video=@('b-video','录播'); Information=@('b-info','自学'); Workshop=@('b-work','工作坊')
}
$stepName = @{
  CONCEPT='概念'; LAB='Lab'; MCQ='测验'; SCENARIO='场景'; VIDEO='录播'
  LIVE='直播'; PROJECT='产出'; LEARN='Learn'; AI_TUTOR='AI 辅导'
}

# ---------- shared CSS ----------
$css = @'
:root{--blue:#2F6BFF;--ink:#0b1220;--paper:#F6F7FB;--line:#0b1220;--shadow:6px 6px 0 #0b1220}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans','Noto Sans SC',sans-serif;background:var(--paper);color:var(--ink);line-height:1.6;padding:0 16px 80px}
.wrap{max-width:1080px;margin:0 auto}
h1,h2,h3{font-family:'Bricolage Grotesque','Noto Sans SC',sans-serif;line-height:1.12}
a{color:inherit}
.topnav{position:sticky;top:0;z-index:9;display:flex;flex-wrap:wrap;gap:6px;background:var(--paper);padding:14px 0;margin-bottom:8px;border-bottom:3px solid var(--line)}
.topnav a{font-family:'Space Mono',monospace;font-size:13px;font-weight:700;text-decoration:none;border:2px solid var(--line);padding:5px 11px;background:#fff}
.topnav a:hover{background:#FFE45C}.topnav a.active{background:var(--blue);color:#fff}
.hero{margin-top:18px;border:3px solid var(--line);background:#fff;box-shadow:var(--shadow);padding:34px 28px}
.pretitle{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:.12em;color:var(--blue);font-weight:700}
.hero h1{font-size:clamp(32px,6vw,58px);font-weight:900;margin:10px 0 14px}
.hero .pos{font-size:clamp(15px,2.3vw,20px);font-weight:600;max-width:760px}.hero .pos b{color:var(--blue)}
.stats{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
.stat{border:3px solid var(--line);padding:10px 16px;background:var(--blue);color:#fff;font-weight:700}
.stat .n{font-family:'Bricolage Grotesque';font-size:24px;font-weight:900;display:block;line-height:1}
.stat .l{font-size:12px;font-family:'Space Mono',monospace}
.stat.alt{background:#FFE45C;color:var(--ink)}.stat.alt2{background:#fff;color:var(--ink)}
section{margin-top:44px}
.sec-h{font-size:clamp(21px,3.2vw,29px);font-weight:900;border-left:8px solid var(--blue);padding-left:14px;margin-bottom:20px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px}
.card{border:3px solid var(--line);background:#fff;box-shadow:var(--shadow);padding:18px}
.card h3{font-size:17px;font-weight:800;margin-bottom:8px}.card p{font-size:14px;color:#374151}
.card .tag{display:inline-block;font-family:'Space Mono',monospace;font-size:11px;font-weight:700;background:#FFE45C;border:2px solid var(--line);padding:2px 7px;margin-bottom:10px}
.tbl{width:100%;border-collapse:collapse;border:3px solid var(--line);background:#fff;box-shadow:var(--shadow);font-size:14px}
.tbl th,.tbl td{border:1.5px solid var(--line);padding:10px 12px;text-align:left;vertical-align:top}
.tbl th{background:var(--ink);color:#fff;font-family:'Space Mono',monospace;font-size:12px}
.tbl td.wk{font-family:'Space Mono',monospace;font-weight:700;color:var(--blue);white-space:nowrap}
.tbl tr:nth-child(even) td{background:#f3f4f8}.ms{font-weight:700}
.note{font-size:13px;color:#374151;margin-top:14px;border:2px dashed #94a3b8;padding:12px 14px;background:#fff}
/* CTA button row */
.cta-row{display:flex;flex-wrap:wrap;gap:18px;justify-content:center;margin:46px 0 10px}
.cta{font-family:'Bricolage Grotesque','Noto Sans SC',sans-serif;font-weight:800;font-size:16px;text-decoration:none;border:3px solid var(--line);box-shadow:var(--shadow);padding:16px 26px;color:#fff;transition:transform .08s,box-shadow .08s}
.cta:hover{transform:translate(3px,3px);box-shadow:3px 3px 0 var(--line)}
.cta.b1{background:#6366f1}.cta.b2{background:var(--ink)}.cta.b3{background:#EF4444}.cta.b4{background:#10B981}
/* outline page */
.legend{border:3px solid var(--line);background:#fff;box-shadow:var(--shadow);padding:16px 18px;margin-top:18px}
.legend .lg-h{font-family:'Space Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.1em;color:#6b7280;margin:2px 0 8px}
.legend .lg-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px}
.chip{font-family:'Space Mono',monospace;font-size:10px;font-weight:700;border:2px solid var(--line);padding:2px 8px;white-space:nowrap}
.s-CONCEPT{background:#6366f1;color:#fff}.s-LAB{background:#10B981;color:#fff}.s-MCQ{background:#FFE45C;color:var(--ink)}
.s-SCENARIO{background:#EC4899;color:#fff}.s-VIDEO{background:#0EA5E9;color:#fff}.s-LIVE{background:#EF4444;color:#fff}
.s-PROJECT{background:#7C3AED;color:#fff}.s-LEARN{background:#8B5CF6;color:#fff}.s-AI_TUTOR{background:#F59E0B;color:#fff}
.s-QUEST{background:#7C3AED;color:#fff}
.badge{font-family:'Space Mono',monospace;font-size:10px;font-weight:700;border:2px solid var(--line);padding:2px 8px;white-space:nowrap}
.b-live{background:#EF4444;color:#fff}.b-lab{background:#10B981;color:#fff}.b-quest{background:#7C3AED;color:#fff}
.b-video{background:#0EA5E9;color:#fff}.b-info{background:#FFE45C;color:var(--ink)}.b-work{background:#F59E0B;color:#fff}
.phase-banner{border:3px solid var(--line);box-shadow:var(--shadow);padding:20px 22px;color:#fff;margin-top:30px}
.phase-banner h2{font-size:clamp(22px,3.6vw,34px);font-weight:900}
.phase-banner .sum{font-family:'Space Mono',monospace;font-size:13px;opacity:.95;margin-top:6px}
.weekbar{background:var(--ink);color:#fff;font-family:'Space Mono',monospace;font-weight:700;font-size:13px;letter-spacing:.08em;padding:8px 16px;margin-top:14px;border:3px solid var(--line)}
.les{border:3px solid var(--line);background:#fff;box-shadow:4px 4px 0 var(--line);padding:14px 16px;margin-top:12px}
.les .lh{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.les .lcode{font-family:'Space Mono',monospace;font-weight:700;font-size:13px;color:#6b7280}
.les .lt{font-weight:800;font-size:16px;flex:1;min-width:200px}
.les .dur{font-family:'Space Mono',monospace;font-size:12px;color:#fff;background:#0b1220;padding:2px 8px;white-space:nowrap}
.les .ld{font-size:13.5px;color:#374151;margin-top:8px}
.slist{margin-top:10px;border-top:1.5px dashed #cbd5e1;padding-top:8px}
.srow{display:flex;gap:9px;align-items:flex-start;padding:3px 0;font-size:13.5px;color:#374151}
.srow .chip{margin-top:3px}
.qbox{margin-top:10px;border-top:1.5px dashed #c4b5fd;padding-top:8px;background:#faf5ff;margin:10px -16px -14px;padding:10px 16px 12px}
.qbox .qr{font-size:13.5px;margin-bottom:5px}.qbox .qr b{color:#6d28d9}
.lab-ref{display:inline-block;font-family:'Space Mono',monospace;font-size:12px;background:#ecfdf5;border:2px solid #10B981;color:#065f46;padding:2px 8px;margin-top:8px}
footer{margin-top:60px;text-align:center;font-family:'Space Mono',monospace;font-size:12px;color:#9ca3af}
/* 适合人群 */
.who2{display:grid;grid-template-columns:1.7fr 1fr;gap:16px}
.who-col{border:3px solid var(--line);box-shadow:var(--shadow);border-radius:6px;padding:22px 24px}
.who-col.fit{background:#fff}.who-col.nofit{background:#fff7f7}
.who-col h4{font-size:18px;font-weight:900;margin-bottom:14px}
.who-col .wrow{display:flex;gap:12px;padding:10px 0;border-top:1px solid #eef0f4;font-size:15px;font-weight:500}
.who-col .wrow:first-of-type{border-top:none}
.who-col .ic{font-weight:900;flex-shrink:0}
.fit .ic{color:var(--blue)}.nofit .ic{color:#ef4444}
/* 课程亮点 */
.hl-list{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:14px}
.hl-list li{position:relative;padding:16px 18px 16px 48px;border:3px solid var(--line);background:#fff;box-shadow:5px 5px 0 var(--line);font-weight:600;font-size:15px}
.hl-list li::before{content:'★';position:absolute;left:18px;top:16px;color:var(--blue);font-weight:900}
/* JD 技能覆盖 */
.cov{width:100%;border-collapse:collapse;border:3px solid var(--line);background:#fff;box-shadow:var(--shadow);font-size:14px}
.cov th,.cov td{border:1.5px solid var(--line);padding:9px 12px;text-align:left}
.cov th{background:var(--ink);color:#fff;font-family:'Space Mono',monospace;font-size:12px}
.cov .skill{font-weight:700}
.cov .hot{display:inline-block;font-family:'Space Mono',monospace;font-size:11px;font-weight:700;padding:1px 8px;border:2px solid var(--line);background:#FFE45C}
.cov .hot.new{background:var(--blue);color:#fff}
.cov .wk{font-family:'Space Mono',monospace;font-weight:700;color:var(--blue);white-space:nowrap}
.cov .ck{color:#10b981;font-weight:900;text-align:center;font-size:18px}
.cov tr:nth-child(even) td{background:#f3f4f8}
/* 工具栈分组 */
.stack{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.stk{border:3px solid var(--line);background:#fff;box-shadow:5px 5px 0 var(--line);padding:18px}
.stk h4{font-size:13px;font-family:'Space Mono',monospace;color:#64748b;margin-bottom:12px;letter-spacing:.05em}
.stk .pills{display:flex;flex-wrap:wrap;gap:8px}
.stk .pill{font-size:14px;font-weight:700;border:2px solid var(--line);border-radius:100px;padding:6px 14px;background:#f6f7fb}
/* 薪资 */
.sal-row{display:flex;justify-content:space-between;align-items:center;gap:14px;border:3px solid var(--line);background:#fff;box-shadow:5px 5px 0 var(--line);padding:18px 22px;margin-bottom:12px}
.sal-row .role{font-weight:700;font-size:16px}
.sal-row .amt{font-family:'Bricolage Grotesque';font-weight:900;font-size:28px;color:var(--blue);white-space:nowrap}
.cos{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.cos span{font-size:15px;font-weight:700;border:2px solid var(--line);border-radius:8px;padding:7px 15px;background:#fff}
.src-note{font-size:12px;color:#94a3b8;margin-top:14px;font-family:'Space Mono',monospace;line-height:1.6}
@media(max-width:640px){.tbl,.cov{font-size:12.5px}.cta{font-size:14px;padding:13px 18px}.who2,.hl-list{grid-template-columns:1fr}}
'@
[IO.File]::WriteAllText((Join-Path $pub 'styles.css'), $css, $utf8)

$fontLink = '<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet">'
function Head($title) {
  return "<!DOCTYPE html><html lang=""zh-CN""><head><meta charset=""UTF-8""><meta name=""viewport"" content=""width=device-width,initial-scale=1""><title>$title</title>$fontLink<link rel=""stylesheet"" href=""./styles.css""></head><body><div class=""wrap"">"
}
$foot = "<footer>JR Academy · AI Engineer 训练营 · 数据源 outline.json（改大纲请改 JSON 后重跑 generate.ps1）· 内容以最终上线为准</footer></div></body></html>"
$questCount = (@($d.phases | % { $_.lessons } | ? { $_.type -eq 'Quest' })).Count

# ========== curriculum.html (intro + overview + CTA) ==========
$ov = Head("AI Engineer 训练营 · 课程介绍")
$ov += "<nav class=""topnav""><a href=""./curriculum.html"" class=""active"">课程介绍</a><a href=""./outline.html"">完整课程大纲</a></nav>"
$pos = (Esc $d.description).Replace('25-40K','<b>25-40K</b>').Replace('Dispatch AI','<b>Dispatch AI</b>')
$hlHtml = (($d.highlights | ForEach-Object { "<li>$(Esc $_)</li>" }) -join '')
$ov += @"
<div class="hero">
<div class="pretitle">JR ACADEMY · 国内大模型应用开发岗 · 第一期招生中</div>
<h1>$(Esc $d.name)</h1>
<div class="pos">$pos</div>
<div class="stats">
<div class="stat"><span class="n">12 周</span><span class="l">技术 + 职业孵化</span></div>
<div class="stat alt"><span class="n">$($d.liveClasses)</span><span class="l">节直播 (每节 ≤3h)</span></div>
<div class="stat alt2"><span class="n">$($d.totalInteractiveLabs)</span><span class="l">个互动 Lab</span></div>
<div class="stat alt2"><span class="n">$questCount</span><span class="l">个项目里程碑</span></div>
<div class="stat"><span class="n">$($d.totalLessons)</span><span class="l">节课</span></div>
</div></div>
<section><div class="sec-h">适合谁学 / 不适合谁</div>
<div class="who2">
<div class="who-col fit"><h4>✅ 适合</h4>
<div class="wrow"><span class="ic">›</span><span>后端 / 全栈工程师（2-5 年），想转大模型应用开发</span></div>
<div class="wrow"><span class="ic">›</span><span>应届 CS / 计算机相关，想拼 AI 校招、要能聊的真项目</span></div>
<div class="wrow"><span class="ic">›</span><span>传统算法 / 数据岗，想补 LLM 工程化能力</span></div>
<div class="wrow"><span class="ic">›</span><span>创业者 / 独立开发，想做能上线的 AI 产品</span></div>
</div>
<div class="who-col nofit"><h4>❌ 不适合</h4>
<div class="wrow"><span class="ic">✕</span><span>零编程基础（建议先学 Python）</span></div>
<div class="wrow"><span class="ic">✕</span><span>只想拿证书 / 速成不动手</span></div>
<div class="wrow"><span class="ic">✕</span><span>想做大模型预训练算法（那是硕博算法岗）</span></div>
</div>
</div>
<div class="note"><b>先修要求：</b>会 Python、用过命令行、懂 Git 基本操作。这不是从零教 Python 的课。</div>
</section>
<section><div class="sec-h">为什么和别的训练营不一样</div><div class="grid">
<div class="card"><span class="tag">真项目</span><h3>边学边做 Dispatch AI</h3><p>全程在匠人真实在跑的 AI 调度系统上做，不是教程级 demo。每周学完新技能当周就接进项目——毕业作品能上线、能讲清楚、扛得住面试追问。</p></div>
<div class="card"><span class="tag">押新技能</span><h3>RAG 评测 · MCP · 私有化部署</h3><p>押注 2025-26 国内 JD 新高频词：Function Calling + MCP、RAG 工程化与评测、vLLM 私有化部署——老课程更新慢、覆盖薄的地方。</p></div>
<div class="card"><span class="tag">全国产栈</span><h3>Qwen / DeepSeek / GLM + 国内云</h3><p>国产大模型 + 阿里云百炼/华为云 + Coze/Dify。私有化部署是国内合规刚需，连国际课程都缺这一块。</p></div>
<div class="card"><span class="tag">诚实定位</span><h3>对齐真实 JD，瞄准 25-40K</h3><p>逐节对齐 BOSS 直聘真实 JD，瞄准招得最多、转型能拿到的大模型应用开发岗，不卖 50K 算法岗幻觉。</p></div>
</div></section>
<section><div class="sec-h">课程亮点</div><ul class="hl-list">$hlHtml</ul></section>
<section><div class="sec-h">JD 技能覆盖图：招聘要什么，我们就练什么</div>
<table class="cov"><thead><tr><th>国内 JD 高频技能</th><th>重要度</th><th>覆盖周次</th><th>覆盖</th></tr></thead><tbody>
<tr><td class="skill">Python 工程化 / FastAPI / Docker</td><td><span class="hot">高频</span></td><td class="wk">W1</td><td class="ck">✓</td></tr>
<tr><td class="skill">国产大模型 API（Qwen/DeepSeek）+ 兼容层</td><td><span class="hot">高频</span></td><td class="wk">W2</td><td class="ck">✓</td></tr>
<tr><td class="skill">Prompt Engineering / 结构化输出</td><td><span class="hot">高频</span></td><td class="wk">W2</td><td class="ck">✓</td></tr>
<tr><td class="skill">Function Calling</td><td><span class="hot new">新高频</span></td><td class="wk">W2</td><td class="ck">✓</td></tr>
<tr><td class="skill">向量库 / Embedding / 检索</td><td><span class="hot">高频</span></td><td class="wk">W3</td><td class="ck">✓</td></tr>
<tr><td class="skill">RAG Pipeline / 混合检索 / Rerank</td><td><span class="hot">高频</span></td><td class="wk">W4</td><td class="ck">✓</td></tr>
<tr><td class="skill">RAG 评测（RAGAS / Langfuse）</td><td><span class="hot new">新高频</span></td><td class="wk">W5</td><td class="ck">✓</td></tr>
<tr><td class="skill">Agent / ReAct / 设计模式</td><td><span class="hot">高频</span></td><td class="wk">W6</td><td class="ck">✓</td></tr>
<tr><td class="skill">MCP（Model Context Protocol）</td><td><span class="hot new">新高频</span></td><td class="wk">W7</td><td class="ck">✓</td></tr>
<tr><td class="skill">Multi-Agent / 工作流编排</td><td><span class="hot">进阶</span></td><td class="wk">W8</td><td class="ck">✓</td></tr>
<tr><td class="skill">微调 LoRA / QLoRA / Llama Factory</td><td><span class="hot">高频</span></td><td class="wk">W9</td><td class="ck">✓</td></tr>
<tr><td class="skill">私有化部署 vLLM / SGLang / 量化</td><td><span class="hot new">新高频</span></td><td class="wk">W10</td><td class="ck">✓</td></tr>
<tr><td class="skill">AI 评测 / 防注入 / 护栏 / 可观测</td><td><span class="hot">进阶</span></td><td class="wk">W11</td><td class="ck">✓</td></tr>
<tr><td class="skill">Dify / Coze 低代码编排</td><td><span class="hot">加分</span></td><td class="wk">W2</td><td class="ck">✓</td></tr>
</tbody></table>
<div class="note">技能项来自国内大模型应用开发岗 JD 高频提取；<span class="hot new" style="border:2px solid #10162f">新高频</span> = 2025-26 才进入 JD 的技能，正是多数老课程覆盖薄、却最能拉开差距的地方。<b>14 项核心技能全覆盖。</b></div>
</section>
<section><div class="sec-h">技术工具栈（全国产、可落地）</div><div class="stack">
<div class="stk"><h4>大模型</h4><div class="pills"><span class="pill">Qwen</span><span class="pill">DeepSeek</span><span class="pill">GLM</span><span class="pill">Kimi</span><span class="pill">豆包</span></div></div>
<div class="stk"><h4>应用框架</h4><div class="pills"><span class="pill">LangChain</span><span class="pill">LlamaIndex</span><span class="pill">FastAPI</span></div></div>
<div class="stk"><h4>向量库 / 检索</h4><div class="pills"><span class="pill">Milvus</span><span class="pill">Chroma</span><span class="pill">pgvector</span><span class="pill">Rerank</span></div></div>
<div class="stk"><h4>Agent / 工具</h4><div class="pills"><span class="pill">ReAct</span><span class="pill">Function Calling</span><span class="pill">MCP</span><span class="pill">Multi-Agent</span></div></div>
<div class="stk"><h4>微调 / 训练</h4><div class="pills"><span class="pill">LoRA</span><span class="pill">QLoRA</span><span class="pill">Llama Factory</span><span class="pill">Hugging Face</span></div></div>
<div class="stk"><h4>部署 / 推理</h4><div class="pills"><span class="pill">vLLM</span><span class="pill">SGLang</span><span class="pill">Docker</span><span class="pill">量化</span></div></div>
<div class="stk"><h4>评测 / 可观测</h4><div class="pills"><span class="pill">RAGAS</span><span class="pill">Langfuse</span><span class="pill">LLM-as-judge</span></div></div>
<div class="stk"><h4>低代码 / 云</h4><div class="pills"><span class="pill">Dify</span><span class="pill">Coze</span><span class="pill">阿里云百炼</span><span class="pill">华为云 ModelArts</span></div></div>
</div></section>
<section id="spine"><div class="sec-h">12 周主线：学一节，就在 Dispatch AI 上做一节</div>
<table class="tbl"><thead><tr><th>周</th><th>学什么</th><th>当周在 Dispatch AI 上做什么</th></tr></thead><tbody>
<tr><td class="wk">W1</td><td>Python 工程化 / Docker / Git</td><td class="ms">本地 Docker Compose 一键跑通 Dispatch AI，读懂架构</td></tr>
<tr><td class="wk">W2</td><td>国产大模型 API / Prompt / Function Calling</td><td class="ms">把 AI 服务接上 Qwen/DeepSeek，写第一个派单 Function Call</td></tr>
<tr><td class="wk">W3</td><td>Embedding / 向量库选型</td><td class="ms">把调度知识灌进向量库，建检索</td></tr>
<tr><td class="wk">W4</td><td>RAG Pipeline / 混合检索 / 重写压缩</td><td class="ms">给调度决策接 RAG：这一单该派给谁、怎么处理</td></tr>
<tr><td class="wk">W5</td><td>RAG 评测（RAGAS/Langfuse）</td><td class="ms">给 RAG 加评测面板，跑出召回/忠实度指标 ★里程碑</td></tr>
<tr><td class="wk">W6</td><td>Agent 原理 / ReAct / 设计模式</td><td class="ms">把 AI 大脑重写成 ReAct 分诊 Agent</td></tr>
<tr><td class="wk">W7</td><td>MCP 协议 / MCP Server</td><td class="ms">用 MCP 接 Dispatch 后端（查资源/派单/通知）</td></tr>
<tr><td class="wk">W8</td><td>Multi-Agent / 工作流编排</td><td class="ms">升级成多智能体协作调度 ★里程碑</td></tr>
<tr><td class="wk">W9</td><td>微调 LoRA/QLoRA / Llama Factory</td><td class="ms">微调一个调度路由/分类小模型</td></tr>
<tr><td class="wk">W10</td><td>vLLM/SGLang 私有化部署 / 量化 / 合规</td><td class="ms">把微调模型私有化部署进 AI 服务 + 压测 ★里程碑</td></tr>
<tr><td class="wk">W11</td><td>AI Eval / 防注入 / 护栏 / 可观测</td><td class="ms">评测调度决策质量 + 加安全护栏与监控</td></tr>
<tr><td class="wk">W12</td><td>个性化 + Demo + 面试叙事</td><td class="ms">每人加自选领域调度场景 + 独创功能，端到端 Demo ★毕业作品</td></tr>
</tbody></table>
<div class="note"><b>防简历同质化：</b>W1–W11 全班在同一个 Dispatch AI 上做同样架构（好教好批），W12 强制每人加专属扩展，简历各不相同、抗追问。每周 <b>2 节直播（每节 ≤3 小时）</b>，其余录播 / Lab / Quest 自主节奏。</div>
</section>
<section><div class="sec-h">毕业能冲什么岗 · 谁在招</div>
<div class="sal-row"><span class="role">大模型应用开发工程师（2-5 年）</span><span class="amt">25–40K / 月</span></div>
<div class="sal-row"><span class="role">资深 / 带队 / 架构</span><span class="amt">40K+ / 月</span></div>
<div class="cos">
<span>阿里</span><span>字节</span><span>腾讯</span><span>百度</span><span>美团</span><span>京东</span>
<span>智谱</span><span>月之暗面</span><span>MiniMax</span><span>小红书</span><span>商汤</span>
</div>
<div class="src-note">薪资为公开招聘市场参考区间（来源 BOSS 直聘 / 投中网等公开报告），实际以面试谈定为准。本课定位<b>应用开发岗</b>，不含需硕博背景的算法岗薪资。</div>
</section>
<div class="cta-row">
<a class="cta b1" href="#spine">课程架构全景图</a>
<a class="cta b2" href="./outline.html">查看完整课程大纲 →</a>
</div>
"@
$ov += $foot
[IO.File]::WriteAllText((Join-Path $pub 'curriculum.html'), $ov, $utf8)

# ========== outline.html (full teaching-ready outline, single page) ==========
$ol = Head("AI Engineer 训练营 · 完整课程大纲")
$ol += "<nav class=""topnav""><a href=""./curriculum.html"">课程介绍</a><a href=""./outline.html"" class=""active"">完整课程大纲</a></nav>"
$ol += "<div class=""hero"" style=""padding:24px 28px""><div class=""pretitle"">完整课程大纲 · 可直接照此上课</div><h1 style=""font-size:clamp(26px,4.5vw,40px)"">$(Esc $d.name)</h1><div class=""pos"" style=""font-size:15px"">$($d.totalLessons) 节课 · $($d.liveClasses) 节直播（每节 ≤3h）· $($d.totalInteractiveLabs) 个互动 Lab · $questCount 个 Dispatch AI 项目里程碑</div></div>"
# legend
$ol += @'
<div class="legend">
<div class="lg-h">STEP TYPES（每节课内的步骤类型）</div>
<div class="lg-row">
<span class="chip s-CONCEPT">概念</span><span class="chip s-LIVE">直播</span><span class="chip s-LAB">Lab</span>
<span class="chip s-MCQ">测验</span><span class="chip s-SCENARIO">场景</span><span class="chip s-VIDEO">录播</span>
<span class="chip s-PROJECT">产出</span><span class="chip s-AI_TUTOR">AI 辅导</span><span class="chip s-QUEST">Quest 步骤</span>
</div>
<div class="lg-h" style="margin-top:10px">LESSON TYPES（课时类型）</div>
<div class="lg-row">
<span class="badge b-live">直播课</span><span class="badge b-lab">互动 Lab</span><span class="badge b-quest">Quest</span>
<span class="badge b-video">录播</span><span class="badge b-info">自学</span><span class="badge b-work">工作坊</span>
</div>
</div>
'@
foreach ($p in $d.phases) {
  $ol += "<div class=""phase-banner"" style=""background:$($p.color)""><h2>$(Esc $p.name)</h2><div class=""sum"">$(Esc $p.summary)</div></div>"
  $curWeek = -1
  foreach ($l in $p.lessons) {
    # week divider from 【...Wn-...】 in title
    $m = [regex]::Match([string]$l.title, 'W(\d+)-')
    if ($m.Success) {
      $wk = [int]$m.Groups[1].Value
      if ($wk -ne $curWeek) { $curWeek = $wk; $ol += "<div class=""weekbar"">WEEK $wk</div>" }
    }
    $b = $badge[$l.type]; if (-not $b) { $b = @('b-info', $l.type) }
    $ol += "<div class=""les""><div class=""lh""><span class=""lcode"">$($l.code)</span><span class=""lt"">$(Esc $l.title)</span><span class=""badge $($b[0])"">$($b[1])</span><span class=""dur"">$($l.duration) min</span></div>"
    $ol += "<div class=""ld"">$(Esc $l.description)</div>"
    if ($l.type -eq 'Quest' -and $l.quest) {
      $ol += "<div class=""qbox""><div class=""qr""><b>学习目标</b>：$(Esc $l.quest.learningGoal)</div><div class=""qr""><b>完成标准</b>：$(Esc $l.quest.successCriteria)</div>"
      if ($l.quest.stepSkeleton) {
        $ol += "<div class=""slist"">"
        $n = 1
        foreach ($st in $l.quest.stepSkeleton) {
          $ol += "<div class=""srow""><span class=""chip s-QUEST"">步骤 $n</span><span><b>$(Esc $st.title)</b> — $(Esc $st.description)</span></div>"; $n++
        }
        $ol += "</div>"
      }
      $ol += "</div>"
    }
    elseif ($l.steps) {
      $ol += "<div class=""slist"">"
      foreach ($st in $l.steps) {
        $sn = $stepName[$st.type]; if (-not $sn) { $sn = $st.type }
        $ol += "<div class=""srow""><span class=""chip s-$($st.type)"">$sn · $($st.duration)m</span><span><b>$(Esc $st.title)</b> — $(Esc $st.description)</span></div>"
      }
      $ol += "</div>"
    }
    if ($l.labs) { foreach ($lr in $l.labs) { $ol += "<span class=""lab-ref"">🧪 $($lr.source) / $($lr.slug)</span> " } }
    $ol += "</div>"
  }
}
$ol += $foot
[IO.File]::WriteAllText((Join-Path $pub 'outline.html'), $ol, $utf8)

Write-Output "Generated: styles.css, curriculum.html, outline.html"
