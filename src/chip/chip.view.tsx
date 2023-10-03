import { createElement, FC, forwardRef, ReactElement } from 'react';
import cn from 'classnames';
import { IChipProps } from './chip.models';
import { useChipStyles } from './chip.styles';

export const Chip: FC<IChipProps> = forwardRef<ReactElement, IChipProps>(
  (chipProps, ref) => {
    const {
      label,
      className,
      variant = 'filled',
      endIcon,
      startIcon,
      rounded,
      size,
      component = 'div',
      children,
      ...other
    } = chipProps;

    const classes = useChipStyles(chipProps);

    const rootCN = cn(
      classes.root,
      {
        [classes.small]: size === 'small',
        [classes.rounded]: rounded,
      },
      classes[variant],
      className
    );

    return createElement(
      component,
      {
        className: rootCN,
        ref,
        ...other,
      },
      <>
        {startIcon && <div className={classes.icon}>{startIcon}</div>}
        {children || label}
        {endIcon && <div className={classes.icon}>{endIcon}</div>}
      </>
    );
  }
);
