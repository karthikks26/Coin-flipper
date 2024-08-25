const colors = {
  primary: "#13f268",
  complementary: "#DCDCDC",
  error: "#bc1232",
  success: "#1ac925",
  light: "#F8F8F8",
  lighter: "#f5fbe7",
  lightest: "#ffffff",
  dark: "#262930",
  darker: "#1E1E1E",
  darkest: "#050414",
};

const sizes = {
  borderRadius: {
    m: "8px",
    l: "16px",
  },
  border: {
    m: "2px",
  },
};

const space = {
  s: 6,
  m: 12,
  l: 22,
  xl: 36,
};

const fonts = {
  body: "'Work Sans', sans-serif",
  heading: "'Montserrat', sans-serif",
  logo: "'Fredoka One', cursive",
};

const shared = {
  colors,
  sizes,
  fonts,
  space,
};

export const lightTheme = {
  ...shared,
  background: colors.light,
  text: colors.darker,
  buttonText: colors.lightest,
  cardBackground: colors.lightest,
};

export const darkTheme = {
  ...shared,
  background: colors.darker,
  text: colors.lighter,
  buttonText: colors.darker,
  cardBackground: colors.dark,
};
