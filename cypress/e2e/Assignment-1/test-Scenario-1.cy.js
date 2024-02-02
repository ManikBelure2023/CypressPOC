  /// <reference types="cypress"/>
describe('UAT Driving Website', () => {
  // runs before every test block
  beforeEach(() => {
    try {
      cy.visit('https://www.uat-driving.co.uk/');
    } catch (error) {
      cy.log('Error visiting the website:');
    }
  });

  // Test Scenario 1
  it('should navigate to the News section and assert', () => {
    try {
      cy.get('.menu-main-menu-container > .nav-menu').eq(0).contains('News').click();
      cy.get('.sub-menu.row');
    } catch (error) {
      console.error('Error in Test Scenario 1:', error);
    }
  });

  // Test Scenario 2
  it.only("Subscribe to TIMES+ should exist", () => {
    try {
      cy.get("img[alt='Subscribe to The Times']");
    } catch (error) {
      cy.log('Error in Test Scenario 2:');
    }
  });

  // Test Scenario 3
  it("Scroll to the bottom of the page", () => {
    try {
      cy.get('.menu-main-menu-container > .nav-menu').contains('News').click();
      cy.scrollTo('bottom');
      cy.get('.hidden-xs > .col-md-12 > .pagination-wrapper > .pagination > .pagination-position')
        .contains('1-12 of 5433 articles')
        .should('be.visible');
      cy.get('.hidden-xs > .col-md-12 > .pagination-wrapper > .pagination > .current');
    } catch (error) {
      cy.log('Error in Test Scenario 3:');
    }
  });

  // Test Scenario 4
  it("Navigate through the pages", () => {
    try {
      cy.scrollTo('bottom');
      cy.contains('About us').should('be.visible');
      cy.url().should('include', 'https://www.uat-driving.co.uk/');

      cy.contains('Contact us').click();
      cy.url().should('include', 'https://www.uat-driving.co.uk/');

      cy.contains('Quick links').click();
      cy.url().should('include', 'https://www.uat-driving.co.uk/');
    } catch (error) {
      cy.log('Error in Test Scenario 4:');
    }
  });
});
