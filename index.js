module.exports = {
  globals: {
    MyGlobal: true,
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'react',
    'flowtype',
  ],
  rules: {
    'semi': [2, 'always'],
    'quotes': [2, 'single'],
    'jsx-quotes': [2, 'prefer-double'],
    'object-curly-spacing': [2, 'always'],
    'no-useless-return': 2,
    'no-unused-vars': 2,
    'padded-blocks': [2, 'never'],
    'flowtype/semi': 2,
    // 'react/forbid-prop-types': 2,
    'react/prefer-stateless-function': [2, { 'ignorePureComponents': true }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'comma-spacing': ['error', { before: false, after: true }],
  },
  parserOptions: {
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
  },
};
