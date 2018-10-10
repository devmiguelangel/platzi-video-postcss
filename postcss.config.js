module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
        'custom-media-queries': {},
        'color-functional-notation': {},
      },
    },
    /* autoprefixer: {
      grid: true,
    }, */
  },
};
