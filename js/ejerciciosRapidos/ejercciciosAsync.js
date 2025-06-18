//Ejemplo de ejercicio sin async y await
const datos = await fetch("https://rickandmortyapi.com/api/")
    .then(resultado => resultado.json())
    .then((datos) => datos);

console.log(datos)

//Con async y await
async function obtenerCita() {
    const respuesta = await fetch("https://api.quotable.io/random")
    const data = await resultado.json();
    return data;
}

//Gestion errores con async y await
async function obtenerClima(ciudad) {
    const btnCargar = document.getElementById("btnCargar")
    try {
        const response = await fetch(`https://api.openweathermao.org/data/2.5/weather?q0${ciudad}`)

    if (!response.ok)
        throw new Error(`${response.status} : ${response.statusText} `);



    } catch (error) {}
    const datos = await response.json();
    document.getElementById(`temperatura`).textContent = datos.main.temp;
}
