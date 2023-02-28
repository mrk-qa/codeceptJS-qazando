exports.config = {
  output: './reports',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'D:/mrk-qa/codeceptjs-automation/app/qazando.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'CodeceptJS',
        platformVersion: '10'
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js',
    homePage: './pages/home_page.js'
  },
  mocha: {
    reporterOptions: {
      reportFilename: 'report-android',
      targetDir: './reports/allure-results',
      attachments: true,
      json: false,
    },
  },
  timeout: null,
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true,
      enable: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  name: 'codeceptjs-automation',
  tests: './test/*_test.js'
}