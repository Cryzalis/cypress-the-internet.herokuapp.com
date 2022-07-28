/// <reference types="cypress" />
context ('Slider',()=>{
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider')
      })
      it('set value', () => {
        cy.get('input[type="range"]').invoke('val', 3.5).trigger('change')
        cy.get('.sliderContainer span').should('have.text','3.5')
      })
})