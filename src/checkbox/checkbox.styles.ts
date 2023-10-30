import { createUseStyles } from 'react-jss';

export const useCheckboxStyles = createUseStyles(
  (theme) => ({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'top',
      position: 'relative',
      cursor: 'pointer',

      '&:hover $preview': {
        border: `solid ${theme.palette.primary.main} 1px`,
      },
    },

    input: {
      opacity: 0,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      position: 'absolute',

      '&:checked ~ $preview': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        border: `solid ${theme.palette.primary.main} 1px`,
        '& > *': { opacity: 1 },
      },

      '&:disabled': {
        cursor: 'default',
        '&:hover ~ $preview': { border: `1px solid ${theme.palette.action.disabled}` },

        '& ~ $label': { color: theme.palette.action.disabled },
        '& ~ $preview': {
          background: theme.palette.action.disabledBackground,
          border: '1px solid #BDBDBD',
          '& > *': { color: theme.palette.action.disabled },
        },
      },
    },

    preview: {
      display: 'inline-block',
      boxSizing: 'border-box',
      position: 'relative',
      width: 16,
      height: 16,
      border: 'solid #E4E7F2 1px',
      borderRadius: 2,
      flexShrink: 0,

      '& > *': {
        opacity: 0,
        padding: 1,
        width: 12,
        height: 12,
      },
    },

    label: {
      marginInlineStart: '0.5rem',
      userSelect: 'none',
    },
  }),
  { name: 'Checkbox' }
);
