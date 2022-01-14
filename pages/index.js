import Carousel from '../src/partials/Carousel';
import FeaturedBlocks from '../src/partials/FeaturedBlocks';
import HeroHome from '../src/partials/HeroHome';
import PageIllustrationSvg from '../src/assets/svg/PageIllustrationSvg';
import PricingTables from '../src/partials/PricingTables';
import Process from '../src/partials/Process';
import Stats from '../src/partials/Stats';
import Tabs from '../src/partials/Tabs';
import TestimonialsBlocks from '../src/partials/TestimonialsBlocks';
import Cta from '../src/partials/Cta';

// Page content
export default function Home() {
  return (
    <main className="flex-grow">
      {/* Page Illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustrationSvg />
      </div>

      {/* Page sections */}
      <HeroHome />
      <Stats />
      <Carousel />
      <Tabs />
      <Process />
      <PricingTables />
      <TestimonialsBlocks />
      <FeaturedBlocks />
      <Cta />
    </main>
  );
}
