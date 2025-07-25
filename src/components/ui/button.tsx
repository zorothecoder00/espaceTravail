// src/components/ui/button.tsx
import { cn } from '@/lib/utils'; // Pour la gestion des classes dynamiques avec tailwind-merge
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'destructive' | 'outline'| 'ghost';
};

export const Button = ({ className, variant = 'default', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2',
        variant === 'destructive' && 'bg-red-500 text-white hover:bg-red-600',
        variant === 'outline' && 'border border-gray-300 text-gray-700 hover:bg-gray-200',
        variant === 'default' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'ghost' && 'bg-transparent hover:bg-gray-100 text-gray-800',
        className
      )}
      {...props}
    />
  );
};
