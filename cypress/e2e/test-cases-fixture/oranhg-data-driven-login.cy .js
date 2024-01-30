describe('Login Functionality', () => {

    it('should log in with valid credentials', () => {

        cy.fixture('oranghrm-2-login').then((data) => {
            // Visit the specified URL
            data.forEach((userdata) => {

                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type=submit]").click()
                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    cy.get('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module')
                        .should('have.text', userdata.expected)
                }
                else {
                    cy.get('.oxd-text oxd-text--p oxd-alert-content-text')
                        .should('have.text', userdata.expected)
                }
            });
        })

    })

})