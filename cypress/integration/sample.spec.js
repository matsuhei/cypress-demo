describe('google test', function() {
    it('Visit Google', function() {
      cy.visit('https://www.google.co.jp')
  
      cy.get('.gLFyf.gsfi')
        .type('cypress.io')
  
      cy.contains('Google 検索')
        .click()
  
      cy.title().should('eq', 'cypress.io - Google 検索')
    })
  })