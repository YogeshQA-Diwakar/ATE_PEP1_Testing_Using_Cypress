describe('Scenario 1 - Horizontal Form', () => {

  it('Validate Sign In Form', () => {

    // Open application
    cy.visit('/');

    // Click Forms
    cy.contains('Forms', { timeout: 15000 })
      .should('be.visible')
      .click();

    // Click Form Layouts
    cy.contains('Form Layouts', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Locate Horizontal form
    cy.contains('nb-card', 'Horizontal form').within(() => {

      // Enter Email
      cy.get('input[placeholder="Email"]')
        .type('test@example.com')
        .should('have.value', 'test@example.com');

      // Enter Password
      cy.get('input[placeholder="Password"]')
        .type('Password123')
        .should('have.value', 'Password123');

         // Click Remember me checkbox
      cy.get('input[type="checkbox"]')
        .check({ force: true });

      // Assertion: form contains Sign in button
      cy.contains('button', 'Sign in')
        .should('be.visible');
    });

  });

});