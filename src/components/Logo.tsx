import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  // Map sizes to height and text size classes
  const sizeClasses = {
    sm: {
      container: 'h-6',
      text: 'text-lg sm:text-xl',
      rupee: 'text-xl sm:text-2xl',
    },
    md: {
      container: 'h-8',
      text: 'text-2xl sm:text-3xl',
      rupee: 'text-3xl sm:text-4xl',
    },
    lg: {
      container: 'h-10 sm:h-12',
      text: 'text-3xl sm:text-4xl',
      rupee: 'text-4xl sm:text-5xl',
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex items-center select-none font-black tracking-tight ${className} ${currentSize.container}`}>
      {/* "Bill" in bright Green */}
      <span className={`${currentSize.text} text-[#25D366] font-extrabold`}>
        Bill
      </span>
      
      {/* "₹eady" - Rupee Symbol replacement for 'R' */}
      <span className="inline-flex items-baseline text-white font-extrabold -ml-0.5">
        <span 
          className={`${currentSize.rupee} text-white font-bold leading-none align-baseline`}
          style={{ 
            fontFamily: '"Noto Sans", sans-serif',
            transform: 'translateY(1px)',
            display: 'inline-block'
          }}
        >
          ₹
        </span>
        <span className={`${currentSize.text} text-white -ml-0.5`}>
          eady
        </span>
      </span>
    </div>
  );
};

export default Logo;
