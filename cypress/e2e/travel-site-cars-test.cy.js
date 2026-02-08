///<reference types = "Cypress"/>

describe('The cars tab test will verify the cars functionality', () => {
    const car_tab = '[data-cy="Car"]'
    const location_input = '[name=location]'
    const drop_of_input = '[name=dropoff]'
    const car_group_list = '[name=car-group]'
    const driver_age_list = '[name=driver-age]'

    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get(car_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })

    it('chooses location', () => {
        cy.get(location_input).type("Toronto").should('have.value', 'Toronto')

    })
    it('chooses drop off date', () => {
        cy.get(drop_of_input).clear()
        cy.get(drop_of_input).type("21/10/2023").should('have.value', '21/10/2023')

    })

    it('chooses list of cars', () => {
        cy.get(car_group_list).should('be.visible')
        cy.get(car_group_list).select('Group 1', { force: true })
        cy.get('[title = "Group 1"]').should('be.visible')

        cy.get(car_group_list).select('Group 2', { force: true })
        cy.get('[title = "Group 2"]').should('be.visible')

        cy.get(car_group_list).select('Group 3', { force: true })
        cy.get('[title = "Group 3"]').should('be.visible')
    })

    it('chooses drivers age', () => {
        cy.get(driver_age_list).should('be.visible')
        cy.get(driver_age_list).select('23', { force: true })
        cy.get('[title = "23"]').should('be.visible')
        cy.get(driver_age_list).select('24', { force: true }).should('have.value','24')
        cy.get(driver_age_list).select('25', { force: true }).should('have.value','25')
        cy.get(driver_age_list).select('26', { force: true }).should('have.value','26')
      
     //   cy.get('[title = "26"]').should('be.visible')  - мой вариант
    })
})