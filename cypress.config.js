const { defineConfig } = require('cypress')
// const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.christies.com/',
    defaultCommandTimeout: 15000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,ts,tsx}'],
    blockHosts: ['static.srcspot.com'],
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // on('file:preprocessor', cucumber())
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
