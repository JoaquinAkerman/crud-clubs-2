/// <reference types="cypress" />

import { serverBaseUrl } from "../../src/modules/serverUrl";
import { clubs } from "../fixtures/clubs.json";

//Make sure the frontEnd server is running before running the tests

beforeEach(() => {
  // intercept the GET request to the server
  cy.intercept("GET", new RegExp(`^${serverBaseUrl}`), (req) => {
    req.reply({
      statusCode: 200,
      body: { clubs },
    });
  }).as("interceptedGetRequests");

  // Intercept the fetch request to the Google Maps API and provide a mock response
  cy.intercept("GET", "https://maps.googleapis.com/maps/api/mapsjs/gen_204", {
    statusCode: 200,
    body: "",
  }).as("googleMapsRequest");
  cy.visit("http://localhost:3000/clubs/", {});
});

describe("ClubList Component", () => {
  it("should display a list of clubs sorted by name", () => {
    cy.get(".club-container").should("have.length", 20);
    cy.get(".club-container").first().should("contain", "AFC Bournemouth");
    cy.get(".club-container")
      .last()
      .should("contain", "Wolverhampton Wanderers FC");
    cy.get(".club-container").eq(1).should("contain", "Arsenal FC");
    cy.get(".club-container").eq(18).should("contain", "West Ham United FC");
    cy.get(".club-container")
      .eq(19)
      .should("contain", "Wolverhampton Wanderers FC");
    cy.get(".club-container").eq(20).should("not.exist");
  });

  it("should display a club details when a club is selected", () => {
    cy.get(".club-info #BOU-title")
      .parent()
      .siblings(".club-buttons")
      .find(".btn-info")
      .click();
    cy.get(".club-details").should("be.visible");
    cy.get(".club-details").should("contain", "AFC Bournemouth");
    cy.get(".club-details").should("contain", "ID: 1044");
    cy.get(".club-details").should("contain", "Shortname: Bournemouth");
    cy.get(".club-details").should("contain", "TLA: BOU");
    cy.get(".club-details").should(
      "contain",
      "Address: Dean Court, Kings Park Bournemouth BH7 7AF"
    );
    cy.get(".club-details").should("contain", "Phone: +44 (01202) 726300");
    cy.get(".club-details").should("contain", "Website: http://www.afcb.co.uk");
    cy.get(".club-details").should("contain", "Founded: 1890");
    cy.get(".club-details").should("contain", "Club colors: Red / Black");
    cy.get(".club-details").should("contain", "Venue: Vitality Stadium");
    cy.get(".club-image-details").should(
      "have.attr",
      "alt",
      "AFC Bournemouth test logo"
    );
  });
});

describe("Title and NavBar Components", () => {
  it("Should display a title and have a image seted", () => {
    cy.get(".title-container").should("be.visible");
    cy.get("#title").should("have.text", "Club List");
    cy.get(".soccer-ball-img").should("have.attr", "alt", "Soccer ball");

    // check that the background image is set correctly
    cy.get(".title-container").should(
      "have.css",
      "background-image",
      `url("${serverBaseUrl}/public/static/images/backgroundSoccer.jpg")`
    );
  });

  it("Should display a navbar ", () => {
    cy.get(".navbar-brand").should("have.text", "CRUD Clubs");

    // Check that the link to the home page is visible and works
    cy.get("#crud-clubs-anchor").should("have.text", "CRUD Clubs");

    // Check that the create club button is visible and works
    cy.get("#create-club-button").should("be.visible");
    cy.get("#create-club-button").click();
    cy.get(".new-club-form").should("be.visible");
    cy.get("#cancel-button").click();
    cy.get(".new-club-form").should("not.exist");
  });
  });

describe("Create Club Form", () => {
  it("Should display a form to create a new club", () => {
    cy.get("#create-club-button").click();
    cy.get(".new-club-form").should("be.visible");
    cy.get("input[name=name]").should("be.visible");
    cy.get("input[name=shortName]").should("be.visible");
    cy.get("input[name=tla]").should("be.visible");
    cy.get("input[name=address]").should("be.visible");
    cy.get("input[name=phone]").should("be.visible");
    cy.get("input[name=website]").should("be.visible");
    cy.get("input[name=email]").should("be.visible");
    cy.get("input[name=founded]").should("be.visible");
    cy.get("input[name=clubColors]").should("be.visible");
    cy.get("input[name=venue]").should("be.visible");
    cy.get("input[name=latitude]").should("be.visible");
    cy.get("input[name=longitude]").should("be.visible");
    cy.get("#save-button").should("be.visible");
    cy.get("#cancel-button").should("be.visible");

    cy.get("#cancel-button").click();
    
  });
});