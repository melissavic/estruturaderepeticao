/****************************************************
 * Objetivo: Criaçao de funçoes para calcular uma tabuada
 * Data: 04/08/2022
 * Autor: Victória
 * Versão: 1.0
 * ******************************************************/

const calcularTabuada = function (numero1) {
    let tabuada = numero1; 
    let resultado; 
    let cont = 0; 



// while
  
    while(cont <= 10) {
        resultado = tabuada * cont;
        console.log(tabuada + 'x' + cont + ' = ' + resultado);
        // cont = cont +1;
        cont +=1;
      // cont++    
    }

//for 

 console.log('\n *************** Testando o For \n');
for(cont = 0; cont <=10; cont++) {
    
    resultado = tabuada * cont
    console.log(tabuada + 'x' + cont + ' = ' + resultado);


}

}

//Forçamos um teste: calcularTabuada(13);

module.exports = {
    calcularTabuada
}