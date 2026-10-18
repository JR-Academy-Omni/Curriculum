export async function applyPricing(now=Date.now()){
 const response=await fetch('preview-assets/pricing.json');if(!response.ok)return;
 const p=await response.json();const current=now>=Date.parse(p.switch_at)?p.standard:p.early_bird;
 document.querySelectorAll('[data-current-price]').forEach(e=>e.textContent=`A$${current} / 人`);
 const text=document.querySelector('#inquiry');if(text)text.value=`Lightman 你好，我想咨询10月25日周日的「AI时代的 SEO / GEO 基础与实战」四小时线上课，当前价格A$${current} / 人。布里斯班13:30 / 悉尼14:30。请发我报名方式、入课平台和确认包含的内容。`;
 return {current,switch_at:p.switch_at};
}
