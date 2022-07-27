module.exports = {
  testEnvironment: 'node',
  testRegex: 'test/.*(unittest|mocktest|test|spec)\\.ts$',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ['./test/setup.js'],
  testMatch: null,
  preset: 'ts-jest',
};
