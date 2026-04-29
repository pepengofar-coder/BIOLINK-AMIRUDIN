import AnimatedReveal from '../shared/AnimatedReveal';
import SectionTitle from '../shared/SectionTitle';
import './ProductsSection.css';

/**
 * ProductsSection — Featured products from lynk.id
 */
export default function ProductsSection({ products }) {
  return (
    <section className="products" id="products">
      <div className="products__inner">
        <AnimatedReveal>
          <SectionTitle subtitle="Jelajahi koleksi produk digital premium">
            Featured Products
          </SectionTitle>
        </AnimatedReveal>

        <div className="products__grid">
          {products.map((product, index) => (
            <AnimatedReveal key={product.id} delay={index * 120}>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card"
              >
                {/* Image */}
                <div className="product-card__image-wrap">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-card__image"
                    loading="lazy"
                  />
                  <div className="product-card__overlay">
                    <span className="product-card__view-btn">View Details</span>
                  </div>
                  {product.badge && (
                    <span className="product-card__badge">{product.badge}</span>
                  )}
                </div>

                {/* Info */}
                <div className="product-card__info">
                  <span className="product-card__category">{product.category}</span>
                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__desc">{product.description}</p>
                  <div className="product-card__footer">
                    <span className="product-card__price">{product.price}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </a>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
