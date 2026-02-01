import siteData from '@/data/site.json';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 text-white font-bold text-xs">
              IN
            </span>
            <span className="font-semibold text-gray-300">Budget 2026</span>
          </div>
          <p className="text-sm text-gray-500 text-center">
            {siteData.disclaimer}
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://www.indiabudget.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">Official Portal</a>
            <a href="https://pib.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">PIB</a>
            <a href="https://www.finmin.nic.in/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">Ministry of Finance</a>
            <a href="https://incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">Income Tax Dept</a>
          </div>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {siteData.title}
          </p>
        </div>
      </div>
    </footer>
  );
}
