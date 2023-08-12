

class Auth {
    // difference than java, class name does not have to be same with file name
    // you can put more than one class in a file, and none of them have any superiority over each other.
    login() {
        cy.get('.css-pv9vr9').type(email)
        cy.get('.css-1jyh38l ').type(password)
        cy.get('[type=submit]').click()
    }
  
    logout() {
      cy.contains("Logout").should("be.visible").click();
    }
  }
  
 const login = new Auth();// object of the class we made
  
  class Locators {
    // we can create another class here, how do we apply findBy annotation of Selenium with Cypress
  
    get email() {
      // userName is the webelement variable name
      return cy.get('.css-pv9vr9', { timeout: 10000 }); // defining custom timeout for a specific element
     
    }
  
    get password() {
      return cy.get('.css-1jyh38l', { timeout: 10000 });
    }
  
    get submit() {
      return cy.get('[type=submit]')
    }
  }
  
  const locators = new Locators();
  
  module.exports = {
    login,
    locators,
  };
  