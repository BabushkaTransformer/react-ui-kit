import { createElement, forwardRef, ReactElement } from 'react';
import cn from 'classnames';
import { ContainerProps } from './container.models';
import { useContainerStyles } from './container.styles';

export const Container = forwardRef<ReactElement, ContainerProps>((paperProps, ref) => {
  const { className, children, maxWidth = 'lg', component = 'div', disableGutters, ...other } = paperProps;

  const classes = useContainerStyles({ maxWidth });
  const rootCN = cn(classes.root, { [classes.disableGutters]: disableGutters }, className);

  return createElement(
    component,
    {
      className: rootCN,
      ref,
      ...other,
    },
    children
  );
});
