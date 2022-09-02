describe('Multiple Windows', ()=>{

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/windows')
    })

    it('Removing Target',()=>{
        cy.get('.example > a').invoke('removeAttr','target').click()
        // invoke('removeAttr','target') target attribute içerisindeki blank value'sini siler.
        // Böylece yeni sekmede açılmasını engeller. 
        cy.get('h3').should('have.text','New Window')
    })

    it('Open in New Window',()=>{
        cy.get('.example > a')
        .then((element)=>{
            const newUrl = element.prop('href')
            cy.visit(newUrl)
        })
    })
    // prob ile href attributunun değerini aldık ve one bir değişkene atadık.
    // sonra bu değişkenin değeri olan URL e gittik. 
})