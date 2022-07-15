module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:cypress/recommended',
    'google',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:chai-friendly/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: 'off',
    'require-jsdoc': 'off',
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': 1,
  },
}