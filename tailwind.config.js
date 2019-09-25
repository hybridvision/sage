// Tailwind plugins
const { wordpressUtilities } = require('tailwindcss-wordpress');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#525ddc',
      },
    },
  },
  variants: {},
  plugins: [
    wordpressUtilities,
  ],
  corePlugins: {
    container: false,
  },
};
