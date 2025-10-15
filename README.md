# Atividades Back-End - Grau Técnico

> Repositório de atividades práticas da disciplina de Back-End em JavaScript/Node.js

Este repositório contém as atividades desenvolvidas durante o curso de Análise e Desenvolvimento de Sistemas (turma DSI10) da instituição Grau Técnico, sob orientação da Profª Luana.

## 📋 Sobre o Projeto

O objetivo deste repositório é demonstrar o conhecimento adquirido em programação Back-End utilizando JavaScript e Node.js, servindo como material de avaliação da disciplina.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **JavaScript** - Linguagem de programação
- **pnpm** - Gerenciador de pacotes
- **Make** - Automação de compilação
- **Git & GitHub** - Controle de versão

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)
- [Make](https://www.gnu.org/software/make/)

### Instalando o pnpm

Caso não tenha o pnpm instalado:

```bash
npm install -g pnpm
```

### Instalando o Make

**No Debian/Ubuntu (apt)**

```bash
sudo apt update
sudo apt install make
```

**No CentOS/Fedora/RHEL (yum)**

```bash
sudo yum install make
```

**No Arch Linux (pacman)**

```bash
sudo pacman -S make
```

## ⚙️ Instalação e Configuração

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
```

2. **Instale as dependências**

```bash
pnpm install
```

3. **Execute o projeto**

```bash
pnpm start
```

## 🛠️ Comandos Disponíveis

### Comandos pnpm

| Comando | Descrição |
|---------|-----------|
| `pnpm install` | Instala todas as dependências do projeto |
| `pnpm start` | Executa o projeto |
| `pnpm add <pacote>` | Adiciona uma nova dependência |
| `pnpm add -D <pacote>` | Adiciona uma dependência de desenvolvimento |

### Comandos Make

O projeto possui um `Makefile` em cada diretório com comandos auxiliares:

#### Comandos dos `Makefile` dentro dos diretorios

| Comando | Descrição |
|---------|-----------|
| `make` | Cria um novo arquivo index.js (se não existir) |
| `make setup` | Configura as dependências do projeto |
| `make clean` | Remove o diretório node_modules |
| `make test` | Executa os casos de teste |

#### Comandos no `Makefile` principal na raiz do Projeto

| Comando | Descrição |
|---------|-----------|
| `make setup` | Faz o setup de todos os diretórios |
| `make clean` | Remove o **node_modules/** de todos os diretórios |
| `make all` | Faz `make clean` e depois `make setup` |

## 📚 Atividades Implementadas

- Objetos Iteráveis
- Async-Await e Promisses
- Criação de API em Nodejs e Métodos HTTP
- Análise de Frameworks em Node.js em casos específicos
- Exércicio em Node.js com o framework Express.js
- Validação de dados usando express-validator com o framework Express.js no Node.js
- Adicionando exércicio de banco de dados usando a ORM chamada Sequelize e usando as tecnologias usadas anteriormente também

## 👩‍🏫 Créditos

- **Professora:** Luana
- **Instituição:** Grau Técnico
- **Curso:** Análise e Desenvolvimento de Sistemas
- **Turma:** DSI10

## 📄 Licença

Este projeto é de uso acadêmico e foi desenvolvido para fins educacionais.

---

**Desenvolvido com 💙 para avaliação acadêmica**
