/// <reference types="cypress" />
context ('Broken Images',()=>{
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/broken_images')
      })
    it ('Check images',()=>{
        cy.get('.example img').eq(0).should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.equal(0)
        })
        cy.get('.example img').eq(1).should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.equal(0)
        })
        cy.get('.example img').eq(2).should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
           
    })
})