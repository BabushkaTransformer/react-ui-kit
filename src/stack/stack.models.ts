import { CSSProperties, ElementType, HTMLAttributes, ReactElement } from 'react';

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  divider?: ReactElement;
  spacing?: number | string;
  component?: ElementType;
  direction?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
};
