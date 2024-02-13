/// <reference types="cypress"/>
describe('web site menu', () => {
    // runs before every test block
    beforeEach(() => {
        cy.visit(Cypress.config("baseUrl"));
    });

    it("sub menu of the website", () => {
        cy.get("#menu-main-menu-1 > :nth-child(2)")
            .should("be.visible")
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

        cy.get("#menu-main-menu-1 > :nth-child(8)")
            .should("be.visible")

        /*    cy.get(".menu-main-menu-container ul[class='sub-menu row'] li > a> h3)")
                .should('have.text', 'News')
                .each($elem => {
                    expect($elem.text()).to.contains('News')
                })
                .should('have.text', 'News')  */

        cy.get(".clarkson-text").then((e) => {
            let text1 = e.text()
            cy.log(text1)
        })
    })

    it("more -----", () => {
        cy.get(".article-more").eq(0).should("be.visible")
            .click()
        cy.get("#section-landing >.container >.row > .col-sm-12.col-md-8.col-lg-9 > .row")
            .siblings().eq(2)
        cy.get(".article-image > a > img >: nth-child(1)").eq(0).should('include', 'My-Logo')

    })

    it("verify the text----", () => {
        cy.get(".dont-miss-wrapper").then((e1) => {
            let text2 = e1.text()
            cy.log(text2)
        })
        cy.get(".large-logo >a").title().then((e2) => {
            let text3 = e2.text()
            cy.log(text3)
        })
    })

    it("video page will appear and play the video-----", () => {
        cy.get("#menu-main-menu-1 >:nth-child(7)>a").click().should("be.visible")
        cy.get("#section-landing>.container").find(".article-image")
            .eq(2).find("a").find("img")
            .click({ force: true, timeout: 3000 })

        cy.get("div[class='vjs-poster']").click({ force: true })
        cy.scrollTo("left")

        cy.get(".social-shares>.share-icons >a")
            .should('be.visible')
            //for open in the same window because cypress not support the mutliple tabs or window 
            .invoke("removeAttr", "target")
            .eq(0)
            .click({ force: true })

        cy.get("#content")
            .then((textt) => {
                let value1 = textt.text()
                cy.log(value1)

            })

        //facebook login checking
        // Enter email and pass in inputs
        cy.get("input[name='email']").type("manikvbelure@gmail.com")
        cy.get("input[name='pass']").type("manike@12345")
            // '{enter}' submits the form
            .type("{enter}");
    })

})


