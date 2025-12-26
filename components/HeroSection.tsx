import React from 'react';
import { BadgeHeader } from './BadgeHeader';

export const HeroSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-6 max-w-[94.5rem] mx-auto w-full">
        {/* Card Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white w-full">
            
            {/* Background Gradients - Contained within the card */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                {/* Main Aurora Blob - Adjusted to be more subtle and pink/white based on screenshot */}
                <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffeefc] via-[#fffbfd] to-white opacity-100" />
                
                {/* Secondary accent blob for that faint purple/pink glow */}
                <div className="absolute top-[20%] left-[20%] w-[50%] h-[80%] bg-[#fbeaff] opacity-60 blur-[100px] mix-blend-multiply" />
                <div className="absolute bottom-[20%] right-[20%] w-[50%] h-[80%] bg-[#ffeefc] opacity-60 blur-[100px] mix-blend-multiply" />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 py-24 md:py-32 px-6 text-center flex flex-col items-center">
                <div className="mb-6">
                    <BadgeHeader 
                    text="Launch your AI Agency" 
                    iconType="custom" 
                    customIconSrc="https://cdn.prod.website-files.com/63e15df811f9df22b231e58f/671b58421af041b86ef1c32d_works_eyebrow.svg" 
                    />
                </div>

                <h1 className="text-5xl md:text-[4.5rem] font-bold text-brand-dark tracking-[-2px] mb-6 leading-[1.1] max-w-5xl mx-auto">
                    Anyone can create a scalable<br className="hidden md:block" />
                    AI Agency with Voicerr.
                </h1>

                <p className="text-lg md:text-[1.25rem] text-brand-textSecondary max-w-3xl mb-10 leading-[1.6] font-medium">
                    Imagine the impact when you can package an<br className="hidden md:block" />
                    AI solution worth 20K+ USD in minutes.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center">
                    <button className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-brand-blueHover text-white border border-brand-blue rounded-full font-semibold transition-colors shadow-sm text-[0.95rem]">
                        Try it free
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};