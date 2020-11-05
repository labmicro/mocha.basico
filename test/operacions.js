const promedio = require("../module/promedio.js");
const assert = require("chai").assert;

describe("Promedio", function() {
    it("Sin desbordamiento", function() {
        const vector = [1,2,3];

        var resultado = promedio.promediar(vector);

        assert.equal(resultado.promedio, 2);
        assert.isFalse(resultado.error);
    })

    it("Con desbordamiento", function() {
        const vector = [32765, 3];

        var resultado = promedio.promediar(vector);
        
        assert.equal(resultado.promedio, 0);
        assert.isTrue(resultado.error);
    })
});
