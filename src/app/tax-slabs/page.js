import SectionHeader from '@/components/SectionHeader';
import Table from '@/components/Table';
import InfoCard from '@/components/InfoCard';
import taxSlabsData from '@/data/tax-slabs.json';

export default function TaxSlabsPage() {
  const slabColumns = [
    { key: 'range', label: 'Income Range' },
    { key: 'rate', label: 'Tax Rate' },
    { key: 'tax', label: 'Tax Amount' },
  ];

  return (
    <div>
      <SectionHeader
        title="New Tax Regime FY 2026-27"
        subtitle="Simplified tax structure with enhanced rebates"
        centered
        serif
        gradient
      />

      {/* Notes */}
      {taxSlabsData.notes && taxSlabsData.notes.length > 0 && (
        <div className="mb-8 glass rounded-2xl p-5 border-l-4 border-orange-500/50">
          <ul className="space-y-2">
            {taxSlabsData.notes.map((note, idx) => (
              <li key={idx} className="text-sm text-gray-400">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tax Slabs Table */}
      <div className="glass rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Tax Slabs</h2>
        <Table columns={slabColumns} data={taxSlabsData.slabs} showRateBadges={true} />
      </div>

      {/* Additional Information - Highlight Card */}
      {taxSlabsData.additional_items && taxSlabsData.additional_items.length > 0 && (
        <div>
          {taxSlabsData.additional_items.map((item, idx) => (
            <div key={idx} className="glass-highlight rounded-2xl p-6 text-center">
              <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
