/// <reference types="Cypress" />

describe('Fifth Test Suite', function () {

    it('Mouse Hover and Hidden Element', function () {


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        // Force clicking on hidden element
        cy.contains('Top').click({force: true})

        //Mouse Hover by using jquery method
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

    })

})