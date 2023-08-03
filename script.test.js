/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test('TRUE', function () {
    var resultado = validarCPF('52843965888');
    expect(resultado).toBe(true);
})
test('FALSE', function () {
    var resultado = validarCPF(59999988875);
    expect(resultado).toBe(false);
})
