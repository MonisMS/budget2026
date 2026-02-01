import siteData from '@/data/site.json';
import overviewData from '@/data/overview.json';
import QuickLinks from '@/components/QuickLinks';
import InfoCard from '@/components/InfoCard';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-400 mb-6">
          <span>February 1, 2026</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>FM Nirmala Sitharaman</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="gradient-text">{siteData.title}</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {siteData.subtitle}
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-14 sm:mb-20">
        {overviewData.cards.map((card, idx) => (
          <InfoCard key={idx} label={card.label} value={card.value} />
        ))}
      </div>

      {/* Quick Navigation */}
      <div className="mb-14 sm:mb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Explore Budget Details</h2>
        <QuickLinks links={siteData.nav} />
      </div>

      {/* Disclaimer */}
      <div className="glass-highlight rounded-2xl p-6 text-center">
        <p className="text-gray-400 text-sm">
          {siteData.disclaimer}
        </p>
      </div>
    </div>
  );
}
