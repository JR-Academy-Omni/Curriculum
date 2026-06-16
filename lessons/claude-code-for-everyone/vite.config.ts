import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jiangren.com.au/curriculum/lessons/claude-code-for-everyone/ —— 把 {{SLUG}} 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/claude-code-for-everyone/' : '/',
});
