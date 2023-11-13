import cn from 'classnames';
import { SelectItemProps, SelectOption } from './select.models';
import { useSelectItemStyles } from './select.styles';

export const SelectItem = <T extends SelectOption>(props: SelectItemProps<T>) => {
  const { className, label, hovered, selected, ...others } = props;

  const styles = useSelectItemStyles();

  const rootCN = cn(
    styles.root,
    {
      [styles.hovered]: hovered,
      [styles.selected]: selected,
    },
    className
  );

  return (
    <div className={rootCN} {...others}>
      {label}
    </div>
  );
};
