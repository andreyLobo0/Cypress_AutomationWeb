const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://backoffice.dev.cartos.solutions"
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 30000
});
