// Describe block for the parent test
describe("parent test", () => {
    // It block for handling sibling in the parent column
    it("handling sibling in parent column", () => {

        // Visiting the specified URL
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") //parent window
        // Iterating over each td element in the second column of the table (td:nth-child(2))
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            // Extracting text from the current td element
            const text = $e1.text()
            // Checking if the text includes "Python"
            if (text.includes("Python")) {
                // Using eq(index) to target the same index in the next column (td:nth-child(2))
                cy.get("tr td:nth-child(2)").eq(index).next().then((price) => {
                    // Extracting text from the price element
                    const priceText = price.text()
                    // Comparing the extracted price text with the expected text '26'
                    expect(priceText).to.equal('26')
                })
            }
        })
    })
})
