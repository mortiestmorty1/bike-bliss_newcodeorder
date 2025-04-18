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
          
          <Link
            href="/bikes"
            className="inline-block bg-[#6366F1] text-white px-8 py-3 rounded-lg hover:bg-[#5558DA] transition-all duration-300 text-lg font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
