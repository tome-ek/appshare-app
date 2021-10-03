const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      sm: "0.375rem",
      DEFAULT: "0.5rem",
      lg: "0.625rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.coolGray,
      green: colors.green,
      red: colors.rose,
      blue: colors.blue,
      yellow: colors.yellow,
      primary: colors.emerald,
    },
    fontSize: {
      xxs: "0.725rem",
      xs: "0.8rem",
      tiny: ".8375rem",
      sm: ".875rem",
      "sm+": ".925rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.8rem",
      "4xl": "2.2rem",
      "5xl": "2.6rem",
      "6xl": "3.2rem",
      "7xl": "3.8rem",
    },
    extend: {
      colors: {
        gray: {
          866: "#161E2C",
          850: "#18212F",
          833: "#1A2332",
          766: "#273140",
          750: "#2B3544",
          733: "#2F3948",
          650: "#414B5A",
          550: "#5B6472",
          450: "#848B98",
          350: "#B7BCC5",
          250: "#DBDEE3",
        },
        primary: {
          550: "#0BA875",
          450: "#22C68D",
          350: "#51DDA8",
        },
        red: {
          550: "#EB2E53",
          450: "#F85872",
          350: "#FC8B9A",
        },
        green: {
          450: "#36D26F",
        },
        blue: {
          450: "#4E94F8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
