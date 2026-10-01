import { AnimatedGroup, DeckFrame, Panel, colors } from '../deck';
import { TextLink } from '../event';
import { assetPath } from '../ui';
import { companyIntroUrl } from '../../data/speakers';

export default function Slide02() {
  return <DeckFrame tag="CO-HOSTED BY" title="联合主办" accent={colors.blue}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 30, height: '100%', minHeight: 0 }}>
      <AnimatedGroup delay={.16} style={{ display: 'flex', minHeight: 0 }}>
        <Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
            <img src={assetPath('jr-academy-logo.png')} alt="匠人学院 JR Academy" style={{ width: 410, maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div style={{ padding: '24px 30px', background: colors.yellow }}><TextLink href={companyIntroUrl} style={{ fontSize: 24 }}>了解匠人学院 JR Academy</TextLink></div>
        </Panel>
      </AnimatedGroup>
      <AnimatedGroup delay={.25} style={{ display: 'flex', minHeight: 0 }}>
        <Panel style={{ flex: 1, minWidth: 0, minHeight: 0, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 38, padding: '24px 30px' }}>
            <img src={assetPath('anz.png')} alt="ANZ" style={{ width: 250, height: 250, objectFit: 'contain' }} />
            <img src={assetPath('bupa.png')} alt="Bupa" style={{ width: 235, height: 110, objectFit: 'contain' }} />
          </div>
          <div style={{ padding: '24px 30px', background: colors.yellow, fontSize: 27, fontWeight: 800 }}>ANZ · Bupa</div>
        </Panel>
      </AnimatedGroup>
    </div>
  </DeckFrame>;
}
