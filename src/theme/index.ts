import { createTheme } from './createTheme';
import { IAppTheme, IAppThemeOptions } from './types';

const appThemeOptions: IAppThemeOptions = {
  palette: {
    mode: 'light',

    primary: {
      main: '#0071CE',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#3B4168',
      secondary: '#6f7c98',
      gray: '#909EBB',
    },
    success: {
      main: '#73D071',
      contrastText: '#ffffff',
    },
    error: {
      main: '#EB5757',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0071CE',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#F7B055',
      contrastText: '#ffffff',
    },
    divider: '#E4E7F2',
    action: {
      hover: '#F5FBFF',
      disabledOpacity: 0.4,
      selectedOpacity: 0.1,
      hoverOpacity: 0.05,
      disabledBackground: 'rgb(243 244 246/1)',
      disabled: 'rgb(209 213 219/ 1)',
    },
    background: {
      paper: '#ffffff',
      default: '#f5f6f8',
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans,sans-serif',
    fontFamilyIBM: 'IBM Plex Sans,sans-serif',
    fontFamilyMontserrat: 'Montserrat',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontWeightBolder: 700,

    h1: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    h2: {
      fontSize: '28px',
      lineHeight: '36px',
    },
    h3: {
      fontSize: '24px',
      lineHeight: '28px',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    h6: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '18px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '20px',
    },
    label: {
      color: '#909EBB',
      fontSize: '14px',
      lineHeight: '20px',
    },
    caption: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    button: {
      fontSize: '14px',
      lineHeight: '16px',
    },
    link: {},
  },
  spacing: 8,
  shape: { borderRadius: 4 },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    xxl: 1840,
  },
  transitions: {
    duration: {
      slow: '600ms',
      regular: '300ms',
      fast: '150ms',
    },
  },
  zIndex: {
    menu: 1000,
    dialog: 1001,
  },
  shadows: ['0px 4px 8px rgba(236, 237, 240, 0.5)'],
};
export const appTheme: IAppTheme = createTheme(appThemeOptions);