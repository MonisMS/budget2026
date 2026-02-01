import SectionHeader from '@/components/SectionHeader';
import sectorsData from '@/data/sectors.json';

export default function SectorsPage() {
  return (
    <div>
      <SectionHeader
        title="Sector-Wise Budget"
        subtitle="Key ministry allocations for FY 2026-27"
      />

      {/* Desktop Table */}
      <div className="hidden lg:block glass rounded-2xl p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Sector</th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Allocation</th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Change</th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {sectorsData.items.map((item, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-4">
                  <span className="font-medium text-white">{item.sector}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xl font-bold gradient-text">{item.allocation}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold badge-green">
                    {item.change}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 max-w-xs">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sectorsData.items.map((item, idx) => (
          <div key={idx} className="glass rounded-2xl p-5 hover-lift">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-white">{item.sector}</h3>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold badge-green">
                {item.change}
              </span>
            </div>
            <p className="text-2xl font-bold gradient-text mb-2">{item.allocation}</p>
            <p className="text-sm text-gray-500">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
