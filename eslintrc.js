module.exports = {
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:jest/recommended',
      'prettier',
      'prettier/react',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', 'jest'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      'linebreak-style': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  };