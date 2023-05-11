const doblar = (value) => {
    let numUno= document.getElementById('numUno').value;
    document.getElementById('resultado').textContent = parseFloat(numUno) * 2  ;
}

const mitad = (value) => {
    let numUno= document.getElementById('numUno').value;
    document.getElementById('resultado').textContent = parseFloat(numUno) / 2 ;
}