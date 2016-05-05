/* globals blanket, module */

var options = {
  modulePrefix: 'ember-frost-pods',
  filter: '//.*ember-frost-pods/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    outputFile: 'coverage/lcov.info',
    renamer: function (fileName) {
      return fileName.replace('ember-frost-pods', 'addon') + '.js'
    }
  },
  reporters: ['lcov', 'json'],
  autostart: true
}

if (typeof exports === 'undefined') {
  blanket.options(options)
} else {
  module.exports = options
}
