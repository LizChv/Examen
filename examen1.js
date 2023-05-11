const Suma = (value) => {
    let numUno= document.getElementById('numUno').value;
    let numDos= document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = parseFloat(numUno) + parseFloat(numDos)  ;
}

const Resta = (value) => {
    let numUno= document.getElementById('numUno').value;
    let numDos= document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = parseFloat(numUno) - parseFloat(numDos)  ;
}
const Multiplicacion = (value) => {
    let numUno= document.getElementById('numUno').value;
    let numDos= document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = parseFloat(numUno) * parseFloat(numDos)  ;
}

const Division = (value) => {
    let numUno= document.getElementById('numUno').value;
    let numDos= document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = parseFloat(numUno) / parseFloat(numDos)  ;
}