# Atividades Back-End - Grau Técnico
Esse simples repositório no Github vai ser um grande compilado das atividades passadas pela Profº Luana.
Aqui se encontra atividades sobre programação Back-End em Javascript usando o ambiente NodeJs.
---
## Tecnologias
- Git & Github
- Javascript
- NodeJS
- pnpm
---
## Instalação
### Pré-requisitos
    - Node.js (versão 20 ou superior)
- pnpm (gerenciador de pacotes)
### Instalando o pnpm
    Se você ainda não tem o pnpm instalado, execute:
    bash
    npm install -g pnpm

### Configurando o projeto
    1. Clone o repositório:
    bash
    git clone <url-do-repositorio>
    cd <nome-do-repositorio>

    2. Instale as dependências:
    bash
    pnpm install

    3. Execute o projeto:                                                                 bash
    pnpm start

    ---
## Objetivo
    Mostrar o conhecimento adquirido ao longo da matéria de Back-end para avaliação do curso de Análise e Desenvolvimento de Sistemas
    da turma DSI10 da instituição Grau Técnco!
## Atividades Pedidas
    - Objetos Iteraveis
    ---
## Comandos úteis
    bash
### Instalar dependências
    pnpm install
### Executar o projeto
    pnpm start
### Adicionar uma nova dependência
    pnpm add <nome-do-pacote>
### Adicionar uma dependência de desenvolvimento
    pnpm add -D <nome-do-pacote>

    Há a opção de usar os comandos listados no Makefile do projeto como as citadas abaixo:
    ---
### Cria um novo index.js(se isso não foi criado)
    `make`
### Faz o setup das dependências para os pacotes Node
    `make setup`
### Apaga o diretório "node_modules"
    `make clean`
### Realiza os casos de teste
    `make test`
