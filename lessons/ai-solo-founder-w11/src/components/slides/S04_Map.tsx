import { assetPath } from '../ui';
import { Teaching } from '../Teaching';
import { teachingTermEn } from '../../data/teaching-terms-en';
import { methods } from '../../data/methods';
import { colors, radii } from '../deck';
export default function S04_Map() {
  const groups = [...new Set(methods.map(m => m.group))];
  return <Teaching tag="方法地图 · 本次教学分类" title="9 组机制，36 个具体动作" subtitle="点击分组可直达。先找飞轮的卡点，再选一个动作。玩法没有统一总数。"><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'repeat(3, minmax(0, 1fr))', gap: 18, height: 425 }}>{groups.map((g, i) => {
    const items = methods.filter(m => m.group === g);
    return <a href={`?page=${items[0].id + 29}`} key={g} style={{ textDecoration: 'none', color: colors.dark, background: i === 0 ? colors.yellow : colors.white, border: `1px solid ${colors.dark}`, borderRadius: radii.card, padding: '10px 23px' }}><div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.15 }}>{g} <span style={{ fontSize: 20 }}>· {items.length} 种</span></div><div data-teaching-term-en style={{fontSize:17,lineHeight:1.2,fontWeight:550,marginTop:2}}>{teachingTermEn(g)}</div><div style={{ fontSize: 17, lineHeight: 1.3, marginTop: 5 }}>{items.slice(0, 2).map(m => m.name).join(' / ')}</div></a>;
  })}</div><div style={{fontSize:19,fontWeight:750,marginTop:14}}><a href={assetPath('user-growth-skill.zip')} download style={{color:colors.dark}}>下载用户增长 Skill / Download Skill ↗</a><span style={{marginLeft:24,fontWeight:550}}>一个入口 · 9组36动作 · 按项目选实验</span></div></Teaching>;
}
