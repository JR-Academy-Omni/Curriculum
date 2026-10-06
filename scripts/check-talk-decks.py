#!/usr/bin/env python3
"""Validate HTML deck registration and the versioned shared runtime; no network or writes by default."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import argparse, hashlib, json, re, subprocess, sys
ROOT = Path(__file__).resolve().parents[1]
ENGINE_FILES = ['src/components/SlideEngine.tsx', 'src/components/CameraBubble.tsx', 'src/components/ui.tsx', 'src/components/deck.tsx', 'src/styles/theme.ts', 'src/main.tsx', 'src/styles/presentation.css']
class Catalog(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.cards, self.errors = [], [], []
        self.card = None
        self.in_heading = False
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'div':
            is_card = 'card' in attrs.get('class', '').split()
            if is_card:
                if self.card is not None: self.errors.append(f'nested card at line {self.getpos()[0]}')
                self.card = {'title': '', 'text': '', 'links': [], 'line': self.getpos()[0]}
                self.cards.append(self.card)
            self.stack.append((is_card, self.card))
        if tag == 'h2': self.in_heading = True
        if tag == 'a' and self.card is not None: self.card['links'].append(attrs.get('href', ''))
    def handle_endtag(self, tag):
        if tag == 'h2': self.in_heading = False
        if tag == 'div':
            if not self.stack: self.errors.append(f'extra closing div at line {self.getpos()[0]}')
            else:
                is_card, _ = self.stack.pop()
                if is_card: self.card = next((c for is_c, c in reversed(self.stack) if is_c), None)
    def handle_data(self, text):
        if self.card is not None:
            self.card['text'] += text
            if self.in_heading: self.card['title'] += text
    def finish(self):
        if self.stack: self.errors.append(f'{len(self.stack)} unclosed divs')
        for c in self.cards:
            if not c['title'].strip(): self.errors.append(f'card without title at line {c["line"]}')
        return self

def parse_catalog(text):
    p = Catalog(); p.feed(text); return p.finish()
def local_target(href, root):
    parsed = urlparse(href)
    if parsed.scheme or parsed.netloc or not parsed.path: return None
    path = unquote(parsed.path)
    if path.startswith('/curriculum/'): path = path[len('/curriculum/'):]
    elif path.startswith('/'): return None
    result = (root / path).resolve()
    if not result.is_relative_to(root.resolve()): return None
    return result

def hashes(deck):
    return {f: hashlib.sha256((deck / f).read_bytes()).hexdigest() for f in ENGINE_FILES}
def check_deck(slug, catalog, root=ROOT, new=False):
    errors = []
    directory = root / 'lessons' / slug
    cards = [c for c in catalog.cards if any(local_target(h, root) == directory.resolve() for h in c['links'])]
    if len(cards) != 1: return [f'{slug}: expected one catalog entry, got {len(cards)}']
    card = cards[0]
    for label in ['讲师', '时长', '技术栈']:
        if label not in card['text'] and not (label == '讲师' and '讲者' in card['text']): errors.append(f'{slug}: missing catalog field {label}')
    if not re.search(r'Slide\s*数|SLIDE\s*数|页数|SCENE\s*数', card['text'], re.I): errors.append(f'{slug}: missing slide count')
    if '复用' not in card['text'] and '课程映射' not in card['text']: errors.append(f'{slug}: missing course mapping')
    if not (directory / 'index.html').is_file(): errors.append(f'{slug}: missing HTML entry')
    for href in card['links']:
        target = local_target(href, root)
        if target is not None and target.is_relative_to(directory.resolve()) and not target.exists(): errors.append(f'{slug}: missing linked resource {href}')
    if (directory/'engine-manifest.json').exists() and not new:
        try:
            recorded=json.loads((directory/'engine-manifest.json').read_text())
            actual={f:hashlib.sha256((directory/f).read_bytes()).hexdigest() for f in recorded['files']}
            if actual!=recorded['files']:errors.append(f'{slug}: runtime changed without updating manifest')
        except (OSError,ValueError,KeyError):errors.append(f'{slug}: invalid engine manifest')
    if new:
        for f in ['PRD.md','RUNSHEET.md','WORKSHEET.md','SOURCE_MAP.md','QA.md','engine-manifest.json']:
            if not (directory / f).is_file(): errors.append(f'{slug}: missing {f}')
        if not any(w in card['text'] for w in ['Local','Draft','已部署','Published','Published'.upper()]): errors.append(f'{slug}: missing explicit release status')
        workflow = (root / '.github/workflows/deploy.yml').read_text()
        if f'working-directory: lessons/{slug}' not in workflow or f'lessons/{slug}/dist' not in workflow: errors.append(f'{slug}: missing deployment build/copy configuration')
        try:
            manifest = json.loads((directory / 'engine-manifest.json').read_text())
            if manifest['files'] != hashes(directory): errors.append(f'{slug}: engine manifest differs from actual runtime')
        except (OSError, KeyError, ValueError): errors.append(f'{slug}: invalid engine manifest')
    return errors

def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--base', help='Git base ref; enforce registration for changed lesson decks')
    ap.add_argument('--slug', action='append', default=[])
    ap.add_argument('--engine-inventory', action='store_true')
    ap.add_argument('--write-template-manifest', action='store_true')
    args = ap.parse_args()
    template = ROOT / 'lessons/_template'
    if args.write_template_manifest:
        m = {'version':'2.0.0','files':hashes(template)}
        (template / 'engine-manifest.json').write_text(json.dumps(m, indent=2)+'\n')
        print('Updated template manifest 2.0.0'); return 0
    catalog = parse_catalog((ROOT / 'lessons.html').read_text())
    errors = list(catalog.errors)
    slugs, new_slugs = set(args.slug), set()
    if args.base:
        changed = subprocess.check_output(['git','diff','--name-only',args.base,'HEAD'],cwd=ROOT,text=True).splitlines()
        for f in changed:
            if f.endswith('.pptx'):errors.append(f'{f}: PPTX changes are prohibited; use HTML Talk Deck')
            parts = Path(f).parts
            if len(parts)>2 and parts[0]=='lessons' and parts[1]!='_template':
                directory=(ROOT/f).parent
                while directory.is_relative_to(ROOT/'lessons') and not (directory/'package.json').exists():directory=directory.parent
                if not (directory/'package.json').exists():continue
                slug=str(directory.relative_to(ROOT/'lessons'));slugs.add(slug)
                existed=subprocess.run(['git','cat-file','-e',f'{args.base}:lessons/{slug}/package.json'],cwd=ROOT,capture_output=True).returncode==0
                if not existed:new_slugs.add(slug)
    for slug in sorted(slugs): errors.extend(check_deck(slug,catalog,new=slug in new_slugs))
    try:
        expected=json.loads((template/'engine-manifest.json').read_text())
        if expected['files'] != hashes(template):errors.append('template runtime changed without updating engine-manifest.json')
    except (OSError, ValueError, KeyError):errors.append('missing or invalid template engine manifest')
    if args.engine_inventory:
        for source in sorted((ROOT/'lessons').rglob('src/components/SlideEngine.tsx')):
            deck=source.parents[2]
            if deck==template:continue
            manifest=deck/'engine-manifest.json'
            if not manifest.exists():state='unversioned'
            else:
                try:
                    recorded=json.loads(manifest.read_text());actual={f:hashlib.sha256((deck/f).read_bytes()).hexdigest() for f in recorded['files']}
                    state='manifest-mismatch' if actual!=recorded['files'] else ('template-match' if actual==expected['files'] else 'legacy-versioned')
                    if state=='manifest-mismatch':errors.append(f'{deck.name}: runtime changed without updating manifest')
                except (OSError,ValueError,KeyError):state='runtime-incomplete';errors.append(f'{deck.name}: invalid runtime manifest')
            print(f'{deck.relative_to(ROOT/"lessons")}: {state}')
    for e in errors:print(e,file=sys.stderr)
    if not errors:print(f'OK: {len(catalog.cards)} flat catalog cards; {len(slugs)} changed/selected decks; template manifest verified')
    return bool(errors)
if __name__=='__main__':sys.exit(main())
