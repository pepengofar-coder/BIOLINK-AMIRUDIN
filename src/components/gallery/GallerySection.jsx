import AnimatedReveal from '../shared/AnimatedReveal';
import SectionTitle from '../shared/SectionTitle';
import './GallerySection.css';

export default function GallerySection({ data, variant = 'default' }) {
  if (!data) return null;

  return (
    <section className={`gallery gallery--${variant}`} id={data.id}>
      <div className="gallery__inner">
        {/* Intro/Header */}
        {variant === 'photography' ? (
          <AnimatedReveal>
            <div className="gallery__header">
              <div className="gallery__badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                {data.title}
              </div>
              <p className="gallery__subtitle">{data.subtitle}</p>
            </div>
          </AnimatedReveal>
        ) : variant === 'inkscape' ? (
          <AnimatedReveal>
            <div className="gallery__banner gallery__banner--inkscape">
              <h2 className="gallery__banner-title">{data.title}</h2>
              <p className="gallery__banner-text">{data.subtitle}</p>
            </div>
          </AnimatedReveal>
        ) : (
          <AnimatedReveal>
             <SectionTitle subtitle={data.subtitle}>
              {data.title}
            </SectionTitle>
          </AnimatedReveal>
        )}

        {/* Grid */}
        <div className={`gallery__grid gallery__grid--${variant}`}>
          {data.items.map((item, index) => (
            <AnimatedReveal key={item.id} delay={index * 50}>
              <div className="gallery-card">
                <img src={item.image} alt={item.title} loading="lazy" className="gallery-card__img" />
                <div className="gallery-card__overlay">
                  <span className="gallery-card__title">{item.title}</span>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        {/* Footer/Bottom Banner */}
        {variant === 'canva' && data.bannerText && (
          <AnimatedReveal delay={200}>
            <div className="gallery__banner gallery__banner--canva">
              <h3 className="gallery__banner-title">CANVA</h3>
              <p className="gallery__banner-text">{data.bannerText}</p>
            </div>
          </AnimatedReveal>
        )}
        
        {variant === 'inkscape' && data.bannerText && (
          <AnimatedReveal delay={200}>
            <p className="gallery__footer-text">{data.bannerText}</p>
          </AnimatedReveal>
        )}
      </div>
    </section>
  );
}
