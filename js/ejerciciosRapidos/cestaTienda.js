function renderizarProducto() {
    const producto = {
        nombre: "nombre",
        stock: "stock",
        descripcion: "descripcion"

    };
    const fila = document.createElement("tr")
    const [colum1, colum2, colum3] = [
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
    ]
    const btnBorrar = document.createElement("span")
}

function crearProducto() {
    const inputUsuario = document.getElementById("nombreProducto");
    const stockUsuario = document.getElementById("stockProducto");
    const descripcionUsuario = document.getElementById("descripcionProducto");

    const nuevoProdcucto = {
        nombre: inputUsuario.value,
        stock: Number(stockUsuario.value),
        descripcion: descripcionUsuario.value,
    };

    if (nuevoProducto.nombre.length < 4 || nuevoProcducto.nombre.length > 20) {
        console.warn("El nombre del producto tiene que tener entre 4 y 20 carácteres");
    
    return;
    }

    if (stockUsuario <= 0) {
        console.warn("El producto no puede tener 0 de stock");
        return;
    }

        if (nuevoProducto.descripcion.length < 10 || nuevoProcducto.descripcion.length > 100) {
        console.warn("La descripción corta del producto tiene que estar entre los 10 y 100 carácteres");
    
    return;
    }

    guardarProducto(nuevoProducto);
}

function guardarProducto(producto) {
    const productos = cargarProducrtos();
}
