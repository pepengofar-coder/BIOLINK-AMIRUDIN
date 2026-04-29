import AnimatedReveal from '../shared/AnimatedReveal';
import './Footer.css';

/**
 * Footer v2 — Minimal with gradient accent
 */
export default function Footer({ footer }) {
  return (
    <AnimatedReveal>
      <footer className="footer" id="footer">
        <div className="footer__accent" />
        <p className="footer__tagline">{footer.tagline}</p>
        <p className="footer__copyright">{footer.copyright}</p>
        <div className="footer__badge">
          <span className="footer__badge-dot" />
          Built with React
        </div>
      </footer>
    </AnimatedReveal>
  );
}
