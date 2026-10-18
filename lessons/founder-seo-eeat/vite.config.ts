import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { realpathSync } from 'node:fs';

// Local font packages may be linked to the shared lesson dependency store.
const fontRoots = ['@fontsource-variable/bricolage-grotesque', '@fontsource-variable/dm-sans', '@fontsource-variable/noto-sans-sc', '@fontsource/space-mono']
  .map(name => realpathSync(new URL(`./node_modules/${name}`, import.meta.url)));
const lessonRoot = realpathSync(new URL('.', import.meta.url));

export default defineConfig({
	plugins: [react()],
  server: { fs: { allow: [lessonRoot, ...fontRoots] } },
	// 部署到 jracademy.ai/curriculum/lessons/founder-seo-eeat/ —— 把 founder-seo-eeat 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/founder-seo-eeat/' : '/',
});
