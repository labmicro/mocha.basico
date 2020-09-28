const suma = require("../module/suma.js");
const expect = require("chai").expect;

describe("Suma con saturacion", function() {
    it("Sin desbordamiento", function() {
        var acumulador = 5;
        var {acumulador, error} = suma.acumular(acumulador, 3);
        expect(acumulador).to.equal(8);
        expect(error).to.equal(0);
    })
});
