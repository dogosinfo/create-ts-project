module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  // moduleNameMapper: {
  // }
  roots: [
    '<rootDir>/src',
    '<rootDir>/test'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  }
}
