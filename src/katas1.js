
// Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
// se a sequencia for maior ou igual a 1 me retorne os numeros
function oneThroughTwenty() {
    let numeros=[]
    for (let sequencia=1; sequencia<=20; sequencia++){
        if(sequencia>=1){
            numeros.push(sequencia)
        }
    }    
    return numeros;
}

console.log(oneThroughTwenty())
  
// Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
// se numPar tiver o resultado 0 de uma divisão por 2, me mostre numeros pares
function evensToTwenty() {
    let pares =[];  
    for(let numPar=1; numPar<=20; numPar++){
        if((numPar%2)===0){
            pares.push(numPar)
        }
    }
    return pares;
}

console.log(evensToTwenty())

// Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
//se o resto da divisão ente um numero por 2 não for 0 me mostre um impar
function oddsToTwenty() {
    let impares =[];
    for(let numImpar=1; numImpar<=20; numImpar++){
        if(numImpar%2!==0){
            impares.push(numImpar)
        }
    }
    return impares;
}
console.log(oddsToTwenty())


// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive() {
    let multiplos=[];
    for(let valorMultiplos=0; valorMultiplos<=100; valorMultiplos++){
        if (valorMultiplos %5 ===0 && valorMultiplos <=100){
            multiplos.push(valorMultiplos)
        }
    
    }
    return multiplos

}
console.log(multiplesOfFive())

// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers(){
    let valorPerfeito=[]
    
    for(let NumPerf = 1; NumPerf <=100; NumPerf++){
        if 
        // (soma NumPerf * NumPerf)
        (Number.isInteger(Math.sqrt(NumPerf))){
            valorPerfeito.push(NumPerf)
        } 
    }
    return valorPerfeito;
} 
console.log(squareNumbers())

 
// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards() 
    {
        let numeros=[]
        for (let sequencia=20; sequencia>=1; sequencia--){
            if(sequencia>=1){
                numeros.push(sequencia)
            }
        }    
        return numeros;
    }
    
    console.log(countingBackwards()) 

    // Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function countingBackwards() {
    let pares =[];  
    for(let numPar=20; numPar>=1; numPar--){
        if((numPar%2)===0){
            pares.push(numPar)
        }
    }
    return pares;
}
console.log(countingBackwards())
    

    // Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards() {
    let impares =[];
    for(let numImpar=20; numImpar>=1; numImpar--){
        if(numImpar%2!==0){
            impares.push(numImpar)
        }
    }
    return impares;
}
console.log(oddNumbersBackwards())
    

    // Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards() {
    let multiplos=[];
    for(let valorMultiplos=100; valorMultiplos>=0; valorMultiplos--){
        if (valorMultiplos %5 ===0 && valorMultiplos >=0){
            multiplos.push(valorMultiplos)
        }
    
    }
    return multiplos

}
console.log(multiplesOfFiveBackwards())

// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)

function squareNumbersBackwards() {
    let valorPerfeito=[]
    
    for(let NumPerf = 100; NumPerf >=1; NumPerf--){
        if (Number.isInteger(Math.sqrt(NumPerf))){
            valorPerfeito.push(NumPerf)
        } 
    }
    return valorPerfeito;
} 
console.log(squareNumbersBackwards())
 




