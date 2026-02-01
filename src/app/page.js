import Link from 'next/link';
import siteData from '@/data/site.json';
import SectionHeader from '@/components/SectionHeader';

export default function HomePage() {
  return (
    <div>
      <SectionHeader
        title={siteData.title}
        subtitle={siteData.subtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {siteData.nav
          .filter((item) => item.href !== '/')
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {item.label}
              </h2>
              <p className="text-sm text-gray-500">
                View {item.label.toLowerCase()} →
              </p>
            </Link>
          ))}
      </div>

      <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
        <p className="text-gray-600">
          {siteData.disclaimer}
        </p>
      </div>
    </div>
  );
}
