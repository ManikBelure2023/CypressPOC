describe("application", () => {

    it("csslocator", () => {
        cy.visit('https://demo.opencart.com/')
        
        console.log('after')
        cy.title().should('eq', 'Your Store') //home page

        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.get("div[id='content'] h2").should('have.text', 'Cameras') // camers page 

        cy.go('back')// go back to home page 
        cy.title().should('eq', 'Your Store') //home page

        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text', 'Cameras') // camers page 

        cy.go(-1)//go  For back home page 
        cy.title().should('eq', 'Your Store') //home page

        cy.go(1) //For forward 
        cy.get("div[id='content'] h2").should('have.text', 'Cameras') // camers page 

        cy.reload()// basically cypress reload the when back and forward functiojnare doing at the time 
    })
})