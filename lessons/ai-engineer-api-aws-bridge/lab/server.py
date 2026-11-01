#!/usr/bin/env python3
"""Loopback-only classroom HTTP workspace. No cloud or model calls."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from http.cookies import SimpleCookie
from pathlib import Path
from urllib.parse import urlsplit, parse_qs
import argparse, json, secrets, sqlite3, time, uuid

ROOT=Path(__file__).resolve().parents[1]
SEED={'id':'note-001','residentId':'resident-001','activity':'Morning check-in','note':'09:10 — 住户希望在更安静的区域休息，能够清楚表达偏好。已记录偏好并告知当班人员；本条未包含诊断或用药判断。下一班次询问休息环境是否合适，并继续记录反馈。','createdAt':'2026-11-01T09:10:00+10:00'}

def connect():
    db=sqlite3.connect(DB);db.execute('PRAGMA foreign_keys=ON');return db

def init():
    with connect() as db:
        db.executescript('CREATE TABLE IF NOT EXISTS sessions (id TEXT PRIMARY KEY, role TEXT NOT NULL); CREATE TABLE IF NOT EXISTS notes (session TEXT, id TEXT, data TEXT, PRIMARY KEY(session,id), FOREIGN KEY(session) REFERENCES sessions(id)); CREATE TABLE IF NOT EXISTS logs (session TEXT, ts REAL, data TEXT);')

class Handler(SimpleHTTPRequestHandler):
    def __init__(self,*a,**kw):super().__init__(*a,directory=str(ROOT/'public'),**kw)
    def translate_path(self,path):
        route=urlsplit(path).path
        if route in ('/slides','/slides/'):
            return str(ROOT/'dist/index.html')
        prefix='/curriculum/lessons/ai-engineer-api-aws-bridge/'
        if route.startswith(prefix):
            from urllib.parse import unquote
            target=(ROOT/'dist'/unquote(route[len(prefix):])).resolve()
            if target.is_relative_to((ROOT/'dist').resolve()):return str(target)
            return str(ROOT/'public/__not_found__')
        return super().translate_path(path)
    def log_message(self,*a):pass
    def end_headers(self):
        self.send_header('X-Robots-Tag','noindex, nofollow');self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');super().end_headers()
    def session(self):
        c=SimpleCookie()
        try:c.load(self.headers.get('Cookie',''))
        except Exception:return None
        sid=c.get('bridge_session');sid=sid.value if sid else ''
        with connect() as db:r=db.execute('SELECT role FROM sessions WHERE id=?',(sid,)).fetchone()
        return (sid,r[0]) if r else None
    def reply(self,status,data,session=None):
        rid='req-'+uuid.uuid4().hex[:10]; payload=json.dumps(data,ensure_ascii=False).encode()
        if session and self.path!='/api/logs':
            event={'requestId':rid,'method':self.command,'path':urlsplit(self.path).path,'status':status}
            with connect() as db:db.execute('INSERT INTO logs VALUES (?,?,?)',(session[0],time.time(),json.dumps(event)))
        self.send_response(status);self.send_header('Content-Type','application/json; charset=utf-8');self.send_header('X-Request-ID',rid);self.send_header('Content-Length',str(len(payload)));self.end_headers();self.wfile.write(payload)
    def do_GET(self):
        path=urlsplit(self.path).path
        if path=='/':
            s=self.session(); cookie=None
            if not s:
                sid=secrets.token_urlsafe(32)
                with connect() as db:
                    db.execute('INSERT INTO sessions VALUES (?,?)',(sid,'editor'));db.execute('INSERT INTO notes VALUES (?,?,?)',(sid,SEED['id'],json.dumps(SEED,ensure_ascii=False)))
                cookie=sid
            body=(ROOT/'public/lab.html').read_bytes()
            self.send_response(200);self.send_header('Content-Type','text/html; charset=utf-8')
            if cookie:self.send_header('Set-Cookie',f'bridge_session={cookie}; HttpOnly; SameSite=Strict; Path=/')
            self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body);return
        if not path.startswith('/api/'):
            return super().do_GET()
        s=self.session()
        if not s:return self.reply(401,{'error':{'code':'SESSION_REQUIRED','message':'Open the workspace to establish a session.'}})
        with connect() as db:
            if path=='/api/session':return self.reply(200,{'role':s[1]},s)
            if path=='/api/logs':
                rows=db.execute('SELECT data FROM logs WHERE session=? ORDER BY ts DESC LIMIT 30',(s[0],)).fetchall();return self.reply(200,{'items':[json.loads(r[0]) for r in rows]},s)
            if path=='/api/notes':
                raw=parse_qs(urlsplit(self.path).query).get('limit',['10'])[0]
                try:limit=int(raw)
                except ValueError:return self.reply(400,{'error':{'code':'INVALID_LIMIT','message':'limit must be an integer from 1 to 50.'}},s)
                if not 1<=limit<=50:return self.reply(400,{'error':{'code':'INVALID_LIMIT','message':'limit must be an integer from 1 to 50.'}},s)
                rows=db.execute('SELECT data FROM notes WHERE session=? ORDER BY rowid DESC LIMIT ?',(s[0],limit)).fetchall();return self.reply(200,{'items':[json.loads(r[0]) for r in rows]},s)
            if path.startswith('/api/notes/'):
                row=db.execute('SELECT data FROM notes WHERE session=? AND id=?',(s[0],path.removeprefix('/api/notes/'))).fetchone()
                if row:return self.reply(200,json.loads(row[0]),s)
        return self.reply(404,{'error':{'code':'NOT_FOUND','message':'Resource not found.'}},s)
    def do_POST(self):
        s=self.session()
        if not s:return self.reply(401,{'error':{'code':'SESSION_REQUIRED','message':'Open the workspace to establish a session.'}})
        origin=self.headers.get('Origin')
        if origin and origin!=f'http://127.0.0.1:{self.server.server_port}':return self.reply(403,{'error':{'code':'ORIGIN_DENIED','message':'Request origin is not allowed.'}},s)
        try:
            length=int(self.headers.get('Content-Length','0'))
            if length<0 or length>16384:raise ValueError('invalid length')
            if self.headers.get('Content-Type','').split(';')[0]!='application/json':return self.reply(415,{'error':{'code':'JSON_REQUIRED','message':'Use application/json.'}},s)
            body=json.loads(self.rfile.read(length));assert isinstance(body,dict)
        except (ValueError,AssertionError):return self.reply(400,{'error':{'code':'INVALID_JSON','message':'Body must be a JSON object.'}},s)
        path=urlsplit(self.path).path
        if path=='/api/role':
            role=body.get('role')
            if role not in ('viewer','editor'):return self.reply(400,{'error':{'code':'INVALID_ROLE','message':'Choose viewer or editor.'}},s)
            with connect() as db:db.execute('UPDATE sessions SET role=? WHERE id=?',(role,s[0]))
            return self.reply(200,{'role':role},s)
        if path=='/api/reset':
            with connect() as db:
                db.execute('DELETE FROM notes WHERE session=?',(s[0],));db.execute('DELETE FROM logs WHERE session=?',(s[0],));db.execute('UPDATE sessions SET role=? WHERE id=?',('editor',s[0]));db.execute('INSERT INTO notes VALUES (?,?,?)',(s[0],SEED['id'],json.dumps(SEED,ensure_ascii=False)))
            return self.reply(200,{'reset':True,'role':'editor'},s)
        if path!='/api/notes':return self.reply(404,{'error':{'code':'NOT_FOUND','message':'Resource not found.'}},s)
        if s[1]!='editor':return self.reply(403,{'error':{'code':'WRITE_FORBIDDEN','message':'The current role cannot create notes.'}},s)
        fields={'residentId','activity','note'}
        if set(body)!=fields or any(not isinstance(body.get(k),str) or not body[k].strip() for k in fields) or body.get('residentId')!='resident-001' or len(body.get('activity',''))>100 or len(body.get('note',''))>2000:
            return self.reply(400,{'error':{'code':'INVALID_FIELDS','message':'Provide residentId=resident-001, activity (1–100 chars), and note (1–2000 chars); no extra fields.'}},s)
        data={k:v.strip() for k,v in body.items()};data.update(id='note-'+uuid.uuid4().hex[:12],createdAt=time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()))
        with connect() as db:db.execute('INSERT INTO notes VALUES (?,?,?)',(s[0],data['id'],json.dumps(data,ensure_ascii=False)))
        return self.reply(201,data,s)

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--port',type=int,default=8047);p.add_argument('--db',type=Path,default=ROOT/'out/lab.sqlite3');a=p.parse_args();DB=a.db;DB.parent.mkdir(parents=True,exist_ok=True);init()
    print(f'Slides: http://127.0.0.1:{a.port}/slides/\nAPI classroom: http://127.0.0.1:{a.port}/',flush=True)
    server=ThreadingHTTPServer(('127.0.0.1',a.port),Handler)
    try:server.serve_forever()
    except KeyboardInterrupt:pass
    finally:server.server_close()
