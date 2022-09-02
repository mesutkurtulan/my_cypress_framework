describe('Hooks', () => {
    before(()=>{
        console.log('Before Method')
    })

    beforeEach(()=>{
        console.log('Before Each Method')
    })

    it('test 1', () => {
        cy.visit('https://qa-environment.koalaresorthotels.com/')
    })

    it('test 2', () => {
        cy.get('#navLogon > .nav-link').click()
    })

    after(()=>{
        console.log('After Method')
    })

    afterEach(()=>{
        console.log('After Each Method')
        cy.url().should('include','koala')
    })
})