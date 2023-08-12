import customCommandsLogin from "../../pageObjectModel/customCommandsLogin";
import {commands} from "../../support/commands"
describe('', () => {
    it('', () => {   
     cy.visit('/')
    cy.login('sa@test.com', 'Test123456!')
    });
});