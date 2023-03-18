// v1 función tradicional
function sumar(numero1, numero2) {
    return numero1 + numero2
}

const resultado = sumar(3, 7)

// función (arrow function)
const sumarFlecha1 = (numero1, numero2) => {
    // se usa llaves cuando tiene muchas lineas de código o con retorno explicito
    //
    //
    //
    //
    return numero1 + numero2
}

//Se usa parentesis cuando no hay retorno explicito, se hace operacion directamente
const sumarFlecha2 = (numero1, numero2) => (
    numero1 + numero2
)

const sumarFlecha3 = (numero1, numero2) => numero1 + numero2