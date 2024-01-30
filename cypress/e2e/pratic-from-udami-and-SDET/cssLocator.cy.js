describe("its my second test", () => {

    it("csslocator", () => {
        cy.visit('http://www.automationpractice.pl/index.php')

        // cy.get("#search_query_top").type('T-Shirts')   // id   tag is optinal 

        // cy.get(".search_query").type('T-Shirts') // i am using the class instead of id
        // cy.get("[name=search_query]").type('T-Shirts') // i am uisng the attribte instead of id and class

        cy.get("input.search_query[name=search_query]").type('T-Shirts') // class and arrtibute combination also posssible 
        cy.get('[name="submit_search"]').click()
        cy.get('.lighter').contains("T-Shirts")       // Assertion
        // cy.get('#T-shirts option').first().should('have.text,TOP SELLERS')
    })
})