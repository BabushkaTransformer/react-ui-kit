import {
  ChangeEventHandler,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  KeyboardEvent,
} from 'react';
import cn from 'classnames';
import { Input } from '../input/input.view';
import { Popper } from '../popper';
import { Typography } from '../typography';
import { useEventListener } from '../utils/hooks/use-event-listener';
import { useSelectPointer } from './select.hooks';
import { SelectOption, SelectProps } from './select.models';
import { useSelectStyles } from './select.styles';
import {
  defaultFilterFn,
  defaultRenderOptionFn,
  filter,
  findDefaultValueOption,
  handleOptionDown,
} from './select.utils';

export const Select = <OptionInterfaceT extends SelectOption>(props: SelectProps<OptionInterfaceT>) => {
  const {
    name,
    className,
    popupDirection = 'bottom',
    style,
    onChange,
    children,
    onInputChange: onInputChangeProp,
    renderDropdown,
    onOpen,
    onClose,
    fetching,
    searchable = false,
    placeholder = 'Введите текст',
    renderOption: renderOptionProp = defaultRenderOptionFn,
    options: optionsProp = [] as OptionInterfaceT[],
    emptyText = 'Ничего не найдено',
    filterFn = defaultFilterFn,
    icon: iconProp,
    dropdownOffsetDistance = 8,
    fixDropdownWidth = true,
    value,
    defaultValue,
    ...restProps
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);
  const [options, setOptions] = useState(optionsProp);
  const [inputValue, setInputValue] = useState('');
  const [localValue, setLocalValue] = useState(
    () => value ?? findDefaultValueOption(optionsProp, defaultValue) ?? undefined
  );

  const styles = useSelectStyles();

  const { scrollBoxRef, focusOptionByIndex, focusNextOption, focusPrevOption, focusedOptionIndex, resetFocusedOption } =
    useSelectPointer(options);

  useEffect(() => {
    setLocalValue((prev) => value ?? prev);
  }, [value]);

  useEffect(() => {
    if (opened) {
      const index = options.findIndex((option) => option.value === localValue?.value);

      if (index !== -1) {
        focusOptionByIndex(index);
      }
    }
  }, [focusOptionByIndex, localValue, opened, options]);

  const open = () => {
    setOpened(true);

    if (typeof onOpen === 'function') {
      onOpen();
    }
  };

  const close = () => {
    resetFocusedOption();

    setInputValue('');
    setOpened(false);

    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const selectOption = (index: number) => {
    const item = options[index];

    setLocalValue(item);
    close();
  };

  const onSelectClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (scrollBoxRef.current?.contains(e.target as Node)) {
      e.preventDefault();
    }

    if (!opened) {
      open();
    }
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newOptions =
      typeof onInputChangeProp === 'function'
        ? onInputChangeProp(e, optionsProp)
        : filter(optionsProp, e.target.value, filterFn);

    setOptions(newOptions);
    setInputValue(e.target.value);
  };

  const handleOptionClick = (e: ReactMouseEvent<HTMLElement>) => {
    const index = Array.prototype.indexOf.call(e.currentTarget.parentNode?.children, e.currentTarget);
    const option = options[index];

    if (option && !option.disabled) {
      selectOption(index);
      close();
    }
  };

  const handleOptionHover = useCallback(
    (e: ReactMouseEvent<HTMLElement>) => {
      focusOptionByIndex(Array.prototype.indexOf.call(e.currentTarget.parentNode?.children, e.currentTarget), false);
    },
    [focusOptionByIndex]
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      opened &&
      !containerRef.current?.contains(event.target as Node) &&
      !scrollBoxRef.current?.contains(event.target as Node)
    ) {
      close();
    }
  };

  /**
   * Обработчик события нажатия клавиши клавиатуры.
   */
  const handleKeyDownSelect = (event: KeyboardEvent<HTMLDivElement>) => {
    const areOptionsShown = scrollBoxRef.current !== null;
    if (['ArrowUp', 'ArrowDown', 'Escape', 'Enter'].includes(event.key) && areOptionsShown) event.preventDefault();

    switch (event.key) {
      case 'ArrowUp':
        if (opened) {
          if (areOptionsShown) focusPrevOption();
        } else {
          open();
        }
        break;
      case 'ArrowDown':
        if (opened) {
          if (areOptionsShown) focusNextOption();
        } else {
          open();
        }
        break;
      case 'Escape':
        close();
        break;
      case 'Enter':
        if (opened) {
          if (areOptionsShown) selectOption(focusedOptionIndex);
        } else {
          open();
        }
        break;
      default:
        break;
    }
  };

  useEventListener('click', handleClickOutside, undefined, { capture: true });

  const rootCN = cn(styles.root, className);

  const renderOption = (option: OptionInterfaceT, index: number) => {
    const hover = index === focusedOptionIndex;
    const select = option.value === localValue?.value;

    return (
      <Fragment key={`${option.value}`}>
        {renderOptionProp({
          ...option,
          hovered: hover,
          children: option.label,
          selected: select,
          disabled: option.disabled,
          onClick: handleOptionClick,
          onMouseDown: handleOptionDown,
          onMouseOver: handleOptionHover,
        })}
      </Fragment>
    );
  };

  const resolvedContent = () => {
    const defaultDropdownContent = options?.length > 0 ? options.map(renderOption) : <div>{emptyText}</div>;

    if (typeof renderDropdown === 'function') {
      return renderDropdown({ defaultDropdownContent });
    }

    return defaultDropdownContent;
  };

  return (
    <div
      ref={containerRef}
      onClick={onSelectClick}
      onKeyDown={handleKeyDownSelect}
      className={rootCN}
      role="listbox"
      tabIndex={0}
      {...restProps}
    >
      {opened && searchable ? (
        <Input
          value={inputValue}
          placeholder={placeholder}
          inputProps={{ className: styles.input, autoFocus: true }}
          onChange={onInputChange}
        />
      ) : (
        <Typography aria-hidden className={styles.select}>
          {localValue?.label ?? 'Введите значение'}
        </Typography>
      )}

      {opened && (
        <Popper
          className={styles.menu}
          targetRef={containerRef}
          placement={popupDirection}
          ref={scrollBoxRef}
          onMouseLeave={resetFocusedOption}
          offsetDistance={dropdownOffsetDistance}
          sameWidth={fixDropdownWidth}
        >
          {resolvedContent()}
        </Popper>
      )}
    </div>
  );
};
