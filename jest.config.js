export default {
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: [
    'src/*.js'
  ],
  coverageReporters: ['lcov', 'text']
}
