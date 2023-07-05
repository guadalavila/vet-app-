module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'prettier/prettier': [
                    'error',
                    {
                        singleQuote: true,
                        parser: 'flow',
                    },
                ],
                eqeqeq: 'error',
                'react-hooks/rules-of-hooks': 'warn',
                'react-hooks/exhaustive-deps': 'off',
                'no-alert': 'warn',
                'no-console': 'warn',
                'no-const-assign': 'error',
                'no-var': 'error',
                'prefer-const': 'error',
                'no-multi-spaces': 'error',
                'jsx-quotes': [2, 'prefer-single'],
                '@typescript-eslint/no-unused-vars': 'warn',
                'react/jsx-boolean-value': 'warn',
                'react-native/no-inline-styles': 'error',
                'react-native/no-unused-styles': 'error',
                'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
                'react/jsx-no-undef': 'error',
                'no-sparse-arrays': 'off',
                'react/jsx-pascal-case': [
                    'error',
                    {
                        allowAllCaps: true,
                        ignore: [],
                    },
                ],
                curly: 'off',
            },
        },
    ],
};
