module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-font-magician': {
      variants: {
        Lato: {
          300: ['woff'],
          400: [],
        },
      },
    },
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
    'css-mqpacker': {
      sort: true,
    },
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
    /* autoprefixer: {
      grid: true,
    }, */
  },
};
