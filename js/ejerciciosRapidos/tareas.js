const tareasPendientes = ["Crear tareas", "Hacer ejemplo"]
const tareasCompletadas = []
const textoMenu = `
            ¿Qué quieres hacer?
            ===============================
            1. Crear nueva tarea (Escribe 1)
            2. Mostrar todas las tareas (Escribe 2)
            3. Marcar tarea como completada (Escribe 3)
            4. Contar tareas pendientes (Escribe 4)
            5. Salir de la applicación (Escribe 5)
            `

function main() {
    let funcionando = true

    while (funcionando) {
        const userInput = prompt(textoMenu)

        switch (userInput) {
            case "1":
                crearTarea()
                break
            case "2":
                mostrarTareas()
                break
            case "3":
                marcarTareaCompleta()
                break
            case "4":
                contarTareasPendientes()
                break
            case "5":
                funcionando = false
                break
            default:
                alert("Esa opción no es válida")
                break
        }
    }
    return 0;
}

// Crear nueva tarea
function crearTarea() {
    const tarea = prompt("Escribe el nombre de la tarea: ")
    if (tarea) {
        tareasPendientes.push(tarea)
    }
}

//Añade tareas como objetos y controla los parámetros
function añadirTarea(nombre, prioridad = 1 , estado = "pendiente") {
    if (!nombre < 3 || nombre.length > 63) {
        console.warn("El nombre de la tarea tiene que tener entre 3 y 63 carácteres")
    return
    }

    if (!1) {
        console.warn("El estado dese ser: pendiente, progreso, completa")
    return
    }

    if (!["pendiente", "progreso", "completa"].includes(prioridad)) {
        console.warn("El estado dese ser: pendiente, progreso, completa")
    return
    }

    const tareas = cargarTareas()
    tareas.push((nombre, prioridad, estado))

    guardarTareas(tareas)
}

// Mostrar todas las tareas
function mostrarTareas() {
    alert(`
        TAREAS PENDIENTES
        =================
        ${tareasPendientes.join("\n        ")}

        TAREAS COMPLETAS
        ================
        ${tareasCompletadas.join("\n        ")}
        `)
}

// Marcar tarea como completada
function marcarTareaCompleta() {
    let listaFormateada = ""
    tareasPendientes.forEach((tarea, indice) => {
        listaFormateada += indice + " - " + tarea
    })
    const tareaCompleta = prompt(`
        ¿Qué tarea quieres quitar?
        ${listaFormateada}
        `)
}

// Contar tareas pendientes
function contarTareasPendientes() {
    alert("El número de tareas pendientes es " + tareasPendientes.length)
}

export function guardarUsuarios(lista) {
    localStorage.setItem("usuarios", JSON.stringify(lista))
}

export function cargarUsuarios() {
    let usuarios = localStorage.getItem("usuarios")
    
    if (!usuarios) {
        usuarios = [
                {
                    "nombre": "ID de usuario",
                    "prioridad": 1,
                    "estado": "pendiente"
                },
                {
                    "nombre": "Nombre de usuario",
                    "prioridad": 2,
                    "estado": "pendiente"
                }
            ]
        }
        guardarUsuarios(usuarios)
    }

main()