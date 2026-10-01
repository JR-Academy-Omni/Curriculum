import SlideEngine from './components/SlideEngine';
import DeckSlide from './components/DeckSlide';
import data from './data/deck.json';
import S01_Cover from './components/slides/S01_Cover';
import S02_JRAcademy from './components/slides/S02_JRAcademy';
import S03_Services from './components/slides/S03_Services';
import S04_Agenda from './components/slides/S04_Agenda';
import S05_Topics from './components/slides/S05_Topics';
import S06_Lightman from './components/slides/S06_Lightman';
import S07_Ethan from './components/slides/S07_Ethan';
import S08_Shirley from './components/slides/S08_Shirley';
import S09_Giovanni from './components/slides/S09_Giovanni';
import S10_Roundtable from './components/slides/S10_Roundtable';
import S11_Trust from './components/slides/S11_Trust';
import S12_Transfer from './components/slides/S12_Transfer';
import S13_Preparation from './components/slides/S13_Preparation';
import S14_Workplace from './components/slides/S14_Workplace';
import S15_Resume from './components/slides/S15_Resume';
import S16_QA from './components/slides/S16_QA';
import S17_Action from './components/slides/S17_Action';
import S18_Thanks from './components/slides/S18_Thanks';
export default function App() {
 const print = new URLSearchParams(location.search).has('print');
 if(print) return <div className="print-deck">{data.slides.map(s=><div key={s.id} className="print-slide"><DeckSlide id={s.id}/></div>)}</div>;
 return <SlideEngine><S01_Cover /><S02_JRAcademy /><S03_Services /><S04_Agenda /><S05_Topics /><S06_Lightman /><S07_Ethan /><S08_Shirley /><S09_Giovanni /><S10_Roundtable /><S11_Trust /><S12_Transfer /><S13_Preparation /><S14_Workplace /><S15_Resume /><S16_QA /><S17_Action /><S18_Thanks /></SlideEngine>;
}
