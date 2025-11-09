# Depuração de Aplicação Node.js com Chrome DevTools

## Visão Geral

Este documento descreve o processo de depuração realizado em uma aplicação Node.js que carrega e filtra usuários de um arquivo JSON. Foram identificados e corrigidos diversos erros utilizando o Google Chrome DevTools.

## Problemas Identificados

### 1. **Arquivo JSON Malformado (`users.js`)**

**Problema Original:**

```javascript
{ "nome": "Ana", idade: 22 }
{ "nome": Carlos, "idade": 17 }
{ nome: "Beatriz", "idade": 30 }
```

**Erros:**

- Falta de aspas em algumas chaves e valores
- Ausência de vírgulas entre objetos
- Não está em formato de array
- Nome do arquivo incorreto (deveria ser `usuarios.json`)

**Correção (`usuarios.json`):**

```json
{
  "users": [
    { "nome": "Ana", "idade": 22 },
    { "nome": "Carlos", "idade": 17 },
    { "nome": "Beatriz", "idade": 30 }
  ]
}
```

### 2. **Variável Não Declarada**

**Problema Original:**

```javascript
function exibirMensagem() {
  console.log(mensagem); // Variável 'mensagem' não existe
}
```

**Erro:** A variável `mensagem` não foi declarada em nenhum escopo.

**Correção:**

```javascript
function exibirMensagem() {
  const mensagem = carregarUsuarios();
  return mensagem;
}
```

### 3. **Fluxo Assíncrono Incorreto**

**Problema Original:**

```javascript
function carregarUsuarios() {
  fs.readFile("usuarios.json", "utf8", (err, dados) => {
    // ...
    filtrarUsuarios(usuarios);
    // Não retorna nada
  });
}
```

**Erro:** A função `carregarUsuarios()` não retornava o resultado da operação assíncrona.

**Correção:**

```javascript
function carregarUsuarios() {
  fs.readFile("usuarios.json", "utf8", (err, dados) => {
    // ...
    const resultado = filtrarUsuarios(usuarios.users);
    return resultado;
  });
}
```

### 4. **Acesso Incorreto à Estrutura de Dados**

**Problema Original:**

```javascript
const usuarios = JSON.parse(dados);
filtrarUsuarios(usuarios); // Passa o objeto inteiro
```

**Erro:** O JSON tem estrutura `{ "users": [...] }`, mas estava sendo passado o objeto raiz.

**Correção:**

```javascript
const usuarios = JSON.parse(dados);
const resultado = filtrarUsuarios(usuarios.users); // Acessa o array correto
```

## Processo de Depuração com Chrome DevTools

### Passo 1: Iniciar o Node.js em Modo de Depuração

```bash
node --inspect app.js
# ou
node --inspect-brk app.js  # Para pausar na primeira linha
```

### Passo 2: Conectar o Chrome DevTools

1. Abrir o Chrome e acessar: `chrome://inspect`
2. Clicar em **"Open dedicated DevTools for Node"**
3. A aplicação aparecerá na lista de targets disponíveis

### Passo 3: Definir Breakpoints

- Colocar breakpoint na função `carregarUsuarios()`
- Colocar breakpoint na função `filtrarUsuarios()`
- Colocar breakpoint na função `exibirMensagem()`

### Passo 4: Inspecionar Variáveis

Usando o painel **Scope** do DevTools:

- Verificar que `mensagem` estava indefinida
- Inspecionar a estrutura do objeto `usuarios` após o parse
- Confirmar que `usuarios.users` contém o array correto

### Passo 5: Usar o Console

No console do DevTools:

```javascript
// Testar o parse do JSON
JSON.parse(dados);
// Verificar estrutura: { users: [...] }

// Testar acesso
usuarios.users; // Deve retornar o array
```

### Passo 6: Analisar a Call Stack

- Verificar a ordem de execução das funções
- Identificar que `exibirMensagem()` era chamada antes do callback assíncrono terminar
- Observar que o `return` dentro do callback não retornava para a função externa

## Ferramentas Utilizadas no DevTools

1. **Sources Panel**: Para navegar pelo código e definir breakpoints
2. **Scope Panel**: Para inspecionar variáveis locais e globais
3. **Call Stack**: Para entender o fluxo de execução
4. **Console**: Para testar expressões e ver erros
5. **Watch Expressions**: Para monitorar valores específicos durante a execução

## Resultado Final

Após as correções:

- ✅ Arquivo JSON válido com estrutura correta
- ✅ Acesso correto ao array de usuários
- ✅ Variáveis devidamente declaradas
- ✅ Fluxo de retorno de dados corrigido
- ✅ Aplicação executa sem erros

## Lições Aprendidas

1. **Validação de JSON**: Sempre validar a sintaxe do JSON antes de fazer parse
2. **Operações Assíncronas**: Entender que callbacks não retornam valores sincronamente
3. **Escopo de Variáveis**: Declarar todas as variáveis antes de usá-las
4. **Estrutura de Dados**: Verificar a estrutura exata dos objetos antes de acessá-los
5. **DevTools**: Usar breakpoints e inspeção de variáveis para identificar problemas rapidamente
