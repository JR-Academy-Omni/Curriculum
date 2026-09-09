import { RoleFocusSlide, colors } from '../deck';
export default function S10_AgentEngineer(){return <RoleFocusSlide index="02" title="Agent Engineer" problem="构建能够执行动作，同时可以暂停、恢复和安全失败的 Agent。" capabilities={['Tool Contract','Agent State','Memory','Harness','Approval','Recovery']} interview={['Agent loop 在什么条件下停止？','工具失败或重复执行怎么办？','系统怎样阻止越权动作？']} accent={colors.red}/>}
