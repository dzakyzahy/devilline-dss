import React,{useEffect,useLayoutEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/inter/latin-800.css';
import '@fontsource/inter/latin-900.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-700.css';
import './reference.css';
import './styles.css';
import './science/science.css';
import Landing from './Landing';
import Team from './Team';
import {Header} from './Header';
import {Link} from './Link';
import {mountScience,unmountScience} from './science/workspace.js';
import {ArrowLeft,FileText,Map,Layers,FlaskConical,ClipboardList} from 'lucide-react';

const tabs=[['simulation','Command Center DSS',Map],['terrain','3D DEMNAS Ramba Joring',Layers],['data','Data & Lingkungan',FlaskConical]];
function ScientificView({page}){
 const root=useRef(null);
 useEffect(()=>{mountScience(root.current,{simulation:'dss',terrain:'terrain',data:'data',about:'metode'}[page]);return()=>unmountScience();},[page]);
 return <div className={'min-h-screen flex flex-col '+(page==='about'?'bg-gray-50':'bg-gray-100')}><Header/>
  {page!=='about'&&<nav aria-label="Modul DSS" className="science-nav bg-white border-b border-gray-200 sticky top-16 sm:top-24 lg:top-28 z-20"><div className="flex overflow-x-auto">{tabs.map(([id,label,Icon])=><Link key={id} href={'/'+id} aria-current={page===id?'page':undefined} className={'flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3.5 text-xs sm:text-sm font-semibold lg:px-6 '+(page===id?'border-emerald-700 text-emerald-800':'border-transparent text-gray-500 hover:text-gray-800')}><Icon size={16}/>{label}</Link>)}</div></nav>}
  <main tabIndex={-1} ref={root} className={'science flex-1 '+(page==='about'?'method-page':'workspace-page')} id="main-content"><div className="p-12 text-gray-600">Memuat data Ramba Joring…</div></main>
 </div>;
}
function Documentation(){return <div className="min-h-screen bg-gray-50"><Header/><main tabIndex={-1} id="main-content" className="max-w-7xl mx-auto px-6 py-12 space-y-10"><Link href="/" className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-emerald-700"><ArrowLeft size={16} className="mr-2"/>Kembali ke Beranda</Link><div className="space-y-4 max-w-3xl"><span className="text-xs font-bold uppercase tracking-widest text-emerald-700">OlympiAR 2026 · Tim Devilline</span><h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Dokumentasi <span className="text-emerald-700">Ramba Joring</span></h1><p className="text-gray-600 leading-relaxed">Peta, penampang, dan tabel pendukung kajian geologi, geokimia, serta lingkungan dalam Laporan Devilline.</p></div><div className="grid grid-cols-1 lg:grid-cols-2 gap-7">{[['Peta program eksplorasi','Gambar 7.1 · verifikasi permukaan C-N dan S-1','report-program.png'],['Penampang telaah C-N','Gambar 7.2 · geometri konseptual dan lintasan teramati','report-section.png'],['Screening NAG','Pengamatan terbatas pada lubang RJDH012','report-nag.png']].map(([title,caption,img])=><figure className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden" key={img}><figcaption className="p-5 border-b border-gray-100"><h2 className="font-bold">{title}</h2><p className="text-xs text-gray-500 mt-1">{caption}</p></figcaption><a href={'./assets/'+img} target="_blank" rel="noreferrer" className="block p-4"><img src={'./assets/'+img} alt={title} className="w-full h-auto"/></a></figure>)}</div><section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{[['Tabel dukungan target','target_evidence.csv',FileText],['98 stasiun konseptual','proposed_stations.csv',Map],['Sumber data dan metode','provenance.json',Layers],['Pemeriksaan konsistensi','validation.json',ClipboardList]].map(([label,file,Icon])=><a key={file} href={'./data/'+file} download className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-emerald-600"><Icon className="text-emerald-700 mb-4"/><h2 className="font-semibold">{label}</h2><span className="text-xs text-gray-500 mt-2 block">Unduh dokumen pendukung</span></a>)}</section></main></div>}
function App(){
 const current=()=>({dss:'simulation',metode:'about',tim:'team',beranda:''}[location.hash.slice(1)]??location.hash.slice(1));
 const [page,setPage]=useState(current);
 useEffect(()=>{const change=()=>setPage(current());window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change);},[]);
 useLayoutEffect(()=>{window.scrollTo({top:0,behavior:'instant'});document.title='Devilline | '+({simulation:'Eksplorasi DSS',terrain:'DEMNAS 3D',data:'Data & Lingkungan',about:'Metodologi',team:'Tim Devilline',documentation:'Dokumentasi'}[page]||'Ramba Joring DSS');},[page]);
 return <><a href="#main-content" className="skip-link" onClick={e=>{e.preventDefault();document.querySelector('main')?.focus();}}>Lewati ke isi</a>{page==='team'?<Team/>:page==='documentation'?<Documentation/>:['simulation','terrain','data','about'].includes(page)?<ScientificView page={page}/>:<Landing/>}</>;
}
const appRoot=import.meta.hot?.data.root??createRoot(document.getElementById('root'));
if(import.meta.hot)import.meta.hot.data.root=appRoot;
appRoot.render(<App/>);
