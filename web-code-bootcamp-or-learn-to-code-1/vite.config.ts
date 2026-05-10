import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	base: process.env.NODE_ENV === 'production' ? '/curriculum/web-code-bootcamp-or-learn-to-code-1/' : '/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				lesson1: resolve(__dirname, 'lesson1.html'),
			},
		},
	},
});
