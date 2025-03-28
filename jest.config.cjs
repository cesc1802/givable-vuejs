// jest.config.cjs
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    globals: {
        'ts-jest': {
            tsconfig: {
                module: 'commonjs'
            }
        }
    },
    moduleFileExtensions: ['js', 'ts', 'vue'],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@router/(.*)$': '<rootDir>/src/router/$1',
        '^@store/(.*)$': '<rootDir>/src/store/$1',
        '^@model/(.*)$': '<rootDir>/src/model/$1',
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    testMatch: ['**/__test__/**/*.spec.(js|ts)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
