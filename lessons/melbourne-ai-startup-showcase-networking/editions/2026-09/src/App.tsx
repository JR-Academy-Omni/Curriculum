import S22_November from './components/slides/S22_November';
import S21_October from './components/slides/S21_October';
import DeckSlide from './components/DeckSlide';
import data from './data/deck.json';
import SlideEngine from './components/SlideEngine';
import S01_Cover from './components/slides/S01_Cover';
import S02_Tonight from './components/slides/S02_Tonight';
import S03_Agenda from './components/slides/S03_Agenda';
import S04_JRAcademy from './components/slides/S04_JRAcademy';
import S05_ANNG from './components/slides/S05_ANNG';
import S06_ZPark from './components/slides/S06_ZPark';
import S07_NewGold from './components/slides/S07_NewGold';
import S08_KSUG from './components/slides/S08_KSUG';
import S09_CloudTech from './components/slides/S09_CloudTech';
import S10_Order from './components/slides/S10_Order';
import S11_Furday from './components/slides/S11_Furday';
import S12_Deerbit from './components/slides/S12_Deerbit';
import S13_AirBotix from './components/slides/S13_AirBotix';
import S14_Olav from './components/slides/S14_Olav';
import S15_Vela from './components/slides/S15_Vela';
import S16_LiuXiaoBan from './components/slides/S16_LiuXiaoBan';
import S17_Ponyknows from './components/slides/S17_Ponyknows';
import S18_Discussion from './components/slides/S18_Discussion';
import S19_AICircle from './components/slides/S19_AICircle';
import S20_Join from './components/slides/S20_Join';
export default function App(){
if(new URLSearchParams(location.search).has('print')) return <><style>{`html,body{overflow:visible!important;background:white} @page{size:1600px 900px;margin:0} .print-slide{width:1600px;height:900px;break-after:page;page-break-after:always;} .print-slide:last-child{break-after:auto} *{-webkit-print-color-adjust:exact;print-color-adjust:exact;}`}</style>{data.slides.map(s=><section className="print-slide" key={s.id}><DeckSlide id={s.id}/></section>)}</>;
return <SlideEngine>
      <S01_Cover />
      <S02_Tonight />
      <S03_Agenda />
      <S04_JRAcademy />
      <S05_ANNG />
      <S06_ZPark />
      <S07_NewGold />
      <S08_KSUG />
      <S09_CloudTech />
      <S10_Order />
      <S11_Furday />
      <S12_Deerbit />
      <S13_AirBotix />
      <S14_Olav />
      <S15_Vela />
      <S16_LiuXiaoBan />
      <S17_Ponyknows />
      <S18_Discussion />
      <S19_AICircle />
      <S20_Join />
      <S21_October />
      <S22_November />
</SlideEngine>; }
