const contarAte = require('./count');

describe('contarAte', () => {
  // We are resetting the module to ensure that our tests are independent
  beforeEach(() => {
    jest.resetModules();
  });

  test('should resolve with 1 on the first call', async () => {
    const contarAte = require('./count');
    await expect(contarAte()).resolves.toBe(1);
  });

  test('should resolve with 2 on the second call if called twice', async () => {
    const contarAte = require('./count');
    await contarAte(); // First call
    await expect(contarAte()).resolves.toBe(2); // Second call
  });
});
