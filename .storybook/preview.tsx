import type { Preview } from "@storybook/react";
import { ThemeProvider } from 'react-jss';
import { appTheme } from '../src/theme';

const preview: Preview = {
  decorators: [
    (storyFn) => (
      <ThemeProvider theme={appTheme}>{storyFn()}</ThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
