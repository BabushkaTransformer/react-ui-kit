import { ReactNode, MouseEvent, Children } from 'react';
import { SelectItem } from './select-item.view';
import { MouseEventHandler, SelectItemProps, SelectOption, SelectProps } from './select.models';

export const findIndexAfter = (options: SelectOption[] = [], startIndex = -1) => {
  if (startIndex >= options.length - 1) {
    return -1;
  }
  return options.findIndex((option, i) => i > startIndex && !option.disabled);
};

export const findIndexBefore = (options: SelectOption[] = [], endIndex: number = options.length) => {
  let result = -1;
  if (endIndex <= 0) {
    return result;
  }
  for (let i = endIndex - 1; i >= 0; i -= 1) {
    const option = options[i];

    if (!option.disabled) {
      result = i;
      break;
    }
  }
  return result;
};

export function defaultRenderOptionFn<T extends SelectOption>(props: SelectItemProps<T>): ReactNode {
  return <SelectItem {...props} />;
}

export const handleOptionDown: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
  e.preventDefault();
};

export function findSelectedIndex<T extends SelectOption>(options: T[] = [], selectValue?: T, withClear?: boolean) {
  let { value } = selectValue || {};

  if (withClear && value === '') {
    return -1;
  }
  return (
    options.findIndex((item) => {
      value = typeof item.value === 'number' ? Number(value) : value;
      return item.value === value;
    }) ?? -1
  );
}

export const filter = <T extends SelectOption>(
  options: SelectProps<T>['options'],
  inputValue: string,
  filterFn: SelectProps<T>['filterFn']
) => {
  return typeof filterFn === 'function' ? options.filter((option) => filterFn(inputValue, option)) : options;
};

type GetOptionLabel<T> = (option: Partial<T>) => string | undefined;

export function getTitleFromChildren(children: ReactNode): string {
  let label = '';

  Children.map(children, (child) => {
    if (typeof child === 'string') {
      label += ` ${child}`;
    }
  });

  return label.trim();
}

const getOptionLabelPriv: GetOptionLabel<SelectOption> = (option) => getTitleFromChildren(option.label);

const findAllIncludes = (target = '', search = '') => {
  const includes = [];

  let i = target.indexOf(search);
  while (i !== -1) {
    includes.push(i);
    i = target.indexOf(search, i + 1);
  }

  return includes;
};

let letterRegexp: RegExp;

export const defaultFilterFn = <T extends SelectOption>(
  query = '',
  option: T,
  getOptionLabel: GetOptionLabel<T> = getOptionLabelPriv
) => {
  query = query.toLocaleLowerCase();
  const label = getOptionLabel(option)?.toLocaleLowerCase();

  if (label?.startsWith(query)) {
    return true;
  }

  const includes = findAllIncludes(label, query);

  // Ищем вхождение перед началом которого не буква
  if (letterRegexp && label) {
    // eslint-disable-next-line no-restricted-syntax
    for (const index of includes) {
      if (!letterRegexp.test(label[index - 1])) {
        return true;
      }
    }
  } else {
    // если regexp не поддерживается, то ищем любое вхождение
    return includes.length > 0;
  }

  return false;
};

export const findDefaultValueOption = (options: SelectOption[], value?: string | number) =>
  options.find((option) => option.value === value);
