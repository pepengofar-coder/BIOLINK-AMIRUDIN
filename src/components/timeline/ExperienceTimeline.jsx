import AnimatedReveal from '../shared/AnimatedReveal';
import SectionTitle from '../shared/SectionTitle';
import TimelineItem from './TimelineItem';
import './ExperienceTimeline.css';

/**
 * ExperienceTimeline — Chronological career/project history
 */
export default function ExperienceTimeline({ experience }) {
  return (
    <section className="timeline" id="experience">
      <AnimatedReveal>
        <SectionTitle subtitle="Jejak karier, proyek, dan pencapaian profesional">
          Pengalaman Kerja
        </SectionTitle>
      </AnimatedReveal>

      <div className="timeline__container">
        {/* Vertical line */}
        <div className="timeline__line" />

        {/* Items */}
        {experience.map((item, index) => (
          <AnimatedReveal key={item.id} delay={index * 120} direction="left">
            <TimelineItem item={item} index={index} />
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}
