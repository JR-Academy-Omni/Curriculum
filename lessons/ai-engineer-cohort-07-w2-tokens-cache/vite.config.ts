import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jracademy.ai/curriculum/lessons/ai-engineer-cohort-07-w2-tokens-cache/ —— 把 ai-engineer-cohort-07-w2-tokens-cache 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/ai-engineer-cohort-07-w2-tokens-cache/' : '/',
});
