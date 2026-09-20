# AI 内容营销自动化课程短视频

45–48 秒竖版课程推广片，展示真实课程工作流：业务输入 → 30 天内容日历 → 平台原生改写 → Brand Kit → 公司任务看板。画面不包含 URL、二维码、价格、日期、虚构客户或虚构结果。

正式配音只使用后端 `TtsService` 的 `elevenlabs-tts`，speaker 为注册表中的 `amy`，model 为 `eleven_v3`。本目录不生成、保存或依赖 PPTX。

## Commands

```bash
PROD_API_BASE=... ADMIN_TOKEN=... node scripts/generate-voice.mjs
bun run typecheck
bun run render:preview
bun run render
bun run cover
```
