import PageIllustrationSvg from "../src/assets/svg/PageIllustrationSvg";
import HeroHome from "../src/partials/HeroHome";
import Stats from "../src/partials/Stats";

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
    </main>
  );
}
