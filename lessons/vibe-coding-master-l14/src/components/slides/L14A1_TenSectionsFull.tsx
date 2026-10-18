import { Page, Head, AppendixBadge, Code } from '../deck';

/** A1 · 技能十节完整版 + 四个验收打样，留给学员拍照 */
export default function L14A1_TenSectionsFull() {
	return (
		<Page>
			<AppendixBadge label="A1 · 技能十节完整版" />
			<Head sub="这一页是给你拍照的。回去照着这十节写，哪一节写不出来，那一节就是你还没想清楚的地方。">
				一个技能的十节规格
			</Head>

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				<Code
					style={{ flex: 1 }}
					size={21}
					wrap
					label="十节"
					code={` 1  触发         什么时候启动
 2  数据来源     它读什么
 3  必需输入     缺了就不能跑的东西
 4  输出结构     产物长什么样
 5  人类审批人   具名，不是「团队」
 6  允许的写操作 白名单，表外一律禁止
 7  失败与重试   几次、多久、失败了报什么
 8  审计记录     这次跑了什么，留在哪
 9  隐私边界     明确不碰什么
10  验收测试     可当场验证的断言`}
				/>
				<Code
					style={{ flex: 1 }}
					size={21}
					wrap
					hiColor="#7ED957"
					label="第 10 条的四个打样"
					code={`删掉缓存
  → 重新问一次，而且不报错

调用者的名字跟花名册只是近似匹配
  → 仍然问清楚，不许自己推断

查询连续失败
  → 报 FAILED，绝不报 0

后面几页没拉到
  → 报「不完整」，不报成功`}
				/>
			</div>
		</Page>
	);
}
