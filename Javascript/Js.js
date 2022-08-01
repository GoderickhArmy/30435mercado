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
        usuariosExistentes.forEach(elemento => {
            lista.innerHTML =
                `<div class="containerServicios">
            <div class="figure">
                <div class="capa">

                    <h3 class="h4tituloservicio">Ultima actualizacion</h3>

                    <ul>
                    <li>Nombre: ${elemento.nombre}</li>
                    <li>Apellido: ${elemento.apellido}</li>
                    <li>Edad: ${elemento.edad}</li>
                    <li>Inversion: ${elemento.inversion}</li>
                    <li class="green">Ganancia: ${elemento.calculoGanancia()}</li>
                    </ul>
                    <img class="imgservicio" src="./img/dinero.jpg" alt="">
                    

            </div>
            </div>
            </div> `
        });

        mostrarUsuario.appendChild(lista);
    };
});

//GANANCIA OBTENIDA (BOTON)

function mostrar(e){
    e.preventDefault()
    let mostrarGanancia = JSON.parse(localStorage.getItem("ganancia"));
    gains.innerHTML = `<h5> Ganancia: ${mostrarGanancia}</h5>`;
    console.log(mostrarGanancia);
}


butt.addEventListener("click", mostrar);
