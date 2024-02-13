/// <reference types="cypress"/>

describe('TLS website Search Test', () => {
  // runs before every test block
  beforeEach(() => {
    try {
      cy.visit('https://www.the-tls.co.uk/');
    } catch (error) {
      console.log('Error visiting the TLS website:');
    }
  });

  // Test Scenario 5
  it('should search for articles with the specified term', () => {
    
      cy.get(".tls-header-navigation__search-icon").click();
      cy.get(".ais-SearchBox-input[type='search']").invoke('val', '').then(() => {
        const textToType = 'A small like';

        // Use each to iterate over each character in the string
        cy.wrap(textToType.split('')).each((char) => {
          cy.get(".ais-SearchBox-input[type='search']").type(char, { delay: 1000 }); // Adjust delay as needed
        });
      });
  
  });

  // Test Scenario 6
  it("click the TLS logo", () => {
   
      let date1;
      let date2;

      cy.get('.tls-issue-details-medium__wrapper-content-title').then(($text1) => {
        date1 = $text1.text();
        cy.log("first-date:" + date1);
      });

      cy.get('a[href="https://www.the-tls.co.uk/issues/current-issue/"]').eq(2).click({force:true});

      cy.get('.tls-issue-date-line').then(($text2) => {
        date2 = $text2.text();
        cy.log("second-date:" + date2);
      });

      expect(date1).to.equal(date2);
    
  });
});
