#!/usr/bin/env python3
"""Upgrade L01-L10 Pre-work lessons to skill standard quality."""
import json

with open("curriculum/ai-engineer-bootcamp/public/outline.json") as f:
    outline = json.load(f)

lm = {}

# ============================================================
# L01 — Pre-work：必要知识储备 (Information lesson, study guide)
# ============================================================
lm["L01"] = """<h2>开课前你需要准备什么</h2>
<p>AI Engineer Bootcamp 不是从零教 Python 的课。我们假设你能看懂代码、能用命令行、知道 Git 是干嘛的。这一节的目标是让你<strong>明确知道自己缺什么</strong>，然后在 L02-L10 的 Lab 里把缺的补回来。</p>

<h2>四项必备能力</h2>

<h3>1. Python 能写不能精</h3>
<p>具体标准：给你一个 OpenAI API 的官方示例代码，你能看懂它在做什么，能改一两个参数让它适配你的需求。下面这段代码，如果你能解释每一行，就过关：</p>
<pre><code>import os, json, requests

def get_weather(city: str) -&gt; dict:
    url = f"https://api.example.com/weather?city={city}"
    resp = requests.get(url, headers={"Authorization": f"Bearer {os.getenv('API_KEY')}"})
    if resp.status_code != 200:
        return {"error": resp.text}
    data = resp.json()
    return {"temp": data["main"]["temp"], "desc": data["weather"][0]["description"]}

print(json.dumps(get_weather("Sydney"), indent=2))
</code></pre>
<p>看不懂？没关系，去做 L02-L05 的 Python Lab，每个 20-30 分钟，做完就能看懂了。</p>
<p><strong>不需要会的</strong>：装饰器原理、异步、类型系统、metaclass、asyncio。这些用到了再学。</p>

<h3>2. Git 三个动作 + 一个流程</h3>
<p>三个动作：<code>git add</code>、<code>git commit</code>、<code>git push</code>。一个流程：开 branch → 写代码 → 提 PR → merge。</p>
<p>实际工作里 90% 的 Git 操作就是这些。Rebase、cherry-pick、interactive rebase 这些高级操作等遇到 conflict 再学。</p>
<p><strong>测试自己</strong>：能不能在 30 秒内 clone 一个 repo、新建 branch、改一个文件、commit、push？做不到就去做 L06-L07。</p>

<h3>3. AWS 四个名词</h3>
<table>
<tr><th>服务</th><th>是什么</th><th>什么时候用</th></tr>
<tr><td>EC2</td><td>虚拟机</td><td>跑长时间运行的服务、训练任务</td></tr>
<tr><td>S3</td><td>对象存储</td><td>存模型文件、数据集、生成的图片</td></tr>
<tr><td>IAM</td><td>权限</td><td>给 Lambda/EC2 发临时凭证，避免硬编码 key</td></tr>
<tr><td>Secrets Manager</td><td>密钥管理</td><td>存 OpenAI API key、数据库密码</td></tr>
</table>
<p>不需要会写 CloudFormation/Terraform，但要能在 Console 里点出来。L08-L10 会带你过一遍。</p>

<h3>4. 命令行不慌</h3>
<p>能在 Terminal 里完成：</p>
<ul>
<li><code>cd</code> 进目录、<code>ls</code> 看文件、<code>cat</code> 看内容</li>
<li><code>python3 script.py</code> 跑脚本、<code>pip install package</code> 装包</li>
<li><code>export OPENAI_API_KEY=sk-xxx</code> 设环境变量</li>
<li>看到 <code>command not found</code> 知道是 PATH 没配好，看到 <code>permission denied</code> 知道要 <code>chmod +x</code></li>
</ul>
<p><strong>Windows 用户必读</strong>：装 WSL2 + Ubuntu。原生 PowerShell 在很多 Python 包上有兼容性问题，调试一次能花掉你半天。WSL2 安装：<code>wsl --install</code>，10 分钟搞定。</p>

<h2>开发环境准备清单</h2>
<ol>
<li><strong>Python 3.10+</strong>（不要用 3.8/3.9，很多 LLM SDK 已经不支持了）</li>
<li><strong>VS Code + Python 插件</strong>（或者 Cursor/Windsurf，AI 辅助会快很多）</li>
<li><strong>Git</strong> + 一个 GitHub 账号</li>
<li><strong>Node.js 20+</strong>（部分 Lab 会用到 LangSmith CLI）</li>
<li><strong>Docker Desktop</strong>（后期会用，可以暂时不装）</li>
<li><strong>OpenAI API key</strong>（充 $10 够用整个课程）</li>
<li><strong>AWS 账号</strong>（开 Free Tier，第 6-8 周开始用）</li>
</ol>

<h2>怎么用这 10 个 Pre-work Lab</h2>
<p><strong>顺序做</strong>：L02 → L10。每个 Lab 15-30 分钟，所有做完大约 4 小时。</p>
<p><strong>做不动就跳</strong>：如果某个 Lab 你 5 分钟内全部通过，说明这块你已经会了，直接进下一个。如果一个 Lab 卡住超过 1 小时，先跳过去问群里的 mentor，不要硬磕。</p>
<p><strong>不要看视频</strong>：Pre-work 阶段不需要看长视频。这些 Lab 都是交互式的，看着提示动手做就行。看视频反而会让你产生"我学会了"的假象，结果第一周开课的时候发现连 venv 都激活不了。</p>

<h2>常见误区</h2>
<ul>
<li><strong>"我等开课再准备"</strong> — 第一周直播课的内容假设你已经做完 Pre-work。没做的同学第一节课基本都跟不上。</li>
<li><strong>"我看完就行了"</strong> — 编程是肌肉记忆，看 100 遍不如敲一遍。Lab 都是手动输入，不要复制粘贴。</li>
<li><strong>"我用 ChatGPT 直接生成代码就好"</strong> — Pre-work 阶段恰恰要刻意不用 AI 写代码。基础打不牢，后面用 AI 生成的代码你看不懂、改不动、调不出 bug。</li>
</ul>

<h2>做完 Pre-work 你应该具备的状态</h2>
<ul>
<li>看到一段 100 行以内的 Python 代码，能 5 分钟内说清楚它做什么</li>
<li>能在自己的电脑上跑通一个调用 OpenAI API 的脚本</li>
<li>有一个 Git repo，能 push 到 GitHub 自己的账号</li>
<li>能登录 AWS Console，知道 EC2/S3/IAM 在哪里</li>
<li>看到报错信息不慌，知道复制错误信息去 Google/ChatGPT 问</li>
</ul>
<p>具备这些就够了。开课见。</p>"""

