'use client';

import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className="bg-[#1C1B23] py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">

          <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-6">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-md transform scale-110"></div>
            <Image
              src="/images/face.png"
              alt="Shoaib Ahmed"
              fill
              className="object-cover rounded-full border-2 border-white/10"
              sizes="(max-width: 768px) 96px, 112px"
              priority
            />
          </div>


          <div className="mb-8">
            <h3 className="text-white text-lg font-medium mb-1">Shoaib Ahmed</h3>
            <p className="text-gray-400 text-sm tracking-wide">Full Stack Developer, BikeBliss</p>
          </div>


          <div className="relative">

          <div className="absolute -top-8 left-0 text-[#6366F1]/10 text-9xl font-serif">&ldquo;</div>
          <div className="absolute -bottom-8 right-0 text-[#6366F1]/10 text-9xl font-serif rotate-180">&rdquo;</div>
            <blockquote className="text-2xl md:text-4xl font-bold text-white leading-relaxed mb-6 px-4">
              Absolutely love my ThunderBolt! Smooth ride, sleek design, and unbeatable performance
            </blockquote>
          </div>
          
          <div className="mt-8">
            <span className="text-[#6366F1] font-medium text-lg">- Shoaib Ahmed</span>
          </div>
        </div>
      </div>
    </section>
  );
} 