import SlideEngine from './components/SlideEngine';
import Slide01 from './components/slides/Slide01';
import Slide02 from './components/slides/Slide02';
import Slide02a_JRAcademy from './components/slides/Slide02a_JRAcademy';
import Slide02b_JRProducts from './components/slides/Slide02b_JRProducts';
import S37_MetaTree from './components/slides/S37_MetaTree';
import S24_AICircleIntro from './components/slides/S24_AICircleIntro';
import S25_AICircleCities from './components/slides/S25_AICircleCities';
import S26_AICircleSydney from './components/slides/S26_AICircleSydney';
import S27_AICircleMelbourne from './components/slides/S27_AICircleMelbourne';
import S28_AICircleBrisbane from './components/slides/S28_AICircleBrisbane';
import S29_AICirclePerth from './components/slides/S29_AICirclePerth';
import S30_AICircleAdelaide from './components/slides/S30_AICircleAdelaide';
import S31_AICircleSingapore from './components/slides/S31_AICircleSingapore';
import S32_AICircleKualaLumpur from './components/slides/S32_AICircleKualaLumpur';
import S33_AICircleChengdu from './components/slides/S33_AICircleChengdu';
import Slide02c_ANZ from './components/slides/Slide02c_ANZ';
import Slide02d_Bupa from './components/slides/Slide02d_Bupa';
import Slide03 from './components/slides/Slide03';
import Slide04 from './components/slides/Slide04';
import Slide05 from './components/slides/Slide05';
import Slide06 from './components/slides/Slide06';
import Slide07 from './components/slides/Slide07';
import Slide08 from './components/slides/Slide08';
import Slide10 from './components/slides/Slide10';
import S20_Join from './components/slides/S20_Join';

export default function App() {
  return <SlideEngine>
    {/* Opening */}
    <Slide01 /><Slide02 /><Slide02a_JRAcademy /><Slide02b_JRProducts />
    {/* September reference pages 7–17, after JR Academy and its products */}
    <S37_MetaTree /><S24_AICircleIntro /><S25_AICircleCities />
    <S26_AICircleSydney /><S27_AICircleMelbourne /><S28_AICircleBrisbane />
    <S29_AICirclePerth /><S30_AICircleAdelaide /><S31_AICircleSingapore />
    <S32_AICircleKualaLumpur /><S33_AICircleChengdu />
    {/* Co-host profiles */}
    <Slide02c_ANZ /><Slide02d_Bupa />
    <Slide03 />
    {/* Guests: original Canva order */}
    <Slide04 /><Slide05 /><Slide06 /><Slide07 />
    {/* Original page 13 removed; September reference page 24 closes the deck */}
    <Slide08 /><Slide10 /><S20_Join />
  </SlideEngine>;
}
