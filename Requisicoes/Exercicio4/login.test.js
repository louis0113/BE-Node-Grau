// Importa a função de login que será testada
const login = require("./login");

// Agrupa todos os testes relacionados à função de login
describe('Testes para a função de login', () => {

  // Teste para o cenário de sucesso
  test('deve resolver com "Login bem-sucedido" para credenciais corretas', async () => {
    // Usamos await para esperar a promessa ser resolvida e então verificamos o resultado
    await expect(login("admin", "1234")).resolves.toBe("Login bem-sucedido");
  });

  // Teste para o cenário de falha com senha incorreta
  test('deve rejeitar com "Credenciais inválidas" para senha incorreta', async () => {
    // Usamos await para esperar a promessa ser rejeitada e então verificamos o erro
    await expect(login("admin", "senhaerrada")).rejects.toBe("Credenciais inválidas");
  });

  // Teste para o cenário de falha com usuário incorreto
  test('deve rejeitar com "Credenciais inválidas" para usuário incorreto', async () => {
    await expect(login("usuarioerrado", "1234")).rejects.toBe("Credenciais inválidas");
  });

  // Testes parametrizados para vários casos de credenciais inválidas
  // A função test.each executa o mesmo teste para cada array de argumentos fornecido.
  describe('quando as credenciais são inválidas', () => {
    test.each([
      ['usuario-errado', '1234'],          // Usuário incorreto, senha correta
      ['admin', 'senha-errada'],            // Usuário correto, senha incorreta
      ['outro-usuario', 'outra-senha'], // Ambos incorretos
      [null, '1234'],                      // Usuário nulo
      ['admin', undefined],                 // Senha indefinida
    ])('deve rejeitar para usuário "%s" e senha "%s"', async (usuario, senha) => {
      // O teste espera que a chamada de login com estes dados seja rejeitada
      await expect(login(usuario, senha)).rejects.toBe("Credenciais inválidas");
    });
  });

});
