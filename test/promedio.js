const assert = require("chai").assert;
const sinon = require("sinon");
const proxy = require("proxyquire");

describe("Promedio", function() {
    it("Sin desbordamiento", function() {
        const acumular = sinon.stub().callsFake((acumulador, operando) => {
            return {acumulador: acumulador + operando, error: 0};
        })
        const vector = [1,2,3];

        var promedio = proxy("../module/promedio.js", { '../module/suma.js': {'acumular': acumular }});
        var resultado = promedio.promediar(vector);

        assert.equal(resultado.promedio, 2);
        assert.isFalse(resultado.error);
    })
});
