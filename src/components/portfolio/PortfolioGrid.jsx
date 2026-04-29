import { useState } from 'react';
import AnimatedReveal from '../shared/AnimatedReveal';
import SectionTitle from '../shared/SectionTitle';
import Lightbox from './Lightbox';
import './PortfolioGrid.css';

/**
 * PortfolioGrid v3 — Website showcase cards
 */
export default function PortfolioGrid({ portfolio }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <AnimatedReveal>
          <SectionTitle subtitle="Website & aplikasi web yang sudah saya kerjakan">
            Karya & Proyek
          </SectionTitle>
        </AnimatedReveal>

        <div className="portfolio__grid">
          {portfolio.map((item, index) => (
            <AnimatedReveal key={item.id} delay={index * 120}>
              <div className="work-card" onClick={() => setActiveItem(item)}>
                {/* Browser-style frame */}
                <div className="work-card__browser">
                  <div className="work-card__browser-bar">
                    <div className="work-card__dots">
                      <span /><span /><span />
                    </div>
                    <div className="work-card__url-bar">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      <span>{item.url?.replace('https://', '')}</span>
                    </div>
                  </div>
                  <div className="work-card__screen">
                    <img src={item.image} alt={item.title} className="work-card__image" loading="lazy" />
                    <div className="work-card__hover-overlay">
                      <span className="work-card__view-label">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="work-card__info">
                  <div className="work-card__meta">
                    <span className="work-card__category">{item.category}</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="work-card__link" onClick={(e) => e.stopPropagation()}>
                      Kunjungi
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                    </a>
                  </div>
                  <h3 className="work-card__title">{item.title}</h3>
                  {item.tech && (
                    <div className="work-card__tech">
                      {item.tech.map((t) => (
                        <span key={t} className="work-card__tech-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>

      {activeItem && <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />}
    </section>
  );
}
