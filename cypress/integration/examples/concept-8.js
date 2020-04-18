/// <reference types="Cypress" />

describe('Fifth Test Suite', function () {


    //https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks
    // Function for storing fixtures values in to a variable
    before(function () {
        cy.fixture('concept-8').then(function (data) {
            this.var = data
        })
    })

    it('Getting attribute', function () {
     
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        // Fetching value from Fixtures
        cy.get('input[name="name"]:nth-child(2)').type(this.var.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.value', this.var.name)

        // Checking value of two-way binding
        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.var.name)

        // Checking value of an attribute
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')

        // Checking if the element is disabled
        cy.get('#inlineRadio3').should('be.disabled')

    })

})