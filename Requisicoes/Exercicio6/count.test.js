describe('Contador', () => {

    beforeEach(() => {
        // Limpa o cache de módulos do Jest antes de cada teste. 
        // Isso garante que cada teste receba uma instância "nova" do módulo count,
        // com a variável 'x' reiniciada para 0.
        jest.resetModules();
    });

    test('Deve incrementar o contador para 1', () => {
        // Dentro do teste, importamos uma versão nova do módulo.
        const { increment, getCount } = require('./count');
        increment();
        expect(getCount()).toBe(1);
    });

    test('Deve começar de 0 novamente em um novo teste e incrementar para 2', () => {
        // Graças ao jest.resetModules(), este teste também começa com x = 0.
        const { increment, getCount } = require('./count');
        increment();
        increment();
        expect(getCount()).toBe(2);
    });

    test('O contador deve ser 0 se não for incrementado', () => {
        const { getCount } = require('./count');
        expect(getCount()).toBe(0);
    });
});
