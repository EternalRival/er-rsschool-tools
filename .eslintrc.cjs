const config = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'curly': ['error', 'all'],
    'no-void': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'off',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreVoidOperator: true }],
  },
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
};

module.exports = config;
