/*
05 - Crie uma função chamada consultarPaciente que receba um nome de paciente e retorne
uma Promise. A Promise deverá:

● Resolver com a mensagem: &quot;Consulta para [nome] agendada com sucesso.&quot;
● Rejeitar com a mensagem: &quot;Erro: nome do paciente não pode ser vazio.&quot; se o nome
for uma string vazia.

Em seguida, lembre-se de usar o .then() e .catch() para exibir a mensagem no console.
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
  
consultarPaciente('João')
    .then(mensagem => console.log(mensagem))  
    .catch(erro => console.log(erro));
  
  consultarPaciente('') 
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.log(erro));        
  