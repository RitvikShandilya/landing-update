import React from 'react';

export type ChipVariant = 'soc2' | 'hipaa' | 'aes' | 'gdpr';

interface ChipIconProps {
  variant: ChipVariant;
}

export const ChipIcon: React.FC<ChipIconProps> = ({ variant }) => {
  const renderInnerContent = () => {
    switch (variant) {
      case 'soc2':
        return (
          <div className="w-full h-full bg-[#EFE9DC] rounded-[4px] flex items-center justify-center border border-[#DCD3C0] relative z-10">
            <span className="text-[10px] font-bold text-[#8A8170] tracking-wider">SOC 2</span>
          </div>
        );
      case 'hipaa':
        return (
          <div className="w-full h-full bg-[#F5D59A] rounded-[4px] flex items-center justify-center border border-[#EAC27D] relative z-10">
             <span className="text-[10px] font-bold text-[#9C7B43] tracking-wider">HIPAA</span>
          </div>
        );
      case 'aes':
        return (
          <div className="w-full h-full bg-[#FAE8A4] rounded-[4px] flex flex-col items-center justify-center border border-[#EBD584] p-[3px] gap-[1px] relative z-10">
             {/* Grid pattern for encryption */}
             {[...Array(5)].map((_, r) => (
                <div key={r} className="flex gap-[1px]">
                  {[...Array(6)].map((_, c) => (
                    <div key={c} className="w-[1.5px] h-[1.5px] bg-[#D4B964] rounded-full"></div>
                  ))}
                </div>
             ))}
          </div>
        );
      case 'gdpr':
        return (
          <div className="w-full h-full bg-[#D1E0F8] rounded-[4px] flex items-center justify-center border border-[#B3C8E8] relative z-10">
             <span className="text-[10px] font-bold text-[#5A7499] tracking-wider">GDPR</span>
          </div>
        );
    }
  };

  return (
    <div className="w-16 h-16 bg-white border border-gray-200/60 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative flex items-center justify-center p-3 overflow-hidden">
      {/* Internal Crosshair Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -translate-y-1/2"></div>
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-100 -translate-x-1/2"></div>

      {/* Corner screws */}
      <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-gray-100 rounded-full"></div>
      <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-gray-100 rounded-full"></div>
      <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-gray-100 rounded-full"></div>
      <div className="absolute bottom-1.5 right-1.5 w-1 h-1 bg-gray-100 rounded-full"></div>
      
      {/* Inner Chip */}
      <div className="w-10 h-10 relative z-10">
        {renderInnerContent()}
      </div>
    </div>
  );
};