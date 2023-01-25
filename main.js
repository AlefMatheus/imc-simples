var btnCalcular = document.querySelector("#btnCalcular")
btnCalcular.addEventListener('click', calcularImc)

var btnLimpar = document.querySelector("#btnLimpar")
btnLimpar.addEventListener('click', limpar)

function calcularImc() {
    let Nome = document.querySelector("#inNome").value
    let Peso = parseFloat(document.querySelector("#inPeso").value)
    let Altura = parseFloat(document.querySelector("#inAltura").value)
    let saude

    imc = (Peso / Math.pow(Altura, 2)).toFixed(1)

    if (isNaN(imc)) {
        alert("digite valores validos");
        return;
    }

    if (imc < 18.5) {
        saude = "Abaixo do peso"
    }
    else if (imc > 18.6 && imc < 24.9) {
        saude = " Peso Ideal, Parabens!"
    }
    else if (imc > 25 && imc < 29.9) {
        saude = "Levemente acima do peso"
    }
    else if (imc > 30.0 && imc < 34.9) {
        saude = "Obesidade grau I"
    }
    else if (imc > 35 && imc < 39.9) {
        saude = "Obesidade grau II (severa)"
    } else {
        saude = "Obesidade grau III (mórbida), Procure um medico"
    }

    resultado = document.querySelector("#outResultado")
    resultado.classList.add("result")
    resultado.innerHTML = `<h6> <span class = "text-green">${Nome}</span>, seu peso é: <span class = "text-green">${Peso}kg</span> e sua altura é:
    <span class = "text-green">${Altura}m</span> portanto essa é sua situacao: <span class = "text-green">${saude}</span> </h6>`
    return
}

function limpar() {
    var Nome = document.querySelector("#inNome")
    var Peso = document.querySelector("#inPeso")
    var Alt = document.querySelector("#inAltura")
    resultado.classList.remove("result")
    resultado.innerHTML = ""
    Nome.value = ""
    Peso.value = ""
    Alt.value = ""
    return;
}