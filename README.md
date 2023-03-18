# Jogo de loteria

Parte front-end do projeto.

## Instruções para rodar o projeto:
para instalar as dependencias do projeto: npm install
para rodar o projeto : ng serve

## Para criar um projeto com angular 10 e primeng 10:
Instale o node versão: 14.21.3

Rode o comando: npm install -g @angular/cli@10.2.4

no arquivo package.json, coloque essas dependencias:
"primeflex": "^2.0.0",
"primeicons": "^4.0.0",
"primeng": "^10.0.0",

no arquivo angular.json, coloque esses paths no style.css:

"styles": [
              "src/styles.scss",
              "node_modules/primeng/resources/themes/saga-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeflex/primeflex.css"
            ],

Rode npm install
Rode ng serve.
