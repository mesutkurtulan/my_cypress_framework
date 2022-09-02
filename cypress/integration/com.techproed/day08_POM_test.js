/// <reference types="cypress" />

import HomePage from'../pageObjectRepository/HomePage'
import LoginPage from'../pageObjectRepository/LoginPage'

before(function(){
    cy.fixture('creds').then(function(data){
        this.data = data
    })
})

it('Paylinn Login Test', function(){

    // Page Object Oluşturma
    const homePage = new HomePage
    const loginPage = new LoginPage

    //URL’e git
    cy.visit('https://www.paylinn.com/')

    //Sign In’e click
    homePage.getSigninLink().click()

    //username gir
    loginPage.getUserNameBox().type(this.data.username)

    // username girildiğini doğrula
    loginPage.getUserNameBox().should('have.attr','value',this.data.username)

    //password gir
    loginPage.getPasswordBox().type(this.data.password)

    //password girildiğini doğrula
    loginPage.getPasswordBox().should('have.attr','value',this.data.password)

    //sign In butonuna tikla
    loginPage.getLoginButton().click()

    //giris yapildigini onayla
    loginPage.getNavBarHeader()
    .should('contain.text','React')
    .and('contain.text','Welcome')
    .and('contain.text','Logout')
})