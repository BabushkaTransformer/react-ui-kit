import React from 'react';
import cn from 'classnames';
import { CheckboxCheckIcon } from '../icons/checkbox-check';
import { Typography } from '../typography';
import { CheckboxProps } from './checkbox.models';
import { useCheckboxStyles } from './checkbox.styles';

export const Checkbox: React.FC<CheckboxProps> = (radioProps) => {
  const {
    className,
    checked,
    onChange,
    name,
    defaultChecked,
    disabled,
    checkIcon = <CheckboxCheckIcon />,
    children,
    ...other
  } = radioProps;

  const classes = useCheckboxStyles();
  const rootCN = cn(classes.root, className);

  return (
    <label className={rootCN} {...other}>
      <input
        name={name}
        type="checkbox"
        className={classes.input}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={classes.preview}>{checkIcon}</span>
      {children && (
        <Typography className={classes.label} variant="subtitle1" component="span">
          {children}
        </Typography>
      )}
    </label>
  );
};