# ============================================================
# L02 — Lab: Python Hello World
# ============================================================
lm["L02"] = """<h2>这个 Lab 在教什么</h2>
<p>第一行 Python 代码。看起来很傻，但它在验证一件关键的事：<strong>你的电脑能听懂 Python，并且能把结果反馈给你</strong>。这条链路一通，后面才有讨论一切语法的基础。</p>

<h2>开始前你需要知道</h2>
<h3>print() 不是"显示"，是"调用"</h3>
<p><code>print("Hello")</code> 这一行其实在做三件事：</p>
<ol>
<li>找到名为 <code>print</code> 的内置函数</li>
<li>把括号里的字符串作为参数传给它</li>
<li>函数内部把字符串送到标准输出（stdout），你的终端就显示出来</li>
</ol>
<p>理解这个比记住语法更重要。后面你会调用 <code>requests.get()</code>、<code>openai.chat.completions.create()</code>、<code>langchain.invoke()</code>，它们的本质都一样：<strong>函数名 + 参数 = 一次调用</strong>。</p>

<h3>字符串为什么要加引号</h3>
<p>计算机要分辨：<code>Hello</code> 是一个变量名，还是文字内容？引号就是这个分辨标志。</p>
<pre><code>name = "Alice"   # 引号里的 Alice 是字符串内容
print(name)      # 不加引号的 name 是变量，会查找它的值
print("name")    # 加了引号，就是直接打印这4个字母
</code></pre>
<p>这是新手最常踩的坑，做完这步你以后就不会再混淆了。</p>

<h2>你会动手做的</h2>
<ul>
<li>用 <code>print()</code> 输出 "Hello, SigmaQ!"</li>
<li>定义 4 种基本类型的变量：<code>int</code>、<code>float</code>、<code>str</code>、<code>bool</code></li>
<li>用 f-string 做字符串插值：<code>f"My name is {name}"</code></li>
<li>故意写一个错误（比如把 print 写成 Print），看 Python 怎么报错</li>
</ul>

<h2>常见坑</h2>
<table>
<tr><th>错误</th><th>报错信息</th><th>原因</th></tr>
<tr><td><code>Print("Hello")</code></td><td>NameError: name 'Print' is not defined</td><td>Python 区分大小写</td></tr>
<tr><td><code>print("Hello)</code></td><td>SyntaxError: EOL while scanning string literal</td><td>引号不成对</td></tr>
<tr><td><code>print（"Hello"）</code></td><td>SyntaxError</td><td>用了中文括号</td></tr>
<tr><td><code>print "Hello"</code></td><td>SyntaxError</td><td>Python 2 写法，3.x 必须加括号</td></tr>
</table>

<h2>做完这个 Lab 你能</h2>
<ul>
<li>看到一行 print 语句，立刻知道它会输出什么</li>
<li>区分变量名和字符串内容</li>
<li>看到 SyntaxError/NameError 知道大概是什么问题</li>
<li>有信心继续做下一个 Lab</li>
</ul>

<h2>完成标准</h2>
<p>Lab 内所有测试用例通过即完成。预计 15-20 分钟。手动敲代码，不要复制粘贴——你的手指需要记住引号和括号的位置，这是肌肉记忆，复制粘贴学不会。</p>"""

# ============================================================
# L03 — Lab: Python 变量与类型
# ============================================================
lm["L03"] = """<h2>这个 Lab 在教什么</h2>
<p>Python 的 4 种核心数据类型：<code>int</code>、<code>float</code>、<code>str</code>、<code>bool</code>，以及它们之间的转换。这是后面所有数据处理的基础。</p>

<h2>为什么类型这么重要</h2>
<p>看这个例子：</p>
<pre><code>age = "25"          # 用户从表单提交过来，是字符串
next_year = age + 1 # TypeError: can only concatenate str (not "int") to str
</code></pre>
<p>这是新手最常见的 bug。看起来 <code>"25"</code> 和 <code>25</code> 一样，但 Python 把它们当成两种完全不同的东西。前者是文本（不能做加减），后者是数字（不能拼接到字符串后面）。</p>
<p>修复方法：</p>
<pre><code>age = int("25")     # 显式转成整数
next_year = age + 1 # ✓ 26
</code></pre>

<h2>四种类型速查表</h2>
<table>
<tr><th>类型</th><th>用途</th><th>例子</th><th>常见操作</th></tr>
<tr><td><code>int</code></td><td>整数计数</td><td><code>age = 25</code></td><td>+ - * // %</td></tr>
<tr><td><code>float</code></td><td>小数测量</td><td><code>price = 19.99</code></td><td>同上 + round()</td></tr>
<tr><td><code>str</code></td><td>文本</td><td><code>name = "Alice"</code></td><td>+ 拼接、.upper()、切片</td></tr>
<tr><td><code>bool</code></td><td>真假开关</td><td><code>is_active = True</code></td><td>and、or、not</td></tr>
</table>

<h2>你会动手做的</h2>
<ul>
<li>用 <code>type()</code> 查看变量的真实类型</li>
<li>在 <code>int</code> 和 <code>str</code> 之间相互转换：<code>int("25")</code>、<code>str(25)</code></li>
<li>注意 <code>float("3.14")</code> 和 <code>int("3.14")</code> 的区别（后者会报错）</li>
<li>体会 <code>bool(0)</code>、<code>bool("")</code>、<code>bool([])</code> 都是 False（"假值"概念）</li>
</ul>

<h2>三个最容易踩的坑</h2>
<ol>
<li><strong><code>int("3.14")</code> 会报错</strong> — int 只能转纯数字字符串，有小数点要先转 float：<code>int(float("3.14"))</code> = 3</li>
<li><strong><code>"5" + 3</code> 报错，<code>"5" * 3</code> 不报错</strong> — 后者是字符串重复："555"。这种"看起来对"的隐藏 bug 最难找</li>
<li><strong><code>0.1 + 0.2 != 0.3</code></strong> — 浮点数精度问题，结果是 0.30000000000000004。涉及金额计算用 <code>decimal.Decimal</code></li>
</ol>

<h2>真实场景预演</h2>
<p>开课后你会反复遇到这种代码：</p>
<pre><code># 从 OpenAI API 返回里取 token 数量
response = openai.chat.completions.create(...)
total_tokens = response.usage.total_tokens   # 这是 int
cost = total_tokens * 0.00003                # int * float = float
print(f"This call cost ${cost:.4f}")          # 用 f-string 格式化输出
</code></pre>
<p>看懂这段代码需要的就是这节 Lab 教的东西：知道每个变量的类型、会做类型间的运算、会用 f-string 格式化。</p>

<h2>完成标准</h2>
<p>Lab 内所有测试用例通过。重点关注：<code>type()</code> 输出格式、字符串和数字相互转换、布尔值的运算规则。预计 20 分钟。</p>"""

