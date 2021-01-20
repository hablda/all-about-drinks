const breakpoints = {
  xs: '576px',
  s: '768px',
  m: '992px',
  l: '1200px',
};

const base = 8;

export const theme = {
  font: {
    headline: '"Bodoni Moda", serif',
    text: '"Raleway", Open Sans, sans-serif',
  },
  fontSize: {
    s: '1em',
    m: '1.5em',
    l: '2em',
    xl: '3em',
  },
  color: {
    primary: '#011B51',
    secondary: '#000512',
    white: '#FFF',
    light: '#F2F2F2',
    grey: '#444',
    dark: '#222',
  },
  breakpoint: {
    s: `(min-width: ${breakpoints.xs})`,
    m: `(min-width: ${breakpoints.s})`,
    l: `(min-width: ${breakpoints.m})`,
    xl: `(min-width: ${breakpoints.l})`,
  },
  spacing: {
    xs: `${base / 2}px `,
    s: `${base}px`,
    m: `${base * 1.5}px`,
    l: `${base * 2}px`,
    xl: `${base * 3}px`,
  },
};
