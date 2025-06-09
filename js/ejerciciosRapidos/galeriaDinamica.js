function agregarImagen (){
    const galeria = document.getElementById('galeria');
    
    const nuevaImagen = document.createElement('img');

    const urlUsuario = document.getElementById("url-image")

    
    if (urlUsuario.value.trim() == "")
        alert("No hay nada")

    nuevaImagen.src = urlUsuario.value
    nuevaImagen.alt = "Una imagen de la galería"
    nuevaImagen.titke = "Galeria img 1"


    nuevoBoton.textContent = "Borrar imagen"
    nuevoBoton.addEventListener("click", () => contenedorImagen.remove())

    urlUsuario.value = ""

    contenedorImagen.append(nuevaImagen, nuevoBoton)
    galeria.append(contenedorImagen)

}