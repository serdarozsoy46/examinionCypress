describe('Alias, Then, Each, Wrap', () => {
    it('examble', () => {
        let itemlenght
        cy.visit('https://shopist.io/')

        cy.get('.navbar-section a').should('be.visible').as('NavbarMenus')//Alias examble

        cy.get('@NavbarMenus')
        .then(($el)=>{
            itemlenght = $el.lenght
        })
        .each(($el, index)=>{
            //cy.log($el.text())
            cy.get('@NavbarMenus').should('be.visible')
            cy.log('Navbar Menu' + index + ": " + $el.text())

            if($el.text().includes('Cart')){
                cy.wrap($el).click()
            }
        })
    });
});