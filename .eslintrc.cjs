// @ts-check

const ignorePatterns = [
  'dist',
  'coverage',
  'node_modules',
  '*.config.*',
];

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { project: true },
  plugins: ['@typescript-eslint', '@stylistic', '@tanstack/query'],
  ignorePatterns,

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',

    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',

    'plugin:@tanstack/eslint-plugin-query/recommended',

    'next/core-web-vitals',

    'prettier',
  ],

  rules: {
    'no-console': ['error', { allow: ['debug', 'warn', 'error'] }],
    'no-underscore-dangle': 'off',
    'no-void': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/no-array-index-key': 'off',
    'curly': ['error', 'all'],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'import/no-cycle': 'error',
    'jsx-a11y/label-has-associated-control': 'off', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/966
    'jsx-a11y/click-events-have-key-events': 'off', // false positive on dialog click
    'jsx-a11y/no-noninteractive-element-interactions': 'off', // false positive on dialog click
    '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: true }],

    'no-constant-binary-expression': 'error',
    'no-negated-condition': 'error',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'object-shorthand': 'error',
    'require-atomic-updates': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-empty-named-blocks': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      { allowNumberAndString: false, skipCompoundAssignments: false },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/no-shadow': 'off',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['case', 'default', 'block', 'block-like', 'multiline-block-like', 'interface', 'type'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['export'],
      },
      {
        blankLine: 'any',
        prev: ['function-overload', 'export'],
        next: ['function-overload', 'function', 'export'],
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['switch', 'while', 'try', 'return', 'if', 'interface', 'type', 'function'],
      },
    ],

    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
  },

  overrides: [
    {
      files: ['**/*.{js,cjs,mjs}'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    {
      files: ['*.config.*'],
      rules: { 'import/no-extraneous-dependencies': ['error', { devDependencies: true }] },
    },
    {
      files: ['**/server/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
      },
    },
  ],
};

module.exports = config;