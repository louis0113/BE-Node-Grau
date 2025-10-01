const axios = require('axios');
const { consultarTresCEPs } = require('./tresvisitas');

// Informa ao Jest para simular o módulo 'axios'
jest.mock('axios');

describe('Testando a consulta de CEPs', () => {

  test('deve retornar os dados de três CEPs diferentes', async () => {
    // Cria dados de resposta simulados para cada CEP
    const mockData = {
      '01001000': { data: { logradouro: 'Praça da Sé' } },
      '04538133': { data: { logradouro: 'Avenida Brigadeiro Faria Lima' } },
      '05425070': { data: { logradouro: 'Rua Butantã' } }
    };

    // Configura o mock do axios.get para retornar uma resposta diferente
    // com base no CEP que está sendo consultado na URL.
    axios.get.mockImplementation(url => {
      if (url.includes('01001000')) {
        return Promise.resolve(mockData['01001000']);
      } 
      if (url.includes('04538133')) {
        return Promise.resolve(mockData['04538133']);
      }
      if (url.includes('05425070')) {
        return Promise.resolve(mockData['05425070']);
      }
      return Promise.reject(new Error('CEP não encontrado no mock'));
    });

    // Executa a função que queremos testar
    const resultado = await consultarTresCEPs();

    // Verifica se o resultado está no formato esperado
    expect(resultado).toEqual([
      { logradouro: 'Praça da Sé' },
      { logradouro: 'Avenida Brigadeiro Faria Lima' },
      { logradouro: 'Rua Butantã' }
    ]);

    // Opcional: Verifica se o axios.get foi chamado 3 vezes
    expect(axios.get).toHaveBeenCalledTimes(3);
  });

});
