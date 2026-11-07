import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 相对路径 base：部署到任意子路径都能跑
	base: './',
});
