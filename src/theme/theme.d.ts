import { IAppTheme } from './types.ts';

declare global {
  namespace Jss {
    export interface Theme extends IAppTheme {}
  }
}
