const timeout = require("./timeout");

test('', () => {
    expect(timeout()).resolves.toBe("Tempo esgotado");
})
