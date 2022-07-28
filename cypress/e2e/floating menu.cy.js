/// <reference types="cypress" />
context ('Floating menu',()=>{
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/floating_menu')
      })
    it ('change url',()=>{
      cy.get('a').contains('News').click()
      cy.url().should('contain','news')
    })
})