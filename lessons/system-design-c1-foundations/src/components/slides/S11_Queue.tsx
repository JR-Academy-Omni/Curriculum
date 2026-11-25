import ComponentSlide from '../ComponentSlide';

export default function S11_Queue() {
	return <ComponentSlide tag="P11 · 组件 4" title="Message Queue：先记下来，稍后有人处理" subtitle="问题：转码要 90 秒，不能让上传请求一直等着，也不能让转码拖慢 Web 服务。"
		flow={[{ title: '生产者', sub: 'Web 服务放入一条消息' }, { title: '消息队列', sub: '如 SQS、RabbitMQ、Kafka', hot: true }, { title: '消费者', sub: 'Worker 取出并转码' }]}
		what={<>一个存消息的中间站。生产者放进去就返回，消费者按自己的速度取出处理，处理完再告诉队列「这条做完了」。</>}
		solves={<>解耦：Web 服务和 Worker 各自扩容。削峰：高峰时消息先排队，Worker 慢慢消化。异步：用户不用等。</>}
		cost={<>同一条消息可能被投递两次，所以处理要能重复执行（见 P15）。消息会积压，要盯排队最久的消息等了多久。</>}
	/>;
}
