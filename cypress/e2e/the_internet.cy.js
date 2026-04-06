describe('Suite de Automatización de Herokuapp - 10 Pruebas Esenciales', () => {
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('1. Añadir/Eliminar Elementos: Creación y borrado dinámico de botones', () => {
    cy.visit('/add_remove_elements/');
    cy.get('button[onclick="addElement()"]').click();
    cy.get('.added-manually').should('be.visible').and('have.length', 1);
    cy.get('.added-manually').click();
    cy.get('.added-manually').should('not.exist');
  });

  it('2. Casillas de verificación (Checkboxes): Verificación de la funcionalidad de marcar/desmarcar', () => {
    cy.visit('/checkboxes');
    cy.get('input[type="checkbox"]').first().check().should('be.checked');
    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
  });

  it('3. Lista desplegable (Dropdown): Selección de opciones de una lista', () => {
    cy.visit('/dropdown');
    cy.get('#dropdown').select('Option 1');
    cy.get('#dropdown').should('have.value', '1');
    cy.get('#dropdown').select('Option 2');
    cy.get('#dropdown').should('have.value', '2');
  });

  it('4. Autenticación de formulario: Inicio de sesión correcto', () => {
    cy.visit('/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('5. Autenticación de formulario: Validación de inicio de sesión fallido', () => {
    cy.visit('/login');
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPass');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('6. Deslizador horizontal: Interacción con controles de rango', () => {
    cy.visit('/horizontal_slider');
    cy.get('input[type="range"]').invoke('val', 3.5).trigger('change');
    cy.get('#range').should('have.text', '3.5');
  });

  it('7. Superposición (Hovers): Verificación de la visibilidad de información oculta', () => {
    cy.visit('/hovers');
    cy.get('.figcaption').first().invoke('show').should('be.visible').and('contain', 'name: user1');
  });

  it('8. Entradas de datos (Inputs): Verificación de la interacción con campos numéricos', () => {
    cy.visit('/inputs');
    cy.get('input[type="number"]').type('12345').should('have.value', '12345');
  });

  it('9. Pulsaciones de teclas: Detección de interacciones con el teclado', () => {
    cy.visit('/key_presses');
    cy.get('#target').type('A');
    cy.get('#result').should('contain', 'You entered: A');
    cy.get('#target').type('{esc}');
    cy.get('#result').should('contain', 'You entered: ESCAPE');
  });

  it('10. Alertas de JS: Manejo de diálogos del navegador', () => {
    cy.visit('/javascript_alerts');
    
    cy.get('button[onclick="jsAlert()"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am a JS Alert');
    });
    cy.get('#result').should('contain', 'You successfully clicked an alert');

    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on('window:confirm', () => true);
    cy.get('#result').should('contain', 'You clicked: Ok');
  });
});
