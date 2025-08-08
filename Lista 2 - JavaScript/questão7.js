/*07 - Estarei agora passando para vocês uma função que já retorna uma Promise, para que na
sequência vocês utilizem o Async e Await.

Agora criem uma função async chamada checarAtendimento que receba a hora atual entre
0h e 23h, utilizem await para chamar a função verificarHorario e imprimam no console a
mensagem recebida.
Use um bloco try...catch para capturar e mostrar possíveis erros.*/

function verificarHorario(atualHora) {
    return new Promise((resolve, reject) => {
        if (typeof atualHora !== "number" || atualHora < 0 || atualHora > 23) {
            reject("Erro: hora inválida.");
        } else if (atualHora >= 8 && atualHora < 17) {
            resolve("Estamos abertos para atendimento.");
        } else {
            reject("Estamos fechados no momento.");
        }
    });
}

async function checarAtendimento(hora) {
    try {
        const mensagem = await verificarHorario(hora);
        console.log(mensagem);
    } catch (erro) {
        console.error(erro);
    }
}

checarAtendimento(10); 
checarAtendimento(20); 
checarAtendimento(30); 
