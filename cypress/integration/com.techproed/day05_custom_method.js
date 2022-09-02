/// <reference types="cypress" />

describe('custom method',()=>{

    it.skip('Pozitif login',()=>{
        cy.login('123murat123@gmail.com','123Murat123')
    })

    it('Negatif login',()=>{
        cy.login('123murat12@gmail.com','123Murat123')
        cy.contains('Authentication failed').should('be.visible')
        cy.screenshot()
    })

})
