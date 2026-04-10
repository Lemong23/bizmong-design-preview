import React, { ComponentProps, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn, cv } from '../lib/utils';

const buttonBaseVariants = cv(
  'inline-flex items-center focus:outline-hidden cursor-pointer *:pointer-events-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        contained: '',
        outlined: '',
        tonal: '',
        glass:
          'bg-gradient-5 border border-opacity-black-5 backdrop-blur-[10px]',
        ghost: '',
        unset: '',
      },
      color: {
        primary: '',
        'cool-gray': '',
        orange: '',
        red: '',
        opacity: '',
      },
      height: {
        18: 'h-4.5 px-1.5 gap-0.5 rounded-sm text-[10px] leading-none',
        20: 'h-5 px-2 gap-1 rounded-lg text-xs leading-3',
        22: 'h-5.5 px-1.75 gap-1 rounded-lg text-xs leading-3',
        24: 'h-6 px-2 gap-1 rounded-sm text-xs leading-3.5',
        26: 'h-6.5 px-2.5 gap-1.5 rounded-sm text-xs leading-3.5',
        28: 'h-7 px-2.5 gap-1.5 rounded-xl text-sm leading-3.5',
        30: 'h-7.5 px-3 gap-1.5 rounded-xl text-sm leading-3.5',
        32: 'h-8 px-3 gap-1.5 rounded-xl text-sm leading-3.5',
        34: 'h-8.5 px-3.5 gap-1.5 rounded-[0.675rem] text-sm leading-4',
        36: 'h-9 px-3.5 gap-1.5 rounded-[0.675rem] text-sm leading-4',
        38: 'h-9.5 px-3.5 gap-1.5 rounded-[0.675rem] text-sm leading-4',
        40: 'h-10 px-4 gap-1.5 rounded-[0.675rem] leading-4',
        42: 'h-10.5 px-4 gap-1.5 rounded-[0.675rem] leading-4',
        44: 'h-11 px-4 gap-1.5 rounded-[0.75rem] leading-4',
        48: 'h-12 px-4.5 gap-1.5 rounded-[0.75rem] leading-4',
        50: 'h-12.5 px-4.5 gap-1.5 rounded-[0.75rem] text-lg leading-4.5',
        54: 'h-13.5 px-5 gap-1.5 rounded-xl text-lg leading-4.5',
        56: 'h-14 px-5 gap-1.5 rounded-xl text-lg leading-4.5',
        60: 'h-15 px-5 gap-1.5 rounded-xl text-lg leading-4.5',
      },
      fullWidth: {
        true: 'w-full',
        false: 'shrink-0',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
        stretch: 'justify-stretch',
        normal: 'justify-normal',
      },
      cursor: {
        pointer: 'cursor-pointer',
        default: 'cursor-default',
        none: 'cursor-none',
      },
      focus: {
        true: 'focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-bizmong-blue-50',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'primary',
        className:
          'bg-bizmong-blue-50 text-white border border-transparent disabled:bg-bizmong-blue-30 enabled:data-[hover]:hover:bg-bizmong-blue-45',
      },
      {
        variant: 'contained',
        color: 'cool-gray',
        className:
          'bg-cool-gray-80 text-white border border-transparent enabled:data-[hover]:hover:bg-cool-gray-70 disabled:bg-cool-gray-30',
      },
      {
        variant: 'contained',
        color: 'orange',
        className:
          'bg-orange-50 text-white border border-transparent enabled:data-[hover]:hover:bg-orange-40 disabled:bg-orange-30',
      },
      {
        variant: 'contained',
        color: 'red',
        className:
          'bg-red-55 text-white border border-transparent enabled:data-[hover]:hover:bg-red-50 disabled:bg-red-30',
      },
      {
        variant: 'tonal',
        color: 'primary',
        className:
          'bg-bizmong-blue-20 text-bizmong-blue-50 border border-transparent enabled:data-[hover]:hover:bg-bizmong-blue-20 enabled:data-[hover]:hover:text-bizmong-blue-45 disabled:bg-bizmong-blue-20 disabled:text-bizmong-blue-40',
      },
      {
        variant: 'tonal',
        color: 'cool-gray',
        className:
          'bg-cool-gray-10 text-cool-gray-70 border border-transparent enabled:data-[hover]:hover:bg-cool-gray-15 enabled:data-[hover]:hover:text-cool-gray-50 disabled:bg-cool-gray-10 disabled:text-cool-gray-40',
      },
      {
        variant: 'tonal',
        color: 'orange',
        className:
          'bg-orange-20 text-orange-50 border border-transparent enabled:data-[hover]:hover:bg-orange-20 enabled:data-[hover]:hover:text-orange-40 disabled:bg-orange-10 disabled:text-orange-30',
      },
      {
        variant: 'tonal',
        color: 'red',
        className:
          'bg-red-20 text-red-55 border border-transparent enabled:data-[hover]:hover:bg-red-20 enabled:data-[hover]:hover:text-red-40 disabled:bg-red-10 disabled:text-red-30',
      },
      {
        variant: 'tonal',
        color: 'opacity',
        className:
          'bg-opacity-black-5 text-opacity-black-60 border border-transparent enabled:data-[hover]:hover:bg-opacity-black-8 enabled:data-[hover]:hover:text-opacity-black-42 disabled:bg-opacity-black-5 disabled:text-opacity-black-20',
      },
      {
        variant: 'glass',
        color: 'primary',
        className:
          'text-bizmong-blue-50 enabled:data-[hover]:hover:text-bizmong-blue-45 disabled:text-bizmong-blue-30',
      },
      {
        variant: 'glass',
        color: 'cool-gray',
        className:
          'text-cool-gray-70 enabled:data-[hover]:hover:text-cool-gray-50 disabled:text-cool-gray-40',
      },
      {
        variant: 'glass',
        color: 'opacity',
        className:
          'text-opacity-black-60 enabled:data-[hover]:hover:text-opacity-black-42 disabled:text-opacity-black-20',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'bg-white border border-bizmong-blue-40 text-bizmong-blue-50 enabled:data-[hover]:hover:border-bizmong-blue-40 enabled:data-[hover]:hover:text-bizmong-blue-45 disabled:border-bizmong-blue-30 disabled:text-bizmong-blue-30',
      },
      {
        variant: 'outlined',
        color: 'cool-gray',
        className:
          'bg-white border border-cool-gray-20 text-cool-gray-70 enabled:data-[hover]:hover:border-cool-gray-20 enabled:data-[hover]:hover:text-cool-gray-55 disabled:border-cool-gray-15 disabled:text-cool-gray-40',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      color: 'primary',
      height: 40,
      justify: 'center',
      fullWidth: false,
      focus: true,
    },
  },
);

