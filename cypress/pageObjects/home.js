class homePage {


    getnameBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGenderSelect() {
        return cy.get('#exampleFormControlSelect1')
    }

    getRadioButton() {
        return cy.get('#inlineRadio3')
    }

    getShopButton() {
        return cy.get(':nth-child(2) > .nav-link')
    }

}
export default homePage;

