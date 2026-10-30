import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark } from './_shared';

// 四道闸：secrets、授权、allowlist、人工确认（W6 课程描述：Secrets、permission、tool allowlist 与 human confirmation）
export default function S27_Gates() {
	return (
		<PartFrame part="safety" title="四道闸">
			<Rows color={colors.red} fontSize={26} pad={14} gap={13} items={[
				{ say: '密钥放 env，不写进代码，也不写进 args（args 会出现在进程列表和日志里）', term: 'Secrets' },
				{ say: '先核对这个客户有没有资格，再去查他要的数据', term: 'Authorization' },
				{ say: '客服系统只能派单给名单上的部门，名单外的工具不开放', term: 'Allowlist' },
				{ say: '退款、发邮件这种会改东西的单，先让人确认再执行', term: 'Human confirm' },
			]} />
			<Punch delay={0.8} size={28}>MCP 协议本身不管这四道，<Mark>要靠我们的代码和客户端配置</Mark>。</Punch>
		</PartFrame>
	);
}
