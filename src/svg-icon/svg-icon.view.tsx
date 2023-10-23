import { FC } from 'react';
import cn from 'classnames';
import { SvgIconProps } from './svg-icon.models';
import { useSvgIconStyles } from './svg-icon.styles';

export const SvgIcon: FC<SvgIconProps> = (props) => {
  const { children, color, className, size = 'small', ...other } = props;

  const classes = useSvgIconStyles({ color });
  const rootCN = cn(classes.root, classes[size], className);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={rootCN}
      {...other}
    >
      {children}
    </svg>
  );
};
