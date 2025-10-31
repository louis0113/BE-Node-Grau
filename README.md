# Atividades Back-End - Grau Técnico

> Repositório de atividades práticas da disciplina de Back-End em JavaScript/Node.js

Este repositório contém as atividades desenvolvidas durante o curso de Análise e Desenvolvimento de Sistemas (turma DSI10) da instituição Grau Técnico, sob orientação da Profª Luana.

## 📋 Sobre o Projeto

O objetivo deste repositório é demonstrar o conhecimento adquirido em programação Back-End utilizando JavaScript e Node.js, servindo como material de avaliação da disciplina. O projeto abrange desde conceitos fundamentais de JavaScript até implementação de APIs REST completas com autenticação JWT e integração com bancos de dados.

## 🚀 Tecnologias Utilizadas

- **Node.js** (v20+) - Ambiente de execução JavaScript
- **JavaScript** - Linguagem de programação
- **Express.js** (v5.1.0) - Framework web minimalista
- **Sequelize** (v6.37.7) - ORM para Node.js
- **MySQL2** - Driver de banco de dados MySQL
- **JWT** (jsonwebtoken) - Autenticação baseada em tokens
- **bcryptjs** - Hash de senhas
- **express-validator** - Validação de dados
- **Winston** - Sistema de logging
- **dotenv** - Gerenciamento de variáveis de ambiente
- **pnpm** (v10.17.1+) - Gerenciador de pacotes
- **Make** - Automação de compilação
- **Git & GitHub** - Controle de versão

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 20.19.5 ou superior)
- [pnpm](https://pnpm.io/) (versão 10.17.1 ou superior)
- [Make](https://www.gnu.org/software/make/)
- [MySQL](https://www.mysql.com/) (para projetos com banco de dados)

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

### Configurando o MySQL

Para os projetos que utilizam banco de dados, certifique-se de ter o MySQL instalado e em execução. Crie um arquivo `.env` baseado no `.env.example` disponível nos diretórios dos projetos.

## ⚙️ Instalação e Configuração

1. **Clone o repositório**

```bash
git clone https://github.com/louis0113/BE-Node-Grau.git
cd BE-Node-Grau
```

2. **Instale as dependências de todos os projetos**

```bash
make setup
```

Ou instale as dependências de um projeto específico:

```bash
cd <nome-do-diretorio>
make setup
```

3. **Configure as variáveis de ambiente (para projetos com banco)**

```bash
cd Banco  # ou JWT
cp .env.example .env
# Edite o arquivo .env com suas credenciais
```

4. **Execute um projeto específico**

```bash
cd <nome-do-diretorio>
make run
```

## 🛠️ Comandos Disponíveis

### Comandos pnpm

| Comando                | Descrição                                   |
| ---------------------- | ------------------------------------------- |
| `pnpm install`         | Instala todas as dependências do projeto    |
| `pnpm start`           | Executa o projeto                           |
| `pnpm test`            | Executa os testes (quando disponível)       |
| `pnpm add <pacote>`    | Adiciona uma nova dependência               |
| `pnpm add -D <pacote>` | Adiciona uma dependência de desenvolvimento |

### Comandos Make

O projeto possui um `Makefile` em cada diretório com comandos auxiliares:

#### Comandos dos `Makefile` dentro dos diretórios

| Comando      | Descrição                                                 |
| ------------ | --------------------------------------------------------- |
| `make`       | Cria os arquivos principais do projeto (se não existirem) |
| `make run`   | Executa o projeto com pnpm start                          |
| `make setup` | Instala as dependências do projeto                        |
| `make clean` | Remove o diretório node_modules                           |
| `make test`  | Executa os casos de teste (quando disponível)             |
| `make log`   | Cria arquivo de log (alguns projetos)                     |

#### Comandos no `Makefile` principal na raiz do Projeto

| Comando      | Descrição                                         |
| ------------ | ------------------------------------------------- |
| `make setup` | Faz o setup de todos os diretórios do repositório |
| `make clean` | Remove o **node_modules/** de todos os diretórios |
| `make all`   | Faz `make clean` e depois `make setup`            |

## 📚 Estrutura do Repositório

O repositório está organizado em diferentes diretórios, cada um contendo exercícios específicos:

```
BE-Node-Grau/
├── Node/                    # Servidor HTTP básico com Winston
├── Express/                 # Introdução ao Express.js com rotas e logging
├── Express Validator/       # Validação de dados com express-validator
├── Banco/                   # Integração com MySQL usando Sequelize
├── Erros/                   # Tratamento de erros com middlewares
├── JWT/                     # Autenticação e autorização com JWT
├── Objetos Iteraveis/       # Conceitos de iteradores e generators
├── Requisicoes/             # Exercícios sobre requisições HTTP
│   ├── Exercicio1/
│   ├── Exercicio2/
│   ├── ...
│   └── Exercicio8/
├── Frameworks/              # Documentação sobre frameworks Node.js
└── MicroeSOA/              # Comparação entre SOA e Microserviços
```

## 📖 Atividades Implementadas

### 1. **Objetos Iteráveis e Generators** (`Objetos Iteraveis/`)

- Implementação de iteradores customizados
- Uso de generators (`function*`)
- Sistema de playlist com yield
- Testes unitários com Jest

### 2. **Servidor HTTP Básico** (`Node/`)

- Criação de servidor HTTP nativo do Node.js
- Roteamento básico (`/`, `/contato`, `/servicos`)
- Sistema de logging com Winston
- Logs estruturados em JSON

### 3. **Express.js - Fundamentos** (`Express/`)

- Introdução ao framework Express
- Rotas GET e POST
- Sistema de logging avançado
- Manipulação de requisições e respostas

### 4. **Validação de Dados** (`Express Validator/`)

- Validação de entrada com express-validator
- Middleware de validação customizado
- Mensagens de erro personalizadas
- Validação de tipos de dados (string, integer, email)

### 5. **Integração com Banco de Dados** (`Banco/`)

- ORM Sequelize com MySQL
- Modelo de dados Pet (nome, tipo, idade, adotado)
- Operações CRUD completas
- Sincronização automática de tabelas
- Redirects customizados por tipo de animal

### 6. **Tratamento de Erros** (`Erros/`)

- Middleware centralizado de erros
- Tratamento de erros síncronos e assíncronos
- Status codes HTTP apropriados
- Validação de entrada de usuários

### 7. **Autenticação JWT** (`JWT/`)

- Sistema completo de autenticação
- Registro e login de usuários
- Hash de senhas com bcryptjs
- Tokens JWT com expiração
- Middleware de autenticação
- Controle de acesso baseado em roles (RBAC)
- Rotas protegidas por permissão

### 8. **Requisições HTTP** (`Requisicoes/`)

- 8 exercícios progressivos sobre requisições
- Métodos HTTP (GET, POST, PUT, DELETE)
- Manipulação de parâmetros e query strings
- Respostas JSON estruturadas

### 9. **Documentação Técnica**

- **Frameworks** (`Frameworks/Frameworks.md`): Análise comparativa de Express.js, Fastify e Next.js
- **SOA vs Microserviços** (`MicroeSOA/SOAMicro.md`): Comparação detalhada entre arquiteturas

## 🔑 Configuração de Variáveis de Ambiente

Projetos que requerem configuração (Banco, JWT):

```env
# Database
DATABASE_USER=root
DATABASE_PASS=sua_senha_aqui
DATABASE_NAME=pets_db

# Server
PORT=3000

# JWT (apenas no projeto JWT)
SECRET_KEY='sua_chave_secreta_aqui'
```

## 🧪 Executando Testes

Para rodar os testes (quando disponíveis):

```bash
cd "Objetos Iteraveis"
make test
# ou
pnpm test
```

## 📝 Exemplos de Uso

### Servidor Express com Logging

```bash
cd Express
make setup
make run
# Servidor rodando em http://localhost:3000
```

### API com Banco de Dados

```bash
cd Banco
cp .env.example .env
# Configure suas credenciais MySQL no .env
make setup
make run
# API rodando em http://localhost:3000/api
```

### Sistema de Autenticação JWT

```bash
cd JWT
cp .env.example .env
# Configure DATABASE_* e SECRET_KEY no .env
make setup
make run
# Endpoints disponíveis:
# POST /api/auth/register
# POST /api/auth/login
# GET /api/products/profile (requer token)
# POST /api/products/admin (requer token + role admin)
```

## 🎯 Conceitos Abordados

- **JavaScript Avançado**: Iteradores, Generators, Async/Await, Promises
- **Node.js**: HTTP, File System, Eventos
- **Express.js**: Middlewares, Rotas, Request/Response
- **Banco de Dados**: ORM, Migrations, Models, Relações
- **Segurança**: JWT, Bcrypt, Validação de Dados, RBAC, Express-Session
- **Arquitetura**: REST API, MVC, Middlewares, Error Handling
- **DevOps**: Logging, Variáveis de Ambiente, Scripts de Automação

## 👩‍🏫 Créditos

- **Professora:** Luana
- **Instituição:** Grau Técnico
- **Curso:** Análise e Desenvolvimento de Sistemas
- **Turma:** DSI10
- **Desenvolvedor:** Luiz Henrique Ramos de Souza

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

Este projeto é de uso acadêmico e foi desenvolvido para fins educacionais.

---

**Desenvolvido com 💙 para avaliação acadêmica**
