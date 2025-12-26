import React from 'react';
import { BadgeHeader } from './BadgeHeader';
import { ChipIcon, ChipVariant } from './ChipIcon';

interface Feature {
  id: string;
  variant: ChipVariant;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: '1',
    variant: 'soc2',
    title: 'SOC 2 Compliant',
    description: 'Regular testing and independent verification.',
  },
  {
    id: '2',
    variant: 'hipaa',
    title: 'HIPAA Compliant',
    description: 'Safeguards for Protected Health Information (PHI).',
  },
  {
    id: '3',
    variant: 'aes',
    title: 'AES-256 Encryption',
    description: 'Data is encrypted both in rest and transit.',
  },
  {
    id: '4',
    variant: 'gdpr',
    title: 'GDPR Compliant',
    description: 'Commitment to data privacy and protection.',
  },
];

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 max-w-[94.5rem] mx-auto px-6">
      <div className="mb-24">
        <BadgeHeader text="Security" />
        <h2 className="text-4xl md:text-[3.5rem] font-bold text-brand-dark tracking-[-1.5px] leading-[1.1] max-w-xl text-center md:text-left">
          Enterprise-grade security and compliance.
        </h2>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop only) */}
        {/* Placed absolutely, centered vertically relative to the 64px (4rem) height of icons. Center is 2rem (32px). */}
        <div className="hidden md:block absolute top-[2rem] left-0 w-full h-[1px] bg-gradient-to-r from-gray-200 via-gray-200 to-transparent -z-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center md:items-start text-center md:text-left group">
              {/* Icon Wrapper. The bg-[#fcfbf8] matches body bg to mask the line behind the icon itself if needed, 
                  but transparency is usually fine if the icon is solid. ChipIcon has white bg. 
                  We add a small wrapper to manage layout. */}
              <div className="mb-6 z-10">
                 <ChipIcon variant={feature.variant} />
              </div>
              
              <h3 className="text-lg font-bold text-brand-dark mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[0.93rem] text-brand-textSecondary leading-[1.6] max-w-[260px] font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};