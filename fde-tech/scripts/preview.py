#!/usr/bin/env python3
"""Serve the assembled curriculum tree on loopback with noindex on all responses."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import argparse, functools
root=Path(__file__).resolve().parents[2]
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self, url):
  from urllib.parse import urlsplit, unquote
  request=unquote(urlsplit(url).path)
  if request.startswith("/curriculum/"):request=request[len("/curriculum"):]
  if request=="/posters.html":return str(root/"posters.html")
  for slug in ["fde-tech", "fde-business"]:
   prefix="/"+slug+"/"
   if request.startswith(prefix):
    public=root/slug/"public"; candidate=(public/request[len(prefix):]).resolve()
    try:candidate.relative_to(public.resolve());return str(candidate)
    except ValueError:pass
  return str(root/"fde-tech/public/__missing__")
 def end_headers(self):
  self.send_header('X-Robots-Tag','noindex, nofollow'); self.send_header('Cache-Control','no-store'); super().end_headers()
 def do_GET(self):
  if self.path.split('?')[0]=='/robots.txt':
   body=b'User-agent: *\nDisallow: /\n';self.send_response(200);self.send_header('Content-Type','text/plain');self.end_headers();self.wfile.write(body);return
  super().do_GET()
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--port',type=int,default=8020);a=p.parse_args()
 print('FDE curriculum preview: http://localhost:%s/curriculum/fde-tech/curriculum.html'%a.port,flush=True)
 ThreadingHTTPServer(('127.0.0.1',a.port),functools.partial(Handler,directory=str(root))).serve_forever()
