import { classedMerge } from '../lib/utils';

const BadgeStyled = classedMerge(
  'div',
  'inline-flex items-center justify-center rounded-lg text-center text-[10px] font-extrabold leading-none tracking-[-0.11px]',
  {
    variants: {
      variant: {
        default: 'bg-bizmong-blue-50 text-bizmong-blue-10 px-1.25 py-1',
        secondary: 'bg-cool-gray-10 text-cool-gray-70 px-2 py-1',
        outline:
          'border border-cool-gray-20 text-cool-gray-70 bg-white px-2 py-1',
        destructive: 'bg-red-50 text-white px-2 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type BadgeProps = React.ComponentProps<'div'> & {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
};

export const Badge = ({ variant, style, ...props }: BadgeProps) => {
  return (
    <BadgeStyled
      variant={variant}
      style={
        variant === 'default' || !variant
          ? {
              paddingTop: '4px',
              paddingBottom: '3px',
              ...style,
            }
          : style
      }
      {...props}
    />
  );
};

export type { BadgeProps };
