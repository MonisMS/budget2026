export default function InfoCard({ label, value, children, className = '', hover = true, highlight = false }) {
  return (
    <div 
      className={`${highlight ? 'glass-highlight' : 'glass'} rounded-2xl p-5 sm:p-6 ${hover ? 'hover-lift' : ''} ${className}`}
    >
      {label && (
        <p className="text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-wider font-medium">{label}</p>
      )}
      {value && (
        <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{value}</p>
      )}
      {children}
    </div>
  );
}
