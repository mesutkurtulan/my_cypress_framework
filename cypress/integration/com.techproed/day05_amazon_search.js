describe('Search', () => {

    it('Amazon Search', () => {
        cy.amazonSearch('iPhone')
        cy.get('.a-section > .a-color-state').should('include.text','iPhone')
    })
    
})