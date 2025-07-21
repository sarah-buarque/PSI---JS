/*
1. Ao entrar no nosso site, os clientes precisarão ser bem recebidos. Como você faria
uma frase de “Bem-vindo” para o nosso estabelecimento online?
*/

console.log("Seja bem vindo(a) ao nosso site!")

/*
2. Cada parte da loja possui sua própria forma de texto. Preços, Nomes de Produtos,
Nomes dos Clientes, Se o produto está disponível. Tudo isso deve ser mostrado em
forma de variáveis. Escreva 3 tipos diferentes de variáveis que podem ser utilizadas
na loja.
*/

let Produto = "Arroz"
let Valor ="5.99"
let Disponibilidade="Fora de estoque no momento :("

console.log("Produto: " + Produto);
console.log("Preço: " + Valor);
console.log("Disponibilidade: " + Disponibilidade);

/*
3. Precisamos que descontos e outras fórmulas matemáticas funcionem perfeitamente no
nosso site, para que os clientes não sejam prejudicados com a diferença de preços da
loja física para a online. Crie 3 cálculos matemáticos diferentes.
*/

// 1. Cálculo de desconto em percentual
let precoOriginal = 100;  // Preço original do produto
let desconto = 20;        // Desconto de 20%
let precoComDesconto = precoOriginal - (precoOriginal * (desconto / 100));
console.log("Preço com desconto: R$" + precoComDesconto.toFixed(2));

// 2. Cálculo de frete (por exemplo, frete fixo de R$15,00)
let valorCompra = 120;     // Valor da compra
let frete = 15;            // Valor do frete
let totalCompra = valorCompra + frete;
console.log("Total da compra com frete: R$" + totalCompra.toFixed(2));

// 3. Cálculo de impostos (por exemplo, 10% de imposto sobre o valor da compra)
let imposto = 10;          // Imposto de 10%
let valorComImposto = valorCompra + (valorCompra * (imposto / 100));
console.log("Valor com imposto: R$" + valorComImposto.toFixed(2));

/*
4. A experiência em nossa loja deve ser única para cada cliente. Crie uma variável para o
nome de algum cliente e a inclua dentro da frase de boas-vindas que você fez
anteriormente.
*/

let nomeCliente = "Sarah";  // Nome do cliente

console.log("Seja bem-vindo(a), " + nomeCliente + " ao nosso site!");

/*
5. Para a organização de um carrinho de compras, pense que ele é uma lista. Na lista do
Carrinho de Compras, o cliente quer excluir algum item da lista, crie a lista com
possíveis itens da nossa loja a sua escolha. Escolha a posição de algum item de uma
lista qualquer e retorne ao cliente que ele excluiu aquele item do carrinho.
*/

// lista de itens no carrinho de compras
let carrinho = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"];

// item que será excluído
let itemExcluir = carrinho[4]; 

// item sendo removido da lista
carrinho.splice(4, 1);  

console.log(`Você excluiu o item: ${itemExcluir}. Atualização do carrinho: ${carrinho.join(", ")}`);

/*
6. Crie uma condição, onde, fazendo a comparação entre o preço de algum produto e a
quantidade de dinheiro que o cliente possui em sua carteira virtual, o código retorne
se a compra será efetuada ou não. Utilize duas variáveis para fazer a comparação.
*/

let precoProduto = 50.00;  
let carteiraVirtual = 40.00;

if (carteiraVirtual >= precoProduto) {
    console.log("Eba! Compra efetuada com sucesso! :)");
} else {
    console.log("Oops! Saldo insuficiente para realizar a compra.");
}

/*
7. Hora de focar no estoque. Queremos impor um limite de estocagem dentro da loja
online para que não tenha peças demais e pouca demanda. Crie um código de
repetição impondo um limite de peças na loja online, contando quantas peças tem por
vez.
*/

let limiteEstoque = 8;
let estoqueAtual = 0;

for (let i = 1; i <= 10; i++) {
    if (estoqueAtual < limiteEstoque) {
        estoqueAtual++;
        console.log(`Peça adicionada! Estoque atual: ${estoqueAtual}`);
    } else {
        console.log("Limite de estoque atingido! Não é possível adicionar mais peças.");
        break;
    }
}

