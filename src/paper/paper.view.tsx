import { createElement, FC, forwardRef, PropsWithRef } from 'react';
import cn from 'classnames';
import { PaperProps } from './paper.models';
import { usePaperStyles } from './paper.styles';

export const Paper: FC<PropsWithRef<PaperProps>> = forwardRef((paperProps, ref) => {
  const { className, component = 'div', variant, ...other } = paperProps;

  const classes = usePaperStyles();
  const rootCN = cn(classes.root, { [classes.outlined]: variant === 'outlined' }, className);

  return createElement(component, { className: rootCN, ...other, ref });
});
