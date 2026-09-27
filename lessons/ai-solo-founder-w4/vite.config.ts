import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jracademy.ai/curriculum/lessons/ai-solo-founder-w4/
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/ai-solo-founder-w4/' : '/',
});
