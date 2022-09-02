describe('Check Box', ()=>{

    it.skip('Checking Single C',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()
        cy.get('#layered_category_4').should('not.be.checked')
        cy.get('#layered_category_4').check()
        cy.get('#layered_category_4').should('be.checked')
        cy.get('#layered_category_4').uncheck()
        cy.get('#layered_category_4').should('not.be.checked')
    })

    it.skip('check all box', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()
        cy.get('.checkbox').check()
        cy.get('.checkbox').uncheck()
    })

    it('click', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()
        cy.get('.checkbox').click({ multiple: true })

        // Assert-1
        cy.get('.checkbox').first().should('be.checked')

        // Assert-2
        cy.get("input[type='checkbox']").first().parent().should('have.class','checked')

        // Assert-3 should('have.id','username')
        // Assert-4 should('have.type','text')
        // should('have.class','container')





    })

})