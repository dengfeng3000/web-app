module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': 'off',
    'react/no-unused-prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'react/require-default-props': 'off',
    'no-console': 'off',
    'no-undef': 'off',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
};
