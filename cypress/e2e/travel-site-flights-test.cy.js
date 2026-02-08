///<reference types = "Cypress"/>
import {data} from '../fixtures/params.json'

describe('The flight tab test will verify the flight functionality', () => {
    const flights_tab = '[data-cy="Flight"]'
    //const origin_placeholder = '[placeholder="City or airport"][name="origin"]';
    const origin_placeholder = '[name="origin"]'
    const destination_placeholder = '[name="destination"]'
    const checkin ='#input-start-2'
    const checkout ='#input-end-2'
    const business_radio_button = '[id="business"]'
    const economy_radio_button ='[id="economy"]'
    const f_class_radio_button ='[id="f_class"]'

    before(() => {
       cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get(flights_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })


    it('navigate to the flight tab', () => {
        cy.screenshot("test1")
        cy.get(origin_placeholder).should("be.visible")
        cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flights_tab).invoke('text').should('eq', "flight")
    })

    it('populates origin and destination', () => {
        data.forEach(element =>{
            // cy.pause();
            cy.get(origin_placeholder).clear().type(element.from).invoke("val").should('eq',element.from)
            // cy.pause();
            cy.get(destination_placeholder).clear().type(element.to).invoke("val").should('eq',element.to)
        })
        
       
    })
    it('populates check-in and check-out dates', () => {
        cy.get(checkin).clear()
        cy.get(checkin).type("10/10/2025").invoke("val").should('eq',"10/10/2025")
        cy.get(checkout).clear()
        cy.get(checkout).type("10/10/2026").invoke("val").should('eq',"10/10/2026")
    })
    it('check radio buttons', () => {
        cy.get(business_radio_button).click().should('be.checked')
        cy.get(economy_radio_button).click().should('be.checked')
        cy.get(f_class_radio_button).click().should('be.checked')
    })
})