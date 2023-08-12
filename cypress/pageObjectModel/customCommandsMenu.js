
class CustomCommandsMenu{

    get examinionMenu (){
        return cy.get('/html/body/div[2]/div[3]/div[3]')
    }
    get myOrganization (){
        return cy.get('.css-1yej1se.active .MuiTypography-root')
    }
    get  userMenu(){
        return cy.get('/html/body/div[2]/div[3]/div[3]/div/ul/li[2]')
    }
    get  organizations(){
        return cy.get('/html/body/div[2]/div[3]/div[3]/div/ul/li[3]')
    }
    get  examAssignments(){
        return cy.get('/html/body/div[2]/div[3]/div[3]/div/ul/li[4]')
    }
    get  examManagemetMenu(){
        return cy.get('/html/body/div[2]/div[3]/div[3]/div/ul/li[5]')
    }
    get  settingsMenu(){
        return cy.get('/html/body/div[2]/div[3]/div[3]/div/ul/li[6]')
    }
}
export default new CustomCommandsMenu()