export type ButtonHeight =
  | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32
  | 34 | 36 | 38 | 40 | 42 | 44 | 48 | 50 | 54 | 56 | 60;

export type ButtonSize = 'xxs' | 'xs' | 'sm' | 'md' | 'xl';

const sizeToHeight: Record<ButtonSize, ButtonHeight> = {
  xxs: 26, xs: 36, sm: 42, md: 48, xl: 54,
};

export interface ButtonBaseProps extends Omit<ComponentProps<'button'>, 'color'> {
  render?: React.ReactElement | ((props: Record<string, unknown>) => React.ReactNode);
  variant?: 'contained' | 'outlined' | 'tonal' | 'glass' | 'ghost' | 'unset';
  color?: 'primary' | 'cool-gray' | 'orange' | 'red' | 'opacity';
  height?: ButtonHeight;
  size?: ButtonSize;
  fullWidth?: boolean;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'stretch' | 'normal';
  cursor?: 'pointer' | 'default' | 'none';
  disableHoverEffect?: boolean;
  focus?: boolean;
}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      variant, color, height, size, fullWidth, justify, cursor,
      disableHoverEffect, focus, className, render, type, ...props
    },
    ref,
  ) => {
    const resolvedHeight = height ?? (size ? sizeToHeight[size] : undefined);
    const resolvedType = render ? type : (type ?? 'button');

    const baseProps = {
      ref,
      type: resolvedType,
      className: cn(
        buttonBaseVariants({
          variant, color, height: resolvedHeight,
          fullWidth, justify, cursor, focus,
        }),
        className,
      ),
      'data-hover': disableHoverEffect ? undefined : '',
      ...props,
    };

    if (resolvedType === undefined) {
      delete baseProps.type;
    }

    if (render) {
      if (typeof render === 'function') {
        return render(baseProps as Record<string, unknown>) as React.ReactElement;
      }
      const { children: _children, ...slotProps } = baseProps;
      const renderIsEl = React.isValidElement(render);
      const renderProps = renderIsEl ? (render.props as { children?: React.ReactNode }) : {};

      return (
        <Slot {...slotProps}>
          {renderIsEl
            ? React.cloneElement(
                render, undefined,
                baseProps.children !== undefined ? baseProps.children : renderProps.children,
              )
            : render}
        </Slot>
      );
    }

    return <button {...baseProps} />;
  },
);
ButtonBase.displayName = 'ButtonBase';

export interface ButtonProps extends ButtonBaseProps {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, disabled, children, render, ...props }, ref) => {
    const content = loading ? (
      <>
        {children}
        <span className="loader-dots-2 ml-1.5" />
      </>
    ) : (
      children
    );

    return (
      <ButtonBase ref={ref} disabled={disabled || loading} render={render} {...props}>
        {content}
      </ButtonBase>
    );
  },
);
Button.displayName = 'Button';

export { buttonBaseVariants };
export default ButtonBase;
