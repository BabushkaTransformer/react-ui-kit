import React, { ButtonHTMLAttributes } from 'react';
import { IAppPaletteVariants } from '../theme/types';

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large' | 'none';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: IAppPaletteVariants;
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  component?: React.ElementType;
  fullWidth?: boolean;
  loading?: boolean;
}
