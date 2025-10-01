const validarIdade = require("./validaridade");

// Agrupamos os testes relacionados à função validarIdade em um bloco 'describe'.
// Isso melhora a organização e a leitura dos resultados dos testes.
describe("Testes da função validarIdade", () => {

  // Teste para o caso de sucesso (idade maior que 18).
  test("deve resolver com 'Acesso permitido' para idade maior que 18", () => {
    // Verificamos se a Promise é resolvida com a mensagem esperada.
    return expect(validarIdade(20)).resolves.toBe("Acesso permitido");
  });

  // Teste para o caso de borda (idade igual a 18).
  test("deve resolver com 'Acesso permitido' para idade igual a 18", () => {
    // É importante testar os limites para garantir que a lógica está correta.
    return expect(validarIdade(18)).resolves.toBe("Acesso permitido");
  });

  // Teste para o caso de falha (idade menor que 18).
  test("deve rejeitar com 'Acesso negado' para idade menor que 18", () => {
    // Verificamos se a Promise é rejeitada com a mensagem de erro esperada.
    return expect(validarIdade(15)).rejects.toBe("Acesso negado");
  });
});
