import { ButtonHTMLAttributes, ElementType, ReactElement } from 'react';
import { IAppPaletteVariants } from '../theme/types';

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large' | 'none';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: IAppPaletteVariants;
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  component?: ElementType;
  fullWidth?: boolean;
  loading?: boolean;
}
