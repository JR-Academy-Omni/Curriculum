import { colors, fonts } from '../ui';
import { Page, PageHead, PracticeBoard, Note } from '../deck';

// P16 · 扩成标准 Team：增加 verifier + 写 Charter（蓝图 §9.3）
// 🚫 实践页：不出现案例答案。
// ⚠️ §9.3 铁律：角色从创建到结束**不更名、不换身份**。新需要出现时新增角色。

export default function L8P16_AddVerifier() {
	return (
		<Page>
			<PageHead
				phase="do" time="76–84 min"
				title="扩成标准 Team：加 verifier + 写 Charter"
				sub={<>最小 Team 验证通过了，现在<strong>新增</strong>第三名 —— 不是把 A 或 B 改成 verifier。</>}
			/>

			<PracticeBoard
				doWhat={
					<>
						按 <strong>HANDOUT「增加 verifier 的 Prompt」</strong> 新增一名成员：
						<div style={{
							margin: '14px 0', border: `3px solid ${colors.black}`,
							background: colors.warmBg, padding: '12px 18px',
						}}>
							<div style={{ fontFamily: fonts.mono, fontSize: 23, fontWeight: 700, color: colors.dark }}>C · verifier</div>
							<div style={{ fontSize: 22, color: '#555', marginTop: 5, lineHeight: 1.45 }}>
								接收 A、B 的候选证据；用<strong>具体输入</strong>找反例；检查结论能否解释症状；
								输出可复现步骤和未检查范围。<strong style={{ color: colors.red }}>不重复两人的完整搜索。</strong>
							</div>
						</div>
						创建后<strong style={{ color: colors.red }}>先不要调查</strong>：把 verifier 写进 Team charter，报告新的成员名单。
						<br /><br />
						然后补完 charter 五项（HANDOUT 有模板）。
					</>
				}
				criteria={[
					'成员名单变成 Lead + 3',
					'A、B 的名字和职责没有被改动',
					'charter 五项都填了，不是只填目标和角色',
					'通信触发器写明「什么发现必须发给谁」',
				]}
				stopAt="84 min"
				warn={<>角色<strong>不更名、不换岗</strong>。需要新能力就新增成员，不要把 frontend-trace 改成 verifier。</>}
			/>

			<Note>
				⚠️ 角色漂移是本节第三高频失败：<strong style={{ color: colors.dark }}>frontend-trace 中途变成 verifier</strong>，
				任务板、消息记录和讲评就全对不上号了。
			</Note>
		</Page>
	);
}
