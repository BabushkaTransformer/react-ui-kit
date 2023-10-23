import { SVGProps } from 'react';
import { IAppPaletteVariants } from '../theme/types';

export type SvgIconProps = SVGProps<SVGSVGElement> & {
  icon?: string;
  color?: IAppPaletteVariants;
  size?: 'small' | 'medium';
};
