import { useCallback, useRef, useState } from 'react';
import { SelectOption } from './select.models';
import { findIndexAfter, findIndexBefore } from './select.utils';

/**
 * Хук `useSelectPointer` предоставляет функциональность управления фокусировкой опций в выпадающем списке(через клавиатуру).
 * Используется в компоненте Select для управления фокусировкой и прокруткой списка опций.
 *
 * @param {SelectOption[]} options - Массив опций выпадающего списка.
 * @returns {{
 *   scrollBoxRef: React.MutableRefObject<HTMLDivElement | null>,
 *   resetFocusedOption: () => void,
 *   focusOptionByIndex: (index: number | undefined, scrollTo?: boolean) => void,
 *   scrollToElement: (index: number) => void,
 *   focusedOptionIndex: number,
 *   focusNextOption: () => void,
 *   focusPrevOption: () => void,
 * }}
 */
export const useSelectPointer = (options: SelectOption[]) => {
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
  const scrollBoxRef = useRef<HTMLDivElement>(null);

  const getDropdownViewport = useCallback(() => {
    return scrollBoxRef.current
      ? scrollBoxRef.current.getBoundingClientRect()
      : {
          height: 0,
          top: 0,
          bottom: 0,
        };
  }, []);

  const scrollToElement = useCallback(
    (index: number) => {
      const dropdown = scrollBoxRef.current;
      const item = dropdown ? (dropdown.children[index] as HTMLElement) : null;

      if (!item || !dropdown) {
        return;
      }

      const bounds = getDropdownViewport();
      const { top, bottom, height } = item.getBoundingClientRect();

      if (top < bounds.top) {
        dropdown.scrollTop = item.offsetTop;
      } else if (bottom > bounds.bottom) {
        dropdown.scrollTop = item.offsetTop - (bounds.height - height);
      }
    },
    [getDropdownViewport]
  );

  const focusOptionByIndex = useCallback(
    (index: number | undefined, scrollTo = true) => {
      if (index === undefined || index < 0 || index > (options.length ?? 0) - 1) {
        return;
      }
      const option = options[index];

      if (option?.disabled) {
        return;
      }

      if (scrollTo) {
        scrollToElement(index);
      }

      setFocusedOptionIndex((prev) => (prev !== index ? index : prev));
    },
    [options, scrollToElement]
  );

  const resetFocusedOption = useCallback(() => {
    setFocusedOptionIndex(-1);
  }, []);

  const focusNextOption = useCallback(() => {
    const nextIndex = findIndexAfter(options, focusedOptionIndex);
    const index = nextIndex === -1 ? findIndexAfter(options) : nextIndex;
    focusOptionByIndex(index);
  }, [focusOptionByIndex, focusedOptionIndex, options]);

  const focusPrevOption = useCallback(() => {
    const nextIndex = findIndexBefore(options, focusedOptionIndex);
    const index = nextIndex === -1 ? findIndexBefore(options) : nextIndex;
    focusOptionByIndex(index);
  }, [focusOptionByIndex, focusedOptionIndex, options]);

  return {
    scrollBoxRef,
    resetFocusedOption,
    focusOptionByIndex,
    scrollToElement,
    focusedOptionIndex,
    focusNextOption,
    focusPrevOption,
  };
};
