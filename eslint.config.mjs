import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          arrowParens: 'always',
          endOfLine: 'auto',
          trailingComma: 'all',
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];
