// Describe block for clicking pages like Facebook, Twitter, Instagram
describe("click the pages like Facebook, Twitter, Instagram", () => {

  // beforeEach block to visit the specified URL before each test
  // runs before every test block
  beforeEach(() => {
    try {
      cy.visit('https://www.the-tls.co.uk/')
    } catch {
      console.log('Error visiting the website:');
    }
  })

  // Test Scenario-7 - Clicking the Facebook icon at the top of the page
  it.only("top of the page social media icon-facebook", () => {
    try {
      // Selecting the Facebook icon and removing the target attribute to open in the same window
      cy.get('.tls-header-navigation__right-controls>:nth-child(1) a')
        //for open in the same window because cypress not support the mutliple tabs or window 
        .invoke("removeAttr", "target")
        .click();
    } catch {
      // Handle the error if the try block fails
      cy.log(`handle the error in the above code if any mistakes`);
    }

  })

  // Clicking the Twitter icon at the top of the page
  it("top of the page social media icon-twitter", () => {
    try {
      // Selecting the Twitter icon and removing the target attribute to open in the same window
      cy.get('.tls-header-navigation__right-controls>:nth-child(2) a')
        .should('be.visible')
        //for open in the same window because cypress not support the mutliple tabs or window 
        .invoke("removeAttr", "target")
        .click()
    } catch {
      // Handle the error if the try block fails
      cy.log(`handle the error in the above code if any mistakes`);
    }
  })

  // Clicking the Instagram icon at the top of the page
  it("top of the page social media icon-instagram", () => {
    try {
      // Selecting the Instagram icon and removing the target attribute to open in the same window
      cy.get('.tls-header-navigation__right-controls >:nth-child(3) a')
        .should('be.visible')
        //for open in the same window because cypress not support the mutliple tabs or window
        .invoke("removeAttr", "target")
        .click()
    } catch {
      // Handle the error if the try block fails
      cy.log(`handle the error in the above code if any mistakes`);
    }
  })

})
