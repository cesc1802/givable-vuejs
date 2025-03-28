import path from 'path';
import { fileURLToPath } from 'url';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import customPlugin from './eslint-plugin-custom/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  eslintConfigPrettier,
  {
    ignores: ['**/node_modules/**', '**/dist/**', 'jest.setup.ts', 'http.ts'],
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          ts: tsParser,
        },
        project: [path.join(__dirname, 'tsconfig.eslint.json')],
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
      import: eslintPluginImport,
      custom: customPlugin,
    },
    rules: {
      ...vuePlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-inferrable-types': [
        'error',
        { ignoreParameters: false, ignoreProperties: false },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
      ],
      'custom/require-on-handle-callbacks': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];
