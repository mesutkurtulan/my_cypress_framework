describe('Koala Resort Hotels', ()=>{
    it ('Login Test', ()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        // login butonuna bas
        // 1. Yol
        cy.get('#navLogon > .nav-link').click()

        // 2. Yol
        // cy.contains('Log in').click

        // Username kısmını doldur
        cy.get('#UserName').type('manager')

        // Password kısmını doldur
        cy.get('#Password').type('Manager1!')

        // Login tıkla
        cy.get('#btnSubmit').click()

    })


})