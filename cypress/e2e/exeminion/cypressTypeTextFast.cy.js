describe('fast text', () => {
it('test', () => {
    cy.visit('https://automationexercise.com/contact_us')
     cy.get('#message')
     .type("If you have any suggestion areas or improvements, do let us know. We will definitely work on it")
});
it('test', () => {
    cy.visit('https://automationexercise.com/contact_us')
     cy.get('#message')
     .type("If you have any suggestion areas or improvements, do let us know. We will definitely work on it",{delay:0})
});
});