import { ChangeEvent, ReactNode, MouseEvent, HTMLAttributes, ReactElement } from 'react';

export type FilterFn<T> = (value: string, option: T, getOptionLabel?: (option: Partial<T>) => string) => boolean;

export type SelectOption = {
  value: string | number;
  label: ReactElement | string;
  disabled?: boolean;
  [index: string]: unknown;
};

export type SelectItemProps<T extends SelectOption> = HTMLAttributes<HTMLDivElement> & {
  selected?: boolean;
  hovered?: boolean;
  focused?: boolean;
  disabled?: boolean;
} & T;

export type SelectProps<OptionInterfaceT extends SelectOption> = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'defaultValue'
> & {
  name?: string;
  value?: OptionInterfaceT;
  defaultValue?: string | number;
  /**
   * Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск
   * производится по `option.label`.
   */
  searchable?: boolean;
  /**
   * Текст, который будет отображен, если приходит пустой `options`.
   */
  emptyText?: string;
  /**
   * > ⚠️ В **v6** из возвращаемых типов будет удалён `CustomSelectOptionInterface[]`. Для кастомной фильтрации используйте
   * > `filterFn`.
   */
  onInputChange?: (e: ChangeEvent, options: OptionInterfaceT[]) => OptionInterfaceT[];
  onChange?: (v: OptionInterfaceT) => void;
  options: OptionInterfaceT[];
  /**
   * Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.
   */
  filterFn?: false | FilterFn<OptionInterfaceT>;
  popupDirection?: 'top' | 'bottom';
  /**
   * Рендер-проп для кастомного рендера опции.
   * В объекте аргумента приходят [свойства опции](https://vkcom.github.io/VKUI/#/CustomSelectOption?id=props)
   *
   * > ⚠️  Важно: cвойство опции `disabled` должно выставляться только через проп `options`.
   * > Запрещается выставлять `disabled` проп опциям в обход `options`, иначе селект не будет знать об актуальном состоянии
   * опции.
   */
  renderOption?: (props: SelectItemProps<OptionInterfaceT>) => ReactNode;
  /**
   * Рендер-проп для кастомного рендера содержимого дропдауна.
   * В `defaultDropdownContent` содержится список опций в виде скроллящегося блока.
   */
  renderDropdown?: ({ defaultDropdownContent }: { defaultDropdownContent: ReactNode }) => ReactNode;
  /**
   * Если `true`, то в дропдауне вместо списка опций рисуется спиннер. При переданных `renderDropdown` и `fetching: true`
   * "победит" `renderDropdown`.
   */
  fetching?: boolean;
  onClose?: VoidFunction;
  onOpen?: VoidFunction;
  /**
   * Иконка раскрывающегося списка
   */
  icon?: ReactNode;
  /**
   * Если `true`, то справа будет отображаться кнопка для очистки значения
   */
  allowClearButton?: boolean;
  dropdownOffsetDistance?: number;
  fixDropdownWidth?: boolean;
};

export type MouseEventHandler = (event: MouseEvent<HTMLElement>) => void;
