import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given("I visit web url", function () {
  cy.visit(Cypress.env('web_url'))
})