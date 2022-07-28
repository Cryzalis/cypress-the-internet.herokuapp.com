/// <reference types="cypress" />
context ('Scroll',()=>{
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/infinite_scroll')
      })
    it ('infinite scroll',()=>{
      cy.get('.jscroll-inner .jscroll-added').should('have.length','2')
      cy.scrollTo('bottom')
      cy.get('.jscroll-inner .jscroll-added').should('have.length','3')
    })
})