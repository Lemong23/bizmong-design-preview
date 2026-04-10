import { type ClassValue, clsx } from 'clsx';
import { createTwc, cx, twc } from 'react-twc';
import { twMerge } from 'tailwind-merge';
import { createClassed, type VariantProps } from '@tw-classed/react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const twx = createTwc({ compose: cn });

const { classed } = createClassed({ merger: twMerge });
export { classed as classedMerge };

export { cx, twc };
export type { VariantProps };

// ── cv: lightweight class-variants function (CVA replacement) ─────────

type VariantRecord = Record<string, Record<string, string>>;

type Widen<T> = T extends 'true' | 'false'
  ? boolean | T
  : T extends `${number}`
    ? number | T
    : T;

type CVConfig<V extends VariantRecord> = {
  variants?: V;
  defaultVariants?: { [K in keyof V]?: Widen<keyof V[K]> };
  compoundVariants?: (Partial<{
    [K in keyof V]: Widen<keyof V[K]> | Array<Widen<keyof V[K]>>;
  }> & {
    className?: string;
    class?: string;
  })[];
};

type CVProps<V extends VariantRecord> = {
  [K in keyof V]?: Widen<keyof V[K]>;
} & { className?: string };

export function cv<V extends VariantRecord>(
  base: string | string[],
  config: CVConfig<V> = {},
) {
  const {
    variants = {} as V,
    defaultVariants = {},
    compoundVariants = [],
  } = config;

  return (props: CVProps<V> = {} as CVProps<V>): string => {
    const baseStr = Array.isArray(base) ? base.join(' ') : base;

    const variantClasses = Object.entries(variants).map(([key, values]) => {
      const value =
        (props as Record<string, unknown>)[key] ??
        (defaultVariants as Record<string, unknown>)[key];
      const strValue = value?.toString();
      return strValue
        ? ((values as Record<string, string>)[strValue] ?? '')
        : '';
    });

    const compoundClasses = compoundVariants
      .filter(({ className: _, class: __, ...conditions }) =>
        Object.entries(conditions).every(([key, value]) => {
          const propValue =
            (props as Record<string, unknown>)[key] ??
            (defaultVariants as Record<string, unknown>)[key];
          return Array.isArray(value)
            ? value.includes(propValue as never)
            : propValue === value;
        }),
      )
      .map((c) => c.className ?? c.class ?? '');

    return twMerge(
      baseStr,
      ...variantClasses,
      ...compoundClasses,
      props.className,
    );
  };
}
