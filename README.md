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
[Testes realizados](#Testes-realizados) • [Pré-Requisitos](#Pré-requisitos) • [Como executar](#Como-executar) • [Relatório de testes](#Relatórios)

#

## Testes realizados :pencil: <a name="Testes-realizados"></a> 
* Verificação de idade correta;
* Verificação de idade incorreta;
* Preço do jogo na plataforma Xbox One;
* Preço do jogo na plataforma PlayStation 4;
* Teste da calculadora de habilidades do personagem;
* Acesso ao vídeo de história do jogo.

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
