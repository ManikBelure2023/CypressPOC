
describe('myassertion', () => {

    it("Implicity assertion", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // cy.url().should("include",'orangehrmlive')
        // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('contain','orangehrm')

        //another way of writing the assertion
        // cy.url().should("include",'orangehrmlive')
        // .should("include",'orangehrmlive')
        // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('contain','orangehrm')

        // instead of should we can use (and)  assertion
        cy.url().should("include", 'orangehrmlive')
            .and('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            .and('contain', 'orangehrm')

        cy.title().should('include', "Orange")
            .and('eq', 'OrangeHRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') // log visibel
            .and('exist') // log exist

        cy.get("input[placeholder='Username']").type('manik')
        cy.get("input[placeholder='Username']").should('have.value', "manik") //value

        cy.get("input[placeholder='Password']").type('manik@112334')
        cy.get("input[placeholder='Password']").should('have.value', "manik@112334") //value

    })


    it("Explicit assertion", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").clear().type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type=submit]").click()
    })


})