# ============================================================
# L04 — Lab: Python 函数
# ============================================================
lm["L04"] = """<h2>这个 Lab 在教什么</h2>
<p>函数是<strong>代码可维护性的分水岭</strong>。把"做某件事的逻辑"封装成一个名字，以后调用名字就行。这节教你 <code>def</code>、参数、<code>return</code>、默认值——四个东西，覆盖 90% 的函数写法。</p>

<h2>为什么必须学函数</h2>
<p>看一段没有函数的代码：</p>
<pre><code>price1 = 100
tax1 = price1 * 0.1
total1 = price1 + tax1
print(f"Item 1: ${total1}")

price2 = 200
tax2 = price2 * 0.1
total2 = price2 + tax2
print(f"Item 2: ${total2}")

price3 = 300
tax3 = price3 * 0.1
total3 = price3 + tax3
print(f"Item 3: ${total3}")
</code></pre>
<p>三行重复的逻辑写了三遍。如果税率从 10% 改成 15%，你要改三个地方。如果有 100 个商品呢？</p>
<p>用函数：</p>
<pre><code>def calculate_total(price, tax_rate=0.1):
    tax = price * tax_rate
    return price + tax

print(f"Item 1: ${calculate_total(100)}")
print(f"Item 2: ${calculate_total(200)}")
print(f"Item 3: ${calculate_total(300)}")
</code></pre>
<p>逻辑只写一次，税率改一处生效。这就是函数存在的意义。</p>

<h2>def vs 调用：两个不同的时刻</h2>
<pre><code>def greet(name):              # 这一步只是"注册"函数，不会执行
    print(f"Hello, {name}!")

# 这里函数体还没运行
print("Before call")

greet("Alice")                # 这一步才真正执行函数体
</code></pre>
<p>新手常见误解：以为写完 <code>def</code> 函数就跑了。其实 <code>def</code> 只是告诉 Python "我有这么一个函数，记下来"。真正执行要看到 <code>greet(...)</code> 这行。</p>

<h2>print vs return：最关键的区别</h2>
<table>
<tr><th></th><th>print</th><th>return</th></tr>
<tr><td>作用</td><td>把内容显示到屏幕</td><td>把值送出函数，给调用方继续用</td></tr>
<tr><td>结果</td><td>看得见，但拿不到</td><td>拿得到，但默认看不见</td></tr>
<tr><td>能否继续运算</td><td>不能（返回 None）</td><td>能</td></tr>
</table>
<pre><code>def add_print(a, b):
    print(a + b)              # 显示出来

def add_return(a, b):
    return a + b              # 把值返回

x = add_print(2, 3)            # 屏幕显示 5，但 x = None
y = add_return(2, 3)           # 屏幕没显示，但 y = 5

result = add_return(2, 3) * 10 # ✓ 50
result = add_print(2, 3) * 10  # ✗ TypeError: NoneType * int
</code></pre>
<p><strong>记住</strong>：调试时用 print，业务逻辑用 return。新手最大的坑就是该用 return 的地方用了 print，结果后面拿不到值。</p>

<h2>你会动手做的</h2>
<ul>
<li>定义无参函数 <code>greet()</code> 并调用</li>
<li>定义带参函数 <code>greet(name)</code>，传入不同名字调用多次</li>
<li>用 <code>return</code> 让函数返回计算结果</li>
<li>给参数设默认值：<code>def greet(name="World")</code></li>
<li>体会"调用没传参数，用默认值"的行为</li>
</ul>

<h2>常见坑</h2>
<ol>
<li><strong>忘了 return</strong> — 函数没写 return，默认返回 None。后面 <code>x = my_func()</code> 然后 <code>x + 1</code> 就报错</li>
<li><strong>缩进错误</strong> — Python 用缩进定义函数体范围。<code>return</code> 没缩进就跑出函数外面了</li>
<li><strong>参数顺序搞反</strong> — <code>def divide(a, b)</code>，调用 <code>divide(10, 2)</code> = 5 而不是 0.2</li>
</ol>

<h2>完成标准</h2>
<p>Lab 内所有测试用例通过。重点确保你能区分 print 和 return 的场景。预计 25-30 分钟。</p>"""

