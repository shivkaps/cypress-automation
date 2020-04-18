/// <reference types="Cypress" />

describe('Job Application', function () {

    // Navigating to the QA position url which was written to a file in the previous test case
    it("Navigating to the position url", function () {
        cy.readFile('cypress/data.txt').then((url) => { // Reading url value from a file
            cy.visit(url);
        })
    })

    // Clicking on Apply Position
    it("Applying for a position", function () {
        cy.get('.apply-buttons > :nth-child(1) > .polygot-parent').click()
    })

    // Filling all the application data
    it("Filling Application Data", function () {
        cy.get('input[name="cName"]').type('Shivam Kapoor')
        cy.get('input[name="cEmail"]').type('kapoor.shivam89@gmail.com')
        cy.get('input[name="cPhoneNumber"]').type('+4917630529791')
        cy.get('textarea[name="cQuestionTextarea"]').type('Userlane')
        cy.get('input[type="checkbox"]').check().should('be.checked')
    })

    // Uploading CV
    it("Uploading CV", function () {
        const fileName = 'CV.pdf';
        cy.get('#main-attachment').attachFile(fileName);
        cy.get('.fa.fa-paperclip').should('be.visible')
    })

    // Submitting the application
    it("Submit Application", function () {
        cy.log('Do not want to submit a duplication application')
        cy.get(' button[type="submit"]')
    })
})