const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth:1980,
    baseUrl: 'https://blazedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
