import { AnimatedGroup, DeckFrame, Panel, colors } from '../deck';
import { CoHosts, TextLink } from '../event';
import { companyIntroUrl } from '../../data/speakers';

export default function Slide02() {
  return <DeckFrame tag="CO-HOSTED BY" title="联合主办" accent={colors.blue}>
    <AnimatedGroup delay={.16} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <Panel style={{ width: '100%', padding: '50px 60px 42px', boxShadow: `10px 10px 0 ${colors.blue}` }}>
        <CoHosts />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}><TextLink href={companyIntroUrl}>了解匠人学院 JR Academy</TextLink></div>
      </Panel>
    </AnimatedGroup>
  </DeckFrame>;
}
