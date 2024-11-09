import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import tseslintParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier/recommended'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { settings: { react: { version: 'detect' } } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      parser: tseslintParser,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        jsxPragma: null,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      react: pluginReact,
      eslint: pluginJs,
      'typescript-eslint': tseslint
    }
  },
  {
    rules: {
      'react-hooks/rules-of-hooks': 2,
      'react-hooks/exhaustive-deps': 1,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 2,
      'typescript-eslint/explicit-module-boundary-types': 0
    }
  },
  prettier
]
