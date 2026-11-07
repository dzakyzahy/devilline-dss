import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

const slides = [
  {title: 'Konteks wilayah', file: 'maps1.png', kind: 'map', credit: 'Google Maps · Citra © 2026 Airbus, CNES / Airbus, Maxar Technologies'},
  {title: 'Program eksplorasi C-N & S-1', file: 'report-program.png', kind: 'report', credit: 'Tim Devilline · Gambar 7.1 · Rancangan konseptual'},
  {title: 'Penampang telaah C-N', file: 'report-section.png', kind: 'report', credit: 'Tim Devilline · Gambar 7.2 · Laporan Devilline'},
  {title: 'Geologi & screening NAG', file: 'report-nag.png', kind: 'report', credit: 'Tim Devilline · RJDH012 · Laporan Devilline'},
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hidden, setHidden] = useState(document.hidden);

  useEffect(() => {
    const visibility = () => setHidden(document.hidden);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => setReducedMotion(preference.matches);
    document.addEventListener('visibilitychange', visibility);
    preference.addEventListener('change', motion);
    return () => {
      document.removeEventListener('visibilitychange', visibility);
      preference.removeEventListener('change', motion);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || hidden) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % slides.length), 4_000);
    return () => window.clearTimeout(timer);
  }, [active, reducedMotion, hidden]);

  function choose(index: number) {
    setActive((index + slides.length) % slides.length);
  }

  return <div className="contents" role="region" aria-roledescription="carousel" aria-label="Galeri kajian Devilline">
    {slides.map((slide, index) => <div key={slide.file} className={'hero-slide '+(active === index ? 'is-active' : '')} aria-hidden={active !== index}>
      <img src={'./assets/'+slide.file} alt={slide.title} className={'hero-slide-image hero-slide-'+slide.kind} decoding="async"/>
    </div>)}
    <div className="hero-gallery-controls">
      <div className="hero-gallery-navigation">
        <button type="button" onClick={() => choose(active-1)} aria-label="Gambar sebelumnya"><ChevronLeft size={20}/></button>
        <span className="hero-gallery-caption" aria-live="off">{slides[active].title}</span>
        <button type="button" onClick={() => choose(active+1)} aria-label="Gambar berikutnya"><ChevronRight size={20}/></button>
      </div>
      <p className="hero-gallery-credit">{slides[active].credit}</p>
    </div>
  </div>;
}
