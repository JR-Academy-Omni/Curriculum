"""Deterministic pixel crops explicitly requested by owner; no model/media API."""
from pathlib import Path
from PIL import Image
import hashlib,json
root=Path(__file__).resolve().parents[1]
src=root/'research/source-slides';out=root/'public/figures';out.mkdir(exist_ok=True)
crops=[
('handbag-customers',26,(133,313,248,426)),
('handbag-article',26,(531,310,792,621)),
('handbag-care-products',26,(533,463,787,620)),
('handbag-search',26,(922,314,1138,619)),
('property-search',33,(80,272,805,390)),
('laundry-search',33,(80,425,803,551)),
('property-result',42,(49,317,627,473)),
('review-result',42,(684,317,1266,438)),
('living-room',47,(245,178,576,340)),
('white-kitchen',47,(743,128,1109,401)),
('building-photo',78,(131,159,639,443)),
('breadcrumb-path',76,(190,349,797,386)),
('wiki-article',28,(107,125,634,453)),
('academic-citation',28,(858,532,1096,622)),
('course-list',52,(90,143,550,580)),
('course-features',52,(563,192,1232,625)),
('load-empty',54,(294,259,417,511)),
('load-shell',54,(441,259,564,511)),
('load-image',54,(591,259,714,511)),
('load-content',54,(741,259,864,511)),
('cls-before',59,(153,349,279,619)),
('cls-after',59,(337,349,464,619)),
('lcp-before',57,(449,458,559,639)),
('lcp-after',57,(904,458,1013,639)),
('indexing-trend',61,(393,198,883,355)),
('indexing-details',61,(393,359,883,617)),
]
manifest=[]
for name,page,box in crops:
 f=src/f'page-{page:02}.png';img=Image.open(f);assert img.size==(1280,720)
 cropped=img.crop(box);target=out/f'{name}.png';cropped.save(target)
 manifest.append({'id':name,'source':f'research/source-slides/{f.name}','source_sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'crop_xyxy':box,'size':cropped.size,'file':f'figures/{name}.png','sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'transformation':'pixel crop only; no resize, redraw or model generation'})
(root/'research/extracted-assets.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print(f'Extracted {len(manifest)} independent case objects.')
