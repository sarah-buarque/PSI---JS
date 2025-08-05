/*
10 - Implemente uma função que recebe um callback e executa esse callback após 3
segundos, imprimindo uma mensagem antes e depois da execução.
*/

function executarComDelay(callback) {
  console.log("Antes da execução do callback...");
  setTimeout(() => {
    callback();
    console.log("Depois da execução do callback.");
  }, 3000);
}

executarComDelay(() => {
  console.log("Callback executado!");
});
