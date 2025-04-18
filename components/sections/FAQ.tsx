'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of bikes do you offer?",
    answer: "We offer a premium selection of high-performance motorcycles, including our signature models: StreetRider, ThunderBolt, and TrailBlazer. Each bike is designed for specific riding styles and preferences."
  },
  {
    question: "How can I schedule a test ride?",
    answer: "You can schedule a test ride by visiting our showroom or booking an appointment through our contact page. Our team will help you choose the perfect bike and arrange a convenient time for your test ride."
  },
  {
    question: "What warranty coverage is included?",
    answer: "All our bikes come with a comprehensive warranty package that covers manufacturing defects and mechanical issues. Standard warranty is 2 years, with options to extend coverage for additional peace of mind."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing solutions through our trusted financial partners. Our team can help you explore various payment plans and find the best option for your budget."
  },
  {
    question: "What after-sales service do you provide?",
    answer: "We provide complete after-sales support including regular maintenance, emergency repairs, and genuine spare parts. Our certified technicians ensure your bike stays in perfect condition."
  }
];

function FAQItem({ question, answer }: FAQItem & { isOpen?: boolean; onClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-white font-medium">{question}</span>
        <span className={`text-[#6366F1] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#1C1B23] py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-400">
              Find answers to common questions about our bikes, services, and more.
            </p>
          </div>


          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>


          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-8">
              Support details to capture customers that might be on the fence.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#6366F1] text-white px-8 py-3 rounded-lg hover:bg-[#5558DA] transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 