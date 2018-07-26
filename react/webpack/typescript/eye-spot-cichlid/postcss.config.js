module.exports = {
  plugins: {
    'postcss-nesting': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%']
    },
    'autoprefixer': {
      grid: true
    }
    /*
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-cssnext'),
    require('stylelint'),
    require('cssnano'),
    require('postcss-browser-reporter')
    */
  }
}
