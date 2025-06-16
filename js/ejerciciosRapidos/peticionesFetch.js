fetch(url)
    .then(response => {
        console.log("Respuesta recibida", response);
        return response.json();
    })
    .then(data => {
        console.log("Datos del usuario", data)
        console.log("Nombre del usuario", data.nombre);
        console.log("Email", data.email);
    })
    .catch(error => {
        conosle.log("Error al obtenes los datos", error);
    });
    