//Array vacio donde va a ir el usuario que se cree

let usuariosExistentes = [];

let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido");
let edad = document.querySelector("#edad");
let inversion = document.querySelector("#inversion");
let lista = document.createElement("ul");
let mostrarUsuario = document.querySelector("#usuarios");
let boton = document.querySelector("#enviar");
let butt = document.querySelector("#gananciaObtenida");
let gains = document.querySelector("#mostrarganancia");
let years = document.querySelector("#years");

//Class-constr-method-----------------------

class Usuario {
    constructor(nombre, apellido, edad, inversion, years) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.inversion = parseFloat(inversion);
        this.years = parseInt(years);
    }
    
// Lleva la ganancia del 50% al LocalStorage para ser mostrada mas adelante en un boton.

    calculoGanancia() {
        let resultadoGanancia = (this.inversion * 100 / 50) * this.years;
        localStorage.setItem("ganancia", JSON.stringify(resultadoGanancia));
        return resultadoGanancia;
    };

};
const crearUsuario = () => {
    const usuario1 = new Usuario(nombre.value, apellido.value, edad.value, inversion.value, years.value);
    usuariosExistentes.push(usuario1);
};

// Implementacion de sweet alert para las validaciones en el formulario
//En este caso utilice una funcion con sweet alert en donde me indica 
//que tengo que rellenar los campos.

function Alertasweet() {
    Swal.fire({
        icon: 'error',
        text: 'Campo vacio, por favor rellene los campos!',
    })
};



//Validaciones de formulario, en donde es obligatorio rellenar cada campo, 
//ser mayor de edad y tener una inversion arriba de 2000.



boton.addEventListener("click", elemento => {

    elemento.preventDefault();
    mostrarUsuario.innerHTML = " ";

    if (nombre.value == '' || apellido.value == '') {
        Alertasweet()
    }
    else if (edad.value == '') {
        Alertasweet()
    }
    else if (edad.value < 18) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Necesita ser mayor de edad!',
        })
    }
    else if (inversion.value == '') {
        Alertasweet()
    }
    else if (inversion.value < 2000) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La inversion tiene que ser mayor a 2000',
        })
    }
    else if (years.value == '') {
        Alertasweet()
    }
    else {
        crearUsuario()
        usuariosExistentes.forEach(elemento => {
            lista.innerHTML = `

            <div class="innerbox">
            <h3>Ultima actualizacion</h3>

            <ul>
            <li>Nombre: ${elemento.nombre}</li>
            <li>Apellido: ${elemento.apellido}</li>
            <li>Edad: ${elemento.edad}</li>
            <li>Inversion: ${elemento.inversion}</li>
            <li class="green">Ganancia: ${elemento.calculoGanancia()}</li>
            </ul>
            </div>`
        });

        mostrarUsuario.appendChild(lista);
    };
});

//Muestra la ganancia obtenida previamente almacenada en el Localstorage 
//al presionar el boton "ver ganancia obtenida"

function mostrar(e) {

    e.preventDefault()
    let mostrarGanancia = JSON.parse(localStorage.getItem("ganancia"));
    gains.innerHTML = `<div class="boxGains"><h5> Ganancia: ${mostrarGanancia}</h5></div>`;
    console.log(mostrarGanancia);
}


butt.addEventListener("click", mostrar);
