import { forwardRef } from 'react';
import cn from 'classnames';
import { IInputProps } from './input.models';
import { useInputStyles } from './input.styles';

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const {
    className,
    fullWidth,
    disabled,
    required,
    value,
    onChange,
    type,
    placeholder,
    startAdornment,
    endAdornment,
    inputProps = {},
    size = 'medium',
    min,
    max,
    ...rest
  } = props;

  const { className: inputClassName, ...inputPropsRest } = inputProps;

  const classes = useInputStyles(props);

  const rootCN = cn(className, classes.root, {
    [classes.disabled]: disabled,
  });

  const inputCN = cn(inputClassName, classes.input, classes[size], {
    [classes.fullWidth]: fullWidth,
    [classes.withStartAdornment]: !!startAdornment,
    [classes.withEndAdornment]: !!endAdornment,
  });

  return (
    <div className={rootCN} {...rest}>
      {startAdornment && <div className={classes.startAdornment}>{startAdornment}</div>}
      <input
        ref={ref}
        className={inputCN}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        {...inputPropsRest}
      />
      {endAdornment && <div className={classes.endAdornment}>{endAdornment}</div>}
    </div>
  );
});
