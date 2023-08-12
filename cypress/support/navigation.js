import { auth } from "./loginPage";

export class NavigateTo {
    loginPage() {   
      cy.visit('/')
     
    }
  }
  
  export const navigateTo = new NavigateTo();