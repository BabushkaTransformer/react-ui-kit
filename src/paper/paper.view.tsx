import { createElement, forwardRef } from 'react';
import cn from 'classnames';
import { PaperProps } from './paper.models';
import { usePaperStyles } from './paper.styles';

export const Paper = forwardRef<HTMLElement, PaperProps>((paperProps, ref) => {
  const { className, component = 'div', elevation, variant, ...other } = paperProps;

  const classes = usePaperStyles({ elevation });
  const rootCN = cn(classes.root, { [classes.outlined]: variant === 'outlined' }, className);

  return createElement(component, { className: rootCN, ...other, ref });
});
