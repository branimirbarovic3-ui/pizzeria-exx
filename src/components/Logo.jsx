import React from 'react';
import { cn } from '../utils/cn';

export const EXLogo = ({ className, ...props }) => (
  <img 
    src="/assets/logo_no_bg.png" 
    alt="Pizzeria Ex Logo"
    className={cn("w-24 h-24 object-contain rounded-full shadow-2xl", className)}
    width={96}
    height={96}
    {...props}
  />
);

export default EXLogo;
