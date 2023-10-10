import { createElement, FC } from 'react';
import cn from 'classnames';
import { TypographyProps } from './typography.models';
import { useTypographyStyles } from './typography.styles';

export const Typography: FC<TypographyProps> = (props) => {
  const { className, component, variant = 'body1', fontWeight, align, ...other } = props;

  const classes = useTypographyStyles(props);
  const rootCN = cn(
    classes.root,
    {
      [classes.alignCenter]: align === 'center',
    },
    className
  );

  const linkProps = variant === 'link' ? { rel: 'noreferrer', target: '_blank' } : {};
  const overrideComponent = component || (variant === 'link' ? 'a' : 'p');

  return createElement(overrideComponent, { className: rootCN, ...linkProps, ...other });
};
