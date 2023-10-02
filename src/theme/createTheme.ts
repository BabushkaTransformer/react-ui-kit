import { IAppBreakpointKey, IAppTheme, IAppThemeOptions } from './types';

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>

const getNextBreakpoint = (opts: IAppThemeOptions, key: IAppBreakpointKey) => {
  const keys = getKeys(opts.breakpoints);

  const currentIndex = keys.indexOf(key);
  const nextKey = keys[currentIndex + 1] as IAppBreakpointKey | undefined;
  const nextValue = nextKey ? opts.breakpoints[nextKey] : null;

  return {
    key: nextKey,
    value: nextValue,
  }
}

export const createTheme = (opts: IAppThemeOptions): IAppTheme => ({
  ...opts,
  breakpoints: {
    down: (key): string => `@media screen and (max-width: ${opts.breakpoints[key]}px)`,
    up: (key): string => `@media screen and (min-width: ${opts.breakpoints[key]}px)`,
    between: (from, to): string => `@media screen and (min-width: ${opts.breakpoints[from]}px) and (max-width: ${opts.breakpoints[to]}px)`,
    only: (key): string => {
      const currentValue = opts.breakpoints[key];
      const { value } = getNextBreakpoint(opts, key);

      if (value === null) {
        return `@media screen and (min-width: ${currentValue}px)`;
      } else {
        return `@media screen and (min-width: ${currentValue}px) and (max-width: ${value - 1}px)`;
      }
    },
    not: (key): string => {
      const currentValue = opts.breakpoints[key];
      const { value } = getNextBreakpoint(opts, key);

      if (value === null) {
        return `@media screen and (max-width: ${currentValue - 1}px)`;
      } else {
        return `@media screen and (max-width: ${currentValue - 1}px), screen and (min-width: ${value}px)`;
      }
    },
    values: Object.values(opts.breakpoints).sort((a, b): number => (a > b ? 1 : -1)),
    keys: getKeys(opts.breakpoints),
    ...opts.breakpoints,
  },
  spacing: (value, second): string => {
    const first = `${opts.spacing * value}px`;

    if (typeof second === 'undefined') {
      return first;
    }

    return `${first} ${opts.spacing * second}px`;
  },
});