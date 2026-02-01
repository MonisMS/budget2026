'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import faqsData from '@/data/faqs.json';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="text-gray-400 text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Common questions about the Union Budget 2026–27"
      />

      {faqsData.items && faqsData.items.length > 0 ? (
        <div className="space-y-3">
          {faqsData.items.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No FAQs available.</p>
      )}
    </div>
  );
}
