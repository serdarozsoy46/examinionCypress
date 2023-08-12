describe('Cypress Session', () => {
    beforeEach(() => {
        const username = 'deneme@test.com'
        const password = 'deneme123'
        cy.loginWithSession(username, password)
    });

    const { faker} = require('@faker-js/faker')
    let randomTitle = faker.lorem.words(5)
     it('go to page and add text ', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('New Post').click()
        cy.get("input[placeholder = 'Article Title']").type(randomTitle)
        cy.get('input[placeholder = "What\'s this article about?"]').type('examinion lesson')
        cy.get("textarea[placeholder = 'Write your article (in markdown)']").type('from zero to high level Cypress')
        cy.get("input[placeholder = 'Enter tags']").type('cypress')
        cy.contains('Publish Article').click()
        cy.contains('Edit Article').should('be.visible')
    });

    it('go to Global Feeds\ and verify', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('div.feed-toggle > ul > li:nth-child(2) > a').click()
        cy.get('div:nth-child(1) > a > h1').should('be.visible').and('contain', randomTitle)
    });

});