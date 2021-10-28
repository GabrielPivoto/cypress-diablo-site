<img align="right" width="250" height="194" src="https://www.seekpng.com/png/full/140-1404364_diablo-3-logo-png.png">

# ListaCypress
Projeto desenvolvido para testar o site do jogo [Diablo 3](https://us.diablo3.com/pt-br/)

<h4 align="center"> 
	Autores :pencil2:
</h4>

<p align="center">
 <a href="https://github.com/DarlanAjlune">Darlan Borges Ajlune</a> •
 <a href="https://github.com/GabrielPivoto">Gabriel Pivoto Ambrósio</a> 
</p>

#

## Sumário
* [Testes realizados](#Testes-realizados)
* [Pré-Requisitos](#Pré-requisitos)
* [Como executar](#Como-executar)
* [Relatório de testes](#Relatórios)

#

## Cenário de Teste :pencil: <a name="Testes-realizados"></a> 
- ```Testar as funcionalidades do site Diablo III```  
Casos de Teste:
	1. Colocar uma idade inadequada:  
		Através do ```cy.visit``` acessamos o site onde de início já pede para o usuário inserir sua idade. Em seguida, usamos o ```cy.get``` para "pegar" cada elemento da idade e através do ```select``` adicionamos as informações desejadas. Depois disso, utilizamos novamente o ```cy.get``` para "pegar" o botão e com o ```click```, simular o click no botão. Como neste teste colocamos uma idade menor que 18 anos, o site irá apresentar uma mensagem dizendo que o usuário não tem permissão de acessar o site e através dessa mensagem conseguimos fazer nossa assertiva para verificar se o teste passou. Para isso, inicialmente "pegamos" o elemento que contém a mensagem e em seguida com o ```should``` verificamos se tem aquela mensagem.
		```
		cy.visit('https://us.diablo3.com/pt-br/age?r=%2Fpt-br%2Fclass%2Fwizard%2F');
        cy.get('#day').select(31);
        cy.get('#month').select('Agosto');
        cy.get('#year').select('2016');
        cy.get('.button-right').click();
        cy.get('.header-3').should('have.text', 'Você não tem permissão para visualizar este site no momento.')
		```
	2. Colocar uma idade adequada:  
		Este caso de teste é parecido com o caso de teste acima, a diferença é que será informado uma idade maior que 18 anos. Logo, não podemos usar mais aquela mensagem para validar o teste. Trocamos pelo nome da personagem Arcanista que aparece assim que digita uma idade válida.
		```
		cy.visit('https://us.diablo3.com/pt-br/age?r=%2Fpt-br%2Fclass%2Fwizard%2F');
		cy.get('#day').select(31);
		cy.get('#month').select('Agosto');
		cy.get('#year').select('1999');
		cy.get('.button-right').click();
		cy.get('.header-2').should('contain.text', 'Arcanista');
		```
	3. Testar o preço do jogo no Xbox:  
		Primeiramente acessamos a página inicial do site e clickamos no botão "Compre D3". Em seguida clickamos no botão da loja do Xbox. Por fim criamos a assertiva para verificar se o preço mostrado é igual ao valor encontrado no dia que criamos os testes.
		```
		cy.visit('https://us.diablo3.com/pt-br/');
        cy.get('.menu-purchase > a > span').click();
        cy.get('.Button--xboxOne > .Button-link').click();
        cy.get('.typography-module__xdsCaption___2Ut3x > .Price-module__boldText___34T2w').should('contain.text', 'R$199,00+');
		```
	4. Testar o preço do jogo no PS4:  
		Este caso de teste é parecido com o caso de teste acima, a diferença esta no botão que clickamos e o valor.
		```
		cy.visit('https://us.diablo3.com/pt-br/');
        cy.get('.menu-purchase > a > span').click();
        cy.get('.Button--ps4 > .Button-link').click();
        cy.get('.psw-t-title-m').should('contain.text', 'R$ 249,00'); 
		```
	5. Teste a calculadora de habilidades:  
		Primeiramente acessamos a página onde se encontra essa calculadora de habilidades dos seguidores(personagens do jogo). Nesta página selecionamos algumas habilidade para o templário. Ao final comparamos se o nível requerido das habilidades selecionadas é igual a 20.
		```
		cy.visit('https://us.diablo3.com/pt-br/calculator/follower');
        cy.get('#templar > .tiers > .tier-0 > .button-1 > .d3-icon > .frame').click();
        cy.get('#templar > .tiers > .tier-1 > .button-2 > .d3-icon > .frame').click();
        cy.get('#templar > .tiers > .tier-2 > .button-5 > .d3-icon > .frame').click();
        cy.get('#templar > .tiers > .tier-3 > .button-7 > .d3-icon > .frame').click();
        cy.get('#templar > .meta-info > .tip > .required-level').should('contain.text',20);
		```
	6. Verificar se o vídeo da história é disponibilidade:  
		Para validar esse teste inicialmente temos que acessar a página inicial e informar a idade(tem que ser maior que 18 anos). Em seguida clickamos no botão "Guia" e na página seguinte clickamos no botão "O que é diablo III?". Na nova página que será aberto verificamos se existe o elemento onde contém o vídeo. Veja que o ```should``` apresenta vários parâmetros que podem ser utilizados, vai depender apenas da aplicação. Como bônus colocamos o vídeo para rodar. kkkk
		```
		cy.visit('https://us.diablo3.com/pt-br/');
        cy.get('.menu-game > a > span').click();
        cy.get('.game-index-callout').click();
        cy.get('#day').select(31);
        cy.get('#month').select('Agosto');
        cy.get('#year').select('1999');
        cy.get('.button-right').click();
        cy.get('#video-play').click();
        cy.get('#video-play').should('exist');
		```

#

## Pré-requitos :white_check_mark: <a name="Pré-requisitos"></a>
* Instalar o [Nodejs](https://nodejs.org/en/)

#

## Como executar :rocket: <a name="Como-executar"></a>
* Clone este repositório na sua máquina;
* Abra no seu editor a pasta **lista_pratica**;
* Instalar o Cypress pela linha de comando:
	```
	npm install cypress
	```
* Para abrir o Cypress e rodar os testes, execute um dos comandos a seguir:
	1. ```
		./node_modules/.bin/cypress open
		```
	2. ```
		npx cypress open
		```
#

## Relatório de testes :clipboard: <a name="Relatórios"></a>
1. Para exibir o relatório de testes no terminal, execute um dos comandos a seguir:
	1.  ```
		./node_modules/.bin/cypress run --spec 'cypress/integration/lista_cypress/**/'
		```
	2. ```
		npx cypress run --spec 'cypress/integration/lista_cypress/**/'
		```

2. Para gerar o relatório pelo Mochawesome:
	* Instale a dependência pelo comando:
		```
		npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
		```
	* Em seguida, execute o seguinte comando para criar o relatório html:
		```
		npx marge mochawesome.json
		```
#
