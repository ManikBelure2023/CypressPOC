/// <reference types="cypress"/>
describe('web site menu', () => {
   
    beforeEach(() => {
        cy.visit(Cypress.config("userBaseUrl"));
    });

    it("website to see all the article", () => {
        cy.get(".tls-home-page__hero-banner-wrapper")
        cy.get("#background_exit_dc").should("be.visible")
        cy.get(".tls-input-field__box").type("manik@gmail.come").type("{enter}")
            })
    })