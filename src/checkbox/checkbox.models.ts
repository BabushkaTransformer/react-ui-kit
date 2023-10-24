import { HTMLAttributes, InputHTMLAttributes, ReactElement } from 'react';

export type CheckboxProps = Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'onChange' | 'name' | 'defaultChecked' | 'disabled'> & {
    checkIcon?: ReactElement;
  };
