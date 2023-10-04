import { createUseStyles } from 'react-jss';
import { IButtonProps } from './button.models';

export const useButtonStyles = createUseStyles(
  (theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',

      transitionDuration: theme.transitions.duration.fast,
      borderRadius: theme.shape.borderRadius,
      margin: 0,
      border: '1px solid transparent',
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      appearance: 'none',
      outline: 'none',
      cursor: 'pointer',
      width: 'fit-content',
      ...theme.typography.button,
    },

    none: {
      padding: 0,
    },
    small: {
      padding: '4px 12px',
    },
    medium: {
      padding: '8px 16px',
    },
    large: {
      padding: '12px 24px',
      ...theme.typography.subtitle1,
    },

    text: (props: IButtonProps) => ({
      color: props.color ? theme.palette[props.color].main : theme.palette.primary.main,
      background: 'transparent',
    }),
    outlined: (props: IButtonProps) => ({
      color: props.color ? theme.palette[props.color].main : theme.palette.primary.main,
      borderColor: props.color ? theme.palette[props.color].main : theme.palette.primary.main,
      background: 'transparent',
      border: '1px solid',
    }),
    contained: (props: IButtonProps) => ({
      color: props.color ? theme.palette[props.color].contrastText : theme.palette.primary.contrastText,
      background: props.color ? theme.palette[props.color].main : theme.palette.primary.main,
    }),

    startIcon: {
      marginRight: 4,

      '& > svg': {
        width: 16,
        height: 16,
      },
    },
    endIcon: {
      marginLeft: 4,

      '& > svg': {
        width: 16,
        height: 16,
      },
    },

    fullWidth: {
      width: '100%',
    },

    disabled: () => ({
      backgroundColor: theme.palette.action.disabledBackground,
      borderColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
      pointerEvents: 'none',
      cursor: 'default',
    }),
  }),
  { name: 'Button' }
);
