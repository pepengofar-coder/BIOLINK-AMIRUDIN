/**
 * TimelineItem — Single entry in the experience timeline
 */
export default function TimelineItem({ item, index }) {
  return (
    <div className="timeline-item">
      {/* Dot on the line */}
      <div className="timeline-item__dot">
        <div className="timeline-item__dot-inner" />
      </div>

      {/* Content card */}
      <div className="timeline-item__card">
        <span className="timeline-item__year">{item.year}</span>
        <h3 className="timeline-item__role">{item.role}</h3>
        <span className="timeline-item__company">{item.company}</span>
        <p className="timeline-item__description">{item.description}</p>
      </div>
    </div>
  );
}
