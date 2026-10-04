# 课堂提示词

## 演示 ①：产品介绍 → 配音

```text
把下面的产品资料改成30–60秒口语旁白。
受众：[谁]；真实卖点：[一个]；下一步：[一个动作]。
只用我给的事实；缺信息先问，不编造效果或评价。
输出：旁白全文、每段对应的画面重点、需要确认的词。
我确认后，再使用ElevenLabs生成配音并完整试听。
```

## 给 AI 内容，也给它验收标准

```text
用HyperFrames或Remotion制作产品介绍动态PPT视频。
内容：[确认稿]；配音：[真实音频文件]。
画幅：[16:9或9:16]；品牌：[字体、颜色、官方Logo]。
先给分页和时间线计划，再写代码。
根据音频实际时长安排重点动画与字幕。
不要编素材文件、产品功能或数据；Logo用原文件。
先预览，我确认后渲染；导出到Downloads。
```

## 文生视频：写清一个镜头

```text
镜头练习：一只咖啡杯放在木桌上。
动作：热气缓慢上升，杯子保持在桌面。
摄影机：缓慢向前推进。
环境：清晨，窗边暖色自然光。
构图：从桌面中景推进到杯子近景。
目的：作为产品介绍里的氛围补镜。
```

## 给 AI 的任务：参考 → 原创剧本

```text
先分析我提供且你能读取的参考视频。
列出：受众、开头、故事推进、镜头、声音与结尾。
再用我的业务资料写原创剧本，不复制原台词。
只使用这些事实：[资料]；目标：[一个动作]。
输出：场次、时间段、画面、动作、旁白、字幕、素材需求。
每个镜头标：已有 / 获取 / 实拍 / 生成 / 代码动画。
读不到视频或缺事实时直说，不编造分析。
```

## HyperFrames与Remotion官方起点

- HyperFrames：[Quickstart](https://hyperframes.app/docs/1-startup/2-quickstart)。官方给出的Skill安装入口为 `npx skills add heygen-com/hyperframes`，再向AI明确使用该Skill制作。课前核验Node/FFmpeg与安装版本。
- Remotion：[创建工程](https://www.remotion.dev/docs)。官方给出的Skills安装入口为 `npx -y skills@latest add remotion-dev/skills -g -y`。课堂优先使用已准备工程，不要求全班重复安装。
- 两套工具分别使用各自Skill；不把HyperFrames的CLI或时间属性照搬到Remotion。
- 安装命令是官方资料记录，不是本次已运行或已生成视频的声明。

## 官方资料

- [ElevenLabs](https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech)
- [HyperFrames](https://hyperframes.app/docs/1-startup/2-quickstart)
- [Remotion原理](https://www.remotion.dev/docs/the-fundamentals)
- [Seedance](https://docs.volcengine.com/docs/ark/seedance-2-0-prompt-guide?lang=zh&redirect=1)
- [MiniMax](https://platform.minimax.io/docs/guides/video-generation)

## 常用 Skills 调用示例

先列出你已安装、与视频制作有关的 Skills。
用 hyperframes 制作一条产品介绍动态 PPT 视频；
如果缺少该 Skill，先说明，不要假装调用。
输入：产品事实、品牌素材、已确认的 ElevenLabs 配音。
先给我分镜与素材缺口，再制作可编辑工程。
缺图片或音乐时用 media-use，记录来源与使用条件。
按实际配音时长安排画面，校对字幕；缺素材不要编造。
交付：预览、工程、渲染文件，以及实际完成的检查。

Remotion 路线：换成 remotion-best-practices，导出时用 remotion-render。

## video-shotcraft 产品宣传片调用示例

用 video-shotcraft，以自主创作模式做产品宣传片。
输入：我的产品网址 / 项目、真实卖点和品牌素材。
用真实页面截图展示功能，先处理敏感数据。
按产品重点选镜头配方，安排运镜、卡点与声音。
旁白用已确认的 ElevenLabs 配音；没有文件就报告缺口。
交付可编辑工程、预览与渲染文件，检查字幕和声音。

想自己参与关键决策：改成“共同创作模式”，先确认方案与完整分镜。
