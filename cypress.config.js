const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotsOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
