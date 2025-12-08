/* Punto 1 */
let title = document.getElementById('title');
console.log(title.textContent);


/* Punto 3 */
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

let nombreCompleto1 = '';
let nombreCompleto2 = '';

for (let i = 0; i < nombresApellidos1.length; i++) {
    if (nombresApellidos1[i].textContent !== '') {
        let texto1 = nombresApellidos1[i].textContent;
        if (i>=2){
            texto1 = texto1.toUpperCase();
        }
        nombreCompleto1 += texto1 + ' ';
    }
    if (nombresApellidos2[i].textContent !== '') {
        texto2 = nombresApellidos2[i].textContent;
        if (i>=2){
            texto2 = texto2.toUpperCase();
        }
        nombreCompleto2 += texto2 + ' ';
    }
}

console.log(`-----
integrante 1: "${nombreCompleto1}"
integrante 2: "${nombreCompleto2}"
----- `);


/* Punto 4 */


