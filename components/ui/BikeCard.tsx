'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

interface BikeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  align?: 'left' | 'right';
}

export default function BikeCard({ title, description, imageUrl, align = 'right' }: BikeCardProps) {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const contentOrder = align === 'left' ? 'order-1 md:order-2' : 'order-1';
  const imageOrder = align === 'left' ? 'order-2 md:order-1' : 'order-2';
  const imageTransform = align === 'left' ? 'scale-x-100' : 'scale-x-[-1]';

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-16 md:py-24">
        <div className={`w-full md:w-1/2 ${contentOrder}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <button
            onClick={() => setShowBuyModal(true)}
            className="inline-block bg-[#6366F1] text-white px-6 py-2 rounded-lg hover:bg-[#5558DA] transition-all duration-300"
          >
            Buy Now
          </button>
        </div>
        
        <div className={`w-full md:w-1/2 relative h-[300px] md:h-[400px] ${imageOrder}`}>
          <div className={`relative w-full h-full ${imageTransform}`}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={showBuyModal}
        onClose={() => setShowBuyModal(false)}
        title="Congratulations! 🎉"
      >
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-semibold text-white">
            Congratulations on Your New {title}!
          </h3>
          <p className="text-gray-300">
            Thank you for choosing Bike Bliss. Your journey to amazing adventures begins now!
          </p>
          <button
            onClick={() => setShowBuyModal(false)}
            className="bg-[#6366F1] text-white px-6 py-2 rounded-lg hover:bg-[#5558DA] transition-all duration-300"
          >
            Start Riding
          </button>
        </div>
      </Modal>
    </>
  );
} 