describe('Validación de formulario', () => {
  it('Debe validar el formulario correctamente', () => {
    cy.visit('http://localhost:4200/');

    // Ingresa un nombre válido
    cy.get('[data-cy=name]').type('Juanito Melcocha');

    cy.get('[data-cy=maritalStatus]').click();
    cy.get('mat-option[value="one"]').click();

    cy.get('[data-cy=comments]').type('Estos son mis comentarios');

    cy.get('[data-cy=send]').click();

    // Verify no errors
    cy.get('mat-error').should('not.exist');
  });

  it('Debe mostrar errores cuando se envía el formulario vacío', () => {
    cy.visit('http://localhost:4200/');

    cy.get('[data-cy=send]').click();

    cy.get('[data-cy="name"]')
      .closest('mat-form-field')
      .find('mat-error')
      .should('be.visible')
      .contains('Nombre es requerido');
    // cy.get('[data-cy=maritalStatus] + mat-error')
    //   .should('be.visible')
    //   .contains('Estado civil es requerido');
    cy.get('mat-error').should('have.length', 2);

    cy.contains('Nombre es requerido');
    cy.contains('Estado civil es requerido');
  });
});
