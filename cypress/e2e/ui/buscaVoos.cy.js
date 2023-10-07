describe('Buscar por voos', ()=> {
    
    context('Não Logado', () => {

        beforeEach(() =>{

            cy.visit('/')

        })

        it('Buscar Voos entre São Paolo e Cairo', () => {

            cy.title().should('eq', 'BlazeDemo')

            cy.get('select.form-inline')
                .eq(0)
                .select('São Paolo')

            cy.get('select.form-inline')
                .eq(1)
                .select('Cairo')
            
            cy.get('.btn.btn-primary')
                .click()

            cy.title().should('eq', 'BlazeDemo - reserve')

            cy.get('.container h3')
                .should('have.text', 'Flights from São Paolo to Cairo: ')
            
        });

    });

})