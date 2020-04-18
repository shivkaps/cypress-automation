/// <reference types="Cypress" />

describe('Ninth Test Suite', function () {

    before(function () {
        cy.fixture('concept-8').then(function(data) {

            this.var = data


        })

    })

    // Fixtures
    it('Getting attribute', function () {


        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type("Hello")
        cy.log(this.var.name)
    })

})