export function median(values) {
  const a = values.filter(v => typeof v === 'number' && Number.isFinite(v)).sort((a,b)=>a-b);
  return a.length ? (a[Math.floor((a.length-1)/2)] + a[Math.ceil((a.length-1)/2)])/2 : null;
}
export function inside(p,t,radius=100) {
  if(t.kind==='circle') return Math.hypot(p.e-t.e,p.n-t.n)<=radius+1e-8;
  const [a,b,c,d]=t.bounds; return p.e>=a&&p.e<=c&&p.n>=b&&p.n<=d;
}
export function targetStats(points,collars,t,radius=100,excludeCenter=false) {
  const selected=points.filter(p=>inside(p,t,radius)).filter(p=>!(excludeCenter&&t.id==='C-N'&&p.medium==='oc'&&Math.abs(p.e-507056.195)<.0001&&Math.abs(p.n-168744.408)<.0001));
  const oc=selected.filter(p=>p.medium==='oc'), groups=new Map();
  for(const p of oc) {const key=`${p.e},${p.n}`;if(!groups.has(key))groups.set(key,[]);if(Number.isFinite(p.Au))groups.get(key).push(p.Au);}
  const vals=oc.map(p=>p.Au).filter(Number.isFinite);
  return {soil:selected.filter(p=>p.medium==='soil').length,oc:oc.length,xy:groups.size,float:selected.filter(p=>p.medium==='float').length,collars:collars.filter(c=>inside(c,t,radius)).length,medianRecord:median(vals),medianXY:median([...groups.values()].map(median)),maxAu:vals.length?Math.max(...vals):null};
}
export function assessGate(target,entries) {
  const all=entries.length===4&&entries.every(e=>e.status==='verified'&&typeof e.evidence==='string'&&e.evidence.trim().length>0);
  const failed=entries.some(e=>e.status==='failed');
  return {status:failed?'hold':all?'review':'unverified',proposedMeters:target==='C-N'?140:0,executableMeters:0,
    message:failed?'Tahan tindak lanjut. Ada prasyarat yang belum terpenuhi; telaah ulang bukti dan rancangan.':all?'Catatan prasyarat lengkap untuk telaah geolog. Verifikasi dan persetujuan lapangan tetap diperlukan.':'Verifikasi belum lengkap. Lanjutkan pengumpulan bukti; pemboran belum siap dilaksanakan.'};
}
export function nominalTrace(option) {
  const dip=option.dip*Math.PI/180,az=option.azimuth*Math.PI/180;
  return Array.from({length:option.depth+1},(_,s)=>({md:s,e:option.e+s*Math.cos(dip)*Math.sin(az),n:option.n+s*Math.cos(dip)*Math.cos(az),z:option.z+s*Math.sin(dip)}));
}
export function csvText(rows) {
  if(!rows.length)return '';
  const keys=Object.keys(rows[0]);
  const quote=v=>{let s=String(v??'');if(/^[=+@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';};
  return '\uFEFF'+[keys.map(quote).join(','),...rows.map(r=>keys.map(k=>quote(r[k])).join(','))].join('\r\n');
}
