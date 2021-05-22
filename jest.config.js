module.exports = {
  moduleNameMapper: {
    '.+\\.svg?.+$': 'jest-transform-stub',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json', 'svg'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    // '.+\\.svg?.+$': 'jest-transform-stub',
    // '.+\\.(svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: ['<rootDir>/test/unit/setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/store/**/*.ts',
  ],
  preset: 'ts-jest/presets/js-with-babel',
  resolver: '<rootDir>/test/unit/resolver.ts',
  testPathIgnorePatterns: ['node_modules'],
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  moduleDirectories: ['node_modules'],
  clearMocks: true,
}
