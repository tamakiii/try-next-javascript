module.exports = {
  plugins: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
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
