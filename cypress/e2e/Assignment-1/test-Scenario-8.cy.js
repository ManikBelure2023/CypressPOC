///<reference types="cypress"/>
describe('Tls search and enter text in input', () => {
    // runs before every test block
    beforeEach(() => {
        try {
            cy.visit('https://www.the-tls.co.uk/')
        } catch {
            cy.log("Error visiting the TLS website:")
        }
    })

    it('assert the textbox and type Mary Beard to find related articles', () => {
        try {
            let value1;
            let value2;
            cy.get(".tls-header-navigation__search-icon").click().should('be.visible')
            cy.get(".ais-SearchBox-input[type='search']").clear().type('Mary Beard', {timeout: 3000})
            cy.get('.tls-search-core__hits')
                .find('li')
                .then(($value) => {
                    value1 = $value.length
                    cy.log('Number of article', value1)
                })

            cy.get('.tls-show-more>').eq(1).click()
            cy.get('.tls-search-core__hits')
                .find('li')
                .then(($value) => {
                    value2 = $value.length
                    cy.log('Number of article', value2)
                })
            let sum = value1 + value2;
            
            // cy.get('.tls-article-label__category a[href="Twenty Questions"]').click({ force: true })
            // expect(sum).to.equal(40)
            cy.get('div.tls-search-page__wrapper > :nth-child(2)').should('have.value',40)
            
        } catch { 
            cy.log("error in test Scenario-8:")
        }
    })
})





