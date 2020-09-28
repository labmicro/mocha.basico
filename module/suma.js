exports.acumular = (acumulador, operando) => {
    const positivo = 0x7FFF;
    const negativo = -1 * (positivo + 1);

    var suma = acumulador + operando;

    if (suma > positivo) {
        return {acumulador: positivo, error: 1};
    } else if (suma < negativo) {
        return {acumulador: negativo, error: -1};
    } else {
        return {acumulador: suma, error: 0};
    }
}

