describe('Trigger', () => {
    it('Mouseover-1', () => {
        cy.visit('https://www.amazon.co.uk/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mouseover')//its go on but did click  just open
        cy.get('div#nav-al-your-account a:nth-child(2) > span').click()
    });

    it('Mouseover-2', () => {
        cy.visit('https://www.amazon.co.uk/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mouseover')//its go on but did click  just open
        cy.get('div#nav-al-your-account a:nth-child(10) > span').click()
    });

    it('Mousedown-3', () => {
        cy.visit('https://www.amazon.co.uk/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', {button: 0})//left side mouse 
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', {button: 1})//middle of mouse 
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', {button: 2})//right side mouse 
        cy.get('div#nav-al-your-account a:nth-child(10) > span').click()
    });
});