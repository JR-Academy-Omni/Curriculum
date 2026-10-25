import terms from '../data/terminology.json';
import pageTerms from '../data/page-terms.json';
import { assetPath } from './ui';
import { colors, fonts } from '../styles/theme';

export default function CourseTerms({ page, dark = false }: { page: number; dark?: boolean }) {
  const ids = (pageTerms as Record<string, string[]>)[String(page)];
  if (!ids) return null;
  return <aside className="course-terms" aria-label="English terminology" style={{ position: 'absolute', left: 100, bottom: 24, width: 1400, display: 'flex', gap: '5px 22px', alignItems: 'baseline', flexWrap: 'wrap', fontFamily: fonts.body, fontSize: 16, lineHeight: 1.45, color: dark ? colors.white : colors.dark }}>
    {ids.map(id => {
      const term = terms.find(t => t.id === id)!;
      return <span key={id}><strong>{term.label}{term.english !== term.label ? ` · ${term.english}` : ''}</strong>：{term.zh}</span>;
    })}
    <a href={assetPath('materials/seo-geo-glossary.html')} target="_blank" rel="noreferrer" style={{ color: dark ? colors.yellow : colors.dark, fontWeight: 750, textDecoration: 'underline' }}>English 术语表 ↗</a>
  </aside>;
}
