/****************************************************
 * Objetivo: Aplicar estruturas de repetição (while e for)
 * Data: 04/08/2022
 * Autor: Melissa Victória 
 * Versão: 1.0
 * ******************************************************/

console.log('Calcular uma tabuada simples');

const {calcularTabuada} = require('./modulos/tabuada.js');

//import da biblioteca de entrada de dados 
var readline = require('readline');

//Instancia o objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

entradaDados.question('Digite a tabuada a ser calculada: \n', function(numero) {
    let tabuada = numero;
    calcularTabuada(tabuada);
});