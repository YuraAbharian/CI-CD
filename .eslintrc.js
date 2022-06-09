module.exports = {
  extends: 'eslint:recommended',
  env: {
    jest: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
  },
  ignorePatterns: ['/functions/*'],
}
