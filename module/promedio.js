const suma = require("./suma.js");

exports.promediar = (valores) => {

    var acumulador = 0;    
    for(var indice = 0; indice < valores.length; indice++) {
        var resultado = suma.acumular(acumulador, valores[indice]);
        if (resultado.error != 0) {
            return {promedio: 0, error: true};
        }
        acumulador = resultado.acumulador;
    }

    let promedio = acumulador / valores.length;
    return {promedio: promedio, error: false};
}

