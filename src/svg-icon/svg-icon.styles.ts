import { createUseStyles } from 'react-jss';
import { SvgIconProps } from './svg-icon.models';

export const useSvgIconStyles = createUseStyles(
  (theme) => ({
    root: ({ color }: SvgIconProps) => ({
      color: color ? theme.palette[color].main : 'inherit',
    }),

    small: {
      width: 16,
      height: 16,
    },
    medium: {
      width: 20,
      height: 20,
    },
  }),
  { name: 'SvgIcon' }
);
