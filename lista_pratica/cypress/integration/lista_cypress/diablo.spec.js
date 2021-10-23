/// <reference types = "cypress"/>


describe('Cenário de teste: Testar as funcionalidades do site Diablo III', () => {

    it.skip('Caso de teste: Colocar uma idade inadequada', () => {
        cy.visit('https://us.diablo3.com/pt-br/age?r=%2Fpt-br%2Fclass%2Fwizard%2F');
        cy.get('#day').select(31);
        cy.get('#month').select('Agosto');
        cy.get('#year').select('2016');
        cy.get('.button-right').click();
        cy.get('.header-3').should('have.text', 'Você não tem permissão para visualizar este site no momento.')
        
    })

    it.skip('Caso de teste: Colocar uma idade adequada', () => {
        cy.visit('https://us.diablo3.com/pt-br/age?r=%2Fpt-br%2Fclass%2Fwizard%2F');
        cy.get('#day').select(31);
        cy.get('#month').select('Agosto');
        cy.get('#year').select('1999');
        cy.get('.button-right').click();
        cy.get('.header-2').should('contain.text', 'Arcanista');
        
    })

    it.skip('Caso de teste: Testar o preço do jogo no Xbox', () => {
        cy.visit('https://us.diablo3.com/pt-br/');
        cy.get('.menu-purchase > a > span').click();
        cy.get('.Button--xboxOne > .Button-link').click();
        cy.get('span[aria-disabled="false"]').should('contain.text', 'R$199,00');        
    })

    it('Caso de teste: Testar o preço do jogo no Xbox', () => {
        cy.visit('https://us.diablo3.com/pt-br/calculator/wizard');

        cy.get('#skills > :nth-child(2) > :nth-child(1)').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .skill-button > .skill-slot').trigger('mouseover').click();
         
    })

})