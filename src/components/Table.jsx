export default function Table({ columns, data, showRateBadges = false }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data available.</p>;
  }

  // Map tax rates to specific badge CSS classes
  const getRateBadgeClass = (rate) => {
    if (!rate) return 'badge-nil';
    const rateStr = rate.toString().toLowerCase().trim();
    
    // Check for exact matches first
    if (rateStr === 'nil' || rateStr === '0%' || rateStr === '0') return 'badge-nil';
    if (rateStr === '5%' || rateStr === '5') return 'badge-5';
    if (rateStr === '10%' || rateStr === '10') return 'badge-10';
    if (rateStr === '15%' || rateStr === '15') return 'badge-15';
    if (rateStr === '20%' || rateStr === '20') return 'badge-20';
    if (rateStr === '25%' || rateStr === '25') return 'badge-25';
    if (rateStr === '30%' || rateStr === '30') return 'badge-30';
    
    // Fallback for partial matches
    if (rateStr.includes('30')) return 'badge-30';
    if (rateStr.includes('25')) return 'badge-25';
    if (rateStr.includes('20')) return 'badge-20';
    if (rateStr.includes('15')) return 'badge-15';
    if (rateStr.includes('10')) return 'badge-10';
    if (rateStr.includes('5')) return 'badge-5';
    
    return 'badge-nil';
  };

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-4 text-sm">
                    {col.key === 'rate' && showRateBadges ? (
                      <span className={getRateBadgeClass(row[col.key])}>
                        {row[col.key] || '—'}
                      </span>
                    ) : (
                      <span className={
                        col.key === 'allocation' || col.key === 'value' || col.key === 'tax'
                          ? 'font-semibold text-white'
                          : 'text-gray-300'
                      }>
                        {row[col.key] || '—'}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-3">
        {data.map((row, idx) => (
          <div key={idx} className="glass rounded-xl p-4 space-y-3">
            {columns.map((col) => (
              <div key={col.key} className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{col.label}</span>
                {col.key === 'rate' && showRateBadges ? (
                  <span className={getRateBadgeClass(row[col.key])}>
                    {row[col.key] || '—'}
                  </span>
                ) : (
                  <span className={`text-sm ${
                    col.key === 'allocation' || col.key === 'value' || col.key === 'tax'
                      ? 'font-semibold text-white'
                      : 'text-gray-300'
                  }`}>
                    {row[col.key] || '—'}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
