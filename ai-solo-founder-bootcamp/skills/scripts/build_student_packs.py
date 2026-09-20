#!/usr/bin/env python3
"""Build self-contained OPC student packs; never upload or overwrite exports."""
import argparse
import hashlib
import json
from datetime import date
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile


def digest(data):
    return hashlib.sha256(data).hexdigest()


def reserve_directory(parent):
    parent.mkdir(parents=True, exist_ok=True)
    stem = f"OPC 创业营 - 每周 Skills 学生包 - {date.today().isoformat()}"
    for suffix in range(1, 10000):
        target = parent / (stem if suffix == 1 else f"{stem} ({suffix})")
        try:
            target.mkdir()
            return target
        except FileExistsError:
            continue
    raise RuntimeError("Could not reserve a new export directory")


def build(catalog, skills_root, output, key, title, names, basis):
    files = {}
    for name in names:
        folder = skills_root / name
        if not (folder / "SKILL.md").is_file():
            raise FileNotFoundError(folder / "SKILL.md")
        for path in sorted(folder.rglob("*")):
            rel = path.relative_to(folder)
            if path.is_symlink():
                raise ValueError(f"Symlink not permitted in student pack: {path}")
            if not path.is_file() or any(p in ("scripts", "__pycache__") or p.startswith(".") for p in rel.parts):
                continue
            files[f"skills/{name}/{rel.as_posix()}"] = path.read_bytes()
    capability = next((n for n in names if n != "opc-founder-os"), "opc-founder-os")
    guide = f"""# {title} · 学生使用说明

课程来源：{basis}。
这是本地制作的学生包，不代表已经上传课程后台或完成学员实测。

## 安装

1. 解压，进入 skills 目录；每个 opc-* 文件夹是一项 Skill。
2. 将所需文件夹和 opc-founder-os 一起复制到 ~/.codex/skills/。Windows 使用用户主目录下的 .codex/skills/；如 Codex 配置了自定义 skills 目录，以实际配置为准。
3. 如果已有同名文件夹，先比较版本并备份，不能静默覆盖自己的修改。回滚时只移走本次安装的目录并恢复自己备份的版本。
4. 在自己的业务项目中打开新的 Codex 会话。确认能发现对应名称；必要时显式提供 SKILL.md 路径。课程源码目录本身不会自动安装到你的 Codex。

## 第一次使用

输入：使用 ${capability}，先读取我的真实业务资料，列出事实与未知，完成本周产出；不要替我编访谈、收入或发布结果。

第一次先使用脱敏资料。让 AI 报告它读到的输入、打算完成的产出和缺口；检查它没有自动外发、花钱、申报或变更生产。每个 Skill 内有具体执行方法和验收要求，references 中有证据与课程来源。

## 包含的能力

""" + "\n".join(f"- {n}" for n in names) + """

## 执行边界

未知写 unavailable；模拟、测试、真实执行分开。drafted 是材料已写，executed 需要实际记录，verified 需要适用的验收证据。课程映射以随包 manifest 的 lesson 编号为准；专属 deck 只补充教学方法。

本包没有账号、API key、数据库访问权或 Social Hub 权限。缺工具时完成本地草稿和能力缺口；不得假装发布、付款或注册成功。发布/排程须按随包契约执行，已有有效授权可沿用。

正式媒体能力、平台规则、法律税务与服务商费用需在实际使用时核验。导出给人的文件保存在系统 Downloads；自己的业务工作文件继续留在自己的项目中。
"""
    files["学生安装与使用说明.md"] = guide.encode()
    manifest = {
        "schema_version": 2, "pack": key, "title": title, "skills": names,
        "catalog_date": catalog["as_of"], "basis": basis,
        "production_upload": "not_performed", "learner_trial": "not_performed",
        "files": {n: {"sha256": digest(b), "bytes": len(b)} for n, b in sorted(files.items())},
        "sources": [x for x in catalog["skills"] if x["name"] in names],
    }
    files["manifest.json"] = (json.dumps(manifest, ensure_ascii=False, indent=2) + "\n").encode()
    archive = output / f"OPC {key} - {title}.zip"
    with ZipFile(archive, "x", ZIP_DEFLATED) as z:
        for name, data in sorted(files.items()):
            z.writestr(name, data)
    with ZipFile(archive) as z:
        if z.testzip() is not None:
            raise ValueError(f"ZIP CRC failed: {archive}")
        for name, expected in manifest["files"].items():
            actual = z.read(name)
            if digest(actual) != expected["sha256"] or len(actual) != expected["bytes"]:
                raise ValueError(f"ZIP readback mismatch: {name}")
    return {"file": archive.name, "sha256": digest(archive.read_bytes()), "skills": names,
            "zip_crc": "passed", "file_hash_readback": "passed"}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-parent", type=Path, default=Path.home() / "Downloads")
    parser.add_argument("--pack", default="all", help="all, W0..W15, or SEO-GEO")
    args = parser.parse_args()
    base = Path(__file__).resolve().parents[2]
    catalog = json.loads((base / "OPC_SKILLS_CATALOG.json").read_text())
    available = {p["key"]: p for p in catalog["packs"]}
    if args.pack != "all" and args.pack not in available:
        parser.error(f"Unknown pack {args.pack}; choose all or {', '.join(available)}")
    selected = list(available.values()) if args.pack == "all" else [available[args.pack]]
    output = reserve_directory(args.output_parent.expanduser())
    results = [build(catalog, base / "skills", output, p["key"], p["title"], p["skills"], p["basis"]) for p in selected]
    if args.pack == "all":
        names = sorted(x["name"] for x in catalog["skills"])
        results.append(build(catalog, base / "skills", output, "全套", f"{len(names)} 个创业能力 Skills", names, "W0–W15 与独立 SEO-GEO；各能力来源见 manifest"))
    (output / "下载包校验清单.json").write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n")
    (output / "每周 Skills 对照表.md").write_bytes((base / "OPC_SKILLS_WEEKLY_MAP.md").read_bytes())
    print(json.dumps({"output": str(output), "packs": len(results), "verified": "ZIP CRC and all payload SHA-256 readback"}, ensure_ascii=False))


if __name__ == "__main__":
    main()
