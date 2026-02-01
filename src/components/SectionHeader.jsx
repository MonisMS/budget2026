export default function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : ''}`}>
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
