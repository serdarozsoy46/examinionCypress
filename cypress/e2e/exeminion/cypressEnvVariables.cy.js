describe('Env Variables', () => {
    it('worn on different env', () => {
        cy.visit(Cypress.env('examinon'))
    });
});