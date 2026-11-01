# Agent Runtime · 2026-11-01

P41–44为教学关系图，未创建AWS资源、未部署Agent或调用模型。容器模型限定常见Linux容器，microVM不是单一产品，不承诺性能数字。AgentCore当前有microVM和Instances两种计算方式，生命周期图只限定microVM临时上下文，持久化需明确配置。应用负责用户与会话映射和业务授权。

官方来源：
- https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/
- https://firecracker-microvm.github.io/
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-how-it-works.html
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-sessions.html
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-security-best-practices.html
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-instances-how-it-works.html
