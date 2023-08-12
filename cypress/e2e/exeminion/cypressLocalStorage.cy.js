describe('Cypress Clear Cookies', () => {
    it('dosya yukleme 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.log(localStorage.length)
        cy.log(window.localStorage.length)

        localStorage.setItem('for cypress test', 'test')
        
        cy.wait(2000).then(()=>{
            localStorage.removeItem('for cypress test', 'test')
        })

        cy.wait(1500).then(()=>{
            localStorage.clear()
        })
    });
    it.only('dosya yukleme 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.wait(5000)
        cy.clearLocalStorage()


    });

});