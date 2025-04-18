import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1C1B23] flex items-center justify-center overflow-hidden pt-24">

      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1B23] via-[#1C1B23]/90 to-[#1C1B23]/80 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Ride with passion
            <br />
            Ride with us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Experience the thrill of the open road with our premium selection of bikes.
          </p>
          <Link
            href="/bikes"
            className="bg-[#6366F1] text-white px-8 py-3 rounded-lg hover:bg-[#5558DA] transition-all duration-300 text-lg font-medium"
          >
            Buy Now
          </Link>

          <div className="mt-12 relative w-full max-w-4xl">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-[100px] transform scale-95"></div>
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl"></div>
              
              <Image
                src="/images/ducati-bike.png"
                alt="Ducati Panigale V4"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C1B23] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
