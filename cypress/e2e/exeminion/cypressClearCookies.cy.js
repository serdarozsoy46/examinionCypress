describe('Cypress Clear Cookies', {testIsolation:false}, () => {
    it.only('dosya yukleme 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.getCookies()
        cy.clearCookies()
        cy.getCookies().should('have.length', 0)
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.logo-preview').attachFile({filePath: "photo.jpg"}, {subjectType: "drag-n-drop"})
    });
    it('Dosya Yukleme 2', () => {
        const fileName='kartal.png'
        cy.fixture('kartal.png')
        .then(Cypress.Blob.base64StringToBlob) //for convert
        .then((fileContent)=>{
            cy.get('.logo-preview').attachFile({fileContent, fileName, mimeType: 'image/**'}, {subjectType: 'drag-n-drop'})
            
        })
        
    }); 

});