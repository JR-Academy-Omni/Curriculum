"""One manual, local run. This does not register or start a scheduler."""
from pathlib import Path
import argparse, hashlib, json, subprocess, sys, tempfile, shutil

def run(source,state_dir,output_dir):
    source=source.resolve()
    if source.suffix.lower()!='.xlsx':raise ValueError('Expected the course .xlsx template')
    state_dir=state_dir.resolve();output_dir=output_dir.resolve()
    if source==output_dir or source.parent==output_dir:raise ValueError('Output must be separate from input')
    digest=hashlib.sha256(source.read_bytes()).hexdigest()
    state_dir.mkdir(parents=True,exist_ok=True)
    manifest=state_dir/'successful-inputs.json'
    state=json.loads(manifest.read_text()) if manifest.exists() else {}
    if state.get(str(source),{}).get('sha256')==digest:
        return {'status':'unchanged','new_report':False,'notification':None,'sha256':digest}
    if output_dir.exists():raise FileExistsError('Output folder exists; choose a new folder')
    helper=Path(__file__).resolve().with_name('process_orders.py')
    p=subprocess.run([sys.executable,str(helper),str(source),'--out',str(output_dir)],capture_output=True,text=True)
    if p.returncode:
        return {'status':'failed','new_report':False,'notification':'Processing failed; inspect the source and error.','error':p.stderr[-1500:]}
    report=json.loads((output_dir/'reconciliation.json').read_text())
    state[str(source)]={'sha256':digest,'report':str(output_dir/'report.html')}
    temp=manifest.with_suffix('.tmp');temp.write_text(json.dumps(state,indent=2));temp.replace(manifest)
    return {'status':'processed','new_report':True,'notification':'New order report ready; review exceptions.','sha256':digest,'summary':report}
if __name__=='__main__':
    a=argparse.ArgumentParser(description=__doc__)
    a.add_argument('input',type=Path);a.add_argument('--state-dir',type=Path,required=True);a.add_argument('--output-dir',type=Path,required=True)
    args=a.parse_args()
    print(json.dumps(run(args.input,args.state_dir,args.output_dir),ensure_ascii=False))
