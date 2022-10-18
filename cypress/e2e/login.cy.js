describe('Login', () => {
    it('T01 - Login - Given a user on the Login screen, when the correct user and password are entered, he should be able to log into the', () => {
      cy.visit('/login')
      cy.get('#email').click().type('cartos@admin.com')
      cy.get('#password').click().type('admin')
      cy.get('.ant-btn-primary').click()
      cy.url().should('include', '/home')
      cy.get('h4').should('be.visible')
    })
  })