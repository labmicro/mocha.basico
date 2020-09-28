const suma = require("../module/suma.js");
const expect = require("chai").expect;

describe("Suma con saturacion", function() {
    it("Sin desbordamiento", function() {
        var acumulador = 5;
        var {acumulador, error} = suma.acumular(acumulador, 3);
        expect(acumulador).to.equal(8);
        expect(error).to.equal(0);
    })

    it("Maximo positivo", function() {
        var acumulador = 32765;
        var {acumulador, error} = suma.acumular(acumulador, 3);
        expect(acumulador).to.equal(32767);       
        expect(error).to.equal(1);
    })

    it("Maximo negativo", function() {
        var acumulador = -32766;
        var {acumulador, error} = suma.acumular(acumulador, -3);
        expect(acumulador).to.equal(-32768);
        expect(error).to.equal(-1);
    })

});
