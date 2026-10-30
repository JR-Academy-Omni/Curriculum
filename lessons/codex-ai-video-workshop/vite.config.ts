import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
 server: {headers: {'X-Robots-Tag': 'noindex, nofollow'}},
 preview: {headers: {'X-Robots-Tag': 'noindex, nofollow'}},
	// 部署到 jracademy.ai/curriculum/lessons/codex-ai-video-workshop/ —— 把 codex-ai-video-workshop 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/codex-ai-video-workshop/' : '/',
});
