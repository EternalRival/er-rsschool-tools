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
  plugins: ['@stylistic/ts'],
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'curly': ['error', 'all'],

    'no-void': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'off',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreVoidOperator: true }],

    'complexity': ['error', 10],
    'max-depth': ['error', 4],
    'max-lines-per-function': ['error', { max: 40, skipBlankLines: true, skipComments: true }],
    'max-nested-callbacks': ['error', 4],
    'max-statements': ['error', 10],
    'no-constant-binary-expression': 'error',
    'no-implicit-coercion': 'error',
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
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
    '@stylistic/ts/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['case', 'default', 'block', 'block-like', 'multiline-block-like', 'interface', 'type', 'export'],
        next: '*',
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
  },
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
};

module.exports = config;
