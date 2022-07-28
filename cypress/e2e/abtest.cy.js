/// <reference types="cypress" />

context('A/B test', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/')
    })
  
  
    it('Redirect to other page', () => {
      cy.contains('A/B Testing').click()
      cy.get('.example p').should('contain','Also known as split testing.')
    })
  })
  