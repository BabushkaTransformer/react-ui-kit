import { ElementType, HTMLAttributes, PropsWithRef } from 'react';

export type PaperProps = PropsWithRef<HTMLAttributes<HTMLDivElement>> & {
  component?: ElementType;
  variant?: 'outlined';
};
