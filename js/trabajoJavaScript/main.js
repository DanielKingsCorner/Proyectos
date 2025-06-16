document.addEventListener("DOMContenidoCargado", () => {
    console.log("Página cargada completamente.");
});

document.getElementById("cargarPersonajes").addEventListener("click", async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) throw new Error("Error al obtener los personajes.");
        const data = await response.json();

        const container = document.getElementById("personajes");
        container.innerHTML = "";

        data.results.slice(0, 10).forEach(personaje => {
            const div = document.createElement("div");
            div.classList.add("personaje");

            div.innerHTML = `
                <h3>${personaje.name}</h3>
                <img src="${personaje.image}" alt="${personaje.name}" width = "100">
                <p>Status: ${personaje.status}</p>
                <p>Gender: ${personaje.gender}</p>
                <p>Species: ${personaje.species}</p>
            `;

            div.addEventListener("click", () => {
                div.classList.toggle("resaltar");
            });

            container.appendChild(div);
        });
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al obtener los datos.");
    }
});
