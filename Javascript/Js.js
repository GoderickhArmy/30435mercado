//Array------------------------------------

let usuariosExistentes = [];

//DATA-------------------------------------


let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido");
let edad = document.querySelector("#edad");
let inversion = document.querySelector("#inversion");
let lista = document.createElement("ul");
let mostrarUsuario = document.querySelector("#usuarios");
let boton = document.querySelector("#enviar");


//Class and constr--Arrowfuntion-------------------------

class Usuario {
    constructor(nombre, apellido, edad, inversion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.inversion = parseFloat(inversion);
    }
};

const crearUsuario = () => {
    const usuario1 = new Usuario(nombre.value, apellido.value, edad.value, inversion.value);
    usuariosExistentes.push(usuario1);
};


//EVENTO/DOM------------------------------------------------------------------------------

boton.addEventListener("click", elemento => {
    elemento.preventDefault();
    mostrarUsuario.innerHTML = " ";
    if (edad.value < 18) {
        mostrarUsuario.innerHTML = `<p class= "text-danger">Necesita ser mayor de edad!</p>`
    } else if (inversion.value == 0) {
        mostrarUsuario.innerHTML = `<p class= "text-danger"> Error, ingrese el monto a invertir!</p>`
    } else {
        crearUsuario()
        let anos = document.querySelector("#years");
        usuariosExistentes.forEach(elemento => {
            lista.innerHTML = 
            `<div class="containerServicios">
            <figure>
                <div class="capa">

                    <h3 class="h4tituloservicio">Ultima actualizacion</h3>

                    <li>Nombre: ${elemento.nombre}</li>
                    <li>Apellido: ${elemento.apellido}</li>
                    <li>Edad: ${elemento.edad}</li>
                    <li>Inversion: ${elemento.inversion}</li></p>

                    <img class="imgservicio" src="./img/dinero.jpg" alt="">
                    

            </div>
            </figure>
            </div> `
        });

        mostrarUsuario.appendChild(lista);


    }
});