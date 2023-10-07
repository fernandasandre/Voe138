describe('Buscar por voos', ()=> {
    
    context('Não Logado', () => {

        const massaVoos = require('../../fixtures/massaVoos')

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

            cy.get('input.btn.btn-small')
                .eq(0)
                .click()
            
            cy.title().should('eq', 'BlazeDemo Purchase' )

            cy.get('#inputName').type('Jonas')

            cy.get('#cardType')
                .select('American Express')

            cy.get('#rememberMe')
                .check()

            cy.get('.btn.btn-primary').click()

            cy.title().should('eq', 'BlazeDemo Confirmation')
            
            cy.get('.container h1')
                .should('have.text', 'Thank you for your purchase today!')

            cy.get('.table').contains('td', 'Amount')
                .siblings()
                .should('contain', '555 USD')
            
        });

        massaVoos.array.forEach(({origem,destino, voo, nome, bandeira})=>{
            it(`Buscar Voos entre ${origem} e ${destino} - Data Driven`, () => {

                cy.title().should('eq', 'BlazeDemo')

                cy.get('select.form-inline')
                    .eq(0)
                    .select(origem)

                cy.get('select.form-inline')
                    .eq(1)
                    .select(destino)
                
                cy.get('.btn.btn-primary')
                    .click()

                cy.title().should('eq', 'BlazeDemo - reserve')

                cy.get('.container h3')
                    .should('have.text', `Flights from ${origem} to ${destino}: `)

                cy.get('input.btn.btn-small')
                    .eq(0)
                    .click()
            
                cy.title().should('eq', 'BlazeDemo Purchase' )

                cy.get('#inputName').type(nome)

                cy.get('#cardType')
                    .select(bandeira)

                cy.get('#rememberMe')
                    .check()

                cy.get('.btn.btn-primary').click()

                cy.title().should('eq', 'BlazeDemo Confirmation')
                
                cy.get('.container h1')
                    .should('have.text', 'Thank you for your purchase today!')

                cy.get('.table').contains('td', 'Amount')
                    .siblings()
                    .should('contain', '555 USD')
                
            });
                
            });

        });

    });

