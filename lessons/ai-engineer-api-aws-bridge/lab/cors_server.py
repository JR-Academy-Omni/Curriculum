# -*- coding: utf-8 -*-
"""Loopback HTTP fixtures for observing browser CORS. No external calls or writes."""
from http.server import BaseHTTPRequestHandler,ThreadingHTTPServer
import json
class Handler(BaseHTTPRequestHandler):
    def log_message(self,*args):pass
    def respond(self,code=200):
        body=b'' if code==204 else json.dumps({'topic':'Cross-Origin Resource Sharing','message':'Readable response from the CORS lesson.'}).encode()
        self.send_response(code);self.send_header('Content-Type','application/json');self.send_header('X-Robots-Tag','noindex, nofollow');self.send_header('Cache-Control','no-store')
        if self.path=='/credentials':
            self.send_header('Access-Control-Allow-Origin','*');self.send_header('Access-Control-Allow-Credentials','true')
        elif self.path=='/ok':
            if self.headers.get('Origin')=='http://127.0.0.1:8046':
                self.send_header('Access-Control-Allow-Origin','http://127.0.0.1:8046');self.send_header('Vary','Origin')
        self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body)
    def do_GET(self):self.respond(200 if self.path in ['/missing-origin','/preflight','/credentials','/ok'] else 404)
    def do_POST(self):self.respond()
    def do_OPTIONS(self):self.respond(204)
if __name__=='__main__':
    server=ThreadingHTTPServer(('127.0.0.1',8050),Handler)
    print('CORS lesson fixtures: http://127.0.0.1:8050',flush=True)
    try:server.serve_forever()
    except KeyboardInterrupt:pass
    finally:server.server_close()
