import { forwardRef } from 'react';
import { cn, cv } from '../lib/utils';

const inputVariants = cv(
  'border text-black border-cool-gray-20 rounded-[14px] max-w-full transition focus:border-cool-gray-55 focus:outline-hidden placeholder:text-cool-gray-35 leading-none read-only:bg-cool-gray-10 read-only:placeholder:text-cool-gray-45 read-only:border-cool-gray-20 read-only:cursor-default read-only:focus:border-cool-gray-20 read-only:focus:outline-hidden disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      status: {
        error: 'border-red-45',
        success: 'border-warm-gray-35 focus:border-warm-gray-55',
        warning: '',
        info: '',
      },
      size: {
        xxs: 'text-xs leading-3 h-6.5 py-1.5 px-2.5',
        xs: 'text-sm leading-4 h-9 py-3 px-2.5 w-22.5',
        sm: 'text-sm leading-4 h-10.5 py-3 px-3.5 w-37.5',
        md: 'h-12 leading-5 px-4 py-3.5 w-85',
        xl: 'text-lg leading-7 py-3.25 px-4.5 h-13.5 w-145.5',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      bg: {
        white: 'bg-white',
        transparent: 'bg-transparent',
        'cool-gray': 'bg-cool-gray-5 border-none',
      },
    },
    defaultVariants: {
      size: 'md',
      fullWidth: false,
      bg: 'transparent',
    },
  },
);

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  status?: 'error' | 'success' | 'warning' | 'info';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'xl';
  fullWidth?: boolean;
  bg?: 'white' | 'transparent' | 'cool-gray';
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ status, size, fullWidth, bg, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({ status, size, fullWidth, bg }),
          className,
        )}
        data-status={status || undefined}
        data-size={size || undefined}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { inputVariants };
