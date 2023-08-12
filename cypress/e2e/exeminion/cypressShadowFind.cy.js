import { slowCypressDown } from 'cypress-slow-down'
describe('Shadoq and Find', () => {
    before(() => {
 cy.on('uncaught:exception', (err, runnable) =>{return false})//when cyprees is run its dont show uncaught exception

    });

    it('shadow and find examble', () => {
        cy.visit('https://www.mercedes-benz.co.uk/passengercars.html')
cy.slowDown(3000)
        //Click to Agree to All button
        cy.get('[settings-id="fph8XBqir"]').shadow()
       .find('[data-test="handle-accept-all-button"]')
       .contains('Agree to all').click()
    });
});