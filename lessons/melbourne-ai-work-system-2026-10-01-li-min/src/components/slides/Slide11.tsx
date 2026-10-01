import { Frame, Panel, SoftNode, Takeaway, colors } from './DeckPrimitives';

const documents = ['财务报表', 'Tax Return', 'General Ledger', 'BAS', '银行', '工资报告', 'ATO账户', 'Workpaper'];
export default function Slide11() {
  return <Frame page={11} tag="CASE 4" title="单独看都合理，放在一起却不平" subtitle="真正的审核价值，来自跨文件、跨年度、跨实体的比较。">
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>{documents.slice(0, 4).map(text => <SoftNode key={text} style={{ textAlign: 'center', fontSize: 26, fontWeight: 700 }}>{text}</SoftNode>)}</div>
      <Panel bg={colors.dark} style={{ textAlign: 'center', padding: '20px 26px', color: colors.white }}><div style={{ fontSize: 28, fontWeight: 900, color: colors.yellow, marginBottom: 12 }}>CROSS CHECK</div><p style={{ fontSize: 23, lineHeight: 1.45 }}>GST payable ≠ BAS　 ·　 Opening ≠ Prior closing<br />Intercompany balances：跨实体余额核对</p></Panel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>{documents.slice(4).map(text => <SoftNode key={text} accent={colors.blue} style={{ textAlign: 'center', fontSize: 26, fontWeight: 700 }}>{text}</SoftNode>)}</div>
    </div>
    <Takeaway>一份文件正确，不代表整体正确。</Takeaway>
  </Frame>;
}
