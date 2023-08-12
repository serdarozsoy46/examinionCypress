/// <reference types="cypress" />
const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
viewportHeight:700,
viewportWidth:1200,

  e2e: {
    baseUrl:"http://etop-ui.s3-website-eu-west-1.amazonaws.com/",
    defaultCommandTimeout:5000,
    chromeWebSecurity : false,
    reporter:'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      on('task', { removeDirectory })
    },
    env: {
      hideXhr: true,
      amazon:'https://www.amazon.co.uk/',
      google: 'https://www.google.com/',
      saucedemo:'https://www.saucedemo.com',
      talrise:'http://azure.talrise.com/',
      examinon:'http://etop-ui.s3-website-eu-west-1.amazonaws.com/'
    }

  },
 
 
});
