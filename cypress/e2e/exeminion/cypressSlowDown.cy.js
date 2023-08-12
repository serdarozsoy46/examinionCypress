import { slowCypressDown } from 'cypress-slow-down'
const { faker } = require('@faker-js/faker')

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.name.firstName

//slowCypressDown() //if it's be like this make 1 second slow all test
//slowCypressDown(false)// if we want work in it.making slow down should be we put false and using
//cy.slowdown in it braket
describe('SlowDown', () => {
    it('test', () => {
        cy.slowDown(2000)//it's make slow-down 2 seconds
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.slowDownEnd()// it's finished slowdown
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
});