# ============================================================
# L05 — Lab: Python API 基础
# ============================================================
lm["L05"] = """<h2>这个 Lab 在教什么</h2>
<p>调 API 的三件事：<strong>看懂返回结构</strong>、<strong>判断状态码</strong>、<strong>从嵌套 JSON 取字段</strong>。整个 AI Engineer Bootcamp 你会反复做这三件事——调 OpenAI、调 LangSmith、调 Pinecone、调你自己写的服务。</p>

<h2>API 返回长什么样</h2>
<p>典型的 JSON 响应结构：</p>
<pre><code>{
  "status": "success",
  "code": 200,
  "message": "OK",
  "data": {
    "user_id": "u_123",
    "name": "Alice",
    "membership": {
      "level": "gold",
      "expires_at": "2026-12-31"
    }
  }
}
</code></pre>
<p>三层结构：</p>
<ol>
<li><strong>外壳</strong>（status/code/message）：告诉你请求成功还是失败</li>
<li><strong>data</strong>：业务数据放这里</li>
<li><strong>嵌套对象</strong>：data 里面还可以有 dict 或 list</li>
</ol>
<p>OpenAI、Anthropic、Google、几乎所有现代 API 都长这个样子，只是字段名略有不同。学会处理这种结构 = 学会处理所有 REST API。</p>

<h2>四步处理流程</h2>
<pre><code>import json

# Step 1: 拿到 JSON 字符串（实际项目从 requests.get() 拿）
raw = '{"code": 200, "data": {"name": "Alice", "membership": {"level": "gold"}}}'

# Step 2: 解析成 Python dict
response = json.loads(raw)

# Step 3: 判断状态码
if response["code"] != 200:
    print(f"Request failed: {response.get('message')}")
else:
    # Step 4: 取嵌套字段
    user_name = response["data"]["name"]
    level = response["data"]["membership"]["level"]
    print(f"User: {user_name}, Level: {level}")
</code></pre>

<h2>你会动手做的</h2>
<ul>
<li>用 <code>json.loads()</code> 把字符串解析成 Python dict</li>
<li>判断 status code，写 if/else 分支</li>
<li>从嵌套 dict 里取字段：<code>response["data"]["user"]["name"]</code></li>
<li>处理可能不存在的字段：<code>response.get("data", {}).get("name", "Unknown")</code></li>
</ul>

<h2>三个救命技巧</h2>

<h3>1. 用 .get() 防止 KeyError</h3>
<pre><code># ✗ 字段不存在直接崩溃
name = response["data"]["name"]   # KeyError if 'data' missing

# ✓ 字段不存在返回 None 或默认值
name = response.get("data", {}).get("name", "Unknown")
</code></pre>

<h3>2. 用 json.dumps(indent=2) 看结构</h3>
<p>API 返回结构复杂，不知道字段在哪一层？</p>
<pre><code>print(json.dumps(response, indent=2))
</code></pre>
<p>这一行让你看清楚所有层级，比 print(response) 不知道清晰多少倍。</p>

<h3>3. 状态码三档分类</h3>
<table>
<tr><th>范围</th><th>含义</th><th>怎么处理</th></tr>
<tr><td>2xx</td><td>成功</td><td>取 data 继续业务逻辑</td></tr>
<tr><td>4xx</td><td>客户端错误（你的请求有问题）</td><td>检查参数、auth、URL，不要重试</td></tr>
<tr><td>5xx</td><td>服务端错误（对方挂了）</td><td>等几秒重试，重试 3 次还不行就告警</td></tr>
</table>

<h2>真实场景预演</h2>
<p>这是开课后你会写的 OpenAI 调用代码：</p>
<pre><code>import openai

response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello"}]
)

# response 是嵌套对象，取字段的方式跟这节 Lab 教的一模一样
content = response.choices[0].message.content
tokens = response.usage.total_tokens
print(f"Response: {content}")
print(f"Used {tokens} tokens")
</code></pre>
<p>看到 <code>.choices[0].message.content</code> 这种 4 层嵌套了吗？这就是为什么这节 Lab 必须做。</p>

<h2>完成标准</h2>
<p>Lab 内所有测试用例通过。能熟练用 <code>.get()</code> 安全取嵌套字段。预计 20-25 分钟。</p>"""

# ============================================================
# L06 — Lab: Git 首次提交
# ============================================================
lm["L06"] = """<h2>这个 Lab 在教什么</h2>
<p>Git 最基础的工作流：<code>git status</code> → 修改文件 → <code>git add</code> → <code>git commit</code> → <code>git log</code>。这五个命令覆盖了你 80% 的日常 Git 操作。这节 Lab 用浏览器内的虚拟仓库环境，不需要装 Git。</p>

<h2>用购物车比喻理解 Git</h2>
<p>Git 有三个区域，新手最容易搞混：</p>
<table>
<tr><th>Git 术语</th><th>购物车比喻</th><th>对应命令</th></tr>
<tr><td>Working Directory</td><td>商场货架</td><td>你直接编辑文件的地方</td></tr>
<tr><td>Staging Area (Index)</td><td>购物车</td><td><code>git add</code> 放进去</td></tr>
<tr><td>Repository</td><td>已结账的购物记录</td><td><code>git commit</code> 结账</td></tr>
</table>
<p>为什么要有"购物车"这一步？因为你不一定每次都要把所有改的文件一起提交。比如你修了 5 个文件，但只想把其中 3 个相关的打包成一个 commit，剩下 2 个下次再提。Staging Area 就是让你挑选的地方。</p>

<h2>五个命令详解</h2>

<h3>1. git status — 我现在是什么状态？</h3>
<pre><code>$ git status
On branch main
Changes not staged for commit:
  modified:   README.md
Untracked files:
  hello.py
</code></pre>
<p>三种状态：</p>
<ul>
<li><strong>Untracked</strong>：Git 完全不知道这个文件存在</li>
<li><strong>Modified</strong>：Git 知道这个文件，但你改了还没 add</li>
<li><strong>Staged</strong>：你已经 add 了，等待 commit</li>
</ul>

<h3>2. git add — 放进购物车</h3>
<pre><code>git add hello.py        # 加单个文件
git add .                # 加当前目录所有改动
git add *.py             # 加所有 .py 文件
</code></pre>
<p><strong>新手常见误区</strong>：以为 <code>git add</code> 会"上传"或"保存"。不会，它只是告诉 Git "下次 commit 的时候带上这些"。文件实际还在你硬盘上。</p>

<h3>3. git commit — 结账</h3>
<pre><code>git commit -m "Add hello.py with greeting function"
</code></pre>
<p><code>-m</code> 后面是 commit message。写好 message 是工程师素养的体现：</p>
<table>
<tr><th>差的 message</th><th>好的 message</th></tr>
<tr><td>"update"</td><td>"Fix login button not responding on mobile Safari"</td></tr>
<tr><td>"fix bug"</td><td>"Fix race condition in payment callback handler"</td></tr>
<tr><td>"changes"</td><td>"Add retry logic for OpenAI API timeout errors"</td></tr>
</table>

<h3>4. git log — 看历史</h3>
<pre><code>$ git log
commit a1b2c3d... (HEAD -&gt; main)
Author: You &lt;you@example.com&gt;
Date:   ...
    Add hello.py with greeting function
</code></pre>
<p>每个 commit 有个独特的 hash（a1b2c3d...）。这个 hash 是这个 commit 的"身份证"，全世界唯一。后面学 rebase、cherry-pick 都要用到。</p>

<h2>你会动手做的</h2>
<ul>
<li>跑 <code>git status</code> 看初始状态</li>
<li>新建一个文件，再跑 <code>git status</code>，观察 Untracked</li>
<li>用 <code>git add</code> 把文件放入暂存区</li>
<li>用 <code>git commit -m</code> 提交</li>
<li>用 <code>git log</code> 看你刚才创建的 commit</li>
<li>修改一次文件，重复这个流程</li>
</ul>

<h2>常见坑</h2>
<ol>
<li><strong>commit 之后才发现写错了 message</strong> — <code>git commit --amend -m "新的 message"</code>，但只能改最近一次没 push 的</li>
<li><strong>add 错了文件想撤回</strong> — <code>git restore --staged 文件名</code>（旧版用 <code>git reset HEAD</code>）</li>
<li><strong>第一次 commit 提示 "Please tell me who you are"</strong> — 跑两条命令：<br/><code>git config --global user.email "you@example.com"</code><br/><code>git config --global user.name "Your Name"</code></li>
</ol>

<h2>完成标准</h2>
<p>Lab 内所有步骤验证通过。你能独立解释 Working Directory / Staging / Repository 三者的区别。预计 20 分钟。</p>"""

