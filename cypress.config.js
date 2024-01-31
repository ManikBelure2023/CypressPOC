const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1280,
  viewportHeight:720,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //for this specpattern to run all the e2e test folder
     specPattern: 'cypress/e2e/*/*.js', 
    //for this indiviual test folder to execute
    //specPattern: 'cypress/e2e/Assignment-1/*.js',

    chromeWebSecurity: false,
    pageLoadTimeout: 150000,
    defaultCommandTimeout:80000,

  },
});


