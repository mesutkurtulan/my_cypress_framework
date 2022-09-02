describe('Page Navigation',()=>{

    it.skip('back, forward, refresh', ()=>{
        // skip---> Test'i test blogunda çalıştırmaz
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(1000)
        // 1 sn hard wait

        cy.contains('Log in').click()

        cy.wait(1000)
        // 1 sn hard wait

        cy.go('back')
        // önceki sayfaya git

        cy.wait(1000)
        // 1 sn hard wait

        cy.go('forward')
        // sonraki sayfaya git

        cy.wait(1000)
        // 1 sn hard wait

        cy.go(-1)
        // önceki sayfaya git

        cy.wait(1000)
        // 1 sn hard wait

        cy.go(1)
        // sonraki sayfaya git

        cy.wait(1000)
        // 1 sn hard wait

        cy.reload()
        // sayfayı tekrar yükler
    })

    it('Zincirleme Navigation', ()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click().go(-1).go(1).reload()

    })
})