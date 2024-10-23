let pedidoEncomenda = async () => new Promise((resolve, reject) => {
  console.log('Iniciando o pedido');
  
  setTimeout(() => {
      let sucesso = true
      if (sucesso) {
          console.log('Pedido confirmado!');
          resolve('Pedido confirmado. Aguardando pagamento')
      } else {
          reject('Pedido não confirmado, erro no sistema')
      }
  }, 3000);
})

let pagamentoPedido = async (pedido) => new Promise((resolve, reject) => {
  console.log("Processando pagamento");

  setTimeout(() => {
    let sucesso = true;

    if (sucesso) {
      console.log('Pagamento aprovado com suesso');
      resolve("Pagamento feito com sucesso");
    }
    else reject("Erro na forma de pagamento, tente outro meio de pagamento");
  }, 5000);
});

const confirmacaoPedido = await pedidoEncomenda();
const ptgoAprovado = await pagamentoPedido(pedidoEncomenda);
console.log('Parabéns, pedido realizado com sucesso!');

