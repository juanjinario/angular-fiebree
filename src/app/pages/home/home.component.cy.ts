import { HomeComponent } from './home.component';

describe('Validación de formulario', () => {
  it('Debe validar el formulario correctamente', () => {
    cy.visit(''); // Reemplaza con la ruta de tu formulario

    // Ingresa un nombre válido
    cy.get('[data-cy=name]').type('Juanito Melcocha');

    // Selecciona un estado civil válido
    cy.get('[data-cy=maritalStatus]').select('Casado');

    // Ingresa comentarios válidos
    cy.get('[data-cy=comments]').type('Estos son mis comentarios');

    // Envía el formulario
    cy.get('[data-cy=send]').click();

    // Verifica que no haya errores visibles
    cy.get('mat-error').should('not.exist');
  });

  it('Debe mostrar errores cuando se envía el formulario vacío', () => {
    cy.visit('/ruta-del-formulario'); // Reemplaza con la ruta de tu formulario

    // Intenta enviar el formulario vacío
    cy.get('[data-cy=send]').click();

    // Verifica que se muestren los mensajes de error requeridos
    cy.get('[data-cy=name] + mat-error')
      .should('be.visible')
      .contains('Nombre es requerido');
    cy.get('[data-cy=maritalStatus] + mat-error')
      .should('be.visible')
      .contains('Estado civil es requerido');
  });
});
