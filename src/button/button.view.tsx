import { createElement, forwardRef, ReactElement } from 'react';
import cn from 'classnames';
import { IButtonProps } from './button.models';
import { useButtonStyles } from './button.styles';

export const Button = forwardRef<ReactElement, IButtonProps>((props, ref) => {
  const {
    variant = 'contained',
    size = 'medium',
    className,
    disabled,
    startIcon,
    children,
    endIcon,
    component = 'button',
    fullWidth,
    type = 'button',
    onClick,
    loading,
    ...other
  } = props;

  const classes = useButtonStyles(props);

  const rootCN = cn(
    classes.root,
    classes[size],
    classes[variant],
    {
      [classes.disabled]: disabled || loading,
      [classes.fullWidth]: fullWidth,
    },
    className
  );

  return createElement(
    component,
    {
      ref,
      type,
      disabled,
      className: rootCN,
      onClick: disabled || loading ? undefined : onClick,
      ...other,
    },
    <>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      {children}
      {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
    </>
  );
});
