import 'cypress-iframe';

describe('Iframe',()=>{

    it('',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should('have.text','An iFrame containing the TinyMCE WYSIWYG Editor')
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().find('p').clear()
        cy.iframe().find('p').type('Hello World')
        cy.iframe().find('p').should('have.text','Hello World')
    })
})