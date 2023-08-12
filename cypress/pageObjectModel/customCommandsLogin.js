
class CustomCommandsLogin{

        get emailField (){
            return cy.get('.css-pv9vr9')
        }
        get passwordField (){
            return cy.get('.css-1jyh38l ')
        }
        get  loginBtn(){
            return cy.get('[type=submit]')
        }
    }
    export default new CustomCommandsLogin()







