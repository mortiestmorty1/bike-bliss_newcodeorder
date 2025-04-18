import BikeCard from '../ui/BikeCard';

const bikes = [
  {
    title: 'StreetRider',
    description: 'Embrace the perfect blend of style and performance. Conquer every journey with ease.',
    imageUrl: '/images/street-rider.png',
  },
  {
    title: 'ThunderBolt',
    description: 'Unleash the power within. Dominate the streets with unmatched agility and design.',
    imageUrl: '/images/thunder-bolt.png',
  },
  {
    title: 'TrailBlazer',
    description: 'Elevate your riding experience. Precision engineering meets unparalleled comfort and control.',
    imageUrl: '/images/trail-blazer.png',
  },
];

export default function Features() {
  return (
    <section className="bg-[#1C1B23] py-16 md:py-24">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#6366F1] text-sm uppercase tracking-wider font-medium mb-2 block">
            Main feature
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover The Perfect Ride
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the key features that make our bikes stand out from the crowd.
          </p>
        </div>


        <div className="space-y-8 md:space-y-0">
          {bikes.map((bike, index) => (
            <BikeCard
              key={bike.title}
              {...bike}
              align={index % 2 === 1 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
