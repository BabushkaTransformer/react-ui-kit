import { ReactElement } from 'react';
import { ThemeProvider } from 'react-jss';
import { render } from '@testing-library/react';
import { appTheme } from '../theme';

export const renderWithTheme = (component: ReactElement) => {
  return render(<ThemeProvider theme={appTheme}>{component}</ThemeProvider>);
};
