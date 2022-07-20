//Lista de compra de celulares
alert("Bienvenidos a la Casa de la Tecnologia")
let CELULARES = ['SAMSUNG A12', 'SAMSUNG A53', 'MOTOROLA MOTO G200', 'SAMSUNG NOTE 10', 'MOTOROLA MOTO E40', 'IPHONE XS'];
let ACCESORIOS = ['CARGADOR SAMGUNG S8', 'CARGADOR XIAOMI P10', 'CARGADOR IPHONE XS',];

CELULARES.push('IPHONE 11');

console.log(CELULARES);

alert("Elegi lo que estes necesitando")

let tipo = (prompt("CELULARES - ACCESORIOS")).toUpperCase();

if (tipo == "CELULARES") {
    alert(`LOS CELULARES DISPONIBLES HOY SON: ${CELULARES}`)
    let valor = prompt("Ingrese el celular que desea")

    switch (valor) {
        case 'SAMSUNG A12':
            alert("EL VALOR DEL CELULAR ES: $20000");
            break;
        case 'SAMSUNG A53':
            alert("EL VALOR DEL CELULAR ES: $35700");
            break;
        case 'MOTOROLA MOTO G200':
            alert("EL VALOR DEL CELULAR ES: $30800");
            break;
        case 'SAMSUNG NOTE 10':
            alert("EL VALOR DEL CELULAR ES: $33200");
            break;
        case 'MOTOROLA MOTO E40':
            alert("EL VALOR DEL CELULAR ES: $32400");
            break;
        case 'IPHONE XS':
            alert("EL VALOR DEL CELULAR ES: $55500");
            break;

        default:
            alert("No tenemos stock");
            break;

    }

} else if (tipo == "ACCESORIOS") {
    alert(`LOS ACCESORIOS DISPONIBLES SON: ${ACCESORIOS}`)
    let valor = prompt("Ingrese el accesorio que desea")

    switch (valor) {
        case 'CARGADOR SAMSUNG S8':
            alert("EL VALOR DEL ACCESORIO ES: $1500");
            break;
        case 'CARGARDOR XIAOMI P10':
            alert("EL VALOR DEL ACCESORIO ES: $950");
            break;
        case 'CARGADOR IPHONE XS':
            alert("EL VALOR DEL ACCESORIO ES: $3000");
            break;

        default:
            alert("No tenemos stock");
            break;
    }

} else {
    alert("Opcion NO VALIDA")
}

