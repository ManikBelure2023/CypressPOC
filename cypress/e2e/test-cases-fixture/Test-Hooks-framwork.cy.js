describe('Hooks', () => {
    // beforeEach(() => {
    //     // runs once before all tests
    //     // Using cy.fixture to load data from the example.json file
     
    // });

    let data1;
    it('my test cases to shop the item', () => {
        // Accessing data from this.data in the it block
        cy.fixture('test-hooks').then((data) => {
         data1=data
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        // Use the correct variable names 'this.data.name' and 'this.data.gender'
        cy.get('input[name="name"]:nth-child(2)').type(data1.name);
        cy.get('select').select(data1.gender);
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',data1.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2') // validate the attribute
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click() 
        
    });
});
});