import AnimatedReveal from '../shared/AnimatedReveal';
import './BlogSection.css';

export default function BlogSection({ data }) {
  if (!data) return null;

  return (
    <section className="blog" id="blog">
      <div className="blog__inner">
        <AnimatedReveal>
          <div className="blog__content">
            <p className="blog__subtitle">{data.subtitle}</p>
            
            <a href={data.url} target="_blank" rel="noopener noreferrer" className="blog__button">
              <span className="blog__icon">B</span>
              <span className="blog__text">Blogger</span>
            </a>
            
            <p className="blog__footer-text">{data.footerText}</p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
