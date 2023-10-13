import { ElementType, HtmlHTMLAttributes } from 'react';
import { IAppBreakpointKey } from '../theme/types';

export type ContainerMaxWidth = IAppBreakpointKey | 'none';

export type ContainerProps = HtmlHTMLAttributes<HTMLDivElement> & {
  component?: ElementType;
  maxWidth?: ContainerMaxWidth;
  disableGutters?: boolean;
};
