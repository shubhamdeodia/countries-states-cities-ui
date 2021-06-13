module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    rules: {
        'prettier/prettier': 'error',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 0,
        'import/prefer-default-export': 'off'
    }
};
