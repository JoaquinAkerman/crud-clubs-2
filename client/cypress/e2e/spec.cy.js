/// <reference types="cypress" />

import { serverBaseUrl } from "../../src/modules/serverUrl";
import { clubs } from "../fixtures/clubs";

describe("ClubList Component", () => {
  beforeEach(() => {
    cy.intercept("GET", `${serverBaseUrl}/clubs`, {
      // intercept the GET request to the server
      statusCode: 200,
      body: { clubs },
    }).as("getClubs");
    // Intercept the fetch request to the Google Maps API and provide a mock response
    cy.intercept("GET", "https://maps.googleapis.com/maps/api/mapsjs/gen_204", {
      statusCode: 200,
      body: "",
    }).as("googleMapsRequest");
    cy.visit("http://localhost:3000/clubs/", {});
  });

  
  it("should display a list of clubs sorted by name", () => {
    cy.get(".club-container").should("have.length", 20);
    cy.get(".club-container").first().should("contain", "AFC Bournemouth");
    cy.get(".club-container").last().should("contain", "Wolverhampton Wanderers FC");
    cy.get(".club-container").eq(1).should("contain", "Arsenal FC");
    cy.get(".club-container").eq(18).should("contain", "West Ham United FC");
    cy.get(".club-container").eq(19).should("contain", "Wolverhampton Wanderers FC");
    cy.get(".club-container").eq(20).should("not.exist");

  });

  it("should display a club details when a club is selected", () => {
    cy.get('.club-info #BOU-title').parent().siblings('.club-buttons').find('.btn-info').click();
    
});

});
