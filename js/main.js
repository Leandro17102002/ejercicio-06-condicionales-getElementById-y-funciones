let form = document.getElementById('formIntegrantes');

let nombresApellidos1 = [
    document.getElementById('primerNombre1'),
    document.getElementById('segundoNombre1'),
    document.getElementById('primerApellido1'),
    document.getElementById('segundoApellido1')
];

let nombresApellidos2 = [
    document.getElementById('primerNombre2'),
    document.getElementById('segundoNombre2'),
    document.getElementById('primerApellido2'),
    document.getElementById('segundoApellido2')
];

let coincidencias = [];

function construirNombreCompleto(lista) {
    let partes = [];

    for (let i = 0; i < lista.length; i++) {
        let texto = lista[i].value.trim();
        if (texto !== "") {
            if (i >= 2) texto = texto.toUpperCase();
            partes.push(texto);
        }
    }

    return partes;
}

function buscarCoincidencias(lista1, lista2, inicio, fin, tipo) {

    for (let i = inicio; i <= fin; i++) {
        let item1 = lista1[i].value.trim().toLowerCase();

        for (let j = inicio; j <= fin; j++) {
            let item2 = lista2[j].value.trim().toLowerCase();

            if (item1 !== "" && item1 === item2) {

                let color = prompt(
                    `Coincidencia de ${tipo}: "${item1}".\n` +
                    `Ingrese color (red, blue, #FF0000, etc):`
                );

                coincidencias.push({
                    texto: item1,
                    color: color
                });
            }
        }
    }
}

function resaltar(textoArray) {

    return textoArray.map(palabra => {
        let palabraLower = palabra.toLowerCase();

        let coincidencia = coincidencias.find(c => c.texto === palabraLower);

        if (coincidencia) {
            return `<span style="color:${coincidencia.color}">${palabra}</span>`;
        }

        return palabra;

    }).join(" ");
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    coincidencias = [];

    let partes1 = construirNombreCompleto(nombresApellidos1);
    let partes2 = construirNombreCompleto(nombresApellidos2);

    buscarCoincidencias(nombresApellidos1, nombresApellidos2, 0, 1, "nombres");

    if (confirm("¿Desea buscar coincidencias entre apellidos?")) {
        buscarCoincidencias(nombresApellidos1, nombresApellidos2, 2, 3, "apellidos");
    }

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <h2>Resultados</h2>
        <p><strong>Integrante 1:</strong> ${resaltar(partes1)}</p>
        <p><strong>Integrante 2:</strong> ${resaltar(partes2)}</p>
    `;
});
