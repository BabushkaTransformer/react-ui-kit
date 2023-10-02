import { CSSProperties } from 'react';

export type IAppPaletteVariant = {
  main: string;
  contrastText: string;
};

export type IAppPaletteVariants = 'primary' | 'success' | 'warning' | 'info' | 'error';

export type IAppPaletteActions = {
  hover: string;
  hoverOpacity: number;
  selectedOpacity: number;
  disabledOpacity: number;
  disabledBackground: string;
  disabled: string;
};

export type IAppPalette = {
  [k in IAppPaletteVariants]: IAppPaletteVariant;
} & {
  mode: 'light' | 'dark';
  action: IAppPaletteActions;
  divider: string;
  background: {
    paper: string;
    default: string;
  };
  text: {
    primary: string;
    secondary: string;
    gray: string;
  };
};

export type IAppBreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type IAppBreakpointsOptions = Record<IAppBreakpointKey, number>;

export type IAppBreakpoints = {
  down: (key: IAppBreakpointKey) => string;
  up: (key: IAppBreakpointKey) => string;
  between: (from: IAppBreakpointKey, to: IAppBreakpointKey) => string;
  only: (key: IAppBreakpointKey) => string;
  not: (key: IAppBreakpointKey) => string;
  values: number[];
  keys: string[];
} & IAppBreakpointsOptions;

export type TypographyVariants =
  | 'body1'
  | 'h2'
  | 'h1'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h6'
  | 'subtitle1'
  | 'label'
  | 'button'
  | 'caption'
  | 'inherit'
  | 'link';

export type IAppTypography = {
  fontFamily: string;
  fontSize: number;
  fontWeightLight: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  fontWeightBolder: number;
  fontFamilyIBM: string;
  fontFamilyMontserrat: string;
} & {
  [k in Exclude<TypographyVariants, 'inherit'>]: CSSProperties;
};

export type IAppTransitions = {
  duration: {
    slow: string;
    regular: string;
    fast: string;
  };
};

export type IAppShape = { borderRadius: number };

export type IAppZIndex = {
  menu: number;
  dialog: number;
};

export type IAppSpacingOptions = number;

export type IAppSpacing = (value: number, second?: number) => string;

export type IAppShadows = string[];

export type IAppTheme = {
  palette: IAppPalette;
  typography: IAppTypography;
  spacing: IAppSpacing;
  shape: IAppShape;
  breakpoints: IAppBreakpoints;
  transitions: IAppTransitions;
  zIndex: IAppZIndex;
  shadows: IAppShadows;
};

export type IAppThemeOptions = Omit<IAppTheme, 'breakpoints' | 'spacing'> & {
  breakpoints: IAppBreakpointsOptions;
  spacing: IAppSpacingOptions;
};