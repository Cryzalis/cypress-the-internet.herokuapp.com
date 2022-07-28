/// <reference types="cypress" />
context ('Entry Ad',()=>{
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/entry_ad')
      })
    it ('close modal',()=>{
      cy.get('.modal').should('be.visible')
      cy.get('.modal-footer p').click()
      cy.get('.modal').should('not.be.visible')
    })
    it ('refresh',()=>{
      cy.get('#restart-ad').click()
      cy.get('.modal').should('not.be.visible')
    })
})