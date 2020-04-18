/// <reference types="Cypress" />

describe('My second test suite', function () {

    it("Open the website", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Handling alerts and checking for the alert test
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // Handling confirm alert
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Opening child tabs in the same window
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahul')
        // Navigating back and forward
        cy.go("back")
        cy.go("forward")

    })
})
