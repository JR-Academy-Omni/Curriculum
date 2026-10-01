import { DeckFrame, Panel, Label, colors } from './deck';
import { assetPath } from './ui';

type Props = {
  title: string; logo: string; accent: string;
  summary: string; summaryEnglish: string;
  description: string; descriptionEnglish: string;
  logoWidth?: number; logoHeight?: number;
  website?: { href: string; label: string };
};

/** Layout from the user-provided JR Academy introduction page. */
export function PartnerProfile({ title, logo, accent, summary, summaryEnglish, description, descriptionEnglish, logoWidth = 340, logoHeight = 230, website }: Props) {
  return <DeckFrame tag="联合发起 / 合作伙伴 · CO-HOST / PARTNER" title={title} accent={accent}>
    <div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.3fr', gap: 32, height: '100%', minHeight: 0 }}>
      <Panel style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
        <img src={assetPath(logo)} alt={title} style={{ width: logoWidth, height: logoHeight, maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </Panel>
      <Panel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0 }}>
        <Label bg={accent} color={colors.dark}>PARTNER</Label>
        <p style={{ fontSize: 34, lineHeight: 1.5, margin: '14px 0', whiteSpace: 'pre-line' }}>{summary}
          <span style={{ display: 'block', fontSize: 22, lineHeight: 1.45, marginTop: 10, color: '#514c48' }}>{summaryEnglish}</span>
        </p>
        <p style={{ fontSize: 29, lineHeight: 1.5, margin: '14px 0', whiteSpace: 'pre-line' }}>{description}
          <span style={{ display: 'block', fontSize: 21, lineHeight: 1.45, marginTop: 10, color: '#514c48' }}>{descriptionEnglish}</span>
        </p>
        {website && <a href={website.href} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-end', marginTop: 4, color: '#514c48', fontSize: 17, textUnderlineOffset: 4 }}>{website.label} ↗</a>}
      </Panel>
    </div>
  </DeckFrame>;
}
