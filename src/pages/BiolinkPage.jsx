import { profileData } from '../data/profileData';
import HeroSection from '../components/hero/HeroSection';
import GallerySection from '../components/gallery/GallerySection';
import BlogSection from '../components/blog/BlogSection';
import FloatingCTA from '../components/cta/FloatingCTA';
import Footer from '../components/footer/Footer';

/**
 * BiolinkPage v3 — Vervia-style layout with custom galleries
 */
export default function BiolinkPage() {
  const { hero, canva, inkscape, photography, blog, cta, footer } = profileData;

  return (
    <div className="biolink-page">
      <main>
        <HeroSection hero={hero} />
        <GallerySection data={canva} variant="canva" />
        <GallerySection data={inkscape} variant="inkscape" />
        <GallerySection data={photography} variant="photography" />
        <BlogSection data={blog} />
      </main>
      <Footer footer={footer} />
      <FloatingCTA cta={cta} />
    </div>
  );
}
