/// <reference types="cypress" />
context ('Drug And Drop',()=>{
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
      })
    it ('should drop',()=>{
      cy.get('#column-a').drag('#column-b')
    })
    it('other way',()=>{
      cy.get('#column-a')
        .trigger('mousedown', { which: 1})
        .trigger('mousemove', { which: 1, pageX: 200, pageY: 0 })
        .trigger('mouseup')
    })
})