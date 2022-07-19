alert("Bienvenidos a la Casa de la Tecnologia")
const CELULARES = "\n SAMSUNG S8\n XIAOMI P10\n IPHONE X"
const ACCESORIOS = "\n CARGADOR SAMGUNG S8 \n CARGADOR XIAOMI P10 \n CARGADOR IPHONE X"

alert("Elegi lo que estes necesitando")

let tipo = (prompt("CELULARES - ACCESORIOS")).toUpperCase();

if (tipo == "CELULARES") {
    alert(`LOS CELULARES DISPONIBLES HOY SON: ${CELULARES}`)
    let valor = prompt("Ingrese el celular que desea")

    switch (valor) {
        case 'SAMSUNG S8':
            alert("EL VALOR DEL CELULAR ES: $25000");
            break;
        case 'XIAOMI P10':
            alert("EL VALOR DEL CELULAR ES: $15700");
            break;
        case 'IPHONE X':
            alert("EL VALOR DEL CELULAR ES: $45800");
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
        case 'CARGADOR IPHONE X':
            alert("EL VALOR DEL ACCESORIO ES: $3000");
            break;

        default:
            alert("No tenemos stock");
            break;
    }

} else {
    alert("Opcion NO VALIDA")
}