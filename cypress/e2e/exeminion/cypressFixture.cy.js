/// <reference types="cypress" />



describe('', () => {
    beforeEach(() => {
        cy.visit('http://etop-ui.s3-website-eu-west-1.amazonaws.com/login')
       // cy.visit('https://google.com')
    });
    it('', () => {
        cy.fixture("loginData").as('credentials')
        cy.get("@credentials").then((data)=>{
            cy.login(data.email, data.password)
        })
    });
    it('', () => {
        
    });
    })
