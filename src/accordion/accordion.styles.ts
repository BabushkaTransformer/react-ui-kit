import { createUseStyles } from 'react-jss';

export const useAccordionStyles = createUseStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,

      '&[open] > $summary': {
        backgroundColor: 'rgb(224 242 254/1)',
      },
      '&[open] > $summary > $endIcon': {
        transform: 'rotate(180deg)',
      },
    },

    summary: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: theme.shape.borderRadius,

      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgb(224 242 254/1)',
      },
    },

    startIcon: {
      width: 20,
      height: 20,
      marginRight: 16,
    },
    endIcon: {
      color: 'rgb(156 163 175/1)',
      marginLeft: 'auto',
      transform: 'rotate(0deg)',
      transition: 'transform 0.3s',
    },
  }),
  { name: 'Accordion' }
);
