/// <reference types="Cypress" />

describe('Fifth Test Suite', function () {

    it('iFrames', function () {


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Load the iFrame
        cy.frameLoaded('#courses-iframe')

        // Clicking on a link inside iFrame
        cy.iframe().find("[href='#/mentorship']").eq(0).click()

        // Asserting on an element in iFrame
        cy.iframe().find('.pricing-title').should('have.length', 2)


    })

})