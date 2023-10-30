import { createElement, forwardRef } from 'react';
import cn from 'classnames';
import { StackProps } from './stack.models';
import { useStackStyles } from './stack.styles';
import { joinChildren } from './stack.utils';

export const Stack = forwardRef<HTMLElement, StackProps>((exampleProps, ref) => {
  const {
    className,
    component = 'div',
    spacing,
    direction,
    divider,
    children,
    justifyContent,
    alignItems,
    ...other
  } = exampleProps;

  const classes = useStackStyles({ spacing, justifyContent, alignItems, direction });
  const rootCN = cn(classes.root, className);

  return createElement(
    component,
    {
      className: rootCN,
      ref,
      ...other,
    },
    divider ? joinChildren(children, divider) : children
  );
});
