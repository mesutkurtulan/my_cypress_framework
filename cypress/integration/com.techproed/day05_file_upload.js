describe('File Upload', () => {

    it.skip('tek dosya yükleme', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#fileList > li').should('include.text','No Files Selected')
        cy.get('#filesToUpload').attachFile('image01.jpeg')
        cy.get('#fileList > li').should('include.text','image01.jpeg')
    })

    it.skip('çoklu dosya yükleme', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#fileList > li').should('include.text','No Files Selected')
        cy.get('#filesToUpload').attachFile('image01.jpeg').attachFile('image02.jpeg').attachFile('image03.jpeg')
    })

    it('çoklu dosya yükleme', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#fileList > li').should('include.text','No Files Selected')
        cy.get('#filesToUpload').attachFile(['image01.jpeg', 'image02.jpeg','image03.jpeg'])
    })

})