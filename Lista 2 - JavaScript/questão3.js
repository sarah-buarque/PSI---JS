/*03 - Crie uma função chamada exibirMensagem que receba dois parâmetros: nome e uma
função de callback que gere a mensagem com base no nome. A função exibirMensagem
deve apenas chamar o callback passando o nome, e retornar o resultado da execução. Em
seguida, crie duas arrow functions como possíveis callbacks:

● mensagemDeBoasVindas: "Seja bem-vindo, [nome]!""
● mensagemDeDespedida: "Até logo, [nome]!"

*/

const exibirMensagem = (nome, callback) => {
    return callback(nome);
  };
  
const mensagemDeBoasVindas = nome => `Seja bem-vinda, ${nome}!`;
  
const mensagemDeDespedida = nome => `Até logo, ${nome}!`;
  
console.log(exibirMensagem('Sarah', mensagemDeBoasVindas)); 
console.log(exibirMensagem('Pedro', mensagemDeDespedida)); 
  