let title = document.getElementById('title');
console.log(title.textContent);


let nombresApellidos1 = [
    document.getElementById('primerNombre1'), 
    document.getElementById('segundoNombre1'),
    document.getElementById('primerApellido1'),
    document.getElementById('segundoApellido1')];

let nombresApellidos2 = [
    document.getElementById('primerNombre2'), 
    document.getElementById('segundoNombre2'),
    document.getElementById('primerApellido2'),
    document.getElementById('segundoApellido2')];


function construirNombreCompleto(lista) {
    let textoFinal = '';
    for (let i=0; i < lista.length; i++){
        let texto = lista[i].textContent;

        if (texto !== ''){
            if (i>=2){
                texto = texto.toUpperCase();
            }
            textoFinal += texto + ' ';
        }   
    }
    return textoFinal;
}

function buscarCoincidencias(lista1, lista2, inicio, fin, tipo){
    for (let i = inicio; i <= fin; i++) {
        let item1 = lista1[i].textContent.toLowerCase();

        for (let j = inicio; j <= fin; j++) {
            let item2 = lista2[j].textContent.toLowerCase();
            
            if (item1 != '' && item1 === item2) {
                console.log(`Se encontro una coincidencia de ${tipo}: "${item1}"`);
                color = prompt(
                    `Se encontró una coincidencia de ${tipo}: "${item1}".\n` +
                    `¿Con qué color desea resaltarlo?\n` +
                    `Ej: red, blue, green, #FF0000, #00FF00, etc.`);

                lista1[i].style.color = `${color}`;
                lista2[j].style.color = `${color}`;
            } else{
                console.log(`No hay coincidencias entre ${tipo}`);
            }
        }
    }
}

let nombreCompleto1 = construirNombreCompleto(nombresApellidos1);
let nombreCompleto2 = construirNombreCompleto(nombresApellidos2);


console.log(`-----
integrante 1: "${nombreCompleto1}"
integrante 2: "${nombreCompleto2}"
----- `);

buscarCoincidencias(nombresApellidos1, nombresApellidos2, 0, 1, 'nombres');

let confirmacionApellidos = confirm('Desea buscar coincidencias entre apellidos?');

if (confirmacionApellidos) {
    buscarCoincidencias(nombresApellidos1, nombresApellidos2, 2, 3, 'apellidos')
}