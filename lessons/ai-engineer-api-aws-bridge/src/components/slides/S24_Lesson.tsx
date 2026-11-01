import { useEffect, useState } from 'react';
import DiagramStage from '../DiagramStage';
import observed from '../../data/cors-observed.json';
type Mode='missing-origin'|'preflight'|'credentials'|'ok'|'flow';
const modes:{key:Mode;title:string}[]=[{key:'missing-origin',title:'Missing header'},{key:'preflight',title:'Preflight'},{key:'credentials',title:'Credentials'},{key:'ok',title:'正常响应'},{key:'flow',title:'原理动画'}];
const read=():Mode=>{const value=new URLSearchParams(window.location.search).get('cors');return modes.some(x=>x.key===value)?value as Mode:'missing-origin'};
const explanations={
 'missing-origin':{title:'缺少允许来源的响应头',keyword:'Access-Control-Allow-Origin',cause:'请求可能已到服务端，但响应没有提供浏览器需要的允许来源信息。',checks:['Network：读实际请求的 Response Headers。','核对页面 Origin，包括协议、主机和端口。','在 API 或代理层返回正确的允许来源。']},
 preflight:{title:'OPTIONS 预检未通过',keyword:'Response to preflight request',cause:'浏览器先检查跨域策略；预检未通过时，实际业务请求通常不会发出。',checks:['Network：先找 OPTIONS 及其状态。','核对允许的 Origin、Method 和 Headers。','检查代理、路由或鉴权是否拦住了预检。']},
 credentials:{title:'Credentials 与通配符不兼容',keyword:"credentials mode is 'include'",cause:'需要携带 Cookie 等凭据时，Access-Control-Allow-Origin 不能是通配符 *。',checks:['按需要设置 credentials: include。','服务端返回明确的允许 Origin。','核对 Access-Control-Allow-Credentials: true。']},
 ok:{title:'浏览器可以读取响应',keyword:'200 OK · Readable JSON',cause:'允许来源与当前页面匹配，浏览器能够把响应正文交给 JavaScript。',checks:['Network：确认响应头与正文。','只给需要访问的页面来源授权。','业务身份、权限和结果仍需单独验证。']}
};
export default function S24_Lesson(){const [mode,setMode]=useState<Mode>(read);useEffect(()=>{const handler=()=>setMode(read());window.addEventListener('popstate',handler);return()=>window.removeEventListener('popstate',handler)},[]);
 const choose=(key:Mode)=>{setMode(key);const url=new URL(window.location.href);url.searchParams.set('cors',key);window.history.pushState({},'',url)};
 const data=mode==='flow'?null:observed.cases[mode],explain=mode==='flow'?null:explanations[mode];
 return <section className={'course-slide cors-slide'+(mode==='flow'?' cors-flow':'')}>
 <div className="kicker">AI ENGINEER · API / 24</div><h1>CORS <span className="cors-full-name">Cross-Origin Resource Sharing</span></h1><p className="lead">跨域资源共享：协议、主机或端口不同，就可能跨 Origin。</p>
 <div className="cors-tabs" role="tablist" aria-label="CORS内容" onKeyDown={e=>{if([' ','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))e.stopPropagation();if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();const next=(modes.findIndex(x=>x.key===mode)+(e.key==='ArrowRight'?1:-1)+modes.length)%modes.length;choose(modes[next].key);e.currentTarget.querySelectorAll('button')[next]?.focus()}}}>{modes.map(item=><button type="button" role="tab" aria-selected={mode===item.key} key={item.key} onClick={()=>choose(item.key)}>{item.title}</button>)}</div>
 {mode==='flow'?<DiagramStage page={16}/>:<><div className="cors-columns"><div className="cors-console" aria-label="浏览器Console错误信息"><div className="cors-console-top"><span>Elements</span><strong>Console</strong><span>Network</span><span className={mode==='ok'?'cors-success':'cors-error-count'}>{mode==='ok'?'✓':'⊗ 1'}</span></div><div className="cors-origin">Page Origin · {observed.origin}</div><div className={'cors-console-body '+(mode==='ok'?'success':'error')}><div className="cors-error-icon" aria-hidden="true">{mode==='ok'?'✓':'⊗'}</div><div>{mode==='ok'?<><pre>200 OK</pre><pre>{JSON.stringify(observed.cases.ok.result.body,null,2)}</pre></>:<><pre className="cors-message">{data?.message}</pre><pre className="cors-fetch-error">{data?.secondary}</pre></>}</div></div></div>
 <aside className="cors-explanation"><div className="cors-topic">{mode==='ok'?'RESPONSE READABLE':'READ THE ERROR'}</div><h2>{explain?.title}</h2><p className="cors-keyword">{explain?.keyword}</p><p className="cors-cause">{explain?.cause}</p><ol>{explain?.checks.map(line=><li key={line}>{line}</li>)}</ol></aside></div><p className="cors-takeaway">{mode==='ok'?'CORS 允许读取响应；应用鉴权与业务成功仍要分别检查。':'先认出红字里的具体原因，再结合 Network 检查；不要把 mode: no-cors 当成读取 API 的修复。'}</p></>}
 <div className="source">参考：MDN CORS Errors · 浏览器版本与主题可能影响报错措辞和颜色</div>
 </section>
}
