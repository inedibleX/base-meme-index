import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import typescriptParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ),
  prettierPlugin,
  {
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/hook-use-state': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-sort-props': 'error',
      'react/jsx-wrap-multilines': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/no-array-index-key': 'warn',
      'react/no-unsafe': 'error',
      'react/prop-types': 'off',
      'react/forbid-prop-types': 'error',
      'react/no-string-refs': 'error',
      'react/self-closing-comp': 'error',
      'react/require-render-return': 'error',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/heading-has-content': 'off', // caused problems with shadcn components
      'no-duplicate-imports': ['error', { includeExports: true }],
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    ignores: ['generated/**/*', 'node_modules/**/*'],
  },
]

export default eslintConfig
