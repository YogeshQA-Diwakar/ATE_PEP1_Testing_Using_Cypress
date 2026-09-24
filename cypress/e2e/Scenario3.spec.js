describe('Scenario 3 - Toastr Checkboxes', () => {

  it('Validate Toastr Checkboxes', () => {

    // Open application
    cy.visit('/');

    // Open Modal & Overlays
    cy.contains('Modal & Overlays')
      .should('be.visible')
      .click();

    // Click Toastr
    cy.contains('Toastr')
      .should('be.visible')
      .click();

      // Find all three checkboxes
cy.get('input[type="checkbox"]')
  .should('have.length', 3)

// Select all three using check()
cy.get('input[type="checkbox"]')
  .check({ force: true })

// Click only the second checkbox
cy.get('input[type="checkbox"]')
  .eq(1)
  .click({ force: true })

  });

});