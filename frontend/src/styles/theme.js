const breakpoints = {
  xs: '576px',
  s: '768px',
  m: '992px',
  l: '1200px',
};

const base = 8;

export const theme = {
  fontSizes: {
    small: '1em',
    medium: '1.5em',
    large: '2em',
    xLarge: '3em',
  },
  colors: {
    primary: '#011B51',
    secondary: '#000512',
    white: '#FFF',
    light: '#F2F2F2',
    grey: '#444',
    dark: '#222',
  },
  breakpoints: {
    xs: `(min-width: ${breakpoints.xs})`,
    s: `(min-width: ${breakpoints.s})`,
    m: `(min-width: ${breakpoints.m})`,
    l: `(min-width: ${breakpoints.l})`,
  },
  spacings: {
    xs: `${base / 2}px `,
    s: `${base}px`,
    m: `${base * 1.5}px`,
    l: `${base * 2}px`,
    xl: `${base * 3}px`,
  },
};
