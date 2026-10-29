import SlideEngine from './components/SlideEngine';
import { slides } from './components/slides';

export default function App() {
 return <SlideEngine>{slides.map((Slide, i) => <Slide key={i} />)}</SlideEngine>;
}
