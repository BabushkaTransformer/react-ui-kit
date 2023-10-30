import { HTMLAttributes, InputHTMLAttributes } from 'react';

export type RadioProps = Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> &
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'checked' | 'onChange' | 'name' | 'defaultChecked' | 'disabled' | 'value'
  >;
