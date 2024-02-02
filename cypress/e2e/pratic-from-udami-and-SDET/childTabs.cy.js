describe("application", () => {

   it("csslocator", () => {
      cy.visit('https://the-internet.herokuapp.com/windows')// parent window 
      cy.get('.example>a').invoke('removeAttr', 'target').click()// clicking on link
      cy.url().should('https://the-internet.herokuapp.com/windows')
      cy.wait(5000)
      //operations 
      cy.go('back')// back to parent window or tab

      // anthor way  for parent to child
      cy.get('.example>a').then((e) => {
         let url = e.prop('href');
         cy.visit(url)
      })
      cy.url().should('https://the-internet.herokuapp.com/windows')
      cy.wait(5000)
      //operations 
      cy.go('back')// back to parent window or tab

   })

   it("different types of dropsown", () => {
      //Check boxes
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('input[type="checkbox"]').check(['option2', 'option3'])

      //dynamic dropdown
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('#autocomplete').type('India')
      cy.get('.ui-menu-item div').each(($el, index, $list) => {

         if ($el === "India") {
            $el.click()
         }
      })
      cy.get('#autocomplete').should('have.value', 'India')
      
      //visibela nd not visible
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      //Radio button
      cy.get('[value="radio2"]').check().should('be.checked')

   })

})