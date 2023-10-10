import { createUseStyles } from 'react-jss';
import { IInputProps } from './input.models';

const defaultBorderColor = '#E4E7F2';

export const useInputStyles = createUseStyles(
  (theme) => ({
    root: {
      position: 'relative',
    },

    input: {
      zIndex: 0,
      borderWidth: '1px',
      borderRadius: '0.25rem',
      borderStyle: 'solid',
      outline: '2px solid transparent',
      outlineOffset: '2px',
      lineHeight: '1rem',
      borderColor: (props: IInputProps) => (props.color ? theme.palette[props.color].main : defaultBorderColor),
      background: 'transparent',
      transition: 'border-color 0.2s',
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      ...theme.typography.caption,

      '&:focus-visible': {
        outlineColor: 'none',
        borderColor: 'rgb(49, 130, 206);',
        boxShadow: 'rgb(49, 130, 206) 0px 0px 0px 1px;',
      },
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

    fullWidth: {
      width: '100%',
    },

    withStartAdornment: {
      paddingLeft: 32 + 6,
    },
    withEndAdornment: {
      paddingRight: 32 + 6,
    },
    startAdornment: {
      pointerEvents: 'none',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 32,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 8,
      color: '#909EBB',

      '& svg': {
        width: 20,
        height: 20,
      },
    },
    endAdornment: {
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 32,
      display: 'flex',
      alignItems: 'center',
      paddingRight: 8,
      color: '#909EBB',

      '& svg': {
        width: 20,
        height: 20,
      },
    },

    disabled: () => ({
      '& input': {
        cursor: 'default',
        backgroundColor: theme.palette.action.disabledBackground,
        borderColor: theme.palette.action.disabledBackground,
        color: theme.palette.action.disabled,
      },

      '& $label': {
        color: theme.palette.action.disabled,
      },
      '& $helperText': {
        color: theme.palette.action.disabled,
      },
    }),
  }),
  { name: 'Input' }
);
