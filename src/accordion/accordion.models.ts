import { HTMLAttributes, ReactElement } from 'react';

export type AccordionSummaryProps = HTMLAttributes<HTMLDivElement> & {
  expanded?: boolean;
  selected?: boolean;
  label?: string;
  startIcon?: ReactElement;
  expandIcon?: ReactElement;
};
