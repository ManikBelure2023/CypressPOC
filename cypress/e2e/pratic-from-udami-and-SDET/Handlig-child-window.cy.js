describe("its my second test", () => {
    it("csslocator", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") //parent wiondow
        cy.get('#opentab').invoke('removeAttr', 'target').click()  // for open in the same window because cypress not support the mutliple tabs or window 
        cy.origin('https://www.qaclickacademy.com/', () => //child window 
        {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get(".mt-50 h2").should('contain', 'Welcome to QAClick Academy')
        })

    })
})