/*
8. A coisa mais importante em um site é o quão rápido ele é para responder o cliente,
pois não podemos deixar várias linhas de código sendo repetidas ao longo do site, ou
ele pode ficar muito lento. Crie 2 funções de algum código das questões anteriores
para acelerar o processamento da loja online.
*/

// 1.
function calcularDesconto(precoOriginal, percentualDesconto) {
    let precoComDesconto = precoOriginal - (precoOriginal * (percentualDesconto / 100));
    return precoComDesconto.toFixed(2); 
}

let precoPProduto = 100;
let ddesconto = 20;
console.log(`Preço com desconto: R$ ${calcularDesconto(precoPProduto, ddesconto)}`);


// 2.
function adicionarAoEstoque(estoqueAtuall, limiteEstoquee, quantidadeAdicionar) {
    if (estoqueAtuall + quantidadeAdicionar <= limiteEstoquee) {
        estoqueAtuall += quantidadeAdicionar;  
        console.log(`Peças adicionadas! Estoque atual: ${estoqueAtuall}`);
    } else {
        console.log("Limite de estoque atingido! Não é possível adicionar mais peças.");
    }
    return estoqueAtuall;
}

let estoqueAtuall = 8;
let limiteEstoquee = 10;
estoqueAtuall = adicionarAoEstoque(estoqueAtuall, limiteEstoquee, 2); 
estoqueAtuall = adicionarAoEstoque(estoqueAtuall, limiteEstoquee, 3); 

/*
9. Precisamos que as informações de tudo na loja seja bem descrito, com cada coisa
tendo sua própria característica. Crie 2 objetos que possam ser usados dentro do site,
como produtos, clientes e até funcionários, e que tenham pelo menos 2 características,
cada.
*/

let produto = {
    nome: "Arroz",
    preco: 5.99,
    descricao: "Arroz tipo 1, pacote de 1kg",
    disponibilidade: "Em estoque",
};

console.log(`Produto: ${produto.nome}`);
console.log(`Preço: R$ ${produto.preco}`);
console.log(`Descrição: ${produto.descricao}`);
console.log(`Disponibilidade: ${produto.disponibilidade}`);

let cliente = {
    nome: "João",
    saldoCarteira: 50.00,
    email: "joao@exemplo.com",
    enderecoEntrega: "Rua das Flores, 123",
};

console.log(`Cliente: ${cliente.nome}`);
console.log(`Saldo na carteira: R$ ${cliente.saldoCarteira}`);
console.log(`Email: ${cliente.email}`);
console.log(`Endereço de entrega: ${cliente.enderecoEntrega}`);

/*
10. Por fim, precisamos organizar os pagamentos dos nossos produtos. Crie 2 funções,
uma para pagamento parcelado, e outra para pagamento com desconto. Faça com que,
no fim, exista um retorno sobre quanto ficará a compra do cliente (qual o preço de
cada parcela e qual o preço final após o desconto).
*/

// 1.
function pagamentoParcelado(precoTotal, numParcelas) {
    let valorParcela = precoTotal / numParcelas;
    return `O valor de cada parcela será: R$ ${valorParcela.toFixed(2)}. Total a pagar: R$ ${precoTotal.toFixed(2)}`;
}

let precoCompra = 600; 
let parcelas = 6;       
console.log(pagamentoParcelado(precoCompra, parcelas));

// 2.
function pagamentoComDesconto(precoTotal, percentualDesconto) {
    let desconto = precoTotal * (percentualDesconto / 100);
    let precoComDesconto = precoTotal - descontoo;
    return `Preço original: R$ ${precoTotal.toFixed(2)}. Desconto aplicado: R$ ${desconto.toFixed(2)}. Preço final com desconto: R$ ${precoComDesconto.toFixed(2)}`;
}

let precoCompraa = 600; 
let descontoo = 15;        
console.log(pagamentoComDesconto(precoCompraa, descontoo));