# ============================================================
# L07 — Lab: Git 分支基础
# ============================================================
lm["L07"] = """<h2>这个 Lab 在教什么</h2>
<p>Git 分支是它最强大的功能。理解分支后，你可以<strong>放心大胆地实验，不怕搞坏主代码</strong>。这节教你创建、切换、在分支上独立提交——团队协作的基础。</p>

<h2>用平行宇宙理解分支</h2>
<p>想象你在写代码。你有一个想法："我想试试用 Redis 做缓存，但不确定行不行"。怎么办？</p>
<p><strong>没有分支的世界</strong>：你直接在主代码上改，改了一半发现方案不对，要么硬着头皮调通，要么手动撤回所有改动。</p>
<p><strong>有分支的世界</strong>：你创建一个 <code>try-redis</code> 分支，在上面随便折腾。试通了就合并回主分支；试不通就直接删掉这个分支，主代码毫发无损。</p>
<p>分支就是平行宇宙——同一份代码的不同发展路线，互不干扰。</p>

<h2>分支的本质：一个指针</h2>
<p>Git 分支不是"复制一份代码"。它只是一个<strong>指向某个 commit 的指针</strong>，几乎不占空间。这就是为什么 Git 创建分支几乎是瞬间完成——它没有真的复制任何文件。</p>
<pre><code>main      → commit C → commit B → commit A
              ↑
              HEAD（你现在在这个 commit 上）

# 创建新分支 feature
main      → commit C
feature   → commit C   ← 同一个 commit，只是多了一个名字
</code></pre>
<p>当你在 feature 上提交新 commit 时：</p>
<pre><code>main      → commit C
feature   → commit D → commit C   ← feature 往前走了一步
</code></pre>
<p>main 完全没动。这就是"互不干扰"的实现原理。</p>

<h2>四个核心命令</h2>

<h3>1. git branch — 看分支 / 创建分支</h3>
<pre><code>git branch                    # 列出所有分支
git branch feature-login      # 创建 feature-login 分支（但不切换过去）
</code></pre>

<h3>2. git checkout / git switch — 切换分支</h3>
<pre><code>git checkout feature-login    # 老命令，仍然好用
git switch feature-login      # 新命令，更明确（推荐）

git checkout -b new-branch    # 创建并立即切换
git switch -c new-branch      # 同上，新写法
</code></pre>

<h3>3. git log --oneline --graph --all — 可视化分支</h3>
<pre><code>$ git log --oneline --graph --all
* d5e6f7g (HEAD -&gt; feature) Add login form
* a1b2c3d (main) Update README
</code></pre>
<p>这个命令是排查分支混乱的救命神器。强烈建议设置 alias：</p>
<pre><code>git config --global alias.lg "log --oneline --graph --all"
# 以后只要 git lg
</code></pre>

<h3>4. git branch -d — 删分支</h3>
<pre><code>git branch -d old-feature     # 安全删除（已合并的分支才能删）
git branch -D old-feature     # 强制删除（无论是否合并）
</code></pre>

<h2>真实工作流程</h2>
<p>一个 typical 的 feature 开发流程：</p>
<pre><code>git switch main                       # 1. 切回主分支
git pull                              # 2. 拉最新代码
git switch -c feature/add-search      # 3. 基于最新 main 开新分支
# ... 修改文件、写代码 ...
git add .                             # 4. 暂存
git commit -m "Add search bar"         # 5. 提交
git push -u origin feature/add-search # 6. 推到远程
# 然后去 GitHub 提 Pull Request
</code></pre>

<h2>你会动手做的</h2>
<ul>
<li>用 <code>git branch</code> 看当前分支</li>
<li>创建一个新分支并切换过去</li>
<li>在新分支上修改文件、提交</li>
<li>切回 main 分支，确认你的改动"消失"了（其实在另一个分支上）</li>
<li>切回 feature 分支，确认改动还在</li>
<li>用 <code>git log --graph</code> 看分支结构</li>
</ul>

<h2>常见坑</h2>
<ol>
<li><strong>在错误的分支上 commit 了</strong> — 用 <code>git log --oneline</code> 找到 commit hash，<code>git switch 正确分支</code>，<code>git cherry-pick &lt;hash&gt;</code> 把它搬过来，再回原分支 reset 掉</li>
<li><strong>切分支时报 "Your local changes would be overwritten"</strong> — 你有未提交的改动。要么先 commit，要么 <code>git stash</code> 暂存起来</li>
<li><strong>删了分支后悔了</strong> — <code>git reflog</code> 找回之前的 commit hash，<code>git switch -c 分支名 &lt;hash&gt;</code> 恢复</li>
</ol>

<h2>完成标准</h2>
<p>Lab 内所有步骤验证通过。你能独立解释"为什么 Git 分支不占空间"。预计 20 分钟。</p>"""

