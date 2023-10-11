import { FC } from 'react';
import cn from 'classnames';
import { AccordionSummaryProps } from './accordion.models';
import { useAccordionStyles } from './accordion.styles';

export const AccordionSummary: FC<AccordionSummaryProps> = (props) => {
  const { className, children, label, startIcon, expandIcon, ...others } = props;

  const classes = useAccordionStyles();
  const rootCN = cn(classes.summary, classes);

  return (
    <summary className={rootCN} {...others}>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      {children || label}
      <div className={classes.endIcon}>{expandIcon || '⮟'}</div>
    </summary>
  );
};
