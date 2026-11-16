# Lesson 定向构建与部署

本流程由 `.github/workflows/deploy.yml` 和 `scripts/curriculum-deploy-scope.py` 决定发布范围。授权发布后，由既有 GitHub Actions 的 `ubuntu-latest` 云端 runner 完成检查、构建和发布。本文件描述路由规则，不代表任何一次云端运行已经成功。

## 自动选择范围

推送到 `main` 后，以该次 push 的变更范围识别产物：

| 变更范围 | 构建与发布范围 |
|---|---|
| `lessons/<slug>/` | 只构建、检查并发布实际变化的课件目录；多份课件变化时逐份处理 |
| `lessons.html` | 只发布课件目录页；与课件同时变化时一并发布 |
| Skills、操作文档等无发布产物的配置变更 | 不发布课程产物 |
| 其他现有课程、共享模板或影响全站产物的变更 | 保留全量流程 |

定向发布只覆盖本次选中课件的服务器目录。不得因为更新一个课件而重新构建、上传其他课件，也不自动删除服务器上的其他目录。

## 手动选择一份课件

明确授权部署后，在仓库执行：

```sh
gh workflow run deploy.yml --ref main -f deck_slug=enterprise-ai-workspace-l01 -f full_deploy=false
```

上例使用本课 slug；其他课件替换为实际存在于 `lessons/` 下的合法目录名，一次只指定一份课件。不要传入路径、多个 slug、空格列表或 shell 表达式。

手动发布全站必须显式选择：

```sh
gh workflow run deploy.yml --ref main -f full_deploy=true
```

不要同时传入 `deck_slug` 和全量选项。手动未提供有效课件、也未明确选择全量时，不推测发布目标。

## 失败与检查

删除课件、非法或不存在的 slug、无法确定的 diff，以及不能安全判定范围的输入必须失败并报告原因；不得静默改成全量发布，也不得自动删除线上目录。

定向构建、检查或发布失败时，保留失败状态与日志，不以完整流水线重跑或从本机手动发布替代。需要扩大发布范围时，先按本次授权重新确认目标。

发布完成后，记录 commit SHA、Actions run URL、选定范围、检查和部署结果，再从线上读取对应课件及更新的目录页。只有云端发布与线上回读均完成，才能报告已部署。

## 执行边界

- 不在本电脑启动 CI、自托管 runner 或 CI worker。
- 不从本机使用 SSH、SCP、远程 shell 或服务器构建脚本发布。
- 不自动触发、重跑 CI/CD；只有当前任务已明确授权部署才执行发布操作。
- 不自动删除服务器目录，不将课件定向发布扩展为全站清理。
