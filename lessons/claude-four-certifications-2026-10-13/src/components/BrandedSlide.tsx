import type { PropsWithChildren } from 'react';
import { assetPath, radii } from './ui';
import { editorial as e } from '../styles/editorial-theme';
export default function BrandedSlide({children}:PropsWithChildren){
 return <>{children}<div data-anthropic-brand style={{position:'absolute',right:242,top:17,zIndex:20,padding:'11px 14px',border:`1px solid ${e.line}`,borderRadius:radii.pill,background:e.surface,pointerEvents:'none'}}><img src={assetPath('images/anthropic-official.svg')} alt="Anthropic" style={{display:'block',width:180,height:180*16/143,objectFit:'contain'}}/></div></>;
}
