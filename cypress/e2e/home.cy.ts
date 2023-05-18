describe('Validación de formulario', () => {
  it('Debe validar el formulario correctamente', () => {
    cy.visit('http://localhost:4200/'); // Reemplaza con la ruta de tu formulario

    // Ingresa un nombre válido
    cy.get('[data-cy=name]').type('Juanito Melcocha');

    // Selecciona un estado civil válido
    cy.get('[data-cy=maritalStatus]').click();
    cy.get('mat-option[value="one"]').click();

    // Ingresa comentarios válidos
    cy.get('[data-cy=comments]').type('Estos son mis comentarios');

    // Envía el formulario
    cy.get('[data-cy=send]').click();

    // Verifica que no haya errores visibles
    cy.get('mat-error').should('not.exist');
  });

  it('Debe mostrar errores cuando se envía el formulario vacío', () => {
    cy.visit('http://localhost:4200/'); // Reemplaza con la ruta de tu formulario

    // Intenta enviar el formulario vacío
    cy.get('[data-cy=send]').click();

    // Verifica que se muestren los mensajes de error requeridos
    cy.get('[data-cy="name"]')
      .closest('mat-form-field')
      .find('mat-error')
      .should('be.visible')
      .contains('Nombre es requerido');
    // cy.get('[data-cy=maritalStatus] + mat-error')
    //   .should('be.visible')
    //   .contains('Estado civil es requerido');
    cy.get('mat-error').should('have.length', 2);

    // Verifica que los mensajes de error sean los esperados
    cy.contains('Nombre es requerido');
    cy.contains('Estado civil es requerido');
  });
});
