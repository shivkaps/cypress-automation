/// <reference types="Cypress" />

describe('Fifth Test Suite', function () {

    before(function () {
        cy.fixture('concept-8').then(function (data) {
            this.var = data
        })
    })


    it('Getting attribute', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')

       // cy.pause() // Used to pause execution
        cy.log("cypress pause functionality")
        cy.get(':nth-child(1) > .card > .card-body > .card-title > a').debug() // Used to debug a step


        // Getting the array from feature files
        //forEach is a javascript method to loop over array
        this.var.productNameList.forEach(element => {
            // This method is declared in support/commands.js
            cy.addProductToCart(element)
        })

        // You can also use function(element) instead of element =>
        this.var.productNameList.forEach(function(element) {
            cy.addProductToCart(element)
        })
    })

})