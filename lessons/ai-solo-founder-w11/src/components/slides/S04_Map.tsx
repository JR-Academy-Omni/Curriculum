import { Teaching } from '../Teaching';
import { methods } from '../../data/methods';
import { colors, radii } from '../deck';
export default function S04_Map() {
  const groups = [...new Set(methods.map(m => m.group))];
  return <Teaching tag="方法地图 · 本次教学分类" title="9 组机制，36 个具体动作" subtitle="点击分组可直达。先找飞轮的卡点，再选一个动作。玩法没有统一总数。"><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18, height: 460 }}>{groups.map((g, i) => {
    const items = methods.filter(m => m.group === g);
    return <a href={`?page=${items[0].id + 20}`} key={g} style={{ textDecoration: 'none', color: colors.dark, background: i === 0 ? colors.yellow : colors.white, border: `1px solid ${colors.dark}`, borderRadius: radii.card, padding: '18px 23px' }}><div style={{ fontSize: 29, fontWeight: 800 }}>{g} <span style={{ fontSize: 20 }}>· {items.length} 种</span></div><div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 12 }}>{items.map(m => m.name).join(' / ')}</div></a>;
  })}</div></Teaching>;
}
