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
  ],
  plugins: [
    'react',
  ],
  rules: {
    'semi': [2, 'always'],
    'quotes': [2, 'single'],
    'object-curly-spacing': [2, 'always'],
    'no-useless-return': 2,
    'padded-blocks': [2, 'never'],
    'react/prefer-stateless-function': 2,
    // 'react/forbid-prop-types': 2,
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
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
};
