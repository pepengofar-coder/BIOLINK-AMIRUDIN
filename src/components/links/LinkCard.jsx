import GlassCard from '../shared/GlassCard';

/**
 * LinkCard v2 — Premium link card with gradient border and icons
 */
export default function LinkCard({ link }) {
  const handleClick = () => {
    if (link.url && link.url !== '#') {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`link-card-wrapper ${link.isPriority ? 'link-card-wrapper--priority' : ''}`}>
      <GlassCard
        className={`link-card ${link.isPriority ? 'link-card--priority' : ''}`}
        hoverable
        onClick={handleClick}
      >
        <div className="link-card__icon-wrapper">
          <span className="link-card__icon" aria-hidden="true">{link.icon}</span>
        </div>
        <div className="link-card__content">
          <span className="link-card__title">{link.title}</span>
          {link.subtitle && (
            <span className="link-card__subtitle">{link.subtitle}</span>
          )}
        </div>
        <div className="link-card__arrow-wrapper">
          <svg
            className="link-card__arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="16"
            height="16"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </GlassCard>
    </div>
  );
}
