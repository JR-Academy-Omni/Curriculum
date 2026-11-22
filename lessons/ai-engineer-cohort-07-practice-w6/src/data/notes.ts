/// <reference types="vite/client" />
import { STOPS } from '../components/slides/registry';

// 可选的本地备注文件；不存在时备注为空，构建照常通过。N 显示/隐藏。
const files = import.meta.glob('../../_local/SCRIPT.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const script = Object.values(files)[0] ?? '';

const byKey: Record<string, string> = {};
const parts = script.split(/^## 第 \d+ 页 · (\S+)[ \t]*$/m);
for (let i = 1; i < parts.length; i += 2) byKey[parts[i]] = parts[i + 1].trim();

export const notes: string[] = STOPS.map(s => byKey[s.key] ?? '');
