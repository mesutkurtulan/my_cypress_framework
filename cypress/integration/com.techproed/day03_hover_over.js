describe('Hover Over',()=>{

    it('Move Over',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover')
        // trigger() -> Mouse'ı hareket ettirir.

        // Change country/region
        cy.contains('Change country/region.').click()

        // cy.get('.a-dropdown-prompt').select('Canada') // Select ile yazılmadığı için select kullanamayız
        
        //cy.get('#a-autoid-0-announce').click()
        //cy.get('#icp-selected-country_2 > .a-fixed-left-grid > .a-fixed-left-grid-inner > .a-col-left > .icp-flag-icon-2').click()
        //cy.get('.a-button-input').click()

        cy.get('#icp-selected-country').select('Canada', {force: true})
        // Bir dropdown elementleri açmak için kullanıyoruz. 
    })




})