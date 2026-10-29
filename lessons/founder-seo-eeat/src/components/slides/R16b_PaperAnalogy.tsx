import { Slide, assetPath } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';

export default function R16b_PaperAnalogy() {
  return <Slide bg={colors.warmBg}>
    <section className="paper-analogy-slide" aria-label="Lightman Website vs 论文教学模型" style={{ width: 1600, height: 900, position: 'relative', fontFamily: fonts.body, color: colors.dark }}>
      <header style={{ position: 'absolute', left: 80, top: 24, display: 'flex', alignItems: 'baseline', gap: 24 }}>
        <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.3, fontWeight: 850 }}>Website vs 论文</h1>
        <span style={{ fontSize: 23, fontWeight: 750 }}>Lightman 教学模型</span>
      </header>
      <img src={assetPath('materials/lightman-website-paper-theory.png')} alt="Lightman 的 Website vs 论文教学模型：网页及 HTML 对照论文标题、引言、论点、正文、总结与参考文献" style={{ position: 'absolute', left: 68, top: 78, width: 1464, height: 790, objectFit: 'contain', borderRadius: radii.card }} />
    </section>
  </Slide>;
}
