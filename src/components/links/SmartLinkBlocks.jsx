import AnimatedReveal from '../shared/AnimatedReveal';
import SectionTitle from '../shared/SectionTitle';
import LinkCard from './LinkCard';
import './SmartLinkBlocks.css';

/**
 * SmartLinkBlocks — Collection of smart link buttons
 */
export default function SmartLinkBlocks({ links }) {
  return (
    <section className="smart-links" id="links">
      <AnimatedReveal>
        <SectionTitle subtitle="Tautan penting untuk menghubungi & melihat karya saya">
          Tautan Pintar
        </SectionTitle>
      </AnimatedReveal>

      <div className="smart-links__grid">
        {links.map((link, index) => (
          <AnimatedReveal key={link.id} delay={index * 80}>
            <LinkCard link={link} />
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}
