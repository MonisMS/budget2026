import SectionHeader from '@/components/SectionHeader';
import Table from '@/components/Table';
import sectorsData from '@/data/sectors.json';

export default function SectorsPage() {
  const columns = [
    { key: 'sector', label: 'Sector' },
    { key: 'allocation', label: 'Allocation' },
    { key: 'change', label: 'Change (YoY)' },
    { key: 'note', label: 'Notes' },
  ];

  return (
    <div>
      <SectionHeader
        title="Sector-wise Allocation"
        subtitle="Budget allocation across key sectors"
      />

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <Table columns={columns} data={sectorsData.items} />
      </div>
    </div>
  );
}
