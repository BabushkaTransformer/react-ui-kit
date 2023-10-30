import { FC } from 'react';
import cn from 'classnames';
import { Typography } from '../typography';
import { RadioProps } from './radio.models';
import { useRadioStyles } from './radio.styles';

export const Radio: FC<RadioProps> = (radioProps) => {
  const { className, checked, onChange, name, defaultChecked, disabled, value, children, ...other } = radioProps;

  const classes = useRadioStyles();
  const rootCN = cn(classes.root, className);

  return (
    <label className={rootCN} {...other}>
      <input
        name={name}
        type="radio"
        className={classes.input}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <div className={classes.preview}>
        <div />
      </div>
      {children && (
        <Typography className={classes.label} variant="subtitle1" component="span">
          {children}
        </Typography>
      )}
    </label>
  );
};
