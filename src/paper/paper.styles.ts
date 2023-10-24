import { createUseStyles } from 'react-jss';
import { PaperProps } from './paper.models';

export const usePaperStyles = createUseStyles(
  (theme) => ({
    root: ({ elevation = 0 }: Pick<PaperProps, 'elevation'>) => ({
      boxShadow: theme.shadows[elevation],
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius * 2,
      overflow: 'hidden',
    }),
    outlined: {
      border: '1px solid #E4E7F2',
      boxShadow: 'none',
    },
  }),
  { name: 'Paper' }
);
