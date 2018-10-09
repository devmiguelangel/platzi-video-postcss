module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
        'custom-media-queries': {},
      },
    },
    /* autoprefixer: {
      grid: true,
    }, */
  },
};
