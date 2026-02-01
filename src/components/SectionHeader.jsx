export default function SectionHeader({ title, subtitle, centered = false, serif = false, gradient = false }) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : ''}`}>
      <h1 
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          serif ? 'font-serif' : ''
        } ${
          gradient ? 'gradient-text-hero' : 'text-white'
        }`}
      >
        {title}
      </h1>
      {subtitle && (
        <p className={`text-base sm:text-lg text-gray-400 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