# ============================================================
# L08 — Lab: EC2 基础
# ============================================================
lm["L08"] = """<h2>这个 Lab 在教什么</h2>
<p>EC2（Elastic Compute Cloud）是 AWS 最基础的服务：<strong>租一台虚拟机</strong>。这节带你过一遍完整生命周期：选机型 → 启动 → SSH 进去 → 停止 → 终止。整个 AI Bootcamp 后期部署模型、跑训练任务，都会用到 EC2。</p>

<h2>EC2 是什么</h2>
<p>本质就是"<strong>按小时租虚拟机</strong>"。AWS 在全球数据中心放了一堆物理服务器，你通过 EC2 租用其中的一部分计算资源。租多少、租多久，自己选。</p>
<table>
<tr><th>对比</th><th>自己买服务器</th><th>EC2</th></tr>
<tr><td>初期成本</td><td>几万到几十万</td><td>$0（按小时付）</td></tr>
<tr><td>扩容</td><td>买新机器、装系统、上架</td><td>点几下，1 分钟搞定</td></tr>
<tr><td>缩容</td><td>很难退掉</td><td>停掉就不收钱</td></tr>
<tr><td>跨地域</td><td>要在不同国家建机房</td><td>选个 Region 就行</td></tr>
</table>
<p>这就是为什么 2010 年后所有创业公司一开始都用云。</p>

<h2>实例类型怎么选</h2>
<p>EC2 实例类型像汽车——按用途分系列，按大小分尺寸。命名规则：<code>系列 + 代数 + 大小</code>，比如 <code>t3.micro</code>、<code>m5.xlarge</code>、<code>c6g.4xlarge</code>。</p>
<table>
<tr><th>系列</th><th>定位</th><th>典型用途</th></tr>
<tr><td>T (Burstable)</td><td>突发性能</td><td>开发环境、低流量网站</td></tr>
<tr><td>M (General)</td><td>均衡</td><td>Web 服务、小型数据库</td></tr>
<tr><td>C (Compute)</td><td>CPU 强</td><td>批处理、视频编码</td></tr>
<tr><td>R (Memory)</td><td>内存大</td><td>大型数据库、内存缓存</td></tr>
<tr><td>P / G</td><td>带 GPU</td><td>训练模型、推理服务</td></tr>
</table>
<p><strong>选型经验</strong>：不知道选什么就先选 t3.medium 或 m5.large。小了等遇到性能问题再升，避免一开始就选个 16xlarge 烧钱。</p>

<h2>实例的生命周期</h2>
<pre><code>pending → running → stopping → stopped → terminated
   ↓         ↑         ↓          ↑          ↓
启动中    运行中    停止中     已停止     已终止
                      ↑          ↓
                     可重启   不可恢复
</code></pre>
<table>
<tr><th>状态</th><th>是否计费</th><th>能否恢复</th></tr>
<tr><td>running</td><td>按小时计费 ✓</td><td>—</td></tr>
<tr><td>stopped</td><td>EBS 存储费用 ✓，CPU 不收 ✗</td><td>能 start 回来</td></tr>
<tr><td>terminated</td><td>不收费 ✗</td><td>不能恢复，数据全没</td></tr>
</table>
<p><strong>新手最容易犯的错</strong>：开了一台 EC2 学习用，下课忘了 stop，结果一个月收到几百刀账单。养成下课 stop、不再用 terminate 的习惯。</p>

<h2>AMI 是什么</h2>
<p>AMI = Amazon Machine Image = "<strong>系统镜像</strong>"。决定你启动的虚拟机里装的是 Ubuntu 还是 Amazon Linux 还是 Windows。</p>
<p>常用镜像：</p>
<ul>
<li><code>Amazon Linux 2023</code> — AWS 官方维护，跟 AWS 服务集成最好</li>
<li><code>Ubuntu 22.04 LTS</code> — 社区最熟悉，资料最多</li>
<li><code>Deep Learning AMI</code> — 预装 PyTorch/TF/CUDA，AI 训练首选</li>
</ul>

<h2>你会动手做的（在 LocalStack 模拟环境）</h2>
<ul>
<li>用 <code>aws ec2 describe-instance-types</code> 看实例类型列表</li>
<li>用 <code>aws ec2 run-instances</code> 启动一台 t3.micro</li>
<li>用 <code>aws ec2 describe-instances</code> 查看实例状态</li>
<li>用 <code>aws ec2 stop-instances</code> 停止</li>
<li>用 <code>aws ec2 terminate-instances</code> 终止</li>
</ul>

<h2>三个救命提醒</h2>
<ol>
<li><strong>开 Billing Alert</strong> — AWS Console → Billing → Budgets，设个 $5 的告警。超了就发邮件，避免账单惊喜</li>
<li><strong>用 Free Tier</strong> — t2.micro / t3.micro 每月 750 小时免费（够一台机器全月运行）。学习阶段绝对够用</li>
<li><strong>下课 stop，不要 terminate</strong> — terminate 会清空数据，stop 只是关机，重启就回来</li>
</ol>

<h2>完成标准</h2>
<p>Lab 内所有 CLI 操作完成。你能独立解释 stop 和 terminate 的区别。预计 35-45 分钟。</p>"""

