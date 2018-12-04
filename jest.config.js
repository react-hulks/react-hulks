module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['packages/**/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['.*.d.ts'],
  moduleNameMapper: {
    '@react-hulks/(.+)$': '<rootDir>packages/$1/src'
  },
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.ts'),
  testMatch: ['**/?(*.)+(spec|test).ts?(x)']
};
