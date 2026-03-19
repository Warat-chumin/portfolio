import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("w-full py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {children}
      </div>
    </section>
  );
}
