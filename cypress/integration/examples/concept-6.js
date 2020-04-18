/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("http://qaclickacademy.com/practice.php")

        // Method 1 - Getting the attribute
        cy.get('#opentab').then(function (el) {
            cy.log(el.prop('href'))
        })

        // Method 2 - Getting the attribute
        cy.get('#opentab').invoke('attr', 'href').then(function (el) {
            cy.log(el)
        })

        // Method 3 - Getting the attribute
        cy.get('#opentab').invoke('attr', 'href').then((el) => {
            cy.log(el)
        })

        // Opening child tab by removing the target attribute
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahul')
        cy.go('back')
    })

})
