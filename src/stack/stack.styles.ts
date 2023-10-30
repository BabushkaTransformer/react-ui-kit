import { createUseStyles } from 'react-jss';
import { StackProps } from './stack.models';

type StackCSSProps = Pick<StackProps, 'alignItems' | 'justifyContent' | 'spacing' | 'direction'>;

export const useStackStyles = createUseStyles(
  () => ({
    root: ({ direction = 'row', alignItems = 'stretch', justifyContent = 'flex-start', spacing }: StackCSSProps) => ({
      display: 'flex',
      alignItems,
      justifyContent,
      flexDirection: direction,
      gap: spacing,
    }),
  }),
  { name: 'Stack' }
);
