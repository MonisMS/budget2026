'use client';

import { useState } from 'react';

export function AccordionItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="glass rounded-2xl overflow-hidden transition-all duration-200 hover:bg-white/[0.02]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white text-base sm:text-lg pr-4">{question}</span>
        <span 
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'rotate-180 bg-orange-500/10' : ''
          }`}
        >
          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 pt-0 border-t border-white/5">
            <p className="text-gray-400 leading-relaxed pt-4">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-gray-500">No items available.</p>;
  }

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <AccordionItem key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
