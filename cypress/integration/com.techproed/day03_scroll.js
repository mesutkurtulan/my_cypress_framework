describe('Scroll',()=>{

    it('Scroll into view',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()
        cy.get('.col-md-7 > h2 > span').scrollIntoView()

        cy.scrollTo('bottom')
        cy.scrollTo('top')

        cy.scrollTo(0,1000) // 1000 px down

        cy.scrollTo(0,-500) // 500 px up
    })
})