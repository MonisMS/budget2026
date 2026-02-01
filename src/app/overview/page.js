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

      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
        {overviewData.cards.map((card, idx) => (
          <InfoCard key={idx} label={card.label} value={card.value} />
        ))}
      </div>

      {/* Bullets */}
      {overviewData.bullets && overviewData.bullets.length > 0 && (
        <div className="mb-14">
          {overviewData.bullets.map((bullet, idx) => (
            <p key={idx} className="text-sm text-gray-500">{bullet}</p>
          ))}
        </div>
      )}

      {/* Revenue & Expenditure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {overviewData.revenue_sources && (
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400">📥</span>
              Revenue Sources
            </h2>
            <div className="space-y-4">
              {overviewData.revenue_sources.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-400">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                        style={{ width: item.value }}
                      />
                    </div>
                    <span className="font-semibold text-white w-12 text-right">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {overviewData.expenditure && (
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center text-orange-400">📤</span>
              Expenditure
            </h2>
            <div className="space-y-4">
              {overviewData.expenditure.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-400">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                        style={{ width: item.value }}
                      />
                    </div>
                    <span className="font-semibold text-white w-12 text-right">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