# ============================================================
# L09 — Lab: IAM 权限管理
# ============================================================
lm["L09"] = """<h2>这个 Lab 在教什么</h2>
<p>IAM（Identity and Access Management）是 AWS <strong>最重要</strong>的服务，没有之一。它决定<strong>谁能做什么</strong>。这节带你理解 4 个核心实体：User、Group、Role、Policy，并学会写 Policy JSON。AI Bootcamp 后期所有 AWS 操作都绕不开 IAM。</p>

<h2>为什么 IAM 是第一重要</h2>
<p>想象一个没有 IAM 的世界：你的公司有 10 个开发者，所有人都用 root 账号登 AWS。结果：</p>
<ul>
<li>实习生不小心删了生产数据库</li>
<li>离职员工的 access key 还在用</li>
<li>有人不小心把 S3 bucket 设成 public，客户数据泄露上新闻</li>
</ul>
<p>IAM 解决这些问题的方式是：<strong>每个人只给他工作需要的最小权限</strong>。这叫"最小权限原则"（Principle of Least Privilege），是云安全的第一法则。</p>

<h2>四大核心实体</h2>

<h3>1. User — 一个具体的人或一个服务</h3>
<p>每个开发者一个 User。每个 User 有自己的密码（登 Console）和 access key（用 CLI/SDK）。</p>

<h3>2. Group — 一组 User</h3>
<p>把"开发组"做成一个 Group，把权限附加在 Group 上。新人来了往 Group 里加，离职了从 Group 里移除。比逐个改 User 权限省事 100 倍。</p>

<h3>3. Role — 临时身份，给服务用</h3>
<p>这是 IAM 最妙的设计。比如你的 Lambda 函数要读 S3，你不应该在代码里硬编码 access key（那太危险了）。正确做法：</p>
<ol>
<li>创建一个 Role，附加 "可以读 S3" 的 Policy</li>
<li>让 Lambda 假扮（assume）这个 Role</li>
<li>Lambda 自动获得临时凭证，过期就续</li>
</ol>
<p>整个过程没有任何 access key 出现在代码里。这叫 "credential-less" 架构，是云原生的标配。</p>

<h3>4. Policy — 权限规则</h3>
<p>Policy 是一段 JSON，描述 "<strong>谁能对哪些资源做哪些操作</strong>"。下面是一个真实例子：</p>
<pre><code>{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-bucket",
        "arn:aws:s3:::my-bucket/*"
      ]
    }
  ]
}
</code></pre>
<p>读法：<strong>允许</strong>对 <code>my-bucket</code> 这个 bucket 做 <strong>GetObject 和 ListBucket</strong> 两个操作。其他任何操作（PutObject、DeleteObject、ListAllBuckets...）都不允许。</p>

<h2>Policy 的 5 个关键字段</h2>
<table>
<tr><th>字段</th><th>含义</th><th>例子</th></tr>
<tr><td>Effect</td><td>允许还是拒绝</td><td>Allow / Deny</td></tr>
<tr><td>Action</td><td>哪些操作</td><td>s3:GetObject、ec2:RunInstances</td></tr>
<tr><td>Resource</td><td>对哪些资源</td><td>ARN（Amazon Resource Name）</td></tr>
<tr><td>Principal</td><td>谁（仅 Resource Policy 用）</td><td>{"AWS": "arn:aws:iam::123:user/Alice"}</td></tr>
<tr><td>Condition</td><td>什么条件下生效</td><td>IP 限制、MFA 必需等</td></tr>
</table>

<h2>最佳实践</h2>
<ol>
<li><strong>不要用 root 账号日常操作</strong> — root 只在创建第一个 Admin User 时用一次，之后锁起来</li>
<li><strong>每个人独立 User</strong> — 不要共享 access key</li>
<li><strong>权限附在 Group 上</strong> — 不要直接附在 User 上</li>
<li><strong>用 Role 给服务，不用 access key</strong> — Lambda、EC2、ECS 都该用 Role</li>
<li><strong>开 MFA</strong> — 至少 root 和 admin 必须开</li>
<li><strong>定期 Access Analyzer 扫描</strong> — 找出闲置权限和过度权限</li>
</ol>

<h2>你会动手做的（LocalStack 模拟）</h2>
<ul>
<li>创建一个 IAM User</li>
<li>创建一个 Group，把 User 加进去</li>
<li>写一个 Policy JSON，附加给 Group</li>
<li>创建一个 Role，让其他服务可以 assume</li>
<li>用 access key 模拟 CLI 操作</li>
</ul>

<h2>常见坑</h2>
<ol>
<li><strong>"Access Denied" 不一定是权限不够</strong> — 也可能是 Resource ARN 写错、Region 不对、有 Deny 优先于 Allow</li>
<li><strong>Policy 改了不立即生效</strong> — IAM 是 eventually consistent，可能要等几秒</li>
<li><strong>access key 泄漏</strong> — 千万不要 commit 进 Git。如果不小心 push 了，立刻去 IAM 把这个 key 禁用、生成新的。GitHub 会自动扫描，泄漏后 1 分钟内就会被全球扫描机器人发现</li>
</ol>

<h2>完成标准</h2>
<p>Lab 内所有步骤完成。你能写出一个允许某个 User 读特定 S3 bucket 的 Policy。预计 40-55 分钟。</p>"""

