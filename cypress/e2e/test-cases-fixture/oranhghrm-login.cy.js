describe('Login Functionality', () => {

    /* it('should log in with valid credentials', () => {
         // Visit the specified URL
 
         cy.visit('https://opensource-demo.orangehrmlive.com/');
         cy.fixture('oranghrm-login').then((data) => {
             cy.get("input[placeholder='Username']").type(data.username)
             cy.get("input[placeholder='Password']").type(data.password)
             cy.get("button[type=submit]").click()
             cy.get('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module')
                 .should('have.text', data.expected)
         })
     })*/


    //Access through hook- for multiple it blocks
    let usernamedata;
    before(() => {
        cy.fixture('oranghrm-login').then((data) => {
            usernamedata = data;
        })
    })

    it('data-driven-testing', () => {
        // Visit the specified URL
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get("input[placeholder='Username']").type(usernamedata.username)
        cy.get("input[placeholder='Password']").type(usernamedata.password)
        cy.get("button[type=submit]").click()
        cy.get('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module')
            .should('have.text', usernamedata.expected)
    })

})