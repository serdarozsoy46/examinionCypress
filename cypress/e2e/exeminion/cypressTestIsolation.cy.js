describe('Cypress Test Isolation', {testIsolation:false}, () => {
    it('dosya yukleme 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
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