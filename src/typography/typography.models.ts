import { ElementType, HTMLAttributes } from 'react';
import { TypographyVariants } from '../theme/types';

export type TypographyAlign = 'center';
export type TypographyColors = 'primary' | 'secondary' | 'gray';

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  component?: ElementType;
  variant?: TypographyVariants;
  color?: TypographyColors;
  fontWeight?: number;
  align?: TypographyAlign;
};
