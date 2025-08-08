/*04 - Crie uma função chamada verificarNumero que receba um número como parâmetro e
retorne uma Promise. A Promise deverá:

● Ser resolvida se o número for positivo, com a mensagem: "Número válido:"
● Ser rejeitada se o número for negativo, com a mensagem: "Erro: número negativo não
é permitido"

Utilize o elementos .then() e .catch() para exibir o resultado da Promise no console.
*/

const verificarNumero = numero => {
    return new Promise((resolve, reject) => {
      if (numero >= 0) {
        resolve(`Número válido: ${numero}`);
      } else {
        reject('Erro: número negativo não é permitido');
      }
    });
  };
  
verificarNumero(10)
    .then(mensagem => console.log(mensagem))  
    .catch(erro => console.log(erro));
  
verificarNumero(-5)
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.log(erro));        
  