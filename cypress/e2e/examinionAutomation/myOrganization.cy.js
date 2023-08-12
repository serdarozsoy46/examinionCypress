describe('', () => {
    before(() => {
        cy.visit('/')
        cy.fixture("loginData").as('credentials')
        cy.get("@credentials").then((data)=>{
        cy.login(data.email, data.password)
      });
    });
    it('', () => {
    
      cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
      cy.contains('Add Organization Admin').click()
     
     });
    });


   
   

