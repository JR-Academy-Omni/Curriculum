// Teaching example: documentation structure, not an existing CareKind repo or product database.
import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
const TREE = [
    ['├─ README.md', '入口、owner、权威来源与访问范围'],
    ['├─ business/', '客户 / 服务 / 目标'],
    ['├─ workflows/', '交班 / 事件 / 审批'],
    ['├─ rules/', '权限 / 数据 / 操作边界'],
    ['├─ systems/', '数据字典 / 接入 / 系统 owner'],
    ['├─ projects/', '各项目 PRD / tasks / 验收'],
    ['├─ decisions/', '决定 / 理由 / 日期 / 确认人'],
    ['└─ evidence/', '检查结果 / 审计证据索引'],
];
const PURPOSES = [
    { folder: 'business', use: '确认做什么、服务谁', source: '业务负责人' },
    { folder: 'workflows', use: '现行 SOP、角色与审批', source: '流程负责人' },
    { folder: 'rules', use: '访问、留存、允许的操作', source: '安全 / 业务 owner' },
    { folder: 'systems', use: '字段含义、接口和接入条件', source: '系统 / 数据 owner' },
    { folder: 'projects', use: '范围、任务、责任与验收', source: '项目负责人' },
    { folder: 'decisions', use: '确认后的取舍与变更依据', source: '决定的确认人' },
    { folder: 'evidence', use: '版本、测试、审核结果索引', source: '交付 / 审核人' },
];
export default function S05e_CompanyOS() {
    return (<Slide bg={colors.darkBg}>
        <Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
            <div><Tag bg={colors.red}>FDE · Forward Deployed Engineer</Tag></div>
            <Title white size="44px" style={{ marginTop: 14, marginBottom: 0 }}>Company OS：把<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>企业知识与规则</span>组织成文件</Title>
            <p style={{ fontSize: 20, color: '#cfd3e6', lineHeight: 1.5, margin: '12px 0 18px' }}>FDE 企业落地视角：业务、流程、系统与责任一起组织。以下是教学示例，不代表 CareKind 已有这些目录。</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.12fr', gap: 20, width: '100%' }}>
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }} style={{ borderRadius: 22, background: '#172139', color: colors.white, border: `1.5px solid ${colors.blue}`, boxShadow: `6px 6px 0 ${colors.blue}`, padding: '20px 24px' }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 800, color: colors.blue, marginBottom: 16 }}>company-knowledge/</div>
                    <div style={{ display: 'grid', gap: 10 }}>
                        {TREE.map(([path, meaning]) => <div key={path} style={{ display: 'grid', gridTemplateColumns: '210px 1fr', gap: 10, alignItems: 'center' }}>
                            <span style={{ fontFamily: fonts.mono, fontSize: 20, whiteSpace: 'nowrap', color: path.includes('README') ? colors.yellow : colors.white }}>{path}</span>
                            <span style={{ fontSize: 17, lineHeight: 1.4, color: '#d5dfed' }}>{meaning}</span>
                        </div>)}
                    </div>
                    <p style={{ fontSize: 17, color: colors.yellow, lineHeight: 1.45, margin: '18px 0 0' }}>README 指向权威系统、文档与 owner；<br/>这是知识文件结构，不是产品数据库。</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay: .12 }} style={{ borderRadius: 22, background: colors.white, color: colors.dark, border, boxShadow: shadow, padding: '18px 22px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '125px 1fr 165px', gap: 12, paddingBottom: 12, borderBottom: `2px solid ${colors.dark}`, fontSize: 18, fontWeight: 900 }}><span>目录</span><span>用途 / 内容依据</span><span>确认与维护责任</span></div>
                    {PURPOSES.map(row => <div key={row.folder} style={{ display: 'grid', gridTemplateColumns: '125px 1fr 165px', gap: 12, padding: '12px 0', alignItems: 'center', borderBottom: '1px solid #dededb', fontSize: 18, lineHeight: 1.4 }}>
                        <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800 }}>{row.folder}/</span><span>{row.use}</span><span style={{ color: '#73389a', fontSize: 17, fontWeight: 700 }}>{row.source}</span>
                    </div>)}
                    <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.4, color: '#555' }}>每份资料注明来源、版本、日期与 owner；外部反馈先作待核实材料，由负责人确认。</p>
                </motion.div>
            </div>
            <div style={{ marginTop: 20, borderRadius: 18, background: colors.yellow, color: colors.black, padding: '13px 18px', fontSize: 18, lineHeight: 1.45 }}>
                <b>按任务与权限取上下文：</b>不把整棵树开放给所有 Agent；外部 raw 反馈不自动成为指令。<br/>
                真实护理数据留在授权业务系统；公开 repo 仅放去标识示例与受控索引。Company OS 是教学框架，岗位职责会重叠。
            </div>
        </Inner>
    </Slide>);
}
