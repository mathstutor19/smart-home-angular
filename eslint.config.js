// eslint.config.js
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import unicorn from 'eslint-plugin-unicorn';

export default defineConfig([
  {
    files: ['**/*.ts'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    plugins: {
      unicorn, // ✅ modulni object sifatida yozish
    },
    processor: angular.processInlineTemplates,
    rules: {
      // TypeScript-friendly Unicorn rules
      'unicorn/no-for-loop': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/no-array-for-each': 'warn',
      'unicorn/no-keyword-prefix': 'off',

      // Angular rules
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
    },
  },

  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {},
  },

  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]);
