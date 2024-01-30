//click on link using lables
//over writing existing contains() commands
//re-useable custom commnds 

describe('custom commands',()=>{
    it.only('handling links',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        //using custom commnads
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('div[class="product-name"] h1').should('have.text',"Apple MacBook Pro 13-inch")


    })
})