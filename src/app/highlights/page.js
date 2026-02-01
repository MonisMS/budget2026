import SectionHeader from '@/components/SectionHeader';
import InfoCard from '@/components/InfoCard';
import highlightsData from '@/data/highlights.json';

export default function HighlightsPage() {
  return (
    <div>
      <SectionHeader
        title="Major Announcements"
        subtitle="Important reforms announced in Budget 2026"
      />

      {highlightsData.announcements && highlightsData.announcements.length > 0 && (
        <div className="space-y-4 mb-12">
          {highlightsData.announcements.map((item, idx) => (
            <InfoCard key={idx}>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>
      )}

      {highlightsData.initiatives && highlightsData.initiatives.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Initiatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlightsData.initiatives.map((item, idx) => (
              <InfoCard key={idx}>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </InfoCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
