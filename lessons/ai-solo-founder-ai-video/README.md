# 创业营 · AI视频制作实战

状态：47页Talk Deck已实现；本地验证记录见QA.md。提交与部署状态以Git记录和CI结果为准；建议120分钟，实际课时尚未指定。

## 内容

视频全景 → ElevenLabs配音 → HyperFrames/Remotion直接制作动态PPT → Seedance/MiniMax → 参考内容写原创剧本 → 获取素材与组合剪辑 → 验收练习。

- `PRD.md`：已确认的内容与逐页设计；唯一内容/设计源。
- `src/components/slides/`：47页独立React组件；内容数据来自`src/data/course.ts`。
- `RUNSHEET.md`：建议时间安排、课前准备、逐页讲师提示。
- `PROMPTS.md`：可复制的旁白、代码视频和剧本提示词及官方资料。
- `WORKSHEET.md`：配音、剧本、素材与验收工作单。

## 本地运行

```sh
bun install --frozen-lockfile
bun run dev --host 127.0.0.1 --port 18764 --strictPort
bun run build
```

开发入口：`http://127.0.0.1:18764/lessons/ai-solo-founder-ai-video/?page=1`。生产构建base保持`/curriculum/lessons/ai-solo-founder-ai-video/`。

方向键/空格翻页，F全屏，V摄像头；底部圆点可跳页。页码同步`?page=N`，刷新恢复；正常翻页使用模板replaceState，不产生每页浏览器历史。没有旧静态版的N提示或Home/End快捷键，讲师提示见手册。

## 交互教具

第2、15、19、35、37页：播放/拖动合成时间线。第13页：帧号滑块计算不透明度。第10、16、23、32页：复制提示词。教具用于解释原理，不是HyperFrames/Remotion导出的MP4。

运行时SlideEngine/ui/CameraBubble/theme/main逐字来自`lessons/_template/`；视觉复用DeckFrame，遵循Talk Deck canonical与当前黄金参考。

## 演示准备边界

课件没有生成示范音频或MP4，也未连接生成账户。讲师需要准备真实工程、授权素材与配音；手册列出备选方案。实际MP4若另行制作，必须按项目视频登记规则验证登记。当前无provider操作或生产课程绑定变更。

旧静态HTML已内部保存到`.artifacts/ai-solo-founder-ai-video-before-talk-deck/`；同一入口改为本次React课件，不另设并行入口。
