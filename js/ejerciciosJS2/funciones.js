function calcularCalificacion(nota) {
    if (nota < 5) {
        console.log("Suspenso");

    } else if (nota >= 5 && nota < 7) {
        console.log("Aprobado");

    } else if (nota >= 7 && nota < 9) {
        console.log("Notable");

    } else {
        console.log("Sobresaliente");
    }
}

function juegoAdivinanza() { 
const numeroSecreto = Math.floor(Math.random() * 100) + 1; 
let intentos = 0; 
let adivinado = false; 

while (!adivinado) {
        let intento = parseInt(prompt("Adivina un número entre 1 y 100: "));
        intentos++;

        if (intento === numeroSecreto) {
            alert(`Has adivinado el número en ${intentos} intentos.`);
            adivinado = true;

        } else if (intento < numeroSecreto) {
            alert("Más alto");

        } else {
            alert("Más bajo");
        }
    }
}

function tablaMultiplicar(numero) {
    numero = parseInt(prompt("Introduce el número que quieres multiplicar: "))

    for (multiplo in range (-1, 10))
    multiplo = multiplo + 1
    console.log(`${numero} x ${multiplo} = ${numero * multiplo}`)
}
tablaMultiplicar(7);

function validarContrasena(password) { 
let puntos = 0;
    // Que mínimo haya 8 carácteres
    if (password.length >= 8) puntos++;

    // Que haya mínimo una mayúscula
    if (/[A-Z]/.test(password)) puntos++;

    // Un número como mínimo
    if (/\d/.test(password)) puntos++;

    // Un carácter especial como mínimo
    if (/[!@#$%^&*]/.test(password)) puntos++;

    switch (puntos) {
        case 1:
            console.log("Muy débil");
            break;
        case 2:
            console.log("Débil");
            break;
        case 3:
            console.log("Fuerte");
            break;
        case 4:
            console.log("Muy fuerte");
    }
}

