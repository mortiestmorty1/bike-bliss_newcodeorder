'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1B23] via-[#2B1B54] to-[#1C1B23]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Explore our collection and find the perfect bike for you.
          </h2>
          
          <div className="mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
