describe('Login Test',()=>{
    var eMail="soraya.henleigh@zoobug.org"
    var password ="soraya.henleigh"
    it('Hatalı Login Test',()=>{
        cy.visit('https://test.iyikisordun.com/login.php')
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(password)
        cy.get('.btn').click()
        cy.get('#fail').should('include.text', 'Girdiğiniz bilgiler hatalıdır.')

    })

    eMail="cypress_test_1@gmail.com"
    password ="admin_123"

    it('Hatasiz Login Test',()=>{
        cy.visit('https://test.iyikisordun.com/login.php')
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(password)
        cy.get('.btn').click()
        cy.get('.m-0').should('include.text','Dashboard')
    })
})