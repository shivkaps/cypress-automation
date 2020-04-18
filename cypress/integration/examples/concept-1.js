// Code for Intelli Code Completion
/// <reference types="Cypress" />

describe("My first cypress test suite", function () {

    // Array from which the items need to be added to cart
    var itemsNeeded = ["Cauliflower", "Carrot 1 Kg", "Tomato", "Banana"]

    it("Open the website", function () {
        // Visiting a URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Waiting because there is no loading or refresh icon which cypress can understand
        cy.wait(3000)

        //Promise Handling
        cy.title().then(function (pageTitle) {
             cy.log(pageTitle)
        })

        // Assertion Type 2
        cy.title().should('have.string', "GreenKart")

        // Assertion Type 1 and // alias for
        const variable = cy.get('.products').as('productLocator')
        cy.get('@productLocator').should('have.length', 1)
        variable.find('.product').should('have.length', 30)

        // Method -1 Looping over array of web elements using each // Using command.js common function
        cy.loopOverProducts(itemsNeeded)

        //Method - 2 Looping over array of web elements using each
        const products = cy.get('.products').find('.product')
        products.each(($el, index, $list) => {
            var product = $el.find('.product-name').text().split(" -")
            if (itemsNeeded.findIndex(element => 
                element.includes(product[0])) > -1) {
                $el.find('button').click()
            }
        })  

    })
})