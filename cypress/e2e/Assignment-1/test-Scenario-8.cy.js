///<reference types="cypress"/>
describe('TLS search and enter text in input', () => {
    // Runs before every test block
    beforeEach(() => {
        try {
            cy.visit('https://www.the-tls.co.uk/');
        } catch (error) {
            cy.log("Error visiting the TLS website:", error);
        }
    });

    it('Assert the textbox and type "Mary Beard" to find related articles', () => {
        try {
            let value1;
            let value2;

            cy.get(".tls-header-navigation__search-icon").click().should('be.visible');
            cy.get(".ais-SearchBox-input[type='search']").clear().type('Mary Beard', { timeout: 5000 });

            cy.get('.tls-search-core__hits')
                .find('li')
                .then(($value) => {
                    value1 = $value.length;
                    cy.log('Number of articles before clicking "Show More":', value1);
                });

            cy.get('.tls-show-more>').eq(1).click();

            cy.get('.tls-search-core__hits')
                .find('li')
                .then(($value) => {
                    value2 = $value.length;
                    cy.log('Number of articles after clicking "Show More":', value2);
                });

            let sum = value1 + value2;

            // cy.get('.tls-article-label__category a[href="Twenty Questions"]').click({ force: true });

            // expect(sum).to.equal(40);
            // Alternatively, you can assert against a specific element with expected count
            cy.get('div.tls-search-page__wrapper > :nth-child(2)').should('have.length',40);

        } catch (error) {
            cy.log("Error in test Scenario-8:", error);
        }
    });
});
