describe('Example to demonstrate the handling of Shadow Dom in Cypress', () => {
    before(() => {
        cy.visit('https://books-pwakit.appspot.com/')
    })

    // 1. Open https://books-pwakit.appspot.com/
    // 2. Traverse through the shadow DOM and reach the input box
    // 3. Write the keyword ‘Science’ and click to search
    // 4. Validate that the URL contains ‘explore?q=Science’
    it('Input a text in the input box and after search validate the URL', () => {
        cy.get('book-app') //1
            .shadow() //2
            .find('app-header') //3
            .find('.toolbar-bottom') //4
            .find('book-input-decorator') //5
            .find('#input') //6
            .type('Science')
            .click()
            .url('contains', 'explore?q=Science')
    })
})