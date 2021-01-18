import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
