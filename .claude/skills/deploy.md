# /deploy — 发布更新到线上

把当前修改提交并发布到线上网站。

## 使用方法
```
/deploy
```

或带提交说明：`/deploy 更新了 AI Adoption Phase 2 的课程内容`

## 执行步骤

1. **检查当前状态**：运行 `git status` 和 `git diff` 查看有哪些改动
2. **向用户确认**：用中文列出所有改动的文件，简要说明每个文件改了什么，问用户"确认发布这些改动吗？"
3. **用户确认后**：
   - `git add` 所有改动的文件
   - `git commit` 提交，commit message 用中文描述改动内容
   - `git push origin main` 推送到远程
4. **告知用户**：
   - 代码已推送，GitHub Actions 会自动构建和部署
   - 大约 2-3 分钟后线上会更新
   - 线上地址：`https://jracademy.ai/curriculum/`

## 注意
- 如果没有任何改动，告诉用户"没有需要发布的内容"
- 如果 git push 失败，先 `git pull --rebase` 再重试
- commit message 用中文，格式：`更新: [具体改了什么]`
