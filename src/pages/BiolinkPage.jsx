import { profileData } from '../data/profileData';
import HeroSection from '../components/hero/HeroSection';
import ProductsSection from '../components/products/ProductsSection';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import ExperienceTimeline from '../components/timeline/ExperienceTimeline';
import FloatingCTA from '../components/cta/FloatingCTA';
import Footer from '../components/footer/Footer';

/**
 * BiolinkPage v3 — Vervia-style full-width layout
 */
export default function BiolinkPage() {
  const { hero, products, portfolio, experience, cta, footer } = profileData;

  return (
    <div className="biolink-page">
      <main>
        <HeroSection hero={hero} />
        <ProductsSection products={products} />
        <PortfolioGrid portfolio={portfolio} />
        <ExperienceTimeline experience={experience} />
      </main>
      <Footer footer={footer} />
      <FloatingCTA cta={cta} />
    </div>
  );
}
