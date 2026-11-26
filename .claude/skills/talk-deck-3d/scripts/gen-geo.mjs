#!/usr/bin/env node
// 生成 3D 地球陆地点阵（land.ts）与平面世界地图（worldmap.ts）。
// 用法：在任意临时目录执行  npm i world-atlas@2.0.2 topojson-client@3.1.0 d3-geo@3.1.1
//       然后  node <本脚本> <deck>/src/data [cities.json]
// cities.json：{"brisbane":[153.03,-27.47], ...}（经度在前）
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const out = process.argv[2];
if (!out) throw new Error('用法: node gen-geo.mjs <输出目录> [cities.json]');
const require = createRequire(path.join(process.cwd(), 'noop.js')); // 依赖从当前目录解析
const load = (name) => import(pathToFileURL(require.resolve(name)).href);
const { feature } = await load('topojson-client');
const { geoContains, geoNaturalEarth1, geoPath } = await load('d3-geo');
const atlas = (file, key) => { const t = JSON.parse(fs.readFileSync(require.resolve(`world-atlas/${file}`))); return feature(t, t.objects[key]); };

const land = atlas('land-110m.json', 'land');
const dots = [];
const N = 11000, golden = Math.PI * (3 - Math.sqrt(5));
for (let i = 0; i < N; i++) {
	const lat = (Math.asin(1 - ((i + 0.5) / N) * 2) * 180) / Math.PI;
	const lon = ((((i * golden * 180) / Math.PI) % 360) + 360) % 360 - 180;
	if (lat > -58 && geoContains(land, [lon, lat])) dots.push(Math.round(lat * 10) / 10, Math.round(lon * 10) / 10);
}
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'land.ts'), '// 地球陆地点阵 [纬度, 经度, …]，world-atlas land-110m（Natural Earth 公共领域数据）。\nexport const land: number[] = ' + JSON.stringify(dots) + ';\n');

const countries = atlas('countries-110m.json', 'countries');
countries.features = countries.features.filter((f) => f.properties.name !== 'Antarctica');
const projection = geoNaturalEarth1().rotate([-112, 0]).fitExtent([[4, 4], [996, 496]], countries); // 以亚太为中心
const cities = process.argv[3] ? JSON.parse(fs.readFileSync(process.argv[3])) : {};
const xy = Object.fromEntries(Object.entries(cities).map(([k, v]) => [k, projection(v).map((n) => Math.round(n * 10) / 10)]));
fs.writeFileSync(path.join(out, 'worldmap.ts'), `// 世界地图轮廓与城市坐标，world-atlas countries-110m。画布 1000×500。\nexport const worldPath = ${JSON.stringify(geoPath(projection).digits(1)(countries))};\nexport const cityXY: Record<string, [number, number]> = ${JSON.stringify(xy)};\n`);
console.log(`land points ${dots.length / 2}, cities ${Object.keys(xy).length} → ${out}`);
