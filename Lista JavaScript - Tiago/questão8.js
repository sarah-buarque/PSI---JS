/*
08 - Crie uma função que recebe um array de números e retorne um novo array contendo
apenas os números maiores que 10.
*/

function filtrarMaiorQueDez(numeros) {
  return numeros.filter(function(numero) {
    return numero > 10;
  });
}

const arrayOriginal = [5, 12, 8, 21, 7, 15];
const resultado = filtrarMaiorQueDez(arrayOriginal);
console.log(resultado); 
