describe('Paylinn Bank', () => {

    // Fixture içerisindeki creds dosyasından verileri okumak için yapılmaktadır.
    before(function(){
        cy.fixture('creds').then(function(data){
            this.data = data
        })
    })

    it('Paylinn Login Test', function(){

        //URL’e git
        cy.visit('https://www.paylinn.com/')

        //Sign In’e click
        cy.contains('Sign In').click()

        //username gir
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.username)

        // username girildiğini doğrula
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should('have.attr','value',this.data.username)

        //password gir
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)

        //password girildiğini doğrula
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should('have.attr','value',this.data.password)

        //sign In butonuna tikla
        cy.get('.MuiButton-label').click()

        //giris yapildigini onayla
        cy.get('.header__nav')
        .should('contain.text','React')
        .and('contain.text','Welcome')
        .and('contain.text','Logout')
    })
    
})