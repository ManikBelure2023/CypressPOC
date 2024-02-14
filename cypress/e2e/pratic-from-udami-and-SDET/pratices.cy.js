// This is a reference directive for JavaScript, specifying the types to be used for Cypress.
/// <reference types="cypress"/>   

// Describe block starts the test suite with a description.
describe('web site menu', () => {
    // This hook runs before each test case.
    beforeEach(() => {
        // Visits the base URL configured in Cypress before each test.
        cy.visit(Cypress.config("baseUrl"));
    });

    // Test case to verify submenu items.
    it("sub menu of the website", () => {
        // Gets the second child of the main menu.
        cy.get("#menu-main-menu-1 > :nth-child(2)")
            // Assertion to ensure the element is visible.
            .should("be.visible")
            // Simulates a real hover event on the element with a timeout of 3000ms.
            .realHover({ timeout: 3000 })
        cy.get("#menu-main-menu-1 > :nth-child(3)")
            .should("be.visible")
            .realHover({ timeout: 3000 })
        cy.get("#menu-main-menu-1 > :nth-child(4)")
            .should("be.visible")
            .realHover({ timeout: 3000 })
        cy.get("#menu-main-menu-1 > :nth-child(5)")
            .should("be.visible")
            .realHover({ timeout: 3000 })
        cy.get("#menu-main-menu-1 > :nth-child(6)")
            .should("be.visible")
            .realHover({ timeout: 3000 })
        cy.get("#menu-main-menu-1 > :nth-child(7)")
            .should("be.visible")
            .realHover({ timeout: 3000 })
        // Gets the eighth child of the main menu.
        cy.get("#menu-main-menu-1 > :nth-child(8)")
            // Assertion to ensure the element is visible.
            .should("be.visible")
        // Gets the text within the .clarkson-text element.
        cy.get(".clarkson-text").then((e) => {
            // Retrieves the text content.
            let text1 = e.text()
            // Logs the text content to the Cypress console.
            cy.log(text1)
        })
    })

    // Test case to perform some action on elements with the class .article-more.
    it("more -----", () => {
        // Gets the first element with the class .article-more and ensures it is visible.
        cy.get(".article-more").eq(0)
            .should("be.visible")
            // Clicks on the element.
            .click()
        cy.get("#section-landing >.container >.row > .col-sm-12.col-md-8.col-lg-9 > .row")
            // Gets the second sibling of the specified element.
            .siblings().eq(2)
    })

    // Test case to verify text within the .dont-miss-wrapper element.
    it("verify the text----", () => {
        // Gets the .dont-miss-wrapper element.
        cy.get(".dont-miss-wrapper").then((e1) => {
            // Retrieves the text content.
            let text2 = e1.text()
            // Logs the text content to the Cypress console.
            cy.log(text2)
        })
    })

    // Test case to interact with the video page.
    it.only("video page will appear and play the video-----", () => {
        // Clicks on a specific menu item and verifies its visibility.
        cy.get("#menu-main-menu-1 >:nth-child(7)>a").click().should("be.visible")
        cy.get("#section-landing>.container")
            .find(".article-image")
            .eq(2)
            .find("a")
            .find("img")
            // Clicks on an image within the page, forcing the click even if it's not visible.
            .click({ force: true, timeout: 3000 })
        // Clicks on a specific element within the page, forcing the click event.
        cy.get("div[class='vjs-poster']")
            .click({ force: true })
        // Waits for 6000ms.
        cy.wait(6000)
    })
})
