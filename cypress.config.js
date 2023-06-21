const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '4wjg1m',
  scrollBehavior: 'center',
  video: false,
  trashAssetsBeforeRuns: false,
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 20000,
  taskTimeout: 300000,
  chromeWebSecurity: false,
  retries: 2,
  redirectionLimit: 50,
  env: {
    web_url: 'https://www.google.com/',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents (on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ['cypress/e2e/**/*.{feature,features}'],
    baseUrl: 'https://www.google.com/'
  }
})
