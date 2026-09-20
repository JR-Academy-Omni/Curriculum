import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

export default function S35_ReadyVsDone() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.blue}>微软产品组 · 两扇门</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>什么时候能开工？什么时候算完成？</Title><Grid cols={2} gap={28}><Card bg={colors.blue}><h3 style={{ fontSize: 30 }}>READY · 可以开工</h3><p style={{ fontSize: 21, lineHeight: 1.6, marginTop: 18 }}>试点场景、数据范围、Owner、风险已确认。</p></Card><Card bg={colors.green}><h3 style={{ fontSize: 30 }}>DONE · 可以验收</h3><p style={{ fontSize: 21, lineHeight: 1.6, marginTop: 18 }}>核心流程可用、隐私测试通过、试点用户验证。</p></Card></Grid></Inner></Slide>;
}