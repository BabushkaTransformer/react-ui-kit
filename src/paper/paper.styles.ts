import { createUseStyles } from 'react-jss';

export const usePaperStyles = createUseStyles(
  (theme) => ({
    root: {
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius * 2,
      overflow: 'hidden',
    },
    outlined: {
      border: '1px solid #E4E7F2',
      boxShadow: 'none',
    },
  }),
  { name: 'Paper' }
);
