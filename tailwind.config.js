// Tailwind plugins
const { wordpressUtilities } = require('tailwindcss-wordpress');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './resources/views/**/*.php',
      './resources/assets/**/*.js',
    ],
    options: {
      whitelist: require('purgecss-with-wordpress').whitelist,
      whitelistPatterns: require('purgecss-with-wordpress').whitelistPatterns,
    },
  },
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
