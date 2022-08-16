//Array vacio donde va a ir el usuario que se cree

let usuariosExistentes = [];

let indice; 
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
let nivel = document.querySelector("#nivelInversion");
let mostrarNiveles = document.querySelector("#mostrarNiveles");
let nivelesMostrados = document.querySelector("#nivelesMostrados");


// Niveles de inversion

const infoArray = [{

    nombre: "Nivel 1: 5%",
    indice: 5,
},{
    nombre: "Nivel 2: 10%",
    indice: 10,
},{
    nombre: "Nivel 3: 15%",
    indice: 15,
}];


infoArray.forEach(elemento => {
    nivel.innerHTML += `<option value="${elemento.indice}" id="${elemento.nombre}">${elemento.nombre}</option>
`   
});



//Class-constr-method-----------------------

class Usuario {
    constructor(nombre, apellido, edad, inversion, years) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.inversion = parseFloat(inversion);
        this.years = parseInt(years);
    };
    


    // Lleva la ganancia del 50% al LocalStorage para ser mostrada mas adelante en un boton.

    calculoGanancia(indice) {
        let resultadoGanancia = (this.inversion * indice / 100) * this.years;
        localStorage.setItem("ganancia", JSON.stringify(resultadoGanancia));
        return resultadoGanancia;
    };

};
const crearUsuario = () => {
    const usuario1 = new Usuario(nombre.value, apellido.value, edad.value, inversion.value, years.value);
    usuariosExistentes.push(usuario1);
    return(usuario1);
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
        let res = crearUsuario()
        console.log(res);
            lista.innerHTML = `

            <div class="innerbox">
            <h3>Ultima actualizacion</h3>

            <ul>
            <li>Nombre: ${res.nombre}</li>
            <li>Apellido: ${res.apellido}</li>
            <li>Edad: ${res.edad}</li>
            <li>Inversion: ${res.inversion}</li>
            <li class="green">Ganancia: ${res.calculoGanancia(nivel.value)}</li>
            </ul>
            </div>`

        mostrarUsuario.appendChild(lista);
    };
});

//Muestra la ganancia obtenida previamente almacenada en el Localstorage 
//al presionar el boton "ver ganancia obtenida"

function mostrar(e) {

    e.preventDefault();
    let mostrarGanancia = JSON.parse(localStorage.getItem("ganancia"));
    gains.innerHTML = `<div class="boxGains"><h5> Ganancia: ${mostrarGanancia}</h5></div>`;

};


butt.addEventListener("click", mostrar);


//Funcion que dentro tiene los datos previamente cargados de forma local 
//y mostrados mediante un boton en el html.

function showme(e){
e.preventDefault();

fetch("../data.json")

    .then(res =>res.json())
    .then(dato=> dato.forEach (e=> { 
        nivelesMostrados.innerHTML +=`
                    <ul>
                    <li>Nombre: ${e.nombre}</li>
                    <li>índice: ${e.indice}</li>
                    <li>Inversión Mínima: ${e.inversionMinima}</li>
                    </ul>`
}));
};

mostrarNiveles.addEventListener("click", showme);