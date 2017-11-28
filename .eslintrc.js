'use strict'

module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  }
}
