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
        cy.get('.typography-module__xdsCaption___2Ut3x > .Price-module__boldText___34T2w').should('contain.text', 'R$199,00+');        
    })


    it.skip('Caso de teste: Testar o preço do jogo no PS4', () => {
        cy.visit('https://us.diablo3.com/pt-br/');
        cy.get('.menu-purchase > a > span').click();
        cy.get('.Button--ps4 > .Button-link').click();
        cy.get('.psw-t-title-m').should('contain.text', 'R$ 249,00');        
    })


    it.skip('Caso de teste: Testar a calculadora de habilidades', () => {

        cy.visit('https://us.diablo3.com/pt-br/calculator/follower');
        cy.get('#templar > .tiers > .tier-0 > .button-1 > .d3-icon > .frame').click();
        cy.get('#templar > .tiers > .tier-1 > .button-2 > .d3-icon > .frame').click();
        cy.get('#templar > .tiers > .tier-2 > .button-5 > .d3-icon > .frame').click();
        cy.get('#templar > .tiers > .tier-3 > .button-7 > .d3-icon > .frame').click();
        cy.get('#templar > .meta-info > .tip > .required-level').should('contain.text',20);
         
    })

    it('Caso de teste: Rodar o vídeo da história', () => {
        cy.visit('https://us.diablo3.com/pt-br/');
        cy.get('.menu-game > a > span').click();
        cy.get('.game-index-callout').click();
        cy.get('#day').select(31);
        cy.get('#month').select('Agosto');
        cy.get('#year').select('1999');
        cy.get('.button-right').click();
        cy.get('#video-play').click();
        cy.get('#video-play').should('exist');
        
    })

})

