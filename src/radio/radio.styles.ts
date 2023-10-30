import { createUseStyles } from 'react-jss';

export const useRadioStyles = createUseStyles(
  (theme) => ({
    root: {
      boxSizing: 'border-box',
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
        border: `solid ${theme.palette.primary.main} 1px`,
        '& > div': { opacity: 1 },
      },

      '&:disabled': {
        cursor: 'default',
        '&:hover ~ $preview': { border: `1px solid ${theme.palette.action.disabled}` },

        '& ~ $label': { color: theme.palette.action.disabled },
        '& ~ $preview': {
          background: theme.palette.action.disabledBackground,
          border: '1px solid #BDBDBD',
          '& > div': { background: theme.palette.action.disabled },
        },
      },
    },

    preview: {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
      border: 'solid #E4E7F2 1px',
      borderRadius: '100%',
      padding: 1,
      flexShrink: 0,
      '& > div': {
        opacity: 0,
        borderRadius: '100%',
        width: 12,
        height: 12,
        background: theme.palette.primary.main,
      },
    },

    label: {
      marginInlineStart: '0.5rem',
      userSelect: 'none',
    },
  }),
  { name: 'Radio' }
);
