import React from 'react';
import { mount } from 'cypress-react-unit-test';
import ClubDetails from '../../src/components/ClubDetails';

// Import otras dependencias necesarias para el test
// ...

describe('ClubDetails', () => {
  it('renders correctly', () => {
    // Render el componente ClubDetails con las props necesarias para el test
    mount(
      <ClubDetails
        club={{
          id: 1,
          name: 'Club Name',
          shortName: 'Short Name',
          tla: 'TLA',
          address: 'Club Address',
          phone: 'Club Phone',
          website: 'https://clubwebsite.com',
          email: 'clubemail@example.com',
          founded: 2000,
          clubColors: 'Club Colors',
          venue: 'Club Venue',
          latitude: '51.12345',
          longitude: '-0.98765',
        }}
        onClose={() => {}}
      />
    );

    // Realiza aserciones para verificar que el componente se ha renderizado correctamente
    cy.get('.club-details-container').should('exist');
    cy.get('h2').should('have.text', 'Club Name');
    cy.get('.club-image-details').should('have.attr', 'src', 'http://localhost:3000/public/static/images/1.png');
    cy.get('.club-info').should('contain', 'Club Address');
    cy.get('.club-info').should('contain', 'Club Phone');
    // Realiza más aserciones según sea necesario

    // También puedes realizar interacciones, como hacer clic en un botón y verificar el comportamiento resultante
    cy.get('.close-details-button').click();
    // Verifica que el evento onClose se haya disparado y haya realizado las acciones esperadas

    // Agrega más aserciones o interacciones según sea necesario

  });
});
