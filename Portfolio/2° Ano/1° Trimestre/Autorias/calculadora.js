var valor1 = null;
var valor2 = null;
var operador = null;
var resultadoElement = document.getElementById("resultado");

function adicionarValor(valor) {
    if (operador == null) {
        if (valor1 == null) {
            valor1 = valor;
        } else {
            valor1 += valor;
        }
    } else {
        if (valor2 == null) {
            valor2 = valor;
        } else {
            valor2 += valor;
        }
    }
    atualizarResultado();
}

function adicionarDecimal() {
    if (operador == null) {
        if (valor1 == null) {
            valor1 = "0.";
        } else if (!valor1.includes(".")) {
            valor1 += ".";
        }
    } else {
        if (valor2 == null) {
            valor2 = "0.";
        } else if (!valor2.includes(".")) {
            valor2 += ".";
        }
    }
    atualizarResultado();
}

function adicionarOperador(novoOperador) {
    operador = novoOperador;
    atualizarResultado();
}

function limpar() {
    valor1 = null;
    valor2 = null;
    operador = null;
    atualizarResultado();
}

function calcular() {
    var resultado;
    switch (operador) {
        case "+":
            resultado = parseFloat(valor1)
