import siteData from '@/data/site.json';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-xs shadow-lg shadow-orange-500/20">
              IN
            </span>
            <span className="font-semibold text-gray-300">Budget 2026</span>
          </div>
          <p className="text-sm text-gray-500 text-center max-w-md leading-relaxed">
            {siteData.disclaimer}
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a 
              href="https://www.indiabudget.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
            >
              Official Portal
              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://pib.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
            >
              PIB
              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://www.finmin.nic.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
            >
              Ministry of Finance
              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://incometaxindia.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
            >
              Income Tax Dept
              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {siteData.title}
          </p>
        </div>
      </div>
    </footer>
  );
}
