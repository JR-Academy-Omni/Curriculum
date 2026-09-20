import { Slide, Inner, Half, Title, Card, Tag, colors, fonts } from '../ui';

export default function S28_RICE() {
	return <Slide bg={colors.blue}><Inner split><Half><Tag bg={colors.dark}>RICE · 可选的相对比较器</Tag><Title size="56px" style={{ margin: '18px 0' }}>先过四道门，<br />再比较同层候选</Title><p style={{ fontSize: 21 }}>只比较“高级报表、自动预测、移动审批”等同层能力，不拿它替代风险判断。</p></Half><Half><Card bg={colors.white}><div style={{ fontFamily: fonts.mono, fontSize: 25, fontWeight: 900, padding: 18, background: colors.yellow, textAlign: 'center' }}>(Reach × Impact × Confidence) ÷ Effort</div>{['Reach：影响多少岗位与流程', 'Impact：对本轮价值流影响多大', 'Confidence：试点与历史证据多扎实', 'Effort：消耗多少真实团队容量'].map(item => <p key={item} style={{ fontSize: 19, fontWeight: 800, margin: '15px 0' }}>→ {item}</p>)}</Card></Half></Inner></Slide>;
}