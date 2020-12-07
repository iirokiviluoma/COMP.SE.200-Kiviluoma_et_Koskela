export default {
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: [
    'src/*.js'
  ],
  coverageReporters: ['lcov', 'text'],
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      'pageTitle': 'Test Report',
      'includeFailureMsg': true,
      'sort': 'titleAsc'
    }]
  ]
}
