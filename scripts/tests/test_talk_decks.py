import importlib.util, unittest, tempfile
from pathlib import Path
spec=importlib.util.spec_from_file_location('decks',Path(__file__).parents[1]/'check-talk-decks.py')
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class CatalogTests(unittest.TestCase):
 def test_nested_cards_rejected(self):
  p=m.parse_catalog('<div class="card"><h2>A</h2><div class="card"><h2>B</h2></div></div>');self.assertTrue(any('nested' in x for x in p.errors))
 def test_unclosed_div_rejected(self):self.assertTrue(m.parse_catalog('<div class="card"><h2>A</h2>').errors)
 def test_flat_cards_pass(self):self.assertEqual(m.parse_catalog('<div><div class="card"><h2>A</h2></div><div class="card"><h2>B</h2></div></div>').errors,[])
 def test_title_required(self):self.assertTrue(m.parse_catalog('<div class="card"></div>').errors)
 def test_missing_registration(self):self.assertIn('got 0',m.check_deck('demo',m.parse_catalog('<div></div>'))[0])
 def test_duplicate_registration(self):
  h='<div class="card"><h2>A</h2><a href="./lessons/demo/">open</a></div>';self.assertIn('got 2',m.check_deck('demo',m.parse_catalog(h+h))[0])
 def test_local_link_resolution(self):
  r=Path('/tmp/catalog-root').resolve();self.assertEqual(m.local_target('/curriculum/lessons/demo/?page=1',r),r/'lessons/demo');self.assertIsNone(m.local_target('https://example.test',r));self.assertIsNone(m.local_target('../../secret',r))
 def test_missing_resource_rejected(self):
  with tempfile.TemporaryDirectory() as t:
   r=Path(t);d=r/'lessons/demo';d.mkdir(parents=True);(d/'index.html').write_text('HTML')
   c=m.parse_catalog('<div class="card"><h2>A</h2>讲师 时长 技术栈 Slide 数 复用<a href="./lessons/demo/">open</a><a href="./lessons/demo/WORKSHEET.md">sheet</a></div>')
   self.assertTrue(any('WORKSHEET' in e for e in m.check_deck('demo',c,r)))
 def test_new_deck_missing_manifest(self):
  with tempfile.TemporaryDirectory() as t:
   r=Path(t);d=r/'lessons/demo';d.mkdir(parents=True);(d/'index.html').write_text('HTML');(r/'.github/workflows').mkdir(parents=True);(r/'.github/workflows/deploy.yml').write_text('')
   c=m.parse_catalog('<div class="card"><h2>A</h2>讲师 时长 技术栈 Slide 数 复用 Draft<a href="./lessons/demo/">open</a></div>')
   errors=m.check_deck('demo',c,r,new=True);self.assertTrue(any('manifest' in e for e in errors));self.assertTrue(any('deployment' in e for e in errors))
if __name__=='__main__':unittest.main()

class InitializerTests(unittest.TestCase):
 def run_init(self, slug, title='HTML "课程"'):
  import shutil, subprocess, sys
  with tempfile.TemporaryDirectory() as t:
   r=Path(t);(r/'scripts').mkdir();(r/'lessons').mkdir()
   shutil.copy(Path(__file__).parents[1]/'create-talk-deck.py',r/'scripts/create-talk-deck.py')
   shutil.copytree(m.ROOT/'lessons/_template',r/'lessons/_template',ignore=shutil.ignore_patterns('node_modules','dist'))
   (r/'lessons.html').write_text('<div class="grid"></div>')
   args=[sys.executable,str(r/'scripts/create-talk-deck.py'),slug,'--title',title,'--instructor','JR','--minutes','120']
   result=subprocess.run(args,capture_output=True,text=True)
   if result.returncode:return result.returncode,result.stderr
   import json
   d=r/'lessons'/slug;data=json.loads((d/'package.json').read_text());self.assertIn(title,data['description'])
   self.assertEqual(m.hashes(d),json.loads((d/'engine-manifest.json').read_text())['files'])
   self.assertEqual(m.parse_catalog((r/'lessons.html').read_text()).errors,[])
   before=(d/'PRD.md').read_text();retry=subprocess.run(args,capture_output=True,text=True)
   self.assertNotEqual(retry.returncode,0);self.assertEqual((d/'PRD.md').read_text(),before)
   return 0,''
 def test_valid_and_no_overwrite(self):self.assertEqual(self.run_init('example-html')[0],0)
 def test_traversal_rejected(self):self.assertNotEqual(self.run_init('../escape')[0],0)
 def test_non_slug_rejected(self):self.assertNotEqual(self.run_init('Bad Slug')[0],0)
