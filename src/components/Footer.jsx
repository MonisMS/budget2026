import siteData from '@/data/site.json';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 text-center">
          {siteData.disclaimer}
        </p>
        <p className="text-xs text-gray-400 text-center mt-2">
          © {new Date().getFullYear()} {siteData.title}
        </p>
      </div>
    </footer>
  );
}
