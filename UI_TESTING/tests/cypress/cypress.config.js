const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    testIsolation: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
