import { createUseStyles } from 'react-jss';
import { ContainerMaxWidth } from './container.models';

export const useContainerStyles = createUseStyles(
  (theme) => ({
    root: {
      width: '100%',
      padding: '0 32px',
      margin: '0 auto',
      maxWidth: (props: { maxWidth: ContainerMaxWidth }): number | string =>
        props.maxWidth === 'none' ? '100%' : theme.breakpoints[props.maxWidth],

      [theme.breakpoints.down('lg')]: {
        padding: '0 16px',
      },
    },
    disableGutters: {
      padding: 0,
    },
  }),
  { name: 'Container' }
);
