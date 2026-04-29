import SocialIcons from './SocialIcons';
import './HeroSection.css';

/**
 * HeroSection v3 — Vervia-style full-width futuristic hero
 */
export default function HeroSection({ hero }) {
  return (
    <section className="hero" id="hero">
      {/* Background grid lines */}
      <div className="hero__grid-bg" />
      
      {/* Glow orbs */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />

      <div className="hero__content">
        {/* Left side — text */}
        <div className="hero__text animate-fade-in-up">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Available for Work</span>
          </div>

          <h1 className="hero__name">
            <span className="hero__name-line">{hero.name.split(' ')[0]}</span>
            <span className="hero__name-accent">{hero.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="hero__headline">{hero.headline}</p>
          <p className="hero__bio">{hero.bio}</p>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <a href={hero.cta.primary.url} target="_blank" rel="noopener noreferrer" className="hero__cta-primary">
              {hero.cta.primary.text}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <a href={hero.cta.secondary.url} target="_blank" rel="noopener noreferrer" className="hero__cta-secondary">
              {hero.cta.secondary.text}
            </a>
          </div>

          <SocialIcons socials={hero.socials} />
        </div>

        {/* Right side — profile image */}
        <div className="hero__visual animate-scale-in delay-3">
          <div className="hero__image-frame">
            <div className="hero__image-glow" />
            <img src={hero.photo} alt={hero.name} className="hero__photo" width={320} height={320} />
            <div className="hero__image-border" />
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="hero__divider" />
    </section>
  );
}
