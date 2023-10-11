import { DetailsHTMLAttributes } from 'react';
import cn from 'classnames';
import { AccordionSummary } from './accordion-summary.view';
import { useAccordionStyles } from './accordion.styles';

export type AccordionProps = DetailsHTMLAttributes<HTMLDetailsElement>;

export const Accordion = (props: AccordionProps) => {
  const { className, ...others } = props;

  const classes = useAccordionStyles();
  const rootCN = cn(classes.root, className);

  return <details className={rootCN} {...others} />;
};

Accordion.Summary = AccordionSummary;
