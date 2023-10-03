import {
  HTMLAttributes, ReactElement, ReactNode, ElementType,
} from 'react';
import { IAppPaletteVariants } from '../theme/types';

export type ChipVariant = 'filled' | 'outlined';

export interface IChipProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  color?: IAppPaletteVariants;
  variant?: ChipVariant;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  rounded?: boolean;
  size?: 'small';
  component?: ElementType;
}
