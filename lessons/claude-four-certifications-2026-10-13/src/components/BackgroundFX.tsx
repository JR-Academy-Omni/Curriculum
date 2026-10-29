import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { colors, fonts, radii } from './ui';
import { editorial as e } from '../styles/editorial-theme';

const rgba=(hex:string,a:number)=>{const h=hex.replace('#','');return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`};
// Procedural glowing sphere: curled particle filaments, depth, rotation, no straight-line network.
export default function BackgroundFX({dark=false}:{dark?:boolean}){
 const canvas=useRef<HTMLCanvasElement>(null);
 const reduced=useReducedMotion();
 const [paused,setPaused]=useState(false);
 const [hidden,setHidden]=useState(document.hidden);
 const clock=useRef(0);
 useEffect(()=>{const onVisibility=()=>setHidden(document.hidden);document.addEventListener('visibilitychange',onVisibility);return()=>document.removeEventListener('visibilitychange',onVisibility)},[]);
 useEffect(()=>{
  const ctx=canvas.current?.getContext('2d');if(!ctx)return;
  const sprite=document.createElement('canvas');sprite.width=sprite.height=48;
  const light=sprite.getContext('2d');if(!light)return;
  const halo=light.createRadialGradient(24,24,0,24,24,24);
  halo.addColorStop(0,'rgba(238,250,255,1)');halo.addColorStop(.10,'rgba(170,225,255,.98)');halo.addColorStop(.26,rgba(colors.blue,.68));halo.addColorStop(.55,rgba(colors.indigo,.16));halo.addColorStop(1,rgba(colors.indigo,0));light.fillStyle=halo;light.fillRect(0,0,48,48);
  const particles=Array.from({length:2400},(_,i)=>{
   const strand=Math.floor(i/150),u=(i%150)/150*Math.PI*2,phase=strand*2.39996;
   const bend=u+.16*Math.sin(u*7+phase)+.09*Math.cos(u*13-phase);
   const latitude=.28*Math.sin(u*3+phase)+.12*Math.sin(u*9+phase*2);
   const x=Math.cos(bend)*Math.cos(latitude),y=Math.sin(latitude),z=Math.sin(bend)*Math.cos(latitude);
   const tilt=phase,turn=strand*.71;
   const yy=y*Math.cos(tilt)-z*Math.sin(tilt),zz=y*Math.sin(tilt)+z*Math.cos(tilt);
   return{x:x*Math.cos(turn)-yy*Math.sin(turn),y:x*Math.sin(turn)+yy*Math.cos(turn),z:zz,phase,size:2.1+(i%7)*.22};
  });
  function draw(t:number){if(!ctx)return;ctx.clearRect(0,0,1600,900);
   const cx=dark?1240:1350,cy=dark?460:365,radius=dark?230:205;
   const bloom=ctx.createRadialGradient(cx,cy,40,cx,cy,radius*1.6);
   bloom.addColorStop(0,rgba(colors.indigo,dark?.19:.025));bloom.addColorStop(.6,rgba(colors.blue,dark?.055:.012));bloom.addColorStop(1,rgba(colors.blue,0));ctx.fillStyle=bloom;ctx.fillRect(cx-radius*1.6,cy-radius*1.6,radius*3.2,radius*3.2);
   const rotation=t*.16,tilt=.22*Math.sin(t*.12),ca=Math.cos(rotation),sa=Math.sin(rotation),ct=Math.cos(tilt),st=Math.sin(tilt);
   ctx.save();ctx.globalCompositeOperation=dark?'lighter':'source-over';
   for(const p of particles){const x=p.x*ca+p.z*sa,z=-p.x*sa+p.z*ca;const y=p.y*ct-z*st,depth=p.y*st+z*ct;const perspective=3.2/(3.2-depth);const shimmer=.5+.5*Math.sin(t*1.6+p.phase+x*10+y*8);const pulse=1+.025*Math.sin(t*.9+p.phase);const size=p.size*(.7+perspective*.5)*(2+shimmer);ctx.globalAlpha=(dark?.9:.17)*(.3+(depth+1)*.35)*(.42+shimmer*.58);ctx.drawImage(sprite,cx+x*radius*perspective*pulse-size/2,cy+y*radius*perspective*pulse-size/2,size,size)}
   ctx.restore();
  }
  draw(clock.current);if(paused||reduced||hidden)return;
  let frame=0,last=performance.now();const tick=(now:number)=>{if(now-last>=40){clock.current+=(now-last)/1000;last=now;draw(clock.current)}frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame);
 },[dark,paused,reduced,hidden]);
 return <>
  <style>{`.background-fx-control:focus-visible{outline:3px solid ${colors.blue};outline-offset:3px}@media print{.background-fx,.background-fx-control{display:none!important}}`}</style>
  <canvas ref={canvas} className="background-fx" data-background-fx aria-hidden="true" width={1600} height={900} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}}/>
  <button className="background-fx-control" onClick={()=>setPaused(v=>!v)} disabled={!!reduced} aria-pressed={paused||!!reduced} style={{position:'absolute',right:28,top:62,zIndex:9,fontFamily:fonts.body,fontSize:16,padding:'7px 12px',borderRadius:radii.pill,border:`1px solid ${dark?rgba(colors.white,.2):e.line}`,background:dark?rgba(colors.dark,.8):rgba(e.surface,.85),color:dark?colors.white:e.muted,cursor:reduced?'default':'pointer'}}>{reduced?'静态背景':paused?'继续背景':'暂停背景'}</button>
 </>;
}
