describe('Login Functionality', () => {
    it('should log in with valid credentials', () => {
        // Visit the specified URL
        cy.visit('https://support.orangehrm.com/portal/en/signin')
        // Check the title with an increased timeout
        cy.title().should('eq', 'OrangeHRM | Sign In', { timeout: 10000 })
    })

    it('should log in with in-valid credentials', () => {
        // Visit the specified URL
        cy.visit('https://support.orangehrm.com/portal/en/signin')
        // Check the title with an increased timeout
        cy.title().should('eq', 'OrangeHRM12333 | Sign In', { timeout: 10000 })
    })

})

