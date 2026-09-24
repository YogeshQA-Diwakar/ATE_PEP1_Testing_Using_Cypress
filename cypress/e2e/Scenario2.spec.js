describe('Scenario 2 - Radio Buttons', () => {

  it('Validate Radio Buttons', () => {

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

    // Locate Using the Grid form
    cy.contains('nb-card', 'Using the Grid').within(() => {

      // Find all three radio buttons
      cy.get('input[type="radio"]')
        .should('have.length', 3)
       
        // Radio Button 1
     cy.get('input[type="radio"]')
        .eq(0)
        .should('be.enabled')
        .check({ force: true });

        // Radio Button 2 - check enabled and select it
        cy.get('input[type="radio"]')
        .eq(1)
        .should('be.enabled')
            .check({ force: true });

        // Validate Radio Button 1 is NOT selected
        cy.get('input[type="radio"]')
            .eq(0)
            .should('not.be.checked');
            
        // Validate Radio Button 3 is disabled
        cy.get('input[type="radio"]')
            .eq(2)
            .should('be.disabled');

    });

  });

});