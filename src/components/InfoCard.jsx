export default function InfoCard({ label, value, children, className = '', hover = true }) {
  return (
    <div className={`glass rounded-2xl p-5 sm:p-6 ${hover ? 'hover-lift' : ''} ${className}`}>
      {label && (
        <p className="text-xs sm:text-sm text-gray-500 mb-1 uppercase tracking-wider">{label}</p>
      )}
      {value && (
        <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
      )}
      {children}
    </div>
  );
}