# ============================================================
# L10 — Lab: Secrets Manager
# ============================================================
lm["L10"] = """<h2>这个 Lab 在教什么</h2>
<p>怎么<strong>正确管理 API key、数据库密码、OAuth token</strong> 这些敏感凭证。AWS Secrets Manager 是云上事实标准。这节学完，你的 OpenAI API key 就不会再出现在代码里了。</p>

<h2>为什么不能硬编码密钥</h2>
<p>看这段代码，能找出问题吗？</p>
<pre><code>import openai

openai.api_key = "sk-proj-abc123def456ghi789..."

response = openai.chat.completions.create(...)
</code></pre>
<p>问题：API key 写在代码里。一旦你 <code>git push</code>，这个 key 就永远留在 Git 历史里了，即使你后来删掉。GitHub 有自动扫描机器人，<strong>你的 key 在 push 后 60 秒内就会被全球扫描到</strong>，可能立刻被人拿去刷 token 烧你的钱。</p>
<p>真实案例：有个开发者把 AWS root key push 到了 GitHub，2 小时后醒来发现账单 5 万美刀——攻击者用他的账号开了 100 台 EC2 挖矿。</p>

<h2>四种密钥管理方式（从差到好）</h2>
<table>
<tr><th>方式</th><th>安全性</th><th>问题</th></tr>
<tr><td>硬编码到代码</td><td>★</td><td>Git 历史永久保留，泄漏即灾难</td></tr>
<tr><td>放 .env 文件</td><td>★★</td><td>容易被加进 Git；多环境难管理</td></tr>
<tr><td>环境变量</td><td>★★★</td><td>本地开发可以，但生产环境怎么发？</td></tr>
<tr><td>Secrets Manager</td><td>★★★★★</td><td>正解：集中存储、自动轮换、审计日志</td></tr>
</table>

<h2>Secrets Manager 解决什么</h2>
<ol>
<li><strong>集中存储</strong> — 所有密钥放一个地方，谁有权限谁能取</li>
<li><strong>自动轮换</strong> — 定期自动改密码（比如每 30 天换一次），代码无感</li>
<li><strong>加密存储</strong> — 用 KMS 加密，AWS 自己也看不到内容</li>
<li><strong>审计日志</strong> — CloudTrail 记录每次访问，谁、何时、用什么 IP 取了什么 secret</li>
<li><strong>细粒度权限</strong> — 通过 IAM 控制每个 secret 谁能读、谁能写</li>
</ol>

<h2>核心操作</h2>

<h3>1. 创建 Secret</h3>
<pre><code>aws secretsmanager create-secret \\
  --name openai-api-key \\
  --secret-string '{"api_key":"sk-proj-xxx"}'
</code></pre>

<h3>2. 在代码里读取 Secret</h3>
<pre><code>import boto3, json

def get_openai_key():
    client = boto3.client("secretsmanager", region_name="us-east-1")
    response = client.get_secret_value(SecretId="openai-api-key")
    secret = json.loads(response["SecretString"])
    return secret["api_key"]

import openai
openai.api_key = get_openai_key()  # 永远不出现在代码里
</code></pre>
<p>注意：你的代码里没有任何 API key 字符串。运行时通过 IAM Role 临时获得权限去 Secrets Manager 读，读完用完即抛。</p>

<h3>3. 更新 Secret</h3>
<pre><code>aws secretsmanager update-secret \\
  --secret-id openai-api-key \\
  --secret-string '{"api_key":"sk-new-key"}'
</code></pre>
<p>更新后旧版本会保留一段时间（用版本号 AWSPREVIOUS 访问），万一新 key 有问题可以回滚。</p>

<h3>4. 自动轮换</h3>
<p>给 Secret 关联一个 Lambda 函数，定期触发 Lambda 去生成新密码、更新数据库、更新 Secret。整个过程对应用透明。RDS 数据库的密码轮换 AWS 已经帮你写好了 Lambda 模板，开箱即用。</p>

<h2>Secrets Manager vs Parameter Store</h2>
<table>
<tr><th></th><th>Secrets Manager</th><th>Parameter Store (SSM)</th></tr>
<tr><td>定价</td><td>$0.40/secret/月</td><td>免费（标准层）</td></tr>
<tr><td>自动轮换</td><td>✓ 内置</td><td>✗ 要自己写</td></tr>
<tr><td>跨账号共享</td><td>✓ 原生支持</td><td>✗ 复杂</td></tr>
<tr><td>用什么</td><td>真正的密钥、数据库密码</td><td>非敏感配置（feature flag、URL）</td></tr>
</table>

<h2>你会动手做的（LocalStack 模拟）</h2>
<ul>
<li>创建一个 secret 存 API key</li>
<li>用 CLI 读取这个 secret</li>
<li>更新 secret 的内容</li>
<li>写一段 Python 代码用 boto3 读 secret</li>
<li>了解版本管理（AWSCURRENT vs AWSPREVIOUS）</li>
</ul>

<h2>真实场景预演</h2>
<p>开课后第 6 周你部署 RAG 服务到 AWS 时，你的 stack 会是：</p>
<pre><code>用户请求
   ↓
API Gateway
   ↓
Lambda（带 IAM Role）
   ↓
boto3.client("secretsmanager").get_secret_value("openai-key")
   ↓
拿到 OpenAI key，调用 OpenAI API
   ↓
返回结果
</code></pre>
<p>整个过程没有任何 hard-coded 密钥。这就是云原生应用的标准做法。</p>

<h2>常见坑</h2>
<ol>
<li><strong>每次请求都去 Secrets Manager 取 key</strong> — Secrets Manager 按 API 调用收费，且有 rate limit。生产环境要在 Lambda 容器里 cache 几分钟</li>
<li><strong>Secret 存成纯字符串</strong> — 推荐存 JSON 格式（<code>{"key": "value"}</code>），方便后续加字段</li>
<li><strong>开发和生产用同一个 Secret</strong> — 一定要分开（<code>openai-api-key-dev</code>、<code>openai-api-key-prod</code>），避免开发时不小心改了生产</li>
</ol>

<h2>完成标准</h2>
<p>Lab 内所有 CLI 操作完成。你能独立解释为什么不能把 API key 写到代码里。预计 35-45 分钟。</p>"""

# ============================================================
# Apply to outline.json
# ============================================================
applied = 0
for ph in outline.get("phases", []):
    for les in ph.get("lessons", []):
        code = les.get("code")
        if code in lm:
            old_len = len(les.get("learningMaterial", "") or "")
            les["learningMaterial"] = lm[code]
            new_len = len(lm[code])
            print(f"  {code:6} {old_len:5}字 → {new_len:5}字  {les.get('title','')[:40]}")
            applied += 1

with open("curriculum/ai-engineer-bootcamp/public/outline.json", "w") as f:
    json.dump(outline, f, ensure_ascii=False, indent=2)

print(f"\n✓ Updated {applied} lessons")
