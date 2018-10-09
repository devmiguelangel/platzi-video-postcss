module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 3 versions',
      stage: 3,
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
      },
    },
    /* autoprefixer: {
      grid: true,
    }, */
  },
};
