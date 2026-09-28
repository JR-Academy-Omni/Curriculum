// ⚠️ L12 deck 所有代码样例的唯一事实源。
//
// 🔴 全部用 **Node（.mjs）** 写，不用 bash + jq（讲师要求：演示与学员仓库都是 Node 项目）。
//    这么定有三个实打实的好处，讲课时可以说出来：
//      ① Node 项目本来就有 node —— **零额外安装**，课前自查少一项（原来要装 jq）
//      ② `node xxx.mjs` 调用**不需要 chmod +x** —— 原来的「排错第一名」直接消失
//      ③ `JSON.parse` 对 JS 团队是母语，jq 语法反而是门槛
//    **而三行机制一个字没变**：stdin 收 JSON · exit 0 不表态 · exit 2 拦住 + stderr 给它反馈。
//    这一点本身就是很好的教学材料：jq / bash 从来不是机制的一部分。
//
// 🔴 出处纪律（蓝图 §21.1）：官方文档的示例是 **bash + jq** 版本。
//    本文件是它的 **Node 等价实现**，属于「本课写法」，deck 与讲义都标注了。
//    学员去翻官方文档会看到 bash 版 —— 讲义里必须写明这件事，否则他会以为对不上。

export const PROTECT_SH = "#!/usr/bin/env node\n// .claude/hooks/protect-files.mjs\n\nprocess.stdin.setEncoding('utf8');\nlet raw = '';\nfor await (const chunk of process.stdin) raw += chunk;\n\nconst { tool_input = {} } = JSON.parse(raw || '{}');\nconst file = (tool_input.file_path ?? '').replaceAll('\\\\', '/');\n\nconst PROTECTED = ['.env', 'package-lock.json', 'node_modules/', '.git/'];\n\nconst hit = PROTECTED.find((p) => file.includes(p));\nif (hit) {\n  console.error(`Blocked: ${file} 命中保护规则 '${hit}'`);\n  console.error('改配置请改 .env.example，依赖请用 npm install。');\n  process.exit(2);\n}\n\nprocess.exit(0);";
export const SETTINGS_PRE = "{ \"hooks\": { \"PreToolUse\": [{\n  \"matcher\": \"Edit|Write\",\n  \"hooks\": [{\n    \"type\": \"command\",\n    \"command\": \"node \\\"$CLAUDE_PROJECT_DIR/.claude/hooks/protect-files.mjs\\\"\"\n  }]\n}]}}";
export const SETTINGS_POST = "{ \"hooks\": { \"PostToolUse\": [{\n  \"matcher\": \"Edit|Write\",\n  \"hooks\": [{\n    \"type\": \"command\",\n    \"command\": \"node \\\"$CLAUDE_PROJECT_DIR/.claude/hooks/protect-files.mjs\\\"\"\n  }]\n}]}}";
export const STDIN_JSON = "{\n  \"session_id\": \"abc123\",\n  \"cwd\": \"/你的项目\",\n  \"hook_event_name\": \"PreToolUse\",\n  \"tool_name\": \"Write\",\n  \"tool_input\": {\n    \"file_path\": \"/你的项目/.env\"\n  }\n}";
export const ANATOMY = "let raw = '';\nfor await (const c of process.stdin)\n  raw += c;                         // 收：整坨 JSON 进来\n\nconst { tool_input } = JSON.parse(raw);\nconst file = tool_input.file_path;  // 挑：取你要判的字段\n\nif (file.includes('.env')) {        // 判：这一行就是你的规矩\n  console.error('Blocked: ...');    // 说：写给它看的话（走 stderr）\n  process.exit(2);                  // 拦\n}\n\nprocess.exit(0);                    // 不表态（注意：不是放行）";
export const CRASH1 = "const PROTECTED = ['.'];";
export const CRASH1_ORIG = "const PROTECTED = ['.env', 'package-lock.json', 'node_modules/', '.git/'];";
export const CRASH3 = "  console.error(`Blocked: ${file} 命中保护规则 '${hit}'`);\n  process.exit(1);";
export const DEBUG_1 = "# 正面：该拦的 —— 要看到 2\necho '{\"tool_input\":{\"file_path\":\"/x/.env\"}}' \\\n  | node .claude/hooks/protect-files.mjs ; echo $?\n\n# 反面：不该拦的 —— 要看到 0   ← 别省这一条\necho '{\"tool_input\":{\"file_path\":\"/x/README.md\"}}' \\\n  | node .claude/hooks/protect-files.mjs ; echo $?";
export const DEBUG_2 = "# 扩展名必须是 .mjs（或 package.json 里有 \"type\": \"module\"）\n# 否则 top-level await / import 会报 SyntaxError\nmv .claude/hooks/protect-files.js .claude/hooks/protect-files.mjs";
export const DEBUG_3 = "claude --debug     # 启动时加\n/debug             # 或者会话里敲";
export const DEBUG_DUMP = "import { appendFileSync } from 'node:fs';\nappendFileSync('/tmp/hook-input.jsonl', raw + '\\n');  // 加这一行，去翻这个文件";
export const AGENT_HOOK = "{\n  \"hooks\": {\n    \"Stop\": [{\n      \"hooks\": [{\n        \"type\": \"agent\",\n        \"prompt\": \"Verify that all unit tests pass. Run the test suite and check the results. $ARGUMENTS\",\n        \"timeout\": 120\n      }]\n    }]\n  }\n}";
export const STOP_CMD = "#!/usr/bin/env node\n// 挂在 Stop 上：测试没过就把它按回去继续做\nimport { spawnSync } from 'node:child_process';\n\nconst r = spawnSync('npm', ['test', '--silent'],\n                    { encoding: 'utf8', shell: true });\n\nif (r.status !== 0) {\n  console.error('测试没过，不能收工。失败输出：');\n  console.error(`${r.stdout}${r.stderr}`.trim().split('\\n').slice(-20).join('\\n'));\n  process.exit(2);\n}\nprocess.exit(0);";
export const SKELETON = "let raw = '';\nfor await (const c of process.stdin) raw += c;\n\nconst { tool_input } = JSON.parse(raw);\nconst field = tool_input.file_path ?? '';\n// Bash 命令看这个：tool_input.command\n\nif (field.includes('改成你的判据')) {\n  console.error('Blocked: 写清楚为什么，以及他该怎么做');\n  process.exit(2);\n}\nprocess.exit(0);";
export const EX_PRETTIER = "{ \"hooks\": { \"PostToolUse\": [{\n  \"matcher\": \"Edit|Write\",\n  \"hooks\": [{\n    \"type\": \"command\",\n    \"command\": \"node \\\"$CLAUDE_PROJECT_DIR/.claude/hooks/format.mjs\\\"\"\n  }]\n}]}}";
export const EX_FORMAT_MJS = "import { spawnSync } from 'node:child_process';\nlet raw = ''; for await (const c of process.stdin) raw += c;\nconst f = JSON.parse(raw).tool_input?.file_path;\nif (f) spawnSync('npx', ['prettier', '--write', f],\n                 { stdio: 'inherit', shell: true });\nprocess.exit(0);";
export const EX_COMPACT = "{ \"hooks\": { \"SessionStart\": [{\n  \"matcher\": \"compact\",\n  \"hooks\": [{\n    \"type\": \"command\",\n    \"command\": \"echo '用 npm 不用 yarn。提交前跑 npm test。当前在做 auth 重构。'\"\n  }]\n}]}}";
export const EX_CONTEXT = "{\n  \"hookSpecificOutput\": {\n    \"hookEventName\": \"UserPromptSubmit\",\n    \"additionalContext\": \"Current branch: release-42. Deploy freeze until Friday.\"\n  }\n}";
export const EX_DENY_JSON = "{\n  \"hookSpecificOutput\": {\n    \"hookEventName\": \"PreToolUse\",\n    \"permissionDecision\": \"deny\",\n    \"permissionDecisionReason\": \"Use rg instead of grep for better performance\"\n  }\n}";
export const EX_NOTIFY = "{ \"hooks\": { \"Notification\": [{\n  \"matcher\": \"\",\n  \"hooks\": [{\n    \"type\": \"command\",\n    \"command\": \"osascript -e 'display notification \\\"Claude needs you\\\"'\"\n  }]\n}]}}";
export const EX_AUDIT = "{ \"hooks\": { \"ConfigChange\": [{\n  \"matcher\": \"\",\n  \"hooks\": [{\n    \"type\": \"command\",\n    \"command\": \"node \\\"$CLAUDE_PROJECT_DIR/.claude/hooks/audit.mjs\\\"\"\n  }]\n}]}}";
export const EX_SKILL = "---\nname: secure-operations\ndescription: Perform operations with security checks\nhooks:\n  PreToolUse:\n    - matcher: \"Bash\"\n      hooks:\n        - type: command\n          command: \"node ./scripts/security-check.mjs\"\n---";
export const EX_TWO_HOOKS = "\"PreToolUse\": [{\n  \"matcher\": \"Bash\",\n  \"hooks\": [\n    { \"type\": \"command\", \"command\": \"node .claude/hooks/log-bash.mjs\" },\n    { \"type\": \"command\", \"command\": \"node .claude/hooks/block-rm-rf.mjs\" }\n  ]\n}]";
export const CONFIG_SHAPE = "{\n  \"hooks\": {\n    \"<事件名>\": [\n      {\n        \"matcher\": \"<按事件类型过滤>\",\n        \"hooks\": [\n          {\n            \"type\": \"command\",\n            \"command\": \"node .claude/hooks/xxx.mjs\",\n            \"if\": \"Bash(git *)\",\n            \"timeout\": 30,\n            \"once\": false\n          }\n        ]\n      }\n    ]\n  }\n}";
