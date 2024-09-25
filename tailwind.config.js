const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        "custom-light": "#003145",
        "custom-dark": "#002A3B",
        "custom-green": "#44924C",
      },
    },
  },
  plugins: [],
};
