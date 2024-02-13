describe('Login Functionality', () => {
    it('screenshot and vedio', () => {
        // Visit the specified URL
        cy.visit('https://support.orangehrm.com/portal/en/signin')
        cy.screenshot("homepage")
        // Check the title with an increased timeout
        cy.title()
        cy.screenshot("logo")
   
    })
})