// M7 英文面试练习：每题一页。学生先在对话框里写答案，再看参考答案
export interface InterviewQ {
	question: string;
	hint: string; // 中文提示：这题考的是哪一块
	answer: string[]; // 参考答案，按 Mechanism → Evidence → Risk 分句；**…** 包住的是要高亮的关键词
}

export const interview: InterviewQ[] = [
	{
		question: "What's the difference between the KV cache and prompt caching?",
		hint: '考点：M4 + M5 —— 各自省哪一段计算、在哪一层、活多久',
		answer: [
			'The **KV cache** lives inside **one generation**: it stores the **keys and values** of tokens already processed, so each **decode** step only computes the new token. It costs **GPU memory** and is freed when the request ends.',
			'**Prompt caching** reuses that work **across requests**: if a new request starts with **exactly the same prefix**, the provider skips the **prefill** for it, which cuts **time-to-first-token** and **input cost**.',
			'I can see prompt caching in the usage fields, **cache_creation_input_tokens** and **cache_read_input_tokens**. The KV cache itself **isn’t visible** through a hosted API.',
		],
	},
	{
		question: 'Every request to our support bot includes the same long policy document. How would you reduce cost and latency?',
		hint: '考点：M5 —— 稳定前缀、顺序、怎么验证',
		answer: [
			'Put the **stable content first**: tool definitions, system instructions, then the policy document, and mark a **cache breakpoint** at the end of that **shared prefix**. Anything that changes per request, like the user’s question, **timestamps** or **user IDs**, **goes after it**.',
			'Then verify it: on repeated requests, **cache_read_input_tokens** should cover the document and **time-to-first-token** should drop.',
			'Watch for two things: the prefix has to be above the model’s **minimum cacheable length**, and entries expire after the **TTL**, so the first request after a quiet period pays the full cost again.',
		],
	},
	{
		question: 'After last week’s release, our prompt-cache hit rate dropped to almost zero. How would you debug it?',
		hint: '考点：M5 —— 什么会让 cache 失效，怎么定位',
		answer: [
			'Caching is an **exact prefix match**, so something **near the start** of the prompt is now changing between requests.',
			'I’d log two consecutive request payloads and **diff** them to find the **first byte that differs**. The usual culprits are a **timestamp or user ID** added to the system prompt, **tools serialised in a different order**, **unsorted JSON keys**, or a **model or effort change**.',
			'Once it’s fixed, I’d add **monitoring** on **cache_read_input_tokens** so a regression like this gets caught on the day it ships, not on the next bill.',
		],
	},
	{
		question: 'Would you cache full LLM responses in a multi-tenant SaaS product?',
		hint: '考点：M6 —— cache key、失效、安全红线',
		answer: [
			'Only for answers that are **safe to share**, like a public FAQ. The **cache key** has to include the **tenant**, the user’s **role or permissions**, the **model and prompt version**, and the normalised question; otherwise one customer can receive **another customer’s data**.',
			'**Invalidate** entries when the underlying data, policy or prompt version changes, and set the **TTL** based on how fresh the answer needs to be.',
			'Never cache **secrets** or **personal data**, and give the system a way to **purge** an answer quickly if users report that it’s wrong.',
		],
	},
];
