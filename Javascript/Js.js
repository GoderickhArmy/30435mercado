let usuarioentrante = prompt("Desea calcular inversion? S/N: ");

if (usuarioentrante.toUpperCase() == 'S') {


    let inversion = parseInt(prompt("Cuanto desea invertir?: "));

    invest(inversion);

}

function invest(inversion) {

    if (inversion < 1000 || isNaN(inversion)) {
        alert("Error, la inversion debe ser mayor a Mil");
    } else {
        let intereses = parseFloat(prompt("Interes anual?: "));
        if (intereses == 0) {
            alert("Error: El interes no puede ser cero");
        } else {
            let años = parseInt(prompt("Años?: "));

            for (let i = 1; i <= años; i++) {
                inversion += 1 + intereses / 100;
                alert("Capital tras " + i + " años $" + parseInt(inversion));
            }
        }

    }
}


class Usuario {
    constructor(nombre, apellido, edad, inversion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.inversion = inversion;
    }

}

const crearUsuario = () => {

    let nombreUsuario = prompt("Ingrese nombre:");
    let apellidoUsuario = prompt("Ingrese apellido:");
    let edadUsuario = parseInt(prompt("Ingrese edad:"));
    let inversionUsuario = parseInt(prompt("Ingrese su inversion:"));

    const usuario1 = new Usuario(nombreUsuario, apellidoUsuario, edadUsuario, inversionUsuario);

    usuariosExistentes.push(usuario1);

}

let usuariosExistentes = [];

let decisionUsuario = prompt("Desea crear un usuario? S/N");

if (decisionUsuario.toUpperCase() == 'S') {
    crearUsuario();
}


let verUsuario = prompt("Desea ver el usuario creado? S/N:")
if (verUsuario.toUpperCase() == 'S') {
    console.log("Usuarios:");
    usuariosExistentes.forEach(elemento => console.log(`Nombre:${elemento.nombre}\nApellido:${elemento.apellido}\nEdad:${elemento.edad}\nInversion:${elemento.inversion}`));
} if (verUsuario.toUpperCase() == 'N') {
    alert("Hasta luego!");
}
