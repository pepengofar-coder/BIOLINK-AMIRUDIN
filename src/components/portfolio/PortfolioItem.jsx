/**
 * PortfolioItem — Single portfolio card in the grid
 */
export default function PortfolioItem({ item, onClick }) {
  return (
    <div
      className="portfolio-item"
      onClick={() => onClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(item)}
    >
      <div className="portfolio-item__image-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="portfolio-item__image"
          loading="lazy"
        />
        <div className="portfolio-item__overlay">
          <span className="portfolio-item__category">{item.category}</span>
          <svg
            className="portfolio-item__zoom"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        </div>
      </div>
      <div className="portfolio-item__info">
        <h3 className="portfolio-item__title">{item.title}</h3>
        <span className="portfolio-item__tag">{item.category}</span>
      </div>
    </div>
  );
}
