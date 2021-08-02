// Contador \/

let contadorE = document.getElementById('count') // criando a variavel com o valor no html #count
let contador = 0

function add() {
    contador = contador + 1
    contadorE.innerText = contador
}

function sub() {
    contador = contador - 1
    contadorE.innerText = contador
}

//       -空-