import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jracademy.ai/curriculum/lessons/claude-four-certifications-2026-10-13/ —— 把 claude-four-certifications-2026-10-13 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/claude-four-certifications-2026-10-13/' : '/',
});
