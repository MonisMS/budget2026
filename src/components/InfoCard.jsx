export default function InfoCard({ label, value, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      {label && (
        <p className="text-sm text-gray-500 mb-1">{label}</p>
      )}
      {value && (
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      )}
      {children}
    </div>
  );
}
