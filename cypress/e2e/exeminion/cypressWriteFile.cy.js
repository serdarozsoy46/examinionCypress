describe('Cypress Write File', () => {
    it('write file', () => {
        cy.writeFile('CypressWriteFileDoc/exambleFile.txt', 'Cypress text-1 examble')// only write test1
        cy.writeFile('CypressWriteFileDoc/exambleFile.txt', 'Cypress text-2 examble')// its show only tesx2. always last one come out
    });
    it('write file', () => {
        cy.writeFile('CypressWriteFileDoc/exambleFile.txt', 'Cypress text-1 examble')
        cy.writeFile('CypressWriteFileDoc/exambleFile.txt', 'Cypress text-2 examble', {flag:'a+'})// its show text1.text2 
    });
    it('write file', () => {
        cy.writeFile('CypressWriteFileDoc/exambleFile.txt', 'Cypress text-1 examble\n')// \n text is go in down line
        cy.writeFile('CypressWriteFileDoc/exambleFile.txt', 'Cypress text-2 examble',{flag:'a+'})// its show tesx1.
                                                                                            //    text2
    });
});

describe('Cypress Read File', () => {
    it('read file', () => {
        cy.readFile('CypressWriteFileDoc/exambleFile.txt').should('contain', 'text')//Reading doc  and asserting  text
        cy.readFile('CypressWriteFileDoc/exambleFile.txt').should('contain', 'Cypress')//Reading doc  and asserting Cypress      
    });
    it('read file', () => {
        cy.readFile('CypressWriteFileDoc/exambleFile.txt').then((text)=>{
            expect(text).to.contain('text-1')// assert
        })
        cy.readFile('CypressWriteFileDoc/exambleFile.txt').then((text)=>{
            expect(text).to.contain('java')// text is not contain java  not assert
        })
      
    });
});