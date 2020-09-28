const suma = require('./module/suma.js')

var acumulador = 5;
var {acumulador, _} = suma.acumular(acumulador, 3);
console.log("Resultado: %d", acumulador);
