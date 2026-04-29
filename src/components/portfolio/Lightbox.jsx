import { useEffect, useCallback } from 'react';

/**
 * Lightbox — Full-screen image viewer with description
 */
export default function Lightbox({ item, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!item) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="Tutup"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="lightbox__image-wrapper">
          <img
            src={item.image}
            alt={item.title}
            className="lightbox__image"
          />
        </div>

        {/* Info */}
        <div className="lightbox__info">
          <span className="lightbox__category">{item.category}</span>
          <h3 className="lightbox__title">{item.title}</h3>
          <p className="lightbox__description">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
