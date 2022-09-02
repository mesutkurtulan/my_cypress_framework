/// <reference types="cypress" />

describe('Viewport', () => {
    it('iPhone XR', () => {
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-xr')
        cy.screenshot()
    })

    it('iMac', () => {
        cy.visit('https://www.amazon.com/')
        cy.viewport('macbook-13')
    })

    it('Custom', () => {
        cy.visit('https://www.amazon.com/')
        cy.viewport(2500,1500)
    })
    
})