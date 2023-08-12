describe('XHR Test', () => {
    it('cy.request-1', () => {
        
        cy.request('https://jsonplaceholder.cypress.io/comments').should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.has.length(500)
            expect(response).to.have.property('headers')
        })
    });

     it('cy.request-2', () => {
        cy.request({
            url:'https://jsonplaceholder.cypress.io/comments',
            method:'Get'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.has.length(500)
            expect(response).to.have.property('headers')
        })
    }); 

    it('cy.request-3', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .its('headers') 
        .its('content-type')
        .should('include', 'application/json')  
        //.its('status')
        //.should('eq', 200) diffirent ways to assertion

    }); 

    it.only('cy.intercept', () => {
        cy.intercept('GET', 'http://etop-ui.s3-website-eu-west-1.amazonaws.com/').as('abc')
        cy.visit('http://etop-ui.s3-website-eu-west-1.amazonaws.com/')
         cy.get('.css-pv9vr9').type('sa@test.com')
         cy.get('.css-1jyh38l ').type('Test123456!')
         cy.get('[type=submit]').click()

         cy.wait('@abc')
    });


});