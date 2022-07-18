class Usuario {
    constructor(nombre, apellido, edad, inversion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.inversion = inversion;
    }



}


const crearUsuario = () => {

    let usuariosExistentes = []

    let nombreUsuario = prompt("Ingrese nombre:");
    let apellidoUsuario = prompt("ingrese apellido:");
    let edadUsuario = parseInt(prompt("Ingrese edad:"));
    let inversionUsuario = parseInt(prompt("Ingrese su inversion:"));

    const usuario1 = new Usuario(nombreUsuario, apellidoUsuario, edadUsuario, inversionUsuario);

    return (usuario1);
    usuariosExistentes.push(usuario1);


    let verUsuario = prompt("Desea ver el usuario creado?:")
    if (verUsuario.toLowerCase == "si") {
        console.log(usuariosExistentes);
    } if (verUsuario.toLowerCase == "no") {
        prompt("Hasta luego!");
    }

}




let inversion = parseInt(prompt("Cuanto desea invertir?: "));

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

invest(inversion);



