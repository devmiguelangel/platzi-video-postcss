module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
        'custom-media-queries': {},
        'color-functional-notation': {},
        'custom-selectors': {},
        'nesting-rules': {},
      },
    },
    /* autoprefixer: {
      grid: true,
    }, */
  },
};
