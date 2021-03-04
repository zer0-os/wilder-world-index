const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["eurostile", ...defaultTheme.fontFamily.sans],
        special: ["nebularegular", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cybercity: "#026EA4",
        cave: "#A62D30",
        forest: "#9155E6",
        ["cybercity-text"]: "#67A8C8",
        ["cave-text"]: "#CA8183",
        ["forest-text"]: "#D3BBF5",
        ["wilder-purple"]: "rgb(141, 87, 224)"
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};