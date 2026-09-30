import S24_AICircleIntro from "./components/slides/S24_AICircleIntro";
import S25_AICircleCities from "./components/slides/S25_AICircleCities";
import S26_AICircleSydney from "./components/slides/S26_AICircleSydney";
import S27_AICircleMelbourne from "./components/slides/S27_AICircleMelbourne";
import S28_AICircleBrisbane from "./components/slides/S28_AICircleBrisbane";
import S29_AICirclePerth from "./components/slides/S29_AICirclePerth";
import S30_AICircleAdelaide from "./components/slides/S30_AICircleAdelaide";
import S31_AICircleSingapore from "./components/slides/S31_AICircleSingapore";
import S32_AICircleKualaLumpur from "./components/slides/S32_AICircleKualaLumpur";
import S33_AICircleChengdu from "./components/slides/S33_AICircleChengdu";
import S22_November from "./components/slides/S22_November";
import S21_October from "./components/slides/S21_October";
import SlideEngine from "./components/SlideEngine";
import S01_Cover from "./components/slides/S01_Cover";
import S02_Tonight from "./components/slides/S02_Tonight";
import S03_Agenda from "./components/slides/S03_Agenda";
import S04_JRAcademy from "./components/slides/S04_JRAcademy";
import S05_ANNG from "./components/slides/S05_ANNG";
import S06_ZPark from "./components/slides/S06_ZPark";
import S07_NewGold from "./components/slides/S07_NewGold";
import S08_KSUG from "./components/slides/S08_KSUG";
import S09_CloudTech from "./components/slides/S09_CloudTech";
import S10_Order from "./components/slides/S10_Order";
import S11_Furday from "./components/slides/S11_Furday";
import S12_Deerbit from "./components/slides/S12_Deerbit";
import S13_AirBotix from "./components/slides/S13_AirBotix";
import S14_Olav from "./components/slides/S14_Olav";
import S15_Vela from "./components/slides/S15_Vela";
import S16_LiuXiaoBan from "./components/slides/S16_LiuXiaoBan";
import S17_Ponyknows from "./components/slides/S17_Ponyknows";
import S18_Discussion from "./components/slides/S18_Discussion";
import S19_AICircle from "./components/slides/S19_AICircle";
import S20_Join from "./components/slides/S20_Join";
const slides = [
  S01_Cover,
  S20_Join, // 候场扫码
  S02_Tonight,
  S03_Agenda,
  S04_JRAcademy,
  S24_AICircleIntro,
  S25_AICircleCities,
  S26_AICircleSydney,
  S27_AICircleMelbourne,
  S28_AICircleBrisbane,
  S29_AICirclePerth,
  S30_AICircleAdelaide,
  S31_AICircleSingapore,
  S32_AICircleKualaLumpur,
  S33_AICircleChengdu,
  S05_ANNG,
  S06_ZPark,
  S07_NewGold,
  S08_KSUG,
  S09_CloudTech,
  S10_Order,
  S20_Join, // 项目展示前扫码
  S11_Furday,
  S12_Deerbit,
  S13_AirBotix,
  S14_Olav,
  S15_Vela,
  S16_LiuXiaoBan,
  S17_Ponyknows,
  S18_Discussion,
  S20_Join, // 讨论后扫码
  S19_AICircle,
  S20_Join,
  S21_October,
  S22_November,
];
export default function App() {
  if (new URLSearchParams(location.search).has("print"))
    return (
      <>
        <style>{`html,body{overflow:visible!important;background:white} @page{size:1600px 900px;margin:0} .print-slide{width:1600px;height:900px;break-after:page;} *{-webkit-print-color-adjust:exact;print-color-adjust:exact;}`}</style>
        {slides.map((Component, i) => (
          <section className="print-slide" key={i}>
            <Component />
          </section>
        ))}
      </>
    );
  return (
    <SlideEngine>
      {slides.map((Component, i) => (
        <Component key={i} />
      ))}
    </SlideEngine>
  );
}
