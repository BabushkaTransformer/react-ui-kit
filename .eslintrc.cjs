module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true
    }],
    'import/order': ['error', {
      'newlines-between': 'never',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true
      },
      'pathGroups': [{
        'pattern': 'react*',
        'group': 'external',
        'position': 'before'
      }],
      'pathGroupsExcludedImportTypes': ['react'],
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type'
      ]
    }],
  },
}
