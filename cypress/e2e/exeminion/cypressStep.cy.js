describe('Web Scrapping', () => {
    it('write file to text for products', () => {
        cy.step('going to chairs page')
        cy.visit('https://shopist.io/department/chairs')

        cy.step('Chair and price in description')
        cy.get('.description').as('chairsPrice').its('length').should('eq', 9)

        const results = [];

        cy.step('log all results')
        cy.get('@chairsPrice').each(($el, index)=>{
            cy.log("Results: " + index + "- "+ $el.text())
            results.push($el.text())
        }).then(()=>{
            cy.step('writing results chairsPrice.txt in file')
            cy.writeFile('CypressWriteFileDoc/chairsPrice.txt', results)
        })
    });
});