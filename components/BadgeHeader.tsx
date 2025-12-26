import React from 'react';

interface BadgeHeaderProps {
  text: string;
  iconType?: 'square' | 'custom';
  customIconSrc?: string;
}

export const BadgeHeader: React.FC<BadgeHeaderProps> = ({ text, iconType = 'square', customIconSrc }) => {
  return (
    <div className="flex items-center gap-3 text-brand-textSecondary mb-6 justify-center md:justify-start">
      {iconType === 'custom' && customIconSrc ? (
        <div className="flex items-center justify-center shrink-0">
          <img src={customIconSrc} alt="" className="w-5 h-5" />
        </div>
      ) : (
        <div className="w-5 h-5 border border-gray-300 rounded-[4px] flex items-center justify-center shrink-0 bg-white">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>
      )}
      <span className="text-[15px] font-semibold tracking-normal text-brand-textSecondary">{text}</span>
    </div>
  );
};