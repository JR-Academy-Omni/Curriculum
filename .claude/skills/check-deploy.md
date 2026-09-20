# /check-deploy — 检查部署状态

检查最近一次发布是否成功。

## 使用方法
```
/check-deploy
```

## 执行步骤

1. 运行 `gh run list --limit 3 --json status,conclusion,displayTitle,createdAt,url` 查看最近 3 次 GitHub Actions 运行状态
2. 用中文告诉用户：
   - 最近一次部署的状态（成功/失败/进行中）
   - 部署时间
   - 提交内容
3. 如果失败，查看 `gh run view [run-id] --log-failed` 获取错误信息，用通俗语言解释问题
4. 如果成功，告诉用户线上已更新，可以访问 `https://jracademy.ai/curriculum/` 查看
