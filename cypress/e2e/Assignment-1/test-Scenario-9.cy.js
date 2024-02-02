 /// <reference types="cypress"/>
 describe('UAT Driving Website', () => {
    // runs before every test block
    beforeEach(() => {
      try {
        cy.visit('https://www.the-tls.co.uk/');
      } catch (error) {
        cy.log('Error visiting the website:');
      }
    });
  
    // Test Scenario 1
    it('should navigate to the News section and assert', () => {
      try {
        cy.get('[data-index="1"]').should("be.visible")
        cy.get('.tls-link tls-link--variant-secondary tls-link--theme-default tls-link--size-medium false').and('have.attr','Explore')
        cy.get(".tls-card-horizontal-large__wrapper-link-img-as-background")

      }
      catch{
          // Handle the error if the try block fails
      cy.log('handle the error in the above code if any mistakes');
      }
      })
      })