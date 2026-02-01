import SectionHeader from '@/components/SectionHeader';
import Accordion from '@/components/Accordion';
import faqsData from '@/data/faqs.json';

export default function FAQPage() {
  return (
    <div>
      <SectionHeader
        title="Common Questions"
        subtitle="Frequently asked questions about the Union Budget 2026-27"
        centered
        serif
        gradient
      />

      <Accordion items={faqsData.items} />
    </div>
  );
}
