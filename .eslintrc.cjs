module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'quote-props': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
    'react/no-children-prop': 0,
    'import/no-extraneous-dependencies': 0,
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 0,
    'space-infix-ops': 0,
    'react/jsx-no-constructed-context-values': 0,
  },
};
