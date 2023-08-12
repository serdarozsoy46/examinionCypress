const { faker } = require('@faker-js/faker')

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.person.firstName

describe('FakerJS', () => {
    xit('test', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()
    });
    it('test', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()
        cy.get("input[data-qa='login-email']").invoke('prop', "validationMessage")
        .should('eq', `Please include an '@' in the email adress. '${fakeName}' is missing an '@'.`)
    });

    it.only('examinion testing with fakerJS', () => {
        cy.visit('/')
        cy.get('.css-pv9vr9').type(fakeEmail)
        cy.get('.css-1jyh38l ').type(fakePassword)
        cy.get('[type=submit]').click()
    });
});