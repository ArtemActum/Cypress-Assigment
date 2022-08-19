const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  )

  // Make sure to return the config object as it might have been modified by the plugin.
  require('cypress-mochawesome-reporter/plugin')(on)
  return config
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: './reports/mocha',
    inlineAssets: true,
    embeddedScreenshots: true,
  },
  e2e: {
    baseUrl: 'https://staging.christies.com',
    defaultCommandTimeout: 15000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    blockHosts: ['static.srcspot.com'],
    specPattern: ['**/*.cy.{ts,tsx,js}', '**/*.feature'],
    supportFile: false,
    setupNodeEvents,
  },
})
