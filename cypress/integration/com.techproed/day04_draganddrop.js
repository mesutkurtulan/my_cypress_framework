// npm install --save-dev @4tw/cypress-drag-drop

/// <reference types="cypress" />

import '@4tw/cypress-drag-drop'

describe('Drag and Drop',()=>{

    it('Drag and Drop',()=>{
        cy.visit("https://www.testandquiz.com/selenium/testing.html")
        cy.get('#dblClkBtn').dblclick()
        // çift tıklar.
        // cy.get('#dblClkBtn').rightclick()
        // sağ tıklar.

        cy.on('window:alert',(str)=>{
            // Assert
            // 1)
            expect(str).to.equal('hi, JavaTpoint Testing')
            // 2)
            expect(str).to.eq('hi, JavaTpoint Testing')
            // 3)
            expect(str).to.contains('hi, JavaTpoint Testing')
        })
    })

    it('Drag and Drop', () => {
        // 1)
        // 2)
        cy.visit('https://www.testandquiz.com/selenium/testing.html')

        cy.get('#sourceImage')  // Sürüklenecek eleman
        .drag('#targetDiv')     // Sürükencek yer

    })
})