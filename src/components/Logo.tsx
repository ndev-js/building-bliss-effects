
import React from 'react';
import { Shield, Droplets } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ className = '', size = 'md', showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg`}>
          <Shield className="h-2/3 w-2/3 text-black" />
        </div>
        {/* Water droplet accent */}
        <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1 shadow-md">
          <Droplets className="h-3 w-3 text-white" />
        </div>
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <div className={`${textSizeClasses[size]} font-bold text-gray-900 leading-none`}>
            <span className="text-yellow-600">Royal</span>
            <span className="text-gray-800">Grip</span>
            <span className="text-blue-600">Pro</span>
          </div>
          <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
            Waterproofing Solutions
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
