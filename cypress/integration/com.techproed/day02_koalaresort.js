describe('Koala Resort Hotel', ()=>{

    it('TestCase1', ()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()

        // Assert İşlemleri

        // 1) URL assert
        cy.url().should('include', 'Account/Logon')
        // Bu sayfanın URL'inde 'Account/Logon' yazısı varmı?

        // 2) have.text
        cy.get('.row > .mb-4').should('have.text', 'Log in')
        // Bu sayfada locate edilen WebElement'de 'Log in' yazısı var mı?

        // 3) be.visible
        cy.get('.row > .mb-4').should('be.visible')
        // Bu sayfada locate edilen WebElement görünür mü?

        // 4) Title Assert
        cy.title().should('equal', 'KoalaResortHotels - Log in')
        // Bu sayfanın Title'ı text'e eşit mi

        // 5) 
        cy.get('.row > .mb-4').should('include.text', 'Log in')
        // Locate edilen yerde text içeriyor mu?

    })




})