import 'cypress-iframe'

///<reference types="cypress"/>
describe("its my iframe test", () => {
    it.only("apporch-1 ", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        //this steps to follow for while doing iframe document
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocumnet.body')
            .should('be.visible')
            .then(cy.wrap)
        iframe.clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click()

    })

    //by using custom commnads
    it("apporch-2 by using custom commnads", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        //getiframe(custom name) is custom created command and pass the locator
        cy.getifarme('#mce_0_ifr')
        .clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click()
        

    })

    it("apporch-3 by cypress-iframe plugin", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')  //Load the frame
        cy.iframe("#mce_0_ifr").clear().type('Welcome {ctrl+a}')
        cy.get("[aria-label='Bold']").click()
       
    })
})