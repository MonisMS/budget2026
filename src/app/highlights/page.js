import SectionHeader from '@/components/SectionHeader';
import InfoCard from '@/components/InfoCard';
import highlightsData from '@/data/highlights.json';

export default function HighlightsPage() {
  return (
    <div>
      <SectionHeader
        title="Major Announcements"
        subtitle="Important reforms announced in Budget 2026"
        centered
        serif
        gradient
      />

      {/* Announcements */}
      {highlightsData.announcements && highlightsData.announcements.length > 0 && (
        <div className="space-y-4 mb-14 sm:mb-20">
          {highlightsData.announcements.map((item, idx) => (
            <div key={idx} className="glass rounded-2xl p-5 sm:p-6 hover-lift">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-green-500/20 flex items-center justify-center">
                  <span className="text-sm sm:text-base font-bold text-orange-400">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Initiatives */}
      {highlightsData.initiatives && highlightsData.initiatives.length > 0 && (
        <>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Key Initiatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlightsData.initiatives.map((item, idx) => (
              <InfoCard key={idx}>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </InfoCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
