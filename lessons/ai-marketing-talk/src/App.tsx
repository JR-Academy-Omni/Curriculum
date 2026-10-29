import SlideEngine from './components/SlideEngine';
import N01 from './components/slides/N01_Opening';
import AudienceHook from './components/slides/N01b_AudienceHook';
import LeadHandoff from './components/slides/N11b_LeadHandoff';
import BusinessChain from './components/slides/N11c_BusinessChain';
import N02 from './components/slides/N02_OneTask';
import N03 from './components/slides/N03_Repeat';
import N04 from './components/slides/N04_Workflow';
import N05 from './components/slides/R01_ContentLayers';
import PlatformBranches from './components/slides/R02_PlatformBranches';
import AuditEvidence from './components/slides/R03_AuditEvidence';
import OfflineEvent from './components/slides/R04_OfflineEvent';
import FinalVersions from './components/slides/N05b_FinalVersions';
import N06 from './components/slides/N06_Conflict';
import N07 from './components/slides/N07_Truth';
import N08 from './components/slides/N08_Master';
import N09 from './components/slides/N09_Video';
import N10 from './components/slides/N10_Quality';
import N11 from './components/slides/N11_Feedback';
import N12 from './components/slides/N12_BusinessGap';
import N13 from './components/slides/N13_CompanyOS';
import N14 from './components/slides/N14_Reporting';
import N15 from './components/slides/N15_Distribution';
import N16 from './components/slides/N16_OperatingLoop';
import N17 from './components/slides/N17_Recap';
import N18 from './components/slides/N18_Start';
import N19 from './components/slides/N19_PropertyCase';
import N20 from './components/slides/N20_PropertySolution';
import N21 from './components/slides/N21_PropertyDay';
import N22 from './components/slides/N22_CompanyOperation';
import N23 from './components/slides/N23_CurrentOrg';
import N24 from './components/slides/N24_AgentOrg';

// Current 30-minute narrative. Earlier S-series pages remain as Legacy source.
export default function App() {
  return (
    <SlideEngine>
      <N01 />
      <AudienceHook />
      <N02 />
      <N03 />
      <N04 />
      <PlatformBranches />
      <N09 />
      <N10 />
      <AuditEvidence />
      <N11 />
      <N05 />
      <FinalVersions />
      <N06 />
      <N07 />
      <N08 />
      <OfflineEvent />
      <LeadHandoff />
      <BusinessChain />
      <N12 />
      <N19 />
      <N23 />
      <N24 />
      <N14 />
      <N21 />
      <N15 />
      <N16 />
      <N22 />
      <N17 />
      <N13 />
      <N20 />
      <N18 />
    </SlideEngine>
  );
}
