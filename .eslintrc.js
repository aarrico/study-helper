module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true, // Add this for React Native environment
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all', // Add this for React Native rules
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Use recommended TypeScript rules
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Must be last.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json', // Important: Path to your tsconfig.json
  },
  plugins: ['react', 'react-hooks', 'react-native', '@typescript-eslint'],
  rules: {
    // --- Custom rule overrides ---

    // Allow .js, .jsx, .ts, and .tsx extensions for files containing JSX
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    // Disable prop-types rule (we'll use TypeScript interfaces instead)
    'react/prop-types': 'off',

    // Allow import of .ts and .tsx files without specifying the extension
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Allow unused variables that start with an underscore (common for unused function arguments)
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],

    // Allow use of the 'any' type (but use it sparingly!)
    '@typescript-eslint/no-explicit-any': 'warn',

    // Allow implicit return types on functions (TypeScript can often infer them)
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Allow empty interfaces (sometimes useful as placeholders)
    '@typescript-eslint/no-empty-interface': 'off',

    // Disable the rule that requires consistent use of either function declarations or expressions.
    'func-style': 'off',

    //Disable no-use-before-define to allow for functions to defined after calls
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    //Allow inline styles (prefer using StyleSheet, but allow inline for quick prototyping)
    'react-native/no-inline-styles': 'warn',

    //Allow console.log, but warn about it
    'no-console': 'warn'

  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
    'import/resolver': {  // This section is crucial for TypeScript import resolution
        typescript: {
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        }
    }
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/'], // Ignore these directories
};