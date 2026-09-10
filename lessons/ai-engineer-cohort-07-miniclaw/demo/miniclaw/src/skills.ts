import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const skillsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../skills');
export type LoadedSkill = { name: string; description: string; instructions: string; path: string };

export async function listSkills(): Promise<LoadedSkill[]> {
	const dirs = await readdir(skillsDir, { withFileTypes: true });
	return Promise.all(dirs.filter(x => x.isDirectory()).map(x => loadSkill(x.name)));
}

export async function loadSkill(name: string): Promise<LoadedSkill> {
	if (!/^[a-z0-9-]+$/.test(name)) throw new Error('Invalid skill name');
	const skillPath = path.join(skillsDir, name, 'SKILL.md');
	const raw = await readFile(skillPath, 'utf8');
	const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
	if (!match) throw new Error(`Invalid SKILL.md: ${name}`);
	const metadata = Object.fromEntries(match[1].split('\n').map(line => { const i = line.indexOf(':'); return [line.slice(0, i).trim(), line.slice(i + 1).trim()]; }));
	return { name: metadata.name || name, description: metadata.description || '', instructions: match[2].trim(), path: skillPath };
}
