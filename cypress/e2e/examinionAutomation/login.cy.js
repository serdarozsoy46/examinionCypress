/// <reference types="cypress" />

describe('', () => {
    it('', () => {   
      cy.visit('/')
      cy.fixture("loginData").as('credentials')
      cy.get("@credentials").then((data)=>{
      cy.login(data.email, data.password)
});
});
    
});