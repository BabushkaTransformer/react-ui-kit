import { InputHTMLAttributes, ReactElement } from 'react';
import { IAppPaletteVariants } from '../theme/types';

export type InputSize = 'small' | 'medium' | 'large' | 'none';

export type IInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'> & {
  color?: IAppPaletteVariants;
  fullWidth?: boolean;
  startAdornment?: ReactElement;
  min?: number;
  max?: number;
  size?: InputSize;
  endAdornment?: ReactElement;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};
