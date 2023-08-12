

describe('Custom Commands', () => {
   beforeEach(() => {
    cy.visit('http://etop-ui.s3-website-eu-west-1.amazonaws.com/')
   });
    it('Custom Commands  valid examble', () => {
        cy.get('.css-pv9vr9').type('sa@test.com')
        cy.get('.css-1jyh38l ').type('Test123456!')
        cy.get('[type=submit]').click()
    });

    it.only('Custom Commands  valid examble', () => {
        cy.login('sa@test.com', 'Test123456!')
    });

    it('Custom Commands  invalid examble', () => {
        cy.login('sa@test.com', 'test123456!')
    });
    
});