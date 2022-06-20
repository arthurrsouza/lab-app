'use strict'

module.exports = {
  ...require('prettier-config-standard'),
  printWidth: 150,
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
        parser: 'glimmer',
        endOfLine: 'auto'
      }
    }
  ]
}
