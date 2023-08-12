
describe('Cypress download File', () => {
    before(() => {
        cy.deleteDownloadsFolder()
    });
    it('Download File', () => {
        cy.on('uncaught:exception', (err, runnable) =>{return false})
        cy.visit('https://demoqa.com/upload-download')

        cy.get('#downloadButton').click() //first way 
        cy.get('a.btn-primary').click()   // second way
    });
});