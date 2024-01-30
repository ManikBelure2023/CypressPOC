// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress");

//code intelligence provided by TypeScript.
/// <reference types="cypress"/>

//uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
    // Your custom handling logic goes here
    console.error('Uncaught Exception:', err.message);
    // Optionally, you can throw the error to fail the test
    // throw err;
    // Alternatively, you can return false to prevent the error from failing the test
    return false;
  });


  // custom commnads for clicking the link using label
  Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click()
  })


// iframe custom commands
Cypress.Commands.add('getiframe', (iframe) => {
  return cy
    .get(iframe)
    .its('0.contentDocument.body', { timeout: 4000 })
    .should('be.visible')
    .then(cy.wrap);
});


 