let inversion = parseInt(prompt("Cuanto desea invertir?: "));
if (inversion < 1000 && isNaN(inversion)) {
    alert("error, la inversion debe ser mayor a Mil");
} else {
    let intereses = parseInt(prompt("Interes anual?: "));
    if (intereses == 0) {
        alert("Error: El interes no puede ser cero");
    } else {
        let años = parseInt(prompt("Años?: "));

        for (i = 1; i <= años; i++) {
            inversion *= 1 + intereses / 100;
            alert("Capital tras " + i + " años $" + parseInt(inversion));
        }
    }
}