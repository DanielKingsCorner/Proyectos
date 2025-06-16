fetch(https://rickandmortyapi.com/)
    .then(response => {
        console.log("Respuesta recibida", response);
        return response.json();
    })