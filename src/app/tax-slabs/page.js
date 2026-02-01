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
      />

      {taxSlabsData.notes && taxSlabsData.notes.length > 0 && (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <ul className="space-y-1">
            {taxSlabsData.notes.map((note, idx) => (
              <li key={idx} className="text-sm text-blue-800">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tax Slabs</h2>
        <Table columns={slabColumns} data={taxSlabsData.slabs} />
      </div>

      {taxSlabsData.additional_items && taxSlabsData.additional_items.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Additional Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {taxSlabsData.additional_items.map((item, idx) => (
              <InfoCard key={idx}>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
