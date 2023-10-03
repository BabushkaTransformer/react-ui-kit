import { IAppTheme } from './types';

declare global {
  namespace Jss {
    export interface Theme extends IAppTheme {}
  }
}
