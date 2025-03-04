// Crea un numero aleatorio entre 0 y 10

let numeroAleatorio = Math.floor(Math.random() * 11)

// Pregunta al usuario cúal es el número que desea adivinar

let numeroUsuario = prompt("Ingresa un numero entre 0 y 10")

// Crea un contador de tres oportunidades
for (let contador = 0 ; contador < 3 ; contador ++){
    // Valida que el numero ingresado por el usuario sea igual al número aleatorio
    if (parseInt(numeroUsuario) === numeroAleatorio){
        // Genera un mensaje de feliitaciones si acierta al primer intento
        alert (`Acertaste el numero secreto era ${numeroAleatorio}`)
        break
        // valida que el contado se cumpla
    }else if (contador < 2){
        // Mensaje notificando que no acierta y vuelve a pedir un número
       alert(`No acertaste, ingresa otro numero, te quedan ${2-contador} oportunidades`)
       numeroUsuario = prompt("Ingresa un numero entre 0 y 10")
    }else{
        // Mensaje notificando cual era el número
        alert (`El número secreto era ${numeroAleatorio}`)
    }

}
