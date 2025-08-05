/*
06 - Crie uma lista com 10 números, e em seguida, crie um laço de repetição para varrer
todos os elementos da lista e armazenar os valores pares e os impares em uma nova lista
separada.
*/

const numeros = [3, 8, 12, 5, 7, 14, 19, 20, 21, 4];

const pares = [];
const impares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}

console.log("Números pares:", pares);
console.log("Números ímpares:", impares);


