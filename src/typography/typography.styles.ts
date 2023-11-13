import { createUseStyles } from 'react-jss';
import { TypographyProps } from './typography.models';

export const useTypographyStyles = createUseStyles(
  (theme) => ({
    root: ({
      variant = 'body1',
      color = 'primary',
      fontWeight = theme.typography.fontWeightLight,
    }: TypographyProps) => ({
      fontWeight,
      margin: 0,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text[color],
      ...theme.typography[variant],
    }),

    alignCenter: {
      textAlign: 'center',
    },
  }),
  { name: 'Typography' }
);
