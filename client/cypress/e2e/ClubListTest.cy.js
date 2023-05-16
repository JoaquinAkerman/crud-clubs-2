import { serverBaseUrl } from "../../src/modules/serverUrl.js";
import { backendBaseUrl } from "../../src/modules/serverUrl.js";
import arsenalClub from "../fixtures/arsenalClub.json";
// Make sure the server is running before running the tests
// use npm run start:dev

describe("ClubList", () => {
  beforeEach(() => {
    // Intercept the fetch request to the clubs and provide a mock response
    cy.intercept("GET", backendBaseUrl, {
      statusCode: 200,
      body: { clubs: [arsenalClub] },
    }).as("getClubs");
    // Intercept the fetch request to the Google Maps API and provide a mock response
    cy.intercept("GET", "https://maps.googleapis.com/maps/api/mapsjs/gen_204", {
      statusCode: 200,
      body: "",
    }).as("googleMapsRequest");

    // Assuming you have a server running with the ClubList component rendered on the page
    cy.visit("http://localhost:3000"); // Replace with the URL where your component is rendered

    // Wait for the fetch request to complete before proceeding with the test
    cy.wait("@getClubs");
  });

  it("displays the club list with details and buttons", () => {
    // Replace the existing clubs with the example club

    // You can use Cypress' various assertions to check the club's details and buttons
    cy.get(".club-container").should("exist");
    cy.get(".club-image").should(
      "have.attr",
      "src",
      `${serverBaseUrl}/public/static/images/57.png`
    );
    cy.get(`#${arsenalClub.tla}-title`).should("have.text", arsenalClub.name);
    cy.get(".club-info").should("contain", arsenalClub.address);
    cy.get(".club-info").should("contain", arsenalClub.phone);
    cy.get(".club-info").should("contain", arsenalClub.website);
    cy.get(".club-buttons").should("contain", "Details");
    cy.get(".club-buttons").should("contain", "Edit club");
    cy.get(".club-buttons").should("contain", "Delete club");
  });
});

describe("ClubDetails", () => {
  beforeEach(() => {
    // Intercept the fetch request to the clubs and provide a mock response
    cy.intercept("GET", backendBaseUrl, {
      statusCode: 200,
      body: { clubs: [arsenalClub] },
    }).as("getClubs");
    // Intercept the fetch request to the Google Maps API and provide a mock response
    cy.intercept("GET", "https://maps.googleapis.com/maps/api/mapsjs/gen_204", {
      statusCode: 200,
      body: "",
    }).as("googleMapsRequest");

    // Assuming you have a server running with the ClubList component rendered on the page
    cy.visit("http://localhost:3000"); // Replace with the URL where your component is rendered

    // Wait for the fetch request to complete before proceeding with the test
    cy.wait("@getClubs");

    // Click on the Details button
      cy.get(".club-buttons").contains("Details").click();
      cy.get(".club-details").should("exist");
      cy.get(".club-details").should("contain", arsenalClub.name);
      

  });});