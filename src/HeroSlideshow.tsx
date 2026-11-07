import {useEffect, useRef, useState} from 'react';
import {ChevronLeft, ChevronRight, Pause, Play, ExternalLink} from 'lucide-react';

const slides = [
  {title: 'Konteks wilayah', file: 'maps1.png', kind: 'map', credit: 'Google Maps · Citra © 2026 Airbus, CNES / Airbus, Maxar Technologies'},
  {title: 'Program eksplorasi C-N & S-1', file: 'report-program.png', kind: 'report', credit: 'Tim Devilline · Gambar 7.1 · Rancangan konseptual'},
  {title: 'Penampang telaah C-N', file: 'report-section.png', kind: 'report', credit: 'Tim Devilline · Gambar 7.2 · Laporan Devilline'},
  {title: 'Geologi & screening NAG', file: 'report-nag.png', kind: 'report', credit: 'Tim Devilline · RJDH012 · Laporan Devilline'},
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hidden, setHidden] = useState(document.hidden);
  const playButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const visibility = () => setHidden(document.hidden);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => {if (preference.matches) setPaused(true);};
    document.addEventListener('visibilitychange', visibility);
    preference.addEventListener('change', motion);
    return () => {
      document.removeEventListener('visibilitychange', visibility);
      preference.removeEventListener('change', motion);
    };
  }, []);

  useEffect(() => {
    if (paused || hidden) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % slides.length), 10_000);
    return () => window.clearInterval(timer);
  }, [paused, hidden]);

  function choose(index: number) {
    setActive((index + slides.length) % slides.length);
    setPaused(true);
  }

  return <div className="contents" role="region" aria-roledescription="carousel" aria-label="Galeri kajian Devilline"
    onFocusCapture={event => {if (event.target !== playButton.current) setPaused(true);}}>
    {slides.map((slide, index) => <div key={slide.file} className={'hero-slide '+(active === index ? 'is-active' : '')} aria-hidden={active !== index}>
      <img src={'./assets/'+slide.file} alt={slide.title} className={'hero-slide-image hero-slide-'+slide.kind} decoding="async"/>
    </div>)}
    <div className="hero-gallery-controls">
      <div className="hero-gallery-caption" aria-live={paused ? 'polite' : 'off'} aria-atomic="true">
        <span>{slides[active].title}</span><span className="hero-gallery-count">{active+1} / {slides.length}</span>
      </div>
      <div className="hero-gallery-actions">
        <button type="button" onClick={() => choose(active-1)} aria-label="Gambar sebelumnya"><ChevronLeft size={17}/></button>
        <button ref={playButton} type="button" className="hero-gallery-play" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Putar slideshow otomatis' : 'Jeda slideshow'}>
          {paused ? <Play size={14}/> : <Pause size={14}/>}<span>{paused ? 'Putar' : 'Jeda'}</span>
        </button>
        <button type="button" onClick={() => choose(active+1)} aria-label="Gambar berikutnya"><ChevronRight size={17}/></button>
        <div className="hero-gallery-dots" role="group" aria-label="Pilih gambar">
          {slides.map((slide,index) => <button key={slide.file} type="button" aria-label={`Gambar ${index+1}: ${slide.title}`} aria-pressed={active === index} onClick={() => choose(index)}><span/></button>)}
        </div>
        <a href={'./assets/'+slides[active].file} target="_blank" rel="noreferrer" aria-label={'Buka gambar '+slides[active].title}><ExternalLink size={14}/></a>
      </div>
      <p className="hero-gallery-credit">{slides[active].credit}</p>
    </div>
  </div>;
}
