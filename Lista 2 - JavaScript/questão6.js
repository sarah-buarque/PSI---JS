/*06 - Reaproveite a função consultarPaciente da questão anterior que retornava uma Promise.
Agora, crie uma função async chamada agendarConsulta que receba o nome do paciente, e
chame a função consultarPaciente usando await e imprima a mensagem retornada no

console. Uma observação importante é que para esse caso inclua um bloco try...catch para
capturar e mostrar possíveis erros.
*/

const consultarPaciente = nome => {
    return new Promise((resolve, reject) => {
      if (nome.trim() !== '') {
        resolve(`Consulta para ${nome} agendada com sucesso.`);
      } else {
        reject('Erro: nome do paciente não pode ser vazio.');
      }
    });
  };
  
const agendarConsulta = async nome => {
    try {
      const mensagem = await consultarPaciente(nome);
      console.log(mensagem);
    } catch (erro) {
      console.log(erro);
    }
  };
  
agendarConsulta('Maria');  
agendarConsulta('');      
  