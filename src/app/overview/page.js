import SectionHeader from '@/components/SectionHeader';
import InfoCard from '@/components/InfoCard';
import overviewData from '@/data/overview.json';

export default function OverviewPage() {
  return (
    <div>
      <SectionHeader
        title="Budget Overview"
        subtitle="Key figures from the Union Budget 2026-27"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {overviewData.cards.map((card, idx) => (
          <InfoCard key={idx} label={card.label} value={card.value} />
        ))}
      </div>

      {overviewData.bullets && overviewData.bullets.length > 0 && (
        <div className="mt-6 text-sm text-gray-500">
          {overviewData.bullets.map((bullet, idx) => (
            <p key={idx}>{bullet}</p>
          ))}
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {overviewData.revenue_sources && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">📥 Revenue Sources</h2>
            <div className="space-y-3">
              {overviewData.revenue_sources.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {overviewData.expenditure && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">📤 Expenditure</h2>
            <div className="space-y-3">
              {overviewData.expenditure.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
