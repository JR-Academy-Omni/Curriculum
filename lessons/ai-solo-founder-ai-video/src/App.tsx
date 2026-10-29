import { MotionConfig } from 'framer-motion';
import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Tracks';
import S03 from './components/slides/S03_Routes';
import S04 from './components/slides/S04_Brief';
import S05 from './components/slides/S05_Narration';
import S06 from './components/slides/S06_ElevenLabs';
import S07 from './components/slides/S07_VoiceCheck';
import S08 from './components/slides/S08_AudioTiming';
import S09 from './components/slides/S09_SoundMix';
import S10 from './components/slides/S10_VoiceDemo';
import S11 from './components/slides/S11_CodeVideo';
import S12 from './components/slides/S12_HyperFrames';
import S13 from './components/slides/S13_Remotion';
import S14 from './components/slides/S14_Render';
import S15 from './components/slides/S15_Pagination';
import S16 from './components/slides/S16_TaskPrompt';
import S17 from './components/slides/S17_HyperDemo';
import S18 from './components/slides/S18_RemotionDemo';
import S19 from './components/slides/S19_Sync';
import S20 from './components/slides/S20_FirstExport';
import S21 from './components/slides/S21_Generative';
import S22 from './components/slides/S22_ModelChoice';
import S23 from './components/slides/S23_TextVideo';
import S24 from './components/slides/S24_ImageVideo';
import S25 from './components/slides/S25_Storyboard';
import S26 from './components/slides/S26_Iteration';
import S27 from './components/slides/S27_NativeAudio';
import S28 from './components/slides/S28_References';
import S29 from './components/slides/S29_Analysis';
import S30 from './components/slides/S30_Original';
import S31 from './components/slides/S31_Script';
import S32 from './components/slides/S32_ScriptPrompt';
import S33 from './components/slides/S33_Shotlist';
import S34 from './components/slides/S34_Inventory';
import S35 from './components/slides/S35_Edit';
import S36 from './components/slides/S36_MissingShot';
import S37 from './components/slides/S37_Combine';
import S38 from './components/slides/S38_Review';
import S39 from './components/slides/S39_Checklist';
import S40 from './components/slides/S40_Practice';
import S41 from './components/slides/S41_SkillsConcept';
import S42 from './components/slides/S42_SkillsCode';
import S43 from './components/slides/S43_SkillsMedia';
import S44 from './components/slides/S44_SkillsPrompt';
import S45 from './components/slides/S45_Shotcraft';
import S46 from './components/slides/S46_CreativeSkills';
import S47 from './components/slides/S47_ShotcraftPrompt';
export default function App() { return <MotionConfig reducedMotion="user"><SlideEngine>
{/* 01 · 制作全景 */}
<S01 />
<S02 />
<S03 />
<S04 />
{/* 02 · ElevenLabs 配音 */}
<S05 />
<S06 />
<S07 />
<S08 />
<S09 />
<S10 />
{/* 03 · 代码制作视频 */}
<S11 />
<S12 />
<S13 />
<S14 />
<S15 />
<S16 />
<S17 />
<S18 />
<S19 />
<S20 />
{/* 04 · 模型生成镜头 */}
<S21 />
<S22 />
<S23 />
<S24 />
<S25 />
<S26 />
<S27 />
{/* 05 · 参考与剧本 */}
<S28 />
<S29 />
<S30 />
<S31 />
<S32 />
<S33 />
{/* 06 · 素材与组合 */}
<S34 />
<S35 />
<S36 />
<S37 />
<S38 />
{/* 07 · 验收与练习 */}
<S39 />
<S40 />
{/* 08 · 常用 Skills 速查 */}
<S41 />
<S42 />
<S43 />
<S44 />
<S45 />
<S46 />
<S47 />
</SlideEngine></MotionConfig>; }
