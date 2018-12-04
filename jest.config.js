module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.(spec|test).ts'],
  coveragePathIgnorePatterns: ['.*.d.ts'],
  moduleNameMapper: {
    '@react-hulks/(.+)$': '<rootDir>packages/$1/src'
  }
};
