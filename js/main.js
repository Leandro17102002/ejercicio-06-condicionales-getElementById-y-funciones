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

for (let i = 0; i < 2; i++) { 
    let n1 = nombresApellidos1[i].textContent.toLowerCase();

    for (let j = 0; j < 2; j++) { 
        let n2 = nombresApellidos2[j].textContent.toLowerCase();

        if (n1 !== '' && n1 === n2) {
            console.log(`Se encontro una coincidencia de nombres: "${n1}"`);
            color = prompt(`Se encontro una coincidencia de nombres: "${n1}".
                Con que color desea resaltarlo? (ingrese el nombre del color en ingles, por ejemplo: red, blue, green, etc., o bien su codigo hexadecimal, por ejemplo: #FF0000, #00FF00, etc.)`);
            nombresApellidos1[i].style.color = `${color}`;
            nombresApellidos2[j].style.color = `${color}`;
        } else {
            console.log('No hay coincidencias entre nombres.');
        }
    }
}

confirmacion = confirm('Desea buscar coincidencias entre apellidos?');

if (confirmacion) {
    for (let i = 2; i < 4; i++) { 
        let a1 = nombresApellidos1[i].textContent.toLowerCase();

        for (let j = 2; j < 4; j++) { 
            let a2 = nombresApellidos2[j].textContent.toLowerCase();
            if (a1 !== '' && a1 === a2) {
                console.log(`Se encontro una coincidencia de apellidos: "${a1}"`);
                color = prompt(`Se encontro una coincidencia de apellidos: "${a1}".
                    Con que color desea resaltarlo? (ingrese el nombre del color en ingles, por ejemplo: red, blue, green, etc., o bien su codigo hexadecimal, por ejemplo: #FF0000, #00FF00, etc.)`);
                nombresApellidos1[i].style.color = `${color}`;
                nombresApellidos2[j].style.color = `${color}`;
            } else {
                console.log('No hay coincidencias entre apellidos.');
            }
        }
    }
}