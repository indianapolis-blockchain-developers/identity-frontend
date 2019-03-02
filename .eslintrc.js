module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'vue/no-unused-components': 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
