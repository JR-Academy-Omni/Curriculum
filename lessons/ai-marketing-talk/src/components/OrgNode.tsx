import { colors } from './deck';

export default function OrgNode({x,y,w=300,h=95,title,sub,type='human'}:{x:number;y:number;w?:number;h?:number;title:string;sub:string;type?:'human'|'agent'|'software'}){
 const agent=type==='agent';
 return <div data-org-node style={{position:'absolute',left:x,top:y,width:w,height:h,borderRadius:18,border:'2px solid '+colors.dark,background:agent?colors.dark:type==='human'?colors.yellow:colors.white,color:agent?colors.white:colors.dark,padding:'12px 18px',boxShadow:'4px 4px 0 '+(agent?colors.rose:colors.white)}}>
  <div style={{display:'flex',alignItems:'center',gap:12}}><span style={{fontSize:16,fontWeight:900,borderRadius:7,padding:'3px 6px',background:agent?colors.rose:colors.white,whiteSpace:'nowrap'}}>{type==='human'?'人':agent?'AI Agent':'软件'}</span><h2 style={{fontSize:25,fontWeight:900,lineHeight:1.25}}>{title}</h2></div>
  <p style={{fontSize:21,marginTop:10,lineHeight:1.35}}>{sub}</p>
 </div>;
}
