describe('My First Test', ()=>{ 
    //describe('Testin İsmi', Test için oluşturulacak fonksiyonlar)

    // 1. Test
    it('URL Testi', ()=>{
        // Testi tanımlıyoruz. @Test gibi.
        // it('Testin İsmi', Test için oluşturulacak fonksiyonlar)

        // URL adresinde Google varmı?
        cy.visit('https://www.google.com/')
        // visit('site url') : siteye gider 

        cy.url().should('include', 'google')
        // url() : url testi için kullanılır 
        // should('include', 'text') : url içerisinde '' için kullanılır
    })

    // 2. Test
    it('Title Testi', ()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('equal', 'Google')
    })




})